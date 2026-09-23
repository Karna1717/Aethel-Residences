export const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: { 
    opacity: 1, 
    y: 0, 
    transition: { duration: 1, ease: [0.16, 1, 0.3, 1] as const } 
  }
};

export const fadeUpStagger = {
  hidden: { opacity: 0, y: 20 },
  visible: { 
    opacity: 1, 
    y: 0, 
    transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] as const } 
  }
};

export const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
      delayChildren: 0.1
    }
  }
};

export const scaleIn = {
  hidden: { opacity: 0, scale: 0.95 },
  visible: { 
    opacity: 1, 
    scale: 1, 
    transition: { duration: 1.2, ease: [0.16, 1, 0.3, 1] as const } 
  }
};

export const reveal = {
  hidden: { clipPath: "inset(100% 0 0 0)" },
  visible: { 
    clipPath: "inset(0% 0 0 0)", 
    transition: { duration: 1.2, ease: [0.16, 1, 0.3, 1] as const } 
  }
};
