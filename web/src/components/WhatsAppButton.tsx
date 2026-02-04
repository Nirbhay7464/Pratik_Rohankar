"use client";

import { motion } from "framer-motion";
import { usePathname } from "next/navigation";

const WhatsAppButton = () => {
  const pathname = usePathname();
  const phoneNumber = "919850334318"; 

  // --- Option 2: Specialized Message Logic ---
  const getIntelligentMessage = () => {
    const hour = new Date().getHours();
    const greeting = hour < 12 ? "Good morning" : hour < 17 ? "Good afternoon" : "Good evening";

    // Specific messages based on the active page
    if (pathname.includes("wedding")) {
      return `${greeting} Pratik! I’ve been admiring your wedding portfolio. I'd love to discuss capturing our special day with your unique cinematic vision.`;
    }
    
    if (pathname.includes("prewedding")) {
      return `${greeting} Pratik! We love the chemistry you capture in your pre-wedding stories. Could we chat about planning a session with you?`;
    }

    if (pathname.includes("maternity")) {
      return `${greeting} Pratik! Your maternity sessions are so elegant. I’d love to discuss a shoot to capture this beautiful milestone.`;
    }

    if (pathname.includes("videos")) {
      return `${greeting} Pratik! I just watched your cinematic films and the storytelling is incredible. I’d love to discuss a video project with you.`;
    }

    if (pathname.includes("event")) {
      return `${greeting} Pratik! I'm reaching out regarding your event photography. I’d love to see how we can bring your cinematic style to our upcoming occasion.`;
    }

    if (pathname.includes("engagement")) {
      return `${greeting} Pratik! I’d love to discuss an engagement shoot. Your aesthetic is exactly what we’re looking for to document our story.`;
    }
    
    // Default premium message for Home/About/Contact
    return `${greeting} Pratik! I’ve been following your work and would love to discuss a cinematic session. Could we connect regarding your availability?`;
  };

  const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(getIntelligentMessage())}`;

  return (
    <motion.a
      href={whatsappUrl}
      target="_blank"
      rel="noopener noreferrer"
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{ opacity: 1, scale: 1 }}
      whileHover={{ y: -5 }}
      className="fixed bottom-8 right-8 z-[90] flex items-center gap-3 group"
    >
      {/* Elegant Label (Left of Icon) */}
      <span className="px-4 py-2 bg-black/60 backdrop-blur-xl border border-white/10 text-[10px] uppercase tracking-[0.4em] text-white/80 opacity-0 -translate-x-4 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-500 rounded-full pointer-events-none shadow-2xl font-medium">
        Contact
      </span>

      {/* Main Button Body - Styled like a Camera Lens */}
      <div className="relative w-14 h-14 flex items-center justify-center rounded-full bg-neutral-950 border border-white/20 shadow-[0_20px_40px_rgba(0,0,0,0.5)] overflow-hidden group">
        
        {/* Subtle Inner Glow */}
        <div className="absolute inset-0 bg-gradient-to-tr from-[#25D366]/10 to-transparent opacity-50" />
        
        {/* Animated Gold Ring */}
        <div className="absolute inset-0 border border-[#D4AF37]/30 rounded-full scale-90 group-hover:scale-100 transition-transform duration-700" />
        
        {/* Real WhatsApp Logo SVG */}
        <svg 
          width="28" 
          height="28" 
          viewBox="0 0 448 512" 
          className="relative z-10 text-white group-hover:text-[#25D366] transition-all duration-500 drop-shadow-md"
          fill="currentColor"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M380.9 97.1C339 55.1 283.2 32 223.9 32c-122.4 0-222 99.6-222 222 0 39.1 10.2 77.3 29.6 111L0 480l117.7-30.9c32.4 17.7 68.9 27 106.1 27h.1c122.3 0 224.1-99.6 224.1-222 0-59.3-25.2-115-67.1-157zm-157 341.6c-33.2 0-65.7-8.9-94-25.7l-6.7-4-69.8 18.3L72 359.2l-4.4-7c-18.5-29.4-28.2-63.3-28.2-98.2 0-101.7 82.8-184.5 184.6-184.5 49.3 0 95.6 19.2 130.4 54.1 34.8 34.9 56.2 81.2 56.1 130.5 0 101.8-84.9 184.6-186.6 184.6zm101.2-138.2c-5.5-2.8-32.8-16.2-37.9-18-5.1-1.9-8.8-2.8-12.5 2.8-3.7 5.6-14.3 18-17.6 21.8-3.2 3.7-6.5 4.2-12 1.4-5.5-2.8-23.2-8.5-44.2-27.1-16.4-14.6-27.4-32.7-30.6-38.2-3.2-5.6-.3-8.6 2.5-11.3 2.5-2.5 5.5-6.5 8.3-9.7 2.8-3.3 3.7-5.6 5.5-9.3 1.8-3.7.9-6.9-.5-9.7-1.4-2.8-12.5-30.1-17.1-41.2-4.5-10.8-9.1-9.3-12.5-9.5-3.2-.2-6.9-.2-10.6-.2-3.7 0-9.7 1.4-14.8 6.9-5.1 5.6-19.4 19-19.4 46.3 0 27.3 19.9 53.7 22.6 57.4 2.8 3.7 39.1 59.7 94.8 83.8 13.3 5.7 23.7 9.1 31.7 11.7 13.3 4.2 25.4 3.6 35 2.2 10.7-1.6 32.8-13.4 37.4-26.4 4.6-13 4.6-24.1 3.2-26.4-1.3-2.5-5-3.9-10.5-6.6z" />
        </svg>

        {/* Shine Animation Effect */}
        <motion.div
          animate={{ x: ['-100%', '200%'] }}
          transition={{ duration: 3, repeat: Infinity, ease: "linear", repeatDelay: 2 }}
          className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent skew-x-12"
        />
      </div>

      {/* Soft Glow Shadow */}
      <div className="absolute bottom-2 right-2 w-10 h-10 bg-[#25D366]/20 blur-2xl -z-10 group-hover:bg-[#25D366]/40 transition-colors duration-500" />
    </motion.a>
  );
};

export default WhatsAppButton;