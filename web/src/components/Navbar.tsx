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
          ? "py-3 bg-black/60 backdrop-blur-xl border-b border-white/5" 
          : "py-6 bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
        
        {/* Logo Only */}
        <Link href="/" className="relative h-10 w-32 md:h-12 md:w-40 transition-transform duration-300 hover:scale-105">
          <Image 
            src="/logo.png" 
            alt="Logo" 
            fill 
            className="object-contain object-left"
            priority 
          />
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <Link 
              key={link.name} 
              href={link.href} 
              className="relative text-[10px] uppercase tracking-widest text-white/70 hover:text-white transition-colors group"
            >
              {link.name}
              <span className="absolute -bottom-1 left-0 w-0 h-[1px] bg-[var(--color-accent)] transition-all group-hover:w-full" />
            </Link>
          ))}

          {/* Portfolio Dropdown */}
          <div className="relative group">
            <button className="flex items-center gap-1 text-[10px] uppercase tracking-widest text-white/70 group-hover:text-white transition-colors">
              Portfolio <ChevronDown size={14} className="group-hover:rotate-180 transition-transform" />
            </button>

            <div className="absolute left-1/2 -translate-x-1/2 top-full mt-4 w-56 bg-black/90 backdrop-blur-2xl border border-white/10 rounded-2xl opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 translate-y-2 group-hover:translate-y-0 p-2 shadow-2xl">
              {portfolioItems.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className="block px-4 py-3 text-[11px] uppercase tracking-tight text-white/60 hover:text-white hover:bg-white/5 rounded-xl transition"
                >
                  {item.name}
                </Link>
              ))}
            </div>
          </div>

          <a
            href="https://wa.me/919999999999"
            className="px-6 py-2.5 text-[10px] uppercase tracking-[0.15em] font-bold rounded-full bg-white text-black hover:bg-[var(--color-accent)] transition-colors"
          >
            Book Now
          </a>
        </nav>

        {/* Mobile Toggle */}
        <button onClick={() => setMenuOpen(!menuOpen)} className="md:hidden text-white p-2">
          {menuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Full-Screen Mobile Menu */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, x: "100%" }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: "100%" }}
            transition={{ type: "spring", damping: 25, stiffness: 200 }}
            className="fixed inset-0 bg-black z-[90] md:hidden flex flex-col justify-center px-10"
          >
            <div className="flex flex-col gap-8">
              {navLinks.map((link, i) => (
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.1 }}
                  key={link.name}
                >
                  <Link 
                    href={link.href} 
                    onClick={() => setMenuOpen(false)}
                    className="text-4xl font-serif italic text-white"
                  >
                    {link.name}
                  </Link>
                </motion.div>
              ))}
              
              <div className="h-[1px] w-full bg-white/10 my-4" />
              
              <div className="grid grid-cols-2 gap-4">
                {portfolioItems.map((item) => (
                  <Link 
                    key={item.name} 
                    href={item.href} 
                    onClick={() => setMenuOpen(false)}
                    className="text-sm text-white/50"
                  >
                    {item.name}
                  </Link>
                ))}
              </div>

              <a
                href="https://wa.me/919999999999"
                className="mt-6 w-full py-4 text-center rounded-full bg-[var(--color-accent)] text-black font-bold"
              >
                WhatsApp Booking
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
};

export default Navbar;