import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { GraduationCap, Users, Award, Palette } from "lucide-react";
import useEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";

import { heroImage1, heroImage2, heroImage3, heroImage4 } from "@/lib/cloudinary-images";

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
    title: "Quality",
    subtitle: "Education",
    tagline: "Nurturing minds with dedicated teachers",
  },
  {
    image: heroImage4,
    title: "Cultural",
    subtitle: "Excellence",
    tagline: "Celebrating our rich Indian heritage",
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
                alt={`${slide.title} ${slide.subtitle} - Siddharth's Miracles School`}
                fetchPriority={index === 0 ? "high" : undefined}
                decoding="async"
                className="w-full h-full object-cover object-top sm:object-center"
              />
              <div className="absolute inset-0 bg-gradient-to-r from-maroon/90 via-maroon/70 to-maroon/40" />
              <div className="absolute inset-0 bg-gradient-to-t from-maroon/60 via-transparent to-transparent" />
            </div>
          ))}
        </div>
      </div>


      {/* Slide Indicators */}
      <div className="absolute bottom-6 sm:bottom-8 left-1/2 -translate-x-1/2 z-20 flex gap-3">
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

      {/* Content - responsive padding for mobile */}
      <div className="container relative z-10 py-12 sm:py-16 md:py-20">
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
              className="font-heading text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-3 sm:mb-4"
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
              GSEB | English Medium | Nursery to Std 10 | Gandhinagar
            </motion.p>

            {/* CTA Button */}
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
    <section className="py-20 md:py-28 bg-pattern-dots relative overflow-hidden">
      {/* Subtle background accent */}
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
            Why Choose Us
          </span>
          <h2 className="font-heading text-3xl md:text-4xl lg:text-5xl font-bold text-maroon mb-5 tracking-tight leading-tight max-w-4xl mx-auto">
            Where Excellence Meets Values
          </h2>
          <div className="w-16 h-1 mx-auto mb-5 bg-gradient-to-r from-transparent via-primary to-transparent rounded-full" />
          <p className="text-muted-foreground max-w-2xl mx-auto text-lg md:text-xl leading-relaxed">
            We provide a nurturing environment where every child can discover their potential
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {highlights.map((item, index) => (
            <motion.div
              key={item.titleEn}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="group"
            >
              <div className="h-full bg-card rounded-3xl p-6 md:p-8 text-center relative overflow-hidden flex flex-col border-2 border-border/50 border-b-0 shadow-lg hover:shadow-2xl transition-all duration-500 group-hover:border-secondary/50 group-hover:-translate-y-2">
                {/* Permanent gradient background */}
                <div className="absolute inset-0 bg-gradient-to-br from-secondary/8 via-accent/5 to-secondary/3" />
                
                {/* Permanent decorative corner elements */}
                <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-bl from-secondary/15 to-secondary/5 rounded-bl-[3rem] pointer-events-none" />
                <div className="absolute bottom-0 left-0 w-24 h-24 bg-gradient-to-tr from-secondary/12 to-secondary/4 rounded-tr-[2rem] pointer-events-none" />
                
                {/* Animated gradient background on hover - mustard yellow */}
                <div className="absolute inset-0 bg-gradient-to-br from-secondary/20 via-secondary/15 to-secondary/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                
                {/* Animated background decorative elements - PERMANENT */}
                {/* Stars */}
                <motion.div
                  animate={{ 
                    rotate: [0, 360],
                    scale: [1, 1.2, 1],
                    opacity: [0.15, 0.35, 0.15]
                  }}
                  transition={{ 
                    duration: 8, 
                    repeat: Infinity, 
                    ease: "linear",
                    delay: index * 0.5
                  }}
                  className="absolute top-4 right-6 w-2 h-2 text-secondary/25"
                >
                  <svg viewBox="0 0 24 24" fill="currentColor" className="w-full h-full">
                    <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
                  </svg>
                </motion.div>
                
                <motion.div
                  animate={{ 
                    rotate: [360, 0],
                    scale: [1, 1.3, 1],
                    opacity: [0.2, 0.4, 0.2]
                  }}
                  transition={{ 
                    duration: 6, 
                    repeat: Infinity, 
                    ease: "linear",
                    delay: index * 0.7
                  }}
                  className="absolute bottom-8 left-4 w-3 h-3 text-secondary/20"
                >
                  <svg viewBox="0 0 24 24" fill="currentColor" className="w-full h-full">
                    <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
                  </svg>
                </motion.div>
                
                {/* Circles */}
                <motion.div
                  animate={{ 
                    scale: [1, 1.5, 1],
                    opacity: [0.15, 0.3, 0.15],
                    x: [0, 10, 0],
                    y: [0, -5, 0]
                  }}
                  transition={{ 
                    duration: 7, 
                    repeat: Infinity, 
                    ease: "easeInOut",
                    delay: index * 0.3
                  }}
                  className="absolute top-1/4 left-8 w-16 h-16 rounded-full border-2 border-secondary/15"
                />
                
                <motion.div
                  animate={{ 
                    scale: [1, 1.3, 1],
                    opacity: [0.12, 0.25, 0.12],
                    x: [0, -8, 0],
                    y: [0, 8, 0]
                  }}
                  transition={{ 
                    duration: 9, 
                    repeat: Infinity, 
                    ease: "easeInOut",
                    delay: index * 0.4
                  }}
                  className="absolute bottom-1/4 right-8 w-12 h-12 rounded-full border-2 border-secondary/12"
                />
                
                {/* Rectangles */}
                <motion.div
                  animate={{ 
                    rotate: [0, 90, 0],
                    scale: [1, 1.2, 1],
                    opacity: [0.18, 0.32, 0.18]
                  }}
                  transition={{ 
                    duration: 10, 
                    repeat: Infinity, 
                    ease: "easeInOut",
                    delay: index * 0.6
                  }}
                  className="absolute top-1/2 left-4 w-8 h-8 border-2 border-secondary/18 rounded-lg"
                />
                
                <motion.div
                  animate={{ 
                    rotate: [90, 0, 90],
                    scale: [1, 1.15, 1],
                    opacity: [0.15, 0.28, 0.15]
                  }}
                  transition={{ 
                    duration: 8, 
                    repeat: Infinity, 
                    ease: "easeInOut",
                    delay: index * 0.5
                  }}
                  className="absolute bottom-1/3 right-4 w-6 h-6 border-2 border-secondary/15 rounded"
                />

                <div className="relative z-10 flex flex-col flex-1">
                  {/* Icon container with enhanced design - mustard yellow hover */}
                  <div className="w-20 h-20 md:w-24 md:h-24 mx-auto mb-6 rounded-3xl bg-gradient-to-br from-secondary/20 via-accent/15 to-secondary/10 flex items-center justify-center ring-4 ring-secondary/10 group-hover:ring-secondary/40 group-hover:bg-gradient-to-br group-hover:from-secondary/30 group-hover:via-secondary/25 group-hover:to-secondary/20 group-hover:scale-110 group-hover:rotate-6 transition-all duration-500 shadow-xl group-hover:shadow-2xl relative overflow-hidden">
                    {/* Icon background glow - mustard yellow */}
                    <div className="absolute inset-0 bg-gradient-to-br from-secondary/40 to-secondary/20 opacity-0 group-hover:opacity-100 blur-xl transition-opacity duration-500" />
                    <item.icon className="h-10 w-10 md:h-12 md:w-12 text-maroon group-hover:text-secondary transition-all duration-300 relative z-10 group-hover:scale-110" />
                  </div>
                  
                  {/* Title with decorative underline - mustard yellow */}
                  <h3 className="font-heading text-xl md:text-2xl font-bold text-maroon mb-3 group-hover:text-secondary transition-colors duration-300 leading-tight relative inline-block">
                    {item.titleEn}
                    <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-secondary to-secondary/70 group-hover:w-full transition-all duration-500" />
                  </h3>
                  
                  {/* Gujarati subtitle */}
                  <p className="text-sm font-semibold text-primary mb-4 tracking-wide">{item.title}</p>
                  
                  {/* Description */}
                  <p className="text-muted-foreground text-sm md:text-base leading-relaxed flex-1 group-hover:text-foreground/80 transition-colors duration-300">
                    {item.description}
                  </p>
                  
                  {/* Decorative bottom accent - mustard yellow */}
                  <div className="mt-4 h-1 w-12 mx-auto rounded-full bg-gradient-to-r from-secondary/50 to-secondary/30 opacity-50 group-hover:opacity-100 group-hover:w-16 group-hover:from-secondary/70 group-hover:to-secondary/50 transition-all duration-500" />
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
