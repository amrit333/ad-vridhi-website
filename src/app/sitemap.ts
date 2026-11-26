import type { MetadataRoute } from "next";
import { BLOG_POSTS, SERVICES, SITE_INFO } from "@/data/site-data";

export default function sitemap(): MetadataRoute.Sitemap {
  const base = SITE_INFO.siteUrl;
  const now = new Date();

  const staticRoutes = ["", "/about", "/services", "/works", "/blog", "/contact"].map(
    (route) => ({
      url: `${base}${route}`,
      lastModified: now,
      changeFrequency: "weekly" as const,
      priority: route === "" ? 1 : 0.85,
    })
  );

  const serviceRoutes = SERVICES.map((srv) => ({
    url: `${base}/services/${srv.slug}`,
    lastModified: now,
    changeFrequency: "monthly" as const,
    priority: 0.8,
  }));

  const blogRoutes = BLOG_POSTS.map((post) => ({
    url: `${base}/blog/${post.slug}`,
    lastModified: new Date(post.publishedAt),
    changeFrequency: "monthly" as const,
    priority: 0.7,
  }));

  return [...staticRoutes, ...serviceRoutes, ...blogRoutes];
}
