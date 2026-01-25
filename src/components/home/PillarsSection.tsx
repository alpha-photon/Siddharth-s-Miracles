import { motion } from "framer-motion";
import { GraduationCap, Users, Building2, Heart, Shield } from "lucide-react";

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
];

export function PillarsSection() {
  return (
    <section className="py-20 md:py-28 bg-pattern-dots">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="inline-block px-4 py-1 bg-maroon/10 text-maroon rounded-full text-sm font-semibold mb-4">
            Our Foundation
          </span>
          <h2 className="font-heading text-3xl md:text-5xl font-bold text-maroon mb-4">
            Pillars of Siddharth's Miracles
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
            The five core principles that guide everything we do
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {pillars.map((pillar, index) => (
            <motion.div
              key={pillar.title}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className={index === 4 ? 'md:col-span-2 lg:col-span-1 lg:mx-auto lg:max-w-md' : ''}
            >
              <div className="card-3d h-full bg-card rounded-2xl p-8 shadow-card border border-border/50 text-center relative overflow-hidden group">
                <div className={`absolute inset-0 bg-gradient-to-br ${pillar.color} opacity-0 group-hover:opacity-100 transition-opacity duration-500`} />
                <div className="relative z-10">
                  <div className="w-20 h-20 mx-auto mb-6 rounded-2xl bg-gradient-to-br from-secondary/20 to-accent/20 flex items-center justify-center group-hover:scale-110 group-hover:rotate-3 transition-all duration-500 shadow-lg">
                    <pillar.icon className="h-10 w-10 text-maroon group-hover:text-primary transition-colors duration-300" />
                  </div>
                  <h3 className="font-heading text-xl font-bold text-maroon mb-3 group-hover:text-primary transition-colors duration-300">
                    {pillar.title}
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">{pillar.description}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
