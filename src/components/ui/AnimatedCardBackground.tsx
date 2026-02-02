import { motion } from "framer-motion";

interface AnimatedCardBackgroundProps {
  index: number;
}

export function AnimatedCardBackground({ index }: AnimatedCardBackgroundProps) {
  return (
    <>
      {/* Permanent gradient background */}
      <div className="absolute inset-0 bg-gradient-to-br from-secondary/8 via-accent/5 to-secondary/3" />
      
      {/* Permanent decorative corner elements */}
      <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-bl from-secondary/15 to-secondary/5 rounded-bl-[3rem] pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-24 h-24 bg-gradient-to-tr from-secondary/12 to-secondary/4 rounded-tr-[2rem] pointer-events-none" />
      
      {/* Animated gradient background on hover - mustard yellow */}
      <div className="absolute inset-0 bg-gradient-to-br from-secondary/20 via-secondary/15 to-secondary/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
      
      {/* Animated background decorative elements - PERMANENT */}
      {/* Stars */}
      <motion.div
        animate={{ 
          rotate: [0, 360],
          scale: [1, 1.2, 1],
          opacity: [0.15, 0.35, 0.15]
        }}
        transition={{ 
          duration: 8, 
          repeat: Infinity, 
          ease: "linear",
          delay: index * 0.5
        }}
        className="absolute top-4 right-6 w-2 h-2 text-secondary/25"
      >
        <svg viewBox="0 0 24 24" fill="currentColor" className="w-full h-full">
          <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
        </svg>
      </motion.div>
      
      <motion.div
        animate={{ 
          rotate: [360, 0],
          scale: [1, 1.3, 1],
          opacity: [0.2, 0.4, 0.2]
        }}
        transition={{ 
          duration: 6, 
          repeat: Infinity, 
          ease: "linear",
          delay: index * 0.7
        }}
        className="absolute bottom-8 left-4 w-3 h-3 text-secondary/20"
      >
        <svg viewBox="0 0 24 24" fill="currentColor" className="w-full h-full">
          <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
        </svg>
      </motion.div>
      
      {/* Circles */}
      <motion.div
        animate={{ 
          scale: [1, 1.5, 1],
          opacity: [0.15, 0.3, 0.15],
          x: [0, 10, 0],
          y: [0, -5, 0]
        }}
        transition={{ 
          duration: 7, 
          repeat: Infinity, 
          ease: "easeInOut",
          delay: index * 0.3
        }}
        className="absolute top-1/4 left-8 w-16 h-16 rounded-full border-2 border-secondary/15"
      />
      
      <motion.div
        animate={{ 
          scale: [1, 1.3, 1],
          opacity: [0.12, 0.25, 0.12],
          x: [0, -8, 0],
          y: [0, 8, 0]
        }}
        transition={{ 
          duration: 9, 
          repeat: Infinity, 
          ease: "easeInOut",
          delay: index * 0.4
        }}
        className="absolute bottom-1/4 right-8 w-12 h-12 rounded-full border-2 border-secondary/12"
      />
      
      {/* Rectangles */}
      <motion.div
        animate={{ 
          rotate: [0, 90, 0],
          scale: [1, 1.2, 1],
          opacity: [0.18, 0.32, 0.18]
        }}
        transition={{ 
          duration: 10, 
          repeat: Infinity, 
          ease: "easeInOut",
          delay: index * 0.6
        }}
        className="absolute top-1/2 left-4 w-8 h-8 border-2 border-secondary/18 rounded-lg"
      />
      
      <motion.div
        animate={{ 
          rotate: [90, 0, 90],
          scale: [1, 1.15, 1],
          opacity: [0.15, 0.28, 0.15]
        }}
        transition={{ 
          duration: 8, 
          repeat: Infinity, 
          ease: "easeInOut",
          delay: index * 0.5
        }}
        className="absolute bottom-1/3 right-4 w-6 h-6 border-2 border-secondary/15 rounded"
      />
    </>
  );
}
