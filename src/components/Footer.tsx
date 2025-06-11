
const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="md:col-span-2">
            <div className="flex items-center space-x-2 mb-4">
              <div className="w-8 h-8 bg-gradient-to-br from-garden-500 to-garden-600 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-sm">M</span>
              </div>
              <span className="font-bold text-xl">MLAMBO Projects & Constructions</span>
            </div>
            <p className="text-gray-400 mb-4 max-w-md">
              Professional gardening services in Pretoria. Transforming outdoor spaces 
              with affordable, reliable, and high-quality garden care solutions.
            </p>
            <div className="text-gray-400">
              <p>Stand No 228, Block BB, Soshanguve</p>
              <p>Gauteng 0152, Pretoria, South Africa</p>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-semibold text-lg mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li><a href="#home" className="text-gray-400 hover:text-garden-400 transition-colors">Home</a></li>
              <li><a href="#about" className="text-gray-400 hover:text-garden-400 transition-colors">About</a></li>
              <li><a href="#services" className="text-gray-400 hover:text-garden-400 transition-colors">Services</a></li>
              <li><a href="#gallery" className="text-gray-400 hover:text-garden-400 transition-colors">Gallery</a></li>
              <li><a href="#contact" className="text-gray-400 hover:text-garden-400 transition-colors">Contact</a></li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="font-semibold text-lg mb-4">Our Services</h3>
            <ul className="space-y-2 text-gray-400">
              <li>Garbage Collection</li>
              <li>Tree Cutting & Pruning</li>
              <li>Lawn Maintenance</li>
              <li>Garden Design</li>
              <li>Seasonal Cleanup</li>
              <li>Landscaping</li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-400 text-sm">
            © 2024 MLAMBO Projects & Constructions (Pty) Ltd. All rights reserved.
          </p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <a href="#" className="text-gray-400 hover:text-garden-400 transition-colors">Privacy Policy</a>
            <a href="#" className="text-gray-400 hover:text-garden-400 transition-colors">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
