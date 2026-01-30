import { Layout } from "@/components/layout/Layout";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { PageHero } from "@/components/ui/PageHero";
import { MapPin, Phone, Mail, Clock, MessageCircle } from "lucide-react";
import heroContact from "@/assets/herosection/IMG_3218.JPG";

const Contact = () => {
  return (
    <Layout>
      {/* Hero Section */}
      <PageHero
        title="CONTACT"
        subtitle="Reach Out, We're Happy to Help"
        description=""
        backgroundImage={heroContact}
        overlayOpacity="light"
      />

      {/* Contact Info & Form */}
      <section className="py-16 md:py-24 relative overflow-hidden">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[300px] bg-secondary/5 rounded-full blur-3xl pointer-events-none" />
        <div className="container relative z-10">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Information */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <span className="inline-flex items-center px-5 py-2 rounded-full text-sm font-semibold mb-5 bg-primary/10 text-primary border border-primary/20 shadow-sm tracking-wide">
                Reach Out
              </span>
              <h2 className="font-heading text-2xl md:text-3xl font-bold text-maroon mb-3">
                Get in Touch
              </h2>
              <div className="w-12 h-0.5 bg-gradient-to-r from-primary/50 to-transparent rounded-full mb-6" />
              <p className="text-muted-foreground mb-8 max-w-sm">
                We're here to help. Reach us anytime during office hours.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 md:gap-5">
                {[
                  { icon: MapPin, title: "Address", content: "SIDDHARTH'S MIRACLES SCHOOL, VAVOL-UVARSAD ROAD, VAVOL, GANDHINAGAR, GUJARAT - 382016", color: "from-primary/20 to-primary/10", link: null },
                  { icon: Phone, title: "Phone", content: "+91 99259 41082", color: "from-secondary/20 to-accent/10", link: "tel:+919925941082" },
                  { icon: Mail, title: "Email", content: "siddharthsmiraclesvavol@yahoo.com", color: "from-maroon/20 to-maroon/10", link: "mailto:siddharthsmiraclesvavol@yahoo.com" },
                  { icon: Clock, title: "Office Hours", content: "Monday - Saturday: 8:00 AM - 4:00 PM. Sunday: Closed", color: "from-primary/20 to-primary/10", link: null },
                ].map((item, index) => (
                  <motion.div
                    key={item.title}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: index * 0.08 }}
                    className="group"
                  >
                    <div className="card-3d h-full card-premium bg-card rounded-2xl p-5 md:p-6 relative overflow-hidden flex flex-col border border-border/50 hover:border-primary/20 transition-colors duration-300">
                      <div className={`absolute inset-0 bg-gradient-to-br ${item.color} opacity-0 group-hover:opacity-100 transition-opacity duration-500`} />
                      <div className={`absolute top-0 right-0 w-20 h-20 bg-gradient-to-bl ${item.color} opacity-20 rounded-bl-2xl pointer-events-none`} />
                      <div className="relative z-10 flex flex-col flex-1">
                        <div className="w-12 h-12 mb-4 rounded-2xl bg-gradient-to-br from-secondary/25 to-accent/25 flex items-center justify-center ring-2 ring-secondary/20 group-hover:ring-primary/30 group-hover:scale-110 transition-all duration-300 shadow-md">
                          <item.icon className="h-6 w-6 text-maroon group-hover:text-primary transition-colors" />
                        </div>
                        <h3 className="font-heading text-base font-bold text-maroon mb-2 group-hover:text-primary transition-colors">{item.title}</h3>
                        {item.link ? (
                          <a href={item.link} className="text-sm text-muted-foreground hover:text-primary transition-colors leading-snug flex-1">
                            {item.content}
                          </a>
                        ) : (
                          <p className="text-sm text-muted-foreground leading-snug flex-1">{item.content}</p>
                        )}
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>

              {/* Quick Contact Buttons */}
              <div className="flex flex-wrap gap-4 mt-8">
                <Button variant="hero" size="lg" asChild className="group/btn">
                  <a href="tel:+919925941082" className="inline-flex items-center">
                    <Phone className="h-5 w-5 mr-2 group-hover/btn:scale-110 transition-transform duration-300" />
                    Call Now
                  </a>
                </Button>
                <Button variant="whatsapp" size="lg" asChild className="group/btn">
                  <a
                    href="https://wa.me/919925941082?text=Hello! I'd like to know more about Siddharth's Miracles School."
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center"
                  >
                    <MessageCircle className="h-5 w-5 mr-2 group-hover/btn:scale-110 transition-transform duration-300" />
                    WhatsApp
                  </a>
                </Button>
              </div>
            </motion.div>

            {/* Contact Form */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="group"
            >
              <div className="card-3d card-premium bg-card rounded-2xl p-8 md:p-10 relative overflow-hidden border border-border/50 hover:border-primary/20 transition-all duration-300">
                {/* Corner accents */}
                <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-bl from-primary/15 via-secondary/10 to-transparent rounded-bl-[2rem] pointer-events-none" />
                <div className="absolute bottom-0 left-0 w-24 h-24 bg-gradient-to-tr from-maroon/10 to-transparent rounded-tr-2xl pointer-events-none" />
                {/* Subtle hover gradient */}
                <div className="absolute inset-0 bg-gradient-to-br from-secondary/5 via-transparent to-primary/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
                <div className="relative z-10">
                  <span className="inline-flex items-center px-4 py-1.5 rounded-full text-xs font-semibold mb-4 bg-maroon/10 text-maroon border border-maroon/20 tracking-wide">
                    Contact Form
                  </span>
                  <h2 className="font-heading text-2xl md:text-3xl font-bold text-maroon mb-6 group-hover:text-primary/90 transition-colors duration-300">
                    Send us a Message
                  </h2>
                  <form className="space-y-5">
                    <div className="grid sm:grid-cols-2 gap-4">
                      <div>
                        <label htmlFor="name" className="block text-sm font-medium text-foreground mb-2">
                          Your Name *
                        </label>
                        <input
                          type="text"
                          id="name"
                          name="name"
                          required
                          className="w-full px-4 py-3 rounded-xl border border-border bg-background/80 text-foreground focus:outline-none focus:ring-2 focus:ring-primary/25 focus:border-primary transition-all placeholder:text-muted-foreground/70"
                          placeholder="Enter your name"
                        />
                      </div>
                      <div>
                        <label htmlFor="phone" className="block text-sm font-medium text-foreground mb-2">
                          Phone Number *
                        </label>
                        <input
                          type="tel"
                          id="phone"
                          name="phone"
                          required
                          className="w-full px-4 py-3 rounded-xl border border-border bg-background/80 text-foreground focus:outline-none focus:ring-2 focus:ring-primary/25 focus:border-primary transition-all placeholder:text-muted-foreground/70"
                          placeholder="+91 99259 41082"
                        />
                      </div>
                    </div>

                    <div>
                      <label htmlFor="email" className="block text-sm font-medium text-foreground mb-2">
                        Email Address
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        className="w-full px-4 py-3 rounded-xl border border-border bg-background/80 text-foreground focus:outline-none focus:ring-2 focus:ring-primary/25 focus:border-primary transition-all placeholder:text-muted-foreground/70"
                        placeholder="your@email.com"
                      />
                    </div>

                    <div>
                      <label htmlFor="class" className="block text-sm font-medium text-foreground mb-2">
                        Class Interested In
                      </label>
                      <select
                        id="class"
                        name="class"
                        className="w-full px-4 py-3 rounded-xl border border-border bg-background/80 text-foreground focus:outline-none focus:ring-2 focus:ring-primary/25 focus:border-primary transition-all"
                      >
                        <option value="">Select Class</option>
                        {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((std) => (
                          <option key={std} value={std}>Std {std}</option>
                        ))}
                      </select>
                    </div>

                    <div>
                      <label htmlFor="message" className="block text-sm font-medium text-foreground mb-2">
                        Your Message
                      </label>
                      <textarea
                        id="message"
                        name="message"
                        rows={4}
                        className="w-full px-4 py-3 rounded-xl border border-border bg-background/80 text-foreground focus:outline-none focus:ring-2 focus:ring-primary/25 focus:border-primary transition-all resize-none placeholder:text-muted-foreground/70"
                        placeholder="How can we help you?"
                      />
                    </div>

                    <Button type="submit" variant="hero" size="lg" className="w-full shadow-md hover:scale-[1.02] hover:shadow-card-hover transition-all duration-300">
                      Send Message
                    </Button>
                  </form>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="py-16 md:py-24 bg-muted relative overflow-hidden">
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
              Location
            </span>
            <h2 className="font-heading text-3xl md:text-4xl lg:text-5xl font-bold text-maroon mb-5 tracking-tight leading-tight max-w-4xl mx-auto">
              Find Us on Map
            </h2>
            <div className="w-16 h-1 mx-auto mb-5 bg-gradient-to-r from-transparent via-primary to-transparent rounded-full" />
            <p className="text-muted-foreground max-w-2xl mx-auto text-lg md:text-xl leading-relaxed">
              Visit our school in Gandhinagar, Gujarat
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="rounded-2xl overflow-hidden shadow-card"
          >
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d117442.66483175564!2d72.5549865!3d23.2156354!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x395c2a3c0c422e35%3A0x5cb7e5e6c5dc20c6!2sVavol%2C%20Gandhinagar%2C%20Gujarat%20382016!5e0!3m2!1sen!2sin!4v1706000000000!5m2!1sen!2sin"
              width="100%"
              height="400"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="School Location Map"
            />
          </motion.div>
        </div>
      </section>
    </Layout>
  );
};

export default Contact;
