"use client";
import { useState } from "react";
import { motion } from "framer-motion";
import { Plus, Edit, Trash2, Image as ImageIcon } from "lucide-react";
import Image from "next/image";

const mockSports = [
  { id: 1, title: "Badminton", status: "Live Now", image: "/images/hero.png", desc: "Premium synthetic courts with professional glare-free lighting." },
  { id: 2, title: "Skate Park", status: "Live Now", image: "/images/gallery1.png", desc: "Safe, modern indoor skating area for all skill levels." },
  { id: 3, title: "Calisthenics", status: "Coming Soon", image: "/images/about.png", desc: "Advanced bodyweight training parkour and bars setup." },
  { id: 4, title: "Table Tennis", status: "Coming Soon", image: "/images/racquet.png", desc: "Professional ITTF approved tables and flooring." },
];

export default function SportsManagement() {
  return (
    <div className="max-w-7xl mx-auto space-y-8">
      <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
        <div>
          <h1 className="text-3xl font-black text-white">Sports CMS</h1>
          <p className="text-gray-400 mt-1">Manage the sports sections visible on the homepage.</p>
        </div>
        <button className="bg-[#00f0ff] hover:bg-[#00d0dd] text-black font-bold py-2.5 px-6 rounded-xl flex items-center gap-2 transition-all hover:shadow-[0_0_20px_rgba(0,240,255,0.4)]">
          <Plus size={20} />
          Add Sport
        </button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {mockSports.map((sport, index) => (
          <motion.div 
            key={sport.id}
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: index * 0.1 }}
            className="glass rounded-3xl p-6 border border-white/5 flex gap-6 group hover:border-white/20 transition-all"
          >
            <div className="relative w-32 h-32 rounded-2xl overflow-hidden flex-shrink-0 bg-gray-900">
              <Image 
                src={sport.image} 
                alt={sport.title} 
                fill 
                className="object-cover group-hover:scale-110 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-black/40 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity cursor-pointer backdrop-blur-sm">
                <ImageIcon className="text-white w-6 h-6" />
              </div>
            </div>
            <div className="flex-1 flex flex-col justify-between">
              <div>
                <div className="flex justify-between items-start mb-2">
                  <h3 className="text-xl font-bold text-white">{sport.title}</h3>
                  <span className={`px-2 py-1 rounded text-[10px] font-bold uppercase tracking-wider ${sport.status === 'Live Now' ? 'bg-[#00f0ff]/20 text-[#00f0ff]' : 'bg-white/10 text-white'}`}>
                    {sport.status}
                  </span>
                </div>
                <p className="text-gray-400 text-sm line-clamp-2">{sport.desc}</p>
              </div>
              <div className="flex gap-2 justify-end mt-4">
                <button className="px-4 py-2 rounded-lg bg-white/5 text-gray-300 hover:text-white hover:bg-white/10 transition-colors flex items-center gap-2 text-sm">
                  <Edit size={16} /> Edit
                </button>
                <button className="p-2 rounded-lg bg-red-500/5 text-red-400 hover:bg-red-500/20 transition-colors">
                  <Trash2 size={16} />
                </button>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
