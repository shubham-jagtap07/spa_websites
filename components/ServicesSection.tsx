export default function ServicesSection() {
  const packages = [
    {
      category: 'Ban Sabai Rituals',
      name: 'Go Deep Sleep',
      duration: '2 Hrs',
      description: 'Perfect for those who struggle with sleep uncertainty, Gym / Sports / Corporate professionals',
      priceText: 'Solo ₹3999 / Couple ₹7699',
      gst: '(*Excluding GST)',
    },
    {
      category: 'Ban Sabai Rituals',
      name: 'Fusuion Signature Treatment',
      duration: '2.30 Hrs',
      description: 'Perfect for those who struggle with sleep uncertainty, Gym / Sports / Corporate professionals',
      priceText: 'Solo ₹5499 / Couple ₹9999',
      gst: '(*Excluding GST)',
    },
    {
      category: 'Ban Sabai Rituals',
      name: 'Ban Sabai Recharge',
      duration: '2.30 Hrs',
      description: 'Detan Wrap: 30 Mins / Warm Oil Potli Massage: 60 Mins / Choice Of Facial: 60 Mins',
      priceText: 'Solo ₹5899 / Couple ₹10,599',
      gst: '(*Excluding GST)',
    },
    {
      category: 'Ban Sabai Combos',
      name: 'Sweet Sixteen',
      duration: '3 Hrs',
      description: 'Choice of Massage: 60 Mins / Oil Head Massage: 20 Mins / Choice Of Scrub: 30 Mins / Facial: 60 Mins / Steam Bath: 10 Mins',
      priceText: 'Solo ₹6499 / Couple ₹12,399',
      gst: '(*Excluding GST)',
    },
    {
      category: 'Ban Sabai Combos',
      name: 'Mini Rejuvenation (Classic)',
      duration: '120 Mins',
      description: '1. Choose Any One 90 Mins Classic Massage: Balinese / Swedish / Sports / Thai Dry / Aroma Therapy / Deep Tissue. 2. Choose Any One 30 Mins Body Scrub',
      priceText: 'Solo ₹3999 / Couple ₹7699',
      gst: '(*Excluding GST)',
    },
    {
      category: 'Ban Sabai Combos',
      name: 'Mini Rejuvenation (Exclusive)',
      duration: '120 Mins',
      description: '1. Choose Any One 90 Mins Classic Massage: Kansa Wand Detoxe / Hot Stone / Warm Bamboo / Herbal Potli. 2. Choose Any One 30 Mins Body Scrub',
      priceText: 'Solo ₹5299 / Couple ₹9999',
      gst: '(*Excluding GST)',
    },
    {
      category: 'Classic Massage',
      name: 'Deep Tissue Massage',
      duration: '60 / 90 / 120 Mins',
      description: '1. Deep Tissue Massage (Strong Pressure). 2. Balinese Massage (Medium to Strong Pressure). 3. Swedish Massage (Medium Pressure). 4. Aroma Oil Massage (Light Pressure)',
      priceText: '60 Mins ₹3000 / 90 Mins ₹4500 / 120 Mins ₹6000',
      gst: '(*Excluding GST)',
    },
    {
      category: 'Exclusive Massage',
      name: 'Kansa Wand Massage',
      duration: '90 / 120 / 150 Mins',
      description: '1. Kansa Wand Massage (Medium to Strong Pressure). 2. Warm Bamboo Massage (Strong Pressure). 3. Hot Stone Massage (Medium to Strong Pressure). 4. Herbal Potli Massage (Medium to Strong Pressure)',
      priceText: '90 Mins ₹5000 / 120 Mins ₹5500 / 150 Mins ₹6000',
      gst: '(*Excluding GST)',
    },
    {
      category: 'Ban Sabai Special Massage',
      name: 'Thai / Dry / Sports Massage',
      duration: '60 / 90 / 120 Mins',
      description: '1. Thai / Dry / Sports Massage (Strong Pressure). 2. Shea Butter Massage (Intense Pressure)',
      priceText: '60 Mins ₹2500 / 90 Mins ₹3500 / 120 Mins ₹4000',
      gst: '(*Excluding GST)',
    },
    {
      category: 'Ban Sabai Special Massage',
      name: 'Four Hand Massage',
      duration: '60 / 90 / 120 Mins',
      description: '1. Four Hand Massage (Medium Pressure). 2. Couple Massage (Medium / Strong Pressure)',
      priceText: '60 Mins ₹5000 / 90 Mins ₹7000 / 120 Mins ₹9000',
      gst: '(*Excluding GST)',
    },
  ];

  return (
    <section id="services" className="py-20 bg-gradient-to-b from-gray-50 to-white">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <p className="text-teal-600 font-script text-2xl mb-2">Choose best package plan</p>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">
            Our Special Offers
          </h2>
          <div className="flex justify-center">
            <svg className="w-12 h-12 text-teal-600" viewBox="0 0 100 100" fill="currentColor">
              <path d="M50 10 L60 40 L90 40 L65 60 L75 90 L50 70 L25 90 L35 60 L10 40 L40 40 Z" />
            </svg>
          </div>
        </div>

        {/* Packages Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {packages.map((pkg, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl shadow-lg p-8 hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 border border-gray-100"
            >
              <div className="mb-6">
                <h3 className="text-2xl font-bold text-gray-800 mb-2">{pkg.category}</h3>
                <p className="text-teal-600 font-semibold text-lg mb-1">{pkg.name}</p>
                <p className="text-gray-600 text-sm">Duration: {pkg.duration}</p>
              </div>

              <p className="text-gray-700 mb-6 text-sm leading-relaxed min-h-[80px]">
                {pkg.description}
              </p>

              <div className="mb-6">
                <p className="text-2xl font-bold text-teal-600 mb-1">{pkg.priceText}</p>
                <p className="text-gray-500 text-xs">{pkg.gst}</p>
              </div>

              <button className="w-full bg-gray-800 hover:bg-teal-600 text-white py-3 px-6 rounded-lg font-semibold transition-all duration-300 flex items-center justify-center group">
                Book Now
                <svg
                  className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
