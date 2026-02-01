import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Phone, MessageCircle } from "lucide-react";

export function CTASection() {
  return (
    <section className="py-20 md:py-28 bg-pattern-dots relative overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-0 w-96 h-96 bg-secondary/10 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-primary/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: "1s" }} />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-maroon/5 rounded-full blur-2xl" />
      </div>
      
      {/* Floating decorative elements */}
      <motion.div
        animate={{ y: [-10, 10, -10] }}
        transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
        className="absolute top-20 right-20 hidden lg:block"
      >
        <div className="w-16 h-16 rounded-xl bg-secondary/20 backdrop-blur-sm rotate-12" />
      </motion.div>
      <motion.div
        animate={{ y: [10, -10, 10] }}
        transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
        className="absolute bottom-20 left-20 hidden lg:block"
      >
        <div className="w-12 h-12 rounded-full bg-maroon/10 backdrop-blur-sm" />
      </motion.div>

      <div className="container relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
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
                    href="https://wa.me/919925941082?text=Hello! I'm interested in admission enquiry for Siddharth's Miracles School."
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
  );
}
