import { Layout } from "@/components/layout/Layout";
import { motion } from "framer-motion";
import { Images } from "lucide-react";

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
      <section className="py-16 md:py-24 bg-gradient-to-b from-secondary/10 to-background">
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center max-w-3xl mx-auto"
          >
            <h1 className="font-heading text-4xl md:text-5xl font-bold text-maroon mb-6">
              Photo Gallery
            </h1>
            <p className="text-lg text-muted-foreground">
              Glimpses of life at Siddharth's Miracles School - classrooms, activities,
              celebrations, and memorable moments.
            </p>
          </motion.div>
        </div>
      </section>

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
