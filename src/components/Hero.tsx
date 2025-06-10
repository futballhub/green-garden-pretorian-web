
import { Button } from '@/components/ui/button';

const Hero = () => {
  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-garden-50 to-white overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-20 left-10 w-64 h-64 bg-garden-300 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-garden-400 rounded-full blur-3xl"></div>
      </div>
      
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="animate-fade-in">
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-gray-900 mb-6">
            <span className="block">Professional</span>
            <span className="block text-garden-600">Gardening Services</span>
            <span className="block text-2xl md:text-3xl lg:text-4xl font-medium text-gray-600 mt-2">
              in Pretoria
            </span>
          </h1>
          
          <p className="text-lg md:text-xl text-gray-600 mb-8 max-w-3xl mx-auto leading-relaxed">
            Transform your outdoor space with CHOCKS Projects & Constructions. 
            We provide affordable, reliable gardening services including tree cutting, 
            lawn maintenance, and complete garden care solutions.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button 
              size="lg" 
              className="bg-garden-500 hover:bg-garden-600 text-white px-8 py-4 text-lg hover-scale"
            >
              Request Service
            </Button>
            <Button 
              variant="outline" 
              size="lg" 
              className="border-garden-500 text-garden-600 hover:bg-garden-50 px-8 py-4 text-lg hover-scale"
            >
              Call Now: 011 234 5678
            </Button>
          </div>
          
          <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto">
            <div className="text-center">
              <div className="text-3xl font-bold text-garden-600">5+</div>
              <div className="text-sm text-gray-600">Years Experience</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-garden-600">500+</div>
              <div className="text-sm text-gray-600">Happy Clients</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-garden-600">24/7</div>
              <div className="text-sm text-gray-600">Service Support</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-garden-600">100%</div>
              <div className="text-sm text-gray-600">Satisfaction</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
