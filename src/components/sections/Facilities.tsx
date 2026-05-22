"use client";
import { motion } from "framer-motion";
import { Shield, Sparkles, Bath, Car, Droplet, Coffee } from "lucide-react";

const facilitiesData = [
  { icon: <Sparkles />, title: "Premium Lighting", desc: "Professional glare-free LED lighting for optimal visibility." },
  { icon: <Bath />, title: "Luxury Washrooms", desc: "Clean, hygienic, and premium washroom facilities." },
  { icon: <Shield />, title: "Safe Environment", desc: "24/7 security and safe indoor atmosphere." },
  { icon: <Car />, title: "Parking Space", desc: "Ample parking area for members and visitors." },
  { icon: <Droplet />, title: "Drinking Water", desc: "RO purified drinking water stations." },
  { icon: <Coffee />, title: "Seating Area", desc: "Comfortable spectator and player resting zones." },
];

export default function Facilities() {
  return (
    <section id="facilities" className="py-24 bg-[#050505] relative">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-black text-white mb-4"
          >
            OUR <span className="text-[#ff00e5]">FACILITIES</span>
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-gray-400 max-w-2xl mx-auto"
          >
            We provide a premium sporting environment equipped with modern amenities to ensure your comfort and performance.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {facilitiesData.map((facility, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="glass p-8 rounded-2xl border border-white/5 hover:border-[#ff00e5]/30 hover:box-glow transition-all duration-300 group"
            >
              <div className="w-14 h-14 bg-white/5 rounded-xl flex items-center justify-center text-[#ff00e5] mb-6 group-hover:scale-110 group-hover:bg-[#ff00e5]/10 transition-all">
                {facility.icon}
              </div>
              <h3 className="text-xl font-bold text-white mb-3">{facility.title}</h3>
              <p className="text-gray-400 text-sm leading-relaxed">{facility.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
