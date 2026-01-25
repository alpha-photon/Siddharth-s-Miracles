import { Layout } from "@/components/layout/Layout";
import { motion } from "framer-motion";
import { Heart, Target, Eye, BookOpen, Users, Award, ChevronLeft, ChevronRight } from "lucide-react";
import schoolLogo from "@/assets/school-logo.png";
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
    title: "સંસ્કાર (Values)",
    description: "We instill traditional Indian values and discipline in every child.",
    color: "from-secondary/30 to-accent/20",
  },
  {
    icon: BookOpen,
    title: "શિક્ષણ (Education)",
    description: "Quality education that builds strong academic foundations.",
    color: "from-primary/20 to-primary/10",
  },
  {
    icon: Users,
    title: "પરિવાર (Family)",
    description: "Every child is treated as part of our extended family.",
    color: "from-growth/20 to-growth/10",
  },
  {
    icon: Award,
    title: "ઉત્કૃષ્ટતા (Excellence)",
    description: "We strive for excellence in everything we do.",
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
      <section className="py-16 md:py-24 bg-gradient-to-b from-secondary/10 to-background">
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center max-w-3xl mx-auto"
          >
            <span className="inline-block px-4 py-1 bg-maroon/10 text-maroon rounded-full text-sm font-semibold mb-4">
              Our Story
            </span>
            <h1 className="font-heading text-4xl md:text-5xl font-bold text-maroon mb-6">
              About Our School
            </h1>
            <p className="text-lg text-muted-foreground">
              Siddharth's Miracles School is dedicated to nurturing young minds with quality education,
              traditional values, and personal care in the heart of Gandhinagar.
            </p>
          </motion.div>
        </div>
      </section>

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
                Established with Vision
              </span>
              <h2 className="font-heading text-3xl md:text-4xl font-bold text-maroon mb-6">
                Our Story
              </h2>
              <div className="space-y-4 text-muted-foreground text-lg">
                <p>
                  Siddharth's Miracles School was established with a vision to provide quality
                  Gujarati medium education that combines academic excellence with traditional
                  Indian values and sanskar.
                </p>
                <p>
                  Located in the peaceful surroundings of Gandhinagar, our school offers a safe
                  and nurturing environment where every child can discover their potential and
                  grow into confident, responsible individuals.
                </p>
                <p>
                  We believe that education is not just about books and exams – it's about
                  building character, developing curiosity, and preparing children for life.
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
                    To be the leading Gujarati medium school that shapes tomorrow's leaders by
                    providing holistic education rooted in Indian values and modern teaching methods.
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
                    To provide quality education that develops intellectual, emotional, and social
                    skills while nurturing discipline, character, and a love for learning in every child.
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
              The principles that guide everything we do at Siddharth's Miracles
            </p>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
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

      {/* Affiliation */}
      <section className="py-16 md:py-24 bg-maroon text-white relative overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-0 left-0 w-96 h-96 bg-secondary/20 rounded-full blur-3xl" />
          <div className="absolute bottom-0 right-0 w-64 h-64 bg-primary/20 rounded-full blur-3xl" />
        </div>
        
        <div className="container text-center relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <span className="inline-block px-4 py-1 bg-secondary/20 text-secondary rounded-full text-sm font-semibold mb-6">
              Official Recognition
            </span>
            <h2 className="font-heading text-3xl md:text-5xl font-bold mb-6">
              Gujarati Board Affiliated
            </h2>
            <p className="text-xl opacity-90 max-w-3xl mx-auto">
              We are proud to be affiliated with the Gujarat Secondary and Higher Secondary
              Education Board, following the standard curriculum while adding our unique approach
              to holistic development.
            </p>
          </motion.div>
        </div>
      </section>
    </Layout>
  );
};

export default About;
