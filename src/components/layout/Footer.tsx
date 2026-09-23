export function Footer() {
  return (
    <footer className="bg-dark border-t border-border pt-20 pb-10">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
          <div className="md:col-span-2">
            <span className="font-serif text-3xl tracking-widest text-white uppercase block mb-6">Aethel</span>
            <p className="text-gray-500 font-light max-w-sm">
              Redefining luxury living through visionary architecture and uncompromising attention to detail.
            </p>
          </div>
          
          <div>
            <h4 className="text-white text-sm uppercase tracking-widest mb-6">Explore</h4>
            <ul className="space-y-4 text-gray-500 font-light text-sm">
              <li><a href="#residences" className="hover:text-gold transition-colors">Residences</a></li>
              <li><a href="#amenities" className="hover:text-gold transition-colors">Amenities</a></li>
              <li><a href="#floor-plans" className="hover:text-gold transition-colors">Floor Plans</a></li>
              <li><a href="#gallery" className="hover:text-gold transition-colors">Gallery</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-white text-sm uppercase tracking-widest mb-6">Legal</h4>
            <ul className="space-y-4 text-gray-500 font-light text-sm">
              <li><a href="#" className="hover:text-gold transition-colors">Privacy Policy</a></li>
              <li><a href="#" className="hover:text-gold transition-colors">Terms of Service</a></li>
              <li><a href="#" className="hover:text-gold transition-colors">Disclaimer</a></li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-border pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-gray-600 uppercase tracking-widest">
          <p>&copy; {new Date().getFullYear()} Aethel Residences. All Rights Reserved.</p>
          <p>Designed for Excellence</p>
        </div>
      </div>
    </footer>
  );
}
