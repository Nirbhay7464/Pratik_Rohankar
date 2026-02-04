"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { Instagram, Facebook, Mail, ArrowUpCircle, Sparkles, Youtube, Camera } from "lucide-react";

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="bg-black border-t border-white/5 pt-32 pb-10">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* Massive Backdrop Branding */}
        <div className="hidden lg:block absolute left-0 right-0 overflow-hidden pointer-events-none select-none -mt-20">
            <h2 className="text-[20vw] font-black uppercase text-white/[0.02] whitespace-nowrap leading-none tracking-tighter">
                Cinematic Studio
            </h2>
        </div>

        <div className="relative z-10 grid grid-cols-1 md:grid-cols-12 gap-16 lg:gap-24 mb-24">
          
          {/* Column 1: Brand Essence */}
          <div className="md:col-span-5 lg:col-span-4 space-y-10">
            <div className="space-y-4">
              <span className="flex items-center gap-3 text-[#D4AF37] text-[10px] uppercase tracking-[0.6em] font-bold">
                <Camera size={14} strokeWidth={1.5} /> Established 2024
              </span>
              <h3 className="text-4xl lg:text-5xl font-sans font-black uppercase text-white leading-[0.85] tracking-tighter">
                REDEFINING <br />
                <span className="font-serif italic font-light lowercase text-[#D4AF37]">moments.</span>
              </h3>
            </div>
            
            <p className="text-gray-500 text-sm font-light leading-relaxed max-w-xs">
              Crafting cinematic legacies through light and motion. We don't just take photos; we archive emotions.
            </p>

            <div className="flex gap-4">
              {[
                { icon: <Instagram size={18} />, href: "https://www.instagram.com/pratikrohankarphotography?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==" },
                { icon: <Facebook size={18} />, href: "https://www.facebook.com/pratik.rohankar1?mibextid=LQQJ4d" },
                { icon: <Youtube size={18} />, href: "https://www.youtube.com/channel/UC7eYpxsCKrb51WR4_TCrNSQ" },
                { icon: <Mail size={18} />, href: "mailto:pratik.rohankar9@gmail.com" }
              ].map((social, i) => (
                <Link 
                  key={i} 
                  href={social.href} 
                  className="w-10 h-10 flex items-center justify-center rounded-full border border-white/10 text-white/40 hover:text-[#D4AF37] hover:border-[#D4AF37] transition-all duration-500"
                >
                  {social.icon}
                </Link>
              ))}
            </div>
          </div>

          {/* Column 2: Navigation Map */}
          <div className="md:col-span-3 lg:col-span-2 space-y-8">
            <h4 className="text-[10px] uppercase tracking-[0.4em] text-[#D4AF37] font-bold">The Studio</h4>
            <ul className="space-y-5">
              {["About", "Services", "Portfolio", "Contact","Videos"].map((item) => (
                <li key={item} className="overflow-hidden">
                  <Link 
                    href={item === "The Vault" ? "/#portfolio" : `#${item.toLowerCase()}`} 
                    className="group flex items-center gap-3 text-xs uppercase tracking-widest text-gray-400 hover:text-white transition-all duration-300"
                  >
                    <span className="w-0 h-[1px] bg-[#D4AF37] group-hover:w-4 transition-all duration-300" />
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: The HQ */}
          <div className="md:col-span-4 lg:col-span-6 flex flex-col justify-between">
            <div className="grid lg:grid-cols-2 gap-12">
                <div className="space-y-6">
                    <h4 className="text-[10px] uppercase tracking-[0.4em] text-white/40 font-bold">Studio HQ</h4>
                    <p className="text-sm text-gray-400 font-light leading-relaxed italic">
                        Near Hanuman Mandir, <br />
                        Arjun Nagar, Amravati, <br />
                        Maharashtra – 444603
                    </p>
                </div>
                <div className="space-y-6">
                    <h4 className="text-[10px] uppercase tracking-[0.4em] text-white/40 font-bold">Bookings</h4>
                    <Link href="tel:+919850334318" className="block text-xl text-white font-sans font-bold hover:text-[#D4AF37] transition-colors">
                        +91 98503 34318
                    </Link>
                    <Link href="mailto:pratik.rohankar9@gmail.com" className="block text-xs uppercase tracking-widest text-gray-500 hover:text-[#D4AF37] transition-colors underline underline-offset-8 decoration-white/10">
                        Drop an Email
                    </Link>
                </div>
            </div>
          </div>
        </div>

        {/* Legal & Back to Top */}
        <div className="border-t border-white/10 pt-10 flex flex-col md:flex-row justify-between items-center gap-8">
          <div className="flex items-center gap-8">
             <p className="text-[9px] uppercase tracking-[0.3em] text-white/20 font-medium">
                © {new Date().getFullYear()} CINEMATIC STUDIO. ALL RIGHTS RESERVED.
             </p>
             <div className="hidden md:flex gap-6 text-[9px] uppercase tracking-[0.3em] text-white/10">
                <Link href="/privacy" className="hover:text-white transition-colors">Privacy</Link>
                <Link href="/terms" className="hover:text-white transition-colors">Terms</Link>
             </div>
          </div>
          
          <button 
            onClick={scrollToTop}
            className="group relative flex items-center gap-4 text-[10px] uppercase tracking-[0.5em] text-[#D4AF37] hover:text-white transition-colors"
          >
            <span className="relative">
                Back to top
                <span className="absolute -bottom-1 left-0 w-full h-[1px] bg-[#D4AF37]/30 group-hover:bg-white transition-colors" />
            </span>
            <div className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center group-hover:border-[#D4AF37] group-hover:-translate-y-1 transition-all duration-500">
                <ArrowUpCircle size={18} strokeWidth={1} />
            </div>
          </button>
        </div>
      </div>
    </footer>
  );
};

export default Footer;