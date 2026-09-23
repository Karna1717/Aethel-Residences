import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { fadeUp } from "@/lib/motion";
import { Button } from "@/components/ui/Button";

const plans = [
  {
    id: "2bhk",
    name: "2 Bedroom Residence",
    size: "1,850 Sq.Ft.",
    desc: "Perfectly proportioned living spaces with dual master suites and an expansive terrace.",
    image: "https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?q=80&w=2070&auto=format&fit=crop"
  },
  {
    id: "3bhk",
    name: "3 Bedroom Residence",
    size: "2,400 Sq.Ft.",
    desc: "A sprawling layout featuring a grand living area, private study, and panoramic corner views.",
    image: "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?q=80&w=2053&auto=format&fit=crop"
  },
  {
    id: "penthouse",
    name: "The Penthouse",
    size: "4,200 Sq.Ft.",
    desc: "The crown jewel. Duplex living with a private rooftop pool, double-height ceilings, and 360° views.",
    image: "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?q=80&w=2075&auto=format&fit=crop"
  }
];

export function FloorPlans() {
  const [activePlan, setActivePlan] = useState(plans[0]);

  return (
    <section id="floor-plans" className="py-32 bg-surface">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <motion.div 
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={fadeUp}
          className="text-center mb-16"
        >
          <span className="text-gold tracking-[0.2em] uppercase text-sm mb-4 block">Configurations</span>
          <h2 className="text-4xl lg:text-5xl font-serif">Masterfully Designed</h2>
        </motion.div>

        {/* Tabs */}
        <div className="flex flex-wrap justify-center gap-4 mb-16">
          {plans.map((plan) => (
            <button
              key={plan.id}
              onClick={() => setActivePlan(plan)}
              className={`px-8 py-4 text-sm tracking-widest uppercase transition-all duration-500 border-b-2 ${
                activePlan.id === plan.id 
                  ? "border-gold text-gold" 
                  : "border-transparent text-gray-500 hover:text-white"
              }`}
            >
              {plan.name}
            </button>
          ))}
        </div>

        {/* Content */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <AnimatePresence mode="wait">
            <motion.div
              key={activePlan.id}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: 20 }}
              transition={{ duration: 0.5, ease: "easeInOut" }}
              className="order-2 lg:order-1"
            >
              <h3 className="text-3xl font-serif mb-4">{activePlan.name}</h3>
              <p className="text-gold tracking-widest uppercase text-sm mb-6">{activePlan.size}</p>
              <p className="text-gray-400 font-light leading-relaxed mb-10">
                {activePlan.desc}
              </p>
              <ul className="space-y-4 mb-10 text-gray-300 font-light">
                <li className="flex items-center gap-3">
                  <div className="w-1.5 h-1.5 bg-gold rounded-full" />
                  Custom Italian Kitchen
                </li>
                <li className="flex items-center gap-3">
                  <div className="w-1.5 h-1.5 bg-gold rounded-full" />
                  Smart Home Automation
                </li>
                <li className="flex items-center gap-3">
                  <div className="w-1.5 h-1.5 bg-gold rounded-full" />
                  Floor-to-Ceiling Windows
                </li>
              </ul>
              <Button variant="outline">Download Floor Plan</Button>
            </motion.div>
          </AnimatePresence>

          <AnimatePresence mode="wait">
            <motion.div
              key={`img-${activePlan.id}`}
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 1.05 }}
              transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
              className="order-1 lg:order-2 relative h-[400px] lg:h-[600px] bg-dark border border-border p-8 flex items-center justify-center overflow-hidden"
            >
              <img 
                src={activePlan.image} 
                alt={activePlan.name}
                className="w-full h-full object-cover opacity-50 grayscale"
              />
              <div className="absolute inset-0 flex items-center justify-center">
                <span className="text-white/50 font-serif text-2xl tracking-widest uppercase border border-white/20 px-8 py-4 backdrop-blur-sm">
                  Plan Preview
                </span>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
}
