"use client";
import { motion } from "framer-motion";
import { Save, Globe, Search, Tag, Server } from "lucide-react";

export default function SEOSettings() {
  return (
    <div className="max-w-5xl mx-auto space-y-8">
      <div>
        <h1 className="text-3xl font-black text-white">SEO & Meta Settings</h1>
        <p className="text-gray-400 mt-1">Optimize your website for Google Search and Local SEO.</p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        <div className="lg:col-span-2 space-y-6">
          <div className="glass rounded-3xl p-8 border border-white/5 space-y-6">
            <div className="flex items-center gap-3 mb-6 border-b border-white/10 pb-4">
              <Globe className="text-[#00f0ff] w-6 h-6" />
              <h2 className="text-xl font-bold text-white">Global Meta Tags</h2>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-400 mb-2">Website Meta Title</label>
              <input 
                type="text" 
                defaultValue="Downtown Sports Club | Premium Indoor Sports in Ranchi"
                className="w-full bg-[#111] border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-[#00f0ff] transition-all"
              />
              <p className="text-xs text-gray-500 mt-2">Optimal length: 50-60 characters</p>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-400 mb-2">Meta Description</label>
              <textarea 
                rows={3}
                defaultValue="Experience world-class badminton courts, skate park, and modern fitness facilities at DSC. Book your indoor sports arena in Ranchi today."
                className="w-full bg-[#111] border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-[#00f0ff] transition-all"
              />
              <p className="text-xs text-gray-500 mt-2">Optimal length: 150-160 characters</p>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-400 mb-2">Keywords (Comma separated)</label>
              <textarea 
                rows={2}
                defaultValue="Best badminton court in Ranchi, Indoor sports Ranchi, Badminton coaching Ranchi, DSC Ranchi, Downtown Sports Club Ranchi"
                className="w-full bg-[#111] border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-[#00f0ff] transition-all"
              />
            </div>
          </div>

          <div className="glass rounded-3xl p-8 border border-white/5 space-y-6">
            <div className="flex items-center gap-3 mb-6 border-b border-white/10 pb-4">
              <Search className="text-[#ffe600] w-6 h-6" />
              <h2 className="text-xl font-bold text-white">Google Schema & Crawling</h2>
            </div>
            
            <div className="flex items-center justify-between p-4 bg-[#111] rounded-xl border border-white/10">
              <div>
                <p className="text-white font-bold">Generate sitemap.xml automatically</p>
                <p className="text-gray-500 text-sm">Helps search engines index your pages</p>
              </div>
              <div className="w-12 h-6 bg-[#00f0ff] rounded-full relative cursor-pointer shadow-[0_0_15px_rgba(0,240,255,0.3)]">
                <div className="w-5 h-5 bg-black rounded-full absolute top-0.5 right-0.5"></div>
              </div>
            </div>

            <div className="flex items-center justify-between p-4 bg-[#111] rounded-xl border border-white/10">
              <div>
                <p className="text-white font-bold">Local Business Schema Markup</p>
                <p className="text-gray-500 text-sm">Improves Google Maps visibility in Ranchi</p>
              </div>
              <div className="w-12 h-6 bg-[#00f0ff] rounded-full relative cursor-pointer shadow-[0_0_15px_rgba(0,240,255,0.3)]">
                <div className="w-5 h-5 bg-black rounded-full absolute top-0.5 right-0.5"></div>
              </div>
            </div>
          </div>
        </div>

        <div className="space-y-6">
          <div className="glass rounded-3xl p-6 border border-white/5 border-t-4 border-t-[#00f0ff]">
            <h3 className="font-bold text-white mb-4 flex items-center gap-2">
              <Server size={18} className="text-[#00f0ff]" /> Live Preview
            </h3>
            <div className="bg-white p-4 rounded-xl">
              <p className="text-[#1a0dab] text-lg font-normal hover:underline cursor-pointer truncate">
                Downtown Sports Club | Premium Indoor Sports in Ranchi
              </p>
              <p className="text-[#006621] text-sm mb-1 truncate">https://downtownsports.club</p>
              <p className="text-[#545454] text-sm line-clamp-2">
                Experience world-class badminton courts, skate park, and modern fitness facilities at DSC. Book your indoor sports arena in Ranchi today.
              </p>
            </div>
          </div>

          <div className="glass rounded-3xl p-6 border border-white/5">
            <h3 className="font-bold text-white mb-4 flex items-center gap-2">
              <Tag size={18} className="text-gray-400" /> Open Graph Image
            </h3>
            <div className="w-full aspect-video bg-gray-900 rounded-xl overflow-hidden border border-white/10 relative cursor-pointer group">
              <img src="/images/hero.png" alt="OG Preview" className="w-full h-full object-cover group-hover:scale-105 transition-transform" />
              <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center backdrop-blur-sm">
                <span className="text-white font-bold bg-white/10 px-4 py-2 rounded-lg border border-white/20">Change Image</span>
              </div>
            </div>
            <p className="text-xs text-gray-500 mt-3 text-center">Image displayed when sharing link on WhatsApp/Facebook</p>
          </div>

          <button className="w-full bg-[#00f0ff] hover:bg-[#00d0dd] text-black font-bold py-4 px-8 rounded-xl flex items-center justify-center gap-2 transition-all hover:shadow-[0_0_20px_rgba(0,240,255,0.4)]">
            <Save size={20} />
            Save SEO Settings
          </button>
        </div>
      </div>
    </div>
  );
}
