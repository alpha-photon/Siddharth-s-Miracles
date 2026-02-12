import { useEffect } from "react";
import {
  SITE_NAME,
  DEFAULT_OG_IMAGE,
  getCanonicalUrl,
  getOrganizationSchema,
  getWebSiteSchema,
  getBreadcrumbSchema,
  type PageSeo,
} from "@/lib/seo";

const META_DESCRIPTION = "description";
const OG_TITLE = "og:title";
const OG_DESCRIPTION = "og:description";
const OG_IMAGE = "og:image";
const OG_URL = "og:url";
const OG_TYPE = "og:type";
const TWITTER_CARD = "twitter:card";
const TWITTER_TITLE = "twitter:title";
const TWITTER_DESCRIPTION = "twitter:description";
const TWITTER_IMAGE = "twitter:image";
const CANONICAL = "canonical";
const ROBOTS = "robots";

function setMeta(name: string, content: string, isProperty = false) {
  const attr = isProperty ? "property" : "name";
  let el = document.querySelector(`meta[${attr}="${name}"]`) as HTMLMetaElement | null;
  if (!el) {
    el = document.createElement("meta");
    el.setAttribute(attr, name);
    document.head.appendChild(el);
  }
  el.setAttribute("content", content);
}

function setLink(rel: string, href: string) {
  let el = document.querySelector(`link[rel="${rel}"][href]`) as HTMLLinkElement | null;
  if (!el) {
    el = document.createElement("link");
    el.setAttribute("rel", rel);
    document.head.appendChild(el);
  }
  el.setAttribute("href", href);
}

function injectJsonLd(id: string, data: object) {
  let script = document.getElementById(id) as HTMLScriptElement | null;
  if (script) script.remove();
  script = document.createElement("script");
  script.id = id;
  script.type = "application/ld+json";
  script.textContent = JSON.stringify(data);
  document.head.appendChild(script);
}

/**
 * Per-page SEO: title, meta description, OG, Twitter, canonical, optional noindex, JSON-LD breadcrumb.
 * Call once per route (e.g. in each page or in a route-level wrapper).
 */
export function Seo({ title, description, path, image, noindex, breadcrumbLabels }: PageSeo) {
  const canonicalUrl = getCanonicalUrl(path);
  const ogImage = image || DEFAULT_OG_IMAGE;
  const fullTitle = title === SITE_NAME ? title : `${title} | ${SITE_NAME}`;

  useEffect(() => {
    document.title = fullTitle;
    setMeta(META_DESCRIPTION, description);
    setMeta(OG_TITLE, fullTitle, true);
    setMeta(OG_DESCRIPTION, description, true);
    setMeta(OG_IMAGE, ogImage, true);
    setMeta(OG_URL, canonicalUrl, true);
    setMeta(OG_TYPE, "website", true);
    setMeta(TWITTER_CARD, "summary_large_image");
    setMeta(TWITTER_TITLE, fullTitle);
    setMeta(TWITTER_DESCRIPTION, description);
    setMeta(TWITTER_IMAGE, ogImage);
    setLink(CANONICAL, canonicalUrl);

    if (noindex) {
      setMeta(ROBOTS, "noindex, nofollow");
    } else {
      const robotsEl = document.querySelector('meta[name="robots"]');
      if (robotsEl) robotsEl.remove();
    }

    if (breadcrumbLabels && breadcrumbLabels.length > 0) {
      injectJsonLd("breadcrumb-schema", getBreadcrumbSchema(path, breadcrumbLabels));
    }
  }, [fullTitle, description, canonicalUrl, ogImage, noindex, path, breadcrumbLabels]);

  return null;
}

/** Inject Organization + WebSite JSON-LD once (e.g. in Layout or App). */
export function GlobalJsonLd() {
  useEffect(() => {
    injectJsonLd("organization-schema", getOrganizationSchema());
    injectJsonLd("website-schema", getWebSiteSchema());
    return () => {
      document.getElementById("organization-schema")?.remove();
      document.getElementById("website-schema")?.remove();
    };
  }, []);
  return null;
}
