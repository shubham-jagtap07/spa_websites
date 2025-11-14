'use client';

import { useBookingModal } from './BookingModalProvider';
import Image from 'next/image';

export default function ServicesSection() {
  const { openModal } = useBookingModal();
 const packages = [
  {
    category: 'EVA FAMILY',
    name: 'Go Deep Sleep',
    duration: '2 Hrs',
    description: 'Perfect for those who struggle with sleep uncertainty, Gym / Sports / Corporate professionals',
    priceText: 'Solo ₹1299',
    gst: '(*Excluding GST)',
    image: '/spa/WhatsApp Image 2025-11-03 at 10.54.40 PM.jpeg',
  },
  {
    category: 'EVA FAMILY Combos',
    name: 'Sweet Sixteen',
    duration: '3 Hrs',
    description: 'Choice of Massage: 60 Mins / Oil Head Massage: 20 Mins / Choice Of Scrub: 30 Mins / Facial: 60 Mins / Steam Bath: 10 Mins',
    priceText: 'Full Body Waxing ₹2599 / Hot Stone massage ₹1799',
    gst: '(*Excluding GST)',
    image: '/spa/WhatsApp Image 2025-11-03 at 10.54.39 PM.jpeg',
  },
  {
    category: 'EVA FAMILY Combos',
    name: 'Mini Rejuvenation (Classic)',
    duration: '120 Mins',
    description: '1. Choose Any One 90 Mins Classic Massage: Balinese / Swedish / Sports / Thai Dry / Aroma Therapy / Deep Tissue. 2. Choose Any One 30 Mins Body Scrub',
    priceText: '90 min ₹2499',
    gst: '(*Excluding GST)',
    image: '/spa/WhatsApp Image 2025-11-03 at 10.54.40 PM (2).jpeg',
  },
  {
    category: 'EVA FAMILY Special Massage',
    name: 'Thai / Dry / Sports Massage',
    duration: '45 / 60 / 90 Mins',
    description: '1. Thai / Dry / Sports Massage (Strong Pressure). 2. Shea Butter Massage (Intense Pressure)',
    priceText: ' 45 Mins ₹1399 / 60 Mins ₹1599 / 90 Mins ₹2299 /',
    gst: '(*Excluding GST)',
    image: '/spa/WhatsApp Image 2025-11-03 at 10.54.40 PM (1).jpeg',
  },
  
  {
    category: 'Membership Plan',
    name: 'Diamond',
    duration: 'Any 60 min',
    description: '15 Massages of your choice + 5 Body Scrub Free (15 min each)',
    priceText: '₹15750',
    gst: '(*Excluding GST)',
    image: '/spa/WhatsApp Image 2025-11-03 at 10.54.39 PM (1).jpeg',
  },
  {
    category: 'Membership Plan',
    name: 'Gold',
    duration: 'Any 60 min',
    description: '10 Massages of your choice + 3 Body Scrub Free (15 min each)',
    priceText: '₹11500',
    gst: '(*Excluding GST)',
    image: '/spa/WhatsApp Image 2025-11-03 at 10.54.39 PM (1).jpeg',
  },
  {
    category: 'Membership Plan',
    name: 'Silver',
    duration: 'Any 60 min',
    description: '7 Massages of your choice + 2 Body Scrub Free (15 min each)',
    priceText: '₹8750',
    gst: '(*Excluding GST)',
    image: '/spa/WhatsApp Image 2025-11-03 at 10.54.39 PM (1).jpeg',
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
              className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 border border-gray-100"
            >
              {/* Image Section */}
              <div className="relative w-full h-96 bg-gradient-to-br from-amber-50 to-orange-50">
                <Image
                  src={pkg.image}
                  alt={pkg.name}
                  fill
                  className="object-contain"
                  sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                />
              </div>

              {/* Content Section */}
              <div className="p-8">
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

                <button 
                  onClick={() => openModal(`${pkg.name} - ${pkg.priceText}`)}
                  className="w-full bg-gray-800 hover:bg-teal-600 text-white py-3 px-6 rounded-lg font-semibold transition-all duration-300 flex items-center justify-center group"
                >
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
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
