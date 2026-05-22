"use client";
import { motion } from "framer-motion";
import { Clock, Users, User, CheckCircle } from "lucide-react";

export default function BadmintonBooking() {
  const plans = [
    {
      title: "Hourly Booking",
      price: "₹200",
      period: "/ hour",
      icon: <Clock className="w-8 h-8 text-[#00f0ff]" />,
      features: ["Flexible timings", "Access to premium courts", "Equipment rental available", "Pay as you play"],
      popular: false,
    },
    {
      title: "Single Player Plan",
      price: "₹1500",
      period: "/ month",
      icon: <User className="w-8 h-8 text-[#ffe600]" />,
      features: ["Unlimited monthly access", "Join active games", "Locker facility included", "10% off pro-shop"],
      popular: true,
    },
    {
      title: "Full Team Court",
      price: "₹4500",
      period: "/ month",
      icon: <Users className="w-8 h-8 text-[#ff00e5]" />,
      features: ["Dedicated court for team", "Fixed daily slots", "Tournaments access", "Coaching consultation"],
      popular: false,
    }
  ];

  return (
    <section id="booking" className="py-24 bg-[#050505] relative">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-3/4 h-3/4 bg-[#00f0ff]/5 rounded-full blur-[120px] pointer-events-none"></div>
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-black text-white mb-4"
          >
            BADMINTON <span className="text-[#00f0ff]">PLANS</span>
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-gray-400 max-w-2xl mx-auto"
          >
            Morning slots available from 4 AM to 10 AM. Registration Charge: ₹500.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {plans.map((plan, index) => (
            <motion.div
              key={plan.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2, duration: 0.5 }}
              className={`relative glass rounded-3xl p-8 border transition-all duration-300 hover:-translate-y-2 hover:box-glow ${plan.popular ? 'border-[#ffe600]' : 'border-white/10'}`}
            >
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-[#ffe600] text-black text-xs font-bold px-4 py-1 rounded-full uppercase tracking-wider shadow-[0_0_15px_rgba(255,230,0,0.5)]">
                  Most Popular
                </div>
              )}
              
              <div className="flex items-center justify-between mb-8">
                <div>
                  <h3 className="text-xl font-bold text-white mb-2">{plan.title}</h3>
                  <div className="flex items-baseline gap-1">
                    <span className="text-4xl font-black text-white">{plan.price}</span>
                    <span className="text-gray-400 font-medium">{plan.period}</span>
                  </div>
                </div>
                <div className="p-3 bg-white/5 rounded-2xl">
                  {plan.icon}
                </div>
              </div>

              <div className="space-y-4 mb-8">
                {plan.features.map((feature, i) => (
                  <div key={i} className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-[#00f0ff] shrink-0" />
                    <span className="text-gray-300 text-sm">{feature}</span>
                  </div>
                ))}
              </div>

              <a 
                href="https://wa.me/916299973147?text=Hi%20DSC,%20I'm%20interested%20in%20the%20badminton%20booking."
                target="_blank"
                rel="noreferrer"
                className={`block w-full text-center py-4 rounded-xl font-bold transition-all ${plan.popular ? 'bg-[#ffe600] text-black hover:bg-yellow-400' : 'glass bg-white/5 text-white hover:bg-white/10 border border-white/10'}`}
              >
                Reserve Your Court
              </a>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
