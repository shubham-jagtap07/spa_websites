export default function AmenitiesSection() {
  const amenities = [
    {
      title: 'Jacuzzi',
      icon: '🛁',
      image: 'https://images.unsplash.com/photo-1596178060671-7a80dc8059ea?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    },
    {
      title: 'Free Consultation',
      icon: '💼',
      image: 'https://images.unsplash.com/photo-1559599238-9a12d4e3bd5d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    },
    {
      title: 'Parking Available',
      icon: '🅿️',
      image: 'https://images.unsplash.com/photo-1506521781263-d8422e82f27a?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    },
  ];

  return (
    <section id="amenities" className="py-20 bg-gradient-to-b from-gray-50 to-white">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <p className="text-teal-600 font-script text-2xl mb-2">Best from the Amenities</p>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">
            Amenities
          </h2>
          <div className="flex justify-center">
            <svg className="w-12 h-12 text-teal-600" viewBox="0 0 100 100" fill="currentColor">
              <path d="M50 10 L60 40 L90 40 L65 60 L75 90 L50 70 L25 90 L35 60 L10 40 L40 40 Z" />
            </svg>
          </div>
        </div>

        {/* Amenities Grid */}
        <div className="grid md:grid-cols-3 gap-8">
          {amenities.map((amenity, index) => (
            <div
              key={index}
              className="group relative overflow-hidden rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-300 hover:-translate-y-2"
            >
              {/* Image with overlay */}
              <div className="relative h-80 overflow-hidden">
                <div
                  className="absolute inset-0 bg-cover bg-center transition-transform duration-500 group-hover:scale-110"
                  style={{ backgroundImage: `url('${amenity.image}')` }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-gray-900/50 to-transparent" />

                {/* Content */}
                <div className="absolute inset-0 flex flex-col items-center justify-center text-white p-6">
                  <div className="text-6xl mb-4 group-hover:scale-110 transition-transform">
                    {amenity.icon}
                  </div>
                  <h3 className="text-2xl font-bold text-center">{amenity.title}</h3>
                </div>
              </div>

              {/* Hover effect border */}
              <div className="absolute inset-0 border-4 border-teal-500 opacity-0 group-hover:opacity-100 transition-opacity rounded-2xl pointer-events-none" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
