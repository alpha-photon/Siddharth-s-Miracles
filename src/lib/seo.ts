/**
 * Central SEO config and schema helpers.
 * Use VITE_SITE_URL in .env (e.g. https://siddharthsmiracles.com) for canonical and OG URLs.
 */
export const SITE_NAME = "Siddharth's Miracles School";
export const SITE_DESCRIPTION =
  "Quality education from Nursery to Std 10 following GSEB curriculum. English medium school in Gandhinagar. Where Each Day is a Miracle.";
export const SITE_URL =
  (typeof import.meta !== "undefined" && (import.meta as unknown as { env?: { VITE_SITE_URL?: string } }).env?.VITE_SITE_URL) ||
  (typeof window !== "undefined" ? window.location.origin : "https://siddharthsmiracles.com");

export const DEFAULT_OG_IMAGE = `${SITE_URL}/school-logo.png`;

export interface PageSeo {
  title: string;
  description: string;
  /** Path only, e.g. /about. Canonical will be SITE_URL + path */
  path: string;
  /** Optional OG/Twitter image URL (absolute) */
  image?: string;
  noindex?: boolean;
  /** For BreadcrumbList schema */
  breadcrumbLabels?: string[];
}

export function getCanonicalUrl(path: string): string {
  const base = SITE_URL.replace(/\/$/, "");
  const p = path.startsWith("/") ? path : `/${path}`;
  return `${base}${p}`;
}

/** Organization schema for JSON-LD */
export function getOrganizationSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "EducationalOrganization",
    "@id": `${SITE_URL}/#organization`,
    name: SITE_NAME,
    alternateName: "Siddharths Miracles School",
    url: SITE_URL,
    logo: `${SITE_URL}/school-logo.png`,
    description: SITE_DESCRIPTION,
    slogan: "Where Each Day is a Miracle",
    address: {
      "@type": "PostalAddress",
      streetAddress: "VAVOL-UVARSAD ROAD, VAVOL",
      addressLocality: "Gandhinagar",
      addressRegion: "Gujarat",
      postalCode: "382016",
      addressCountry: "IN",
    },
    telephone: "+919925941082",
    areaServed: { "@type": "City", name: "Gandhinagar" },
    sameAs: [],
  };
}

/** WebSite schema with sitelinks search box (optional) */
export function getWebSiteSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: SITE_NAME,
    url: SITE_URL,
    description: SITE_DESCRIPTION,
    publisher: { "@id": `${SITE_URL}/#organization` as string },
    inLanguage: "en-IN",
    potentialAction: {
      "@type": "ReadAction",
      target: SITE_URL,
    },
  };
}

/** BreadcrumbList schema. labels e.g. ["Home", "About Us"]; path e.g. "/about". */
export function getBreadcrumbSchema(path: string, labels: string[]) {
  const base = SITE_URL.replace(/\/$/, "");
  const segments = path.replace(/^\//, "").split("/").filter(Boolean);
  const itemListElement = labels.map((name, i) => ({
    "@type": "ListItem" as const,
    position: i + 1,
    name,
    item: i === 0 ? base : base + "/" + segments.slice(0, i).join("/"),
  }));
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement,
  };
}
