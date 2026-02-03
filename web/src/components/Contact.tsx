"use client";

import { motion } from "framer-motion";
import { MapPin, Phone, Mail, Sparkles, MoveRight } from "lucide-react";

const Contact = () => {
  return (
    <section id="contact" className="bg-black pt-32 pb-24 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* Refined Editorial Header */}
        <div className="mb-24 flex flex-col md:flex-row md:items-end justify-between gap-10">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            viewport={{ once: true }}
          >
            <span className="flex items-center gap-2 text-[#D4AF37] text-[10px] uppercase tracking-[0.6em] font-bold mb-6">
              <Sparkles size={12} /> Get in Touch
            </span>
            <h2 className="text-5xl md:text-7xl font-sans font-black uppercase text-white leading-[0.9] tracking-tighter">
              Start Your <br /> 
              <span className="font-serif italic font-light lowercase text-white/30">
                narrative.
              </span>
            </h2>
          </motion.div>
          <p className="text-gray-500 max-w-sm text-sm font-light leading-relaxed border-l border-white/5 pl-8 mb-2">
            Available for worldwide travel. Let’s discuss how we can document your legacy with cinematic precision.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-20 items-start">
          {/* Left Column: Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="space-y-12"
          >
            <div className="space-y-8">
              <div className="flex gap-6 group">
                <div className="w-12 h-12 flex-shrink-0 flex items-center justify-center rounded-2xl bg-white/5 text-[#D4AF37] transition-all duration-500 group-hover:bg-[#D4AF37] group-hover:text-black">
                  <MapPin size={20} strokeWidth={1.5} />
                </div>
                <div>
                  <p className="text-[10px] uppercase tracking-widest text-white/40 mb-1 font-bold">Studio</p>
                  <p className="text-gray-300 text-sm leading-relaxed font-light">
                    Near Hanuman Mandir, Arjun Nagar, <br />
                    Amravati, Maharashtra – 444603
                  </p>
                </div>
              </div>

              <div className="flex gap-6 group">
                <div className="w-12 h-12 flex-shrink-0 flex items-center justify-center rounded-2xl bg-white/5 text-[#D4AF37] transition-all duration-500 group-hover:bg-[#D4AF37] group-hover:text-black">
                  <Phone size={20} strokeWidth={1.5} />
                </div>
                <div>
                  <p className="text-[10px] uppercase tracking-widest text-white/40 mb-1 font-bold">Direct Line</p>
                  <p className="text-gray-300 text-sm font-light">+91 98503 34318</p>
                </div>
              </div>

              <div className="flex gap-6 group">
                <div className="w-12 h-12 flex-shrink-0 flex items-center justify-center rounded-2xl bg-white/5 text-[#D4AF37] transition-all duration-500 group-hover:bg-[#D4AF37] group-hover:text-black">
                  <Mail size={20} strokeWidth={1.5} />
                </div>
                <div>
                  <p className="text-[10px] uppercase tracking-widest text-white/40 mb-1 font-bold">Email Inquiry</p>
                  <p className="text-gray-300 text-sm font-light">pratik.rohankar9@gmail.com</p>
                </div>
              </div>
            </div>

            {/* Fluent WhatsApp Button */}
            <a href="https://wa.me/919850334318" target="_blank" className="inline-block group relative">
              <div className="relative bg-white text-black px-8 py-4 rounded-full font-black uppercase text-[10px] tracking-[0.3em] flex items-center gap-4 overflow-hidden shadow-xl transition-all duration-500 group-hover:-translate-y-1">
                <div className="absolute inset-0 bg-[#D4AF37] translate-y-full group-hover:translate-y-0 transition-transform duration-500 ease-out" />
                <span className="relative z-10">Chat on WhatsApp</span>
                <MoveRight size={14} className="relative z-10 group-hover:translate-x-1 transition-transform" />
              </div>
            </a>
          </motion.div>

{/* Right Column: Google Map */}
<motion.div
  initial={{ opacity: 0, scale: 0.9 }}
  whileInView={{ opacity: 1, scale: 1 }}
  transition={{ duration: 0.8 }}
  viewport={{ once: true }}
  className="group relative h-[450px] w-full rounded-[2.5rem] overflow-hidden border border-white/10 shadow-[0_20px_50px_rgba(0,0,0,0.5)]"
>
  {/* The Iframe with Hover Transition */}
  <iframe
    src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d14903.200598616848!2d77.7767554!3d20.9605394!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bd6a338086c2d55%3A0x8106ad96adba1263!2sPratik%20Rohankar%20Photography!5e0!3m2!1sen!2sin!4v1769585588065!5m2!1sen!2sin"
    width="100%"
    height="100%"
    style={{ border: 0 }}
    // The key is in these Tailwind classes:
    className="relative z-0 grayscale invert-[0.9] contrast-[1.2] brightness-[0.7] 
               transition-all duration-700 ease-in-out 
               group-hover:grayscale-0 group-hover:invert-0 group-hover:brightness-100 group-hover:contrast-100"
    allowFullScreen
    loading="lazy"
  />
  
  {/* Floating Label */}
  <div className="absolute bottom-6 right-6 z-20 bg-white text-black px-5 py-2 rounded-full flex items-center gap-2 shadow-2xl">
    <div className="w-2 h-2 rounded-full bg-red-600 animate-pulse" />
    <span className="text-[10px] uppercase tracking-widest font-black">Live Studio Location</span>
  </div>
</motion.div>

        </div>
      </div>
    </section>
  );
};

export default Contact;