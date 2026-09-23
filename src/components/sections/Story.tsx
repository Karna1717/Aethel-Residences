import { motion } from "motion/react";
import { fadeUp, scaleIn } from "@/lib/motion";

export function Story() {
  return (
    <section id="story" className="py-32 bg-dark">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">
          
          {/* Image Side */}
          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={scaleIn}
            className="relative h-[600px] lg:h-[800px] w-full overflow-hidden"
          >
            <img 
              src="https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?q=80&w=2053&auto=format&fit=crop" 
              alt="Luxury Interior" 
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 border border-white/10 m-6 pointer-events-none" />
          </motion.div>

          {/* Text Side */}
          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={fadeUp}
            className="flex flex-col justify-center"
          >
            <span className="text-gold tracking-[0.2em] uppercase text-sm mb-6 block">The Vision</span>
            <h2 className="text-4xl lg:text-6xl font-serif mb-8 leading-tight">
              Crafted for the <br />
              <span className="italic text-gray-400">Connoisseurs</span> of Life.
            </h2>
            <div className="space-y-6 text-gray-400 font-light text-lg leading-relaxed">
              <p>
                Every detail at Aethel has been meticulously curated to offer an unparalleled living experience. From the sweeping architectural lines to the finest imported materials, it is a testament to uncompromising quality.
              </p>
              <p>
                We believe that true luxury is quiet. It is found in the perfect proportions of a room, the seamless transition between indoor and outdoor spaces, and the intuitive design that anticipates your every need.
              </p>
            </div>
            
            <div className="mt-12 pt-12 border-t border-border grid grid-cols-2 gap-8">
              <div>
                <p className="text-4xl font-serif text-white mb-2">42</p>
                <p className="text-sm text-gray-500 uppercase tracking-widest">Exclusive Residences</p>
              </div>
              <div>
                <p className="text-4xl font-serif text-white mb-2">12k</p>
                <p className="text-sm text-gray-500 uppercase tracking-widest">Sq.Ft. Amenities</p>
              </div>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
