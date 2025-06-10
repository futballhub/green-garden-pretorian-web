
const Services = () => {
  const services = [
    {
      title: "Garbage Collection",
      description: "Regular and reliable waste collection services for residential and commercial properties.",
      icon: "🗑️",
      features: ["Weekly pickups", "Recycling services", "Bulk waste removal"]
    },
    {
      title: "Tree Cutting & Pruning",
      description: "Professional tree services including cutting, pruning, and removal for safety and aesthetics.",
      icon: "🌳",
      features: ["Safe tree removal", "Professional pruning", "Stump grinding"]
    },
    {
      title: "Lawn Planning & Maintenance",
      description: "Complete lawn care solutions from planning and installation to ongoing maintenance.",
      icon: "🌱",
      features: ["Lawn installation", "Regular mowing", "Fertilization"]
    },
    {
      title: "Greens Cutting",
      description: "Precise cutting and maintenance of hedges, bushes, and ornamental plants.",
      icon: "✂️",
      features: ["Hedge trimming", "Bush shaping", "Topiary services"]
    },
    {
      title: "Seasonal Cleanup",
      description: "Comprehensive seasonal garden cleanup to keep your outdoor space pristine year-round.",
      icon: "🍂",
      features: ["Leaf removal", "Garden clearance", "Seasonal prep"]
    },
    {
      title: "Garden Design",
      description: "Custom garden design and landscaping services to transform your outdoor vision into reality.",
      icon: "🎨",
      features: ["Design consultation", "Plant selection", "Landscape installation"]
    }
  ];

  return (
    <section id="services" className="section-padding bg-garden-50">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Our <span className="text-garden-600">Services</span>
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            We offer comprehensive gardening and landscaping services to keep your outdoor 
            spaces beautiful and well-maintained throughout the year.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div 
              key={index}
              className="bg-white rounded-lg p-6 shadow-lg hover:shadow-xl transition-shadow duration-300 hover-scale animate-scale-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="text-4xl mb-4">{service.icon}</div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">{service.title}</h3>
              <p className="text-gray-600 mb-4">{service.description}</p>
              <ul className="space-y-2">
                {service.features.map((feature, featureIndex) => (
                  <li key={featureIndex} className="flex items-center text-sm text-gray-600">
                    <span className="w-4 h-4 bg-garden-500 rounded-full flex items-center justify-center mr-2 flex-shrink-0">
                      <span className="text-white text-xs">✓</span>
                    </span>
                    {feature}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
