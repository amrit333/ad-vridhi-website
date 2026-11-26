import type { Metadata } from "next";
import "@fontsource/manrope/400.css";
import "@fontsource/manrope/500.css";
import "@fontsource/manrope/600.css";
import "@fontsource/manrope/700.css";
import "@fontsource/plus-jakarta-sans/600.css";
import "@fontsource/plus-jakarta-sans/700.css";
import "@fontsource/plus-jakarta-sans/800.css";
import "@fontsource/poppins/600.css";
import "@fontsource/poppins/700.css";
import "@fontsource/inter/400.css";
import "@fontsource/inter/500.css";
import "@fontsource/inter/600.css";
import "./globals.css";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { OrganizationJsonLd } from "@/components/JsonLd";
import { AnalyticsScripts } from "@/components/AnalyticsScripts";
import { SITE_INFO } from "@/data/site-data";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_INFO.siteUrl),
  title: {
    default: "Ad-Vridhi | Creative Digital Marketing, Web Development & AI Agency",
    template: "%s | Ad-Vridhi",
  },
  description:
    "Ad-Vridhi creates creative digital experiences, executes performance-driven Meta & Google marketing, builds websites, and automates growth funnels across Noida, Delhi NCR, and India.",
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    locale: "en_IN",
    url: SITE_INFO.siteUrl,
    siteName: SITE_INFO.brandName,
    title: "Ad-Vridhi | Creative Digital Marketing, Web Development & AI Agency",
    description: SITE_INFO.positioning,
    images: [
      {
        url: "/assets/ad-vridhi-logo.jpg",
        width: 1024,
        height: 1024,
        alt: "Ad-Vridhi Official Logo",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Ad-Vridhi | Creative Digital Marketing, Web Development & AI Agency",
    description: SITE_INFO.positioning,
    images: ["/assets/ad-vridhi-logo.jpg"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="min-h-screen bg-white font-sans text-brand-ink antialiased">
        <OrganizationJsonLd />
        <AnalyticsScripts />
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
