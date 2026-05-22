"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";
import { motion } from "framer-motion";
import { Dumbbell, Lock, Mail, ArrowRight, Loader2 } from "lucide-react";
import Link from "next/link";

export default function AdminLogin() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const router = useRouter();

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError("");

    try {
      const res = await fetch("/api/auth/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, password }),
      });

      if (res.ok) {
        router.push("/admin");
      } else {
        const data = await res.json();
        setError(data.error || "Login failed");
      }
    } catch (err) {
      setError("Network error occurred");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-[#050505] flex items-center justify-center p-4 relative overflow-hidden">
      {/* Background decorations */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-[#00f0ff]/10 rounded-full mix-blend-screen filter blur-[150px]"></div>
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-[#ff00e5]/10 rounded-full mix-blend-screen filter blur-[150px]"></div>

      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="w-full max-w-md relative z-10"
      >
        <Link href="/" className="flex items-center justify-center gap-2 mb-10 hover:opacity-80 transition-opacity">
          <Dumbbell className="w-10 h-10 text-[#00f0ff]" />
          <span className="text-4xl font-black tracking-wider text-white">
            DSC<span className="text-[#00f0ff]">.</span>
          </span>
        </Link>

        <div className="glass rounded-3xl p-8 border border-white/10 shadow-2xl relative overflow-hidden">
          <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-[#00f0ff] to-[#ff00e5]"></div>
          
          <div className="text-center mb-8">
            <h1 className="text-2xl font-bold text-white mb-2">Admin Dashboard</h1>
            <p className="text-gray-400 text-sm">Secure login to manage DSC content</p>
          </div>

          {error && (
            <motion.div 
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              className="bg-red-500/10 border border-red-500/50 text-red-500 text-sm p-3 rounded-lg mb-6 text-center"
            >
              {error}
            </motion.div>
          )}

          <form onSubmit={handleLogin} className="space-y-5">
            <div>
              <label className="block text-sm font-medium text-gray-400 mb-1">Email Address</label>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <Mail className="h-5 w-5 text-gray-500" />
                </div>
                <input
                  type="email"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full bg-[#111] border border-white/10 rounded-xl py-3 pl-10 pr-4 text-white focus:outline-none focus:border-[#00f0ff] focus:ring-1 focus:ring-[#00f0ff] transition-all"
                  placeholder="admin@dscranchi.com"
                />
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-400 mb-1">Password</label>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <Lock className="h-5 w-5 text-gray-500" />
                </div>
                <input
                  type="password"
                  required
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="w-full bg-[#111] border border-white/10 rounded-xl py-3 pl-10 pr-4 text-white focus:outline-none focus:border-[#00f0ff] focus:ring-1 focus:ring-[#00f0ff] transition-all"
                  placeholder="••••••••"
                />
              </div>
            </div>

            <button
              type="submit"
              disabled={loading}
              className="w-full bg-[#00f0ff] hover:bg-[#00d0dd] text-black font-bold py-3 px-4 rounded-xl flex items-center justify-center gap-2 transition-all hover:shadow-[0_0_20px_rgba(0,240,255,0.4)] disabled:opacity-50 disabled:cursor-not-allowed mt-4"
            >
              {loading ? (
                <Loader2 className="w-5 h-5 animate-spin" />
              ) : (
                <>
                  <span>Sign In</span>
                  <ArrowRight className="w-5 h-5" />
                </>
              )}
            </button>
          </form>
        </div>
      </motion.div>
    </div>
  );
}
