"use client";
import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";

export default function Hero() {
  return (
    <section className="relative h-screen w-full flex items-center justify-center overflow-hidden bg-black">
      <div className="absolute inset-0 z-0">
        <Image
          src="/images/hero.png"
          alt="Premium Indoor Badminton Court"
          fill
          priority
          className="object-cover opacity-40 object-center"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-black/40 to-[#050505] z-10 pointer-events-none" />
      </div>

      <div className="relative z-20 text-center px-4 max-w-5xl mx-auto mt-20">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h1 className="text-5xl md:text-7xl font-black text-white uppercase tracking-tight mb-6">
            Ranchi's Premium <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#00f0ff] to-[#ff00e5] text-glow drop-shadow-2xl">
              Indoor Sports
            </span> Destination
          </h1>
        </motion.div>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-lg md:text-2xl text-gray-200 mb-10 max-w-3xl mx-auto drop-shadow-md"
        >
          Experience world-class badminton, an adrenaline-pumping skate park, and modern fitness facilities in a professional athletic environment.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-6"
        >
          <Link
            href="#booking"
            className="px-8 py-4 bg-[#00f0ff] text-black font-bold text-lg rounded-full hover:bg-[#ffe600] transition-all transform hover:scale-105 box-glow w-full sm:w-auto"
          >
            Book Badminton Court
          </Link>
          <Link
            href="#contact"
            className="px-8 py-4 bg-transparent border-2 border-[#00f0ff] text-white font-bold text-lg rounded-full hover:bg-[#00f0ff] hover:text-black transition-all transform hover:scale-105 box-glow-hover w-full sm:w-auto bg-black/20 backdrop-blur-sm"
          >
            Enquire Now
          </Link>
        </motion.div>
      </div>

      <motion.div
        animate={{ y: [0, 10, 0] }}
        transition={{ repeat: Infinity, duration: 1.5 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 z-20"
      >
        <Link href="#about" className="text-white/50 hover:text-white transition-colors block">
          <div className="w-8 h-12 border-2 border-current rounded-full flex justify-center p-2">
            <div className="w-1 h-3 bg-current rounded-full" />
          </div>
        </Link>
      </motion.div>
    </section>
  );
}
