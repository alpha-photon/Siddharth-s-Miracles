import { motion } from "framer-motion";
import { BookOpen, Sparkles, GraduationCap } from "lucide-react";
import useEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";
import { useCallback } from "react";

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

const secondaryClassFeatures = [
  "Intensive preparation for Gujarat Board examinations.",
  "Regular practice tests and revision sessions.",
  "Advanced curriculum covering all board subjects.",
  "Expert guidance for achieving best results.",
  "Focus on academic excellence and character building.",
];

function AcademicExcellenceCarousel() {
  const [emblaRef, emblaApi] = useEmblaCarousel(
    { loop: true, align: "start", slidesToScroll: 1, duration: 25 },
    [Autoplay({ delay: 4000, stopOnInteraction: false })]
  );

  const classCards = [
    {
      title: "Early Year Programme",
      subtitle: "Nursery, Lower Kindergarten & Upper Kindergarten",
      icon: Sparkles,
      color: "from-secondary/5 to-accent/5",
      iconBg: "from-secondary/20 to-accent/20",
      bulletColor: "text-secondary",
      features: earlyYearFeatures,
    },
    {
      title: "Primary Class",
      subtitle: "Class I to VII",
      icon: GraduationCap,
      color: "from-primary/5 to-primary/10",
      iconBg: "from-primary/20 to-primary/10",
      bulletColor: "text-primary",
      features: primaryClassFeatures,
    },
    {
      title: "Secondary Class",
      subtitle: "Class IX & X",
      icon: GraduationCap,
      color: "from-maroon/5 to-maroon/10",
      iconBg: "from-maroon/20 to-maroon/10",
      bulletColor: "text-maroon",
      features: secondaryClassFeatures,
    },
  ];

  return (
    <div className="relative w-full">
      <div className="overflow-hidden" ref={emblaRef}>
        <div className="flex gap-8">
          {classCards.map((card, index) => (
            <div key={index} className="flex-[0_0_100%] lg:flex-[0_0_48%] min-w-0">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="card-3d card-premium bg-card rounded-2xl p-8 md:p-10 relative overflow-hidden group h-full"
              >
                <div className={`absolute inset-0 bg-gradient-to-br ${card.color} opacity-0 group-hover:opacity-100 transition-opacity duration-500`} />
                <div className={`absolute top-0 right-0 w-24 h-24 bg-gradient-to-bl ${card.iconBg} opacity-30 rounded-bl-3xl pointer-events-none`} />
                <div className="relative z-10">
                  <div className="flex items-center gap-4 mb-6">
                    <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${card.iconBg} flex items-center justify-center ring-2 ring-secondary/20 group-hover:scale-110 group-hover:rotate-3 group-hover:ring-primary/30 transition-all duration-500 shadow-md`}>
                      <card.icon className="h-8 w-8 text-maroon group-hover:text-primary transition-colors duration-300" />
                    </div>
                    <div>
                      <h3 className="font-heading text-2xl font-bold text-maroon group-hover:text-primary transition-colors duration-300">
                        {card.title}
                      </h3>
                      <p className="text-sm text-muted-foreground">
                        {card.subtitle}
                      </p>
                    </div>
                  </div>
                  <ul className="space-y-3">
                    {card.features.map((feature, idx) => (
                      <motion.li
                        key={idx}
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: idx * 0.1 }}
                        className="flex items-start gap-3"
                      >
                        <span className={`${card.bulletColor} font-bold mt-1 shrink-0`}>•</span>
                        <span className="text-muted-foreground">{feature}</span>
                      </motion.li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export function AcademicExcellenceSection() {
  return (
    <section className="py-20 md:py-28 bg-gradient-to-b from-secondary/5 via-background to-secondary/5 relative overflow-hidden">
      {/* Decorative Background - aligned with Activities */}
      <div className="absolute inset-0 bg-pattern-dots opacity-20" />
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
            Our Approach
          </span>
          <h2 className="font-heading text-3xl md:text-4xl lg:text-5xl font-bold text-maroon mb-5 tracking-tight leading-tight max-w-4xl mx-auto">
            Academic Excellence
          </h2>
          <div className="w-16 h-1 mx-auto mb-5 bg-gradient-to-r from-transparent via-primary to-transparent rounded-full" />
          <p className="text-muted-foreground max-w-3xl mx-auto text-lg md:text-xl leading-relaxed">
            To make learning a fun experience for every child, we make it interactive and innovative. 
            We follow the Philosophy of constructive and innovative learning through inter-disciplinary curriculum.
          </p>
        </motion.div>

        <AcademicExcellenceCarousel />
      </div>
    </section>
  );
}
