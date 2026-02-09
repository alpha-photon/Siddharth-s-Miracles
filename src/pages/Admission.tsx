import { Layout } from "@/components/layout/Layout";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { PageHero } from "@/components/ui/PageHero";
import { AnimatedCardBackground } from "@/components/ui/AnimatedCardBackground";
import { GraduationCap, FileText, CheckCircle, ArrowRight, Phone, MessageCircle, Mail, MapPin } from "lucide-react";
import { heroAdmission } from "@/lib/cloudinary-images";

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

          <div className="grid md:grid-cols-4 gap-6">
            {admissionSteps.map((item, index) => (
              <motion.div
                key={item.step}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="group relative"
              >
                <div className="h-full bg-card rounded-3xl p-6 relative overflow-hidden border-2 border-border/50 shadow-lg hover:shadow-2xl transition-all duration-500 group-hover:border-secondary/50 group-hover:-translate-y-2">
                  <AnimatedCardBackground index={index} />
                  <div className="relative z-10">
                    <div className="w-12 h-12 mb-4 rounded-full bg-gradient-to-br from-secondary to-accent flex items-center justify-center group-hover:scale-110 transition-all duration-500">
                      <span className="text-lg font-bold text-secondary-foreground">{item.step}</span>
                    </div>
                    <h3 className="font-heading text-lg font-bold text-maroon mb-1 group-hover:text-secondary transition-colors duration-300">{item.titleEn}</h3>
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

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {requiredDocs.map((doc, index) => (
                <motion.div
                  key={doc}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.05 }}
                  className="group"
                >
                  <div className="h-full bg-card rounded-3xl p-6 relative overflow-hidden flex flex-col border-2 border-border/50 shadow-lg hover:shadow-2xl transition-all duration-500 group-hover:border-secondary/50 group-hover:-translate-y-2">
                    <AnimatedCardBackground index={index} />
                    <div className="relative z-10 flex flex-col flex-1">
                      <div className="w-14 h-14 mb-4 rounded-2xl bg-gradient-to-br from-growth/25 to-secondary/25 flex items-center justify-center ring-2 ring-growth/20 group-hover:ring-secondary/40 group-hover:scale-110 transition-all shadow-md">
                        <CheckCircle className="h-7 w-7 text-maroon group-hover:text-secondary transition-colors duration-300" />
                      </div>
                      <h3 className="font-heading text-base font-bold text-maroon group-hover:text-primary transition-colors leading-tight">{doc}</h3>
                    </div>
                  </div>
                </motion.div>
            ))}
          </div>
        </div>
      </section>
{/* CTA Section */}
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

export default Admission;
