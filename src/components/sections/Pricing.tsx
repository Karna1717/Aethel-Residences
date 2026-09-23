import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { fadeUp, staggerContainer } from "@/lib/motion";
import { Button } from "@/components/ui/Button";

type Currency = 'INR' | 'USD' | 'AED' | 'GBP';

const exchangeRates = {
  INR: 1,
  USD: 0.000012, // Approx 1 INR to USD
  AED: 0.000044, // Approx 1 INR to AED
  GBP: 0.0000095 // Approx 1 INR to GBP
};

const formatPrice = (baseInrCrores: number, currency: Currency) => {
  const baseInr = baseInrCrores * 10000000; // Convert Cr to raw INR
  
  if (currency === 'INR') return `₹${baseInrCrores} Cr`;
  
  const converted = baseInr * exchangeRates[currency];
  
  return new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: currency,
    maximumFractionDigits: 1,
    notation: "compact",
    compactDisplay: "short"
  }).format(converted);
};

const tiers = [
  {
    name: "Signature",
    type: "2 Bedroom",
    basePriceCr: 5.5,
    features: ["1,850 Sq.Ft.", "City Views", "1 Parking Bay", "Standard Finishes"]
  },
  {
    name: "Premium",
    type: "3 Bedroom",
    basePriceCr: 8.2,
    features: ["2,400 Sq.Ft.", "Panoramic Views", "2 Parking Bays", "Upgraded Finishes", "Private Elevator Lobby"],
    highlighted: true
  },
  {
    name: "Penthouse",
    type: "Duplex",
    basePriceCr: null, // Upon Request
    features: ["4,200 Sq.Ft.", "360° Views", "4 Parking Bays", "Bespoke Finishes", "Private Pool & Terrace"]
  }
];

export function Pricing() {
  const [currency, setCurrency] = useState<Currency>('INR');

  return (
    <section className="py-32 bg-dark">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <motion.div 
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={fadeUp}
          className="text-center mb-16"
        >
          <span className="text-gold tracking-[0.2em] uppercase text-sm mb-4 block">Investment</span>
          <h2 className="text-4xl lg:text-5xl font-serif mb-10">Ownership Tiers</h2>
          
          {/* Currency Toggle */}
          <div className="inline-flex items-center p-1 bg-surface border border-border rounded-none">
            {(['INR', 'USD', 'AED', 'GBP'] as Currency[]).map((c) => (
              <button
                key={c}
                onClick={() => setCurrency(c)}
                className={`px-6 py-2 text-xs tracking-widest uppercase transition-colors duration-300 ${
                  currency === c 
                    ? "bg-gold text-dark font-medium" 
                    : "text-gray-400 hover:text-white"
                }`}
              >
                {c}
              </button>
            ))}
          </div>
        </motion.div>

        <motion.div 
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 md:grid-cols-3 gap-8"
        >
          {tiers.map((tier, index) => (
            <motion.div 
              key={index}
              variants={fadeUp}
              className={`relative p-10 border transition-colors duration-500 flex flex-col ${
                tier.highlighted 
                  ? "border-gold bg-surface" 
                  : "border-border bg-transparent hover:border-gray-600"
              }`}
            >
              {tier.highlighted && (
                <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-gold text-dark px-4 py-1 text-xs font-bold uppercase tracking-widest">
                  Most Desired
                </div>
              )}
              <h3 className="text-2xl font-serif mb-2">{tier.name}</h3>
              <p className="text-gray-400 text-sm uppercase tracking-widest mb-8">{tier.type}</p>
              
              <div className="h-12 mb-10">
                <AnimatePresence mode="wait">
                  <motion.div
                    key={currency}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    transition={{ duration: 0.3 }}
                    className="text-3xl font-light text-white"
                  >
                    {tier.basePriceCr ? `Starting at ${formatPrice(tier.basePriceCr, currency)}` : "Upon Request"}
                  </motion.div>
                </AnimatePresence>
              </div>
              
              <ul className="space-y-4 mb-12 flex-grow">
                {tier.features.map((feature, i) => (
                  <li key={i} className="text-gray-400 font-light text-sm flex items-center gap-3">
                    <div className={`w-1 h-1 rounded-full ${tier.highlighted ? "bg-gold" : "bg-gray-600"}`} />
                    {feature}
                  </li>
                ))}
              </ul>
              
              <Button 
                variant={tier.highlighted ? "primary" : "outline"} 
                className="w-full"
              >
                Inquire
              </Button>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
