import { Layout } from "@/components/layout/Layout";
import { Seo } from "@/components/seo/Seo";
import { SITE_NAME, SITE_DESCRIPTION } from "@/lib/seo";
import { HeroSection, HighlightsSection } from "@/components/home/HeroSection";
import { TestimonialsSection } from "@/components/home/TestimonialsSection";
import { CTASection } from "@/components/home/CTASection";
import { WhySection } from "@/components/home/WhySection";
import { PillarsSection } from "@/components/home/PillarsSection";
import { AcademicExcellenceSection } from "@/components/home/AcademicExcellenceSection";
import { StatsSection } from "@/components/home/StatsSection";
import { GalleryPreviewSection } from "@/components/home/GalleryPreviewSection";

const Index = () => {
  return (
    <Layout>
      <Seo title={SITE_NAME} description={SITE_DESCRIPTION} path="/" />
      <HeroSection />
      <HighlightsSection />
     
      <WhySection />
      <PillarsSection />
      <AcademicExcellenceSection />
      <GalleryPreviewSection />
      <TestimonialsSection />
      <CTASection />
    </Layout>
  );
};

export default Index;
