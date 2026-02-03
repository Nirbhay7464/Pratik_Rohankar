"use client";

import Image from "next/image";
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import { Camera, MapPin, Award, Heart } from "lucide-react";

const About = () => {
  // 3D Tilt Logic
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const mouseXSpring = useSpring(x);
  const mouseYSpring = useSpring(y);

  const rotateX = useTransform(mouseYSpring, [-0.5, 0.5], ["10deg", "-10deg"]);
  const rotateY = useTransform(mouseXSpring, [-0.5, 0.5], ["-10deg", "10deg"]);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const width = rect.width;
    const height = rect.height;
    const mouseX = e.clientX - rect.left;
    const mouseY = e.clientY - rect.top;
    const xPct = mouseX / width - 0.5;
    const yPct = mouseY / height - 0.5;
    x.set(xPct);
    y.set(yPct);
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
  };

  return (
    <section id="about" className="relative py-24 md:py-32 bg-[#111] overflow-hidden">

      {/* Subtle Bottom Gradient Merge */}
      <div className="absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-black to-transparent z-10" />

      <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-16 items-center relative z-20">

        {/* Left Side: 3D Image Card */}
        <motion.div
          onMouseMove={handleMouseMove}
          onMouseLeave={handleMouseLeave}
          style={{ rotateX, rotateY, transformStyle: "preserve-3d" }}
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="relative group cursor-pointer"
        >
          {/* Dotted Border Accent */}
          <div className="absolute -inset-6 border border-dashed border-white/20 rounded-3xl pointer-events-none group-hover:border-[#D4AF37]/40 transition-colors" />

          {/* Main Polaroid Card */}
          <div className="relative bg-[#1a1a1a] p-4 pb-12 rounded-2xl shadow-2xl overflow-hidden border border-white/5">
            <div className="relative aspect-[4/5] rounded-xl overflow-hidden mb-6">
              <Image
                src="https://images.unsplash.com/photo-1554048612-b6a482bc67e5"
                alt="Pratik Rohankar"
                fill
                className="object-cover group-hover:scale-105 transition-transform duration-1000"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-60" />
            </div>
            <div className="px-2">
              <h3 className="text-white font-serif italic text-xl mb-1">Pratik Rohankar</h3>
              <p className="text-[#D4AF37] font-mono text-[9px] uppercase tracking-[0.3em]">
                Founder & Lead Photographer
              </p>
            </div>
          </div>

          {/* Floating Badge - 10+ Years Experience */}
          <motion.div 
    style={{ translateZ: "50px" }}
    className="absolute -bottom-8 -left-6 bg-[#D4AF37] text-black w-20 h-20 rounded-full flex flex-col items-center justify-center shadow-2xl border-4 border-[#111] z-20"
  >
    <span className="text-xl font-black leading-none mb-0.5">10+</span>
    <span className="text-[8px] font-bold uppercase tracking-widest text-center leading-tight">
      Years <br/> Exp.
    </span>
  </motion.div>
        </motion.div>

        {/* Right Side: Content */}
        <div className="relative">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <span className="bg-white/5 border border-white/10 px-4 py-1.5 rounded-full text-[#D4AF37] text-xs font-bold tracking-widest uppercase mb-6 inline-block">
              About the Founder
            </span>

            <h2 className="text-5xl md:text-7xl font-serif italic text-white mb-8 leading-[1.1]">
              Hello, I am <br />
              <span className="not-italic font-sans font-black uppercase text-transparent bg-clip-text bg-gradient-to-r from-white via-white/80 to-white/20">
                Pratik Rohankar.
              </span>
            </h2>

            <div className="space-y-6 text-gray-400 text-lg font-light leading-relaxed max-w-xl mb-10">
              <p>
                A wedding photographer based in <span className="text-white border-b border-[#D4AF37]">Amravati</span>,
                dedicated to the fine art of visual storytelling.
              </p>

              <p className="text-base italic">
                "Pratik Rohankar Photography is more than just a service; it's a commitment to preserving the raw emotions of your special day. We travel all over India to capture the unique chemistry of every couple."
              </p>

              <p className="text-base">
                We believe in the philosophy that <span className="text-white font-medium">"Every Wedding is Beautiful"</span>.
                Our team of photographers and videographers is passionate about transforming your wedding memories into creative, timeless archives.
              </p>
            </div>

            {/* Feature Bar */}
            <div className="flex flex-col sm:flex-row gap-8 py-8 border-y border-white/10 mb-10">
              <div className="flex items-center gap-4">
                <div className="p-3 bg-white/5 rounded-xl border border-white/10 text-[#D4AF37]">
                  <Heart size={24} />
                </div>
                <div>
                  <h4 className="text-white text-sm font-bold uppercase tracking-widest">Passion</h4>
                  <p className="text-gray-500 text-[10px] uppercase">Driven by Emotion</p>
                </div>
              </div>

              <div className="flex items-center gap-4">
                <div className="p-3 bg-white/5 rounded-xl border border-white/10 text-[#D4AF37]">
                  <MapPin size={24} />
                </div>
                <div>
                  <h4 className="text-white text-sm font-bold uppercase tracking-widest">India wide</h4>
                  <p className="text-gray-500 text-[10px] uppercase">Available for Travel</p>
                </div>
              </div>
            </div>

            {/* CTA Buttons */}

          </motion.div>
        </div>
      </div>

      {/* --- PREMIUM BOTTOM DIVIDER --- */}
      <div className="absolute bottom-0 left-0 w-full overflow-hidden leading-[0] z-20">
        <svg
          className="relative block w-full h-[40px] md:h-[80px]"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1200 120"
          preserveAspectRatio="none"
        >
          <path
            d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V120H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z"
            className="fill-black"
          ></path>
        </svg>
      </div>
    </section>
  );
};

export default About;