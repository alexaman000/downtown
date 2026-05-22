"use client";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import Image from "next/image";

const sportsData = [
  {
    title: "Badminton",
    status: "Live Now",
    image: "/images/hero.png",
    desc: "Premium synthetic courts with professional glare-free lighting.",
    accent: "from-[#00f0ff] to-blue-600"
  },
  {
    title: "Skate Park",
    status: "Live Now",
    image: "/images/gallery1.png",
    desc: "Safe, modern indoor skating area for all skill levels.",
    accent: "from-[#ffe600] to-orange-500"
  },
  {
    title: "Calisthenics",
    status: "Coming Soon",
    image: "/images/about.png",
    desc: "Advanced bodyweight training parkour and bars setup.",
    accent: "from-[#ff00e5] to-purple-600"
  },
  {
    title: "Table Tennis",
    status: "Coming Soon",
    image: "/images/racquet.png",
    desc: "Professional ITTF approved tables and flooring.",
    accent: "from-[#00ff88] to-green-600"
  }
];

export default function Sports() {
  return (
    <section id="sports" className="py-24 bg-[#0a0a0a] relative">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-black text-white mb-4"
          >
            OUR <span className="text-[#00f0ff]">SPORTS</span>
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-gray-400 max-w-2xl mx-auto"
          >
            Explore our state-of-the-art indoor arenas designed to provide the ultimate sporting experience.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {sportsData.map((sport, index) => (
            <motion.div
              key={sport.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              whileHover={{ y: -10 }}
              className="group relative rounded-2xl overflow-hidden glass cursor-pointer h-[400px]"
            >
              <div className="absolute inset-0 bg-gray-900">
                <Image 
                  src={sport.image} 
                  alt={sport.title} 
                  fill
                  className="object-cover opacity-40 group-hover:opacity-60 transition-all duration-500 group-hover:scale-110" 
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 25vw"
                />
              </div>
              <div className={`absolute top-0 right-0 m-4 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider z-20 ${sport.status === 'Live Now' ? 'bg-[#00f0ff] text-black' : 'bg-white/20 text-white backdrop-blur-md'}`}>
                {sport.status}
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-[#050505] via-[#050505]/50 to-transparent flex flex-col justify-end p-6 z-10">
                <div className={`w-12 h-1 bg-gradient-to-r ${sport.accent} mb-4 rounded-full group-hover:w-full transition-all duration-500`}></div>
                <h3 className="text-2xl font-bold text-white mb-2">{sport.title}</h3>
                <p className="text-gray-300 text-sm mb-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300 translate-y-4 group-hover:translate-y-0">{sport.desc}</p>
                <div className="flex items-center text-[#00f0ff] font-semibold text-sm opacity-0 group-hover:opacity-100 transition-all duration-300 translate-y-4 group-hover:translate-y-0">
                  <span>Explore</span>
                  <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-2 transition-transform" />
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
