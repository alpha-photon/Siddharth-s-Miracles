import { motion } from "framer-motion";
import { LucideIcon } from "lucide-react";

interface PageHeroProps {
  badge?: string;
  title: string;
  subtitle?: string;
  description: string;
  backgroundImage?: string;
  icon?: LucideIcon;
}

export function PageHero({
  badge,
  title,
  subtitle,
  description,
  backgroundImage,
  icon: Icon,
}: PageHeroProps) {
  return (
    <section className="relative min-h-[60vh] md:min-h-[70vh] flex items-center overflow-hidden">
      {/* Background Image with Animation */}
      {backgroundImage && (
        <div className="absolute inset-0">
          <motion.img
            src={backgroundImage}
            alt={title}
            className="w-full h-full object-cover"
            initial={{ scale: 1.1, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 1.2, ease: "easeOut" }}
          />
          <div className="absolute inset-0 bg-gradient-to-r from-maroon/85 via-maroon/70 to-maroon/60" />
          <div className="absolute inset-0 bg-gradient-to-t from-maroon/80 via-transparent to-transparent" />
          <div className="absolute inset-0 bg-gradient-to-br from-secondary/10 via-transparent to-primary/10" />
        </div>
      )}

      {/* Animated Background Pattern (if no image) */}
      {!backgroundImage && (
        <div className="absolute inset-0 bg-gradient-to-br from-secondary/20 via-primary/10 to-accent/10">
          <div className="absolute inset-0 bg-pattern-dots opacity-30" />
          {/* Animated gradient orbs */}
          <motion.div
            animate={{
              x: [0, 100, 0],
              y: [0, 50, 0],
              scale: [1, 1.2, 1],
              opacity: [0.3, 0.5, 0.3],
            }}
            transition={{
              duration: 20,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            className="absolute top-20 right-20 w-96 h-96 bg-secondary/20 rounded-full blur-3xl"
          />
          <motion.div
            animate={{
              x: [0, -80, 0],
              y: [0, -60, 0],
              scale: [1, 1.3, 1],
              opacity: [0.2, 0.4, 0.2],
            }}
            transition={{
              duration: 25,
              repeat: Infinity,
              ease: "easeInOut",
              delay: 0.5,
            }}
            className="absolute bottom-20 left-20 w-[500px] h-[500px] bg-primary/20 rounded-full blur-3xl"
          />
        </div>
      )}

      {/* Floating Decorative Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(8)].map((_, i) => (
          <motion.div
            key={i}
            animate={{
              y: [0, -30, 0],
              opacity: [0.1, 0.3, 0.1],
              scale: [1, 1.2, 1],
            }}
            transition={{
              duration: 4 + i * 0.5,
              repeat: Infinity,
              ease: "easeInOut",
              delay: i * 0.3,
            }}
            className="absolute"
            style={{
              left: `${10 + i * 12}%`,
              top: `${15 + (i % 4) * 25}%`,
            }}
          >
            <div className={`w-3 h-3 rounded-full ${backgroundImage ? 'bg-white/30' : 'bg-secondary/40'} blur-sm`} />
          </motion.div>
        ))}
      </div>

      {/* Content */}
      <div className="container relative z-10 py-16 md:py-24">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center max-w-4xl mx-auto"
        >
          {/* Badge */}
          {badge && (
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="mb-6"
            >
              <span className={`inline-flex items-center gap-2 px-5 py-2.5 rounded-full text-sm font-semibold border shadow-lg ${
                backgroundImage 
                  ? 'bg-white/20 backdrop-blur-md text-white border-white/30' 
                  : 'bg-maroon/10 text-maroon border-maroon/20'
              }`}>
                {badge}
              </span>
            </motion.div>
          )}

          {/* Icon */}
          {Icon && (
            <motion.div
              initial={{ opacity: 0, scale: 0, rotate: -180 }}
              animate={{ opacity: 1, scale: 1, rotate: 0 }}
              transition={{ duration: 0.8, delay: 0.3, type: "spring", stiffness: 200 }}
              className="mb-6 flex justify-center"
            >
              <div className={`w-20 h-20 rounded-2xl backdrop-blur-md border flex items-center justify-center shadow-xl ${
                backgroundImage 
                  ? 'bg-white/20 border-white/30' 
                  : 'bg-card/80 border-border/50'
              }`}>
                <Icon className={`w-10 h-10 ${backgroundImage ? 'text-white' : 'text-maroon'}`} />
              </div>
            </motion.div>
          )}

          {/* Title */}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className={`font-heading text-4xl md:text-5xl lg:text-6xl font-bold mb-4 ${
              backgroundImage ? "text-white" : "text-maroon"
            } drop-shadow-lg`}
          >
            {title}
            {subtitle && (
              <motion.span
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 0.6 }}
                className={`block mt-2 ${
                  backgroundImage ? "text-secondary" : "text-primary"
                }`}
              >
                {subtitle}
              </motion.span>
            )}
          </motion.h1>

          {/* Decorative Line */}
          <motion.div
            initial={{ width: 0 }}
            animate={{ width: "120px" }}
            transition={{ duration: 0.8, delay: 0.7 }}
            className={`h-1 mx-auto mb-6 ${
              backgroundImage
                ? "bg-gradient-to-r from-transparent via-secondary to-transparent"
                : "bg-gradient-to-r from-transparent via-primary to-transparent"
            }`}
          />

          {/* Description */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            className={`text-lg md:text-xl leading-relaxed max-w-3xl mx-auto ${
              backgroundImage ? "text-white/90" : "text-muted-foreground"
            }`}
          >
            {description}
          </motion.p>
        </motion.div>
      </div>

      {/* Bottom Wave Decoration */}
      <div className="absolute bottom-0 left-0 right-0 z-10">
        <svg
          viewBox="0 0 1440 120"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="w-full h-auto"
          preserveAspectRatio="none"
        >
          <path
            d="M0 120L60 105C120 90 240 60 360 52.5C480 45 600 60 720 67.5C840 75 960 75 1080 67.5C1200 60 1320 45 1380 37.5L1440 30V120H1380C1320 120 1200 120 1080 120C960 120 840 120 720 120C600 120 480 120 360 120C240 120 120 120 60 120H0Z"
            fill="hsl(var(--background))"
          />
        </svg>
      </div>
    </section>
  );
}
