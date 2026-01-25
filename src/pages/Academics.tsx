import { Layout } from "@/components/layout/Layout";
import { motion } from "framer-motion";
import { BookOpen, Calculator, FlaskConical, Globe, Languages, Palette, PenTool, Microscope, ChevronLeft, ChevronRight } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import useEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";
import { useCallback } from "react";

// Import academic images
import academicsLab from "@/assets/academics-lab.jpg";
import academicsLibrary from "@/assets/academics-library.jpg";
import academicsComputer from "@/assets/academics-computer.jpg";
import heroClassroom from "@/assets/hero-classroom.jpg";

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

const Academics = () => {
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
            <span className="inline-block px-4 py-1 bg-maroon/10 text-maroon rounded-full text-sm font-semibold mb-4">
              Excellence in Education
            </span>
            <h1 className="font-heading text-4xl md:text-5xl font-bold text-maroon mb-6">
              Academics
            </h1>
            <p className="text-lg text-muted-foreground">
              Comprehensive Gujarati Board curriculum from Std 1 to 10 with focus on
              strong foundations and holistic development.
            </p>
          </motion.div>
        </div>
      </section>

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
              We offer education from Standard 1 to Standard 10 following the Gujarat Board curriculum
            </p>
          </motion.div>

          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-4">
            {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((std, index) => (
              <motion.div
                key={std}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.05 }}
                className="group"
              >
                <div className="card-3d bg-card rounded-2xl p-6 shadow-card border border-border/50 text-center">
                  <div className="w-14 h-14 mx-auto mb-3 rounded-full bg-gradient-to-br from-secondary to-accent flex items-center justify-center group-hover:scale-110 group-hover:rotate-6 transition-all duration-300">
                    <span className="text-xl font-bold text-secondary-foreground">{std}</span>
                  </div>
                  <p className="font-semibold text-foreground">Std {std}</p>
                  <p className="text-xs text-muted-foreground">ધોરણ {std}</p>
                </div>
              </motion.div>
            ))}
          </div>
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
                    <h3 className="font-heading text-lg font-bold text-maroon">{subject.name}</h3>
                    <p className="text-sm text-muted-foreground">{subject.nameEn}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Teaching Methodology */}
      <section className="py-16 md:py-20 bg-gradient-to-b from-secondary/5 to-background">
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h2 className="font-heading text-3xl md:text-4xl font-bold text-maroon mb-4">
              Our Teaching Methodology
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              We combine traditional teaching with modern methods for effective learning
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-6">
            {methodology.map((item, index) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, x: index % 2 === 0 ? -30 : 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="group"
              >
                <div className="card-hover bg-card rounded-2xl p-8 shadow-card border border-border/50 flex gap-6 items-start">
                  <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-secondary/20 to-accent/20 flex items-center justify-center text-2xl flex-shrink-0 group-hover:scale-110 transition-transform duration-300">
                    {item.icon}
                  </div>
                  <div>
                    <h3 className="font-heading text-xl font-bold text-maroon mb-2">{item.title}</h3>
                    <p className="text-muted-foreground">{item.description}</p>
                  </div>
                </div>
              </motion.div>
            ))}
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
