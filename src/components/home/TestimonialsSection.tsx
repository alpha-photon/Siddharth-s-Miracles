import { motion } from "framer-motion";
import { Quote } from "lucide-react";

const testimonials = [
  {
    name: "Priya Patel",
    role: "Parent of Std 5 Student",
    quote: "My child has grown not just academically but as a confident and disciplined person. The teachers here truly care about each student's development.",
    nameGuj: "પ્રિયા પટેલ",
  },
  {
    name: "Rajesh Shah",
    role: "Parent of Std 8 Student",
    quote: "The school's focus on values and sanskar along with academics is exactly what we wanted for our children. Highly recommended!",
    nameGuj: "રાજેશ શાહ",
  },
  {
    name: "Meena Desai",
    role: "Parent of Std 3 Student",
    quote: "Safe environment, caring teachers, and excellent results. Siddharth's Miracles has been a blessing for our family.",
    nameGuj: "મીના દેસાઈ",
  },
];

export function TestimonialsSection() {
  return (
    <section className="py-16 md:py-24 bg-gradient-to-b from-secondary/10 to-background">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="font-heading text-3xl md:text-4xl font-bold text-maroon mb-4">
            What Parents Say
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Hear from the families who trust us with their children's education
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={testimonial.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="card-hover"
            >
              <div className="h-full bg-card rounded-2xl p-6 shadow-card border border-border/50 relative">
                <Quote className="absolute top-4 right-4 h-8 w-8 text-secondary/30" />
                <p className="text-foreground/80 leading-relaxed mb-6 italic">
                  "{testimonial.quote}"
                </p>
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 rounded-full bg-gradient-to-br from-primary to-maroon flex items-center justify-center text-white font-bold text-lg">
                    {testimonial.name.charAt(0)}
                  </div>
                  <div>
                    <p className="font-semibold text-foreground">{testimonial.name}</p>
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
