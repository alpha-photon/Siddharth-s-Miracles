import { Layout } from "@/components/layout/Layout";
import { motion } from "framer-motion";
import { Heart, Target, Eye, BookOpen, Users, Award, ChevronLeft, ChevronRight, Shield, GraduationCap, Sparkles } from "lucide-react";
import { PageHero } from "@/components/ui/PageHero";
import schoolLogo from "@/assets/school-logo.png";
import heroAbout from "@/assets/herosection/IMG_3218.JPG";
import useEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";
import { useCallback } from "react";

// Import activity images
import heroCultural from "@/assets/hero-cultural.jpg";
import heroPlayground from "@/assets/hero-playground.jpg";
import activitiesArt from "@/assets/activities-art.jpg";
import activitiesSports from "@/assets/activities-sports.jpg";
import activitiesAssembly from "@/assets/activities-assembly.jpg";

const studentImages = [
  { src: heroCultural, title: "Annual Day Celebrations" },
  { src: heroPlayground, title: "Sports & Games" },
  { src: activitiesArt, title: "Art & Creativity" },
  { src: activitiesSports, title: "Athletic Events" },
  { src: activitiesAssembly, title: "Morning Assembly" },
];

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

function StudentGalleryCarousel() {
  const [emblaRef, emblaApi] = useEmblaCarousel(
    { loop: true, align: "center" },
    [Autoplay({ delay: 3500, stopOnInteraction: false })]
  );

  const scrollPrev = useCallback(() => emblaApi?.scrollPrev(), [emblaApi]);
  const scrollNext = useCallback(() => emblaApi?.scrollNext(), [emblaApi]);

  return (
    <div className="relative">
      <div className="overflow-hidden rounded-2xl" ref={emblaRef}>
        <div className="flex">
          {studentImages.map((image, index) => (
            <div key={index} className="flex-[0_0_100%] md:flex-[0_0_50%] lg:flex-[0_0_40%] min-w-0 px-3">
              <div className="relative group overflow-hidden rounded-2xl shadow-elevated">
                <div className="image-zoom aspect-[3/2]">
                  <img
                    src={image.src}
                    alt={image.title}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-maroon/80 via-transparent to-transparent" />
                <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                  <h3 className="font-heading text-xl font-bold drop-shadow-lg">{image.title}</h3>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      
      <button
        onClick={scrollPrev}
        className="absolute left-2 md:-left-4 top-1/2 -translate-y-1/2 z-10 w-12 h-12 rounded-full bg-white shadow-elevated flex items-center justify-center text-maroon hover:bg-secondary hover:text-white transition-all duration-300 hover:scale-110"
      >
        <ChevronLeft className="w-6 h-6" />
      </button>
      <button
        onClick={scrollNext}
        className="absolute right-2 md:-right-4 top-1/2 -translate-y-1/2 z-10 w-12 h-12 rounded-full bg-white shadow-elevated flex items-center justify-center text-maroon hover:bg-secondary hover:text-white transition-all duration-300 hover:scale-110"
      >
        <ChevronRight className="w-6 h-6" />
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

      {/* Student Life Gallery */}
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
              Gallery
            </span>
            <h2 className="font-heading text-3xl md:text-4xl lg:text-5xl font-bold text-maroon mb-5 tracking-tight leading-tight max-w-4xl mx-auto">
              Life at Siddharth's Miracles
            </h2>
            <div className="w-16 h-1 mx-auto mb-5 bg-gradient-to-r from-transparent via-primary to-transparent rounded-full" />
            <p className="text-muted-foreground max-w-2xl mx-auto text-lg md:text-xl leading-relaxed">
              Glimpses of our vibrant school community
            </p>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <StudentGalleryCarousel />
          </motion.div>
        </div>
      </section>

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
      <section className="py-16 md:py-20 relative overflow-hidden">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[300px] bg-secondary/5 rounded-full blur-3xl pointer-events-none" />
        <div className="container relative z-10">
          <div className="grid md:grid-cols-2 gap-8">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="group"
            >
              <div className="card-3d card-premium bg-card rounded-2xl p-10 h-full relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                <div className="relative z-10">
                  <div className="w-16 h-16 rounded-2xl bg-primary/10 flex items-center justify-center mb-6 group-hover:scale-110 group-hover:rotate-3 transition-all duration-300">
                    <Eye className="h-8 w-8 text-primary" />
                  </div>
                  <h3 className="font-heading text-2xl font-bold text-maroon mb-4">Our Vision</h3>
                  <p className="text-muted-foreground text-lg leading-relaxed">
                    In this education arena, the vision of Siddharth's Miracles school takes the lead, 
                    providing a special platform for students to follow their dreams. This initiative is 
                    a trailblazer, moving away from usual methods to create an environment where each 
                    student's unique talents are not just noticed but celebrated with focus on personalized 
                    learning, modern technology, and a commitment to overall growth. "School Vision" aims 
                    to shape individuals who not only do well academically but also become confident, 
                    forward-thinking contributors to society. This effort is more than just an educational 
                    approach; it's a transformative journey, setting the stage for a future where ambitions 
                    become real accomplishment.
                  </p>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="group"
            >
              <div className="card-3d card-premium bg-card rounded-2xl p-10 h-full relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-secondary/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                <div className="relative z-10">
                  <div className="w-16 h-16 rounded-2xl bg-secondary/20 flex items-center justify-center mb-6 group-hover:scale-110 group-hover:rotate-3 transition-all duration-300">
                    <Target className="h-8 w-8 text-secondary-foreground" />
                  </div>
                  <h3 className="font-heading text-2xl font-bold text-maroon mb-4">Our Mission</h3>
                  <p className="text-muted-foreground text-lg leading-relaxed">
                    We are committed to providing a safe and inclusive environment where every student can 
                    thrive academically, socially, and emotionally. We believe in fostering creativity, 
                    critical thinking, and collaborating to prepare our students for success in an ever-changing 
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

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 md:gap-8">
            {values.map((value, index) => (
              <motion.div
                key={value.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="group"
              >
                <div className="card-3d h-full card-premium bg-card rounded-2xl p-6 md:p-8 text-center relative overflow-hidden flex flex-col">
                  <div className={`absolute inset-0 bg-gradient-to-br ${value.color} opacity-0 group-hover:opacity-100 transition-opacity duration-500`} />
                  <div className={`absolute top-0 right-0 w-24 h-24 bg-gradient-to-bl ${value.color} opacity-20 rounded-bl-3xl pointer-events-none`} />
                  <div className="relative z-10 flex flex-col flex-1">
                    <div className="w-16 h-16 md:w-20 md:h-20 mx-auto mb-5 rounded-2xl bg-gradient-to-br from-secondary/25 to-accent/25 flex items-center justify-center ring-2 ring-secondary/20 group-hover:scale-110 group-hover:rotate-3 group-hover:ring-primary/30 transition-all duration-500 shadow-md">
                      <value.icon className="h-8 w-8 md:h-10 md:w-10 text-maroon group-hover:text-primary transition-colors duration-300" />
                    </div>
                    <h3 className="font-heading text-lg md:text-xl font-bold text-maroon mb-2 leading-tight">{value.title}</h3>
                    <p className="text-muted-foreground text-sm md:text-base leading-relaxed flex-1">{value.description}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Founder Message */}
      <section className="py-16 md:py-24 bg-pattern-dots relative overflow-hidden">
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
            className="mb-10 md:mb-12"
          >
            <div className="card-premium bg-card rounded-2xl p-6 md:p-8 text-center border-l-4 border-primary max-w-3xl mx-auto">
              <p className="font-heading text-xl md:text-2xl font-bold text-maroon italic leading-relaxed">
                "Education is not about going to school and getting a degree. It's about widening your knowledge and absorbing the truth about life"
              </p>
            </div>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
            {[
              { icon: BookOpen, title: "Forms of Education", description: "Education is the transmission of knowledge, skills, and character traits and manifests in various forms. Formal education occurs within a structured institutional framework, such as schools, following a curriculum. Non-formal education also follows a structured approach but occurs outside the formal schooling system, while informal education entails unstructured learning through daily experiences.", color: "from-primary/20 to-primary/10" },
              { icon: Heart, title: "Welcome", description: "It gives me great pleasure to welcome you to SIDDHARTH'S MIRACLES SCHOOL, where we have created an environment where students feel safe, valued and respected, and where they can thrive academically, socially, physically, and emotionally. We believe that every child is endowed with a unique set of attributes and abilities, which need to be nurtured so that they bloom.", color: "from-maroon/20 to-maroon/10" },
              { icon: Sparkles, title: "Our Goal", description: "At Siddharth's Miracles, we provide a learning environment that inspires and motivates children, and encourages them to explore limitless possibilities in their quest for knowledge. Our goal is to make Siddharth's Miracles a happy school, WHERE EACH DAY WILL BE A MIRACLE, where teaching is pleasure and learning is fun. Our caring and committed teaching and non-teaching staff are our pillars of strength.", color: "from-secondary/20 to-accent/10" },
              { icon: Users, title: "Invitation", description: "We warmly invite you to explore Siddharth's Miracles. We aim to create an environment where students can thrive and reach their full potential.", color: "from-primary/20 to-primary/10" },
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
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="mt-10 md:mt-12"
          >
            <div className="card-premium bg-card rounded-2xl p-6 md:p-8 bg-gradient-to-br from-secondary/5 to-accent/5 border border-secondary/20">
              <div className="flex flex-col md:flex-row justify-between items-center gap-6">
                <p className="font-heading text-lg font-bold text-maroon">GEETHA SATISH PISHARODY</p>
                <p className="font-heading text-lg font-bold text-maroon">SURESH KESHAVLAL JAIN</p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Affiliation */}
      <section className="py-16 md:py-24 bg-gradient-to-b from-background to-white relative overflow-hidden">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[300px] bg-secondary/5 rounded-full blur-3xl pointer-events-none" />
        <div className="container relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="max-w-6xl mx-auto"
          >
            {/* Main Card Container */}
            <div className="relative card-premium card-elevated bg-white rounded-3xl overflow-hidden">
              {/* Decorative Top Border */}
              <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-secondary via-primary to-secondary" />
              
              {/* Subtle Pattern Background */}
              <div className="absolute inset-0 bg-pattern-dots opacity-30" />
              
              {/* Content */}
              <div className="relative z-10 px-8 py-12 md:px-12 md:py-16">
                <div className="text-center">
                  {/* Badge with Icon */}
                  <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: 0.1 }}
                    className="inline-flex items-center gap-2 px-5 py-2 bg-gradient-to-r from-secondary/10 to-accent/10 border border-secondary/20 rounded-full mb-8"
                  >
                    <Shield className="w-4 h-4 text-secondary" />
                    <span className="text-sm font-semibold text-secondary">
                      Official Recognition
                    </span>
                  </motion.div>

                  {/* Main Heading with Icon */}
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 0.2 }}
                    className="mb-8"
                  >
                    <div className="flex items-center justify-center gap-4 mb-4">
                      <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-primary/10 to-secondary/10 flex items-center justify-center">
                        <GraduationCap className="w-8 h-8 text-primary" />
                      </div>
                    </div>
                    <h2 className="font-heading text-3xl md:text-5xl font-bold text-maroon mb-4">
                      Gujarati Board Affiliated
                    </h2>
                    <div className="w-24 h-1 bg-gradient-to-r from-transparent via-secondary to-transparent mx-auto" />
                  </motion.div>

                  {/* Description */}
                  <motion.p
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 0.3 }}
                    className="text-lg md:text-xl text-muted-foreground leading-relaxed max-w-3xl mx-auto"
                  >
                    We are proud to be affiliated with the Gujarat Secondary and Higher Secondary
                    Education Board, following the standard curriculum while adding our unique approach
                    to holistic development.
                  </motion.p>

                  {/* Decorative Bottom Elements */}
                  <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 0.4 }}
                    className="flex items-center justify-center gap-2 mt-10"
                  >
                    <div className="w-2 h-2 rounded-full bg-secondary/40" />
                    <div className="w-1 h-1 rounded-full bg-secondary/30" />
                    <Award className="w-5 h-5 text-secondary/50" />
                    <div className="w-1 h-1 rounded-full bg-secondary/30" />
                    <div className="w-2 h-2 rounded-full bg-secondary/40" />
                  </motion.div>
                </div>
              </div>

              {/* Corner Accents */}
              <div className="absolute top-4 right-4 w-20 h-20 bg-secondary/5 rounded-full blur-2xl" />
              <div className="absolute bottom-4 left-4 w-16 h-16 bg-primary/5 rounded-full blur-2xl" />
            </div>
          </motion.div>
        </div>
      </section>
    </Layout>
  );
};

export default About;
