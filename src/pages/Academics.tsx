import { Layout } from "@/components/layout/Layout";
import { motion } from "framer-motion";
import { BookOpen, Calculator, FlaskConical, Globe, Languages, Palette, PenTool, Microscope, ChevronLeft, ChevronRight, GraduationCap, Dumbbell, Brain, Award } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { PageHero } from "@/components/ui/PageHero";
import { AnimatedCardBackground } from "@/components/ui/AnimatedCardBackground";
import useEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";
import { useCallback } from "react";
import { heroAcademics, academicsLab, academicsLibrary, academicsComputer } from "@/lib/cloudinary-images";

const academicImages = [
  { src: heroAcademics, title: "Interactive Classrooms", desc: "Modern learning environment" },
  { src: academicsLab, title: "Science Laboratory", desc: "Hands-on experiments" },
  { src: academicsLibrary, title: "Well-stocked Library", desc: "World of knowledge" },
  { src: academicsComputer, title: "Computer Lab", desc: "Digital literacy" },
];

const subjects = [
  { icon: Languages, name: "ગુજરાતી", nameEn: "Gujarati", color: "from-secondary/30 to-accent/20" },
  { icon: BookOpen, name: "હિન્દી", nameEn: "Hindi", color: "from-primary/20 to-primary/10" },
  { icon: PenTool, name: "અંગ્રેજી", nameEn: "English", color: "from-growth/20 to-growth/10" },
  { icon: Calculator, name: "ગણિત", nameEn: "Mathematics", color: "from-maroon/20 to-maroon/10" },
  { icon: FlaskConical, name: "વિજ્ઞાન", nameEn: "Science", color: "from-secondary/30 to-accent/20" },
  { icon: Globe, name: "સામાજિક વિજ્ઞાન", nameEn: "Social Science", color: "from-primary/20 to-primary/10" },
  { icon: Microscope, name: "પર્યાવરણ", nameEn: "Environment", color: "from-growth/20 to-growth/10" },
  { icon: Palette, name: "ચિત્રકામ", nameEn: "Drawing", color: "from-maroon/20 to-maroon/10" },
];

const methodology = [
  {
    title: "Interactive Learning",
    description: "We use activity-based teaching methods to make learning engaging and fun for students.",
    icon: "🎯",
  },
  {
    title: "Regular Assessment",
    description: "Continuous evaluation through tests, assignments, and projects to track progress.",
    icon: "📊",
  },
  {
    title: "Personal Attention",
    description: "Small class sizes ensure every child gets individual attention from teachers.",
    icon: "👨‍🏫",
  },
  {
    title: "Reading & Writing Focus",
    description: "Strong emphasis on developing reading and writing skills from an early age.",
    icon: "📚",
  },
];

