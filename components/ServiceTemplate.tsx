'use client';

import Link from 'next/link';
import Header from './Header';
import Footer from './Footer';
import { useBookingModal } from './BookingModalProvider';

interface ServiceTemplateProps {
  title: string;
  description: string;
  benefits: string[];
  duration: string;
  price: string;
  image: string;
  includes?: string[];
}

export default function ServiceTemplate({
  title,
  description,
  benefits,
  duration,
  price,
  image,
  includes,
}: ServiceTemplateProps) {
  const { openModal } = useBookingModal();
  return (
    <div className="min-h-screen">
      <Header />
      <div className="bg-gradient-to-b from-gray-50 to-white">
      {/* Hero Section */}
      <div className="relative h-96 overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url('${image}')`,
          }}
        />
        <div className="relative max-w-7xl mx-auto px-4 md:px-8 h-full flex items-center">
          <div className="text-white">
            <Link href="/" className="text-teal-400 hover:text-teal-300 mb-4 inline-block">
              ← Back to Home
            </Link>
            <h1 className="text-5xl md:text-6xl font-bold mb-4">{title}</h1>
            <p className="text-xl md:text-2xl text-gray-200">{description}</p>
          </div>
        </div>
      </div>

      {/* Content Section */}
      <div className="max-w-7xl mx-auto px-4 md:px-8 py-20">
        <div className="grid md:grid-cols-2 gap-12">
          {/* Left Column - Benefits & Details */}
          <div>
            <div className="mb-12">
              <h2 className="text-3xl font-bold text-gray-800 mb-6">Benefits</h2>
              <ul className="space-y-4">
                {benefits.map((benefit, index) => (
                  <li key={index} className="flex items-start space-x-3">
                    <svg
                      className="w-6 h-6 text-teal-600 mt-1 flex-shrink-0"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M5 13l4 4L19 7"
                      />
                    </svg>
                    <span className="text-gray-700 text-lg">{benefit}</span>
                  </li>
                ))}
              </ul>
            </div>

            {includes && includes.length > 0 && (
              <div className="mb-12">
                <h2 className="text-3xl font-bold text-gray-800 mb-6">What&apos;s Included</h2>
                <ul className="space-y-3">
                  {includes.map((item, index) => (
                    <li key={index} className="flex items-start space-x-3">
                      <span className="text-teal-600 text-xl">•</span>
                      <span className="text-gray-700">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </div>

          {/* Right Column - Pricing & Booking */}
          <div>
            <div className="bg-white rounded-2xl shadow-2xl p-8 sticky top-24">
              <div className="mb-8">
                <h3 className="text-2xl font-bold text-gray-800 mb-4">Pricing</h3>
                <div className="text-4xl font-bold text-teal-600 mb-2">{price}</div>
                <p className="text-gray-500">Duration: {duration}</p>
                <p className="text-sm text-gray-400 mt-2">*Excluding GST</p>
              </div>

              <button 
                onClick={() => openModal(`${title} - ${price}`)}
                className="w-full bg-teal-600 hover:bg-teal-700 text-white font-bold py-4 px-6 rounded-lg transition-all duration-300 transform hover:scale-105 mb-4"
              >
                Book Now
              </button>

              <button 
                onClick={() => openModal(title)}
                className="w-full bg-gray-100 hover:bg-gray-200 text-gray-800 font-semibold py-4 px-6 rounded-lg transition-all duration-300"
              >
                Contact for Details
              </button>

              <div className="mt-8 pt-8 border-t border-gray-200">
                <h4 className="font-bold text-gray-800 mb-4">Need Help?</h4>
                <div className="space-y-3 text-gray-600">
                  <p className="flex items-center space-x-2">
                    <span>📞</span>
                    <a href="tel:+919604291428" className="hover:text-teal-600">
                      +91 96042 91428
                    </a>
                  </p>
                  <p className="flex items-center space-x-2">
                    <span>✉️</span>
                    <a href="mailto:evafamilyspa@gmail.com" className="hover:text-teal-600">
                      evafamilyspa@gmail.com
                    </a>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Additional Info Section */}
        <div className="mt-20 bg-teal-50 rounded-2xl p-12">
          <h2 className="text-3xl font-bold text-gray-800 mb-6 text-center">
            Why Choose Eva Family Relaxation Spa?
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="text-5xl mb-4">👥</div>
              <h3 className="text-xl font-semibold text-gray-800 mb-2">Expert Therapists</h3>
              <p className="text-gray-600">Highly trained and certified professionals</p>
            </div>
            <div className="text-center">
              <div className="text-5xl mb-4">🌿</div>
              <h3 className="text-xl font-semibold text-gray-800 mb-2">Natural Products</h3>
              <p className="text-gray-600">Premium organic and herbal ingredients</p>
            </div>
            <div className="text-center">
              <div className="text-5xl mb-4">✨</div>
              <h3 className="text-xl font-semibold text-gray-800 mb-2">Luxury Experience</h3>
              <p className="text-gray-600">Tranquil ambiance and top-notch facilities</p>
            </div>
          </div>
        </div>
      </div>
      </div>
      <Footer />
    </div>
  );
}
