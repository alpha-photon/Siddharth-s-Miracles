import { Layout } from "@/components/layout/Layout";
import { motion } from "framer-motion";
import { Heart, Target, Eye, BookOpen, Users, Award } from "lucide-react";
import schoolLogo from "@/assets/school-logo.png";

const values = [
  {
    icon: Heart,
    title: "સંસ્કાર (Values)",
    description: "We instill traditional Indian values and discipline in every child.",
  },
  {
    icon: BookOpen,
    title: "શિક્ષણ (Education)",
    description: "Quality education that builds strong academic foundations.",
  },
  {
    icon: Users,
    title: "પરિવાર (Family)",
    description: "Every child is treated as part of our extended family.",
  },
  {
    icon: Award,
    title: "ઉત્કૃષ્ટતા (Excellence)",
    description: "We strive for excellence in everything we do.",
  },
];

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

      {/* Story Section */}
      <section className="py-16 md:py-24">
        <div className="container">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <div className="bg-gradient-to-br from-secondary/20 to-accent/10 rounded-2xl p-8 flex items-center justify-center">
                <img
                  src={schoolLogo}
                  alt="Siddharth's Miracles School Logo"
                  className="max-w-[280px] w-full"
                />
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="font-heading text-3xl md:text-4xl font-bold text-maroon mb-6">
                Our Story
              </h2>
              <div className="space-y-4 text-muted-foreground">
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
                  Our experienced teachers provide personal attention to each student, ensuring
                  that no child is left behind.
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Vision & Mission */}
      <section className="py-16 md:py-24 bg-pattern-dots">
        <div className="container">
          <div className="grid md:grid-cols-2 gap-8">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="bg-card rounded-2xl p-8 shadow-card border border-border/50"
            >
              <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center mb-6">
                <Eye className="h-7 w-7 text-primary" />
              </div>
              <h3 className="font-heading text-2xl font-bold text-maroon mb-4">Our Vision</h3>
              <p className="text-muted-foreground leading-relaxed">
                To be the leading Gujarati medium school that shapes tomorrow's leaders by
                providing holistic education rooted in Indian values and modern teaching methods.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="bg-card rounded-2xl p-8 shadow-card border border-border/50"
            >
              <div className="w-14 h-14 rounded-xl bg-secondary/20 flex items-center justify-center mb-6">
                <Target className="h-7 w-7 text-secondary-foreground" />
              </div>
              <h3 className="font-heading text-2xl font-bold text-maroon mb-4">Our Mission</h3>
              <p className="text-muted-foreground leading-relaxed">
                To provide quality education that develops intellectual, emotional, and social
                skills while nurturing discipline, character, and a love for learning in every child.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-16 md:py-24">
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
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
                className="card-hover"
              >
                <div className="h-full bg-card rounded-2xl p-6 shadow-card border border-border/50 text-center">
                  <div className="w-14 h-14 mx-auto mb-4 rounded-xl bg-gradient-to-br from-secondary/20 to-accent/20 flex items-center justify-center">
                    <value.icon className="h-7 w-7 text-maroon" />
                  </div>
                  <h3 className="font-heading text-lg font-bold text-maroon mb-2">{value.title}</h3>
                  <p className="text-sm text-muted-foreground">{value.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Affiliation */}
      <section className="py-16 md:py-24 bg-maroon text-white">
        <div className="container text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="font-heading text-3xl md:text-4xl font-bold mb-6">
              Gujarati Board Affiliated
            </h2>
            <p className="text-lg opacity-90 max-w-2xl mx-auto">
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
