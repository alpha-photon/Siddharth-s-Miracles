import { useState, useEffect, useRef } from "react";
import { Layout } from "@/components/layout/Layout";
import { motion, AnimatePresence } from "framer-motion";
import { PageHero } from "@/components/ui/PageHero";
import { Images, X, ChevronLeft, ChevronRight, ZoomIn, ZoomOut, RotateCw } from "lucide-react";
import heroGallery from "@/assets/herosection/IMG_3249.JPG";

// Import all school images
import img1 from "@/assets/school-image/IMG-20251217-WA0016.jpg";
import img2 from "@/assets/school-image/IMG-20260102-WA0001.jpg";
import img3 from "@/assets/school-image/IMG-20260102-WA0002.jpg";
import img4 from "@/assets/school-image/IMG-20260105-WA0010.jpg";
import img5 from "@/assets/school-image/IMG-20260106-WA0004.jpg";
import img6 from "@/assets/school-image/IMG-20260106-WA0009.jpg";
import img7 from "@/assets/school-image/IMG-20260106-WA0015.jpg";
import img8 from "@/assets/school-image/IMG-20260108-WA0004.jpg";
import img9 from "@/assets/school-image/IMG-20260108-WA0010.jpg";
import img10 from "@/assets/school-image/IMG-20260108-WA0016.jpg";
import img11 from "@/assets/school-image/IMG-20260108-WA0029.jpg";
import img12 from "@/assets/school-image/IMG-20260108-WA0030.jpg";
import img13 from "@/assets/school-image/IMG-20260108-WA0062.jpg";
import img14 from "@/assets/school-image/IMG-20260108-WA0081.jpg";
import img15 from "@/assets/school-image/IMG-20260108-WA0088.jpg";
import img16 from "@/assets/school-image/IMG-20260108-WA0090.jpg";
import img17 from "@/assets/school-image/IMG-20260120-WA0004.jpg";
import img18 from "@/assets/school-image/IMG-20260120-WA0020.jpg";
import img19 from "@/assets/school-image/IMG-20260120-WA0027.jpg";
import img20 from "@/assets/school-image/IMG-20260120-WA0033.jpg";
import img21 from "@/assets/school-image/IMG-20260120-WA0047.jpg";
import img22 from "@/assets/school-image/IMG-20260120-WA0048.jpg";
import img23 from "@/assets/school-image/IMG-20260120-WA0052.jpg";
import img24 from "@/assets/school-image/IMG_20260101_104710.jpg";
import img25 from "@/assets/school-image/IMG_20260102_115833.jpg";
import img26 from "@/assets/school-image/IMG_20260105_104054.jpg";
import img27 from "@/assets/school-image/IMG_20260121_104925.jpg";
import img28 from "@/assets/school-image/IMG_20260121_110052.jpg";
import img29 from "@/assets/school-image/IMG_20260121_110056.jpg";
import img30 from "@/assets/school-image/IMG_20260121_112721.jpg";
import img31 from "@/assets/school-image/IMG_20260121_113304.jpg";
import img32 from "@/assets/school-image/IMG_20260121_113321.jpg";
import img33 from "@/assets/school-image/IMG_20260123_093527.jpg";
import img34 from "@/assets/school-image/IMG_20260123_093831.jpg";
import img35 from "@/assets/school-image/IMG_20260123_094046.jpg";
import img36 from "@/assets/school-image/IMG_20260123_094053.jpg";
import img37 from "@/assets/school-image/IMG_20260123_094113.jpg";
import img38 from "@/assets/school-image/IMG_20260123_094126.jpg";
import img39 from "@/assets/school-image/IMG_20260123_094200.jpg";
import img40 from "@/assets/school-image/IMG_20260123_095812.jpg";

