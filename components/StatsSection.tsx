export default function StatsSection() {
  const stats = [
    {
      icon: '💆',
      count: '3990',
      title: 'Massage Therapy',
    },
    {
      icon: '🧖',
      count: '1100',
      title: 'Sauna, Steam',
    },
    {
      icon: '🦶',
      count: '800',
      title: 'Foot Reflexology',
    },
    {
      icon: '🎋',
      count: '1310',
      title: 'Skin rejuvenation',
    },
  ];

  return (
    <section className="bg-gray-800 py-16 relative">
      <div
        className="absolute inset-0 opacity-10"
        style={{
          backgroundImage: `url('https://images.unsplash.com/photo-1540555700478-4be289fbecef?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80')`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      />
      
      <div className="relative max-w-7xl mx-auto px-4 md:px-8">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <div
              key={index}
              className="text-center group hover:transform hover:scale-110 transition-all duration-300"
            >
              <div className="text-5xl md:text-6xl mb-4 group-hover:animate-bounce">
                {stat.icon}
              </div>
              <div className="text-4xl md:text-5xl font-bold text-white mb-2 group-hover:text-teal-400 transition">
                {stat.count}
              </div>
              <div className="text-gray-300 text-sm md:text-base font-medium">
                {stat.title}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
