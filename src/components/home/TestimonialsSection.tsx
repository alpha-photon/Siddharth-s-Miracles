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
  {
    name: "Amit Kumar",
    role: "Parent of Std 7 Student",
    quote: "The holistic approach to education here is amazing. My child participates in sports, cultural activities, and academics with equal enthusiasm.",
    nameGuj: "અમિત કુમાર",
    rating: 5,
  },
  {
    name: "Sunita Mehta",
    role: "Parent of Std 4 Student",
    quote: "The personal attention given to each child is remarkable. Teachers know every student individually and guide them accordingly.",
    nameGuj: "સુનીતા મેહતા",
    rating: 5,
  },
  {
    name: "Vikram Joshi",
    role: "Parent of Std 6 Student",
    quote: "Best decision we made for our child's education. The infrastructure, teaching methods, and values all align perfectly with our expectations.",
    nameGuj: "વિક્રમ જોશી",
    rating: 5,
  },
];

export function TestimonialsSection() {
  // Duplicate testimonials for seamless loop
  const duplicatedTestimonials = [...testimonials, ...testimonials];

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

        {/* Continuous Moving Carousel */}
        <div className="relative overflow-hidden group">
          <div className="flex gap-6 animate-testimonial-scroll group-hover:[animation-play-state:paused]">
            {/* First set */}
            {duplicatedTestimonials.map((testimonial, index) => (
              <div
                key={`first-${index}`}
                className="flex-shrink-0 w-full sm:w-[calc(50%-12px)] lg:w-[calc(33.333%-16px)]"
              >
                <div className="card-3d h-full card-premium bg-card rounded-2xl p-6 md:p-8 relative overflow-hidden transition-all duration-300 group">
                  {/* Decorative quote icon */}
                  <Quote className="absolute top-4 right-4 h-12 w-12 text-secondary/20 group-hover:text-secondary/40 transition-colors duration-500" />
                  
                  {/* Star rating */}
                  <div className="flex gap-1 mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="h-5 w-5 fill-secondary text-secondary" />
                    ))}
                  </div>
                  
                  <p className="text-foreground/80 leading-relaxed mb-6 italic text-base md:text-lg">
                    "{testimonial.quote}"
                  </p>
                  
                  <div className="flex items-center gap-4 pt-4 border-t border-border/50">
                    <div className="w-12 h-12 md:w-14 md:h-14 rounded-full bg-gradient-to-br from-primary to-maroon flex items-center justify-center text-white font-bold text-lg md:text-xl shadow-lg group-hover:scale-110 transition-transform duration-300">
                      {testimonial.name.charAt(0)}
                    </div>
                    <div>
                      <p className="font-bold text-foreground text-base md:text-lg">{testimonial.name}</p>
                      <p className="text-xs md:text-sm text-muted-foreground">{testimonial.role}</p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
            {/* Second set for seamless loop */}
            {duplicatedTestimonials.map((testimonial, index) => (
              <div
                key={`second-${index}`}
                className="flex-shrink-0 w-full sm:w-[calc(50%-12px)] lg:w-[calc(33.333%-16px)]"
              >
                <div className="card-3d h-full card-premium bg-card rounded-2xl p-6 md:p-8 relative overflow-hidden transition-all duration-300 group">
                  {/* Decorative quote icon */}
                  <Quote className="absolute top-4 right-4 h-12 w-12 text-secondary/20 group-hover:text-secondary/40 transition-colors duration-500" />
                  
                  {/* Star rating */}
                  <div className="flex gap-1 mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="h-5 w-5 fill-secondary text-secondary" />
                    ))}
                  </div>
                  
                  <p className="text-foreground/80 leading-relaxed mb-6 italic text-base md:text-lg">
                    "{testimonial.quote}"
                  </p>
                  
                  <div className="flex items-center gap-4 pt-4 border-t border-border/50">
                    <div className="w-12 h-12 md:w-14 md:h-14 rounded-full bg-gradient-to-br from-primary to-maroon flex items-center justify-center text-white font-bold text-lg md:text-xl shadow-lg group-hover:scale-110 transition-transform duration-300">
                      {testimonial.name.charAt(0)}
                    </div>
                    <div>
                      <p className="font-bold text-foreground text-base md:text-lg">{testimonial.name}</p>
                      <p className="text-xs md:text-sm text-muted-foreground">{testimonial.role}</p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

    </section>
  );
}
