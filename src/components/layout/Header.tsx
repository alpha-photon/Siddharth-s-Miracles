import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";
import { motion, AnimatePresence } from "framer-motion";
import { schoolLogo } from "@/lib/cloudinary-images";

const navLinks = [
  { name: "Home", path: "/" },
  { name: "About Us", path: "/about" },
  { name: "Academics", path: "/academics" },
  { name: "Activities", path: "/activities" },
  { name: "Facilities", path: "/facilities" },
  { name: "Gallery", path: "/gallery" },
  { name: "Admission", path: "/admission" },
  { name: "Contact", path: "/contact" },
];

export function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();

  return (
    <header className="sticky top-0 z-50 w-full bg-background/95 backdrop-blur-md border-b border-border/50">
      <div className="container flex h-16 sm:h-20 items-center justify-between gap-2">
        {/* Logo + School name - visible on all screens including mobile */}
        <Link to="/" className="flex items-center gap-2 sm:gap-3 min-w-0 flex-1 lg:flex-initial">
          <img 
            src={schoolLogo} 
            alt="Siddharth's Miracles School" 
            className="h-11 w-auto sm:h-14 flex-shrink-0 transition-transform duration-300 hover:scale-105"
          />
          <div className="min-w-0">
            <h1 className="font-heading text-sm sm:text-lg font-bold text-maroon leading-tight truncate">
              Siddharth's Miracles
            </h1>
            <p className="text-[10px] sm:text-xs text-muted-foreground hidden sm:block">Where Each Day is a Miracle</p>
          </div>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden lg:flex items-center gap-1">
          {navLinks.map((link) => (
            <Link
              key={link.path}
              to={link.path}
              className={`px-3 py-2 rounded-lg text-sm font-medium transition-all duration-200 ${
                location.pathname === link.path
                  ? "bg-secondary/20 text-maroon font-semibold"
                  : "text-muted-foreground hover:text-foreground hover:bg-muted"
              }`}
            >
              {link.name}
            </Link>
          ))}
        </nav>

        {/* CTA Buttons */}
        <div className="hidden md:flex items-center gap-3">
          <Button variant="outlineMaroon" size="sm" asChild>
            <a href="tel:+919925941082" className="gap-2">
              <Phone className="h-4 w-4" />
              <span className="hidden xl:inline">Call Us</span>
            </a>
          </Button>
          <Button variant="hero" size="sm" asChild>
            <Link to="/admission">Admission Enquiry</Link>
          </Button>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="lg:hidden p-2 rounded-lg hover:bg-muted transition-colors"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          aria-label="Toggle menu"
        >
          {mobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>

      {/* Mobile Navigation */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="lg:hidden border-t border-border bg-background"
          >
            <nav className="container py-4 flex flex-col gap-2">
              {navLinks.map((link) => (
                <Link
                  key={link.path}
                  to={link.path}
                  onClick={() => setMobileMenuOpen(false)}
                  className={`px-4 py-3 rounded-lg text-base font-medium transition-all duration-200 ${
                    location.pathname === link.path
                      ? "bg-secondary/20 text-maroon font-semibold"
                      : "text-muted-foreground hover:text-foreground hover:bg-muted"
                  }`}
                >
                  {link.name}
                </Link>
              ))}
              <div className="flex gap-3 mt-4 pt-4 border-t border-border">
                <Button variant="outlineMaroon" className="flex-1" asChild>
                  <a href="tel:+919925941082">
                    <Phone className="h-4 w-4 mr-2" />
                    Call Us
                  </a>
                </Button>
                <Button variant="hero" className="flex-1" asChild>
                  <Link to="/admission" onClick={() => setMobileMenuOpen(false)}>
                    Enquiry
                  </Link>
                </Button>
              </div>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
