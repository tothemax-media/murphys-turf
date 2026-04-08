#!/usr/bin/env node
/**
 * Generate LLM SEO files:
 *  - public/llms.txt           (llmstxt.org spec: curated site index)
 *  - public/llms-full.txt      (concatenated full content)
 *  - public/blog/{slug}.md     (per-post clean markdown)
 *
 * Runs as a prebuild hook so content stays in sync.
 */
import { readFileSync, writeFileSync, mkdirSync, existsSync } from "node:fs";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";

const __dirname = dirname(fileURLToPath(import.meta.url));
const ROOT = join(__dirname, "..");
const PUBLIC = join(ROOT, "public");
const BLOG_DIR = join(PUBLIC, "blog");

const SITE_URL = "https://rangeljanitorial.com";
const COMPANY_NAME = "Rangel Janitorial";
const COMPANY_DESCRIPTION =
  "Professional janitorial and commercial cleaning services across California. Rangel Janitorial delivers reliable, thorough cleaning for offices, medical facilities, industrial parks, fitness centers, and multi-unit complexes. Serving Sacramento, Murrieta, and Walnut Creek.";

// ---------------------------------------------------------------------------
// Parse constants
// ---------------------------------------------------------------------------
const constantsSrc = readFileSync(
  join(ROOT, "src/lib/seo/constants.ts"),
  "utf8"
);

function extractStringArray(name) {
  const re = new RegExp(`${name}\\s*=\\s*\\[([\\s\\S]*?)\\]`);
  const m = constantsSrc.match(re);
  if (!m) throw new Error(`Could not find ${name} in constants.ts`);
  return [...m[1].matchAll(/["']([^"']+)["']/g)].map((x) => x[1]);
}

const BLOG_SLUGS = extractStringArray("BLOG_SLUGS");
const SERVICE_SLUGS = extractStringArray("SERVICE_SLUGS");
const LOCATION_SLUGS = extractStringArray("LOCATION_SLUGS");

// ---------------------------------------------------------------------------
// Parse blog posts from page.tsx
// ---------------------------------------------------------------------------
const blogPageSrc = readFileSync(
  join(ROOT, "src/app/blog/[slug]/page.tsx"),
  "utf8"
);

function extractPost(slug) {
  // Find the opening of this post block
  const startRe = new RegExp(`'${slug.replace(/[-\/]/g, "\\$&")}':\\s*\\{`);
  const startMatch = blogPageSrc.match(startRe);
  if (!startMatch) {
    console.warn(`  ! Could not find post block: ${slug}`);
    return null;
  }
  const start = startMatch.index + startMatch[0].length;

  // Walk balanced braces, respecting strings and template literals
  let depth = 1;
  let i = start;
  let inStr = null; // null | '"' | "'" | "`"
  let escape = false;
  while (i < blogPageSrc.length && depth > 0) {
    const c = blogPageSrc[i];
    if (escape) {
      escape = false;
    } else if (inStr) {
      if (c === "\\") escape = true;
      else if (c === inStr) inStr = null;
    } else {
      if (c === '"' || c === "'" || c === "`") inStr = c;
      else if (c === "{") depth++;
      else if (c === "}") depth--;
    }
    i++;
  }
  const block = blogPageSrc.slice(start, i - 1);

  const field = (name) => {
    const re = new RegExp(
      `${name}:\\s*(?:'([^'\\n]*(?:\\\\'[^'\\n]*)*)'|"([^"\\n]*(?:\\\\"[^"\\n]*)*)")`
    );
    const m = block.match(re);
    if (!m) return "";
    return (m[1] || m[2] || "").replace(/\\'/g, "'").replace(/\\"/g, '"');
  };

  // metaDescription may wrap onto next line
  const metaRe =
    /metaDescription:\s*\n?\s*['"]([\s\S]*?)['"],\s*\n\s*category/;
  const metaMatch = block.match(metaRe);
  const metaDescription = metaMatch
    ? metaMatch[1].replace(/\s+/g, " ").trim()
    : field("metaDescription");

  // content is a template literal
  const contentMatch = block.match(/content:\s*`([\s\S]*?)`,\s*\n\s*relatedSlugs/);
  const content = contentMatch ? contentMatch[1] : "";

  return {
    slug,
    title: field("title"),
    metaDescription,
    category: field("category"),
    publishDate: field("publishDate"),
    readingTime: field("readingTime"),
    content,
  };
}

// ---------------------------------------------------------------------------
// HTML → Markdown (minimal, targeted at the blog post content shape)
// ---------------------------------------------------------------------------
function htmlToMarkdown(html) {
  let md = html;
  // Strip class/id attributes to simplify regex
  md = md.replace(/\sclass="[^"]*"/g, "");
  md = md.replace(/\sid="[^"]*"/g, "");
  // Headings
  md = md.replace(/<h1[^>]*>([\s\S]*?)<\/h1>/g, "\n# $1\n");
  md = md.replace(/<h2[^>]*>([\s\S]*?)<\/h2>/g, "\n## $1\n");
  md = md.replace(/<h3[^>]*>([\s\S]*?)<\/h3>/g, "\n### $1\n");
  md = md.replace(/<h4[^>]*>([\s\S]*?)<\/h4>/g, "\n#### $1\n");
  // Links
  md = md.replace(
    /<a[^>]*href="([^"]+)"[^>]*>([\s\S]*?)<\/a>/g,
    (_, href, text) => {
      const abs = href.startsWith("http") ? href : `${SITE_URL}${href}`;
      return `[${text.trim()}](${abs})`;
    }
  );
  // Paragraphs
  md = md.replace(/<p[^>]*>([\s\S]*?)<\/p>/g, "\n$1\n");
  // Lists
  md = md.replace(/<ul[^>]*>/g, "\n");
  md = md.replace(/<\/ul>/g, "\n");
  md = md.replace(/<ol[^>]*>/g, "\n");
  md = md.replace(/<\/ol>/g, "\n");
  md = md.replace(/<li[^>]*>([\s\S]*?)<\/li>/g, "- $1\n");
  // Strong / em
  md = md.replace(/<(strong|b)[^>]*>([\s\S]*?)<\/\1>/g, "**$2**");
  md = md.replace(/<(em|i)[^>]*>([\s\S]*?)<\/\1>/g, "*$2*");
  // Line breaks
  md = md.replace(/<br\s*\/?>/g, "\n");
  // Strip remaining tags
  md = md.replace(/<[^>]+>/g, "");
  // Entities
  md = md
    .replace(/&nbsp;/g, " ")
    .replace(/&amp;/g, "&")
    .replace(/&lt;/g, "<")
    .replace(/&gt;/g, ">")
    .replace(/&#39;/g, "'")
    .replace(/&quot;/g, '"')
    .replace(/&mdash;/g, "—")
    .replace(/&ndash;/g, "–");
  // Collapse whitespace
  md = md.replace(/[ \t]+/g, " ");
  md = md.replace(/\n{3,}/g, "\n\n");
  return md.trim();
}

