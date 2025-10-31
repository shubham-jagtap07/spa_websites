import { FaFacebook, FaInstagram, FaWhatsapp, FaPhone, FaEnvelope, FaMapMarkerAlt } from 'react-icons/fa';

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        <div className="grid md:grid-cols-4 gap-12 mb-12">
          {/* About Section */}
          <div className="md:col-span-2">
            <div className="flex items-center space-x-3 mb-6">
              <div className="text-teal-500">
                <img src="/images/logo.png" alt="Eva Family Relaxation Spa" className="w-16 h-16 object-contain" />
              </div>
              <div>
                <h3 className="text-2xl font-bold text-teal-500">EVA FAMILY</h3>
                <p className="text-xs text-teal-400 tracking-wider">RELAXATION SPA</p>
              </div>
            </div>
            <p className="text-gray-400 leading-relaxed mb-6">
              Experience ultimate relaxation and rejuvenation at Eva Family Relaxation Spa. 
              We offer premium spa services including massage therapy, body treatments, 
              facial care, and wellness packages designed to refresh your mind, body, and soul.
            </p>
            <div className="flex space-x-4">
              <a
                href="https://wa.me/919604291428"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-teal-600 hover:bg-teal-700 p-3 rounded-full transition"
                aria-label="WhatsApp"
              >
                <FaWhatsapp size={20} />
              </a>
              <a
                href="https://www.facebook.com/profile.php?id=61571141206103"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-teal-600 hover:bg-teal-700 p-3 rounded-full transition"
                aria-label="Facebook"
              >
                <FaFacebook size={20} />
              </a>
              <a
                href="https://www.instagram.com/eva_family_relaxation_spa_"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-teal-600 hover:bg-teal-700 p-3 rounded-full transition"
                aria-label="Instagram"
              >
                <FaInstagram size={20} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-xl font-bold mb-6 text-teal-500">Quick Links</h4>
            <ul className="space-y-3">
              <li>
                <a href="#home" className="text-gray-400 hover:text-teal-400 transition">
                  Home
                </a>
              </li>
              <li>
                <a href="#about" className="text-gray-400 hover:text-teal-400 transition">
                  About Us
                </a>
              </li>
              <li>
                <a href="#services" className="text-gray-400 hover:text-teal-400 transition">
                  Services
                </a>
              </li>
              <li>
                <a href="#gallery" className="text-gray-400 hover:text-teal-400 transition">
                  Gallery
                </a>
              </li>
              <li>
                <a href="#amenities" className="text-gray-400 hover:text-teal-400 transition">
                  Amenities
                </a>
              </li>
              <li>
                <a href="#contact" className="text-gray-400 hover:text-teal-400 transition">
                  Contact
                </a>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-xl font-bold mb-6 text-teal-500">Contact Us</h4>
            <ul className="space-y-4 text-gray-400">
              <li className="flex items-start space-x-3">
                <FaMapMarkerAlt className="text-teal-500 mt-1 flex-shrink-0" />
                <div>
                  <p className="font-semibold text-white">Baramati</p>
                  <p className="text-sm">Near KFC & Pizza Hut, Infront of Sahyog Society, Baramati 413102</p>
                </div>
              </li>
              <li className="flex items-center space-x-3">
                <FaPhone className="text-teal-500" />
                <a href="tel:+919604291428" className="hover:text-teal-400 transition">
                  +91 96042 91428
                </a>
              </li>
              <li className="flex items-center space-x-3">
                <FaEnvelope className="text-teal-500" />
                <a href="mailto:evafamilyspa@gmail.com" className="hover:text-teal-400 transition">
                  evafamilyspa@gmail.com
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-800 pt-8 mt-8">
          <div className="flex flex-col md:flex-row justify-between items-center text-gray-400 text-sm">
            <p>© 2025 EVA FAMILY RELAXATION SPA. All rights reserved.</p>
            <div className="flex space-x-6 mt-4 md:mt-0">
              <a href="#" className="hover:text-teal-400 transition">
                Privacy Policy
              </a>
              <a href="#" className="hover:text-teal-400 transition">
                Terms of Service
              </a>
              <a href="#" className="hover:text-teal-400 transition">
                Sitemap
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
