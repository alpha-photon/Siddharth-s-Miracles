import { MessageCircle } from "lucide-react";
import { motion } from "framer-motion";

const WHATSAPP_GREEN = "#25D366";
const WHATSAPP_GREEN_HOVER = "#20BD5A";

export function FloatingButtons() {
  return (
    <>
      {/* WhatsApp Floating Button */}
      <motion.a
        href="https://wa.me/919925941082?text=Hello! I'm interested in admission enquiry for Siddharth's Miracles School."
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-6 right-6 z-50 flex items-center justify-center w-16 h-16 rounded-full text-white border-2 border-white/30 shadow-[0_4px_20px_rgba(37,211,102,0.4),0_8px_32px_rgba(0,0,0,0.12)] hover:shadow-[0_8px_28px_rgba(37,211,102,0.5),0_12px_40px_rgba(0,0,0,0.15)] hover:border-white/50 transition-all duration-300 hover:scale-105 active:scale-95"
        style={{ backgroundColor: WHATSAPP_GREEN }}
        initial={{ scale: 0, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ delay: 1, type: "spring", stiffness: 200 }}
        whileHover={{ scale: 1.05, backgroundColor: WHATSAPP_GREEN_HOVER }}
        whileTap={{ scale: 0.95 }}
        aria-label="Chat on WhatsApp"
      >
        <MessageCircle className="h-8 w-8" fill="currentColor" strokeWidth={0} />
      </motion.a>
    </>
  );
}
