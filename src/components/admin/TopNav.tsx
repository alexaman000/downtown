"use client";
import { Bell, Search } from "lucide-react";

export default function TopNav() {
  return (
    <header className="h-20 bg-[#050505] border-b border-white/10 px-8 flex items-center justify-between sticky top-0 z-40">
      <div className="flex-1 max-w-xl">
        <div className="relative">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-500 w-5 h-5" />
          <input 
            type="text" 
            placeholder="Search bookings, enquiries, or content..." 
            className="w-full bg-[#111] border border-white/10 rounded-full py-2.5 pl-10 pr-4 text-white focus:outline-none focus:border-[#00f0ff] transition-all"
          />
        </div>
      </div>

      <div className="flex items-center gap-6">
        <button className="relative text-gray-400 hover:text-white transition-colors">
          <Bell className="w-6 h-6" />
          <span className="absolute top-0 right-0 w-2.5 h-2.5 bg-[#ff00e5] rounded-full border-2 border-[#050505]"></span>
        </button>

        <div className="flex items-center gap-3 border-l border-white/10 pl-6">
          <div className="text-right hidden sm:block">
            <p className="text-white text-sm font-bold">Admin User</p>
            <p className="text-[#00f0ff] text-xs">Super Admin</p>
          </div>
          <div className="w-10 h-10 rounded-full bg-gradient-to-tr from-[#00f0ff] to-[#ff00e5] p-0.5">
            <div className="w-full h-full rounded-full bg-black flex items-center justify-center">
              <span className="text-white font-bold text-lg">A</span>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
