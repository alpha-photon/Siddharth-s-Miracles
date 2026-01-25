import { useState, useEffect, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Phone, MessageCircle, GraduationCap, Users, Award, Palette, ChevronLeft, ChevronRight } from "lucide-react";
import useEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";

// Import hero images
import heroImage1 from "@/assets/hero-school.jpg";
import heroImage2 from "@/assets/hero-playground.jpg";
import heroImage3 from "@/assets/hero-cultural.jpg";
import heroImage4 from "@/assets/hero-classroom.jpg";

const heroSlides = [
  {
    image: heroImage1,
    title: "Siddharth's Miracles",
    subtitle: "School",
    tagline: "Where Each Day is a Miracle",
  },
  {
    image: heroImage2,
    title: "Play & Learn",
    subtitle: "Together",
    tagline: "Building friendships and fitness through play",
  },
  {
    image: heroImage3,
    title: "Cultural",
    subtitle: "Excellence",
    tagline: "Celebrating our rich Indian heritage",
  },
  {
    image: heroImage4,
    title: "Quality",
    subtitle: "Education",
    tagline: "Nurturing minds with dedicated teachers",
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
      delayChildren: 0.3,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.7 },
  },
};

export function HeroSection() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [emblaRef, emblaApi] = useEmblaCarousel(
    { loop: true, duration: 30 },
    [Autoplay({ delay: 5000, stopOnInteraction: false })]
  );

  const scrollPrev = useCallback(() => emblaApi?.scrollPrev(), [emblaApi]);
  const scrollNext = useCallback(() => emblaApi?.scrollNext(), [emblaApi]);

  useEffect(() => {
    if (!emblaApi) return;
    
    const onSelect = () => {
      setCurrentSlide(emblaApi.selectedScrollSnap());
    };
    
    emblaApi.on("select", onSelect);
    onSelect();
    
    return () => {
      emblaApi.off("select", onSelect);
    };
  }, [emblaApi]);

  return (
    <section className="relative min-h-[90vh] flex items-center overflow-hidden">
      {/* Carousel Background */}
      <div className="absolute inset-0" ref={emblaRef}>
        <div className="flex h-full">
          {heroSlides.map((slide, index) => (
            <div key={index} className="flex-[0_0_100%] min-w-0 relative">
              <img
                src={slide.image}
                alt={`${slide.title} ${slide.subtitle}`}
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-r from-maroon/90 via-maroon/70 to-maroon/40" />
              <div className="absolute inset-0 bg-gradient-to-t from-maroon/60 via-transparent to-transparent" />
            </div>
          ))}
        </div>
      </div>

      {/* Navigation Arrows */}
      <button
        onClick={scrollPrev}
        className="absolute left-4 md:left-8 top-1/2 -translate-y-1/2 z-20 w-12 h-12 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 flex items-center justify-center text-white hover:bg-white/20 transition-all duration-300 hover:scale-110"
        aria-label="Previous slide"
      >
        <ChevronLeft className="w-6 h-6" />
      </button>
      <button
        onClick={scrollNext}
        className="absolute right-4 md:right-8 top-1/2 -translate-y-1/2 z-20 w-12 h-12 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 flex items-center justify-center text-white hover:bg-white/20 transition-all duration-300 hover:scale-110"
        aria-label="Next slide"
      >
        <ChevronRight className="w-6 h-6" />
      </button>

      {/* Slide Indicators */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20 flex gap-3">
        {heroSlides.map((_, index) => (
          <button
            key={index}
            onClick={() => emblaApi?.scrollTo(index)}
            className={`h-2 rounded-full transition-all duration-500 ${
              currentSlide === index 
                ? "w-8 bg-secondary" 
                : "w-2 bg-white/50 hover:bg-white/70"
            }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>

      {/* Content */}
      <div className="container relative z-10 py-20">
        <AnimatePresence mode="wait">
          <motion.div
            key={currentSlide}
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            exit="hidden"
            className="max-w-2xl text-white"
          >
            {/* Admission Badge */}
            <motion.div variants={itemVariants}>
              <span className="inline-flex items-center gap-2 px-4 py-2 bg-secondary/90 text-secondary-foreground rounded-full text-sm font-semibold mb-6 shadow-lg">
                <span className="w-2 h-2 bg-growth rounded-full animate-pulse" />
                Admissions Open 2026-27
              </span>
            </motion.div>

            {/* Main Heading */}
            <motion.h1
              variants={itemVariants}
              className="font-heading text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-4"
            >
              {heroSlides[currentSlide].title}
              <span className="block text-secondary mt-2 drop-shadow-lg">
                {heroSlides[currentSlide].subtitle}
              </span>
            </motion.h1>

            {/* Tagline */}
            <motion.p
              variants={itemVariants}
              className="text-xl md:text-2xl font-heading italic opacity-90 mb-2"
            >
              "{heroSlides[currentSlide].tagline}"
            </motion.p>

            {/* Subtitle */}
            <motion.p
              variants={itemVariants}
              className="text-lg opacity-80 mb-8"
            >
              Gujarati Board | Std 1–10 | Gandhinagar
            </motion.p>

            {/* CTA Buttons */}
            <motion.div
              variants={itemVariants}
              className="flex flex-wrap gap-4"
            >
              <Button variant="hero" size="lg" className="shadow-elevated" asChild>
                <Link to="/admission">
                  <GraduationCap className="h-5 w-5" />
                  Admission Enquiry
                </Link>
              </Button>
              <Button variant="outline" size="lg" className="text-white border-white/50 hover:bg-white/10 backdrop-blur-sm" asChild>
                <a href="tel:+919876543210">
                  <Phone className="h-5 w-5" />
                  Call Now
                </a>
              </Button>
              <Button variant="whatsapp" size="lg" className="shadow-lg" asChild>
                <a
                  href="https://wa.me/919876543210?text=Hello! I'm interested in admission enquiry."
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <MessageCircle className="h-5 w-5" />
                  WhatsApp
                </a>
              </Button>
            </motion.div>
          </motion.div>
        </AnimatePresence>
      </div>

      {/* Decorative Wave */}
      <div className="absolute bottom-0 left-0 right-0 z-10">
        <svg
          viewBox="0 0 1440 120"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="w-full h-auto"
          preserveAspectRatio="none"
        >
          <path
            d="M0 120L60 105C120 90 240 60 360 52.5C480 45 600 60 720 67.5C840 75 960 75 1080 67.5C1200 60 1320 45 1380 37.5L1440 30V120H1380C1320 120 1200 120 1080 120C960 120 840 120 720 120C600 120 480 120 360 120C240 120 120 120 60 120H0Z"
            fill="hsl(var(--background))"
          />
        </svg>
      </div>
    </section>
  );
}

// Enhanced Highlights Section with 3D Cards
const highlights = [
  {
    icon: GraduationCap,
    title: "ગુજરાતી માધ્યમ",
    titleEn: "Gujarati Medium",
    description: "Quality education in mother tongue with strong foundation",
    color: "from-secondary/30 to-accent/20",
  },
  {
    icon: Users,
    title: "અનુભવી શિક્ષકો",
    titleEn: "Experienced Teachers",
    description: "Dedicated faculty with years of teaching excellence",
    color: "from-primary/20 to-primary/10",
  },
  {
    icon: Award,
    title: "શિસ્ત અને સંસ્કાર",
    titleEn: "Discipline & Values",
    description: "Building character along with academic excellence",
    color: "from-maroon/20 to-maroon/10",
  },
  {
    icon: Palette,
    title: "સહ-અભ્યાસિક પ્રવૃત્તિઓ",
    titleEn: "Co-curricular Activities",
    description: "Holistic development through sports, arts & culture",
    color: "from-growth/20 to-growth/10",
  },
];

export function HighlightsSection() {
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
          <span className="inline-block px-4 py-1 bg-secondary/20 text-maroon rounded-full text-sm font-semibold mb-4">
            Why Choose Us
          </span>
          <h2 className="font-heading text-3xl md:text-5xl font-bold text-maroon mb-4">
            Where Excellence Meets Values
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
            We provide a nurturing environment where every child can discover their potential
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {highlights.map((item, index) => (
            <motion.div
              key={item.titleEn}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="group"
            >
              <div className="card-3d h-full bg-card rounded-2xl p-8 shadow-card border border-border/50 text-center relative overflow-hidden">
                {/* Gradient background on hover */}
                <div className={`absolute inset-0 bg-gradient-to-br ${item.color} opacity-0 group-hover:opacity-100 transition-opacity duration-500`} />
                
                <div className="relative z-10">
                  <div className="w-20 h-20 mx-auto mb-6 rounded-2xl bg-gradient-to-br from-secondary/20 to-accent/20 flex items-center justify-center group-hover:scale-110 group-hover:rotate-3 transition-all duration-500 shadow-lg">
                    <item.icon className="h-10 w-10 text-maroon group-hover:text-primary transition-colors duration-300" />
                  </div>
                  <h3 className="font-heading text-xl font-bold text-maroon mb-2 group-hover:text-primary transition-colors duration-300">
                    {item.title}
                  </h3>
                  <p className="text-sm font-semibold text-primary mb-3">{item.titleEn}</p>
                  <p className="text-muted-foreground">{item.description}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
