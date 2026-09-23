import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { fadeUp } from "@/lib/motion";
import { Plane, Utensils, GraduationCap, ShoppingBag } from "lucide-react";

const locations = [
  { 
    id: 'aviation', 
    icon: Plane, 
    name: "Private Aviation", 
    distance: "15 Min", 
    desc: "Seamless access to the exclusive metropolitan helipad and private jet terminal for effortless global travel.", 
    x: 25, 
    y: 35 
  },
  { 
    id: 'dining', 
    icon: Utensils, 
    name: "Michelin Dining", 
    distance: "5 Min", 
    desc: "Surrounded by the city's most acclaimed culinary establishments and exclusive members-only clubs.", 
    x: 65, 
    y: 45 
  },
  { 
    id: 'schools', 
    icon: GraduationCap, 
    name: "Elite Academies", 
    distance: "10 Min", 
    desc: "Unrivaled proximity to world-renowned international schools and prestigious academic institutions.", 
    x: 45, 
    y: 75 
  },
  { 
    id: 'shopping', 
    icon: ShoppingBag, 
    name: "Luxury Retail", 
    distance: "2 Min", 
    desc: "Steps away from flagship designer boutiques, high-end retail, and bespoke tailoring.", 
    x: 75, 
    y: 25 
  },
];

export function Neighborhood() {
  const [activeLoc, setActiveLoc] = useState(locations[0]);

  return (
    <section className="py-32 bg-surface relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <motion.div 
          variants={fadeUp} 
          initial="hidden" 
          whileInView="visible" 
          viewport={{ once: true, margin: "-100px" }} 
          className="mb-16"
        >
          <span className="text-gold tracking-[0.2em] uppercase text-sm mb-4 block">The Locale</span>
          <h2 className="text-4xl lg:text-5xl font-serif">The Center of <br/>Your World</h2>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
          {/* Interactive Map Area */}
          <div className="lg:col-span-8 relative h-[500px] lg:h-[600px] border border-border bg-dark overflow-hidden group">
            {/* Abstract Map Background */}
            <div className="absolute inset-0 opacity-10" style={{ backgroundImage: 'radial-gradient(#c5a059 1px, transparent 1px)', backgroundSize: '40px 40px' }} />
            <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1524661135-423995f22d0b?q=80&w=2074&auto=format&fit=crop')] opacity-20 bg-cover bg-center mix-blend-luminosity transition-opacity duration-1000 group-hover:opacity-30" />
            
            {/* Map Markers */}
            {locations.map((loc) => {
              const Icon = loc.icon;
              const isActive = activeLoc.id === loc.id;
              return (
                <button
                  key={loc.id}
                  onClick={() => setActiveLoc(loc)}
                  className="absolute transform -translate-x-1/2 -translate-y-1/2 focus:outline-none z-10 group"
                  style={{ left: `${loc.x}%`, top: `${loc.y}%` }}
                >
                  <motion.div 
                    animate={{ scale: isActive ? 1.1 : 1 }}
                    className={`w-12 h-12 rounded-full flex items-center justify-center border transition-all duration-500 ${
                      isActive 
                        ? 'bg-gold border-gold text-dark shadow-[0_0_30px_rgba(197,160,89,0.4)]' 
                        : 'bg-dark/80 backdrop-blur-sm border-border text-gold hover:border-gold'
                    }`}
                  >
                    <Icon size={20} strokeWidth={1.5} />
                  </motion.div>
                  {isActive && (
                    <motion.div 
                      layoutId="pulse"
                      className="absolute inset-0 rounded-full border border-gold"
                      animate={{ scale: [1, 2.5], opacity: [0.8, 0] }}
                      transition={{ repeat: Infinity, duration: 2, ease: "easeOut" }}
                    />
                  )}
                  
                  {/* Tooltip */}
                  <div className={`absolute left-1/2 -translate-x-1/2 bottom-full mb-3 w-max px-3 py-2 bg-dark/95 backdrop-blur-md border text-[10px] tracking-widest uppercase transition-all duration-300 pointer-events-none flex flex-col items-center gap-1 shadow-xl ${
                    isActive ? "opacity-100 border-gold text-gold translate-y-0" : "opacity-0 border-white/10 text-white translate-y-2 group-hover:opacity-100 group-hover:translate-y-0"
                  }`}>
                    <span className="whitespace-nowrap font-medium">{loc.name}</span>
                    {/* Triangle pointer */}
                    <div className={`absolute top-full left-1/2 -translate-x-1/2 border-4 border-transparent ${isActive ? 'border-t-gold' : 'border-t-white/10'}`}></div>
                  </div>
                </button>
              );
            })}
          </div>

          {/* Location Details */}
          <div className="lg:col-span-4 flex flex-col justify-center">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeLoc.id}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
              >
                <div className="w-16 h-16 rounded-full border border-gold/30 flex items-center justify-center text-gold mb-8 bg-gold/5">
                  <activeLoc.icon size={28} strokeWidth={1} />
                </div>
                <h3 className="text-3xl font-serif mb-3">{activeLoc.name}</h3>
                <p className="text-gold text-sm tracking-widest uppercase mb-8 flex items-center gap-2">
                  <span className="w-8 h-[1px] bg-gold"></span>
                  {activeLoc.distance}
                </p>
                <p className="text-gray-400 font-light leading-relaxed text-lg">
                  {activeLoc.desc}
                </p>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </div>
    </section>
  );
}
