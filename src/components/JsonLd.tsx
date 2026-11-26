import React from "react";
import { SITE_INFO } from "@/data/site-data";

export function OrganizationJsonLd() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "ProfessionalService",
    name: SITE_INFO.brandName,
    url: SITE_INFO.siteUrl,
    logo: `${SITE_INFO.siteUrl}/assets/ad-vridhi-logo.jpg`,
    description: SITE_INFO.positioning,
    founder: {
      "@type": "Person",
      name: SITE_INFO.founder.name,
      jobTitle: SITE_INFO.founder.role,
    },
    address: {
      "@type": "PostalAddress",
      addressLocality: "Noida",
      addressRegion: "Uttar Pradesh",
      addressCountry: "IN",
    },
    areaServed: ["Noida", "Delhi NCR", "India"],
    email: SITE_INFO.founder.email,
    telephone: `+91-${SITE_INFO.founder.phoneRaw}`,
    sameAs: [SITE_INFO.founder.linkedinUrl, SITE_INFO.founder.youtubeUrl],
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}

export function ServiceJsonLd({
  name,
  description,
  url,
}: {
  name: string;
  description: string;
  url: string;
}) {
  const schema = {
    "@context": "https://schema.org",
    "@type": "Service",
    serviceType: name,
    description,
    url,
    provider: {
      "@type": "Organization",
      name: SITE_INFO.brandName,
      url: SITE_INFO.siteUrl,
    },
    areaServed: ["Noida", "Delhi NCR", "India"],
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}

export function BreadcrumbJsonLd({
  items,
}: {
  items: { name: string; item: string }[];
}) {
  const schema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((entry, idx) => ({
      "@type": "ListItem",
      position: idx + 1,
      name: entry.name,
      item: entry.item,
    })),
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}
