import { ReactNode, useEffect } from "react";
import { Header } from "./Header";
import { Footer } from "./Footer";
import { FloatingButtons } from "./FloatingButtons";
import { GlobalJsonLd } from "@/components/seo/Seo";
import {
  heroAbout,
  heroContact,
  heroAdmission,
  heroGallery,
  heroActivities,
  heroAcademics,
  heroFacilities,
} from "@/lib/cloudinary-images";

const PAGE_HERO_URLS = [
  heroAbout,
  heroContact,
  heroAdmission,
  heroGallery,
  heroActivities,
  heroAcademics,
  heroFacilities,
];

// Local hero images used by About, Facilities, Activities, Academics, Gallery
const LOCAL_HERO_URLS = ["/ab.png", "/facilities.png", "/activites.png", "/gallery.png", "/aca.JPG"];

let heroPrefetchDone = false;

interface LayoutProps {
  children: ReactNode;
}

export function Layout({ children }: LayoutProps) {
  // Prefetch all page hero images once so they're cached when user navigates (avoids 2–3s delay)
  useEffect(() => {
    if (heroPrefetchDone) return;
    heroPrefetchDone = true;
    [...PAGE_HERO_URLS, ...LOCAL_HERO_URLS].forEach((url) => {
      const href = typeof url === "string" ? url : "";
      if (!href) return;
      const link = document.createElement("link");
      link.rel = "prefetch";
      link.as = "image";
      link.href = href.startsWith("http") ? href : window.location.origin + href;
      document.head.appendChild(link);
    });
  }, []);

  return (
    <div className="flex flex-col min-h-screen overflow-x-hidden">
      <GlobalJsonLd />
      <Header />
      <main id="main-content" className="flex-1 min-w-0 pt-16 sm:pt-20" role="main">
        {children}
      </main>
      <Footer />
      <FloatingButtons />
    </div>
  );
}
