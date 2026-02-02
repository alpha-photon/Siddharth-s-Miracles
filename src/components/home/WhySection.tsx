import { motion } from "framer-motion";
import { FlaskConical, BookOpen, Laptop, Bus, Heart, Trophy, Music, GraduationCap, Users, Sparkles } from "lucide-react";
import { AnimatedCardBackground } from "@/components/ui/AnimatedCardBackground";

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
      {/* Decorative Background - aligned with Activities */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[300px] bg-secondary/5 rounded-full blur-3xl pointer-events-none" />

      <div className="container relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-14 md:mb-20"
        >
          <span className="inline-flex items-center px-5 py-2 rounded-full text-sm font-semibold mb-5 bg-primary/10 text-primary border border-primary/20 shadow-sm tracking-wide">
            What Makes Us Special
          </span>
          <h2 className="font-heading text-3xl md:text-4xl lg:text-5xl font-bold text-maroon mb-5 tracking-tight leading-tight max-w-4xl mx-auto">
            Why Siddharth's Miracles?
          </h2>
          <div className="w-16 h-1 mx-auto mb-5 bg-gradient-to-r from-transparent via-primary to-transparent rounded-full" />
          <p className="text-muted-foreground max-w-2xl mx-auto text-lg md:text-xl leading-relaxed">
            Discover what sets us apart in providing quality education
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {whyFeatures.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group"
            >
              <div className="h-full bg-card rounded-3xl p-6 md:p-8 relative overflow-hidden flex flex-col border-2 border-border/50 shadow-lg hover:shadow-2xl transition-all duration-500 group-hover:border-secondary/50 group-hover:-translate-y-2">
                <AnimatedCardBackground index={index} />
                <div className="relative z-10 flex flex-col flex-1">
                  <div className="w-16 h-16 md:w-20 md:h-20 mx-auto mb-5 rounded-2xl bg-gradient-to-br from-secondary/25 to-accent/25 flex items-center justify-center ring-2 ring-secondary/20 group-hover:scale-110 group-hover:rotate-3 group-hover:ring-secondary/40 transition-all duration-500 shadow-md">
                    <feature.icon className="h-8 w-8 md:h-10 md:w-10 text-maroon group-hover:text-secondary transition-colors duration-300" />
                  </div>
                  <h3 className="font-heading text-lg md:text-xl font-bold text-maroon mb-2 group-hover:text-secondary transition-colors duration-300 leading-tight">
                    {feature.title}
                  </h3>
                  <p className="text-sm md:text-base text-muted-foreground leading-relaxed flex-1">{feature.description}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
