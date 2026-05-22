"use client";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowRight, X, Send } from "lucide-react";
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
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedSport, setSelectedSport] = useState("");
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    message: ""
  });

  const handleOpenModal = (sportTitle: string) => {
    setSelectedSport(sportTitle);
    setIsModalOpen(true);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const text = `Hi DSC! I'm ${formData.name}.%0A*Phone:* ${formData.phone}%0A*Interested In Booking:* ${selectedSport}%0A*Message:* ${formData.message}`;
    window.open(`https://wa.me/916299973147?text=${text}`, "_blank");
    setIsModalOpen(false);
  };

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
              onClick={() => handleOpenModal(sport.title)}
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
                  <span>Book Now</span>
                  <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-2 transition-transform" />
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Booking Modal */}
      <AnimatePresence>
        {isModalOpen && (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-sm p-4"
          >
            <motion.div 
              initial={{ scale: 0.9, y: 20 }}
              animate={{ scale: 1, y: 0 }}
              exit={{ scale: 0.9, y: 20 }}
              className="bg-[#121212] border border-white/10 rounded-3xl p-8 max-w-md w-full relative z-50"
            >
              <button 
                onClick={() => setIsModalOpen(false)}
                className="absolute top-6 right-6 text-gray-400 hover:text-white transition-colors"
              >
                <X className="w-6 h-6" />
              </button>

              <h3 className="text-2xl font-black text-white mb-2">BOOK <span className="text-[#00f0ff] uppercase">{selectedSport}</span></h3>
              <p className="text-gray-400 mb-6 text-sm">Please fill your details below to confirm your booking.</p>

              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-gray-400 mb-1">Your Name</label>
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
                  <label className="block text-sm font-medium text-gray-400 mb-1">Phone Number</label>
                  <input 
                    type="tel" 
                    required
                    className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-[#00f0ff] transition-colors"
                    placeholder="+91 00000 00000"
                    value={formData.phone}
                    onChange={(e) => setFormData({...formData, phone: e.target.value})}
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-400 mb-1">Message (Optional)</label>
                  <textarea 
                    rows={3}
                    className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-[#00f0ff] transition-colors"
                    placeholder="Preferred timing?"
                    value={formData.message}
                    onChange={(e) => setFormData({...formData, message: e.target.value})}
                  ></textarea>
                </div>

                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  type="submit"
                  className="w-full py-4 mt-4 bg-gradient-to-r from-[#00f0ff] to-[#0080ff] text-black font-bold text-lg rounded-xl flex items-center justify-center gap-2 hover:shadow-[0_0_20px_rgba(0,240,255,0.4)] transition-all"
                >
                  <span>Confirm & WhatsApp</span>
                  <Send className="w-5 h-5" />
                </motion.button>
              </form>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
