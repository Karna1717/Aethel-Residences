import { motion } from "motion/react";
import { fadeUp } from "@/lib/motion";
import { Button } from "@/components/ui/Button";

export function Contact() {
  return (
    <section id="contact" className="py-32 bg-dark">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24">
          
          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={fadeUp}
          >
            <span className="text-gold tracking-[0.2em] uppercase text-sm mb-4 block">Private Viewing</span>
            <h2 className="text-4xl lg:text-5xl font-serif mb-8">Register Your Interest</h2>
            <p className="text-gray-400 font-light leading-relaxed mb-12">
              Connect with our dedicated sales gallery to schedule a private presentation and discover the unparalleled lifestyle that awaits at Aethel.
            </p>
            
            <div className="space-y-8">
              <div>
                <p className="text-sm text-gray-500 uppercase tracking-widest mb-2">Sales Gallery</p>
                <p className="text-white font-light">100 Luxury Avenue, <br/>Metropolis, NY 10001</p>
              </div>
              <div>
                <p className="text-sm text-gray-500 uppercase tracking-widest mb-2">Contact</p>
                <p className="text-white font-light">+1 (555) 123-4567 <br/>inquiries@aethel.com</p>
              </div>
            </div>
          </motion.div>

          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={fadeUp}
            className="bg-surface p-8 lg:p-12 border border-border"
          >
            <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-xs text-gray-400 uppercase tracking-widest">First Name</label>
                  <input 
                    type="text" 
                    className="w-full bg-dark border border-border px-4 py-3 text-white focus:outline-none focus:border-gold transition-colors"
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-xs text-gray-400 uppercase tracking-widest">Last Name</label>
                  <input 
                    type="text" 
                    className="w-full bg-dark border border-border px-4 py-3 text-white focus:outline-none focus:border-gold transition-colors"
                  />
                </div>
              </div>
              
              <div className="space-y-2">
                <label className="text-xs text-gray-400 uppercase tracking-widest">Email Address</label>
                <input 
                  type="email" 
                  className="w-full bg-dark border border-border px-4 py-3 text-white focus:outline-none focus:border-gold transition-colors"
                />
              </div>
              
              <div className="space-y-2">
                <label className="text-xs text-gray-400 uppercase tracking-widest">Phone Number</label>
                <input 
                  type="tel" 
                  className="w-full bg-dark border border-border px-4 py-3 text-white focus:outline-none focus:border-gold transition-colors"
                />
              </div>

              <div className="space-y-2">
                <label className="text-xs text-gray-400 uppercase tracking-widest">Residence of Interest</label>
                <select className="w-full bg-dark border border-border px-4 py-3 text-white focus:outline-none focus:border-gold transition-colors appearance-none">
                  <option>2 Bedroom</option>
                  <option>3 Bedroom</option>
                  <option>Penthouse</option>
                </select>
              </div>

              <Button type="submit" size="lg" className="w-full mt-8">
                Submit Inquiry
              </Button>
            </form>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
