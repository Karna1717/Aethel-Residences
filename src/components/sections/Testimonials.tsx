import { motion } from "motion/react";
import { fadeUp } from "@/lib/motion";

export function Testimonials() {
  return (
    <section className="py-32 bg-surface relative overflow-hidden">
      <div className="max-w-4xl mx-auto px-6 lg:px-8 text-center relative z-10">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={fadeUp}
        >
          <span className="text-gold tracking-[0.2em] uppercase text-sm mb-12 block">The Legacy</span>
          <div className="text-6xl text-gold/20 font-serif mb-6">"</div>
          <h2 className="text-2xl md:text-4xl font-serif leading-relaxed mb-12">
            Aethel represents a paradigm shift in luxury real estate. It is not merely a residence, but a curated lifestyle for those who have arrived.
          </h2>
          <div className="flex flex-col items-center">
            <div className="w-16 h-16 rounded-full overflow-hidden mb-4 border border-border">
              <img 
                src="https://images.unsplash.com/photo-1560250097-0b93528c311a?q=80&w=2000&auto=format&fit=crop" 
                alt="Architect"
                className="w-full h-full object-cover grayscale"
              />
            </div>
            <p className="text-white font-medium tracking-wide">Jonathan Hayes</p>
            <p className="text-gray-500 text-sm uppercase tracking-widest mt-1">Lead Architect</p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