// ---------------------------------------------------------------------------
// Build posts
// ---------------------------------------------------------------------------
console.log(`[llm-files] Parsing ${BLOG_SLUGS.length} blog posts...`);
const posts = BLOG_SLUGS.map(extractPost).filter(Boolean);
console.log(`[llm-files] Extracted ${posts.length} posts`);

if (!existsSync(BLOG_DIR)) mkdirSync(BLOG_DIR, { recursive: true });

// Per-post .md mirrors
for (const p of posts) {
  const md = `# ${p.title}

> ${p.metaDescription}

**Category:** ${p.category}
**Published:** ${p.publishDate}
**Reading time:** ${p.readingTime}
**Source:** ${SITE_URL}/blog/${p.slug}

---

${htmlToMarkdown(p.content)}

---

*Published by ${COMPANY_NAME} — ${COMPANY_DESCRIPTION}*
*Read the original: ${SITE_URL}/blog/${p.slug}*
`;
  writeFileSync(join(BLOG_DIR, `${p.slug}.md`), md, "utf8");
}
console.log(`[llm-files] Wrote ${posts.length} per-post .md files`);

// ---------------------------------------------------------------------------
// llms.txt — curated index
// ---------------------------------------------------------------------------
const serviceLabels = {
  "janitorial-cleaning": "Janitorial Cleaning — nightly commercial cleaning for offices and facilities",
  "day-porter": "Day Porter Services — on-site cleaning during business hours",
  "electrostatic-disinfection": "Electrostatic Disinfection — hospital-grade pathogen control",
  "floor-care": "Floor Care — VCT strip & wax, burnishing, polish, hard-surface maintenance",
  "carpet-cleaning": "Carpet Cleaning — commercial hot water extraction and stain treatment",
};

const locationLabels = {
  sacramento: "Sacramento — Greater Sacramento, Elk Grove, Roseville, Folsom, Rancho Cordova",
  murrieta: "Murrieta — Inland Empire, Temecula, Menifee, Lake Elsinore, Hemet, Corona",
  "walnut-creek": "Walnut Creek — East Bay, Concord, Pleasant Hill, Danville, San Ramon, Livermore",
};

