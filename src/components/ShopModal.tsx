'use client'

import React from 'react';
import { X, MapPin, Clock, Phone, Mail, Globe, Star } from 'lucide-react';

interface Shop {
  id: string;
  name: string;
  category: string;
  description: string;
  image: string;
  phone?: string;
  email?: string;
  website?: string;
  location?: string;
}

interface ShopModalProps {
  shop: Shop | null;
  isOpen: boolean;
  onClose: () => void;
  darkMode: boolean;
}

const ShopModal: React.FC<ShopModalProps> = ({ shop, isOpen, onClose, darkMode }) => {
  const handleBackdropClick = (e: React.MouseEvent) => {
    if (e.target === e.currentTarget) {
      onClose();
    }
  };

  if (!isOpen || !shop) return null;

  const getCategoryColor = (category: string) => {
    switch (category) {
      case 'Dining':
        return darkMode ? 'bg-orange-900/30 text-orange-400' : 'bg-orange-100 text-orange-700';
      case 'Retail & Convenience':
        return darkMode ? 'bg-blue-900/30 text-blue-400' : 'bg-blue-100 text-blue-700';
      case 'Health & Wellness':
        return darkMode ? 'bg-green-900/30 text-green-400' : 'bg-green-100 text-green-700';
      default:
        return darkMode ? 'bg-gray-700 text-gray-300' : 'bg-gray-100 text-gray-700';
    }
  };

  return (
    <div 
      className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4"
      onClick={handleBackdropClick}
    >
      <div className={`relative max-w-4xl w-full max-h-[90vh] overflow-y-auto rounded-xl shadow-2xl ${
        darkMode ? 'bg-gray-800' : 'bg-white'
      }`}>
        {/* Header */}
        <div className={`sticky top-0 flex items-center justify-between p-6 border-b ${
          darkMode ? 'border-gray-700 bg-gray-800' : 'border-gray-200 bg-white'
        }`}>
          <div className="flex items-center space-x-4">
            <h2 className={`text-2xl font-bold ${darkMode ? 'text-white' : 'text-gray-900'}`}>
              {shop.name}
            </h2>
            <span className={`px-3 py-1 rounded-full text-sm font-medium ${getCategoryColor(shop.category)}`}>
              {shop.category}
            </span>
          </div>
          <button
            onClick={onClose}
            className={`p-2 rounded-lg transition-colors ${
              darkMode ? 'hover:bg-gray-700 text-gray-400' : 'hover:bg-gray-100 text-gray-500'
            }`}
          >
            <X size={24} />
          </button>
        </div>

        {/* Content */}
        <div className="p-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Image */}
            <div className="space-y-4">
              <div className="aspect-video rounded-lg overflow-hidden">
                <img
                  src={shop.image}
                  alt={shop.name}
                  className="w-full h-full object-cover"
                />
              </div>
            </div>

            {/* Details */}
            <div className="space-y-6">
              {/* Description */}
              <div>
                <h3 className={`text-lg font-semibold mb-3 ${darkMode ? 'text-white' : 'text-gray-900'}`}>
                  About
                </h3>
                <p className={`leading-relaxed ${darkMode ? 'text-gray-300' : 'text-gray-600'}`}>
                  {shop.description}
                </p>
              </div>

              {/* Contact Information */}
              <div>
                <h3 className={`text-lg font-semibold mb-3 ${darkMode ? 'text-white' : 'text-gray-900'}`}>
                  Contact & Location
                </h3>
                <div className="space-y-3">
                  <div className="flex items-center space-x-3">
                    <MapPin size={18} className={darkMode ? 'text-green-400' : 'text-green-600'} />
                    <span className={darkMode ? 'text-gray-300' : 'text-gray-700'}>
                      {shop.location || 'The Woods Shopping Centre'}
                    </span>
                  </div>
                  
                  <div className="flex items-center space-x-3">
                    <Clock size={18} className={darkMode ? 'text-green-400' : 'text-green-600'} />
                    <span className={darkMode ? 'text-gray-300' : 'text-gray-700'}>
                      Centre Hours: Mon-Fri 8am-9pm, Weekends 8am-10pm
                    </span>
                  </div>

                  {shop.phone && (
                    <div className="flex items-center space-x-3">
                      <Phone size={18} className={darkMode ? 'text-green-400' : 'text-green-600'} />
                      <a 
                        href={`tel:${shop.phone}`}
                        className={`hover:underline ${darkMode ? 'text-gray-300 hover:text-green-400' : 'text-gray-700 hover:text-green-600'}`}
                      >
                        {shop.phone}
                      </a>
                    </div>
                  )}

                  {shop.email && (
                    <div className="flex items-center space-x-3">
                      <Mail size={18} className={darkMode ? 'text-green-400' : 'text-green-600'} />
                      <a 
                        href={`mailto:${shop.email}`}
                        className={`hover:underline ${darkMode ? 'text-gray-300 hover:text-green-400' : 'text-gray-700 hover:text-green-600'}`}
                      >
                        {shop.email}
                      </a>
                    </div>
                  )}

                  {shop.website && (
                    <div className="flex items-center space-x-3">
                      <Globe size={18} className={darkMode ? 'text-green-400' : 'text-green-600'} />
                      <a 
                        href={shop.website}
                        target="_blank"
                        rel="noopener noreferrer"
                        className={`hover:underline ${darkMode ? 'text-gray-300 hover:text-green-400' : 'text-gray-700 hover:text-green-600'}`}
                      >
                        Visit Website
                      </a>
                    </div>
                  )}
                </div>
              </div>

              {/* Action Buttons */}
              <div className="flex space-x-4 pt-4">
                {shop.phone && (
                  <a
                    href={`tel:${shop.phone}`}
                    className={`flex-1 py-3 px-4 rounded-lg font-medium text-center transition-colors ${
                      darkMode 
                        ? 'bg-green-600 hover:bg-green-500 text-white' 
                        : 'bg-green-700 hover:bg-green-600 text-white'
                    }`}
                  >
                    Call Now
                  </a>
                )}
                {shop.website && (
                  <a
                    href={shop.website}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`flex-1 py-3 px-4 rounded-lg font-medium text-center transition-colors border ${
                      darkMode 
                        ? 'border-gray-600 text-gray-300 hover:bg-gray-700' 
                        : 'border-gray-300 text-gray-700 hover:bg-gray-50'
                    }`}
                  >
                    Visit Website
                  </a>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ShopModal;
