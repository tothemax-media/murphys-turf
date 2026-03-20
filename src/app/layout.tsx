import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { GoogleAnalytics } from "@/components/analytics/GoogleAnalytics";
import { GTMHead, GTMBody } from "@/components/analytics/GoogleTagManager";
import { HeatmapScript } from "@/components/analytics/HeatmapScript";
import { CookieConsent } from "@/components/analytics/CookieConsent";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Murphy's Turf",
  description: "Premium artificial grass installation services",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <head>
        <GoogleAnalytics />
        <GTMHead />
        <HeatmapScript />
      </head>
      <body className="min-h-full flex flex-col">
        <GTMBody />
        {children}
        <CookieConsent />
      </body>
    </html>
  );
}
