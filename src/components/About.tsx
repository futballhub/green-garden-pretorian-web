
const About = () => {
  return (
    <section id="about" className="section-padding bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="animate-fade-in">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              About <span className="text-garden-600">CHOCKS Projects</span>
            </h2>
            <p className="text-lg text-gray-600 mb-6 leading-relaxed">
              CHOCKS Projects & Constructions (Pty) Ltd is your trusted partner for 
              professional gardening services in Pretoria and surrounding areas. Based in 
              Soshanguve, we have been transforming outdoor spaces with dedication and expertise.
            </p>
            <p className="text-lg text-gray-600 mb-8 leading-relaxed">
              Our experienced team specializes in comprehensive garden care, from routine 
              maintenance to major landscaping projects. We pride ourselves on delivering 
              affordable, high-quality services that exceed our clients' expectations.
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="flex items-start space-x-3">
                <div className="w-6 h-6 bg-garden-500 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                  <span className="text-white text-sm">✓</span>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900 mb-1">Licensed & Insured</h4>
                  <p className="text-gray-600 text-sm">Fully certified gardening professionals</p>
                </div>
              </div>
              
              <div className="flex items-start space-x-3">
                <div className="w-6 h-6 bg-garden-500 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                  <span className="text-white text-sm">✓</span>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900 mb-1">Affordable Pricing</h4>
                  <p className="text-gray-600 text-sm">Competitive rates for all services</p>
                </div>
              </div>
              
              <div className="flex items-start space-x-3">
                <div className="w-6 h-6 bg-garden-500 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                  <span className="text-white text-sm">✓</span>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900 mb-1">Large Capacity</h4>
                  <p className="text-gray-600 text-sm">Residential & commercial projects</p>
                </div>
              </div>
              
              <div className="flex items-start space-x-3">
                <div className="w-6 h-6 bg-garden-500 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                  <span className="text-white text-sm">✓</span>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900 mb-1">Timely Service</h4>
                  <p className="text-gray-600 text-sm">Always on schedule, every time</p>
                </div>
              </div>
            </div>
          </div>
          
          <div className="animate-scale-in">
            <div className="relative">
              <img 
                src="https://images.unsplash.com/photo-1513836279014-a89f7a76ae86?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" 
                alt="Professional gardening team at work"
                className="rounded-lg shadow-2xl w-full h-96 object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-garden-900/20 to-transparent rounded-lg"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
