"use client";

import { motion, useScroll, useTransform, AnimatePresence } from "framer-motion";
import { useRef, useState, useEffect } from "react";

const images = [
  "https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e",
  "https://images.unsplash.com/photo-1519741497674-611481863552",
  "https://images.unsplash.com/photo-1511285560929-80b456fea0bc",
  "https://images.unsplash.com/photo-1492691523567-627445d6a489",
];

const Hero = () => {
  const containerRef = useRef(null);
  const [index, setIndex] = useState(0);

  // Auto-slide logic
  useEffect(() => {
    const timer = setInterval(() => {
      setIndex((prev) => (prev + 1) % images.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"],
  });

  const backgroundScale = useTransform(scrollYProgress, [0, 1], [1, 1.2]);
  const backgroundOpacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);

  return (
    <section
      ref={containerRef}
      className="relative h-[100vh] w-full flex items-center justify-center overflow-hidden bg-black"
    >

      {/* Background Slideshow */}
      <motion.div
        style={{ scale: backgroundScale, opacity: backgroundOpacity }}
        className="absolute inset-0 z-0"
      >
        <AnimatePresence initial={false} mode="popLayout">
          <motion.div
            key={index}
            initial={{ opacity: 0, scale: 1.1 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.95 }}
            transition={{
              opacity: { duration: 1.8, ease: [0.4, 0, 0.2, 1] },
              scale: { duration: 2.5, ease: [0.4, 0, 0.2, 1] }
            }}
            className="absolute inset-0 bg-cover bg-center origin-center"
            style={{ backgroundImage: `url(${images[index]})` }}
          />
        </AnimatePresence>
      </motion.div>

      {/* Layered Overlays */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/20 to-black z-[1]" />

      {/* Content Container */}
      <div className="relative z-10 text-center px-6 max-w-5xl">
        <motion.span
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.5 }}
          className="block text-[10px] md:text-xs uppercase text-[#D4AF37] mb-6 tracking-[0.5em] font-bold"
        >
          Pratik Rohankar Photography • All Over India
        </motion.span>

        <h1 className="text-5xl md:text-8xl font-serif italic text-white leading-[1.1] mb-8">
          <motion.span
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.8, ease: [0.22, 1, 0.36, 1] }}
            className="inline-block"
          >
            Capturing
          </motion.span>{" "}
          <motion.span
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 1.0, ease: [0.22, 1, 0.36, 1] }}
            className="inline-block font-sans not-italic font-black text-transparent bg-clip-text bg-gradient-to-b from-white to-white/40"
          >
            The Art
          </motion.span> <br />
          <motion.span
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 1.2, ease: [0.22, 1, 0.36, 1] }}
            className="inline-block"
          >
            of Moment.
          </motion.span>
        </h1>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1.5, delay: 1.5 }}
          className="text-gray-400 text-sm md:text-base max-w-lg mx-auto mb-12 font-light tracking-wide leading-relaxed"
        >
          Cinematic photography & films crafted with emotion, elegance, and
          timeless storytelling.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 1.8 }}
          className="flex flex-col sm:flex-row justify-center items-center gap-6"
        >
          {/* Fluent Book Now Button */}
          <a
            href="#contact"
            className="group relative px-12 py-4 bg-white rounded-full overflow-hidden transition-all duration-700 ease-[0.23,1,0.32,1] hover:shadow-[0_10px_40px_rgba(255,255,255,0.2)] active:scale-95"
          >
            {/* Liquid Background Layer */}
            <div className="absolute inset-0 z-0 bg-[#D4AF37] translate-y-full group-hover:translate-y-0 transition-transform duration-700 ease-[0.23,1,0.32,1]" />

            <span className="relative z-10 flex items-center justify-center gap-2 text-[10px] uppercase tracking-[0.25em] font-black text-black group-hover:text-white transition-colors duration-500">
              Book a Session
            </span>
          </a>

          {/* Refined Portfolio Button */}
          <a
            href="#portfolio"
            className="group relative px-12 py-4 border border-white/10 text-white text-[10px] uppercase tracking-[0.25em] font-bold rounded-full overflow-hidden transition-all duration-500 hover:border-white/40 active:scale-95"
          >
            <div className="absolute inset-0 bg-white/0 group-hover:bg-white/5 transition-colors duration-500" />
            <span className="relative z-10">View Portfolio</span>
          </a>
        </motion.div>
      </div>

      {/* --- PREMIUM BOTTOM DIVIDER --- */}
      <div className="absolute bottom-0 left-0 w-full overflow-hidden leading-[0] transform rotate-180 z-20">
        <svg
          className="relative block w-full h-[60px] md:h-[100px]"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1200 120"
          preserveAspectRatio="none"
        >
          <path
            d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z"
            className="fill-black"
          ></path>
        </svg>
      </div>
    </section>
  );
};

export default Hero;