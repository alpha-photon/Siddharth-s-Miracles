import { Layout } from "@/components/layout/Layout";
import { HeroSection, HighlightsSection } from "@/components/home/HeroSection";
import { TestimonialsSection } from "@/components/home/TestimonialsSection";
import { CTASection } from "@/components/home/CTASection";

const Index = () => {
  return (
    <Layout>
      <HeroSection />
      <HighlightsSection />
      <TestimonialsSection />
      <CTASection />
    </Layout>
  );
};

export default Index;
