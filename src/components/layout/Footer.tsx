import { Link } from "react-router-dom";
import { MapPin, Phone, Mail, Clock } from "lucide-react";
import schoolLogo from "@/assets/school-logo.png";

const quickLinks = [
  { name: "About Us", path: "/about" },
  { name: "Academics", path: "/academics" },
  { name: "Admission", path: "/admission" },
  { name: "Contact", path: "/contact" },
];

const academicLinks = [
  { name: "Curriculum", path: "/academics" },
  { name: "Activities", path: "/activities" },
  { name: "Facilities", path: "/facilities" },
  { name: "Gallery", path: "/gallery" },
];

export function Footer() {
  return (
    <footer className="bg-maroon text-maroon-foreground">
      {/* Main Footer */}
      <div className="container py-12 md:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
          {/* School Info */}
          <div className="lg:col-span-1">
            <div className="flex items-center gap-3 mb-4">
              <img 
                src={schoolLogo} 
                alt="Siddharth's Miracles School" 
                className="h-16 w-auto bg-white rounded-lg p-1"
              />
            </div>
            <h3 className="font-heading text-xl font-bold mb-2">
              Siddharth's Miracles School
            </h3>
            <p className="text-sm opacity-90 italic mb-4">
              "Where Each Day is a Miracle"
            </p>
            <p className="text-sm opacity-80 leading-relaxed">
              Nurturing young minds with quality education, values, and care since establishment.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-heading text-lg font-semibold mb-4 text-secondary">
              Quick Links
            </h4>
            <ul className="space-y-2">
              {quickLinks.map((link) => (
                <li key={link.path}>
                  <Link 
                    to={link.path}
                    className="text-sm opacity-80 hover:opacity-100 hover:text-secondary transition-all duration-200"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Academic */}
          <div>
            <h4 className="font-heading text-lg font-semibold mb-4 text-secondary">
              Academics
            </h4>
            <ul className="space-y-2">
              {academicLinks.map((link) => (
                <li key={link.path}>
                  <Link 
                    to={link.path}
                    className="text-sm opacity-80 hover:opacity-100 hover:text-secondary transition-all duration-200"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="font-heading text-lg font-semibold mb-4 text-secondary">
              Contact Us
            </h4>
            <ul className="space-y-3">
              <li className="flex items-start gap-3 text-sm">
                <MapPin className="h-5 w-5 flex-shrink-0 mt-0.5 text-secondary" />
                <span className="opacity-80">
                  Gandhinagar, Gujarat, India
                </span>
              </li>
              <li className="flex items-center gap-3 text-sm">
                <Phone className="h-5 w-5 flex-shrink-0 text-secondary" />
                <a href="tel:+919876543210" className="opacity-80 hover:opacity-100 hover:text-secondary transition-all">
                  +91 98765 43210
                </a>
              </li>
              <li className="flex items-center gap-3 text-sm">
                <Mail className="h-5 w-5 flex-shrink-0 text-secondary" />
                <a href="mailto:info@siddharthsmiracles.edu" className="opacity-80 hover:opacity-100 hover:text-secondary transition-all">
                  info@siddharthsmiracles.edu
                </a>
              </li>
              <li className="flex items-start gap-3 text-sm">
                <Clock className="h-5 w-5 flex-shrink-0 mt-0.5 text-secondary" />
                <span className="opacity-80">
                  Mon - Sat: 8:00 AM - 4:00 PM
                </span>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Copyright */}
      <div className="border-t border-white/10">
        <div className="container py-6 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-sm opacity-70 text-center md:text-left">
            © {new Date().getFullYear()} Siddharth's Miracles School. All rights reserved.
          </p>
          <p className="text-sm opacity-70">
            Gujarati Board | Std 1-10
          </p>
        </div>
      </div>
    </footer>
  );
}
