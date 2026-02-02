import { motion } from "framer-motion";
import { GraduationCap, Users, Building2, Heart, Shield, Award } from "lucide-react";
import { AnimatedCardBackground } from "@/components/ui/AnimatedCardBackground";

const pillars = [
  {
    icon: GraduationCap,
    title: "Academic Excellence",
    description: "Nurturing students to achieve academic excellence through Innovative and Activity based teaching methods",
    color: "from-primary/20 to-primary/10",
  },
  {
    icon: Users,
    title: "Holistic Development",
    description: "Learning beyond classroom through extra - curricular activities to ensure all round development",
    color: "from-secondary/30 to-accent/20",
  },
  {
    icon: Building2,
    title: "Best-in-Class Infrastructure",
    description: "World class infrastructure to support academic and co-curricular activities",
    color: "from-growth/20 to-growth/10",
  },
  {
    icon: Heart,
    title: "Personal Attention",
    description: "Expert and experienced teacher who provide personal attention to each student",
    color: "from-maroon/20 to-maroon/10",
  },
  {
    icon: Shield,
    title: "Safe Campus",
    description: "Ensuring the safety of every child on campus through comprehensive security measures",
    color: "from-primary/20 to-primary/10",
  },
  {
    icon: Award,
    title: "Values & Character Building",
    description: "Instilling strong moral values, ethics and character development in every student",
    color: "from-secondary/20 to-accent/10",
  },
];

export function PillarsSection() {
  return (
    <section className="py-20 md:py-28 bg-pattern-dots relative overflow-hidden">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[300px] bg-secondary/5 rounded-full blur-3xl pointer-events-none" />
      <div className="container relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-14 md:mb-20"
        >
          <span className="inline-flex items-center px-5 py-2 rounded-full text-sm font-semibold mb-5 bg-maroon/10 text-maroon border border-maroon/20 shadow-sm tracking-wide">
            Our Foundation
          </span>
          <h2 className="font-heading text-3xl md:text-4xl lg:text-5xl font-bold text-maroon mb-5 tracking-tight leading-tight max-w-4xl mx-auto">
            Pillars of Siddharth's Miracles
          </h2>
          <div className="w-16 h-1 mx-auto mb-5 bg-gradient-to-r from-transparent via-primary to-transparent rounded-full" />
          <p className="text-muted-foreground max-w-2xl mx-auto text-lg md:text-xl leading-relaxed">
            The six core principles that guide everything we do
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {pillars.map((pillar, index) => (
            <motion.div
              key={pillar.title}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="group"
            >
              <div className="h-full bg-card rounded-3xl p-6 md:p-8 text-center relative overflow-hidden flex flex-col border-2 border-border/50 shadow-lg hover:shadow-2xl transition-all duration-500 group-hover:border-secondary/50 group-hover:-translate-y-2">
                <AnimatedCardBackground index={index} />
                <div className="relative z-10 flex flex-col flex-1">
                  <div className="w-16 h-16 md:w-20 md:h-20 mx-auto mb-5 rounded-2xl bg-gradient-to-br from-secondary/25 to-accent/25 flex items-center justify-center ring-2 ring-secondary/20 group-hover:scale-110 group-hover:rotate-3 group-hover:ring-secondary/40 transition-all duration-500 shadow-md">
                    <pillar.icon className="h-8 w-8 md:h-10 md:w-10 text-maroon group-hover:text-secondary transition-colors duration-300" />
                  </div>
                  <h3 className="font-heading text-lg md:text-xl font-bold text-maroon mb-3 group-hover:text-secondary transition-colors duration-300 leading-tight">
                    {pillar.title}
                  </h3>
                  <p className="text-muted-foreground text-sm md:text-base leading-relaxed flex-1">{pillar.description}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
