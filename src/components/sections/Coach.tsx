"use client";
import { motion } from "framer-motion";
import { Trophy, Star, ShieldCheck } from "lucide-react";
import Image from "next/image";

export default function Coach() {
  return (
    <section id="coach" className="py-24 bg-[#0a0a0a] relative">
      <div className="container mx-auto px-6 relative z-10">
        <div className="flex flex-col md:flex-row items-center gap-16">
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="w-full md:w-1/2"
          >
            <h2 className="text-4xl md:text-5xl font-black text-white mb-6 tracking-wide uppercase">
              Meet <span className="text-[#00f0ff]">Savan Sir</span>
            </h2>
            <p className="text-gray-300 text-lg mb-8 leading-relaxed">
              Train under the guidance of a professional. Savan Sir is a highly experienced Badminton Coach and a former Railways Team Player. With years of experience on the court, he brings top-tier mentoring to players of all levels.
            </p>

            <div className="space-y-6">
              <div className="flex items-center gap-4 glass p-4 rounded-2xl border border-white/5 hover:border-[#ffe600]/30 transition-colors">
                <div className="w-12 h-12 bg-[#ffe600]/10 rounded-full flex items-center justify-center">
                  <Trophy className="w-6 h-6 text-[#ffe600]" />
                </div>
                <div>
                  <h4 className="text-white font-bold text-lg">Railways Team Player</h4>
                  <p className="text-gray-400 text-sm">Competed at the highest national level</p>
                </div>
              </div>

              <div className="flex items-center gap-4 glass p-4 rounded-2xl border border-white/5 hover:border-[#00f0ff]/30 transition-colors">
                <div className="w-12 h-12 bg-[#00f0ff]/10 rounded-full flex items-center justify-center">
                  <Star className="w-6 h-6 text-[#00f0ff]" />
                </div>
                <div>
                  <h4 className="text-white font-bold text-lg">Best Player & Mentor</h4>
                  <p className="text-gray-400 text-sm">Recognized for outstanding coaching and technique</p>
                </div>
              </div>

              <div className="flex items-center gap-4 glass p-4 rounded-2xl border border-white/5 hover:border-[#ff00e5]/30 transition-colors">
                <div className="w-12 h-12 bg-[#ff00e5]/10 rounded-full flex items-center justify-center">
                  <ShieldCheck className="w-6 h-6 text-[#ff00e5]" />
                </div>
                <div>
                  <h4 className="text-white font-bold text-lg">Highly Experienced</h4>
                  <p className="text-gray-400 text-sm">Decades of professional badminton training</p>
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="w-full md:w-1/2"
          >
            <div className="relative h-[600px] w-full rounded-3xl overflow-hidden glass p-3 border border-white/10 group bg-gray-900">
              <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent z-20 pointer-events-none"></div>
              <div className="relative w-full h-full rounded-2xl overflow-hidden">
                <Image 
                  src="/images/coach.png" 
                  alt="Coach Savan Sir" 
                  fill
                  className="object-cover grayscale group-hover:grayscale-0 transition-all duration-700"
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
              </div>
              <div className="absolute bottom-10 left-10 z-30">
                <h3 className="text-4xl font-black text-white uppercase tracking-wider text-glow">Savan Sir</h3>
                <p className="text-[#00f0ff] font-bold text-xl uppercase tracking-widest mt-1">Head Coach</p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
