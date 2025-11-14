'use client';

import { useState } from 'react';
import Link from 'next/link';

export default function ServicesMenu() {
  const [isOpen, setIsOpen] = useState(false);

  const services = [
    { name: 'Instant Rejuvenation', href: '/services/instant-rejuvenation' },
    { name: 'Premium Scrub', href: '/services/premium-scrub' },
    { name: 'EVA FAMILY Wellness Recovery', href: '/services/wellness-recovery' },
    { name: 'Tropical Scrubs', href: '/services/tropical-scrubs' },
    { name: 'Manicure', href: '/services/manicure' },
    { name: 'Pedicure', href: '/services/pedicure' },
    { name: 'Jacuzzi & Sauna', href: '/services/jacuzzi-sauna' },
    { name: 'Wraps', href: '/services/wraps' },
    { name: 'Facials', href: '/services/facials' },
    { name: 'Fruit Facials', href: '/services/fruit-facials' },
    { name: 'EVA FAMILY', href: '/services/ban-sabai-rituals' },
  ];

  return (
    <div className="relative inline-block">
      <button
        onClick={() => setIsOpen(!isOpen)}
        onMouseEnter={() => setIsOpen(true)}
        className="text-gray-700 hover:text-teal-600 font-medium transition relative group px-4 py-2"
      >
        Services
        <svg
          className={`inline-block ml-1 w-4 h-4 transition-transform ${isOpen ? 'rotate-180' : ''}`}
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
        </svg>
        <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-teal-600 transition-all group-hover:w-full"></span>
      </button>

      {isOpen && (
        <div
          className="absolute left-0 mt-2 w-64 bg-gray-800 rounded-lg shadow-2xl z-50 overflow-hidden"
          onMouseLeave={() => setIsOpen(false)}
        >
          <div className="max-h-96 overflow-y-auto">
            {services.map((service, index) => (
              <Link
                key={index}
                href={service.href}
                onClick={() => setIsOpen(false)}
                className="block px-6 py-3 text-white hover:bg-teal-600 transition-colors border-b border-gray-700 last:border-b-0"
              >
                {service.name}
              </Link>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}
