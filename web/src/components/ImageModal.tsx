"use client";

import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { X } from "lucide-react";

interface ImageModalProps {
  src: string;
  alt: string;
  videoUrl?: string | null; // Added videoUrl prop
  onClose: () => void;
}

const ImageModal = ({ src, alt, videoUrl, onClose }: ImageModalProps) => {
  
  // Helper to convert standard YT/Vimeo links to Embed links
  const getEmbedUrl = (url: string) => {
    if (url.includes("youtube.com") || url.includes("youtu.be")) {
      const id = url.includes("v=") ? url.split("v=")[1].split("&")[0] : url.split("/").pop();
      return `https://www.youtube.com/embed/${id}?autoplay=1`;
    }
    if (url.includes("vimeo.com")) {
      const id = url.split("/").pop();
      return `https://player.vimeo.com/video/${id}?autoplay=1`;
    }
    return url;
  };

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="fixed inset-0 z-[200] bg-black/95 backdrop-blur-sm flex items-center justify-center px-4"
        onClick={onClose}
      >
        <button
          onClick={onClose}
          className="absolute top-8 right-8 text-white/50 hover:text-white transition-all z-[210]"
        >
          <X size={32} strokeWidth={1.5} />
        </button>

        <motion.div
          initial={{ scale: 0.95, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          exit={{ scale: 0.95, opacity: 0 }}
          className="relative max-w-6xl w-full aspect-video flex items-center justify-center"
          onClick={(e) => e.stopPropagation()}
        >
          {videoUrl ? (
            /* VIDEO PLAYER */
            <div className="w-full h-full rounded-2xl overflow-hidden bg-black shadow-2xl border border-white/5">
              <iframe
                src={getEmbedUrl(videoUrl)}
                className="w-full h-full"
                allow="autoplay; fullscreen"
                allowFullScreen
              />
            </div>
          ) : (
            /* IMAGE DISPLAY */
            <div className="relative w-full h-full">
               <Image
                src={src}
                alt={alt}
                width={1600}
                height={1000}
                className="w-full h-auto max-h-[85vh] object-contain rounded-lg"
                priority
              />
            </div>
          )}
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
};

export default ImageModal;