const llmsTxt = `# ${COMPANY_NAME}

> ${COMPANY_DESCRIPTION}

${COMPANY_NAME} has served California businesses for 30+ years with reliable commercial cleaning. We specialize in offices, medical facilities, industrial parks, fitness centers, Class A buildings, and multi-tenant complexes. Headquartered in Murrieta, CA, with regional teams serving Sacramento, the Inland Empire, and the East Bay.

## Key Facts

- **Company:** ${COMPANY_NAME}
- **Website:** ${SITE_URL}
- **Headquarters:** 26323 Jefferson Avenue, Murrieta, CA 92562
- **Founded:** 30+ years ago (family-operated)
- **Email:** ralph@rangeljanitorial.com
- **Phones:** Sacramento (916) 426-2311 · Murrieta (951) 331-3300 · Walnut Creek (925) 655-9008
- **Service area:** California — Sacramento, Inland Empire, East Bay
- **Business hours:** Mon-Fri 7am-6pm, Sat 8am-4pm
- **Certifications:** Licensed, bonded, insured; OSHA-trained crews

## Services

${SERVICE_SLUGS.map(
  (slug) => `- [${serviceLabels[slug] || slug}](${SITE_URL}/services/${slug}) — ${SITE_URL}/services/${slug}`
).join("\n")}

## Service Locations

${LOCATION_SLUGS.map(
  (slug) => `- [${locationLabels[slug] || slug}](${SITE_URL}/locations/${slug}) — ${SITE_URL}/locations/${slug}`
).join("\n")}

## Blog — Cleaning Guides & Industry Insights

${posts
  .map(
    (p) =>
      `- [${p.title}](${SITE_URL}/blog/${p.slug}.md): ${p.metaDescription}`
  )
  .join("\n")}

## Facility Types Served

- Class A office buildings and corporate campuses
- Medical and dental facilities (OSHA, HIPAA-aware protocols)
- Industrial parks and light manufacturing
- Fitness centers and gyms
- Multi-tenant complexes and HOAs
- Municipalities and public facilities
- Retail spaces and showrooms

## Cleaning Specialties

- Nightly janitorial (5x, 3x, 2x weekly schedules)
- Day porter and lobby ambassador programs
- Electrostatic disinfection and infection control
- VCT strip & wax, floor burnishing, hard-surface restoration
- Commercial carpet extraction and spot treatment
- Green cleaning with EPA Safer Choice products
- Post-construction and one-time deep cleans

## Why Businesses Choose ${COMPANY_NAME}

- 30+ years of commercial cleaning experience across California
- Family-operated with consistent, trained crews (low turnover)
- Customized cleaning plans — no one-size-fits-all contracts
- Local account managers in each service region
- Fully licensed, bonded, and insured
- Green cleaning products and sustainable practices available
- Reliable communication and quality-control walkthroughs

## Optional

- [Full blog content (all posts concatenated)](${SITE_URL}/llms-full.txt)
- [Sitemap](${SITE_URL}/sitemap.xml)
- [Privacy Policy](${SITE_URL}/privacy-policy)
- [Terms of Service](${SITE_URL}/terms-of-service)
`;

writeFileSync(join(PUBLIC, "llms.txt"), llmsTxt, "utf8");
console.log(`[llm-files] Wrote llms.txt (${llmsTxt.length} chars)`);

// ---------------------------------------------------------------------------
// llms-full.txt — all posts concatenated
// ---------------------------------------------------------------------------
const llmsFullTxt = `# ${COMPANY_NAME} — Complete Content

> ${COMPANY_DESCRIPTION}

Source: ${SITE_URL}
Generated: ${new Date().toISOString().split("T")[0]}

This file contains the full text of every blog post on ${SITE_URL} in a single document for LLM ingestion.

---

${posts
  .map(
    (p) => `
# ${p.title}

**URL:** ${SITE_URL}/blog/${p.slug}
**Category:** ${p.category}
**Published:** ${p.publishDate}
**Reading time:** ${p.readingTime}

> ${p.metaDescription}

${htmlToMarkdown(p.content)}

---
`
  )
  .join("\n")}

## About ${COMPANY_NAME}

${COMPANY_DESCRIPTION}

- **Website:** ${SITE_URL}
- **Headquarters:** 26323 Jefferson Avenue, Murrieta, CA 92562
- **Sacramento:** (916) 426-2311
- **Murrieta / Inland Empire:** (951) 331-3300
- **Walnut Creek / East Bay:** (925) 655-9008
- **Email:** ralph@rangeljanitorial.com

Services: ${SERVICE_SLUGS.join(", ")}
Locations: ${LOCATION_SLUGS.join(", ")}
`;

writeFileSync(join(PUBLIC, "llms-full.txt"), llmsFullTxt, "utf8");
console.log(
  `[llm-files] Wrote llms-full.txt (${llmsFullTxt.length} chars)`
);
console.log(`[llm-files] Done.`);
