import { useState } from "react";
import { motion } from "motion/react";
import { fadeUp, staggerContainer } from "@/lib/motion";
import { ArrowRight, Play } from "lucide-react";
import { TourModal } from "@/components/ui/TourModal";

const highlights = [
  {
    title: "Panoramic Vistas",
    description: "Floor-to-ceiling glass walls offering uninterrupted views of the city skyline and serene landscapes.",
    image: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=2070&auto=format&fit=crop",
    hasTour: false
  },
  {
    title: "Bespoke Interiors",
    description: "Curated finishes featuring Italian marble, custom millwork, and state-of-the-art smart home integration.",
    image: "https://images.unsplash.com/photo-1600573472550-8090b5e0745e?q=80&w=2070&auto=format&fit=crop",
    hasTour: true
  },
  {
    title: "Private Sanctuaries",
    description: "Expansive master suites designed as personal retreats with spa-inspired bathrooms and private terraces.",
    image: "https://images.unsplash.com/photo-1600047509807-ba8f99d2cdde?q=80&w=2092&auto=format&fit=crop",
    hasTour: false
  }
];

export function Highlights() {
  const [isTourOpen, setIsTourOpen] = useState(false);

  return (
    <section id="residences" className="py-32 bg-surface">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <motion.div 
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={fadeUp}
          className="text-center mb-20"
        >
          <span className="text-gold tracking-[0.2em] uppercase text-sm mb-4 block">The Residences</span>
          <h2 className="text-4xl lg:text-5xl font-serif">A Symphony of Space & Light</h2>
        </motion.div>

        <motion.div 
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 md:grid-cols-3 gap-8"
        >
          {highlights.map((item, index) => (
            <motion.div 
              key={index}
              variants={fadeUp}
              className="group cursor-pointer"
            >
              <div className="relative h-[400px] lg:h-[500px] overflow-hidden mb-8">
                <div className="absolute inset-0 bg-dark/20 group-hover:bg-transparent transition-colors duration-700 z-10" />
                <img 
                  src={item.image} 
                  alt={item.title}
                  className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-1000 ease-[0.16,1,0.3,1]"
                />
              </div>
              <h3 className="text-2xl font-serif mb-4 group-hover:text-gold transition-colors duration-500">{item.title}</h3>
              <p className="text-gray-400 font-light leading-relaxed mb-6">
                {item.description}
              </p>
              <div className="flex items-center justify-between">
                <div className="flex items-center text-sm uppercase tracking-widest text-white group-hover:text-gold transition-colors duration-500">
                  Explore <ArrowRight className="ml-2 w-4 h-4 transform group-hover:translate-x-2 transition-transform duration-500" />
                </div>
                {item.hasTour && (
                  <button 
                    onClick={(e) => {
                      e.stopPropagation();
                      setIsTourOpen(true);
                    }}
                    className="flex items-center text-sm uppercase tracking-widest text-gold hover:text-white transition-colors duration-500 focus:outline-none"
                  >
                    <Play className="mr-2 w-4 h-4 fill-current" /> 3D Tour
                  </button>
                )}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>

      <TourModal isOpen={isTourOpen} onClose={() => setIsTourOpen(false)} />
    </section>
  );
}
