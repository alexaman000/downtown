"use client";
import { useState } from "react";
import { motion } from "framer-motion";
import { Search, Plus, Filter, Calendar, Edit, Trash2 } from "lucide-react";

const mockBookings = [
  { id: "BOK-001", user: "Rohan Sharma", sport: "Badminton", slot: "06:00 AM - 07:00 AM", date: "24 May 2026", status: "Confirmed", amount: "₹200" },
  { id: "BOK-002", user: "Aisha Khan", sport: "Badminton", slot: "07:00 AM - 08:00 AM", date: "24 May 2026", status: "Pending", amount: "₹200" },
  { id: "BOK-003", user: "Vikram Singh", sport: "Skate Park", slot: "Monthly Pass", date: "24 May 2026", status: "Confirmed", amount: "₹1500" },
  { id: "BOK-004", user: "Neha Gupta", sport: "Badminton", slot: "08:00 AM - 09:00 AM", date: "25 May 2026", status: "Cancelled", amount: "₹200" },
  { id: "BOK-005", user: "Rishabh Jain", sport: "Table Tennis", slot: "18:00 PM - 19:00 PM", date: "25 May 2026", status: "Confirmed", amount: "₹150" },
];

export default function BookingsManagement() {
  const [searchTerm, setSearchTerm] = useState("");

  return (
    <div className="max-w-7xl mx-auto space-y-8">
      <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
        <div>
          <h1 className="text-3xl font-black text-white">Bookings Management</h1>
          <p className="text-gray-400 mt-1">Manage court reservations and monthly memberships.</p>
        </div>
        <button className="bg-[#00f0ff] hover:bg-[#00d0dd] text-black font-bold py-2.5 px-6 rounded-xl flex items-center gap-2 transition-all hover:shadow-[0_0_20px_rgba(0,240,255,0.4)]">
          <Plus size={20} />
          New Booking
        </button>
      </div>

      <div className="glass rounded-3xl p-6 border border-white/5">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 mb-6">
          <div className="relative w-full sm:w-96">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-500 w-5 h-5" />
            <input 
              type="text" 
              placeholder="Search by name, ID, or sport..." 
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full bg-[#111] border border-white/10 rounded-xl py-2.5 pl-10 pr-4 text-white focus:outline-none focus:border-[#00f0ff] transition-all"
            />
          </div>
          <div className="flex gap-2 w-full sm:w-auto">
            <button className="flex items-center gap-2 px-4 py-2.5 bg-[#111] border border-white/10 rounded-xl text-gray-300 hover:text-white transition-colors flex-1 sm:flex-none justify-center">
              <Calendar size={18} />
              <span className="hidden sm:inline">Date</span>
            </button>
            <button className="flex items-center gap-2 px-4 py-2.5 bg-[#111] border border-white/10 rounded-xl text-gray-300 hover:text-white transition-colors flex-1 sm:flex-none justify-center">
              <Filter size={18} />
              <span className="hidden sm:inline">Filters</span>
            </button>
          </div>
        </div>

        <div className="overflow-x-auto">
          <table className="w-full text-left border-collapse">
            <thead>
              <tr className="border-b border-white/10">
                <th className="py-4 px-4 text-sm font-bold text-gray-400 uppercase tracking-wider">Booking ID</th>
                <th className="py-4 px-4 text-sm font-bold text-gray-400 uppercase tracking-wider">User</th>
                <th className="py-4 px-4 text-sm font-bold text-gray-400 uppercase tracking-wider">Sport</th>
                <th className="py-4 px-4 text-sm font-bold text-gray-400 uppercase tracking-wider">Date & Time</th>
                <th className="py-4 px-4 text-sm font-bold text-gray-400 uppercase tracking-wider">Amount</th>
                <th className="py-4 px-4 text-sm font-bold text-gray-400 uppercase tracking-wider">Status</th>
                <th className="py-4 px-4 text-sm font-bold text-gray-400 uppercase tracking-wider text-right">Actions</th>
              </tr>
            </thead>
            <tbody>
              {mockBookings.map((booking, i) => (
                <motion.tr 
                  key={booking.id}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.05 }}
                  className="border-b border-white/5 hover:bg-white/5 transition-colors group"
                >
                  <td className="py-4 px-4 text-white font-medium">{booking.id}</td>
                  <td className="py-4 px-4 text-white">{booking.user}</td>
                  <td className="py-4 px-4 text-gray-300">{booking.sport}</td>
                  <td className="py-4 px-4">
                    <div className="text-white">{booking.date}</div>
                    <div className="text-gray-500 text-sm">{booking.slot}</div>
                  </td>
                  <td className="py-4 px-4 text-white font-medium">{booking.amount}</td>
                  <td className="py-4 px-4">
                    <span className={`px-3 py-1 rounded-full text-xs font-bold ${
                      booking.status === 'Confirmed' ? 'bg-[#00ff88]/10 text-[#00ff88]' : 
                      booking.status === 'Pending' ? 'bg-[#ffe600]/10 text-[#ffe600]' : 
                      'bg-red-500/10 text-red-500'
                    }`}>
                      {booking.status}
                    </span>
                  </td>
                  <td className="py-4 px-4 text-right">
                    <div className="flex items-center justify-end gap-2 opacity-0 group-hover:opacity-100 transition-opacity">
                      <button className="p-2 hover:bg-white/10 rounded-lg text-gray-400 hover:text-[#00f0ff] transition-colors">
                        <Edit size={16} />
                      </button>
                      <button className="p-2 hover:bg-white/10 rounded-lg text-gray-400 hover:text-red-500 transition-colors">
                        <Trash2 size={16} />
                      </button>
                    </div>
                  </td>
                </motion.tr>
              ))}
            </tbody>
          </table>
        </div>

        <div className="mt-6 flex items-center justify-between text-sm text-gray-400">
          <div>Showing 1 to 5 of 24 entries</div>
          <div className="flex gap-2">
            <button className="px-3 py-1 border border-white/10 rounded hover:bg-white/10 disabled:opacity-50">Prev</button>
            <button className="px-3 py-1 bg-[#00f0ff]/20 text-[#00f0ff] border border-[#00f0ff]/50 rounded">1</button>
            <button className="px-3 py-1 border border-white/10 rounded hover:bg-white/10">2</button>
            <button className="px-3 py-1 border border-white/10 rounded hover:bg-white/10">3</button>
            <button className="px-3 py-1 border border-white/10 rounded hover:bg-white/10">Next</button>
          </div>
        </div>
      </div>
    </div>
  );
}
