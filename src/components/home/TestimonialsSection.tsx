import { motion } from "framer-motion";
import { Quote, Star } from "lucide-react";

const testimonials = [
  {
    name: "Priya Patel",
    role: "Parent of Std 5 Student",
    quote: "My child has grown not just academically but as a confident and disciplined person. The teachers here truly care about each student's development.",
    nameGuj: "પ્રિયા પટેલ",
    rating: 5,
  },
  {
    name: "Rajesh Shah",
    role: "Parent of Std 8 Student",
    quote: "The school's focus on values and sanskar along with academics is exactly what we wanted for our children. Highly recommended!",
    nameGuj: "રાજેશ શાહ",
    rating: 5,
  },
  {
    name: "Meena Desai",
    role: "Parent of Std 3 Student",
    quote: "Safe environment, caring teachers, and excellent results. Siddharth's Miracles has been a blessing for our family.",
    nameGuj: "મીના દેસાઈ",
    rating: 5,
  },
];

export function TestimonialsSection() {
  return (
    <section className="py-20 md:py-28 bg-gradient-to-b from-secondary/10 via-background to-background relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute top-20 left-10 w-32 h-32 bg-secondary/10 rounded-full blur-3xl" />
      <div className="absolute bottom-20 right-10 w-40 h-40 bg-primary/10 rounded-full blur-3xl" />
      
      <div className="container relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="inline-block px-4 py-1 bg-maroon/10 text-maroon rounded-full text-sm font-semibold mb-4">
            Testimonials
          </span>
          <h2 className="font-heading text-3xl md:text-5xl font-bold text-maroon mb-4">
            What Parents Say
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
            Hear from the families who trust us with their children's education
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={testimonial.name}
              initial={{ opacity: 0, y: 40, rotateX: 10 }}
              whileInView={{ opacity: 1, y: 0, rotateX: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.15 }}
              className="group"
            >
              <div className="card-3d h-full bg-card rounded-2xl p-8 shadow-card border border-border/50 relative overflow-hidden">
                {/* Decorative quote icon */}
                <Quote className="absolute top-4 right-4 h-12 w-12 text-secondary/20 group-hover:text-secondary/40 transition-colors duration-500" />
                
                {/* Star rating */}
                <div className="flex gap-1 mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="h-5 w-5 fill-secondary text-secondary" />
                  ))}
                </div>
                
                <p className="text-foreground/80 leading-relaxed mb-6 italic text-lg">
                  "{testimonial.quote}"
                </p>
                
                <div className="flex items-center gap-4 pt-4 border-t border-border/50">
                  <div className="w-14 h-14 rounded-full bg-gradient-to-br from-primary to-maroon flex items-center justify-center text-white font-bold text-xl shadow-lg group-hover:scale-110 transition-transform duration-300">
                    {testimonial.name.charAt(0)}
                  </div>
                  <div>
                    <p className="font-bold text-foreground text-lg">{testimonial.name}</p>
                    <p className="text-sm text-muted-foreground">{testimonial.role}</p>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
