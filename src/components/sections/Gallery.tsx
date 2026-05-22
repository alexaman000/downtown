"use client";
import { motion } from "framer-motion";
import Image from "next/image";

const galleryImages = [
  "/images/racquet.png", 
  "/images/gallery1.png",
  "/images/about.png",
  "/images/coach.png",
  "/images/hero.png",
  "/images/racquet.png",
];

export default function Gallery() {
  return (
    <section id="gallery" className="py-24 bg-[#0a0a0a] relative">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-black text-white mb-4"
          >
            ACTION <span className="text-[#ffe600]">GALLERY</span>
          </motion.h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
          {galleryImages.map((src, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              className="relative aspect-square rounded-2xl overflow-hidden group cursor-pointer bg-gray-900"
            >
              <div className="absolute inset-0 bg-black/40 group-hover:bg-transparent transition-colors z-10 pointer-events-none"></div>
              <Image 
                src={src} 
                alt={`Gallery Image ${index + 1}`} 
                fill
                className="object-cover transform group-hover:scale-110 transition-transform duration-700"
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
