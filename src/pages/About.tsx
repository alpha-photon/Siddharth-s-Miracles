import { useState, useCallback } from "react";
import { Layout } from "@/components/layout/Layout";
import { motion } from "framer-motion";
import { Heart, Target, Eye, BookOpen, Users, Award, Shield, Sparkles, GraduationCap, ChevronLeft, ChevronRight } from "lucide-react";
import { PageHero } from "@/components/ui/PageHero";
import { AnimatedCardBackground } from "@/components/ui/AnimatedCardBackground";
import { schoolLogo, heroAbout } from "@/lib/cloudinary-images";
import useEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";
import { Button } from "@/components/ui/button";
import { Phone } from "lucide-react";
import { MessageCircle } from "lucide-react";

const values = [
  {
    icon: Heart,
    title: "Cleanliness",
    description: "Maintaining a clean and hygienic environment for all.",
    color: "from-secondary/30 to-accent/20",
  },
  {
    icon: Target,
    title: "Determination",
    description: "Fostering strong will and commitment to achieve goals.",
    color: "from-primary/20 to-primary/10",
  },
  {
    icon: Award,
    title: "Hard Work",
    description: "Encouraging dedication and perseverance in all endeavors.",
    color: "from-growth/20 to-growth/10",
  },
  {
    icon: BookOpen,
    title: "Perseverance",
    description: "Building resilience and persistence in facing challenges.",
    color: "from-maroon/20 to-maroon/10",
  },
  {
    icon: Shield,
    title: "Self-Discipline",
    description: "Instilling self-control and responsible behavior.",
    color: "from-secondary/30 to-accent/20",
  },
  {
    icon: Heart,
    title: "Compassion",
    description: "Teaching empathy and kindness towards others.",
    color: "from-primary/20 to-primary/10",
  },
  {
    icon: Shield,
    title: "Honesty",
    description: "Upholding truthfulness and integrity in all actions.",
    color: "from-growth/20 to-growth/10",
  },
  {
    icon: Users,
    title: "Respect",
    description: "Valuing dignity and respect for all individuals.",
    color: "from-maroon/20 to-maroon/10",
  },
  {
    icon: Users,
    title: "Team Work",
    description: "Collaborating effectively to achieve common goals.",
    color: "from-secondary/30 to-accent/20",
  },
  {
    icon: Target,
    title: "Commitment",
    description: "Dedication to excellence in all school activities.",
    color: "from-primary/20 to-primary/10",
  },
  {
    icon: Shield,
    title: "Integrity",
    description: "Maintaining strong moral principles and ethics.",
    color: "from-growth/20 to-growth/10",
  },
  {
    icon: Award,
    title: "Responsibility",
    description: "Taking ownership and accountability for actions.",
    color: "from-maroon/20 to-maroon/10",
  },
];

