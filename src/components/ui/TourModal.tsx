import { motion, AnimatePresence } from "motion/react";
import { X } from "lucide-react";
import { ModelViewer } from "./ModelViewer";
import { useEffect } from "react";

interface TourModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export function TourModal({ isOpen, onClose }: TourModalProps) {
  // Prevent scrolling when modal is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isOpen]);

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
          className="fixed inset-0 z-[100] flex items-center justify-center bg-dark/95 backdrop-blur-xl"
        >
          {/* Close Button */}
          <button
            onClick={onClose}
            className="absolute top-8 right-8 z-10 w-12 h-12 flex items-center justify-center rounded-full border border-white/10 text-white hover:text-gold hover:border-gold transition-colors duration-300 bg-dark/50"
          >
            <X size={24} strokeWidth={1} />
          </button>

          {/* Modal Content */}
          <motion.div
            initial={{ scale: 0.95, opacity: 0, y: 20 }}
            animate={{ scale: 1, opacity: 1, y: 0 }}
            exit={{ scale: 0.95, opacity: 0, y: 20 }}
            transition={{ duration: 0.6, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
            className="w-[90vw] h-[85vh] max-w-7xl border border-white/10 bg-dark relative overflow-hidden shadow-2xl"
          >
            {/* Header Overlay */}
            <div className="absolute top-0 left-0 right-0 p-6 z-10 bg-gradient-to-b from-dark/80 to-transparent pointer-events-none">
              <span className="text-gold tracking-[0.2em] uppercase text-xs font-medium block mb-2">Interactive Experience</span>
              <h3 className="text-2xl font-serif text-white">Bespoke Interiors Maquette</h3>
            </div>

            {/* 3D Viewer */}
            <ModelViewer />
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
