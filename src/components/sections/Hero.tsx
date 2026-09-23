import { motion, useScroll, useTransform } from "motion/react";
import { fadeUp, staggerContainer } from "@/lib/motion";
import { Button } from "@/components/ui/Button";
import { Play } from "lucide-react";
import { useRef } from "react";

export function Hero() {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });

  const y = useTransform(scrollYProgress, [0, 1], ["0%", "40%"]);
  const opacity = useTransform(scrollYProgress, [0, 1], [1, 0]);

  return (
    <section ref={ref} className="relative h-screen min-h-[800px] flex items-center justify-center overflow-hidden">
      {/* Background Image with Parallax */}
      <motion.div style={{ y }} className="absolute inset-0 z-0 h-[120%] -top-[10%]">
        <motion.img
          initial={{ scale: 1.1 }}
          animate={{ scale: 1 }}
          transition={{ duration: 2, ease: "easeOut" }}
          src="https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?q=80&w=2075&auto=format&fit=crop"
          alt="Luxury Mansion Exterior"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-dark/60 via-dark/40 to-dark/90" />
      </motion.div>

      {/* Content */}
      <motion.div style={{ opacity }} className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8 w-full flex flex-col items-center text-center mt-20">
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          animate="visible"
          className="max-w-4xl"
        >
          <motion.div variants={fadeUp} className="mb-6">
            <span className="text-gold tracking-[0.3em] uppercase text-sm font-medium">
              The Pinnacle of Living
            </span>
          </motion.div>
          
          <motion.h1 
            variants={fadeUp}
            className="text-5xl md:text-7xl lg:text-8xl font-serif text-white mb-8 leading-tight"
          >
            A Legacy of <br className="hidden md:block" />
            <span className="italic text-gray-300">Uncompromised</span> Luxury
          </motion.h1>
          
          <motion.p 
            variants={fadeUp}
            className="text-lg md:text-xl text-gray-300 mb-12 max-w-2xl mx-auto font-light leading-relaxed"
          >
            Discover an exclusive collection of bespoke residences designed for those who appreciate the extraordinary. Where architectural brilliance meets timeless elegance.
          </motion.p>
          
          <motion.div 
            variants={fadeUp}
            className="flex flex-col sm:flex-row items-center justify-center gap-6"
          >
            <Button size="lg" className="w-full sm:w-auto">
              Schedule a Private Tour
            </Button>
            <Button variant="outline" size="lg" className="w-full sm:w-auto flex items-center gap-3">
              <Play className="w-4 h-4 fill-current" /> Virtual Tour
            </Button>
          </motion.div>
        </motion.div>
      </motion.div>

      {/* Scroll Indicator */}
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2, duration: 1 }}
        className="absolute bottom-12 left-1/2 -translate-x-1/2 flex flex-col items-center gap-4"
      >
        <span className="text-xs tracking-[0.2em] uppercase text-gray-400">Scroll</span>
        <div className="w-[1px] h-16 bg-gray-600 relative overflow-hidden">
          <motion.div 
            animate={{ y: [0, 64] }}
            transition={{ repeat: Infinity, duration: 1.5, ease: "linear" }}
            className="absolute top-0 left-0 w-full h-1/2 bg-gold"
          />
        </div>
      </motion.div>
    </section>
  );
}
