"use client";
import { motion } from "framer-motion";
import Image from "next/image";

export default function About() {
  return (
    <section id="about" className="py-24 bg-[#050505] relative overflow-hidden">
      <div className="absolute top-0 right-0 w-96 h-96 bg-[#00f0ff] rounded-full mix-blend-screen filter blur-[150px] opacity-10"></div>
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-[#ff00e5] rounded-full mix-blend-screen filter blur-[150px] opacity-10"></div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="flex flex-col md:flex-row items-center gap-16">
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="w-full md:w-1/2"
          >
            <div className="relative h-[500px] w-full rounded-2xl overflow-hidden glass p-2">
              <div className="relative w-full h-full rounded-xl overflow-hidden bg-gray-900">
                <Image 
                  src="/images/about.png" 
                  alt="DSC Sports Culture" 
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
              </div>
              <div className="absolute inset-0 border border-white/10 rounded-xl m-2 pointer-events-none z-10"></div>
            </div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="w-full md:w-1/2"
          >
            <h2 className="text-4xl md:text-5xl font-black text-white mb-6 tracking-wide">
              ELEVATE YOUR <span className="text-[#ffe600]">GAME</span>
            </h2>
            <p className="text-gray-300 text-lg mb-6 leading-relaxed">
              Downtown Sports Club (DSC) was born from a vision to bring premium, world-class indoor sports facilities to Ranchi. We are more than just a venue; we are a community of athletes, enthusiasts, and beginners striving for excellence.
            </p>
            <p className="text-gray-300 text-lg mb-8 leading-relaxed">
              From our flagship professional badminton courts to the adrenaline-fueled skate park, DSC is designed to foster talent, promote fitness, and deliver an unmatched premium sporting experience.
            </p>

            <div className="grid grid-cols-2 gap-6">
              <div className="glass p-6 rounded-xl border border-[#00f0ff]/20 hover:border-[#00f0ff]/50 transition-colors">
                <h3 className="text-3xl font-black text-[#00f0ff] mb-2">5+</h3>
                <p className="text-gray-400 font-medium text-sm">Professional Sports</p>
              </div>
              <div className="glass p-6 rounded-xl border border-[#ff00e5]/20 hover:border-[#ff00e5]/50 transition-colors">
                <h3 className="text-3xl font-black text-[#ff00e5] mb-2">1000+</h3>
                <p className="text-gray-400 font-medium text-sm">Active Members</p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
