import { Layout } from "@/components/layout/Layout";
import { motion } from "framer-motion";
import { Heart, Target, Eye, BookOpen, Users, Award, ChevronLeft, ChevronRight, Shield, GraduationCap, Sparkles } from "lucide-react";
import { PageHero } from "@/components/ui/PageHero";
import schoolLogo from "@/assets/school-logo.png";
import heroSchool from "@/assets/hero-school.jpg";
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
        badge="Our Story"
        title="About Our School"
        description="Siddharth's Miracles School is a co-educational Day school established in 2021, offering world-class educational opportunities in Gandhinagar, Gujarat with a vision to set a new benchmark of quality education through innovative teaching methods."
        backgroundImage={heroSchool}
        icon={BookOpen}
      />

      {/* Student Life Gallery */}
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
              Life at Siddharth's Miracles
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
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
      <section className="py-16 md:py-20 bg-pattern-dots">
        <div className="container">
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
              <span className="inline-block px-4 py-1 bg-secondary/20 text-maroon rounded-full text-sm font-semibold mb-4">
                Established 2021
              </span>
              <h2 className="font-heading text-3xl md:text-4xl font-bold text-maroon mb-6">
                About The School
              </h2>
              <div className="space-y-4 text-muted-foreground text-lg">
                <p>
                  Siddharth's Miracles School is a co-educational Day school established in the year 2021, 
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
      <section className="py-16 md:py-20">
        <div className="container">
          <div className="grid md:grid-cols-2 gap-8">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="group"
            >
              <div className="card-3d bg-card rounded-2xl p-10 shadow-card border border-border/50 h-full relative overflow-hidden">
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
              <div className="card-3d bg-card rounded-2xl p-10 shadow-card border border-border/50 h-full relative overflow-hidden">
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

      {/* Values Section */}
      <section className="py-16 md:py-20 bg-gradient-to-b from-secondary/5 to-background">
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <span className="inline-block px-4 py-1 bg-maroon/10 text-maroon rounded-full text-sm font-semibold mb-4">
              What We Stand For
            </span>
            <h2 className="font-heading text-3xl md:text-4xl font-bold text-maroon mb-4">
              Our Core Values
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Our Motto: "Think it's possible…… Do the impossible."
            </p>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {values.map((value, index) => (
              <motion.div
                key={value.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="group"
              >
                <div className="card-3d h-full bg-card rounded-2xl p-8 shadow-card border border-border/50 text-center relative overflow-hidden">
                  <div className={`absolute inset-0 bg-gradient-to-br ${value.color} opacity-0 group-hover:opacity-100 transition-opacity duration-500`} />
                  <div className="relative z-10">
                    <div className="w-16 h-16 mx-auto mb-4 rounded-2xl bg-gradient-to-br from-secondary/20 to-accent/20 flex items-center justify-center group-hover:scale-110 group-hover:rotate-6 transition-all duration-300">
                      <value.icon className="h-8 w-8 text-maroon" />
                    </div>
                    <h3 className="font-heading text-xl font-bold text-maroon mb-2">{value.title}</h3>
                    <p className="text-muted-foreground">{value.description}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Founder Message */}
      <section className="py-16 md:py-24 bg-pattern-dots">
        <div className="container">
          <div className="max-w-4xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="text-center mb-12"
            >
              <span className="inline-block px-4 py-1 bg-maroon/10 text-maroon rounded-full text-sm font-semibold mb-4">
                Message from Founder
              </span>
              <h2 className="font-heading text-3xl md:text-4xl font-bold text-maroon mb-6">
                "Education is not about going to school and getting a degree. 
                It's about widening your knowledge and absorbing the truth about life"
              </h2>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="bg-card rounded-2xl p-8 md:p-12 shadow-card border border-border/50"
            >
              <div className="space-y-6 text-muted-foreground text-lg leading-relaxed">
                <p>
                  Education is the transmission of knowledge skills, and character traits and manifests 
                  in various forms. Formal education occurs within a structured institutional framework, 
                  such as schools, following a curriculum. Non-formal education also follows a structured 
                  approach but occurs outside the formal schooling system, while informal education entails 
                  unstructured learning through daily experiences.
                </p>
                <p>
                  It gives me great pleasure to welcome you to SIDDHARTH'S MIRACLES SCHOOL, where we have 
                  created an environment where students feel safe, valued and respected, and where they can 
                  thrive academically, socially, physically, and emotionally. We believe that every child 
                  is endowed with a unique set of attributes and abilities, which need to be nurtured so 
                  that they bloom.
                </p>
                <p>
                  At Siddharth's Miracles, we provide a learning environment that inspires and motivates 
                  children, and encourages them to explore limitless possibilities, in their quest for 
                  knowledge. Since, our goal is to make Siddharth's Miracles a happy school, WHERE EACH 
                  DAY WILL BE A MIRACLE, where teaching is pleasure and learning is fun, where excelling 
                  is passion, and culture and values have a pre-eminent place. Our caring and committed 
                  teaching and non-teaching staff are our pillars of strength.
                </p>
                <p>
                  We warmly invite you to explore Siddharth's Miracles. Where we aim to create an environment 
                  where students can thrive and reach their full potential.
                </p>
              </div>
              
              <div className="mt-8 pt-8 border-t border-border/50 flex flex-col md:flex-row justify-between items-center gap-4">
                <div className="text-center md:text-left">
                  <p className="font-heading text-lg font-bold text-maroon">GEETHA SATISH PISHARODY</p>
                </div>
                <div className="text-center md:text-right">
                  <p className="font-heading text-lg font-bold text-maroon">SURESH KESHAVLAL JAIN</p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Affiliation */}
      <section className="py-16 md:py-24 bg-gradient-to-b from-background to-white relative overflow-hidden">
        <div className="container relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="max-w-4xl mx-auto"
          >
            {/* Main Card Container */}
            <div className="relative bg-white rounded-3xl shadow-elevated border border-border/50 overflow-hidden">
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
