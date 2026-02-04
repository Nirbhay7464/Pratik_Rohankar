"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation"; // Added for active state
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, ChevronDown } from "lucide-react";

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const pathname = usePathname(); // Get current route

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
    { name: "About", href: "/#about" },
    { name: "Services", href: "/#services" },
    { name: "Contact", href: "/#contact" },
  ];

  const portfolioItems = [
    { name: "Wedding", href: "/portfolio/wedding" },
    { name: "Pre-Wedding", href: "/portfolio/prewedding" },
    { name: "Engagement", href: "/portfolio/engagement" },
    { name: "Maternity", href: "/portfolio/maternity" },
    { name: "Events", href: "/portfolio/event" },
  ];

  // Helper to check if a link is active
  const isActive = (path: string) => pathname === path;
  // Special check for portfolio dropdown (highlight if any sub-item is active)
  const isPortfolioActive = pathname.startsWith("/portfolio");

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
        
        {/* Logo */}
        <Link 
          href="/" 
          className={`relative h-10 w-32 md:h-12 md:w-40 transition-all duration-300 ${
            menuOpen ? "opacity-0 invisible" : "opacity-100 visible"
          }`}
        >
          <Image src="/logo.png" alt="Logo" fill className="object-contain object-left" priority />
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-8">
          {navLinks.slice(0, 2).map((link) => ( // Home, About
            <Link 
              key={link.name} 
              href={link.href} 
              className={`text-[10px] uppercase tracking-widest transition-colors relative group ${
                isActive(link.href) ? "text-white" : "text-white/70 hover:text-white"
              }`}
            >
              {link.name}
              <span className={`absolute -bottom-1 left-0 h-[1px] bg-white transition-all ${
                isActive(link.href) ? "w-full" : "w-0 group-hover:w-full"
              }`} />
            </Link>
          ))}

          {/* Portfolio Dropdown */}
          <div className="relative group">
            <button className={`flex items-center gap-1 text-[10px] uppercase tracking-widest transition-colors ${
              isPortfolioActive ? "text-white" : "text-white/70 group-hover:text-white"
            }`}>
              Portfolio <ChevronDown size={14} className="group-hover:rotate-180 transition-transform" />
            </button>
            <div className="absolute left-1/2 -translate-x-1/2 top-full mt-4 w-56 bg-black/90 backdrop-blur-2xl border border-white/10 rounded-2xl opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 translate-y-2 group-hover:translate-y-0 p-2 shadow-2xl">
              {portfolioItems.map((item) => (
                <Link 
                  key={item.name} 
                  href={item.href} 
                  className={`block px-4 py-3 text-[11px] uppercase tracking-tight rounded-xl transition ${
                    isActive(item.href) ? "text-white bg-white/10" : "text-white/60 hover:text-white hover:bg-white/5"
                  }`}
                >
                  {item.name}
                </Link>
              ))}
            </div>
            {/* Active underline for Portfolio button */}
            {isPortfolioActive && <span className="absolute -bottom-1 left-0 w-full h-[1px] bg-white" />}
          </div>

          {/* Videos Section - Active State Added */}
          <Link 
            href="/videos" 
            className={`text-[10px] uppercase tracking-widest transition-colors relative group ${
              isActive("/videos") ? "text-white" : "text-white/70 hover:text-white"
            }`}
          >
            Videos
            <span className={`absolute -bottom-1 left-0 h-[1px] bg-white transition-all ${
                isActive("/videos") ? "w-full" : "w-0 group-hover:w-full"
            }`} />
          </Link>

          {navLinks.slice(2).map((link) => ( // Services, Contact
            <Link 
              key={link.name} 
              href={link.href} 
              className={`text-[10px] uppercase tracking-widest transition-colors relative group ${
                isActive(link.href) ? "text-white" : "text-white/70 hover:text-white"
              }`}
            >
              {link.name}
              <span className={`absolute -bottom-1 left-0 h-[1px] bg-white transition-all ${
                isActive(link.href) ? "w-full" : "w-0 group-hover:w-full"
              }`} />
            </Link>
          ))}

          
        </nav>

        {/* Mobile Toggle */}
        <button onClick={() => setMenuOpen(!menuOpen)} className="md:hidden text-white p-2 z-[130] relative">
          {menuOpen ? <X size={26} strokeWidth={1.5} /> : <Menu size={26} strokeWidth={1.5} />}
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence mode="wait">
        {menuOpen && (
          <motion.div
            initial={{ x: "100%" }} animate={{ x: 0 }} exit={{ x: "100%" }}
            transition={{ type: "tween", duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
            className="fixed inset-0 bg-black z-[120] md:hidden flex flex-col h-screen"
          >
            <div className={`w-full px-6 flex items-center justify-between shrink-0 ${scrolled ? "py-3" : "py-6"}`}>
               <div className="relative h-10 w-32">
                  <Image src="/logo.png" alt="Logo" fill className="object-contain object-left" />
               </div>
            </div>

            <div className="flex-1 overflow-y-auto px-10 pt-6 pb-12 flex flex-col">
              <div className="flex flex-col gap-8">
                {["Home", "About", "Services", "Videos", "Contact"].map((name, i) => {
                  const href = name === "Videos" ? "/videos" : name === "Home" ? "/" : `#${name.toLowerCase()}`;
                  const active = isActive(href);

                  return (
                    <motion.div key={name} initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: i * 0.1 }}>
                      <Link 
                        href={href} 
                        onClick={() => setMenuOpen(false)} 
                        className={`text-[13px] uppercase tracking-[0.4em] font-medium block border-b pb-4 transition-colors ${
                          active ? "text-white border-white" : "text-white/50 border-white/5"
                        }`}
                      >
                        {name}
                      </Link>
                    </motion.div>
                  );
                })}
                
                <div className="mt-2">
                  <p className="text-[10px] uppercase tracking-[0.3em] text-white/30 mb-6 font-bold">Portfolio</p>
                  <div className="grid grid-cols-2 gap-y-6 gap-x-4">
                    {portfolioItems.map((item, i) => (
                      <motion.div key={item.name} initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.4 + (i * 0.05) }}>
                        <Link 
                          href={item.href} 
                          onClick={() => setMenuOpen(false)} 
                          className={`text-[11px] uppercase tracking-[0.2em] transition-colors ${
                            isActive(item.href) ? "text-white" : "text-white/40"
                          }`}
                        >
                          {item.name}
                        </Link>
                      </motion.div>
                    ))}
                  </div>
                </div>
              </div>

              <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.7 }} className="mt-auto pt-8 border-t border-white/10 text-center">
                
                <p className="text-[9px] uppercase tracking-[0.4em] text-white/40">Pratik Rohankar Photography</p>
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
};

export default Navbar;