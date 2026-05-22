"use client";
import { useState } from "react";
import { motion } from "framer-motion";
import { Send } from "lucide-react";

export default function EnquiryForm() {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    sport: "Badminton",
    plan: "Hourly",
    message: ""
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const text = `Hi DSC! I'm ${formData.name}.%0A*Phone:* ${formData.phone}%0A*Interested In:* ${formData.sport}%0A*Plan/Slot:* ${formData.plan}%0A*Message:* ${formData.message}`;
    window.open(`https://wa.me/916299973147?text=${text}`, "_blank");
  };

  return (
    <section id="contact" className="py-24 bg-[#0a0a0a] relative">
      <div className="container mx-auto px-6 max-w-4xl">
        <div className="glass p-8 md:p-12 rounded-3xl relative overflow-hidden">
          {/* Decorative glow */}
          <div className="absolute top-0 right-0 w-64 h-64 bg-[#00f0ff] mix-blend-screen filter blur-[100px] opacity-10"></div>
          
          <div className="text-center mb-10 relative z-10">
            <h2 className="text-3xl md:text-5xl font-black text-white mb-4">
              ENQUIRE / <span className="text-[#00f0ff]">BOOK</span>
            </h2>
            <p className="text-gray-400">Fill the form below and we'll connect with you on WhatsApp instantly.</p>
          </div>

          <form onSubmit={handleSubmit} className="relative z-10 space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-medium text-gray-400 mb-2">Your Name</label>
                <input 
                  type="text" 
                  required
                  className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-[#00f0ff] transition-colors"
                  placeholder="John Doe"
                  value={formData.name}
                  onChange={(e) => setFormData({...formData, name: e.target.value})}
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-400 mb-2">Phone Number</label>
                <input 
                  type="tel" 
                  required
                  className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-[#00f0ff] transition-colors"
                  placeholder="+91 00000 00000"
                  value={formData.phone}
                  onChange={(e) => setFormData({...formData, phone: e.target.value})}
                />
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-medium text-gray-400 mb-2">Sport</label>
                <select 
                  className="w-full bg-[#121212] border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-[#00f0ff] transition-colors appearance-none"
                  value={formData.sport}
                  onChange={(e) => setFormData({...formData, sport: e.target.value})}
                >
                  <option>Badminton</option>
                  <option>Skate Park</option>
                  <option>Fitness</option>
                  <option>Other</option>
                </select>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-400 mb-2">Preferred Plan / Slot</label>
                <select 
                  className="w-full bg-[#121212] border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-[#00f0ff] transition-colors appearance-none"
                  value={formData.plan}
                  onChange={(e) => setFormData({...formData, plan: e.target.value})}
                >
                  <option>Hourly (₹200/hr)</option>
                  <option>Single Player (₹1500/mo)</option>
                  <option>Full Team (₹4500/mo)</option>
                  <option>Not Sure</option>
                </select>
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-400 mb-2">Message (Optional)</label>
              <textarea 
                rows={4}
                className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-[#00f0ff] transition-colors"
                placeholder="Any specific queries or preferred timing?"
                value={formData.message}
                onChange={(e) => setFormData({...formData, message: e.target.value})}
              ></textarea>
            </div>

            <motion.button
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              type="submit"
              className="w-full py-4 bg-gradient-to-r from-[#00f0ff] to-[#0080ff] text-black font-bold text-lg rounded-xl flex items-center justify-center gap-2 hover:shadow-[0_0_20px_rgba(0,240,255,0.4)] transition-all"
            >
              <span>Submit & WhatsApp</span>
              <Send className="w-5 h-5" />
            </motion.button>
          </form>
        </div>
      </div>
    </section>
  );
}
