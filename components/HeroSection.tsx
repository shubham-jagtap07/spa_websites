'use client';

import { useState, useEffect } from 'react';

export default function HeroSection() {
  const [currentSlide, setCurrentSlide] = useState(0);

  const slides = [
    {
      title: 'COLD PLUNGE',
      subtitle: 'Therapy Now at Ban Sabai',
      location: 'Balewadi',
      description: 'The ultimate recovery boost for athletes & sports enthusiasts.',
      benefits: [
        'Burn Fat',
        'Fast Recovery',
        'Sleep Better',
        'Sharpen Focus',
        'Boost Mood',
        'Strengthen Immunity',
      ],
      image: '/images/hero-pool.jpg',
    },
    {
      title: 'WELLNESS',
      subtitle: 'Experience Pure Relaxation',
      location: 'NIBM Road',
      description: 'Discover tranquility and rejuvenation at our premium spa.',
      benefits: [
        'Deep Tissue Massage',
        'Aromatherapy',
        'Body Scrubs',
        'Facial Treatments',
        'Steam & Sauna',
        'Reflexology',
      ],
      image: '/images/hero-spa.jpg',
    },
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5000);
    return () => clearInterval(timer);
  }, [slides.length]);

  return (
    <section id="home" className="relative h-[600px] md:h-[700px] overflow-hidden">
      {slides.map((slide, index) => (
        <div
          key={index}
          className={`absolute inset-0 transition-opacity duration-1000 ${
            index === currentSlide ? 'opacity-100' : 'opacity-0'
          }`}
        >
          <div
            className="absolute inset-0 bg-cover bg-center"
            style={{
              backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0.3)), url('https://images.unsplash.com/photo-${
                index === 0 ? '1571902943202-507ec2618e8f' : '1544161515-4ab6ce6db874'
              }?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80')`,
            }}
          />
          
          <div className="relative max-w-7xl mx-auto px-4 md:px-8 h-full flex items-center">
            <div className="grid md:grid-cols-2 gap-8 items-center w-full">
              {/* Left Side - Benefits */}
              <div className="bg-teal-600/90 backdrop-blur-sm rounded-2xl p-8 shadow-2xl">
                <ul className="space-y-4 text-white">
                  {slide.benefits.map((benefit, i) => (
                    <li key={i} className="flex items-center space-x-3 text-lg">
                      <span className="text-2xl">•</span>
                      <span className="font-medium">{benefit}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Right Side - Title */}
              <div className="text-white text-right">
                <h2 className="text-5xl md:text-7xl font-bold mb-4 drop-shadow-lg">
                  {slide.title}
                </h2>
                <p className="text-2xl md:text-4xl mb-2 text-teal-300 drop-shadow-lg">
                  {slide.subtitle}
                </p>
                <p className="text-3xl md:text-5xl font-bold mb-4 drop-shadow-lg">
                  {slide.location}
                </p>
                <p className="text-lg md:text-xl mb-8 drop-shadow-lg max-w-xl ml-auto">
                  {slide.description}
                </p>
              </div>
            </div>
          </div>

          {/* Slide Indicators */}
          <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex space-x-3">
            {slides.map((_, i) => (
              <button
                key={i}
                onClick={() => setCurrentSlide(i)}
                className={`w-3 h-3 rounded-full transition-all ${
                  i === currentSlide ? 'bg-teal-500 w-8' : 'bg-white/50'
                }`}
                aria-label={`Go to slide ${i + 1}`}
              />
            ))}
          </div>
        </div>
      ))}
    </section>
  );
}
