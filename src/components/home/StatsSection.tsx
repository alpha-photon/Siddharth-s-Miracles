import { motion } from "framer-motion";
import { GraduationCap, Users, Award, Calendar } from "lucide-react";

const stats = [
  {
    icon: GraduationCap,
    number: "2021",
    label: "Established",
    description: "Year of establishment",
    color: "from-primary/20 to-primary/10",
  },
  {
    icon: Users,
    number: "Nursery to Std 10",
    label: "Classes",
    description: "Complete education",
    color: "from-secondary/30 to-accent/20",
  },
  {
    icon: Award,
    number: "GSEB",
    label: "Affiliated",
    description: "GSEB",
    color: "from-growth/20 to-growth/10",
  },
  {
    icon: Calendar,
    number: "100%",
    label: "Holistic",
    description: "All-round development",
    color: "from-maroon/20 to-maroon/10",
  },
];

export function StatsSection() {
  return (
    <section className="py-16 md:py-20 bg-gradient-to-b from-maroon via-maroon/95 to-maroon text-white relative overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0">
        <motion.div
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.1, 0.2, 0.1],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="absolute top-0 left-1/4 w-96 h-96 bg-secondary/20 rounded-full blur-3xl"
        />
        <motion.div
          animate={{
            scale: [1, 1.3, 1],
            opacity: [0.1, 0.2, 0.1],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 0.5,
          }}
          className="absolute bottom-0 right-1/4 w-96 h-96 bg-primary/20 rounded-full blur-3xl"
        />
      </div>

      <div className="container relative z-10">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
          {stats.map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 30, scale: 0.9 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="text-center group"
            >
              <div className="bg-white/10 backdrop-blur-md rounded-2xl p-6 border border-white/20 hover:bg-white/15 transition-all duration-300 hover:scale-105">
                <div className="w-16 h-16 mx-auto mb-4 rounded-xl bg-gradient-to-br from-secondary/30 to-accent/30 flex items-center justify-center group-hover:scale-110 group-hover:rotate-3 transition-all duration-300">
                  <stat.icon className="h-8 w-8 text-secondary" />
                </div>
                <motion.div
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.8, delay: index * 0.1 + 0.3 }}
                  className="text-4xl md:text-5xl font-bold text-secondary mb-2"
                >
                  {stat.number}
                </motion.div>
                <h3 className="font-heading text-lg font-bold mb-1">{stat.label}</h3>
                <p className="text-sm text-white/70">{stat.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
