
const WhyChooseUs = () => {
  const reasons = [
    {
      title: "Affordable Pricing",
      description: "Competitive rates without compromising on quality. We believe everyone deserves a beautiful garden.",
      icon: "💰"
    },
    {
      title: "Professional Team",
      description: "Our experienced team brings years of expertise and passion to every project.",
      icon: "👥"
    },
    {
      title: "Large Capacity",
      description: "From small residential gardens to large commercial properties, we handle projects of all sizes.",
      icon: "🏢"
    },
    {
      title: "Timely Service",
      description: "We respect your time and always deliver our services on schedule, every time.",
      icon: "⏰"
    },
    {
      title: "Quality Guarantee",
      description: "We stand behind our work with a satisfaction guarantee on all our services.",
      icon: "🛡️"
    },
    {
      title: "Local Expertise",
      description: "Deep knowledge of Pretoria's climate and soil conditions for optimal results.",
      icon: "📍"
    }
  ];

  return (
    <section className="section-padding bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Why Choose <span className="text-garden-600">CHOCKS Projects</span>
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            We're committed to providing exceptional gardening services that transform 
            your outdoor space while delivering outstanding value and customer satisfaction.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {reasons.map((reason, index) => (
            <div 
              key={index}
              className="text-center p-6 rounded-lg hover:bg-garden-50 transition-colors duration-300 hover-scale animate-scale-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="text-5xl mb-4">{reason.icon}</div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">{reason.title}</h3>
              <p className="text-gray-600">{reason.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