function ValuesCarousel() {
  const [emblaRef, emblaApi] = useEmblaCarousel(
    { loop: true, align: "start", slidesToScroll: 1, duration: 25 },
    [Autoplay({ delay: 4500, stopOnInteraction: false })]
  );
  const scrollPrev = useCallback(() => emblaApi?.scrollPrev(), [emblaApi]);
  const scrollNext = useCallback(() => emblaApi?.scrollNext(), [emblaApi]);

  return (
    <div className="relative">
      <div className="w-full" ref={emblaRef}>
        <div className="flex gap-6 pl-12 pr-12 md:pl-14 md:pr-14">
          {values.map((value, index) => (
            <div
              key={value.title}
              className="flex-[0_0_85%] sm:flex-[0_0_45%] md:flex-[0_0_32%] lg:flex-[0_0_24%] min-w-0"
            >
              <div className="h-full bg-card rounded-3xl p-5 md:p-6 text-center relative overflow-hidden flex flex-col border-2 border-border/50 shadow-lg hover:shadow-xl transition-all duration-300 group hover:border-secondary/50">
                <AnimatedCardBackground index={index} />
                <div className="relative z-10 flex flex-col flex-1">
                  <div className="w-14 h-14 md:w-16 md:h-16 mx-auto mb-4 rounded-2xl bg-gradient-to-br from-secondary/25 to-accent/25 flex items-center justify-center ring-2 ring-secondary/20 group-hover:ring-secondary/40 transition-all shadow-md">
                    <value.icon className="h-7 w-7 md:h-8 md:w-8 text-maroon group-hover:text-secondary transition-colors duration-300" />
                  </div>
                  <h3 className="font-heading text-base md:text-lg font-bold text-maroon mb-2 leading-tight group-hover:text-secondary transition-colors">{value.title}</h3>
                  <p className="text-muted-foreground text-sm leading-relaxed flex-1">{value.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      <button
        type="button"
        onClick={scrollPrev}
        aria-label="Previous values"
        className="absolute left-4 top-1/2 -translate-y-1/2 z-10 w-10 h-10 md:w-12 md:h-12 rounded-full bg-white shadow-lg flex items-center justify-center text-maroon hover:bg-secondary hover:text-white transition-all duration-300 border border-border/50"
      >
        <ChevronLeft className="w-5 h-5 md:w-6 md:h-6" />
      </button>
      <button
        type="button"
        onClick={scrollNext}
        aria-label="Next values"
        className="absolute right-4 top-1/2 -translate-y-1/2 z-10 w-10 h-10 md:w-12 md:h-12 rounded-full bg-white shadow-lg flex items-center justify-center text-maroon hover:bg-secondary hover:text-white transition-all duration-300 border border-border/50"
      >
        <ChevronRight className="w-5 h-5 md:w-6 md:h-6" />
      </button>
    </div>
  );
}

const About = () => {
  return (
    <Layout>
      {/* Hero Section */}
      <PageHero
        title="ABOUT SIDDHARTH'S MIRACLES"
        subtitle="Where Each Day is a Miracle"
        description=""
        backgroundImage={heroAbout}
        overlayOpacity="light"
      />

      {/* Story Section */}
      <section id="story" className="py-16 md:py-20 bg-pattern-dots relative overflow-hidden">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[300px] bg-secondary/5 rounded-full blur-3xl pointer-events-none" />
        <div className="container relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <div className="relative">
                <div className="bg-gradient-to-br from-secondary/20 to-accent/10 rounded-3xl p-10 flex items-center justify-center">
                  <motion.img
                    src={schoolLogo}
                    alt="Siddharth's Miracles School Logo"
                    className="max-w-[300px] w-full drop-shadow-2xl"
                    animate={{ y: [-5, 5, -5] }}
                    transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                  />
                </div>
                {/* Decorative elements */}
                <div className="absolute -top-4 -right-4 w-20 h-20 bg-secondary/30 rounded-2xl -z-10" />
                <div className="absolute -bottom-4 -left-4 w-16 h-16 bg-primary/20 rounded-full -z-10" />
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <span className="inline-flex items-center px-5 py-2 rounded-full text-sm font-semibold mb-5 bg-primary/10 text-primary border border-primary/20 shadow-sm tracking-wide">
                Established 2021-22
              </span>
              <h2 className="font-heading text-3xl md:text-4xl lg:text-5xl font-bold text-maroon mb-5 tracking-tight leading-tight">
                About The School
              </h2>
              <div className="w-16 h-1 mb-6 bg-gradient-to-r from-primary/50 to-transparent rounded-full" />
              <div className="space-y-4 text-muted-foreground text-lg">
                <p>
                  Siddharth's Miracles School is a co-educational Day school established in the year 2021-22, 
                  with a view of offering world-class educational opportunities in the city of Gandhinagar, 
                  Gujarat with a vision to set a new benchmark of quality education through innovative 
                  teaching methods and a unique teaching philosophy.
                </p>
                <p>
                  Our infrastructure adds on to the overall development we provide in our creative and 
                  unique academic curriculum. The school is affiliated to the GSEB (Gujarat Secondary and 
                  Higher Secondary Education Board).
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Vision & Mission */}
      <section className="py-16 md:py-20 bg-pattern-dots relative overflow-hidden">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[300px] bg-secondary/5 rounded-full blur-3xl pointer-events-none" />
        <div className="container relative z-10">
          <div className="grid md:grid-cols-2 gap-8">
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="h-full"
            >
              <div className="h-full rounded-2xl overflow-hidden bg-gradient-to-br from-maroon/[0.06] via-card to-primary/[0.06] border border-maroon/10 shadow-sm transition-shadow hover:shadow-md">
                <div className="h-1 w-full bg-gradient-to-r from-primary/30 to-maroon/20" />
                <div className="p-6 md:p-8">
                  <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-primary/20 to-maroon/15 flex items-center justify-center mb-5 ring-2 ring-primary/10">
                    <Eye className="h-7 w-7 text-maroon" />
                  </div>
                  <h3 className="font-heading text-2xl font-bold text-maroon mb-3">Our Vision</h3>
                  <p className="text-foreground/90 text-base md:text-lg leading-relaxed">
                    In this education arena, the vision of Siddharth&apos;s Miracles School takes the lead,
                    providing a special platform for students to follow their dreams. This initiative is
                    a trailblazer, moving away from usual methods to create an environment where each
                    student&apos;s unique talents are not just noticed but celebrated—with focus on personalized
                    learning, modern technology, and a commitment to overall growth. We aim to shape
                    individuals who excel academically and become confident, forward-thinking contributors
                    to society. It&apos;s a transformative journey where ambitions become real accomplishment.
                  </p>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="h-full"
            >
              <div className="h-full rounded-2xl overflow-hidden bg-gradient-to-br from-secondary/[0.06] via-card to-maroon/[0.04] border border-maroon/10 shadow-sm transition-shadow hover:shadow-md">
                <div className="h-1 w-full bg-gradient-to-r from-secondary/40 to-maroon/20" />
                <div className="p-6 md:p-8">
                  <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-secondary/25 to-maroon/15 flex items-center justify-center mb-5 ring-2 ring-secondary/10">
                    <Target className="h-7 w-7 text-maroon" />
                  </div>
                  <h3 className="font-heading text-2xl font-bold text-maroon mb-3">Our Mission</h3>
                  <p className="text-foreground/90 text-base md:text-lg leading-relaxed">
                    We are committed to providing a safe and inclusive environment where every student can
                    thrive academically, socially, and emotionally. We believe in fostering creativity,
                    critical thinking, and collaboration to prepare our students for success in an ever-changing
                    world. We are dedicated to equipping our students with the knowledge, skills and values
                    they need to become compassionate global citizens.
                  </p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Values Section - aligned with Activities */}
      <section className="py-16 md:py-20 bg-gradient-to-b from-secondary/5 to-background relative overflow-hidden">
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
              What We Stand For
            </span>
            <h2 className="font-heading text-3xl md:text-4xl lg:text-5xl font-bold text-maroon mb-5 tracking-tight leading-tight max-w-4xl mx-auto">
              Our Core Values
            </h2>
            <div className="w-16 h-1 mx-auto mb-5 bg-gradient-to-r from-transparent via-primary to-transparent rounded-full" />
            <p className="text-muted-foreground max-w-2xl mx-auto text-lg md:text-xl leading-relaxed">
              Our Motto: "Think it's possible…… Do the impossible."
            </p>
          </motion.div>

          <ValuesCarousel />
        </div>
      </section>

      {/* Founder Message */}
      <section className="py-16 md:py-24 relative overflow-hidden">
        <div className="container relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-14 md:mb-20"
          >
            <span className="inline-flex items-center px-5 py-2 rounded-full text-sm font-semibold mb-5 bg-maroon/10 text-maroon border border-maroon/20 shadow-sm tracking-wide">
              Message from Founder
            </span>
            <h2 className="font-heading text-3xl md:text-4xl lg:text-5xl font-bold text-maroon mb-5 tracking-tight leading-tight max-w-4xl mx-auto">
              Our Vision for Education
            </h2>
            <div className="w-16 h-1 mx-auto mb-5 bg-gradient-to-r from-transparent via-primary to-transparent rounded-full" />
            <p className="text-muted-foreground max-w-2xl mx-auto text-lg md:text-xl leading-relaxed">
              Words from our founders
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="mb-14 md:mb-16 max-w-3xl mx-auto"
          >
            <blockquote className="relative text-center">
              <span className="absolute -top-2 left-1/2 -translate-x-1/2 text-6xl md:text-7xl text-primary/20 font-serif leading-none select-none" aria-hidden="true">"</span>
              <p className="font-heading text-xl md:text-2xl text-maroon italic leading-relaxed pt-8 pb-4 px-4">
                "Education is not about going to school and getting a degree. It's about widening your knowledge and absorbing the truth about life."
              </p>
              <footer className="text-sm text-muted-foreground font-medium not-italic">— Message from Founder</footer>
            </blockquote>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {[
              { icon: BookOpen, title: "Forms of Education", description: "Education is the transmission of knowledge, skills, and character traits and manifests in various forms. Formal education occurs within a structured institutional framework, such as schools, following a curriculum. Non-formal education also follows a structured approach but occurs outside the formal schooling system, while informal education entails unstructured learning through daily experiences.", color: "from-primary/20 to-primary/10", author: "Geetha Satish Pisharody" },
              { icon: Heart, title: "Welcome", description: "It gives me great pleasure to welcome you to SIDDHARTH'S MIRACLES SCHOOL, where we have created an environment where students feel safe, valued and respected, and where they can thrive academically, socially, physically, and emotionally. We believe that every child is endowed with a unique set of attributes and abilities, which need to be nurtured so that they bloom.", color: "from-maroon/20 to-maroon/10", author: "Suresh Keshavlal Jain" },
              { icon: Sparkles, title: "Our Goal", description: "At Siddharth's Miracles, we provide a learning environment that inspires and motivates children, and encourages them to explore limitless possibilities in their quest for knowledge. Our goal is to make Siddharth's Miracles a happy school, WHERE EACH DAY WILL BE A MIRACLE, where teaching is pleasure and learning is fun. Our caring and committed teaching and non-teaching staff are our pillars of strength.", color: "from-secondary/20 to-accent/10", author: "Geetha Satish Pisharody" },
              { icon: Users, title: "Invitation", description: "We warmly invite you to explore Siddharth's Miracles. We aim to create an environment where students can thrive and reach their full potential.", color: "from-primary/20 to-primary/10", author: "Suresh Keshavlal Jain" },
            ].map((item, index) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.08 }}
                className="group"
              >
                <div className="card-3d h-full card-premium bg-card rounded-2xl p-6 md:p-8 relative overflow-hidden flex flex-col">
                  <div className={`absolute inset-0 bg-gradient-to-br ${item.color} opacity-0 group-hover:opacity-100 transition-opacity duration-500`} />
                  <div className={`absolute top-0 right-0 w-24 h-24 bg-gradient-to-bl ${item.color} opacity-20 rounded-bl-3xl pointer-events-none`} />
                  <div className="relative z-10 flex flex-col flex-1">
                    <div className="w-14 h-14 mb-4 rounded-2xl bg-gradient-to-br from-secondary/25 to-accent/25 flex items-center justify-center ring-2 ring-secondary/20 group-hover:ring-primary/30 transition-all shadow-md">
                      <item.icon className="h-7 w-7 text-maroon" />
                    </div>
                    <h3 className="font-heading text-lg font-bold text-maroon mb-2 group-hover:text-primary transition-colors leading-tight">{item.title}</h3>
                    <p className="text-sm text-muted-foreground leading-relaxed flex-1">{item.description}</p>
                    <p className="text-xs text-muted-foreground mt-3 pt-2 border-t border-border/50">— {item.author}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Our Logo - Symbolism (Logo left, 4 symbols right) */}
      <section id="our-logo" className="py-16 md:py-24 bg-pattern-dots relative overflow-hidden">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[300px] bg-secondary/5 rounded-full blur-3xl pointer-events-none" />
        <div className="container relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12 md:mb-14"
          >
            <span className="inline-flex items-center px-5 py-2 rounded-full text-sm font-semibold mb-5 bg-maroon/10 text-maroon border border-maroon/20 shadow-sm tracking-wide">
              Our Identity
            </span>
            <h2 className="font-heading text-3xl md:text-4xl lg:text-5xl font-bold text-maroon mb-5 tracking-tight leading-tight max-w-4xl mx-auto">
              Siddharth&apos;s Miracles Logo
            </h2>
            <div className="w-16 h-1 mx-auto mb-5 bg-gradient-to-r from-transparent via-primary to-transparent rounded-full" />
            <p className="text-muted-foreground max-w-2xl mx-auto text-lg md:text-xl leading-relaxed">
              Each symbol in our crest carries a deeper meaning.
            </p>
          </motion.div>

          <LogoCard />
        </div>
      </section>

      {/* Affiliation - aligned with Vision & Mission / other sections */}
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
              Board Affiliation
            </span>
            <h2 className="font-heading text-3xl md:text-4xl lg:text-5xl font-bold text-maroon mb-5 tracking-tight leading-tight max-w-4xl mx-auto">
              GSEB Affiliated
            </h2>
            <div className="w-16 h-1 mx-auto mb-5 bg-gradient-to-r from-transparent via-primary to-transparent rounded-full" />
            <p className="text-muted-foreground max-w-2xl mx-auto text-lg md:text-xl leading-relaxed">
              Recognised by Gujarat Secondary and Higher Secondary Education Board
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="w-full"
          >
            <div className="relative rounded-2xl p-6 md:p-8 lg:p-10 overflow-hidden bg-gradient-to-br from-maroon/[0.06] via-card to-secondary/[0.06] border border-maroon/10 shadow-sm w-full">
              <div className="relative z-10 flex flex-col sm:flex-row items-center gap-6 sm:gap-8 text-center sm:text-left">
                <div className="flex-shrink-0 w-16 h-16 md:w-20 md:h-20 rounded-2xl bg-gradient-to-br from-maroon/15 to-secondary/20 flex items-center justify-center ring-2 ring-maroon/10">
                  <GraduationCap className="h-8 w-8 md:h-10 md:w-10 text-maroon" />
                </div>
                <div className="min-w-0 flex-1">
                  <h3 className="font-heading text-xl md:text-2xl font-bold text-maroon mb-2">Official Recognition</h3>
                  <p className="text-foreground/90 text-base md:text-lg leading-relaxed">
                    We are proud to be affiliated with the <span className="font-semibold text-maroon">Gujarat Secondary and Higher Secondary Education Board</span>, following the standard curriculum while adding our unique approach to holistic development.
                  </p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
      <section className="py-16 md:py-20 bg-pattern-dots relative overflow-hidden">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[300px] bg-secondary/5 rounded-full blur-3xl pointer-events-none" />
        <div className="container relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="max-w-5xl mx-auto group"
          >
            <div className="card-3d card-premium card-elevated bg-card rounded-3xl p-8 md:p-12 relative overflow-hidden border border-border/60 hover:border-primary/20 transition-all duration-500">
              {/* Corner accents for depth */}
              <div className="absolute top-0 right-0 w-40 h-40 bg-gradient-to-bl from-primary/15 via-secondary/10 to-transparent rounded-bl-[2rem] pointer-events-none" />
              <div className="absolute bottom-0 left-0 w-32 h-32 bg-gradient-to-tr from-maroon/10 to-transparent rounded-tr-[2rem] pointer-events-none" />
              {/* Subtle hover gradient */}
              <div className="absolute inset-0 bg-gradient-to-br from-secondary/5 via-transparent to-primary/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
              <div className="relative z-10 flex flex-col lg:flex-row items-center justify-between gap-8">
                {/* Text Content */}
                <div className="flex-1 text-center lg:text-left">
                  <span className="inline-flex items-center px-4 py-1.5 rounded-full text-xs font-semibold mb-4 bg-maroon/10 text-maroon border border-maroon/20 tracking-wide">
                    Admissions Open 2026-27
                  </span>
                  <h2 className="font-heading text-3xl md:text-4xl lg:text-5xl font-bold text-maroon mb-4 group-hover:text-primary/90 transition-colors duration-300">
                    Ready to Begin Your Child's Journey?
                  </h2>
                  <p className="text-lg md:text-xl text-muted-foreground max-w-xl">
                    Admissions are open. We're here to guide you.
                  </p>
                </div>

                {/* Buttons */}
                <div className="flex flex-col sm:flex-row gap-4 shrink-0">
                  <Button variant="hero" size="lg" asChild className="group/btn min-w-[160px]">
                    <a href="tel:+919925941082" className="inline-flex items-center">
                      <Phone className="h-5 w-5 mr-2 group-hover/btn:scale-110 transition-transform duration-300" />
                      Call Now
                    </a>
                  </Button>
                  <Button variant="whatsapp" size="lg" asChild className="group/btn min-w-[160px]">
                    <a
                      href="https://wa.me/919925941082?text=Hello! I'm interested in admission enquiry for my child."
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center"
                    >
                      <MessageCircle className="h-5 w-5 mr-2 group-hover/btn:scale-110 transition-transform duration-300" />
                      WhatsApp
                    </a>
                  </Button>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </Layout>
  );
};

const logoSymbols = [
  {
    title: "Bodhi Tree",
    image: "/tree.png",
    description:
      "Bodhi tree helps in achieving enlightenment as human beings' ultimate goal. Achieving enlightenment comes through meditating, developing self-discipline and exercising compassion for all.",
    accent: "from-growth/20 to-growth/10",
  },
  {
    title: "Education Excellence",
    image: "/educational.png",
    description:
      "This symbol stands for Education Excellence. The purpose of education is to promote student achievement and preparation for global competitiveness by fostering educational excellence and ensuring equal access.",
    accent: "from-primary/20 to-primary/10",
  },
  {
    title: "Skill Based Learning",
    image: "/system.png",
    description:
      "Skill based learning is utilized across an array of fields and subjects due to its malleability and proven benefit to the learner's proficiency in any workplace.",
    accent: "from-secondary/20 to-accent/10",
  },
  {
    title: "Unicorn",
    image: "/unicorn.png",
    description:
      "A Unicorn has a myriad of semantic meanings. It is associated with wisdom, strong spirit, and purity. Also, the image of a Unicorn stands for magic, pure feelings, and integrity.",
    accent: "from-maroon/20 to-maroon/10",
  },
];

function LogoCard() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      className="w-full rounded-2xl overflow-hidden bg-gradient-to-br from-maroon/[0.05] via-card to-secondary/[0.05] border border-maroon/10 shadow-sm"
    >
      <div className="h-1 w-full bg-gradient-to-r from-maroon/20 via-primary/30 to-secondary/30" />
      <div className="p-6 md:p-8 lg:p-10">
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          {/* Left: Logo + motto */}
          <div className="flex flex-col items-center w-full min-w-0">
            <h2 className="font-heading text-2xl md:text-3xl font-bold text-maroon text-center mb-6">
              About Our Logo
            </h2>
            <img
              src={schoolLogo}
              alt="Siddharth's Miracles School Logo"
              className="w-full h-auto max-h-64 md:max-h-80 lg:max-h-[380px] object-contain"
            />
            <p className="font-heading text-maroon font-bold mt-6 text-center text-lg md:text-xl tracking-wide">
              Where Each Day is a Miracle
            </p>
          </div>

          {/* Right: 2x2 grid of symbol cards */}
          <div className="grid grid-cols-2 gap-4 md:gap-5">
            {logoSymbols.map((item, index) => {
              const isOpen = openIndex === index;
              return (
                <motion.div
                  key={item.title}
                  initial={{ opacity: 0, y: 12 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: index * 0.05 }}
                  role="button"
                  tabIndex={0}
                  onClick={() => setOpenIndex(isOpen ? null : index)}
                  onKeyDown={(e) => {
                    if (e.key === "Enter" || e.key === " ") {
                      e.preventDefault();
                      setOpenIndex(isOpen ? null : index);
                    }
                  }}
                  className={`flex flex-col items-center text-center p-4 md:p-5 rounded-2xl border cursor-pointer transition-all duration-300 ${
                    isOpen
                      ? "bg-maroon/[0.06] border-maroon/20 shadow-sm"
                      : "bg-card/80 border-border/50 hover:border-maroon/15 hover:shadow-sm"
                  }`}
                  aria-expanded={isOpen}
                >
                  <div className={`w-16 h-16 md:w-20 md:h-20 rounded-2xl overflow-hidden flex items-center justify-center bg-gradient-to-br ${item.accent} ring-2 ring-white shadow-md mb-3 p-1.5`}>
                    <img
                      src={item.image}
                      alt={item.title}
                      className="w-full h-full object-contain"
                    />
                  </div>
                  <h3 className="font-heading text-sm md:text-base font-bold text-maroon mb-2 leading-tight">
                    {item.title}
                  </h3>
                  <p
                    className={`text-xs md:text-sm text-foreground/85 leading-relaxed ${
                      isOpen ? "" : "line-clamp-4"
                    }`}
                  >
                    {item.description}
                  </p>
                  <span className="mt-2 text-xs font-medium text-maroon/90">
                    {isOpen ? "Tap to collapse" : "Tap to read full"}
                  </span>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
      
    </motion.div>
  );
}

export default About;
