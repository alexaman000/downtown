"use client";
import { useState } from "react";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { motion } from "framer-motion";
import { 
  LayoutDashboard, Image as ImageIcon, Activity, Calendar, 
  Users, Building2, MessageSquare, Mail, Instagram, 
  MapPin, Globe, Settings, BarChart3, LogOut, ChevronRight
} from "lucide-react";

export default function Sidebar() {
  const pathname = usePathname();
  const router = useRouter();
  const [isHovered, setIsHovered] = useState(false);

  const menuItems = [
    { name: "Dashboard", icon: <LayoutDashboard size={20} />, path: "/admin" },
    { name: "Hero Section", icon: <ImageIcon size={20} />, path: "/admin/hero" },
    { name: "Sports", icon: <Activity size={20} />, path: "/admin/sports" },
    { name: "Bookings", icon: <Calendar size={20} />, path: "/admin/bookings" },
    { name: "Coaches", icon: <Users size={20} />, path: "/admin/coaches" },
    { name: "Facilities", icon: <Building2 size={20} />, path: "/admin/facilities" },
    { name: "Gallery", icon: <ImageIcon size={20} />, path: "/admin/gallery" },
    { name: "Testimonials", icon: <MessageSquare size={20} />, path: "/admin/testimonials" },
    { name: "Enquiries", icon: <Mail size={20} />, path: "/admin/enquiries" },
    { name: "Instagram", icon: <Instagram size={20} />, path: "/admin/instagram" },
    { name: "Location", icon: <MapPin size={20} />, path: "/admin/location" },
    { name: "SEO Settings", icon: <Globe size={20} />, path: "/admin/seo" },
    { name: "Settings", icon: <Settings size={20} />, path: "/admin/settings" },
    { name: "Analytics", icon: <BarChart3 size={20} />, path: "/admin/analytics" },
  ];

  const handleLogout = async () => {
    await fetch("/api/auth/logout", { method: "POST" });
    router.push("/admin/login");
  };

  return (
    <div 
      className={`fixed inset-y-0 left-0 bg-[#0a0a0a] border-r border-white/10 flex flex-col transition-all duration-300 z-50 ${isHovered ? 'w-64' : 'w-20'}`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="p-6 flex items-center gap-3 border-b border-white/10 h-20">
        <div className="w-8 h-8 rounded-full bg-gradient-to-r from-[#00f0ff] to-[#ff00e5] flex-shrink-0 flex items-center justify-center font-bold text-black">
          D
        </div>
        <motion.span 
          initial={{ opacity: 0 }}
          animate={{ opacity: isHovered ? 1 : 0 }}
          className="font-bold text-white tracking-wider whitespace-nowrap overflow-hidden"
        >
          DSC ADMIN
        </motion.span>
      </div>

      <div className="flex-1 overflow-y-auto py-6 flex flex-col gap-2 px-3 custom-scrollbar">
        {menuItems.map((item) => {
          const isActive = pathname === item.path;
          return (
            <Link 
              key={item.name} 
              href={item.path}
              className={`flex items-center gap-4 px-3 py-3 rounded-xl transition-all ${
                isActive 
                  ? 'bg-gradient-to-r from-[#00f0ff]/20 to-transparent border-l-2 border-[#00f0ff] text-white shadow-[inset_0_0_20px_rgba(0,240,255,0.1)]' 
                  : 'text-gray-400 hover:text-white hover:bg-white/5'
              }`}
            >
              <div className="flex-shrink-0 relative">
                {item.icon}
                {isActive && (
                  <div className="absolute inset-0 blur-md bg-[#00f0ff] opacity-50 z-[-1]" />
                )}
              </div>
              <motion.span 
                initial={{ opacity: 0 }}
                animate={{ opacity: isHovered ? 1 : 0 }}
                className="font-medium whitespace-nowrap overflow-hidden flex-1"
              >
                {item.name}
              </motion.span>
              {isHovered && isActive && <ChevronRight size={16} className="text-[#00f0ff]" />}
            </Link>
          );
        })}
      </div>

      <div className="p-4 border-t border-white/10">
        <button 
          onClick={handleLogout}
          className="flex items-center gap-4 px-3 py-3 rounded-xl text-red-400 hover:bg-red-500/10 hover:text-red-300 w-full transition-all"
        >
          <LogOut size={20} className="flex-shrink-0" />
          <motion.span 
            initial={{ opacity: 0 }}
            animate={{ opacity: isHovered ? 1 : 0 }}
            className="font-medium whitespace-nowrap overflow-hidden"
          >
            Logout
          </motion.span>
        </button>
      </div>
    </div>
  );
}
