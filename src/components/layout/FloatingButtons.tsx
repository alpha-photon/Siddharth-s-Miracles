import { MessageCircle, GraduationCap } from "lucide-react";
import { motion } from "framer-motion";

const WHATSAPP_LINK = "https://wa.me/919925941082?text=Hello! I want to know more about admission for my child at Siddharth's Miracles School.";

export function FloatingButtons() {
  return (
    <>
      {/* Admission Open – left bottom, bounce, website theme (maroon) */}
      <motion.a
        href={WHATSAPP_LINK}
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-6 left-4 md:left-6 z-50 flex items-center gap-2 px-4 py-3 rounded-xl bg-maroon text-maroon-foreground font-semibold border-2 border-maroon/80 shadow-elevated hover:shadow-[0_12px_28px_-4px_hsl(var(--maroon)/0.35)] hover:bg-maroon/95 transition-all duration-300"
        initial={{ opacity: 0, x: -20 }}
        animate={{
          opacity: 1,
          x: 0,
          y: [0, -8, 0],
        }}
        transition={{
          opacity: { delay: 0.5 },
          x: { delay: 0.5, type: "spring", stiffness: 200 },
          y: {
            repeat: Infinity,
            repeatType: "reverse",
            duration: 1.2,
            ease: "easeInOut",
          },
        }}
        whileHover={{ scale: 1.03 }}
        whileTap={{ scale: 0.98 }}
        aria-label="Admission Open – Chat on WhatsApp"
      >
        <GraduationCap className="h-6 w-6 shrink-0" aria-hidden />
        <span className="hidden sm:inline text-sm">Admission Open</span>
        <span className="sm:hidden text-sm">Admission</span>
        <span className="hidden md:inline text-xs opacity-90 font-medium"> – I want to know</span>
        <MessageCircle className="h-5 w-5 shrink-0" fill="currentColor" strokeWidth={0} aria-hidden />
      </motion.a>

      {/* WhatsApp – right side, website theme (maroon + secondary accent) */}
      <motion.a
        href={WHATSAPP_LINK}
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-6 right-6 z-50 flex items-center justify-center w-12 h-12 rounded-full bg-maroon text-maroon-foreground border-2 border-secondary/40 shadow-elevated hover:shadow-[0_12px_28px_-4px_hsl(var(--maroon)/0.35)] hover:border-secondary/60 transition-all duration-300"
        initial={{ scale: 0, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ delay: 1, type: "spring", stiffness: 200 }}
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        aria-label="Chat on WhatsApp"
      >
        <MessageCircle className="h-6 w-6" fill="currentColor" strokeWidth={0} />
      </motion.a>
    </>
  );
}
