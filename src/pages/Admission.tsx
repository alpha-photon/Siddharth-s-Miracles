import { Layout } from "@/components/layout/Layout";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { PageHero } from "@/components/ui/PageHero";
import { GraduationCap, FileText, CheckCircle, ArrowRight, Phone, MessageCircle } from "lucide-react";
import heroAdmission from "@/assets/herosection/IMG_3275.JPG";

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
        backgroundImage={heroAdmission}
        overlayOpacity="light"
      />

      {/* CTA Section */}
      <section className="py-16 md:py-20 bg-pattern-dots relative overflow-hidden">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[300px] bg-secondary/5 rounded-full blur-3xl pointer-events-none" />
        <div className="container relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="max-w-5xl mx-auto"
          >
            <div className="card-premium card-elevated bg-card rounded-3xl p-8 md:p-12">
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
      <section className="py-16 md:py-24 relative overflow-hidden">
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
              How It Works
            </span>
            <h2 className="font-heading text-3xl md:text-4xl lg:text-5xl font-bold text-maroon mb-5 tracking-tight leading-tight max-w-4xl mx-auto">
              Admission Process
            </h2>
            <div className="w-16 h-1 mx-auto mb-5 bg-gradient-to-r from-transparent via-primary to-transparent rounded-full" />
            <p className="text-muted-foreground max-w-2xl mx-auto text-lg md:text-xl leading-relaxed">
              Simple and transparent admission process
            </p>
          </motion.div>

          <div className="grid md:grid-cols-4 gap-6 md:gap-8">
            {admissionSteps.map((item, index) => (
              <motion.div
                key={item.step}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="group relative"
              >
                <div className="card-3d card-premium bg-card rounded-2xl p-6 h-full relative overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-br from-secondary/10 to-accent/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  <div className="absolute top-0 right-0 w-24 h-24 bg-gradient-to-bl from-secondary/20 to-accent/10 opacity-20 rounded-bl-3xl pointer-events-none" />
                  <div className="relative z-10">
                  <div className="w-12 h-12 mb-4 rounded-full bg-gradient-to-br from-secondary to-accent flex items-center justify-center">
                    <span className="text-lg font-bold text-secondary-foreground">{item.step}</span>
                  </div>
                  <h3 className="font-heading text-lg font-bold text-maroon mb-1">{item.titleEn}</h3>
                  <p className="text-sm font-medium text-primary mb-2">{item.title}</p>
                  <p className="text-sm text-muted-foreground">{item.description}</p>
                  </div>
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
                Checklist
              </span>
              <h2 className="font-heading text-3xl md:text-4xl lg:text-5xl font-bold text-maroon mb-5 tracking-tight leading-tight max-w-4xl mx-auto">
                Required Documents
              </h2>
              <div className="w-16 h-1 mx-auto mb-5 bg-gradient-to-r from-transparent via-primary to-transparent rounded-full" />
              <p className="text-muted-foreground max-w-2xl mx-auto text-lg md:text-xl leading-relaxed">
                Please prepare the following documents for admission
              </p>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
            {requiredDocs.map((doc, index) => (
                <motion.div
                  key={doc}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.05 }}
                  className="group"
                >
                  <div className="card-3d h-full card-premium bg-card rounded-2xl p-6 relative overflow-hidden flex flex-col">
                    <div className="absolute inset-0 bg-gradient-to-br from-growth/10 to-secondary/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                    <div className="absolute top-0 right-0 w-24 h-24 bg-gradient-to-bl from-growth/20 to-secondary/10 opacity-20 rounded-bl-3xl pointer-events-none" />
                    <div className="relative z-10 flex flex-col flex-1">
                      <div className="w-14 h-14 mb-4 rounded-2xl bg-gradient-to-br from-growth/25 to-secondary/25 flex items-center justify-center ring-2 ring-growth/20 group-hover:ring-primary/30 transition-all shadow-md">
                        <CheckCircle className="h-7 w-7 text-maroon" />
                      </div>
                      <h3 className="font-heading text-base font-bold text-maroon group-hover:text-primary transition-colors leading-tight">{doc}</h3>
                    </div>
                  </div>
                </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-16 md:py-24 relative overflow-hidden">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[300px] bg-secondary/5 rounded-full blur-3xl pointer-events-none" />
        <div className="container relative z-10">
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
