import { useState } from "react";
import { motion } from "framer-motion";
import { Quote, Star, ChevronRight } from "lucide-react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { AnimatedCardBackground } from "@/components/ui/AnimatedCardBackground";

const PREVIEW_LENGTH = 140;

const testimonials = [
  {
    name: "Kalpana Singh",
    role: "Parent",
    quote:
      "I am thoroughly delighted with the exceptional education and care that my child has received at Siddharth's Miracles School. The school emphasis on overall development, not just academically but also in extracurricular activities, has been truly impressive. The good culture of the school, caring teachers, and supporting staff provide a warm and welcoming environment that fosters growth and learning. The quality education provided by the school is of a very high standard, with knowledgeable and experienced teachers who are passionate about their work. Overall, I highly recommend Siddharth's Miracles School to any parent seeking a nurturing and stimulating environment for their child to thrive.",
    rating: 5,
  },
  {
    name: "Maila Paramesh & G. Nirmala",
    role: "Parents of Master Maila Ritwik (UKG)",
    quote:
      "I am delighted to share my positive experience with Siddharth Miracle School, where my son *Master Maila Ritwik* is thriving in UKG.\n\n*Exceptional Early Learning*:-\n\nThe teachers at Siddharth Miracle School create a nurturing and engaging environment tailored for young learners like my son in UKG. Their play-based curriculum sparks curiosity and builds foundational skills in reading, numbers, and social interaction effectively. We've seen remarkable growth in his confidence and love for learning since he joined.\n\n*Dedicated Staff and Facilities* :-\n\nThe school's caring staff goes above and beyond, providing personalized attention that makes each child feel valued. The clean, colorful classrooms and outdoor play areas are perfect for UKG kids, promoting both fun and safety. Parent-teacher communication is frequent and helpful, keeping us involved in his progress.\n\n*Highly Recommended* :-\n\nChoosing Siddharth Miracle School has been one of the best decisions for our family—my son looks forward to school every day. It's a true miracle for early childhood education, fostering creativity and discipline hand-in-hand.",
    rating: 5,
  },
];

function getPreview(quote: string) {
  const plain = quote.replace(/\*[^*]*\*/g, "").replace(/\n+/g, " ").trim();
  if (plain.length <= PREVIEW_LENGTH) return plain;
  return plain.slice(0, PREVIEW_LENGTH).trim() + "...";
}

function formatQuoteWithBold(text: string) {
  const parts = text.split(/(\*[^*]+\*)/g);
  return parts.map((part, i) =>
    part.startsWith("*") && part.endsWith("*") ? (
      <strong key={i} className="font-semibold text-foreground">
        {part.slice(1, -1)}
      </strong>
    ) : (
      part
    )
  );
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
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group"
            >
              <div className="h-full bg-card rounded-3xl p-6 md:p-8 relative overflow-hidden flex flex-col border-2 border-border/50 border-b-0 shadow-lg hover:shadow-2xl transition-all duration-500 group-hover:border-secondary/50 group-hover:-translate-y-2">
                <AnimatedCardBackground index={index} />
                <div className="relative z-10 flex flex-col flex-1">
                  <div className="flex items-center gap-2 mb-4">
                    <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-secondary/25 to-accent/25 flex items-center justify-center ring-2 ring-secondary/20 group-hover:ring-secondary/40 transition-all duration-300 shadow-md">
                      <Quote className="h-6 w-6 text-maroon group-hover:text-secondary transition-colors" />
                    </div>
                    <div className="flex gap-1">
                      {[...Array(testimonial.rating)].map((_, i) => (
                        <Star
                          key={i}
                          className="h-4 w-4 fill-secondary text-secondary"
                        />
                      ))}
                    </div>
                  </div>

                  <p className="text-foreground/80 leading-relaxed mb-4 italic text-sm md:text-base line-clamp-4 min-h-[4.5rem]">
                    "{getPreview(testimonial.quote)}"
                  </p>

                  <button
                    type="button"
                    onClick={() => setModalIndex(index)}
                    className="inline-flex items-center gap-1.5 text-sm font-semibold text-maroon hover:text-secondary transition-colors mt-auto py-1 rounded-md hover:bg-maroon/5 px-1 -ml-1"
                  >
                    Read more
                    <ChevronRight className="h-4 w-4" />
                  </button>

                  <div className="flex items-center gap-3 pt-4 mt-4 border-t border-border/50">
                    <div className="w-11 h-11 rounded-full bg-gradient-to-br from-primary to-maroon flex items-center justify-center text-white font-bold text-base shadow-lg flex-shrink-0 ring-2 ring-background">
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
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      <Dialog
        open={modalIndex !== null}
        onOpenChange={(open) => !open && setModalIndex(null)}
      >
        <DialogContent className="max-w-lg max-h-[85vh] overflow-y-auto rounded-2xl border-2 border-border/50 shadow-2xl bg-card p-6 md:p-8">
          {selected && (
            <>
              <DialogHeader className="space-y-4">
                <div className="flex items-center gap-3 pr-8">
                  <div className="w-14 h-14 rounded-full bg-gradient-to-br from-primary to-maroon flex items-center justify-center text-white font-bold text-xl flex-shrink-0 shadow-lg ring-2 ring-background">
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
              <div className="text-foreground/90 leading-relaxed text-base md:text-lg space-y-3 whitespace-pre-line">
                {selected.quote.includes("*")
                  ? selected.quote.split("\n").map((line, i) => (
                      <p key={i} className={i > 0 ? "pt-1" : ""}>
                        {formatQuoteWithBold(line)}
                      </p>
                    ))
                  : `"${selected.quote}"`}
              </div>
            </>
          )}
        </DialogContent>
      </Dialog>
    </section>
  );
}
