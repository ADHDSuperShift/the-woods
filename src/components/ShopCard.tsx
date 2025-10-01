import React from 'react';
import { ExternalLink, Phone, MapPin, Mail } from 'lucide-react';

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

interface ShopCardProps {
  shop: Shop;
  darkMode: boolean;
  onClick: (shop: Shop) => void;
}

const ShopCard: React.FC<ShopCardProps> = ({ shop, darkMode, onClick }) => {
  const handleVisitWebsite = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (shop.website) {
      window.open(shop.website, '_blank');
    }
  };

  const handleCall = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (shop.phone) {
      window.open(`tel:${shop.phone}`, '_self');
    }
  };

  const handleEmail = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (shop.email) {
      window.open(`mailto:${shop.email}`, '_self');
    }
  };

  const handleCardClick = () => {
    onClick(shop);
  };

  return (
    <div 
      onClick={handleCardClick}
      className={`group relative overflow-hidden rounded-xl shadow-lg transition-all duration-300 hover:shadow-2xl hover:scale-105 cursor-pointer ${
        darkMode ? 'bg-gray-800 border border-gray-700' : 'bg-white border border-gray-200'
      }`}
    >
      {/* Image */}
      <div className="relative h-48 overflow-hidden">
        <img
          src={shop.image}
          alt={shop.name}
          className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
      </div>

      {/* Content */}
      <div className="p-6">
        <div className="flex items-start justify-between mb-3">
          <h3 className={`text-lg font-semibold ${darkMode ? 'text-white' : 'text-gray-900'}`}>
            {shop.name}
          </h3>
          <span className={`px-2 py-1 text-xs rounded-full ${
            shop.category === 'Dining' 
              ? darkMode ? 'bg-orange-900/30 text-orange-400' : 'bg-orange-100 text-orange-700'
              : shop.category === 'Health & Wellness'
              ? darkMode ? 'bg-green-900/30 text-green-400' : 'bg-green-100 text-green-700'
              : darkMode ? 'bg-blue-900/30 text-blue-400' : 'bg-blue-100 text-blue-700'
          }`}>
            {shop.category.split(' ')[0]}
          </span>
        </div>

        <p className={`text-sm mb-4 line-clamp-3 ${darkMode ? 'text-gray-300' : 'text-gray-600'}`}>
          {shop.description}
        </p>

        {shop.location && (
          <div className="flex items-center space-x-2 mb-3">
            <MapPin size={14} className={darkMode ? 'text-green-400' : 'text-green-600'} />
            <span className={`text-xs ${darkMode ? 'text-gray-400' : 'text-gray-500'}`}>
              {shop.location}
            </span>
          </div>
        )}

        {/* Action Buttons */}
        <div className="flex space-x-2">
          {shop.website && (
            <button
              onClick={handleVisitWebsite}
              className={`flex-1 flex items-center justify-center space-x-2 px-4 py-2 rounded-lg text-sm font-medium transition-colors ${
                darkMode 
                  ? 'bg-green-600 hover:bg-green-500 text-white' 
                  : 'bg-green-700 hover:bg-green-600 text-white'
              }`}
            >
              <ExternalLink size={14} />
              <span>Visit</span>
            </button>
          )}
          
          {shop.phone && (
            <button
              onClick={handleCall}
              className={`px-3 py-2 rounded-lg text-sm font-medium transition-colors border ${
                darkMode 
                  ? 'border-gray-600 text-gray-300 hover:bg-gray-700' 
                  : 'border-gray-300 text-gray-700 hover:bg-gray-50'
              }`}
              title="Call"
            >
              <Phone size={14} />
            </button>
          )}

          {shop.email && (
            <button
              onClick={handleEmail}
              className={`px-3 py-2 rounded-lg text-sm font-medium transition-colors border ${
                darkMode 
                  ? 'border-gray-600 text-gray-300 hover:bg-gray-700' 
                  : 'border-gray-300 text-gray-700 hover:bg-gray-50'
              }`}
              title="Email"
            >
              <Mail size={14} />
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

export default ShopCard;