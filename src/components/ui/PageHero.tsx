import { useState } from "react";
import { motion } from "framer-motion";
import { LucideIcon, ArrowRight, GraduationCap } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { getPlaceholderUrl } from "@/lib/cloudinary-images";

interface PageHeroProps {
  badge?: string;
  title: string;
  subtitle?: string;
  description: string;
  backgroundImage?: string;
  icon?: LucideIcon;
  ctaText?: string;
  ctaLink?: string;
  iconSubtext?: string;
  overlayOpacity?: "default" | "light";
}

export function PageHero({
  badge,
  title,
  subtitle,
  description,
  backgroundImage,
  icon: Icon,
  ctaText,
  ctaLink,
  iconSubtext,
  overlayOpacity = "default",
}: PageHeroProps) {
  const [imageLoaded, setImageLoaded] = useState(false);
  const isCloudinary = backgroundImage?.includes("res.cloudinary.com");
  const placeholderUrl = isCloudinary ? getPlaceholderUrl(backgroundImage!) : undefined;

  return (
    <section className="relative min-h-[90vh] flex items-center overflow-hidden">
      {/* Background Image - same overlay as homepage hero */}
      {backgroundImage && (
        <div className="absolute inset-0">
          {/* Tiny blur placeholder (LQIP) – shows instantly while main image loads */}
          {placeholderUrl && (
            <img
              src={placeholderUrl}
              alt=""
              aria-hidden
              className="absolute inset-0 w-full h-full object-cover object-top sm:object-center scale-105 blur-md"
              style={{ filter: "blur(12px)" }}
            />
          )}
          <motion.img
            src={backgroundImage}
            alt=""
            fetchPriority="high"
            decoding="async"
            onLoad={() => setImageLoaded(true)}
            className="absolute inset-0 w-full h-full object-cover object-top sm:object-center"
            initial={{ scale: 1.05, opacity: 0 }}
            animate={{
              scale: 1,
              opacity: imageLoaded ? 1 : 0,
            }}
            transition={{ duration: 0.4, ease: "easeOut" }}
          />
          {/* Reddish/maroon overlay – same as home page hero */}
          <div className="absolute inset-0 bg-gradient-to-r from-maroon/90 via-maroon/70 to-maroon/40" />
          <div className="absolute inset-0 bg-gradient-to-t from-maroon/60 via-transparent to-transparent" />
        </div>
      )}

      {/* Animated Background Pattern (if no image) */}
      {!backgroundImage && (
        <div className="absolute inset-0 bg-gradient-to-br from-secondary/20 via-primary/10 to-accent/10">
          <div className="absolute inset-0 bg-pattern-dots opacity-30" />
          <motion.div
            animate={{ x: [0, 100, 0], y: [0, 50, 0], scale: [1, 1.2, 1], opacity: [0.3, 0.5, 0.3] }}
            transition={{ duration: 20, repeat: Infinity, ease: "easeInOut" }}
            className="absolute top-20 right-20 w-96 h-96 bg-secondary/20 rounded-full blur-3xl"
          />
          <motion.div
            animate={{ x: [0, -80, 0], y: [0, -60, 0], scale: [1, 1.3, 1], opacity: [0.2, 0.4, 0.2] }}
            transition={{ duration: 25, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
            className="absolute bottom-20 left-20 w-[500px] h-[500px] bg-primary/20 rounded-full blur-3xl"
          />
        </div>
      )}

      {/* Content - same dimensions & layout as homepage hero; responsive padding for mobile */}
      <div className="container relative z-10 py-12 sm:py-16 md:py-20">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className={`max-w-2xl ${backgroundImage ? "text-white" : ""}`}
        >
          {/* Admissions Open badge - same as homepage hero */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="mb-6"
          >
            <span
              className={`inline-flex items-center gap-2 px-4 py-2 rounded-full text-sm font-semibold shadow-lg ${
                backgroundImage
                  ? "bg-secondary/90 text-secondary-foreground border border-secondary/50"
                  : "bg-secondary/20 text-secondary-foreground border border-secondary/30"
              }`}
            >
              <span className="w-2 h-2 bg-growth rounded-full animate-pulse" />
              Admissions Open 2026-27
            </span>
          </motion.div>

          {/* Badge - same style as homepage (optional page-specific badge) */}
          {badge && (
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="mb-6"
            >
              <span className={`inline-flex items-center gap-2 px-4 py-2 rounded-full text-sm font-semibold shadow-lg ${
                backgroundImage
                  ? "bg-secondary/90 text-secondary-foreground border border-secondary/50"
                  : "bg-maroon/10 text-maroon border border-maroon/20"
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
              className="mb-6"
            >
              <div className={`w-16 h-16 rounded-xl flex items-center justify-center shadow-lg ${
                backgroundImage ? "bg-white/20 border border-white/30" : "bg-card/90 border border-border/60"
              }`}>
                <Icon className={`w-8 h-8 ${backgroundImage ? "text-white" : "text-maroon"}`} />
              </div>
              {iconSubtext && (
                <motion.p
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.5 }}
                  className={`mt-2 text-sm font-medium ${backgroundImage ? "text-white/90" : "text-muted-foreground"}`}
                >
                  {iconSubtext}
                </motion.p>
              )}
            </motion.div>
          )}

          {/* Title - same as homepage: large serif, white, drop-shadow */}
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4, type: "spring", stiffness: 100 }}
            className={`font-heading text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-3 sm:mb-4 ${
              backgroundImage ? "text-white" : "text-maroon"
            } drop-shadow-2xl tracking-tight`}
            style={{
              textShadow: backgroundImage ? "0 4px 20px rgba(0,0,0,0.5), 0 2px 8px rgba(0,0,0,0.3)" : "none",
              letterSpacing: "0.02em",
            }}
          >
            {title}
          </motion.h1>

          {/* Subtitle – white text like home hero */}
          {subtitle && (
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className={`font-heading text-xl md:text-2xl font-medium italic opacity-95 mb-2 ${
                backgroundImage ? "text-white drop-shadow-lg" : "text-primary"
              }`}
              style={{
                textShadow: backgroundImage ? "0 2px 12px rgba(0,0,0,0.4), 0 1px 4px rgba(0,0,0,0.2)" : "none",
                letterSpacing: "0.05em",
              }}
            >
              &ldquo;{subtitle}&rdquo;
            </motion.p>
          )}

          {/* Description - same spacing as homepage */}
          {description && (
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.7 }}
              className={`text-lg leading-relaxed mb-8 ${backgroundImage ? "text-white/90 opacity-90" : "text-muted-foreground"}`}
              style={{ lineHeight: "1.8" }}
            >
              {description}
            </motion.p>
          )}

          {/* Admission Enquiry CTA - same as homepage hero */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            className={`flex flex-wrap gap-4 ${!description ? "mt-8" : ""}`}
          >
            <Button variant="hero" size="lg" className="group shadow-elevated group/btn" asChild>
              <Link to="/admission" className="inline-flex items-center">
                <GraduationCap className="h-5 w-5 mr-2 group-hover/btn:scale-110 transition-transform duration-300" />
                Admission Enquiry
              </Link>
            </Button>
            {ctaText && ctaLink && (
              <Button
                variant="outline"
                size="lg"
                className={`group border-2 ${backgroundImage ? "border-white/50 text-white hover:bg-white/10 hover:border-white/70" : "border-primary text-primary hover:bg-primary/10"}`}
                asChild
              >
                <Link to={ctaLink}>
                  {ctaText}
                  <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                </Link>
              </Button>
            )}
          </motion.div>
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
