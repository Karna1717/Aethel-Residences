import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';

export function Preloader({ onComplete }: { onComplete: () => void }) {
  const [progress, setProgress] = useState(0);
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    const interval = setInterval(() => {
      setProgress(p => {
        if (p >= 100) {
          clearInterval(interval);
          setTimeout(() => {
            setIsVisible(false);
            setTimeout(onComplete, 1000); // Wait for exit animation
          }, 800);
          return 100;
        }
        return p + Math.floor(Math.random() * 15) + 1;
      });
    }, 150);
    return () => clearInterval(interval);
  }, [onComplete]);

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          exit={{ y: "-100%", transition: { duration: 1, ease: [0.76, 0, 0.24, 1] } }}
          className="fixed inset-0 z-[200] bg-dark flex flex-col items-center justify-center text-white"
        >
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            className="flex flex-col items-center"
          >
            <div className="text-sm tracking-[0.4em] uppercase text-gold mb-12">Aethel</div>
            <div className="text-7xl md:text-9xl font-serif font-light tabular-nums tracking-tighter">
              {Math.min(progress, 100)}%
            </div>
            <div className="w-64 h-[1px] bg-border mt-12 relative overflow-hidden">
              <motion.div 
                className="absolute top-0 left-0 h-full bg-gold"
                animate={{ width: `${Math.min(progress, 100)}%` }}
                transition={{ ease: "linear", duration: 0.2 }}
              />
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
