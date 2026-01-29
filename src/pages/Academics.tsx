import { Layout } from "@/components/layout/Layout";
import { motion } from "framer-motion";
import { BookOpen, Calculator, FlaskConical, Globe, Languages, Palette, PenTool, Microscope, ChevronLeft, ChevronRight, GraduationCap } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { PageHero } from "@/components/ui/PageHero";
import useEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";
import { useCallback } from "react";
import heroClassroom from "@/assets/hero-classroom.jpg";

// Import academic images
import academicsLab from "@/assets/academics-lab.jpg";
import academicsLibrary from "@/assets/academics-library.jpg";
import academicsComputer from "@/assets/academics-computer.jpg";

const academicImages = [
  { src: heroClassroom, title: "Interactive Classrooms", desc: "Modern learning environment" },
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
        <div className="flex">
          {academicImages.map((image, index) => (
            <div key={index} className="flex-[0_0_100%] md:flex-[0_0_50%] lg:flex-[0_0_33.333%] min-w-0 pl-4">
              <div className="relative group overflow-hidden rounded-2xl shadow-card">
                <div className="image-zoom aspect-[4/3]">
                  <img
                    src={image.src}
                    alt={image.title}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-maroon/80 via-maroon/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                <div className="absolute bottom-0 left-0 right-0 p-6 text-white transform translate-y-full group-hover:translate-y-0 transition-transform duration-500">
                  <h3 className="font-heading text-xl font-bold">{image.title}</h3>
                  <p className="text-sm opacity-90">{image.desc}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      
      <button
        onClick={scrollPrev}
        className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 z-10 w-10 h-10 rounded-full bg-white shadow-lg flex items-center justify-center text-maroon hover:bg-secondary hover:text-white transition-all duration-300"
      >
        <ChevronLeft className="w-5 h-5" />
      </button>
      <button
        onClick={scrollNext}
        className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 z-10 w-10 h-10 rounded-full bg-white shadow-lg flex items-center justify-center text-maroon hover:bg-secondary hover:text-white transition-all duration-300"
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
        "Intensive preparation for Gujarat Board examinations.",
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
                className="bg-card rounded-2xl p-8 md:p-10 shadow-card border border-border/50 relative overflow-hidden group h-full"
              >
                <div className={`absolute inset-0 bg-gradient-to-br ${card.color} opacity-0 group-hover:opacity-100 transition-opacity duration-500`} />
                <div className="relative z-10">
                  <div className="flex items-center gap-4 mb-6">
                    <div className={`w-16 h-16 rounded-xl bg-gradient-to-br ${card.iconBg} flex items-center justify-center`}>
                      <card.icon className="h-8 w-8 text-maroon" />
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
        backgroundImage={heroClassroom}
        overlayOpacity="light"
      />

      {/* Academic Facilities Carousel */}
      <section className="py-16 md:py-20">
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h2 className="font-heading text-3xl md:text-4xl font-bold text-maroon mb-4">
              Our Learning Spaces
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
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

      {/* Classes Section */}
      <section className="py-16 md:py-20 bg-pattern-dots">
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h2 className="font-heading text-3xl md:text-4xl font-bold text-maroon mb-4">
              Classes Offered
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Comprehensive education from Early Years to Secondary Classes following the Gujarat Board curriculum
            </p>
          </motion.div>

          <ClassesCarousel />
        </div>
      </section>

      {/* Subjects Section */}
      <section className="py-16 md:py-20">
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h2 className="font-heading text-3xl md:text-4xl font-bold text-maroon mb-4">
              Subjects Offered
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
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
                <div className="card-3d bg-card rounded-2xl p-6 shadow-card border border-border/50 text-center relative overflow-hidden">
                  <div className={`absolute inset-0 bg-gradient-to-br ${subject.color} opacity-0 group-hover:opacity-100 transition-opacity duration-500`} />
                  <div className="relative z-10">
                    <div className="w-16 h-16 mx-auto mb-4 rounded-xl bg-gradient-to-br from-secondary/20 to-accent/20 flex items-center justify-center group-hover:scale-110 group-hover:rotate-3 transition-all duration-300">
                      <subject.icon className="h-8 w-8 text-maroon" />
                    </div>
                    <h3 className="font-heading text-lg font-bold text-maroon">{subject.nameEn}</h3>
                    <p className="text-sm text-muted-foreground">{subject.name}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Academic Philosophy */}
      <section className="py-16 md:py-20 bg-pattern-dots">
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h2 className="font-heading text-3xl md:text-4xl font-bold text-maroon mb-4">
              Academic Philosophy
            </h2>
          </motion.div>

          <div className="max-w-4xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="bg-card rounded-2xl p-8 md:p-12 shadow-card border border-border/50 mb-8"
            >
              <p className="text-muted-foreground text-lg leading-relaxed mb-6">
                Since all children are unique and must have a stimulating educational environment where 
                they can grow physically, mentally, emotionally, and socially. We have created an atmosphere 
                where students can meet their full potential. We provide a safe environment where students 
                are invited to share their ideas and take risks. We are building the leader of tomorrow 
                through an all new academic Philosophy, exclusively designed with an aim of providing 360 
                degree development to our students.
              </p>
              
              <div className="grid sm:grid-cols-2 gap-4">
                {["Discipline", "Hard work", "Academic", "Physical fitness", "Exposure", "Reflective and independent thinking"].map((item, index) => (
                  <div key={index} className="flex items-center gap-3">
                    <span className="text-secondary font-bold">•</span>
                    <span className="text-foreground font-medium">{item}</span>
                  </div>
                ))}
              </div>
            </motion.div>
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
            <span className="inline-block px-4 py-1 bg-secondary/20 text-secondary rounded-full text-sm font-semibold mb-6">
              Board Exam Excellence
            </span>
            <h2 className="font-heading text-3xl md:text-5xl font-bold mb-6">
              Board Exam Preparation
            </h2>
            <p className="text-xl opacity-90 mb-8">
              Special focus on Std 9 and 10 students with intensive preparation for
              Gujarat Board examinations. Regular practice tests, revision sessions,
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
