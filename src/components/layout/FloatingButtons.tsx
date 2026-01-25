import { MessageCircle } from "lucide-react";
import { motion } from "framer-motion";

export function FloatingButtons() {
  return (
    <>
      {/* WhatsApp Floating Button */}
      <motion.a
        href="https://wa.me/919876543210?text=Hello! I'm interested in admission enquiry for Siddharth's Miracles School."
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-6 right-6 z-50 flex items-center justify-center w-14 h-14 bg-[#25D366] text-white rounded-full shadow-elevated hover:scale-110 transition-transform duration-300"
        initial={{ scale: 0, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ delay: 1, type: "spring", stiffness: 200 }}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.95 }}
        aria-label="Chat on WhatsApp"
      >
        <MessageCircle className="h-7 w-7" fill="white" />
      </motion.a>
    </>
  );
}
