import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ChevronLeft, ChevronRight, ArrowRight, Images } from "lucide-react";
import useEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";
import { useCallback } from "react";

// Import gallery images
import heroCultural from "@/assets/hero-cultural.jpg";
import heroPlayground from "@/assets/hero-playground.jpg";
import activitiesArt from "@/assets/activities-art.jpg";
import activitiesSports from "@/assets/activities-sports.jpg";
import activitiesAssembly from "@/assets/activities-assembly.jpg";

const galleryImages = [
  { src: heroCultural, title: "Annual Day Celebrations" },
  { src: heroPlayground, title: "Sports & Games" },
  { src: activitiesArt, title: "Art & Creativity" },
  { src: activitiesSports, title: "Athletic Events" },
  { src: activitiesAssembly, title: "Morning Assembly" },
];

function GalleryPreviewCarousel() {
  const [emblaRef, emblaApi] = useEmblaCarousel(
    { loop: true, align: "center" },
    [Autoplay({ delay: 3500, stopOnInteraction: false })]
  );

  const scrollPrev = useCallback(() => emblaApi?.scrollPrev(), [emblaApi]);
  const scrollNext = useCallback(() => emblaApi?.scrollNext(), [emblaApi]);

  return (
    <div className="relative">
      <div className="overflow-hidden rounded-2xl" ref={emblaRef}>
        <div className="flex">
          {galleryImages.map((image, index) => (
            <div key={index} className="flex-[0_0_100%] md:flex-[0_0_50%] lg:flex-[0_0_40%] min-w-0 px-3">
              <div className="relative group overflow-hidden rounded-2xl shadow-elevated">
                <div className="image-zoom aspect-[3/2]">
                  <img
                    src={image.src}
                    alt={image.title}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-maroon/80 via-transparent to-transparent" />
                <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                  <h3 className="font-heading text-xl font-bold drop-shadow-lg">{image.title}</h3>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      
      <button
        onClick={scrollPrev}
        className="absolute left-2 md:-left-4 top-1/2 -translate-y-1/2 z-10 w-12 h-12 rounded-full bg-white shadow-elevated flex items-center justify-center text-maroon hover:bg-secondary hover:text-white transition-all duration-300 hover:scale-110"
        aria-label="Previous image"
      >
        <ChevronLeft className="w-6 h-6" />
      </button>
      <button
        onClick={scrollNext}
        className="absolute right-2 md:-right-4 top-1/2 -translate-y-1/2 z-10 w-12 h-12 rounded-full bg-white shadow-elevated flex items-center justify-center text-maroon hover:bg-secondary hover:text-white transition-all duration-300 hover:scale-110"
        aria-label="Next image"
      >
        <ChevronRight className="w-6 h-6" />
      </button>
    </div>
  );
}

export function GalleryPreviewSection() {
  return (
    <section className="py-16 md:py-20">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-14 md:mb-20"
        >
          <h2 className="font-heading text-3xl md:text-4xl lg:text-5xl font-bold text-maroon mb-5 tracking-tight leading-tight max-w-4xl mx-auto">
            Life at Siddharth's Miracles
          </h2>
          <div className="w-16 h-1 mx-auto mb-5 bg-gradient-to-r from-transparent via-primary to-transparent rounded-full" />
          <p className="text-muted-foreground max-w-2xl mx-auto text-lg md:text-xl leading-relaxed">
            Glimpses of our vibrant school community
          </p>
        </motion.div>
        
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mb-8"
        >
          <GalleryPreviewCarousel />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="text-center"
        >
          <Button variant="hero" size="lg" asChild className="shadow-elevated">
            <Link to="/gallery">
              <Images className="h-5 w-5 mr-2" />
              View Gallery
              <ArrowRight className="h-5 w-5 ml-2" />
            </Link>
          </Button>
        </motion.div>
      </div>
    </section>
  );
}
