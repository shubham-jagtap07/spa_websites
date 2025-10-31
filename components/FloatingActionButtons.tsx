'use client';

import { FaPhone, FaWhatsapp } from 'react-icons/fa';

export default function FloatingActionButtons() {
  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col gap-4">
      {/* WhatsApp Button */}
      <a
        href="https://wa.me/919604291428"
        target="_blank"
        rel="noopener noreferrer"
        className="group relative bg-green-500 hover:bg-green-600 text-white p-4 rounded-full shadow-2xl transition-all duration-300 transform hover:scale-110 animate-bounce"
        aria-label="Contact us on WhatsApp"
      >
        <FaWhatsapp size={28} />
        <span className="absolute right-full mr-3 top-1/2 -translate-y-1/2 bg-gray-800 text-white px-3 py-2 rounded-lg text-sm whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none">
          Chat on WhatsApp
        </span>
      </a>

      {/* Call Button */}
      <a
        href="tel:+919604291428"
        className="group relative bg-teal-600 hover:bg-teal-700 text-white p-4 rounded-full shadow-2xl transition-all duration-300 transform hover:scale-110"
        aria-label="Call us now"
      >
        <FaPhone size={24} />
        <span className="absolute right-full mr-3 top-1/2 -translate-y-1/2 bg-gray-800 text-white px-3 py-2 rounded-lg text-sm whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none">
          Call Now
        </span>
      </a>
    </div>
  );
}
