import type { MetadataRoute } from "next";
import { SITE_INFO } from "@/data/site-data";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: "*",
      allow: "/",
      disallow: ["/api/"],
    },
    sitemap: `${SITE_INFO.siteUrl}/sitemap.xml`,
  };
}
