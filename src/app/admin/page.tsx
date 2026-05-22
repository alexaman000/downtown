"use client";
import { motion } from "framer-motion";
import { Users, CalendarCheck, TrendingUp, Mail, ArrowUpRight } from "lucide-react";
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';

const data = [
  { name: 'Mon', bookings: 4000, enquiries: 2400 },
  { name: 'Tue', bookings: 3000, enquiries: 1398 },
  { name: 'Wed', bookings: 2000, enquiries: 9800 },
  { name: 'Thu', bookings: 2780, enquiries: 3908 },
  { name: 'Fri', bookings: 1890, enquiries: 4800 },
  { name: 'Sat', bookings: 2390, enquiries: 3800 },
  { name: 'Sun', bookings: 3490, enquiries: 4300 },
];

export default function AdminDashboard() {
  const stats = [
    { title: "Total Bookings", value: "2,451", trend: "+12.5%", icon: <CalendarCheck />, color: "from-[#00f0ff] to-blue-600" },
    { title: "Active Members", value: "1,204", trend: "+5.2%", icon: <Users />, color: "from-[#ffe600] to-orange-500" },
    { title: "New Enquiries", value: "342", trend: "+18.1%", icon: <Mail />, color: "from-[#ff00e5] to-purple-600" },
    { title: "Revenue", value: "₹4.5L", trend: "+24.5%", icon: <TrendingUp />, color: "from-[#00ff88] to-green-600" },
  ];

  return (
    <div className="max-w-7xl mx-auto space-y-8">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-black text-white">Dashboard Overview</h1>
          <p className="text-gray-400 mt-1">Welcome back, here is what's happening at DSC.</p>
        </div>
      </div>

      {/* Stats Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {stats.map((stat, i) => (
          <motion.div
            key={stat.title}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.1 }}
            className="glass rounded-2xl p-6 border border-white/5 relative overflow-hidden group hover:border-white/20 transition-colors"
          >
            <div className={`absolute top-0 right-0 w-32 h-32 bg-gradient-to-br ${stat.color} rounded-full filter blur-[50px] opacity-20 group-hover:opacity-40 transition-opacity`}></div>
            <div className="flex justify-between items-start mb-4">
              <div className="p-3 bg-white/5 rounded-xl text-white">
                {stat.icon}
              </div>
              <span className="flex items-center text-xs font-bold text-[#00ff88] bg-[#00ff88]/10 px-2 py-1 rounded-full">
                {stat.trend} <ArrowUpRight size={14} className="ml-1" />
              </span>
            </div>
            <div>
              <h3 className="text-3xl font-black text-white mb-1">{stat.value}</h3>
              <p className="text-gray-400 text-sm font-medium">{stat.title}</p>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Charts Section */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          className="lg:col-span-2 glass rounded-2xl p-6 border border-white/5"
        >
          <h2 className="text-xl font-bold text-white mb-6">Activity Analytics</h2>
          <div className="h-[300px] w-full">
            <ResponsiveContainer width="100%" height="100%">
              <AreaChart data={data} margin={{ top: 10, right: 30, left: 0, bottom: 0 }}>
                <defs>
                  <linearGradient id="colorBookings" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="5%" stopColor="#00f0ff" stopOpacity={0.8}/>
                    <stop offset="95%" stopColor="#00f0ff" stopOpacity={0}/>
                  </linearGradient>
                  <linearGradient id="colorEnquiries" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="5%" stopColor="#ff00e5" stopOpacity={0.8}/>
                    <stop offset="95%" stopColor="#ff00e5" stopOpacity={0}/>
                  </linearGradient>
                </defs>
                <XAxis dataKey="name" stroke="#666" />
                <YAxis stroke="#666" />
                <CartesianGrid strokeDasharray="3 3" stroke="#333" vertical={false} />
                <Tooltip 
                  contentStyle={{ backgroundColor: '#111', borderColor: '#333', borderRadius: '12px' }}
                  itemStyle={{ color: '#fff' }}
                />
                <Area type="monotone" dataKey="bookings" stroke="#00f0ff" fillOpacity={1} fill="url(#colorBookings)" />
                <Area type="monotone" dataKey="enquiries" stroke="#ff00e5" fillOpacity={1} fill="url(#colorEnquiries)" />
              </AreaChart>
            </ResponsiveContainer>
          </div>
        </motion.div>

        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
          className="glass rounded-2xl p-6 border border-white/5"
        >
          <h2 className="text-xl font-bold text-white mb-6">Recent Enquiries</h2>
          <div className="space-y-4">
            {[1, 2, 3, 4, 5].map((i) => (
              <div key={i} className="flex items-center justify-between p-3 rounded-xl hover:bg-white/5 transition-colors cursor-pointer border border-transparent hover:border-white/5">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-gradient-to-br from-gray-800 to-black border border-white/10 flex items-center justify-center text-white font-bold text-sm">
                    {String.fromCharCode(64 + i)}
                  </div>
                  <div>
                    <h4 className="text-white text-sm font-bold">User {i}</h4>
                    <p className="text-gray-400 text-xs">Interested in Badminton</p>
                  </div>
                </div>
                <div className="text-xs text-[#00f0ff] font-medium bg-[#00f0ff]/10 px-2 py-1 rounded-full">
                  New
                </div>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  );
}
