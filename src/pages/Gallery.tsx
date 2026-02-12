import { useState, useEffect, useRef } from "react";
import { Layout } from "@/components/layout/Layout";
import { Seo } from "@/components/seo/Seo";
import { motion, AnimatePresence } from "framer-motion";
import { PageHero } from "@/components/ui/PageHero";
import { Images, X, ChevronLeft, ChevronRight, ZoomIn, ZoomOut, RotateCw } from "lucide-react";
import {
  heroGallery,
  img1, img2, img3, img4, img5, img6, img7, img8, img9, img10,
  img11, img12, img13, img14, img15, img16, img17, img18, img19, img20,
  img21, img22, img23, img24, img25, img26, img27, img28, img29, img30,
  img31, img32, img33, img34, img35, img36, img37, img38, img39, img40,
  img41, img42, img43, img44, img45, img46, img47, img48, img49, img50,
  img51, img52, img53, img54, img55,
  img56, img57, img58, img59, img60, img61, img63, img64, img65,
  img66, img67, img68, img69, img70, img71, img72, img73, img74, img75,
  img76, img77, img78, img79, img80, img81, img82, img83, img84, img85,
  img86, img87, img88, img89, img90, img91, img92, img93, img94,
  img95, img96, img97, img98, img99, img100, img101, img102, img103, img104,
  img105, img106, img107, img108, img109, img110, img111, img112, img113, img114,
  img115, img116, img117, img118, img119, img120, img121, img122, img123, img124,
  img125, img126, img127, img128, img129, img130, img131, img132,
  img133, img134, img135, img136,
  img137, img138, img139, img140, img141, img142, img143,
} from "@/lib/cloudinary-images";

// Image categories - Update categories based on actual image content
// Categories: "classrooms", "activities", "celebrations", "events", "campus"
const allImages = [
  

  // Celebrations - Festivals, special days, cultural celebrations
  
  { src: img24, category: "celebrations" }, // IMG_20260101_104710
  
  // Events - Annual day, sports day, science fair, special programs
  { src: img25, category: "events" },      // IMG_20260102_115833
  { src: img26, category: "events" },       // IMG_20260105_104054
  { src: img27, category: "events" },       // IMG_20260121_104925
  { src: img28, category: "events" },       // IMG_20260121_110052
  { src: img29, category: "events" },       // IMG_20260121_110056
  { src: img30, category: "events" },       // IMG_20260121_112721
        // IMG_20260121_113304
  { src: img32, category: "events" },       // IMG_20260121_113321
  
  // Campus - School building, playground, infrastructure, outdoor areas
  
  { src: img41, category: "campus" },      // IMG_2517
  { src: img42, category: "campus" },      // IMG_2562
  { src: img43, category: "campus" },      // IMG_2570
  { src: img44, category: "campus" },      // IMG_2571
  { src: img45, category: "campus" },      // IMG_2575
  { src: img46, category: "campus" },      // IMG_2582
  { src: img47, category: "campus" },      // IMG_2583
  { src: img48, category: "campus" },      // IMG_3668
  { src: img49, category: "campus" },      // IMG_3674
  { src: img50, category: "campus" },      // IMG_3691
  { src: img51, category: "campus" },      // IMG_3693
  { src: img52, category: "campus" },      // IMG_3697
  { src: img53, category: "campus" },      // IMG_3703
  { src: img54, category: "campus" },      // IMG_3704
  { src: img55, category: "campus" },      // IMG_3712
  
  // New Activities images from public/Activities
  { src: img95, category: "activities" },
  { src: img96, category: "activities" },
  { src: img97, category: "activities" },
  { src: img98, category: "activities" },
  { src: img99, category: "activities" },
  { src: img100, category: "activities" },
  { src: img101, category: "activities" },
  { src: img102, category: "activities" },
  { src: img103, category: "activities" },
  { src: img104, category: "activities" },
  { src: img105, category: "activities" },
  { src: img106, category: "activities" },
  { src: img107, category: "activities" },
  { src: img108, category: "activities" },
  { src: img109, category: "activities" },
  { src: img110, category: "activities" },
  { src: img111, category: "activities" },
  { src: img112, category: "activities" },
  { src: img113, category: "activities" },
 
  { src: img115, category: "activities" },
  { src: img116, category: "activities" },
  { src: img117, category: "activities" },
  { src: img118, category: "activities" },
  { src: img119, category: "activities" },
  { src: img120, category: "activities" },
  { src: img121, category: "activities" },
  { src: img122, category: "activities" },
  { src: img123, category: "activities" },
  { src: img124, category: "activities" },
  { src: img125, category: "activities" },
  { src: img126, category: "activities" },
  
  { src: img129, category: "activities" },
  { src: img130, category: "activities" },
  { src: img131, category: "activities" },
  { src: img132, category: "activities" },
  
  // Celebrations images from public/Celebrations
  { src: img133, category: "celebrations" },
  { src: img134, category: "celebrations" },
  { src: img135, category: "celebrations" },
  { src: img136, category: "celebrations" },
  
  // Classrooms images from public/Classrooms
  { src: img137, category: "classrooms" },
  { src: img138, category: "classrooms" },
  { src: img139, category: "classrooms" },
  { src: img140, category: "classrooms" },
  { src: img141, category: "classrooms" },
  { src: img142, category: "classrooms" },
  { src: img143, category: "classrooms" },
];

