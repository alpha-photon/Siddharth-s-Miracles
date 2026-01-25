import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowRight, GraduationCap, Sparkles } from "lucide-react";

export function CTASection() {
  return (
    <section className="py-20 md:py-28 bg-maroon relative overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-0 w-96 h-96 bg-secondary/20 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-primary/20 rounded-full blur-3xl animate-pulse" style={{ animationDelay: "1s" }} />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-white/5 rounded-full blur-2xl" />
      </div>
      
      {/* Floating decorative elements */}
      <motion.div
        animate={{ y: [-10, 10, -10] }}
        transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
        className="absolute top-20 right-20 hidden lg:block"
      >
        <div className="w-16 h-16 rounded-xl bg-secondary/30 backdrop-blur-sm rotate-12" />
      </motion.div>
      <motion.div
        animate={{ y: [10, -10, 10] }}
        transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
        className="absolute bottom-20 left-20 hidden lg:block"
      >
        <div className="w-12 h-12 rounded-full bg-white/10 backdrop-blur-sm" />
      </motion.div>

      <div className="container relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="text-center max-w-4xl mx-auto"
        >
          <motion.div
            initial={{ scale: 0 }}
            whileInView={{ scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="inline-flex items-center gap-2 px-6 py-3 bg-secondary/20 text-secondary rounded-full text-sm font-bold mb-8 backdrop-blur-sm border border-secondary/30"
          >
            <Sparkles className="h-4 w-4" />
            Admissions Open for 2026-27
            <Sparkles className="h-4 w-4" />
          </motion.div>

          <h2 className="font-heading text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-8 leading-tight">
            Give Your Child the Gift of{" "}
            <span className="text-secondary">Quality Education</span>
          </h2>

          <p className="text-xl text-white/80 mb-10 max-w-2xl mx-auto leading-relaxed">
            Join the Siddharth's Miracles family. Limited seats available for Std 1 to 10.
            Enquire now and take the first step towards your child's bright future.
          </p>

          <div className="flex flex-wrap gap-4 justify-center">
            <Button variant="hero" size="xl" className="shadow-elevated group" asChild>
              <Link to="/admission">
                <GraduationCap className="h-5 w-5" />
                Admission Enquiry
                <ArrowRight className="h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </Link>
            </Button>
            <Button
              variant="outline"
              size="xl"
              className="text-white border-white/30 hover:bg-white hover:text-maroon backdrop-blur-sm"
              asChild
            >
              <Link to="/about">Learn More About Us</Link>
            </Button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
