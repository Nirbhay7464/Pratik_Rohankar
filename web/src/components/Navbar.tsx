"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, ChevronDown } from "lucide-react";

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    if (menuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
  }, [menuOpen]);

  const navLinks = [
    { name: "Home", href: "/" },
    { name: "About", href: "#about" },
    { name: "Services", href: "#services" },
    { name: "Contact", href: "#contact" },
  ];

  const portfolioItems = [
    { name: "Wedding", href: "/portfolio/wedding" },
    { name: "Pre-Wedding", href: "/portfolio/prewedding" },
    { name: "Engagement", href: "/portfolio/engagement" },
    { name: "Maternity", href: "/portfolio/maternity" },
    { name: "Events", href: "/portfolio/event" },
  ];

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className={`fixed top-0 left-0 w-full z-[100] transition-all duration-500 ${
        scrolled 
          ? "py-4 bg-black/60 backdrop-blur-xl border-b border-white/5" 
          : "py-8 bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-8 flex items-center justify-between">
        
        {/* Main Logo - Hides when menu is open to prevent overlap */}
        <Link 
          href="/" 
          className={`relative h-8 w-32 md:h-10 md:w-40 z-[110] transition-opacity duration-300 ${
            menuOpen ? "opacity-0 invisible" : "opacity-100 visible"
          }`}
        >
          <Image src="/logo.png" alt="Logo" fill className="object-contain object-left" priority />
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-10">
          {navLinks.map((link) => (
            <Link key={link.name} href={link.href} className="text-[10px] uppercase tracking-[0.2em] text-white/70 hover:text-white transition-colors">
              {link.name}
            </Link>
          ))}
          <a href="https://wa.me/919999999999" className="px-8 py-3 text-[10px] uppercase tracking-[0.2em] font-bold rounded-full bg-white text-black">
            Book Now
          </a>
        </nav>

        {/* Mobile Toggle Trigger */}
        <button 
          onClick={() => setMenuOpen(!menuOpen)} 
          className="md:hidden text-white p-2 z-[130] relative"
        >
          {menuOpen ? <X size={26} strokeWidth={1.5} /> : <Menu size={26} strokeWidth={1.5} />}
        </button>
      </div>

      {/* Premium Mobile Menu */}
      <AnimatePresence mode="wait">
        {menuOpen && (
          <motion.div
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ type: "tween", duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
            className="fixed inset-0 h-screen w-full bg-black z-[120] md:hidden flex flex-col"
          >
            {/* Dedicated Menu Header to house the logo while menu is active */}
            <div className={`w-full px-8 shrink-0 bg-black ${scrolled ? "py-4" : "py-8"}`}>
               <div className="relative h-8 w-32">
                  <Image src="/logo.png" alt="Logo" fill className="object-contain object-left" />
               </div>
            </div>

            {/* Scrollable Content */}
            <div className="flex-1 overflow-y-auto px-10 pb-10 pt-6">
              <div className="flex flex-col gap-10">
                {navLinks.map((link, i) => (
                  <motion.div
                    key={link.name}
                    initial={{ opacity: 0, x: 10 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: i * 0.1 }}
                  >
                    <Link 
                      href={link.href} 
                      onClick={() => setMenuOpen(false)}
                      className="text-[14px] uppercase tracking-[0.3em] text-white font-medium hover:text-white/60 transition-all border-b border-white/10 pb-5 block"
                    >
                      {link.name}
                    </Link>
                  </motion.div>
                ))}
                
                <div className="mt-4">
                  <p className="text-[10px] uppercase tracking-[0.3em] text-white/40 mb-10 font-bold">
                    Portfolio
                  </p>
                  <div className="grid grid-cols-2 gap-y-10 gap-x-4">
                    {portfolioItems.map((item, i) => (
                      <motion.div
                        key={item.name}
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.4 + (i * 0.05) }}
                      >
                        <Link 
                          href={item.href} 
                          onClick={() => setMenuOpen(false)}
                          className="text-[11px] uppercase tracking-[0.2em] text-white/90 hover:text-white font-medium"
                        >
                          {item.name}
                        </Link>
                      </motion.div>
                    ))}
                  </div>
                </div>

                {/* Footer Section */}
                <motion.div 
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.7 }}
                  className="mt-12 pt-10 border-t border-white/10 flex flex-col items-center"
                >
                  <a 
                    href="https://wa.me/919999999999" 
                    className="block w-full py-4 bg-white text-black text-center text-[11px] font-bold uppercase rounded-full tracking-[0.2em] shadow-2xl mb-12"
                  >
                    Whatsapp Booking
                  </a>
                  
                  <div className="text-center space-y-2">
                    <p className="text-[10px] uppercase tracking-[0.4em] text-white/50">
                      Pratik Rohankar Photography
                    </p>
                    <p className="text-[8px] uppercase tracking-[0.2em] text-white/20">
                      Creating visual legacies since 2024
                    </p>
                  </div>
                </motion.div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
};

export default Navbar;