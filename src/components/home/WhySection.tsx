import { motion } from "framer-motion";
import { FlaskConical, BookOpen, Laptop, Bus, Heart, Trophy, Music, GraduationCap, Users, Sparkles } from "lucide-react";

const whyFeatures = [
  {
    icon: FlaskConical,
    title: "Experimental and Activity based learning",
    description: "Involving or based on experience and observation",
  },
  {
    icon: BookOpen,
    title: "Unique Academic Philosophy",
    description: "Innovative teaching methods tailored for each child",
  },
  {
    icon: Laptop,
    title: "Digital Enhanced learning",
    description: "Modern technology integrated into education",
  },
  {
    icon: Bus,
    title: "Education trips",
    description: "Real-world learning experiences beyond the classroom",
  },
  {
    icon: Heart,
    title: "Health programmes",
    description: "Comprehensive health and wellness initiatives",
  },
  {
    icon: Trophy,
    title: "Sports and Cultural Programmes",
    description: "Holistic development through diverse activities",
  },
  {
    icon: GraduationCap,
    title: "Interdisciplinary Education",
    description: "Involving two or more different subjects or areas of knowledge",
  },
  {
    icon: Users,
    title: "Parent-Teacher Collaboration",
    description: "Strong partnership with parents for holistic child development",
  },
  {
    icon: Sparkles,
    title: "Creative Learning Environment",
    description: "Encouraging creativity and innovation in every aspect of learning",
  },
];

export function WhySection() {
  return (
    <section className="py-20 md:py-28 bg-gradient-to-b from-background via-secondary/5 to-background relative overflow-hidden">
      {/* Decorative Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-10 w-64 h-64 bg-secondary/5 rounded-full blur-3xl" />
        <div className="absolute bottom-20 right-10 w-80 h-80 bg-primary/5 rounded-full blur-3xl" />
      </div>

      <div className="container relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="inline-block px-4 py-1 bg-secondary/20 text-maroon rounded-full text-sm font-semibold mb-4">
            What Makes Us Special
          </span>
          <h2 className="font-heading text-3xl md:text-5xl font-bold text-maroon mb-4">
            Why Siddharth's Miracles?
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
            Discover what sets us apart in providing quality education
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl mx-auto">
          {whyFeatures.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group"
            >
              <div className="card-3d h-full bg-card rounded-2xl p-6 shadow-card border border-border/50 relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-secondary/10 to-accent/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                <div className="relative z-10">
                  <div className="w-16 h-16 mb-4 rounded-xl bg-gradient-to-br from-secondary/20 to-accent/20 flex items-center justify-center group-hover:scale-110 group-hover:rotate-6 transition-all duration-300 shadow-lg">
                    <feature.icon className="h-8 w-8 text-maroon group-hover:text-primary transition-colors duration-300" />
                  </div>
                  <h3 className="font-heading text-lg font-bold text-maroon mb-2 group-hover:text-primary transition-colors duration-300">
                    {feature.title}
                  </h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">{feature.description}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
