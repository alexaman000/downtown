import Link from "next/link";
import { Camera as Instagram, MapPin, Phone, Mail, Dumbbell } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-black pt-20 pb-10 border-t border-white/10 relative overflow-hidden">
      {/* Decorative glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-3/4 h-1 bg-gradient-to-r from-transparent via-[#00f0ff] to-transparent opacity-30"></div>
      
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
          <div className="col-span-1 md:col-span-2">
            <Link href="/" className="flex items-center gap-2 mb-6">
              <Dumbbell className="w-8 h-8 text-[#00f0ff]" />
              <span className="text-3xl font-bold tracking-wider text-white">
                DSC<span className="text-[#00f0ff]">.</span>
              </span>
            </Link>
            <p className="text-gray-400 mb-6 max-w-md">
              Ranchi's Premium Indoor Sports Destination. Experience world-class badminton courts, a modern skate park, and a community of passionate sports enthusiasts.
            </p>
            <div className="flex items-center gap-4">
              <a href="https://www.instagram.com/downtown_indoor_playground?igsh=bHpvdGx6bTF3NHg1&utm_source=qr" target="_blank" rel="noreferrer" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center text-white hover:bg-[#ff00e5] hover:text-white transition-all hover:box-glow">
                <Instagram className="w-5 h-5" />
              </a>
              <a href="https://wa.me/916299973147" target="_blank" rel="noreferrer" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center text-white hover:bg-[#25D366] hover:text-white transition-all hover:box-glow">
                <Phone className="w-5 h-5" />
              </a>
            </div>
          </div>

          <div>
            <h3 className="text-white font-bold text-lg mb-6">Quick Links</h3>
            <ul className="space-y-4">
              {['About Us', 'Sports', 'Booking', 'Coach', 'Facilities', 'Gallery'].map((item) => (
                <li key={item}>
                  <Link href={`#${item.toLowerCase().replace(' ', '-')}`} className="text-gray-400 hover:text-[#00f0ff] transition-colors">
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-white font-bold text-lg mb-6">Contact Us</h3>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-[#00f0ff] shrink-0 mt-1" />
                <span className="text-gray-400">Ranchi, Jharkhand, India</span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="w-5 h-5 text-[#00f0ff] shrink-0" />
                <a href="tel:+916299973147" className="text-gray-400 hover:text-white transition-colors">+91 6299973147</a>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="w-5 h-5 text-[#00f0ff] shrink-0" />
                <a href="mailto:disjointcloud@gmail.com" className="text-gray-400 hover:text-white transition-colors">disjointcloud@gmail.com</a>
              </li>
            </ul>
          </div>
        </div>

        <div className="pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-4">
          <div className="flex flex-col items-center md:items-start gap-1">
            <p className="text-gray-500 text-sm">
              © {new Date().getFullYear()} Downtown Sports Club. All rights reserved.
            </p>
            <p className="text-gray-600 text-xs mt-1">
              Built by WebbyBuilder | Developer Aman Raj | alexaman000r@gmail.com
            </p>
          </div>
          <div className="flex gap-6 text-sm text-gray-500">
            <Link href="#" className="hover:text-white transition-colors">Privacy Policy</Link>
            <Link href="#" className="hover:text-white transition-colors">Terms of Service</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
