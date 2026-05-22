"use client";
import { motion } from "framer-motion";
import { MapPin } from "lucide-react";

export default function Location() {
  return (
    <section className="py-24 bg-[#0a0a0a] relative">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-black text-white mb-4"
          >
            FIND <span className="text-[#00f0ff]">US</span>
          </motion.h2>
        </div>

        <div className="relative w-full h-[500px] rounded-3xl overflow-hidden glass border border-white/10 p-2">
          <div className="absolute inset-0 z-10 pointer-events-none rounded-3xl border border-white/5"></div>
          
          <iframe 
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d117282.88785642751!2d85.25055047816008!3d23.368688461756555!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39f4e104aa5db7dd%3A0xdc09d4c518c7e051!2sRanchi%2C%20Jharkhand!5e0!3m2!1sen!2sin!4v1700000000000!5m2!1sen!2sin" 
            width="100%" 
            height="100%" 
            style={{ border: 0, borderRadius: '1.5rem', filter: 'invert(90%) hue-rotate(180deg) contrast(100%)' }} 
            allowFullScreen={true} 
            loading="lazy" 
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
          
          <div className="absolute top-6 left-6 z-20">
            <a 
              href="https://share.google/kca0EqhtHPgXSBEbj" 
              target="_blank" 
              rel="noreferrer"
              className="flex items-center gap-2 px-6 py-3 bg-[#00f0ff] text-black font-bold rounded-xl shadow-[0_0_20px_rgba(0,240,255,0.4)] hover:bg-[#ffe600] transition-colors"
            >
              <MapPin className="w-5 h-5" />
              <span>Get Directions</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
