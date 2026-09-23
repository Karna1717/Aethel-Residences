import { motion } from "motion/react";
import { fadeUp, staggerContainer } from "@/lib/motion";
import { Globe, Briefcase, Key, Video } from "lucide-react";

const services = [
  {
    icon: Video,
    title: "Virtual Handovers",
    desc: "Immersive 3D walkthroughs and live video consultations tailored to your timezone."
  },
  {
    icon: Briefcase,
    title: "Legal & Tax Advisory",
    desc: "Dedicated concierge for cross-border compliance, taxation, and seamless documentation."
  },
  {
    icon: Key,
    title: "Turnkey Management",
    desc: "End-to-end property management, from bespoke furnishing to premium tenant acquisition."
  },
  {
    icon: Globe,
    title: "Global Portfolio",
    desc: "Join an elite community of international investors with exclusive pre-launch access."
  }
];

export function GlobalInvestors() {
  return (
    <section className="py-32 bg-dark border-y border-border relative overflow-hidden">
      {/* Background Map/Grid abstraction */}
      <div className="absolute inset-0 opacity-[0.03] pointer-events-none" 
           style={{ backgroundImage: 'radial-gradient(#c5a059 1px, transparent 1px)', backgroundSize: '40px 40px' }} 
      />

      <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">
          
          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={fadeUp}
          >
            <span className="text-gold tracking-[0.2em] uppercase text-sm mb-4 block">Global Ownership</span>
            <h2 className="text-4xl lg:text-5xl font-serif mb-8">Seamless Investment <br/>From Anywhere.</h2>
            <p className="text-gray-400 font-light leading-relaxed mb-10">
              Designed specifically for our international clientele and Non-Resident Indians (NRIs). We eliminate geographical barriers to provide a frictionless, white-glove acquisition experience.
            </p>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
              {services.map((service, index) => {
                const Icon = service.icon;
                return (
                  <motion.div key={index} variants={fadeUp} className="flex flex-col gap-4">
                    <div className="w-10 h-10 rounded-full bg-surface border border-border flex items-center justify-center text-gold">
                      <Icon size={18} strokeWidth={1.5} />
                    </div>
                    <div>
                      <h4 className="text-white font-serif text-lg mb-2">{service.title}</h4>
                      <p className="text-gray-500 text-sm font-light leading-relaxed">{service.desc}</p>
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </motion.div>

          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={staggerContainer}
            className="relative h-[600px] w-full"
          >
            <div className="absolute inset-0 bg-gradient-to-tr from-gold/20 to-transparent rounded-full blur-3xl opacity-30" />
            <img 
              src="https://images.unsplash.com/photo-1436491865332-7a61a109cc05?q=80&w=2074&auto=format&fit=crop" 
              alt="Global Travel" 
              className="w-full h-full object-cover rounded-t-full border border-border"
            />
            
            {/* Floating Trust Badge */}
            <motion.div 
              animate={{ y: [0, -10, 0] }}
              transition={{ repeat: Infinity, duration: 4, ease: "easeInOut" }}
              className="absolute bottom-12 -left-8 md:-left-12 bg-surface/90 backdrop-blur-md border border-border p-6 shadow-2xl"
            >
              <p className="text-3xl font-serif text-white mb-1">40+</p>
              <p className="text-xs text-gold uppercase tracking-widest">Countries Represented<br/>In Our Portfolio</p>
            </motion.div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
