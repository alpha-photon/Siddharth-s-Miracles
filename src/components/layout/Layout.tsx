import { ReactNode } from "react";
import { Header } from "./Header";
import { Footer } from "./Footer";
import { FloatingButtons } from "./FloatingButtons";
import { GlobalJsonLd } from "@/components/seo/Seo";

interface LayoutProps {
  children: ReactNode;
}

export function Layout({ children }: LayoutProps) {
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