// Image categories - Update categories based on actual image content
// Categories: "classrooms", "activities", "celebrations", "events", "campus"
const allImages = [
  // Classrooms - Images showing classroom interiors, students in classrooms, teaching
  { src: img1, category: "classrooms" },   // IMG-20251217-WA0016
  { src: img2, category: "classrooms" },   // IMG-20260102-WA0001
  { src: img3, category: "classrooms" },   // IMG-20260102-WA0002
  { src: img4, category: "classrooms" },   // IMG-20260105-WA0010
  { src: img5, category: "classrooms" },   // IMG-20260106-WA0004
  { src: img6, category: "classrooms" },   // IMG-20260106-WA0009
  { src: img7, category: "classrooms" },   // IMG-20260106-WA0015
  { src: img8, category: "classrooms" },   // IMG-20260108-WA0004
  
  // Activities - Sports, games, art, cultural activities, competitions
  { src: img9, category: "activities" },    // IMG-20260108-WA0010
  { src: img10, category: "activities" },   // IMG-20260108-WA0016
  { src: img11, category: "activities" },   // IMG-20260108-WA0029
  { src: img12, category: "activities" },   // IMG-20260108-WA0030
  { src: img13, category: "activities" },   // IMG-20260108-WA0062
  { src: img14, category: "activities" },   // IMG-20260108-WA0081
  { src: img15, category: "activities" },   // IMG-20260108-WA0088
  { src: img16, category: "activities" },   // IMG-20260108-WA0090
  
  // Celebrations - Festivals, special days, cultural celebrations
  { src: img17, category: "celebrations" }, // IMG-20260120-WA0004
  { src: img18, category: "celebrations" }, // IMG-20260120-WA0020
  { src: img19, category: "celebrations" }, // IMG-20260120-WA0027
  { src: img20, category: "celebrations" }, // IMG-20260120-WA0033
  { src: img21, category: "celebrations" }, // IMG-20260120-WA0047
  { src: img22, category: "celebrations" }, // IMG-20260120-WA0048
  { src: img23, category: "celebrations" }, // IMG-20260120-WA0052
  { src: img24, category: "celebrations" }, // IMG_20260101_104710
  
  // Events - Annual day, sports day, science fair, special programs
  { src: img25, category: "events" },      // IMG_20260102_115833
  { src: img26, category: "events" },       // IMG_20260105_104054
  { src: img27, category: "events" },       // IMG_20260121_104925
  { src: img28, category: "events" },       // IMG_20260121_110052
  { src: img29, category: "events" },       // IMG_20260121_110056
  { src: img30, category: "events" },       // IMG_20260121_112721
  { src: img31, category: "events" },       // IMG_20260121_113304
  { src: img32, category: "events" },       // IMG_20260121_113321
  
  // Campus - School building, playground, infrastructure, outdoor areas
  { src: img33, category: "campus" },      // IMG_20260123_093527
  { src: img34, category: "campus" },      // IMG_20260123_093831
  { src: img35, category: "campus" },      // IMG_20260123_094046
  { src: img36, category: "campus" },      // IMG_20260123_094053
  { src: img37, category: "campus" },      // IMG_20260123_094113
  { src: img38, category: "campus" },      // IMG_20260123_094126
  { src: img39, category: "campus" },      // IMG_20260123_094200
  { src: img40, category: "campus" },      // IMG_20260123_095812
];

const galleryCategories = [
  { name: "All", nameGuj: "બધા", value: "all" },
  { name: "Classrooms", nameGuj: "વર્ગખંડો", value: "classrooms" },
  { name: "Activities", nameGuj: "પ્રવૃત્તિઓ", value: "activities" },
  { name: "Celebrations", nameGuj: "ઉજવણી", value: "celebrations" },
  { name: "Events", nameGuj: "કાર્યક્રમો", value: "events" },
  { name: "Campus", nameGuj: "કેમ્પસ", value: "campus" },
];

