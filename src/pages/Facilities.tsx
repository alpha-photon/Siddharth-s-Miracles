import { Layout } from "@/components/layout/Layout";
import { motion } from "framer-motion";
import { Building2, Droplets, Shield, TreePine, Bus, Camera, BookOpen, UtensilsCrossed } from "lucide-react";

const facilities = [
  {
    icon: Building2,
    title: "સુરક્ષિત વર્ગખંડો",
    titleEn: "Safe Classrooms",
    description: "Well-ventilated, spacious classrooms with proper lighting and comfortable seating.",
  },
  {
    icon: TreePine,
    title: "સ્વચ્છ કેમ્પસ",
    titleEn: "Clean Campus",
    description: "Clean, green campus environment that promotes health and wellbeing.",
  },
  {
    icon: Droplets,
    title: "પીવાનું પાણી",
    titleEn: "Drinking Water",
    description: "Safe and clean drinking water facility with RO purification system.",
  },
  {
    icon: TreePine,
    title: "રમતનું મેદાન",
    titleEn: "Play Area",
    description: "Dedicated outdoor play area for sports, games, and physical activities.",
  },
  {
    icon: Camera,
    title: "CCTV સર્વેલન્સ",
    titleEn: "CCTV Surveillance",
    description: "Campus monitored by CCTV cameras for enhanced security and safety.",
  },
  {
    icon: Bus,
    title: "વાહનવ્યવહાર",
    titleEn: "Transport",
    description: "Safe and reliable school transport service covering major areas.",
  },
  {
    icon: BookOpen,
    title: "પુસ્તકાલય",
    titleEn: "Library",
    description: "Well-stocked library with books, magazines, and educational resources.",
  },
  {
    icon: UtensilsCrossed,
    title: "સ્વચ્છ સુવિધાઓ",
    titleEn: "Clean Washrooms",
    description: "Hygienic and regularly maintained washroom facilities.",
  },
];

const Facilities = () => {
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
              Our Facilities
            </h1>
            <p className="text-lg text-muted-foreground">
              Modern infrastructure and amenities designed for safe, comfortable, and
              effective learning environment.
            </p>
          </motion.div>
        </div>
      </section>

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
                Safety First
              </h2>
            </div>
            <div className="space-y-4 text-lg opacity-90">
              <p>
                The safety and security of our students is our top priority. Our campus is
                designed with child safety in mind, with secure entry points, constant supervision,
                and emergency protocols in place.
              </p>
              <p>
                Parents can be assured that their children are in a safe, nurturing environment
                where they can focus on learning and growing without any concerns.
              </p>
            </div>
          </motion.div>
        </div>
      </section>
    </Layout>
  );
};

export default Facilities;
