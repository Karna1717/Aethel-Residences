import { useState } from "react";
import { motion, useScroll, useMotionValueEvent } from "motion/react";
import { Menu, X } from "lucide-react";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/Button";
import { AudioPlayer } from "@/components/ui/AudioPlayer";

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const { scrollY } = useScroll();

  useMotionValueEvent(scrollY, "change", (latest) => {
    setIsScrolled(latest > 50);
  });

  const navLinks = [
    { name: "Residences", href: "#residences" },
    { name: "Amenities", href: "#amenities" },
    { name: "Floor Plans", href: "#floor-plans" },
    { name: "Gallery", href: "#gallery" },
  ];

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 1, ease: [0.16, 1, 0.3, 1], delay: 0.5 }}
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-colors duration-500",
        isScrolled ? "bg-dark/90 backdrop-blur-md border-b border-border" : "bg-transparent"
      )}
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="flex items-center justify-between h-24">
          {/* Logo */}
          <a href="#" className="flex-shrink-0 flex items-center gap-2">
            <span className="font-serif text-2xl tracking-widest text-white uppercase">Aethel</span>
          </a>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-10">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-sm text-gray-300 hover:text-gold transition-colors duration-300 uppercase tracking-widest"
              >
                {link.name}
              </a>
            ))}
          </nav>

          {/* CTA & Audio */}
          <div className="hidden md:flex items-center gap-8">
            <AudioPlayer />
            <Button variant={isScrolled ? "primary" : "outline"} size="sm" className="uppercase tracking-widest text-xs">
              Inquire Now
            </Button>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center gap-6">
            <AudioPlayer />
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="text-white hover:text-gold transition-colors"
            >
              {isMobileMenuOpen ? <X size={28} strokeWidth={1} /> : <Menu size={28} strokeWidth={1} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <motion.div
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: "100vh" }}
          exit={{ opacity: 0, height: 0 }}
          className="md:hidden bg-dark fixed inset-0 top-24 z-40 flex flex-col items-center justify-center gap-8"
        >
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              onClick={() => setIsMobileMenuOpen(false)}
              className="text-2xl font-serif text-white hover:text-gold transition-colors uppercase tracking-widest"
            >
              {link.name}
            </a>
          ))}
          <Button variant="primary" size="lg" className="mt-8 w-64">
            Inquire Now
          </Button>
        </motion.div>
      )}
    </motion.header>
  );
}
