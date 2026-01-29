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
                    href="https://wa.me/919925941082?text=Hello! I'm interested in admission enquiry for Siddharth's Miracles School."
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
  );
}
