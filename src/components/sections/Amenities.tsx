import { motion } from "motion/react";
import { fadeUp, staggerContainer } from "@/lib/motion";
import { Waves, Dumbbell, Wine, Shield, Car, Coffee } from "lucide-react";

const amenities = [
  { icon: Waves, title: "Infinity Pool", desc: "Temperature-controlled with skyline views" },
  { icon: Dumbbell, title: "Wellness Center", desc: "State-of-the-art equipment & spa" },
  { icon: Wine, title: "Private Lounge", desc: "Exclusive club room & wine cellar" },
  { icon: Shield, title: "24/7 Concierge", desc: "White-glove service & security" },
  { icon: Car, title: "Valet Parking", desc: "Secure underground automated parking" },
  { icon: Coffee, title: "Café & Library", desc: "Curated reading spaces & barista" },
];

export function Amenities() {
  return (
    <section id="amenities" className="py-32 bg-dark relative overflow-hidden">
      {/* Abstract Background Element */}
      <div className="absolute top-0 right-0 w-1/2 h-full bg-surface/30 -skew-x-12 translate-x-1/4 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16">
          
          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={fadeUp}
            className="lg:col-span-4 flex flex-col justify-center"
          >
            <span className="text-gold tracking-[0.2em] uppercase text-sm mb-4 block">Lifestyle</span>
            <h2 className="text-4xl lg:text-5xl font-serif mb-8">Beyond <br/>Expectations</h2>
            <p className="text-gray-400 font-light leading-relaxed mb-10">
              An ecosystem of unparalleled amenities designed to cater to your every desire. Experience a resort-like lifestyle from the comfort of your home.
            </p>
          </motion.div>

          <motion.div 
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            className="lg:col-span-8 grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-12"
          >
            {amenities.map((item, index) => {
              const Icon = item.icon;
              return (
                <motion.div 
                  key={index}
                  variants={fadeUp}
                  className="flex gap-6 group"
                >
                  <div className="w-12 h-12 rounded-full border border-border flex items-center justify-center flex-shrink-0 group-hover:border-gold group-hover:text-gold transition-colors duration-500">
                    <Icon strokeWidth={1} size={24} />
                  </div>
                  <div>
                    <h4 className="text-xl font-serif mb-2">{item.title}</h4>
                    <p className="text-gray-500 font-light text-sm">{item.desc}</p>
                  </div>
                </motion.div>
              );
            })}
          </motion.div>

        </div>
      </div>
    </section>
  );
}
