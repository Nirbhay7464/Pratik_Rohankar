"use client";

import { motion } from "framer-motion";
import {
  Camera,
  Heart,
  Users,
  Stars,
  Focus,
  CalendarDays // Added for Events
} from "lucide-react";

const services = [
  {
    title: "Wedding Photography",
    description: "Capturing grand celebrations and intimate whispers of your big day.",
    icon: <Camera className="w-5 h-5" />,
    index: "01",
  },
  {
    title: "Pre-Wedding",
    description: "Cinematic storytelling in breathtaking locations.",
    icon: <Heart className="w-5 h-5" />,
    index: "02",
  },
  {
    title: "Maternity",
    description: "Elegant portraits celebrating the miracle of life.",
    icon: <Stars className="w-5 h-5" />,
    index: "03",
  },
  {
    title: "Engagement",
    description: "The beautiful beginning of your forever story.",
    icon: <Users className="w-5 h-5" />,
    index: "04",
  },
  {
    title: "Cinematography",
    description: "High-end cinematic films that breathe life into memories.",
    icon: <Focus className="w-5 h-5" />,
    index: "05",
  },
  {
    title: "Events",
    description: "From corporate galas to private parties, we document it all.",
    icon: <CalendarDays className="w-5 h-5" />,
    index: "06",
  },
];

const Services = () => {
  return (
    <section id="services" className="relative bg-black py-24 md:py-32 overflow-hidden">

      {/* Background Decoration */}
      <div className="absolute top-0 left-10 text-[10rem] font-black text-white/[0.01] select-none pointer-events-none tracking-tighter">
        SERVICES
      </div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">

        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="max-w-2xl"
          >
            <span className="text-[#D4AF37] text-[10px] uppercase tracking-[0.5em] font-bold mb-4 block">
              Signature Services
            </span>
            <h2 className="text-4xl md:text-7xl font-serif italic text-white leading-none">
              Crafting <span className="not-italic font-sans font-black uppercase text-white/20">Moments.</span>
            </h2>
          </motion.div>

          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            className="text-gray-500 max-w-sm text-sm font-light leading-relaxed border-l border-white/10 pl-6"
          >
            We don't just take photos; we curate memories through a sophisticated lens of art and emotion.
          </motion.p>
        </div>

        {/* 3-Column Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{
                y: -8,
                backgroundColor: "rgba(255, 255, 255, 0.05)",
                borderColor: "rgba(212, 175, 55, 0.5)"
              }}
              className="group relative overflow-hidden rounded-[2rem] bg-white/[0.02] border border-white/5 p-8 min-h-[300px] flex flex-col justify-between transition-all duration-500"
            >
              {/* Vibrant Gold Glow on Hover */}
              <div className="absolute -inset-24 bg-[#D4AF37]/20 rounded-full blur-[80px] opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none" />

              <div className="relative z-10">
                <div className="flex justify-between items-start mb-12">
                  <div className="p-3 bg-white/5 rounded-xl border border-white/10 text-[#D4AF37] group-hover:bg-[#D4AF37] group-hover:text-black group-hover:shadow-[0_0_20px_rgba(212,175,55,0.4)] transition-all duration-500">
                    {service.icon}
                  </div>
                  <span className="font-mono text-xs text-white/10 group-hover:text-[#D4AF37] transition-colors">
                    [{service.index}]
                  </span>
                </div>

                <h3 className="text-2xl md:text-3xl font-bold text-white/90 group-hover:text-white mb-3 tracking-tight transition-colors">
                  {service.title}
                </h3>
                <p className="text-gray-500 group-hover:text-gray-300 font-light text-sm leading-relaxed transition-colors">
                  {service.description}
                </p>
              </div>

              {/* Enhanced Corner Accent */}
              <div className="absolute bottom-6 right-6 opacity-0 group-hover:opacity-100 translate-y-2 group-hover:translate-y-0 transition-all duration-500">
                <div className="w-8 h-8 border-b-2 border-r-2 border-[#D4AF37] rounded-br-lg" />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;