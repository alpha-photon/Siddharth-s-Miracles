import { Layout } from "@/components/layout/Layout";
import { motion } from "framer-motion";
import { BookOpen, Calculator, FlaskConical, Globe, Languages, Palette, PenTool, Microscope } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";

const subjects = [
  { icon: Languages, name: "ગુજરાતી", nameEn: "Gujarati", color: "bg-secondary/20" },
  { icon: BookOpen, name: "હિન્દી", nameEn: "Hindi", color: "bg-primary/10" },
  { icon: PenTool, name: "અંગ્રેજી", nameEn: "English", color: "bg-growth/10" },
  { icon: Calculator, name: "ગણિત", nameEn: "Mathematics", color: "bg-maroon/10" },
  { icon: FlaskConical, name: "વિજ્ઞાન", nameEn: "Science", color: "bg-secondary/20" },
  { icon: Globe, name: "સામાજિક વિજ્ઞાન", nameEn: "Social Science", color: "bg-primary/10" },
  { icon: Microscope, name: "પર્યાવરણ", nameEn: "Environment", color: "bg-growth/10" },
  { icon: Palette, name: "ચિત્રકામ", nameEn: "Drawing", color: "bg-maroon/10" },
];

const methodology = [
  {
    title: "Interactive Learning",
    description: "We use activity-based teaching methods to make learning engaging and fun for students.",
  },
  {
    title: "Regular Assessment",
    description: "Continuous evaluation through tests, assignments, and projects to track progress.",
  },
  {
    title: "Personal Attention",
    description: "Small class sizes ensure every child gets individual attention from teachers.",
  },
  {
    title: "Reading & Writing Focus",
    description: "Strong emphasis on developing reading and writing skills from an early age.",
  },
];

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

      {/* Classes Section */}
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
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.05 }}
                className="card-hover"
              >
                <div className="bg-card rounded-2xl p-6 shadow-card border border-border/50 text-center">
                  <div className="w-12 h-12 mx-auto mb-3 rounded-full bg-gradient-to-br from-secondary to-accent flex items-center justify-center">
                    <span className="text-lg font-bold text-secondary-foreground">{std}</span>
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
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.05 }}
                className="card-hover"
              >
                <div className="bg-card rounded-2xl p-6 shadow-card border border-border/50 text-center">
                  <div className={`w-14 h-14 mx-auto mb-4 rounded-xl ${subject.color} flex items-center justify-center`}>
                    <subject.icon className="h-7 w-7 text-maroon" />
                  </div>
                  <h3 className="font-heading text-lg font-bold text-maroon">{subject.name}</h3>
                  <p className="text-sm text-muted-foreground">{subject.nameEn}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Teaching Methodology */}
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
                initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-card rounded-2xl p-6 shadow-card border border-border/50"
              >
                <h3 className="font-heading text-xl font-bold text-maroon mb-3">{item.title}</h3>
                <p className="text-muted-foreground">{item.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Board Exam Preparation */}
      <section className="py-16 md:py-24 bg-maroon text-white">
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center max-w-3xl mx-auto"
          >
            <h2 className="font-heading text-3xl md:text-4xl font-bold mb-6">
              Board Exam Preparation
            </h2>
            <p className="text-lg opacity-90 mb-8">
              Special focus on Std 9 and 10 students with intensive preparation for
              Gujarat Board examinations. Regular practice tests, revision sessions,
              and guidance to help students achieve their best results.
            </p>
            <Button variant="hero" size="lg" asChild>
              <Link to="/admission">Enquire for Admission</Link>
            </Button>
          </motion.div>
        </div>
      </section>
    </Layout>
  );
};

export default Academics;
