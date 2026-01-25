import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowRight, GraduationCap } from "lucide-react";

export function CTASection() {
  return (
    <section className="py-16 md:py-24 bg-maroon relative overflow-hidden">
      {/* Decorative Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 left-0 w-64 h-64 bg-secondary rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-primary rounded-full blur-3xl" />
      </div>

      <div className="container relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-secondary/20 text-secondary rounded-full text-sm font-semibold mb-6">
            <GraduationCap className="h-4 w-4" />
            Admissions Open for 2026-27
          </div>

          <h2 className="font-heading text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6">
            Give Your Child the Gift of Quality Education
          </h2>

          <p className="text-lg text-white/80 mb-8 max-w-2xl mx-auto">
            Join the Siddharth's Miracles family. Limited seats available for Std 1 to 10.
            Enquire now and take the first step towards your child's bright future.
          </p>

          <div className="flex flex-wrap gap-4 justify-center">
            <Button variant="hero" size="lg" asChild>
              <Link to="/admission">
                Admission Enquiry
                <ArrowRight className="h-5 w-5" />
              </Link>
            </Button>
            <Button
              variant="outline"
              size="lg"
              className="text-white border-white hover:bg-white hover:text-maroon"
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
