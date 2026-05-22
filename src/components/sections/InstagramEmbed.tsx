"use client";
import { motion } from "framer-motion";
import { Camera as Instagram } from "lucide-react";
import Image from "next/image";

export default function InstagramEmbed() {
  const images = [
    "/images/racquet.png",
    "/images/gallery1.png",
    "/images/hero.png",
    "/images/about.png"
  ];

  return (
    <section className="py-24 bg-[#050505] relative overflow-hidden">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row items-center justify-between gap-8 mb-16">
          <div className="max-w-2xl text-center md:text-left">
            <motion.h2 
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="text-4xl md:text-5xl font-black text-white mb-4"
            >
              FOLLOW ON <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#833ab4] via-[#fd1d1d] to-[#fcb045]">INSTAGRAM</span>
            </motion.h2>
            <p className="text-gray-400 text-lg">
              Follow us on Instagram for videos, match highlights, training clips, and club updates.
            </p>
          </div>
          <motion.a
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            href="https://www.instagram.com/downtown_indoor_playground?igsh=bHpvdGx6bTF3NHg1&utm_source=qr"
            target="_blank"
            rel="noreferrer"
            className="flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-[#833ab4] via-[#fd1d1d] to-[#fcb045] rounded-full font-bold text-white hover:opacity-90 transition-opacity hover:shadow-[0_0_20px_rgba(253,29,29,0.5)]"
          >
            <Instagram className="w-6 h-6" />
            <span>@downtown_indoor_playground</span>
          </motion.a>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {images.map((src, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="relative aspect-square rounded-2xl overflow-hidden group cursor-pointer bg-gray-900"
            >
              <div className="absolute inset-0 bg-black/50 group-hover:bg-black/20 transition-colors z-20 flex items-center justify-center">
                <Instagram className="w-10 h-10 text-white opacity-0 group-hover:opacity-100 transition-opacity transform group-hover:scale-110" />
              </div>
              <Image 
                src={src}
                alt="Instagram Feed"
                fill
                className="object-cover group-hover:scale-105 transition-transform duration-500 z-10"
                sizes="(max-width: 768px) 50vw, 25vw"
              />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
