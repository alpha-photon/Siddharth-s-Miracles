import { motion } from "framer-motion";
import { BookOpen, Sparkles, GraduationCap } from "lucide-react";

const earlyYearFeatures = [
  "Nurturing curiosity and conceptual learning in young minds.",
  "Introducing the basics of literacy and numeracy through practical approach.",
  "Development of comprehension skills, stamina, balance and rhythm.",
  "Real-world learning experience through creative activities and field trips.",
  "Unique curriculum for kinesthetic learning and motor skills development.",
];

const primaryClassFeatures = [
  "Literacy - various prose, poetry, drama and non-fiction",
  "Mathematics - Focus on Problem solving, Logical reasoning and Analytical skill.",
  "Environmental science and social studies – exploring environment and progression to higher concepts.",
  "Physical Education – Excellent Indoor and Outdoor games and Yoga.",
  "Language skills – Honing creative writing and reading comprehension.",
];

export function AcademicExcellenceSection() {
  return (
    <section className="py-20 md:py-28 bg-gradient-to-b from-secondary/5 via-background to-secondary/5 relative overflow-hidden">
      {/* Decorative Background */}
      <div className="absolute inset-0 bg-pattern-dots opacity-20" />
      
      <div className="container relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="inline-block px-4 py-1 bg-primary/10 text-primary rounded-full text-sm font-semibold mb-4">
            Our Approach
          </span>
          <h2 className="font-heading text-3xl md:text-5xl font-bold text-maroon mb-4">
            Academic Excellence
          </h2>
          <p className="text-muted-foreground max-w-3xl mx-auto text-lg">
            To make learning a fun experience for every child, we make it interactive and innovative. 
            We follow the Philosophy of constructive and innovative learning through inter-disciplinary curriculum.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-8 mb-12">
          {/* Early Year Programme */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="bg-card rounded-2xl p-8 shadow-card border border-border/50 relative overflow-hidden group"
          >
            <div className="absolute inset-0 bg-gradient-to-br from-secondary/5 to-accent/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            <div className="relative z-10">
            <div className="flex items-center gap-4 mb-6">
              <div className="w-16 h-16 rounded-xl bg-gradient-to-br from-secondary/20 to-accent/20 flex items-center justify-center">
                <Sparkles className="h-8 w-8 text-maroon" />
              </div>
              <div>
                <h3 className="font-heading text-2xl font-bold text-maroon">
                  Early Year Programme
                </h3>
                <p className="text-sm text-muted-foreground">
                  Nursery, Lower Kindergarten & Upper Kindergarten
                </p>
              </div>
            </div>
            <ul className="space-y-3">
              {earlyYearFeatures.map((feature, index) => (
                <motion.li
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="flex items-start gap-3"
                >
                  <span className="text-secondary font-bold mt-1">•</span>
                  <span className="text-muted-foreground">{feature}</span>
                </motion.li>
              ))}
            </ul>
            </div>
          </motion.div>

          {/* Primary Class */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="bg-card rounded-2xl p-8 shadow-card border border-border/50 relative overflow-hidden group"
          >
            <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-primary/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            <div className="relative z-10">
            <div className="flex items-center gap-4 mb-6">
              <div className="w-16 h-16 rounded-xl bg-gradient-to-br from-primary/20 to-primary/10 flex items-center justify-center">
                <GraduationCap className="h-8 w-8 text-maroon" />
              </div>
              <div>
                <h3 className="font-heading text-2xl font-bold text-maroon">
                  Primary Class
                </h3>
                <p className="text-sm text-muted-foreground">
                  Class I to VII
                </p>
              </div>
            </div>
            <ul className="space-y-3">
              {primaryClassFeatures.map((feature, index) => (
                <motion.li
                  key={index}
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="flex items-start gap-3"
                >
                  <span className="text-primary font-bold mt-1">•</span>
                  <span className="text-muted-foreground">{feature}</span>
                </motion.li>
              ))}
            </ul>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
