'use client';

import { useState } from 'react';
import Link from 'next/link';
import { FaFacebook, FaInstagram, FaWhatsapp, FaPhone, FaEnvelope, FaBars, FaTimes } from 'react-icons/fa';
import ServicesMenu from './ServicesMenu';
import { useBookingModal } from './BookingModalProvider';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { openModal } = useBookingModal();

  const navLinks = [
    { name: 'Home', href: '#home' },
    { name: 'About Us', href: '#about' },
    { name: 'Services', href: '#services' },
    { name: 'Gallery', href: '#gallery' },
    { name: 'Events', href: '#events' },
    { name: 'Amenities', href: '#amenities' },
    { name: 'Blog', href: '#blog' },
    { name: 'Contact Us', href: '#contact' },
  ];

  return (
    <>
      {/* Top Bar */}
      <div className="bg-gray-900 text-white py-2 px-4 md:px-8">
        <div className="max-w-7xl mx-auto flex flex-wrap justify-between items-center text-sm">
          <div className="flex items-center space-x-6">
            <a href="tel:+919604291428" className="flex items-center space-x-2 hover:text-teal-400 transition">
              <FaPhone className="text-teal-400" />
              <span className="hidden md:inline">+91 96042 91428</span>
            </a>
            <a href="mailto:evafamilyspa@gmail.com" className="flex items-center space-x-2 hover:text-teal-400 transition">
              <FaEnvelope className="text-teal-400" />
              <span className="hidden md:inline">evafamilyspa@gmail.com</span>
            </a>
          </div>
          <div className="flex items-center space-x-4">
            <a href="https://wa.me/919604291428" target="_blank" rel="noopener noreferrer" className="hover:text-teal-400 transition">
              <FaWhatsapp size={20} />
            </a>
            <a href="https://www.facebook.com/profile.php?id=61571141206103" target="_blank" rel="noopener noreferrer" className="hover:text-teal-400 transition">
              <FaFacebook size={20} />
            </a>
            <a href="https://www.instagram.com/eva_family_relaxation_spa_" target="_blank" rel="noopener noreferrer" className="hover:text-teal-400 transition">
              <FaInstagram size={20} />
            </a>
            <button 
              onClick={() => openModal()}
              className="bg-teal-500 hover:bg-teal-600 text-white px-4 py-1 rounded-full text-sm font-medium transition"
            >
              Schedule Appointment
            </button>
          </div>
        </div>
      </div>

      {/* Main Navigation */}
      <header className="bg-white shadow-md sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 md:px-8">
          <div className="flex justify-between items-center py-4">
            {/* Logo */}
            <Link href="/" className="flex items-center space-x-3">
              <div className="text-teal-600">
                <img src="/images/logo.png" alt="Eva Family Relaxation Spa" className="w-16 h-16 object-contain" />
              </div>
              <div>
                <h1 className="text-xl font-bold text-teal-600">EVA FAMILY</h1>
                <p className="text-xs text-teal-500 tracking-wider">RELAXATION SPA</p>
              </div>
            </Link>

            {/* Desktop Navigation */}
            <nav className="hidden lg:flex items-center space-x-6">
              {navLinks.map((link) => (
                link.name === 'Services' ? (
                  <ServicesMenu key={link.name} />
                ) : (
                  <a
                    key={link.name}
                    href={link.href}
                    className="text-gray-700 hover:text-teal-600 font-medium transition relative group"
                  >
                    {link.name}
                    <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-teal-600 transition-all group-hover:w-full"></span>
                  </a>
                )
              ))}
            </nav>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="lg:hidden text-gray-700 hover:text-teal-600 transition"
            >
              {isMenuOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
            </button>
          </div>

          {/* Mobile Navigation */}
          {isMenuOpen && (
            <nav className="lg:hidden pb-4 space-y-2">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={() => setIsMenuOpen(false)}
                  className="block px-4 py-2 text-gray-700 hover:text-teal-600 hover:bg-teal-50 rounded transition"
                >
                  {link.name}
                </a>
              ))}
            </nav>
          )}
        </div>
      </header>
    </>
  );
}
