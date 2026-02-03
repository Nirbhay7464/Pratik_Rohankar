"use client";

import { useState, useRef } from "react";
import Image from "next/image";
import { motion, AnimatePresence, useScroll, useTransform } from "framer-motion";
import { MoveRight, X, Heart, Camera, PartyPopper, Baby, CalendarDays } from "lucide-react";
import Link from "next/link";
import ImageModal from "@/components/ImageModal";

const categories = [
  { label: "All", value: "all" },
  { label: "Wedding", value: "wedding" },
  { label: "Pre Wedding", value: "prewedding" },
  { label: "Engagement", value: "engagement" },
  { label: "Maternity", value: "maternity" },
  { label: "Event", value: "event" },
];

interface GalleryClientProps {
  initialImages: any[];
  initialCategory?: string;
  hideTabs?: boolean;
}

export default function GalleryClient({
  initialImages,
  initialCategory = "all",
  hideTabs = false
}: GalleryClientProps) {
  const [activeCategory, setActiveCategory] = useState(initialCategory);
  const [selectedImage, setSelectedImage] = useState<{ src: string; alt: string; video?: string } | null>(null);
  const [isVaultOpen, setIsVaultOpen] = useState(false);
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });
  const y1 = useTransform(scrollYProgress, [0, 1], [0, -100]);
  const y2 = useTransform(scrollYProgress, [0, 1], [0, 100]);
  const filteredImages = activeCategory === "all"
    ? initialImages
    : initialImages.filter((img) => img.category?.toLowerCase() === activeCategory.toLowerCase());
  const portfolioItems = [
    { name: "Wedding", icon: <Heart size={18} />, href: "/portfolio/wedding" },
    { name: "Pre-Wedding", icon: <Camera size={18} />, href: "/portfolio/prewedding" },
    { name: "Engagement", icon: <PartyPopper size={18} />, href: "/portfolio/engagement" },
    { name: "Maternity", icon: <Baby size={18} />, href: "/portfolio/maternity" },
    { name: "Events", icon: <CalendarDays size={18} />, href: "/portfolio/event" },
  ];
  return (
    <section ref={containerRef} id="portfolio" className={`relative bg-black overflow-hidden ${hideTabs ? 'pt-0' : 'pt-20 md:pt-32'}`}>
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        {/* Header Section - Hidden if hideTabs is true */}
        {!hideTabs && (
          <>
            <div className="mb-12 md:mb-24 flex flex-col md:flex-row md:items-end justify-between gap-6 md:gap-10">
              <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 1 }} viewport={{ once: true }}>
                <span className="text-[#D4AF37] text-[9px] md:text-[10px] uppercase tracking-[0.6em] font-bold mb-4 block">Moments</span>
                <h2 className="text-4xl md:text-7xl font-sans font-black uppercase text-white leading-[0.9] tracking-tighter">
                  WORKS <br />
                  <span className="font-serif italic font-light lowercase text-white/30">curated.</span>
                </h2>
              </motion.div>
              <p className="text-gray-500 max-w-xs text-xs md:text-sm font-light leading-relaxed border-l border-white/10 pl-6">
                Curated memories from our private collection, updated directly from the studio.
              </p>
            </div>
            {/* Category Scroller */}
            <div className="relative mb-12 md:mb-16">
              <div className="flex overflow-x-auto no-scrollbar gap-2 p-1.5 bg-white/5 backdrop-blur-3xl rounded-2xl w-full md:w-fit border border-white/10">
                {categories.map((cat) => (
                  <button
                    key={cat.value}
                    onClick={() => setActiveCategory(cat.value)}
                    className={`relative flex-shrink-0 px-5 py-2.5 rounded-xl transition-all duration-500 ${activeCategory === cat.value ? "text-black" : "text-white/50"}`}
                  >
                    <span className="relative z-10 text-[8px] md:text-[9px] font-black uppercase tracking-[0.3em]">{cat.label}</span>
                    {activeCategory === cat.value && (
                      <motion.div layoutId="activeTab" className="absolute inset-0 bg-[#D4AF37] rounded-xl" transition={{ type: "spring", bounce: 0.2, duration: 0.6 }} />
                    )}
                  </button>
                ))}
              </div>
            </div>
          </>
        )}
        {/* Staggered Masonry Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {[0, 1, 2].map((colIndex) => (
            <motion.div
              key={colIndex}
              style={{ y: typeof window !== 'undefined' && window.innerWidth > 768 ? (colIndex === 1 ? y1 : colIndex === 2 ? y2 : 0) : 0 }}
              className="flex flex-col gap-6 md:gap-8"
            >
              <AnimatePresence mode="popLayout">
                {filteredImages.filter((_, i) => i % 3 === colIndex).map((img) => (
                  <motion.div
                    key={img.id}
                    layout
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    className="group relative"
                  >
                    <div
                      onClick={() => setSelectedImage({ src: img.src, alt: img.alt, video: img.videoUrl })}
                      className="relative aspect-[4/5] overflow-hidden rounded-[1.2rem] md:rounded-[1.5rem] bg-[#0d0d0d] border border-white/5 cursor-pointer"
                    >
                      <Image
                        src={img.src}
                        alt={img.alt}
                        fill
                        className="object-cover transition-transform duration-[2s] group-hover:scale-110"
                        sizes="(max-width: 768px) 100vw, 33vw"
                        priority
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent opacity-80 md:opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                      <div className="absolute bottom-0 left-0 w-full p-6 md:p-8 md:translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                        <p className="text-[#D4AF37] text-[8px] font-black uppercase tracking-[0.5em] mb-2">[{img.category}]</p>
                        <h3 className="text-white text-xl md:text-2xl font-serif italic">{img.alt}</h3>
                        <div className="mt-4 flex items-center gap-3 text-white/50 group-hover:text-white transition-colors">
                          <span className="text-[8px] uppercase tracking-[0.2em] font-bold">
                            {img.videoUrl ? "Watch Film" : "View Portrait"}
                          </span>
                          <MoveRight size={14} />
                        </div>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Footer CTA */}
      {!hideTabs && (
        <div className="relative py-20 border-t border-white/5 overflow-hidden bg-gradient-to-b from-transparent to-white/[0.01] mt-20">
          <motion.div
            animate={{ x: [0, -1200] }}
            transition={{ repeat: Infinity, duration: 40, ease: "linear" }}
            className="flex gap-16 text-white/[0.02] font-black text-6xl md:text-[8rem] uppercase whitespace-nowrap select-none"
          >
            <span>Visual Excellence • Cinematic Legacy • Visual Excellence • Cinematic Legacy •</span>
          </motion.div>
          <div className="absolute inset-0 flex items-center justify-center">
            <motion.button
              onClick={() => setIsVaultOpen(true)}
              whileHover={{ scale: 1.02, y: -2 }}
              whileTap={{ scale: 0.98 }}
              className="group relative bg-white text-black px-8 py-3.5 rounded-full overflow-hidden transition-all duration-500 shadow-xl"
            >
              <div className="absolute inset-0 bg-[#D4AF37] translate-y-[101%] group-hover:translate-y-0 transition-transform duration-500 ease-out" />
              <div className="relative z-10 flex items-center gap-4">
                <span className="text-[10px] font-black uppercase tracking-[0.3em]">
                  Access Private Vault
                </span>
                <MoveRight size={14} className="group-hover:translate-x-1 transition-transform" />
              </div>
            </motion.button>
          </div>
        </div>
      )}
      {/* Vault Modal */}
      <AnimatePresence>
        {isVaultOpen && (
          <div className="fixed inset-0 z-[150] flex items-center justify-center p-6">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsVaultOpen(false)}
              className="absolute inset-0 bg-black/95 backdrop-blur-xl"
            />
            <motion.div
              initial={{ opacity: 0, scale: 0.98, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.98, y: 20 }}
              className="relative w-full max-w-[400px] bg-[#080808] border border-white/[0.05] rounded-[2rem] p-10 shadow-2xl"
            >

              <button onClick={() => setIsVaultOpen(false)} className="absolute top-8 right-8 text-white/20 hover:text-white">
                <X size={20} />
              </button>
              <div className="space-y-10">
                <div className="space-y-2">
                  <p className="text-[9px] uppercase tracking-[0.5em] text-[#D4AF37] font-bold">Archive</p>
                  <h4 className="text-3xl font-serif italic text-white">The Collections</h4>
                </div>
                <nav className="flex flex-col gap-2">
                  {portfolioItems.map((item) => (
                    <Link
                      key={item.name}
                      href={item.href}
                      onClick={() => setIsVaultOpen(false)}
                      className="flex items-center gap-5 p-4 rounded-2xl text-white/40 hover:text-white hover:bg-white/[0.03] transition-all group border border-transparent hover:border-white/5"
                    >
                      <span className="w-10 h-10 flex items-center justify-center rounded-lg bg-white/5 group-hover:bg-[#D4AF37] group-hover:text-black transition-colors duration-500">
                        {item.icon}
                      </span>
                      <span className="text-xs font-bold uppercase tracking-[0.2em]">{item.name}</span>
                    </Link>
                  ))}
                </nav>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
      {selectedImage && (
        <ImageModal
          src={selectedImage.src}
          alt={selectedImage.alt}
          videoUrl={selectedImage.video}
          onClose={() => setSelectedImage(null)}
        />
      )}
    </section>
  );
}