function AcademicCarousel() {
  const [emblaRef, emblaApi] = useEmblaCarousel(
    { loop: true, align: "start" },
    [Autoplay({ delay: 4000, stopOnInteraction: false })]
  );

  const scrollPrev = useCallback(() => emblaApi?.scrollPrev(), [emblaApi]);
  const scrollNext = useCallback(() => emblaApi?.scrollNext(), [emblaApi]);

  return (
    <div className="relative">
      <div className="overflow-hidden rounded-2xl" ref={emblaRef}>
        <div className="flex gap-6 pl-12 pr-12 md:pl-14 md:pr-14">
          {academicImages.map((image, index) => (
            <div key={index} className="flex-[0_0_100%] md:flex-[0_0_50%] lg:flex-[0_0_33.333%] min-w-0">
              <div className="relative group overflow-hidden rounded-2xl shadow-card">
                <div className="image-zoom aspect-[4/3]">
                  <img
                    src={image.src}
                    alt={image.title}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-maroon/90 via-maroon/30 to-transparent" />
                <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                  <h3 className="font-heading text-xl font-bold drop-shadow-md">{image.title}</h3>
                  <p className="text-sm opacity-95 mt-0.5">{image.desc}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      
      <button
        onClick={scrollPrev}
        className="absolute left-4 top-1/2 -translate-y-1/2 z-10 w-10 h-10 rounded-full bg-white shadow-lg flex items-center justify-center text-maroon hover:bg-secondary hover:text-white transition-all duration-300"
      >
        <ChevronLeft className="w-5 h-5" />
      </button>
      <button
        onClick={scrollNext}
        className="absolute right-4 top-1/2 -translate-y-1/2 z-10 w-10 h-10 rounded-full bg-white shadow-lg flex items-center justify-center text-maroon hover:bg-secondary hover:text-white transition-all duration-300"
      >
        <ChevronRight className="w-5 h-5" />
      </button>
    </div>
  );
}

function ClassesCarousel() {
  const [emblaRef, emblaApi] = useEmblaCarousel(
    { loop: true, align: "start", slidesToScroll: 1, duration: 25 },
    [Autoplay({ delay: 4000, stopOnInteraction: false })]
  );

  const scrollPrev = useCallback(() => emblaApi?.scrollPrev(), [emblaApi]);
  const scrollNext = useCallback(() => emblaApi?.scrollNext(), [emblaApi]);

  const classCards = [
    {
      title: "Early Year Programme",
      subtitle: "Nursery, Lower Kindergarten & Upper Kindergarten",
      icon: BookOpen,
      color: "from-secondary/5 to-accent/5",
      iconBg: "from-secondary/20 to-accent/20",
      bulletColor: "text-secondary",
      features: [
        "Nurturing curiosity and conceptual learning in young minds.",
        "Introducing the basics of literacy and numeracy through practical approach.",
        "Development of comprehension skills, stamina, balance and rhythm.",
        "Real-world learning experience through creative activities and field trips.",
        "Unique curriculum for kinesthetic learning and motor skills development.",
      ],
    },
    {
      title: "Primary Class",
      subtitle: "Class I to VIII",
      icon: BookOpen,
      color: "from-primary/5 to-primary/10",
      iconBg: "from-primary/20 to-primary/10",
      bulletColor: "text-primary",
      features: [
        { text: "Literacy", description: " - various prose, poetry, drama and non-fiction" },
        { text: "Mathematics", description: " - Focus on Problem solving, Logical reasoning and Analytical skill." },
        { text: "Environmental science and social studies", description: " – exploring environment and progression to higher concepts." },
        { text: "Physical Education", description: " – Excellent Indoor and Outdoor games and Yoga." },
        { text: "Language skills", description: " – Honing creative writing and reading comprehension." },
      ],
    },
    {
      title: "Secondary Class",
      subtitle: "Class IX & X",
      icon: GraduationCap,
      color: "from-maroon/5 to-maroon/10",
      iconBg: "from-maroon/20 to-maroon/10",
      bulletColor: "text-maroon",
      features: [
        "Intensive preparation for GSEB examinations.",
        "Regular practice tests and revision sessions.",
        "Advanced curriculum covering all board subjects.",
        "Expert guidance for achieving best results.",
        "Focus on academic excellence and character building.",
      ],
    },
  ];

  return (
    <div className="relative max-w-7xl mx-auto px-4">
      <div className="overflow-hidden" ref={emblaRef}>
        <div className="flex gap-4">
          {classCards.map((card, index) => (
            <div key={index} className="flex-[0_0_100%] md:flex-[0_0_48%] lg:flex-[0_0_32%] min-w-0">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="h-full bg-card rounded-3xl p-8 md:p-10 relative overflow-hidden group border-2 border-border/50 shadow-lg hover:shadow-2xl transition-all duration-500 group-hover:border-secondary/50 group-hover:-translate-y-2"
              >
                <AnimatedCardBackground index={index} />
                <div className="relative z-10">
                  <div className="flex items-center gap-4 mb-6">
                    <div className={`w-16 h-16 rounded-xl bg-gradient-to-br ${card.iconBg} flex items-center justify-center group-hover:ring-2 group-hover:ring-secondary/30 group-hover:scale-110 transition-all duration-500`}>
                      <card.icon className="h-8 w-8 text-maroon group-hover:text-secondary transition-colors duration-300" />
                    </div>
                    <div>
                      <h3 className="font-heading text-2xl font-bold text-maroon">
                        {card.title}
                      </h3>
                      <p className="text-sm text-muted-foreground">
                        {card.subtitle}
                      </p>
                    </div>
                  </div>
                  <ul className="space-y-3">
                    {card.features.map((feature, idx) => (
                      <li key={idx} className="flex items-start gap-3">
                        <span className={`${card.bulletColor} font-bold mt-1`}>•</span>
                        <span className="text-muted-foreground">
                          {typeof feature === 'string' ? feature : (
                            <>
                              <strong>{feature.text}</strong>{feature.description}
                            </>
                          )}
                        </span>
                      </li>
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

const Academics = () => {
  return (
    <Layout>
      {/* Hero Section */}
      <PageHero
        title="ACADEMICS"
        subtitle="Academic Excellence with a Modern Approach"
        description=""
        backgroundImage={heroAcademics}
        overlayOpacity="light"
      />

      {/* Academic Facilities Carousel - aligned with Activities */}
      <section className="py-16 md:py-20 relative overflow-hidden">
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
              Facilities
            </span>
            <h2 className="font-heading text-3xl md:text-4xl lg:text-5xl font-bold text-maroon mb-5 tracking-tight leading-tight max-w-4xl mx-auto">
              Our Learning Spaces
            </h2>
            <div className="w-16 h-1 mx-auto mb-5 bg-gradient-to-r from-transparent via-primary to-transparent rounded-full" />
            <p className="text-muted-foreground max-w-2xl mx-auto text-lg md:text-xl leading-relaxed">
              Modern facilities designed to enhance the learning experience
            </p>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <AcademicCarousel />
          </motion.div>
        </div>
      </section>

      {/* Classes Section - aligned with Activities */}
      <section className="py-16 md:py-20 bg-pattern-dots relative overflow-hidden">
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
              Curriculum
            </span>
            <h2 className="font-heading text-3xl md:text-4xl lg:text-5xl font-bold text-maroon mb-5 tracking-tight leading-tight max-w-4xl mx-auto">
              Classes Offered
            </h2>
            <div className="w-16 h-1 mx-auto mb-5 bg-gradient-to-r from-transparent via-primary to-transparent rounded-full" />
            <p className="text-muted-foreground max-w-2xl mx-auto text-lg md:text-xl leading-relaxed">
              Comprehensive education from Early Years to Secondary Classes following the GSEB curriculum
            </p>
          </motion.div>

          <ClassesCarousel />
        </div>
      </section>

      {/* Subjects Section - aligned with Activities */}
      <section className="py-16 md:py-20 relative overflow-hidden">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[300px] bg-secondary/5 rounded-full blur-3xl pointer-events-none" />
        <div className="container relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-14 md:mb-20"
          >
            <span className="inline-flex items-center px-5 py-2 rounded-full text-sm font-semibold mb-5 bg-secondary/20 text-maroon border border-secondary/30 shadow-sm tracking-wide">
              Subjects
            </span>
            <h2 className="font-heading text-3xl md:text-4xl lg:text-5xl font-bold text-maroon mb-5 tracking-tight leading-tight max-w-4xl mx-auto">
              Subjects Offered
            </h2>
            <div className="w-16 h-1 mx-auto mb-5 bg-gradient-to-r from-transparent via-primary to-transparent rounded-full" />
            <p className="text-muted-foreground max-w-2xl mx-auto text-lg md:text-xl leading-relaxed">
              Comprehensive curriculum covering all essential subjects
            </p>
          </motion.div>

          <div className="grid grid-cols-2 sm:grid-cols-4 gap-6">
            {subjects.map((subject, index) => (
              <motion.div
                key={subject.nameEn}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.05 }}
                className="group"
              >
                <div className="h-full bg-card rounded-3xl p-6 text-center relative overflow-hidden flex flex-col border-2 border-border/50 shadow-lg hover:shadow-2xl transition-all duration-500 group-hover:border-secondary/50 group-hover:-translate-y-2">
                  <AnimatedCardBackground index={index} />
                  <div className="relative z-10 flex flex-col flex-1">
                    <div className="w-14 h-14 md:w-16 md:h-16 mx-auto mb-4 rounded-2xl bg-gradient-to-br from-secondary/25 to-accent/25 flex items-center justify-center ring-2 ring-secondary/20 group-hover:ring-secondary/40 group-hover:scale-110 transition-all duration-500 shadow-md">
                      <subject.icon className="h-7 w-7 md:h-8 md:w-8 text-maroon group-hover:text-secondary transition-colors duration-300" />
                    </div>
                    <h3 className="font-heading text-base md:text-lg font-bold text-maroon mb-1 leading-tight group-hover:text-secondary transition-colors duration-300">{subject.nameEn}</h3>
                    <p className="text-sm text-muted-foreground leading-relaxed flex-1">{subject.name}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Academic Philosophy */}
      <section className="py-16 md:py-20 bg-pattern-dots relative overflow-hidden">
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
              Academic Philosophy
            </h2>
            <div className="w-16 h-1 mx-auto mb-5 bg-gradient-to-r from-transparent via-primary to-transparent rounded-full" />
            <p className="text-muted-foreground max-w-2xl mx-auto text-lg md:text-xl leading-relaxed">
              A 360-degree approach to student development
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="mb-10 md:mb-12"
          >
            <div className="card-premium bg-card rounded-2xl p-6 md:p-8 text-center border-l-4 border-primary max-w-3xl mx-auto">
              <p className="text-muted-foreground text-lg leading-relaxed">
                Since all children are unique and must have a stimulating educational environment where
                they can grow physically, mentally, emotionally, and socially. We have created an atmosphere
                where students can meet their full potential. We are building the leader of tomorrow
                through an all new academic Philosophy, exclusively designed with an aim of providing 360
                degree development to our students.
              </p>
            </div>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { icon: Award, title: "Discipline", color: "from-primary/20 to-primary/10" },
              { icon: BookOpen, title: "Hard work", color: "from-secondary/20 to-accent/10" },
              { icon: GraduationCap, title: "Academic", color: "from-maroon/20 to-maroon/10" },
              { icon: Dumbbell, title: "Physical fitness", color: "from-growth/20 to-growth/10" },
              { icon: Globe, title: "Exposure", color: "from-primary/20 to-primary/10" },
              { icon: Brain, title: "Reflective and independent thinking", color: "from-secondary/20 to-accent/10" },
            ].map((item, index) => {
              const IconComponent = item.icon;
              return (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.05 }}
                className="group"
              >
                <div className="h-full bg-card rounded-3xl p-6 md:p-8 relative overflow-hidden flex flex-col border-2 border-border/50 shadow-lg hover:shadow-2xl transition-all duration-500 group-hover:border-secondary/50 group-hover:-translate-y-2">
                  <AnimatedCardBackground index={index} />
                  <div className="relative z-10 flex flex-col flex-1 items-center text-center">
                    <div className="w-14 h-14 mb-4 rounded-2xl bg-gradient-to-br from-secondary/25 to-accent/25 flex items-center justify-center ring-2 ring-secondary/20 group-hover:ring-secondary/40 group-hover:scale-110 transition-all shadow-md">
                      <IconComponent className="h-8 w-8 text-maroon group-hover:text-secondary transition-colors" />
                    </div>
                    <h3 className="font-heading text-lg font-bold text-maroon group-hover:text-secondary transition-colors leading-tight">{item.title}</h3>
                  </div>
                </div>
              </motion.div>
            );
            })}
          </div>
        </div>
      </section>

      {/* Board Exam Preparation */}
      <section className="py-16 md:py-24 bg-maroon text-white relative overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-0 right-0 w-96 h-96 bg-secondary/20 rounded-full blur-3xl" />
          <div className="absolute bottom-0 left-0 w-64 h-64 bg-primary/20 rounded-full blur-3xl" />
        </div>
        
        <div className="container relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center max-w-3xl mx-auto"
          >
            <span className="inline-flex items-center px-5 py-2 rounded-full text-sm font-semibold mb-5 bg-white/20 text-white border border-white/30 shadow-sm tracking-wide">
              Board Exam Excellence
            </span>
            <h2 className="font-heading text-3xl md:text-4xl lg:text-5xl font-bold mb-5 tracking-tight leading-tight">
              Board Exam Preparation
            </h2>
            <div className="w-16 h-1 mx-auto mb-5 bg-white/50 rounded-full" />
            <p className="text-xl opacity-90 mb-8 leading-relaxed">
              Special focus on Std 9 and 10 students with intensive preparation for
              GSEB examinations. Regular practice tests, revision sessions,
              and guidance to help students achieve their best results.
            </p>
            <Button variant="hero" size="lg" className="shadow-elevated" asChild>
              <Link to="/admission">Enquire for Admission</Link>
            </Button>
          </motion.div>
        </div>
      </section>
    </Layout>
  );
};

export default Academics;
