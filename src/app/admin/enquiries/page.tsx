"use client";
import { useState } from "react";
import { motion } from "framer-motion";
import { Search, Filter, Download, MessageSquare, ExternalLink } from "lucide-react";

const mockEnquiries = [
  { id: "ENQ-1042", name: "Kiran Patel", phone: "+91 9876543210", sport: "Badminton", message: "Need morning slot for 2 people.", status: "Pending", date: "Today, 10:30 AM" },
  { id: "ENQ-1041", name: "Aditya Verma", phone: "+91 8765432109", sport: "Skate Park", message: "Do you provide safety gear?", status: "Contacted", date: "Yesterday, 04:15 PM" },
  { id: "ENQ-1040", name: "Priya Sharma", phone: "+91 7654321098", sport: "Calisthenics", message: "When is this opening?", status: "Converted", date: "22 May, 11:00 AM" },
];

export default function EnquiriesManagement() {
  const [searchTerm, setSearchTerm] = useState("");

  return (
    <div className="max-w-7xl mx-auto space-y-8">
      <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
        <div>
          <h1 className="text-3xl font-black text-white">Enquiry CRM</h1>
          <p className="text-gray-400 mt-1">Manage leads, messages, and contact requests.</p>
        </div>
        <button className="bg-white/5 hover:bg-white/10 border border-white/10 text-white font-bold py-2.5 px-6 rounded-xl flex items-center gap-2 transition-all">
          <Download size={20} />
          Export CSV
        </button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
        <div className="glass p-6 rounded-2xl border border-white/5 border-l-4 border-l-[#ff00e5]">
          <p className="text-gray-400 text-sm font-medium mb-1">Pending Enquiries</p>
          <h3 className="text-3xl font-black text-white">14</h3>
        </div>
        <div className="glass p-6 rounded-2xl border border-white/5 border-l-4 border-l-[#ffe600]">
          <p className="text-gray-400 text-sm font-medium mb-1">Contacted Today</p>
          <h3 className="text-3xl font-black text-white">8</h3>
        </div>
        <div className="glass p-6 rounded-2xl border border-white/5 border-l-4 border-l-[#00f0ff]">
          <p className="text-gray-400 text-sm font-medium mb-1">Conversion Rate</p>
          <h3 className="text-3xl font-black text-white">42%</h3>
        </div>
      </div>

      <div className="glass rounded-3xl p-6 border border-white/5">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 mb-6">
          <div className="relative w-full sm:w-96">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-500 w-5 h-5" />
            <input 
              type="text" 
              placeholder="Search leads..." 
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full bg-[#111] border border-white/10 rounded-xl py-2.5 pl-10 pr-4 text-white focus:outline-none focus:border-[#00f0ff] transition-all"
            />
          </div>
          <button className="flex items-center gap-2 px-4 py-2.5 bg-[#111] border border-white/10 rounded-xl text-gray-300 hover:text-white transition-colors w-full sm:w-auto justify-center">
            <Filter size={18} />
            <span>Filter by Sport</span>
          </button>
        </div>

        <div className="space-y-4">
          {mockEnquiries.map((enq, i) => (
            <motion.div 
              key={enq.id}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: i * 0.1 }}
              className="p-5 rounded-2xl bg-[#111] border border-white/5 hover:border-white/20 transition-all flex flex-col lg:flex-row gap-6 justify-between lg:items-center"
            >
              <div className="flex-1 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                <div>
                  <p className="text-gray-500 text-xs uppercase tracking-wider mb-1">{enq.date}</p>
                  <h4 className="text-white font-bold text-lg">{enq.name}</h4>
                  <p className="text-[#00f0ff] text-sm">{enq.phone}</p>
                </div>
                <div>
                  <p className="text-gray-500 text-xs uppercase tracking-wider mb-1">Interested In</p>
                  <span className="bg-white/10 text-white px-3 py-1 rounded-full text-sm font-medium border border-white/10 inline-block mt-1">
                    {enq.sport}
                  </span>
                </div>
                <div className="lg:col-span-2">
                  <p className="text-gray-500 text-xs uppercase tracking-wider mb-1">Message</p>
                  <p className="text-gray-300 text-sm italic border-l-2 border-[#00f0ff] pl-3 py-1">"{enq.message}"</p>
                </div>
              </div>

              <div className="flex items-center gap-4 lg:w-64 lg:justify-end border-t lg:border-t-0 border-white/10 pt-4 lg:pt-0">
                <select className="bg-black border border-white/10 text-white text-sm rounded-lg focus:ring-[#00f0ff] focus:border-[#00f0ff] block w-full p-2.5">
                  <option value="Pending">Pending</option>
                  <option value="Contacted">Contacted</option>
                  <option value="Converted">Converted</option>
                </select>
                
                <a 
                  href={`https://wa.me/${enq.phone.replace(/[^0-9]/g, '')}`} 
                  target="_blank" 
                  rel="noreferrer"
                  className="w-10 h-10 rounded-full bg-[#25D366]/10 text-[#25D366] flex items-center justify-center hover:bg-[#25D366] hover:text-black transition-colors flex-shrink-0"
                  title="Reply on WhatsApp"
                >
                  <MessageSquare size={18} />
                </a>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}
