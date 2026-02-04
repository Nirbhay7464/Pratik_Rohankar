"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Mail,
  Facebook,
  Instagram,
  Phone,
  MessageCircle,
  X,
  MenuSquare,
  MenuIcon
} from "lucide-react";

const SocialBar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const socialLinks = [
    {
      icon: <Instagram size={20} />,
      href: "https://www.instagram.com/pratikrohankarphotography?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==",
      color: "hover:text-[#E1306C]",
      label: "Instagram"
    },
    {
      icon: <Facebook size={20} />,
      href: "https://www.facebook.com/pratik.rohankar1?mibextid=LQQJ4d",
      color: "hover:text-[#1877F2]",
      label: "Facebook"
    },
    {
      icon: <MessageCircle size={20} />,
      href: "https://wa.me/919850334318",
      color: "hover:text-[#25D366]",
      label: "WhatsApp"
    },
    {
      icon: <Mail size={20} />,
      href: "mailto:pratik.rohankar9@gmail.com",
      color: "hover:text-[#EA4335]",
      label: "Email"
    },
    {
      icon: <Phone size={20} />,
      href: "tel:+919850334318",
      color: "hover:text-[#0EA5E9]",
      label: "Call"
    },
  ];

  return (
    /* Desktop: Centered on left (top-1/2)
       Mobile: Fixed bottom-left (bottom-8)
    */
    <div className="fixed 
      left-6 md:top-1/2 md:-translate-y-1/2 
      bottom-8 md:bottom-auto 
      z-[100] flex flex-col-reverse md:flex-col items-center gap-4"
    >

      {/* Desktop Top Decorative Line */}
      <div className="w-[1px] h-16 bg-gradient-to-t from-white/40 to-transparent hidden md:block" />

      <div className="relative flex flex-col-reverse md:flex-col items-center gap-3">

        {/* Mobile Toggle Button */}
        <motion.button
          onClick={() => setIsOpen(!isOpen)}
          whileTap={{ scale: 0.9 }}
          className="md:hidden w-12 h-12 rounded-full bg-black/60 backdrop-blur-xl border border-white/20 flex items-center justify-center text-white shadow-2xl transition-all"
        >
          {isOpen ? <X size={20} /> : <MenuIcon size={20} className="fill-white/10" />}
        </motion.button>

        {/* Icons List */}
        <AnimatePresence>
          {(isOpen || (typeof window !== 'undefined' && window.innerWidth > 768)) && (
            <motion.div initial={{ opacity: 0, y: 20, scale: 0.8 }} animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: 20, scale: 0.8 }}
              className={`flex flex-col gap-2 p-1.5 rounded-full border border-white/10 bg-black/40 backdrop-blur-2xl shadow-2xl ${!isOpen ? 'hidden md:flex' : 'flex'}`}>
              {socialLinks.map((link, index) => (
                <motion.a
                  key={index}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.15 }}
                  className={`p-3 text-white/50 transition-all duration-300 rounded-full relative group ${link.color}`}>
                  {link.icon}

                  {/* Desktop Tooltip */}
                  <span className="hidden md:block absolute left-14 opacity-0 group-hover:opacity-100 transition-all duration-300 bg-white text-black text-[10px] font-bold uppercase tracking-widest px-2 py-1 rounded pointer-events-none whitespace-nowrap -translate-x-2 group-hover:translate-x-0">
                    {link.label}
                  </span>
                </motion.a>
              ))}
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      {/* Desktop Bottom Decorative Line */}
      <div className="w-[1px] h-16 bg-gradient-to-b from-white/40 to-transparent hidden md:block" />
    </div>
  );
};

export default SocialBar;