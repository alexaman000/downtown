"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Menu, X, Dumbbell } from "lucide-react";
import Link from "next/link";

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "About", href: "#about" },
    { name: "Sports", href: "#sports" },
    { name: "Booking", href: "#booking" },
    { name: "Coach", href: "#coach" },
    { name: "Facilities", href: "#facilities" },
    { name: "Gallery", href: "#gallery" },
  ];

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className={`fixed w-full z-50 transition-all duration-300 ${
        isScrolled ? "glass shadow-lg py-4" : "bg-transparent py-6"
      }`}
    >
      <div className="container mx-auto px-6 flex justify-between items-center">
        <Link href="/" className="flex items-center gap-2 group">
          <Dumbbell className="w-8 h-8 text-[#00f0ff] group-hover:text-[#ffe600] transition-colors" />
          <span className="text-2xl font-bold tracking-wider text-white">
            DSC<span className="text-[#00f0ff]">.</span>
          </span>
        </Link>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              className="text-sm font-medium text-gray-300 hover:text-[#00f0ff] hover:text-glow transition-all"
            >
              {link.name}
            </Link>
          ))}
          <Link
            href="#booking"
            className="px-6 py-2 bg-[#00f0ff] text-black font-bold rounded-full hover:bg-[#ffe600] hover:box-glow transition-all duration-300 transform hover:scale-105"
          >
            Book Now
          </Link>
        </div>

        {/* Mobile Toggle */}
        <button
          className="md:hidden text-white"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X className="w-8 h-8" /> : <Menu className="w-8 h-8" />}
        </button>
      </div>

      {/* Mobile Nav */}
      {isOpen && (
        <motion.div
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: "auto" }}
          className="md:hidden glass absolute top-full left-0 w-full flex flex-col items-center py-6 gap-6 border-t border-white/10"
        >
          {navLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              onClick={() => setIsOpen(false)}
              className="text-lg font-medium text-white hover:text-[#00f0ff]"
            >
              {link.name}
            </Link>
          ))}
          <Link
            href="#booking"
            onClick={() => setIsOpen(false)}
            className="px-8 py-3 bg-[#00f0ff] text-black font-bold rounded-full hover:bg-[#ffe600] transition-all"
          >
            Book Now
          </Link>
        </motion.div>
      )}
    </motion.nav>
  );
}