const Gallery = () => {
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [selectedImage, setSelectedImage] = useState<number | null>(null);
  const [imageLoaded, setImageLoaded] = useState(false);
  const [zoom, setZoom] = useState(1);
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [isDragging, setIsDragging] = useState(false);
  const [dragStart, setDragStart] = useState({ x: 0, y: 0 });
  const [touchStart, setTouchStart] = useState({ x: 0, y: 0 });
  const [touchDistance, setTouchDistance] = useState(0);
  const imageRef = useRef<HTMLImageElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);

  const filteredImages = selectedCategory === "all" 
    ? allImages 
    : allImages.filter(img => img.category === selectedCategory);

  const openLightbox = (index: number) => {
    setSelectedImage(index);
    setZoom(1);
    setPosition({ x: 0, y: 0 });
    setImageLoaded(false);
    document.body.style.overflow = "hidden";
  };

  const closeLightbox = () => {
    setSelectedImage(null);
    setZoom(1);
    setPosition({ x: 0, y: 0 });
    document.body.style.overflow = "unset";
  };

  const navigateImage = (direction: "prev" | "next") => {
    if (selectedImage === null) return;
    setImageLoaded(false);
    setZoom(1);
    setPosition({ x: 0, y: 0 });
    if (direction === "prev") {
      setSelectedImage(selectedImage > 0 ? selectedImage - 1 : filteredImages.length - 1);
    } else {
      setSelectedImage(selectedImage < filteredImages.length - 1 ? selectedImage + 1 : 0);
    }
  };

  const handleZoom = (delta: number) => {
    setZoom((prev) => {
      const newZoom = Math.max(1, Math.min(3, prev + delta));
      if (newZoom === 1) {
        setPosition({ x: 0, y: 0 });
      }
      return newZoom;
    });
  };

  const resetZoom = () => {
    setZoom(1);
    setPosition({ x: 0, y: 0 });
  };

  const handleMouseDown = (e: React.MouseEvent) => {
    if (zoom > 1) {
      setIsDragging(true);
      setDragStart({ x: e.clientX - position.x, y: e.clientY - position.y });
    }
  };

  const handleMouseMove = (e: React.MouseEvent) => {
    if (isDragging && zoom > 1) {
      setPosition({
        x: e.clientX - dragStart.x,
        y: e.clientY - dragStart.y,
      });
    }
  };

  const handleMouseUp = () => {
    setIsDragging(false);
  };

  // Touch handlers for mobile swipe
  const handleTouchStart = (e: React.TouchEvent) => {
    if (e.touches.length === 1) {
      setTouchStart({ x: e.touches[0].clientX, y: e.touches[0].clientY });
    } else if (e.touches.length === 2) {
      const distance = Math.hypot(
        e.touches[0].clientX - e.touches[1].clientX,
        e.touches[0].clientY - e.touches[1].clientY
      );
      setTouchDistance(distance);
    }
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    if (e.touches.length === 1 && zoom > 1) {
      const touch = e.touches[0];
      setPosition({
        x: touch.clientX - touchStart.x,
        y: touch.clientY - touchStart.y,
      });
    } else if (e.touches.length === 2) {
      const distance = Math.hypot(
        e.touches[0].clientX - e.touches[1].clientX,
        e.touches[0].clientY - e.touches[1].clientY
      );
      const scaleChange = (distance - touchDistance) / 100;
      handleZoom(scaleChange * 0.1);
      setTouchDistance(distance);
    }
  };

  const handleTouchEnd = (e: React.TouchEvent) => {
    if (e.changedTouches.length === 1 && zoom === 1) {
      const touch = e.changedTouches[0];
      const deltaX = touch.clientX - touchStart.x;
      const deltaY = touch.clientY - touchStart.y;
      const absDeltaX = Math.abs(deltaX);
      const absDeltaY = Math.abs(deltaY);

      // Swipe detection (minimum 50px movement, more horizontal than vertical)
      if (absDeltaX > 50 && absDeltaX > absDeltaY) {
        if (deltaX > 0) {
          navigateImage("prev");
        } else {
          navigateImage("next");
        }
      }
    }
    setTouchDistance(0);
  };

  // Keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (selectedImage === null) return;

      switch (e.key) {
        case "Escape":
          closeLightbox();
          break;
        case "ArrowLeft":
          navigateImage("prev");
          break;
        case "ArrowRight":
          navigateImage("next");
          break;
        case "+":
        case "=":
          handleZoom(0.2);
          break;
        case "-":
          handleZoom(-0.2);
          break;
        case "0":
          resetZoom();
          break;
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [selectedImage]);

  // Prevent body scroll when lightbox is open
  useEffect(() => {
    if (selectedImage !== null) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [selectedImage]);

  return (
    <Layout>
      {/* Hero Section */}
      <PageHero
        title="GALLERY"
        subtitle="Moments That Define Our School Life - Glimpses of Learning, Joy & Growth"
        description=""
        backgroundImage={heroGallery}
        overlayOpacity="light"
      />

      {/* Gallery Section */}
      <section className="py-16 md:py-24 relative overflow-hidden">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[300px] bg-secondary/5 rounded-full blur-3xl pointer-events-none" />
        <div className="container relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-14 md:mb-20"
          >
            <span className="inline-flex items-center px-5 py-2 rounded-full text-sm font-semibold mb-5 bg-primary/10 text-primary border border-primary/20 shadow-sm tracking-wide">
              Photos
            </span>
            <h2 className="font-heading text-3xl md:text-4xl lg:text-5xl font-bold text-maroon mb-5 tracking-tight leading-tight max-w-4xl mx-auto">
              School Gallery
            </h2>
            <div className="w-16 h-1 mx-auto mb-5 bg-gradient-to-r from-transparent via-primary to-transparent rounded-full" />
            <p className="text-muted-foreground max-w-2xl mx-auto text-lg md:text-xl leading-relaxed">
              Moments that define our school life
            </p>
          </motion.div>
          {/* Category Filter */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="mb-12"
          >
            <div className="flex flex-wrap gap-3 justify-center">
              {galleryCategories.map((category) => (
                <button
                  key={category.value}
                  onClick={() => setSelectedCategory(category.value)}
                  className={`px-6 py-2.5 rounded-full text-sm font-semibold transition-all duration-300 ${
                    selectedCategory === category.value
                      ? "bg-maroon text-white shadow-lg scale-105"
                      : "bg-muted text-muted-foreground hover:bg-muted/80"
                  }`}
                >
                  {category.name} ({category.nameGuj})
                </button>
              ))}
            </div>
          </motion.div>

          {/* Image Grid */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6 }}
            className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4"
          >
            {filteredImages.map((image, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.03 }}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="group relative overflow-hidden rounded-xl shadow-card cursor-pointer"
                onClick={() => openLightbox(index)}
              >
                <div className="aspect-square overflow-hidden">
                  <motion.img
                    src={image.src}
                    alt={`School Image ${index + 1}`}
                    className="w-full h-full object-cover"
                    loading="lazy"
                    whileHover={{ scale: 1.1 }}
                    transition={{ duration: 0.5, ease: "easeOut" }}
                  />
                </div>
                <motion.div
                  className="absolute inset-0 bg-gradient-to-t from-maroon/80 via-transparent to-transparent"
                  initial={{ opacity: 0 }}
                  whileHover={{ opacity: 1 }}
                  transition={{ duration: 0.3 }}
                />
                <motion.div
                  className="absolute inset-0 flex items-center justify-center"
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileHover={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.3 }}
                >
                  <div className="w-12 h-12 rounded-full bg-white/20 backdrop-blur-md flex items-center justify-center shadow-lg">
                    <Images className="w-6 h-6 text-white" />
                  </div>
                </motion.div>
              </motion.div>
            ))}
          </motion.div>

          {/* Image Count */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="text-center mt-12"
          >
            <p className="text-muted-foreground">
              Showing {filteredImages.length} photos
            </p>
          </motion.div>
        </div>
      </section>

      {/* Lightbox Modal */}
      <AnimatePresence mode="wait">
        {selectedImage !== null && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-50 bg-black/98 backdrop-blur-sm flex items-center justify-center p-4"
            onClick={closeLightbox}
            onMouseMove={handleMouseMove}
            onMouseUp={handleMouseUp}
            onMouseLeave={handleMouseUp}
          >
            <motion.div
              ref={containerRef}
              initial={{ scale: 0.9, opacity: 0, y: 20 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.9, opacity: 0, y: 20 }}
              transition={{ 
                type: "spring",
                stiffness: 300,
                damping: 30,
                duration: 0.4
              }}
              className="relative max-w-7xl max-h-[95vh] w-full h-full flex items-center justify-center"
              onClick={(e) => {
                if (zoom === 1) {
                  e.stopPropagation();
                }
              }}
            >
              {/* Close Button */}
              <motion.button
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.2 }}
                onClick={closeLightbox}
                className="absolute top-4 right-4 md:top-6 md:right-6 w-12 h-12 rounded-full bg-white/15 backdrop-blur-md border border-white/30 flex items-center justify-center text-white hover:bg-white/25 hover:scale-110 transition-all duration-300 z-20 shadow-lg"
                aria-label="Close"
              >
                <X className="w-6 h-6" />
              </motion.button>

              {/* Zoom Controls */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
                className="absolute top-4 left-4 md:top-6 md:left-6 flex gap-2 z-20"
              >
                <button
                  onClick={(e) => {
                    e.stopPropagation();
                    handleZoom(0.3);
                  }}
                  disabled={zoom >= 3}
                  className="w-10 h-10 rounded-full bg-white/15 backdrop-blur-md border border-white/30 flex items-center justify-center text-white hover:bg-white/25 hover:scale-110 transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed shadow-lg"
                  aria-label="Zoom In"
                >
                  <ZoomIn className="w-5 h-5" />
                </button>
                <button
                  onClick={(e) => {
                    e.stopPropagation();
                    handleZoom(-0.3);
                  }}
                  disabled={zoom <= 1}
                  className="w-10 h-10 rounded-full bg-white/15 backdrop-blur-md border border-white/30 flex items-center justify-center text-white hover:bg-white/25 hover:scale-110 transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed shadow-lg"
                  aria-label="Zoom Out"
                >
                  <ZoomOut className="w-5 h-5" />
                </button>
                {zoom > 1 && (
                  <button
                    onClick={(e) => {
                      e.stopPropagation();
                      resetZoom();
                    }}
                    className="w-10 h-10 rounded-full bg-white/15 backdrop-blur-md border border-white/30 flex items-center justify-center text-white hover:bg-white/25 hover:scale-110 transition-all duration-300 shadow-lg"
                    aria-label="Reset Zoom"
                  >
                    <RotateCw className="w-5 h-5" />
                  </button>
                )}
              </motion.div>

              {/* Navigation Buttons */}
              <motion.button
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.2 }}
                onClick={(e) => {
                  e.stopPropagation();
                  navigateImage("prev");
                }}
                className="absolute left-2 md:left-4 top-1/2 -translate-y-1/2 w-12 h-12 md:w-14 md:h-14 rounded-full bg-white/15 backdrop-blur-md border border-white/30 flex items-center justify-center text-white hover:bg-white/25 hover:scale-110 transition-all duration-300 z-20 shadow-lg"
                aria-label="Previous Image"
              >
                <ChevronLeft className="w-6 h-6 md:w-7 md:h-7" />
              </motion.button>
              <motion.button
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.2 }}
                onClick={(e) => {
                  e.stopPropagation();
                  navigateImage("next");
                }}
                className="absolute right-2 md:right-4 top-1/2 -translate-y-1/2 w-12 h-12 md:w-14 md:h-14 rounded-full bg-white/15 backdrop-blur-md border border-white/30 flex items-center justify-center text-white hover:bg-white/25 hover:scale-110 transition-all duration-300 z-20 shadow-lg"
                aria-label="Next Image"
              >
                <ChevronRight className="w-6 h-6 md:w-7 md:h-7" />
              </motion.button>

              {/* Image Container */}
              <div
                className="relative w-full h-full flex items-center justify-center overflow-hidden"
                onMouseDown={handleMouseDown}
                onTouchStart={handleTouchStart}
                onTouchMove={handleTouchMove}
                onTouchEnd={handleTouchEnd}
              >
                {!imageLoaded && (
                  <div className="absolute inset-0 flex items-center justify-center">
                    <motion.div
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      className="w-16 h-16 border-4 border-white/20 border-t-white rounded-full animate-spin"
                    />
                  </div>
                )}
                <AnimatePresence mode="wait">
                  <motion.img
                    key={selectedImage}
                    ref={imageRef}
                    src={filteredImages[selectedImage].src}
                    alt={`School Image ${selectedImage + 1}`}
                    className={`max-w-full max-h-[95vh] object-contain rounded-lg select-none ${
                      zoom > 1 ? "cursor-grab active:cursor-grabbing" : "cursor-default"
                    }`}
                    style={{
                      transform: `scale(${zoom}) translate(${position.x / zoom}px, ${position.y / zoom}px)`,
                      transition: isDragging ? "none" : "transform 0.3s ease-out",
                    }}
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: imageLoaded ? 1 : 0, scale: imageLoaded ? 1 : 0.95 }}
                    exit={{ opacity: 0, scale: 0.95 }}
                    transition={{ duration: 0.3 }}
                    onLoad={() => setImageLoaded(true)}
                    draggable={false}
                  />
                </AnimatePresence>
              </div>

              {/* Image Counter & Info */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 }}
                className="absolute bottom-4 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 z-20"
              >
                <div className="px-5 py-2.5 bg-white/15 backdrop-blur-md border border-white/30 rounded-full text-white text-sm font-medium shadow-lg">
                  {selectedImage + 1} / {filteredImages.length}
                </div>
                <div className="text-white/70 text-xs text-center px-4">
                  <p>Use arrow keys to navigate • + / - to zoom • ESC to close</p>
                  {zoom > 1 && <p className="mt-1">Click and drag to pan</p>}
                </div>
              </motion.div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </Layout>
  );
};

export default Gallery;
