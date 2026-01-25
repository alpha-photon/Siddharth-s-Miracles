import { Layout } from "@/components/layout/Layout";
import { HeroSection, HighlightsSection } from "@/components/home/HeroSection";
import { TestimonialsSection } from "@/components/home/TestimonialsSection";
import { CTASection } from "@/components/home/CTASection";
import { WhySection } from "@/components/home/WhySection";
import { PillarsSection } from "@/components/home/PillarsSection";
import { AcademicExcellenceSection } from "@/components/home/AcademicExcellenceSection";
import { StatsSection } from "@/components/home/StatsSection";

const Index = () => {
  return (
    <Layout>
      <HeroSection />
      <HighlightsSection />
     
      <WhySection />
      <PillarsSection />
      <AcademicExcellenceSection />
      <TestimonialsSection />
      <CTASection />
    </Layout>
  );
};

export default Index;
