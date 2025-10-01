import React from 'react';
import { MapPin, Phone, Mail, Facebook, Instagram } from 'lucide-react';

interface FooterProps {
  darkMode: boolean;
}

const Footer: React.FC<FooterProps> = ({ darkMode }) => {
  return (
    <footer className="py-12 bg-gray-900 border-t border-gray-700">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="md:col-span-2">
            <h3 className="text-2xl font-bold text-green-400 mb-4">The Woods Shopping Centre</h3>
            <p className="text-gray-300 mb-4">
              Your neighborhood destination in the heart of Craighall Park. Convenience, community, and style.
            </p>
            <div className="flex space-x-4">
              <a href="https://web.facebook.com/thecolonycentre/" target="_blank" rel="noopener noreferrer"
                 className="text-gray-400 hover:text-blue-400 transition-colors">
                <Facebook size={24} />
              </a>
              <a href="https://www.instagram.com/thewoodsshoppingcentre/" target="_blank" rel="noopener noreferrer"
                 className="text-gray-400 hover:text-pink-400 transition-colors">
                <Instagram size={24} />
              </a>
            </div>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-semibold mb-4 text-green-400">Contact</h4>
            <div className="space-y-3">
              <div className="flex items-start space-x-2">
                <MapPin size={16} className="text-green-400 mt-1" />
                <span className="text-sm text-green-400">345 Jan Smuts Ave, Craighall Park, Randburg, 2196</span>
              </div>
              <div className="flex items-center space-x-2">
                <Phone size={16} className="text-green-400" />
                <span className="text-sm text-green-400">+27 11 447 8000</span>
              </div>
              <div className="flex items-center space-x-2">
                <Mail size={16} className="text-green-400" />
                <span className="text-sm text-green-400">info@thewoodscraighall.co.za</span>
              </div>
            </div>
          </div>

          {/* Hours */}
          <div>
            <h4 className="text-lg font-semibold mb-4 text-green-400">Hours</h4>
            <div className="space-y-2 text-sm text-green-400">
              <div>Mon-Fri: 8am-9pm</div>
              <div>Sat-Sun: 8am-10pm</div>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-700 mt-8 pt-8 text-center">
          <p className="text-gray-400 text-sm">
            © 2024 The Woods Shopping Centre. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;