const galleryCategories = [
  { name: "All", nameGuj: "બધા", value: "all" },
  { name: "Classrooms", nameGuj: "વર્ગખંડો", value: "classrooms" },
  { name: "Activities", nameGuj: "પ્રવૃત્તિઓ", value: "activities" },
  { name: "Celebrations", nameGuj: "ઉજવણી", value: "celebrations" },
  { name: "Events", nameGuj: "કાર્યક્રમો", value: "events" },
  { name: "Campus", nameGuj: "કેમ્પસ", value: "campus" },
];

const PHOTOS_PER_PAGE = 10;

const Gallery = () => {
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [currentPage, setCurrentPage] = useState(1);
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

  const totalPages = Math.ceil(filteredImages.length / PHOTOS_PER_PAGE) || 1;
  const startIndex = (currentPage - 1) * PHOTOS_PER_PAGE;
  const paginatedImages = filteredImages.slice(startIndex, startIndex + PHOTOS_PER_PAGE);

  const goToPage = (page: number) => {
    setCurrentPage(Math.max(1, Math.min(page, totalPages)));
  };

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
      <Seo
        title="Gallery"
        description="Photo gallery of Siddharth's Miracles School — campus, activities, events, and student life. Gandhinagar."
        path="/gallery"
        breadcrumbLabels={["Home", "Gallery"]}
      />
      {/* Hero Section */}
      <PageHero
        title="GALLERY"
        subtitle="Moments That Define Our School Life - Glimpses of Learning, Joy & Growth"
        description=""
        backgroundImage="/aca.JPG"
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
                  onClick={() => { setSelectedCategory(category.value); setCurrentPage(1); }}
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
            {paginatedImages.map((image, index) => {
              const globalIndex = startIndex + index;
              return (
              <motion.div
                key={globalIndex}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.03 }}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="group relative overflow-hidden rounded-xl shadow-card cursor-pointer"
                onClick={() => openLightbox(globalIndex)}
              >
                <div className="aspect-square overflow-hidden">
                  <motion.img
                    src={image.src}
                    alt={`School Image ${globalIndex + 1}`}
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
            );
            })}
          </motion.div>

          {/* Pagination */}
          {totalPages > 1 && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="flex flex-wrap items-center justify-center gap-3 mt-10"
            >
              <button
                type="button"
                onClick={() => goToPage(currentPage - 1)}
                disabled={currentPage === 1}
                className="inline-flex items-center gap-2 px-4 py-2 rounded-xl text-sm font-semibold bg-muted text-muted-foreground hover:bg-muted/80 disabled:opacity-50 disabled:pointer-events-none transition-all"
                aria-label="Previous page"
              >
                <ChevronLeft className="w-4 h-4" /> Previous
              </button>
              <span className="px-4 py-2 text-sm font-medium text-muted-foreground">
                Page {currentPage} of {totalPages}
              </span>
              <button
                type="button"
                onClick={() => goToPage(currentPage + 1)}
                disabled={currentPage === totalPages}
                className="inline-flex items-center gap-2 px-4 py-2 rounded-xl text-sm font-semibold bg-muted text-muted-foreground hover:bg-muted/80 disabled:opacity-50 disabled:pointer-events-none transition-all"
                aria-label="Next page"
              >
                Next <ChevronRight className="w-4 h-4" />
              </button>
            </motion.div>
          )}

          {/* Image Count */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="text-center mt-6"
          >
            <p className="text-muted-foreground">
              Showing {filteredImages.length === 0 ? 0 : startIndex + 1}–{Math.min(startIndex + PHOTOS_PER_PAGE, filteredImages.length)} of {filteredImages.length} photos
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
