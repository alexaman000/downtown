"use client";
import { useState } from "react";
import { motion } from "framer-motion";
import { UploadCloud, Image as ImageIcon, Trash2, FolderPlus } from "lucide-react";
import Image from "next/image";

const mockImages = [
  { id: 1, src: "/images/hero.png", category: "Badminton" },
  { id: 2, src: "/images/gallery1.png", category: "Skate Park" },
  { id: 3, src: "/images/about.png", category: "Facilities" },
  { id: 4, src: "/images/coach.png", category: "Coaches" },
  { id: 5, src: "/images/racquet.png", category: "Badminton" },
];

export default function GalleryManagement() {
  const [activeTab, setActiveTab] = useState("All");

  return (
    <div className="max-w-7xl mx-auto space-y-8">
      <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
        <div>
          <h1 className="text-3xl font-black text-white">Media Manager</h1>
          <p className="text-gray-400 mt-1">Upload, organize, and compress images for the website.</p>
        </div>
        <button className="bg-[#00f0ff] hover:bg-[#00d0dd] text-black font-bold py-2.5 px-6 rounded-xl flex items-center gap-2 transition-all hover:shadow-[0_0_20px_rgba(0,240,255,0.4)]">
          <UploadCloud size={20} />
          Upload Media
        </button>
      </div>

      <div className="glass rounded-3xl p-6 border border-white/5">
        <div className="flex gap-2 overflow-x-auto pb-4 custom-scrollbar mb-6">
          {["All", "Badminton", "Skate Park", "Facilities", "Coaches"].map((tab) => (
            <button 
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`px-5 py-2 rounded-full font-bold whitespace-nowrap transition-all ${
                activeTab === tab ? 'bg-[#ff00e5] text-white shadow-[0_0_15px_rgba(255,0,229,0.4)]' : 'bg-[#111] text-gray-400 border border-white/10 hover:text-white hover:bg-white/5'
              }`}
            >
              {tab}
            </button>
          ))}
          <button className="px-5 py-2 rounded-full bg-[#111] text-gray-400 border border-white/10 hover:text-white flex items-center gap-2 border-dashed">
            <FolderPlus size={16} /> New Folder
          </button>
        </div>

        <div className="border-2 border-dashed border-white/10 rounded-2xl p-10 flex flex-col items-center justify-center bg-[#111] hover:border-[#00f0ff]/30 transition-colors cursor-pointer mb-8">
          <UploadCloud className="text-gray-400 w-12 h-12 mb-4" />
          <p className="text-white font-bold text-lg mb-1">Drag & Drop files here</p>
          <p className="text-gray-500 text-sm">Images will be automatically compressed & optimized for SEO</p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
          {mockImages.map((img, i) => (
            <motion.div 
              key={img.id}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: i * 0.05 }}
              className="relative aspect-square rounded-xl overflow-hidden group bg-gray-900 border border-white/10"
            >
              <Image src={img.src} alt="Media" fill className="object-cover group-hover:scale-110 transition-transform duration-500" />
              
              <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity flex flex-col justify-between p-3">
                <div className="flex justify-end">
                  <button className="w-8 h-8 rounded-lg bg-red-500 text-white flex items-center justify-center hover:bg-red-600 transition-colors shadow-lg">
                    <Trash2 size={14} />
                  </button>
                </div>
                <div>
                  <span className="px-2 py-1 bg-black/80 backdrop-blur-sm text-xs font-bold text-[#00f0ff] rounded border border-white/10">
                    {img.category}
                  </span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}
