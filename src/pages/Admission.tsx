import { Layout } from "@/components/layout/Layout";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { PageHero } from "@/components/ui/PageHero";
import { GraduationCap, FileText, CheckCircle, ArrowRight, Phone, MessageCircle } from "lucide-react";
import heroClassroom from "@/assets/hero-classroom.jpg";

const admissionSteps = [
  {
    step: 1,
    title: "પૂછપરછ",
    titleEn: "Enquiry",
    description: "Contact us via phone, WhatsApp, or visit the school for initial enquiry.",
  },
  {
    step: 2,
    title: "શાળા મુલાકાત",
    titleEn: "School Visit",
    description: "Schedule a visit to see our campus, facilities, and meet our teachers.",
  },
  {
    step: 3,
    title: "ફોર્મ ભરો",
    titleEn: "Fill Application",
    description: "Complete the admission form with all required documents.",
  },
  {
    step: 4,
    title: "પ્રવેશ",
    titleEn: "Admission",
    description: "Upon approval, complete fee payment and secure your child's admission.",
  },
];

const requiredDocs = [
  "Birth Certificate",
  "Aadhar Card (Student & Parent)",
  "Previous School Transfer Certificate (for Std 2+)",
  "Previous Year Marksheet",
  "Passport Size Photos (4 copies)",
  "Address Proof",
];

const Admission = () => {
  return (
    <Layout>
      {/* Hero Section */}
      <PageHero
        title="ADMISSION OPENS FOR 2026-27"
        subtitle="Quality education, caring environment, and holistic growth"
        description=""
        backgroundImage={heroClassroom}
        overlayOpacity="light"
      />

      {/* CTA Section */}
      <section className="py-16 md:py-20 bg-pattern-dots">
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="max-w-5xl mx-auto"
          >
            <div className="bg-card rounded-3xl p-8 md:p-12 shadow-elevated border border-border/50">
              <div className="flex flex-col lg:flex-row items-center justify-between gap-8">
                {/* Text Content */}
                <div className="flex-1 text-center lg:text-left">
                  <h2 className="font-heading text-3xl md:text-4xl lg:text-5xl font-bold text-maroon mb-4">
                    Ready to Begin Your Child's Journey?
                  </h2>
                  <p className="text-lg md:text-xl text-muted-foreground">
                    Admissions are open. We're here to guide you.
                  </p>
                </div>

                {/* Buttons */}
                <div className="flex flex-col sm:flex-row gap-4">
                  <Button
                    variant="hero"
                    size="lg"
                    asChild
                    className="shadow-elevated group min-w-[160px]"
                  >
                    <a href="tel:+919925941082">
                      <Phone className="h-5 w-5 mr-2 group-hover:scale-110 transition-transform" />
                      Call Now
                    </a>
                  </Button>
                  <Button
                    variant="whatsapp"
                    size="lg"
                    asChild
                    className="shadow-elevated group min-w-[160px]"
                  >
                    <a
                      href="https://wa.me/919925941082?text=Hello! I'm interested in admission enquiry for my child."
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <MessageCircle className="h-5 w-5 mr-2 group-hover:scale-110 transition-transform" />
                      WhatsApp
                    </a>
                  </Button>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Admission Process */}
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
              Admission Process
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Simple and transparent admission process
            </p>
          </motion.div>

          <div className="grid md:grid-cols-4 gap-6">
            {admissionSteps.map((item, index) => (
              <motion.div
                key={item.step}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="relative"
              >
                <div className="bg-card rounded-2xl p-6 shadow-card border border-border/50 h-full">
                  <div className="w-12 h-12 mb-4 rounded-full bg-gradient-to-br from-secondary to-accent flex items-center justify-center">
                    <span className="text-lg font-bold text-secondary-foreground">{item.step}</span>
                  </div>
                  <h3 className="font-heading text-lg font-bold text-maroon mb-1">{item.titleEn}</h3>
                  <p className="text-sm font-medium text-primary mb-2">{item.title}</p>
                  <p className="text-sm text-muted-foreground">{item.description}</p>
                </div>
                {index < admissionSteps.length - 1 && (
                  <div className="hidden md:block absolute top-1/2 -right-3 transform -translate-y-1/2 z-10">
                    <ArrowRight className="h-6 w-6 text-secondary" />
                  </div>
                )}
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Required Documents */}
      <section className="py-16 md:py-24 bg-pattern-dots">
        <div className="container">
          <div className="max-w-3xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="text-center mb-12"
            >
              <h2 className="font-heading text-3xl md:text-4xl font-bold text-maroon mb-4">
                Required Documents
              </h2>
              <p className="text-muted-foreground">
                Please prepare the following documents for admission
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="bg-card rounded-2xl p-8 shadow-card border border-border/50"
            >
              <div className="flex items-center gap-3 mb-6">
                <FileText className="h-6 w-6 text-maroon" />
                <h3 className="font-heading text-xl font-bold text-maroon">Document Checklist</h3>
              </div>
              <ul className="grid sm:grid-cols-2 gap-4">
                {requiredDocs.map((doc) => (
                  <li key={doc} className="flex items-center gap-3">
                    <CheckCircle className="h-5 w-5 text-growth flex-shrink-0" />
                    <span className="text-foreground">{doc}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-16 md:py-24">
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="max-w-2xl mx-auto text-center"
          >
            <div className="w-16 h-16 mx-auto mb-6 rounded-2xl bg-gradient-to-br from-secondary/20 to-accent/20 flex items-center justify-center">
              <GraduationCap className="h-8 w-8 text-maroon" />
            </div>
            <h2 className="font-heading text-3xl font-bold text-maroon mb-4">
              Have Questions?
            </h2>
            <p className="text-muted-foreground mb-8">
              For admission enquiries, please contact:<br />
              <strong>Admission office,</strong><br />
              SIDDHARTH'S MIRACLES SCHOOL,<br />
              VAVOL-UVARSAD ROAD, VAVOL, GANDHINAGAR, GUJARAT - 382016<br />
              <strong>Contact:</strong> +91 99259 41082<br />
              <strong>Email:</strong> siddharthsmiraclesvavol@yahoo.com
            </p>
            <Button variant="default" size="lg" asChild>
              <Link to="/contact">
                Contact Us
                <ArrowRight className="h-5 w-5" />
              </Link>
            </Button>
          </motion.div>
        </div>
      </section>
    </Layout>
  );
};

export default Admission;
