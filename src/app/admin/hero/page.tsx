"use client";
import { useState } from "react";
import { motion } from "framer-motion";
import { Save, Image as ImageIcon, LayoutTemplate } from "lucide-react";

export default function HeroManagement() {
  return (
    <div className="max-w-4xl mx-auto space-y-8">
      <div>
        <h1 className="text-3xl font-black text-white">Hero Section Setup</h1>
        <p className="text-gray-400 mt-1">Configure the main landing section of your website.</p>
      </div>

      <div className="glass rounded-3xl p-8 border border-white/5 space-y-6">
        <div>
          <label className="block text-sm font-medium text-gray-400 mb-2">Main Headline</label>
          <input 
            type="text" 
            defaultValue="Ranchi's Premium Indoor Sports Destination"
            className="w-full bg-[#111] border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-[#00f0ff] transition-all font-bold text-lg"
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-400 mb-2">Subheadline / Description</label>
          <textarea 
            rows={3}
            defaultValue="Experience world-class badminton, an adrenaline-pumping skate park, and modern fitness facilities in a professional athletic environment."
            className="w-full bg-[#111] border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-[#00f0ff] transition-all"
          />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <label className="block text-sm font-medium text-gray-400 mb-2">Primary Button Text</label>
            <input 
              type="text" 
              defaultValue="Book Badminton Court"
              className="w-full bg-[#111] border border-white/10 rounded-xl px-4 py-3 text-[#00f0ff] focus:outline-none focus:border-[#00f0ff] transition-all"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-400 mb-2">Primary Button Link</label>
            <input 
              type="text" 
              defaultValue="#booking"
              className="w-full bg-[#111] border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-[#00f0ff] transition-all"
            />
          </div>
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-400 mb-4">Background Media</label>
          <div className="border-2 border-dashed border-white/10 rounded-2xl p-8 flex flex-col items-center justify-center bg-[#111] hover:border-[#00f0ff]/50 transition-colors cursor-pointer group">
            <div className="w-16 h-16 rounded-full bg-white/5 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
              <ImageIcon className="text-gray-400 w-8 h-8 group-hover:text-[#00f0ff] transition-colors" />
            </div>
            <p className="text-white font-medium mb-1">Click to upload new image or video</p>
            <p className="text-gray-500 text-sm">PNG, JPG, or MP4 up to 50MB</p>
            
            <div className="mt-6 flex items-center gap-4 bg-white/5 px-4 py-2 rounded-lg border border-white/10">
              <span className="text-sm text-gray-300">Current: <strong>/images/hero.png</strong></span>
            </div>
          </div>
        </div>

        <div className="pt-6 border-t border-white/10 flex justify-end">
          <button className="bg-[#00f0ff] hover:bg-[#00d0dd] text-black font-bold py-3 px-8 rounded-xl flex items-center gap-2 transition-all hover:shadow-[0_0_20px_rgba(0,240,255,0.4)]">
            <Save size={20} />
            Save Changes
          </button>
        </div>
      </div>
    </div>
  );
}
