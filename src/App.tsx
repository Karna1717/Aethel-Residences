import { useEffect, useState } from "react";
import Lenis from "lenis";
import { Navbar } from "@/components/layout/Navbar";
import { Hero } from "@/components/sections/Hero";
import { Story } from "@/components/sections/Story";
import { Highlights } from "@/components/sections/Highlights";
import { Amenities } from "@/components/sections/Amenities";
import { FloorPlans } from "@/components/sections/FloorPlans";
import { Neighborhood } from "@/components/sections/Neighborhood";
import { GlobalInvestors } from "@/components/sections/GlobalInvestors";
import { Pricing } from "@/components/sections/Pricing";
import { Testimonials } from "@/components/sections/Testimonials";
import { Contact } from "@/components/sections/Contact";
import { Footer } from "@/components/layout/Footer";
import { CustomCursor } from "@/components/ui/CustomCursor";
import { Preloader } from "@/components/ui/Preloader";

export default function App() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Only initialize Lenis after loading is complete to prevent scrolling during preloader
    if (isLoading) return;

    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      orientation: "vertical",
      gestureOrientation: "vertical",
      smoothWheel: true,
      wheelMultiplier: 1,
      touchMultiplier: 2,
    });

    function raf(time: number) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);

    return () => {
      lenis.destroy();
    };
  }, [isLoading]);

  return (
    <div className="min-h-screen bg-dark text-white selection:bg-gold selection:text-dark">
      <Preloader onComplete={() => setIsLoading(false)} />
      <CustomCursor />
      <Navbar />
      <main>
        <Hero />
        <Story />
        <Highlights />
        <Amenities />
        <FloorPlans />
        <Neighborhood />
        <GlobalInvestors />
        <Pricing />
        <Testimonials />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
