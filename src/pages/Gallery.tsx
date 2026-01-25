import { Layout } from "@/components/layout/Layout";
import { motion } from "framer-motion";
import { PageHero } from "@/components/ui/PageHero";
import { Images } from "lucide-react";
import heroPlayground from "@/assets/hero-playground.jpg";

const galleryCategories = [
  { name: "Classrooms", nameGuj: "વર્ગખંડો" },
  { name: "Activities", nameGuj: "પ્રવૃત્તિઓ" },
  { name: "Celebrations", nameGuj: "ઉજવણી" },
  { name: "Events", nameGuj: "કાર્યક્રમો" },
  { name: "Campus", nameGuj: "કેમ્પસ" },
];

const Gallery = () => {
  return (
    <Layout>
      {/* Hero Section */}
      <PageHero
        title="Photo Gallery"
        description="Glimpses of life at Siddharth's Miracles School - classrooms, activities, celebrations, and memorable moments."
        backgroundImage={heroPlayground}
        icon={Images}
      />

      {/* Coming Soon Section */}
      <section className="py-16 md:py-24">
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center"
          >
            <div className="max-w-2xl mx-auto bg-card rounded-2xl p-12 shadow-card border border-border/50">
              <div className="w-20 h-20 mx-auto mb-6 rounded-2xl bg-gradient-to-br from-secondary/20 to-accent/20 flex items-center justify-center">
                <Images className="h-10 w-10 text-maroon" />
              </div>
              <h2 className="font-heading text-2xl md:text-3xl font-bold text-maroon mb-4">
                Gallery Coming Soon
              </h2>
              <p className="text-muted-foreground mb-8">
                We're preparing a beautiful collection of photos showcasing our school,
                students, and activities. Please check back soon!
              </p>

              <div className="flex flex-wrap gap-3 justify-center">
                {galleryCategories.map((category) => (
                  <span
                    key={category.name}
                    className="px-4 py-2 bg-muted rounded-full text-sm font-medium text-muted-foreground"
                  >
                    {category.nameGuj}
                  </span>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </Layout>
  );
};

export default Gallery;
