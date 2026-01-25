import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Phone, MessageCircle, GraduationCap, Users, Award, Palette } from "lucide-react";
import heroImage from "@/assets/hero-school.jpg";

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
      delayChildren: 0.2,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6 },
  },
};

export function HeroSection() {
  return (
    <section className="relative min-h-[90vh] flex items-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0">
        <img
          src={heroImage}
          alt="Happy students at Siddharth's Miracles School"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-maroon/85 via-maroon/70 to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-t from-maroon/50 to-transparent" />
      </div>

      {/* Content */}
      <div className="container relative z-10 py-20">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="max-w-2xl text-white"
        >
          {/* Admission Badge */}
          <motion.div variants={itemVariants}>
            <span className="inline-flex items-center gap-2 px-4 py-2 bg-secondary/90 text-secondary-foreground rounded-full text-sm font-semibold mb-6">
              <span className="w-2 h-2 bg-growth rounded-full animate-pulse" />
              Admissions Open 2026-27
            </span>
          </motion.div>

          {/* Main Heading */}
          <motion.h1
            variants={itemVariants}
            className="font-heading text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-4"
          >
            Siddharth's Miracles
            <span className="block text-secondary mt-2">School</span>
          </motion.h1>

          {/* Tagline */}
          <motion.p
            variants={itemVariants}
            className="text-xl md:text-2xl font-heading italic opacity-90 mb-2"
          >
            "Where Each Day is a Miracle"
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
            <Button variant="hero" size="lg" asChild>
              <Link to="/admission">
                <GraduationCap className="h-5 w-5" />
                Admission Enquiry
              </Link>
            </Button>
            <Button variant="outlineWarm" size="lg" className="text-white border-white hover:bg-white/10" asChild>
              <a href="tel:+919876543210">
                <Phone className="h-5 w-5" />
                Call Now
              </a>
            </Button>
            <Button variant="whatsapp" size="lg" asChild>
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
      </div>

      {/* Decorative Wave */}
      <div className="absolute bottom-0 left-0 right-0">
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

// Highlights Section
const highlights = [
  {
    icon: GraduationCap,
    title: "ગુજરાતી માધ્યમ",
    titleEn: "Gujarati Medium",
    description: "Quality education in mother tongue with strong foundation",
  },
  {
    icon: Users,
    title: "અનુભવી શિક્ષકો",
    titleEn: "Experienced Teachers",
    description: "Dedicated faculty with years of teaching excellence",
  },
  {
    icon: Award,
    title: "શિસ્ત અને સંસ્કાર",
    titleEn: "Discipline & Values",
    description: "Building character along with academic excellence",
  },
  {
    icon: Palette,
    title: "સહ-અભ્યાસિક પ્રવૃત્તિઓ",
    titleEn: "Co-curricular Activities",
    description: "Holistic development through sports, arts & culture",
  },
];

export function HighlightsSection() {
  return (
    <section className="py-16 md:py-24 bg-pattern-dots">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="font-heading text-3xl md:text-4xl font-bold text-maroon mb-4">
            Why Choose Us?
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            We provide a nurturing environment where every child can discover their potential
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {highlights.map((item, index) => (
            <motion.div
              key={item.titleEn}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="card-hover"
            >
              <div className="h-full bg-card rounded-2xl p-6 shadow-card border border-border/50 text-center">
                <div className="w-16 h-16 mx-auto mb-4 rounded-xl bg-gradient-to-br from-secondary/20 to-accent/20 flex items-center justify-center">
                  <item.icon className="h-8 w-8 text-maroon" />
                </div>
                <h3 className="font-heading text-lg font-bold text-maroon mb-1">
                  {item.title}
                </h3>
                <p className="text-sm font-medium text-primary mb-2">{item.titleEn}</p>
                <p className="text-sm text-muted-foreground">{item.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
