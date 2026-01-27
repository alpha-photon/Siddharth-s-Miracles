import { Layout } from "@/components/layout/Layout";
import { motion } from "framer-motion";
import { Building2, Shield, TreePine, BookOpen, Palette, FlaskConical } from "lucide-react";
import { PageHero } from "@/components/ui/PageHero";
import heroSchool from "@/assets/hero-school.jpg";

const facilities = [
  {
    icon: Building2,
    title: "વર્ગખંડો",
    titleEn: "Classrooms",
    description: "Spacious and comfortable classrooms designed for effective learning.",
  },
  {
    icon: TreePine,
    title: "રમતનું મેદાન",
    titleEn: "Playground",
    description: "Dedicated outdoor play area for sports, games, and physical activities.",
  },
  {
    icon: FlaskConical,
    title: "વિજ્ઞાન પ્રયોગશાળા",
    titleEn: "Science Lab",
    description: "Well-equipped science laboratory for hands-on experiments and learning.",
  },
  {
    icon: BookOpen,
    title: "કમ્પ્યુટર લેબ",
    titleEn: "Computer Lab",
    description: "Modern computer lab with latest technology for digital learning.",
  },
  {
    icon: Palette,
    title: "કલા અને હસ્તકલા રૂમ",
    titleEn: "Art and Craft Room",
    description: "Dedicated space for creative expression through art and craft activities.",
  },
  {
    icon: Building2,
    title: "ઇન્ડોર ગેમ્સ હોલ",
    titleEn: "Indoor Games Hall",
    description: "Indoor sports facility for various games and activities.",
  },
  {
    icon: Building2,
    title: "પ્રવૃત્તિ રૂમ",
    titleEn: "Activity Room",
    description: "Multi-purpose activity room for various co-curricular activities.",
  },
  {
    icon: BookOpen,
    title: "પુસ્તકાલય",
    titleEn: "Library",
    description: "Well-stocked library with books, magazines, and educational resources.",
  },
];

const Facilities = () => {
  return (
    <Layout>
      {/* Hero Section */}
      <PageHero
        badge="World-Class Infrastructure"
        title="Our Facilities"
        description="We, at SIDDHARTH'S MIRACLES SCHOOL, believe in nurturing the idea of school being the 'Second Home' to our students. It is essential to provide them with a spacious and comfortable environment. We aim at giving an enriching classroom experience to our children with our world-class infrastructure."
        backgroundImage={heroSchool}
        icon={Building2}
      />

      {/* Facilities Grid */}
      <section className="py-16 md:py-24">
        <div className="container">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {facilities.map((facility, index) => (
              <motion.div
                key={facility.titleEn}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.05 }}
                className="card-hover"
              >
                <div className="h-full bg-card rounded-2xl p-6 shadow-card border border-border/50">
                  <div className="w-14 h-14 mb-4 rounded-xl bg-gradient-to-br from-secondary/20 to-accent/20 flex items-center justify-center">
                    <facility.icon className="h-7 w-7 text-maroon" />
                  </div>
                  <h3 className="font-heading text-lg font-bold text-maroon mb-1">
                    {facility.title}
                  </h3>
                  <p className="text-sm font-medium text-primary mb-3">{facility.titleEn}</p>
                  <p className="text-sm text-muted-foreground">{facility.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Safety Section */}
      <section className="py-16 md:py-24 bg-maroon text-white">
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="max-w-4xl mx-auto"
          >
            <div className="flex items-center gap-4 mb-6">
              <div className="w-16 h-16 rounded-xl bg-white/10 flex items-center justify-center">
                <Shield className="h-8 w-8 text-secondary" />
              </div>
              <h2 className="font-heading text-3xl md:text-4xl font-bold">
                Safe Campus
              </h2>
            </div>
            <div className="space-y-4 text-lg opacity-90">
              <p>
                Siddharth's Miracles School offers a space where every child's comfort, safety and 
                security are an utmost priority. We want our children to learn with love and enthusiasm, 
                hence ensure a safe and sound learning environment for the child, where he can broaden 
                his mind, expand his imagination and master his skills without any stress or fear.
              </p>
              <div className="grid sm:grid-cols-2 gap-4 mt-6">
                <div className="flex items-start gap-3">
                  <span className="text-secondary font-bold">•</span>
                  <span>Male and Female staff</span>
                </div>
                <div className="flex items-start gap-3">
                  <span className="text-secondary font-bold">•</span>
                  <span>Classroom doors without lock</span>
                </div>
                <div className="flex items-start gap-3">
                  <span className="text-secondary font-bold">•</span>
                  <span>360 degree surveillance through CCTV cameras</span>
                </div>
                <div className="flex items-start gap-3">
                  <span className="text-secondary font-bold">•</span>
                  <span>Security controlled entry and exit</span>
                </div>
                <div className="flex items-start gap-3">
                  <span className="text-secondary font-bold">•</span>
                  <span>Fire compliance</span>
                </div>
                <div className="flex items-start gap-3">
                  <span className="text-secondary font-bold">•</span>
                  <span>Periodic emergency drill</span>
                </div>
                <div className="flex items-start gap-3">
                  <span className="text-secondary font-bold">•</span>
                  <span>Background check on every staff</span>
                </div>
                <div className="flex items-start gap-3">
                  <span className="text-secondary font-bold">•</span>
                  <span>Medical room</span>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </Layout>
  );
};

export default Facilities;
