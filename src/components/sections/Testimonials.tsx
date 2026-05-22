"use client";
import { motion } from "framer-motion";
import { Quote } from "lucide-react";

const testimonials = [
  {
    name: "Rahul Singh",
    role: "Professional Player",
    text: "The best badminton courts in Ranchi. The lighting is perfect, and the premium environment makes every session productive.",
    accent: "text-[#00f0ff]"
  },
  {
    name: "Aman Verma",
    role: "Skateboarder",
    text: "Finally a safe and well-equipped indoor skate park in the city! The community here is fantastic.",
    accent: "text-[#ffe600]"
  },
  {
    name: "Priya Sharma",
    role: "Badminton Enthusiast",
    text: "Savan Sir's coaching has completely transformed my game. The facilities are top-notch and luxurious.",
    accent: "text-[#ff00e5]"
  }
];

export default function Testimonials() {
  return (
    <section className="py-24 bg-[#050505] relative overflow-hidden">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-black text-white mb-4"
          >
            PLAYER <span className="text-[#00f0ff]">REVIEWS</span>
          </motion.h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2 }}
              className="glass p-8 rounded-3xl relative hover:-translate-y-2 transition-transform duration-300"
            >
              <Quote className={`w-12 h-12 ${testimonial.accent} opacity-20 absolute top-6 right-6`} />
              <p className="text-gray-300 text-lg italic mb-8 relative z-10">"{testimonial.text}"</p>
              <div>
                <h4 className="text-white font-bold text-xl">{testimonial.name}</h4>
                <p className={`text-sm font-semibold ${testimonial.accent}`}>{testimonial.role}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
