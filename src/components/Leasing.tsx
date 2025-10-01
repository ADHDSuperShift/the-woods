'use client'

import React, { useState } from 'react';
import { MapPin, Users, TrendingUp, ArrowRight } from 'lucide-react';
import ContactModal from './ContactModal';

interface LeasingProps {
  darkMode: boolean;
}

const Leasing: React.FC<LeasingProps> = ({ darkMode }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalType, setModalType] = useState<'leasing' | 'general'>('leasing');

  const handleInquireNow = () => {
    setModalType('leasing');
    setIsModalOpen(true);
  };

  const handleGetInTouch = () => {
    setModalType('general');
    setIsModalOpen(true);
  };

  const benefits = [
    {
      icon: <MapPin className="text-green-500" size={24} />,
      title: 'Prime Location',
      description: 'Located on Jan Smuts Avenue in the heart of Craighall Park with high visibility and foot traffic.'
    },
    {
      icon: <Users className="text-blue-500" size={24} />,
      title: 'Established Community',
      description: 'Join a thriving shopping centre with loyal customers and established foot traffic patterns.'
    },
    {
      icon: <TrendingUp className="text-purple-500" size={24} />,
      title: 'Growth Potential',
      description: 'Benefit from the growing Craighall Park area and our marketing initiatives to drive traffic.'
    }
  ];

  const availableSpaces = [
    { id: '1', size: '50m²', type: 'Retail', rent: 'R15,000/month', status: 'Available' },
    { id: '2', size: '75m²', type: 'Restaurant', rent: 'R22,000/month', status: 'Available' },
    { id: '3', size: '30m²', type: 'Service', rent: 'R12,000/month', status: 'Coming Soon' },
    { id: '4', size: '100m²', type: 'Anchor Store', rent: 'R35,000/month', status: 'Available' }
  ];

  return (
    <section id="leasing" className={`py-20 ${darkMode ? 'bg-gray-800' : 'bg-white'}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className={`text-3xl sm:text-4xl font-bold mb-4 ${darkMode ? 'text-white' : 'text-gray-900'}`}>
            Leasing Opportunities
          </h2>
          <p className={`text-lg max-w-2xl mx-auto ${darkMode ? 'text-gray-300' : 'text-gray-600'}`}>
            Join our thriving shopping centre community and grow your business in Craighall Park's premier retail destination.
          </p>
        </div>

        {/* Benefits */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          {benefits.map((benefit, index) => (
            <div key={index} className={`p-6 rounded-xl ${
              darkMode ? 'bg-gray-900 border border-gray-700' : 'bg-gray-50 border border-gray-200'
            } text-center hover:shadow-lg transition-shadow`}>
              <div className="flex justify-center mb-4">
                {benefit.icon}
              </div>
              <h3 className={`text-xl font-semibold mb-3 ${darkMode ? 'text-white' : 'text-gray-900'}`}>
                {benefit.title}
              </h3>
              <p className={darkMode ? 'text-gray-300' : 'text-gray-600'}>
                {benefit.description}
              </p>
            </div>
          ))}
        </div>

        {/* Available Spaces */}
        <div className="mb-16">
          <h3 className={`text-2xl font-bold text-center mb-8 ${darkMode ? 'text-white' : 'text-gray-900'}`}>
            Available Retail Spaces
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {availableSpaces.map((space) => (
              <div key={space.id} className={`p-6 rounded-xl border ${
                darkMode ? 'bg-gray-900 border-gray-700' : 'bg-white border-gray-200'
              } hover:shadow-lg transition-shadow`}>
                <div className="flex justify-between items-start mb-4">
                  <h4 className={`font-semibold ${darkMode ? 'text-white' : 'text-gray-900'}`}>
                    {space.size}
                  </h4>
                  <span className={`px-2 py-1 text-xs rounded-full ${
                    space.status === 'Available' 
                      ? 'bg-green-100 text-green-700' 
                      : 'bg-yellow-100 text-yellow-700'
                  }`}>
                    {space.status}
                  </span>
                </div>
                <p className={`text-sm mb-2 ${darkMode ? 'text-gray-300' : 'text-gray-600'}`}>
                  {space.type}
                </p>
                <p className={`font-bold mb-4 ${darkMode ? 'text-green-400' : 'text-green-700'}`}>
                  {space.rent}
                </p>
                <button
                  onClick={handleInquireNow}
                  className={`w-full py-2 px-4 rounded-lg font-medium transition-colors flex items-center justify-center space-x-2 ${
                    darkMode 
                      ? 'bg-green-600 hover:bg-green-500 text-white' 
                      : 'bg-green-700 hover:bg-green-600 text-white'
                  }`}
                >
                  <span>Inquire Now</span>
                  <ArrowRight size={16} />
                </button>
              </div>
            ))}
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center">
          <h3 className={`text-2xl font-bold mb-4 ${darkMode ? 'text-white' : 'text-gray-900'}`}>
            Ready to Join Our Community?
          </h3>
          <p className={`text-lg mb-8 max-w-2xl mx-auto ${darkMode ? 'text-gray-300' : 'text-gray-600'}`}>
            Contact us today to discuss your leasing requirements and discover how your business can thrive at The Woods Shopping Centre.
          </p>
          <button
            onClick={handleGetInTouch}
            className={`px-8 py-4 rounded-lg font-semibold transition-all duration-300 transform hover:scale-105 ${
              darkMode 
                ? 'bg-green-600 hover:bg-green-500 text-white' 
                : 'bg-green-700 hover:bg-green-600 text-white'
            } shadow-lg hover:shadow-xl flex items-center space-x-2 mx-auto`}
          >
            <span>Get in Touch</span>
            <ArrowRight size={20} />
          </button>
        </div>
      </div>

      <ContactModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        darkMode={darkMode}
        type={modalType}
      />
    </section>
  );
};

export default Leasing;