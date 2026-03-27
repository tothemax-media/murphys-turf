import type { MetadataRoute } from "next";

export const dynamic = "force-static";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "Rangel Janitorial",
    short_name: "Rangel Janitorial",
    description:
      "Professional janitorial and commercial cleaning services across California. 30+ years experience. Creating Excellent First Impressions.",
    start_url: "/",
    display: "standalone",
    background_color: "#ffffff",
    theme_color: "#2D5016",
    icons: [
      {
        src: "/favicon.ico",
        sizes: "any",
        type: "image/x-icon",
      },
    ],
  };
}
