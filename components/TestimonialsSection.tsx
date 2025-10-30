'use client';

import { useState } from 'react';

export default function TestimonialsSection() {
  const [currentTestimonial, setCurrentTestimonial] = useState(0);

  const testimonials = [
    {
      name: 'Rutuja Parmane',
      text: 'We visited this spa center 1st time... we choose couple package. The service was good. No wait time we experienced. Massage rooms are quite small no space for any movements. We have not good experience with steaming process... rest average experience. They served green tea and cookies that was good in taste no doubt...you will find enough space for parking.',
      avatar: '👤',
    },
    {
      name: 'Priya Sharma',
      text: 'Amazing experience! The therapists are highly skilled and professional. The ambiance is so calming and peaceful. I tried the Swedish massage and it was absolutely relaxing. Highly recommend this place!',
      avatar: '👤',
    },
    {
      name: 'Amit Kumar',
      text: 'Best spa in the city! The hot stone massage was incredible. Staff is very friendly and attentive. The facilities are clean and well-maintained. Will definitely visit again!',
      avatar: '👤',
    },
  ];

  const nextTestimonial = () => {
    setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentTestimonial((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  return (
    <section className="py-20 bg-gradient-to-b from-white to-gray-50 relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute left-0 top-20 opacity-20">
        <svg className="w-64 h-64 text-teal-200" viewBox="0 0 100 100" fill="currentColor">
          <path d="M50 10 L60 40 L90 40 L65 60 L75 90 L50 70 L25 90 L35 60 L10 40 L40 40 Z" />
        </svg>
      </div>

      <div className="absolute right-0 bottom-20 opacity-20">
        <svg className="w-64 h-64 text-teal-200" viewBox="0 0 100 100" fill="currentColor">
          <path d="M50 10 L60 40 L90 40 L65 60 L75 90 L50 70 L25 90 L35 60 L10 40 L40 40 Z" />
        </svg>
      </div>

      <div className="max-w-5xl mx-auto px-4 md:px-8 relative">
        {/* Section Header */}
        <div className="text-center mb-12">
          <p className="text-teal-600 font-script text-2xl mb-2">What they say about us</p>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">
            The People Says
          </h2>
          <div className="flex justify-center">
            <svg className="w-12 h-12 text-teal-600" viewBox="0 0 100 100" fill="currentColor">
              <path d="M50 10 L60 40 L90 40 L65 60 L75 90 L50 70 L25 90 L35 60 L10 40 L40 40 Z" />
            </svg>
          </div>
        </div>

        {/* Testimonial Card */}
        <div className="relative">
          <div className="bg-white rounded-3xl shadow-2xl p-8 md:p-12">
            <div className="flex flex-col items-center text-center">
              {/* Avatar */}
              <div className="w-24 h-24 rounded-full bg-gray-300 flex items-center justify-center text-4xl mb-6">
                {testimonials[currentTestimonial].avatar}
              </div>

              {/* Quote Icon */}
              <div className="text-teal-600 text-6xl mb-4">&quot;</div>

              {/* Testimonial Text */}
              <p className="text-gray-700 text-lg leading-relaxed mb-6 max-w-3xl">
                {testimonials[currentTestimonial].text}
              </p>

              {/* Name */}
              <p className="text-teal-600 font-script text-2xl">
                {testimonials[currentTestimonial].name}
              </p>
            </div>
          </div>

          {/* Navigation Buttons */}
          <button
            onClick={prevTestimonial}
            className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 bg-white hover:bg-teal-600 hover:text-white text-teal-600 p-3 rounded-full shadow-lg transition z-10"
            aria-label="Previous testimonial"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
          </button>
          <button
            onClick={nextTestimonial}
            className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 bg-white hover:bg-teal-600 hover:text-white text-teal-600 p-3 rounded-full shadow-lg transition z-10"
            aria-label="Next testimonial"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </button>
        </div>

        {/* Indicators */}
        <div className="flex justify-center mt-8 space-x-2">
          {testimonials.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentTestimonial(index)}
              className={`w-3 h-3 rounded-full transition-all ${
                index === currentTestimonial ? 'bg-teal-600 w-8' : 'bg-gray-300'
              }`}
              aria-label={`Go to testimonial ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
