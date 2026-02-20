import { useState } from "react";
import { motion } from "framer-motion";
import { Quote, Star, ChevronRight } from "lucide-react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";

const PREVIEW_LENGTH = 130;

const testimonials = [
  {
    name: "Priya Patel",
    role: "Parent of Std 5 Student",
    quote: "My child has grown not just academically but as a confident and disciplined person. The teachers here truly care about each student's development.",
    rating: 5,
  },
  {
    name: "Rajesh Shah",
    role: "Parent of Std 8 Student",
    quote: "The school's focus on values and sanskar along with academics is exactly what we wanted for our children. Highly recommended!",
    rating: 5,
  },
  {
    name: "Meena Desai",
    role: "Parent of Std 3 Student",
    quote: "Safe environment, caring teachers, and excellent results. Siddharth's Miracles has been a blessing for our family.",
    rating: 5,
  },
  {
    name: "Amit Kumar",
    role: "Parent of Std 7 Student",
    quote: "The holistic approach to education here is amazing. My child participates in sports, cultural activities, and academics with equal enthusiasm.",
    rating: 5,
  },
  {
    name: "Sunita Mehta",
    role: "Parent of Std 4 Student",
    quote: "The personal attention given to each child is remarkable. Teachers know every student individually and guide them accordingly.",
    rating: 5,
  },
  {
    name: "Vikram Joshi",
    role: "Parent of Std 6 Student",
    quote: "Best decision we made for our child's education. The infrastructure, teaching methods, and values all align perfectly with our expectations.",
    rating: 5,
  },
];

function getPreview(quote: string) {
  if (quote.length <= PREVIEW_LENGTH) return quote;
  return quote.slice(0, PREVIEW_LENGTH).trim() + "...";
}

export function TestimonialsSection() {
  const [modalIndex, setModalIndex] = useState<number | null>(null);
  const selected = modalIndex !== null ? testimonials[modalIndex] : null;

  return (
    <section className="py-20 md:py-28 bg-gradient-to-b from-secondary/10 via-background to-background relative overflow-hidden">
      <div className="absolute top-20 left-10 w-32 h-32 bg-secondary/10 rounded-full blur-3xl" />
      <div className="absolute bottom-20 right-10 w-40 h-40 bg-primary/10 rounded-full blur-3xl" />

      <div className="container relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-14 md:mb-20"
        >
          <span className="inline-flex items-center px-5 py-2 rounded-full text-sm font-semibold mb-5 bg-maroon/10 text-maroon border border-maroon/20 shadow-sm tracking-wide">
            Testimonials
          </span>
          <h2 className="font-heading text-3xl md:text-4xl lg:text-5xl font-bold text-maroon mb-5 tracking-tight leading-tight max-w-4xl mx-auto">
            What Parents Say
          </h2>
          <div className="w-16 h-1 mx-auto mb-5 bg-gradient-to-r from-transparent via-primary to-transparent rounded-full" />
          <p className="text-muted-foreground max-w-2xl mx-auto text-lg md:text-xl leading-relaxed">
            Hear from the families who trust us with their children's education
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              className="flex-shrink-0"
            >
              <div className="card-3d h-full card-premium bg-card rounded-2xl p-5 md:p-6 relative overflow-hidden transition-all duration-300 group flex flex-col">
                <Quote className="absolute top-3 right-3 h-10 w-10 text-secondary/20 group-hover:text-secondary/40 transition-colors duration-500" />

                <div className="flex gap-1 mb-3">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star
                      key={i}
                      className="h-4 w-4 fill-secondary text-secondary"
                    />
                  ))}
                </div>

                <p className="text-foreground/80 leading-relaxed mb-4 italic text-sm md:text-base line-clamp-4 min-h-[4.5rem]">
                  "{getPreview(testimonial.quote)}"
                </p>

                <button
                  type="button"
                  onClick={() => setModalIndex(index)}
                  className="inline-flex items-center gap-1 text-sm font-semibold text-maroon hover:text-maroon/80 transition-colors mt-auto"
                >
                  Read more
                  <ChevronRight className="h-4 w-4" />
                </button>

                <div className="flex items-center gap-3 pt-4 mt-4 border-t border-border/50">
                  <div className="w-10 h-10 rounded-full bg-gradient-to-br from-primary to-maroon flex items-center justify-center text-white font-bold text-sm shadow-lg flex-shrink-0">
                    {testimonial.name.charAt(0)}
                  </div>
                  <div className="min-w-0">
                    <p className="font-bold text-foreground text-sm md:text-base truncate">
                      {testimonial.name}
                    </p>
                    <p className="text-xs text-muted-foreground truncate">
                      {testimonial.role}
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      <Dialog open={modalIndex !== null} onOpenChange={(open) => !open && setModalIndex(null)}>
        <DialogContent className="max-w-lg max-h-[85vh] overflow-y-auto rounded-2xl border-border/50 bg-card">
          {selected && (
            <>
              <DialogHeader>
                <div className="flex items-center gap-3 pr-8">
                  <div className="w-12 h-12 rounded-full bg-gradient-to-br from-primary to-maroon flex items-center justify-center text-white font-bold text-lg flex-shrink-0">
                    {selected.name.charAt(0)}
                  </div>
                  <div>
                    <DialogTitle className="text-xl text-left">
                      {selected.name}
                    </DialogTitle>
                    <p className="text-sm text-muted-foreground font-normal">
                      {selected.role}
                    </p>
                  </div>
                </div>
              </DialogHeader>
              <div className="flex gap-1 mb-4">
                {[...Array(selected.rating)].map((_, i) => (
                  <Star
                    key={i}
                    className="h-4 w-4 fill-secondary text-secondary"
                  />
                ))}
              </div>
              <p className="text-foreground/90 leading-relaxed italic text-base md:text-lg">
                "{selected.quote}"
              </p>
            </>
          )}
        </DialogContent>
      </Dialog>
    </section>
  );
}
