import React from 'react';
import { MapPin, Car, Clock, Users } from 'lucide-react';

interface CentreDescriptionProps {
  darkMode: boolean;
}

const CentreDescription: React.FC<CentreDescriptionProps> = ({ darkMode }) => {
  return (
    <section className="py-16 bg-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold mb-6 text-white">
            About The Woods Shopping Centre
          </h2>
          <div className="max-w-4xl mx-auto">
            <p className="text-lg sm:text-xl mb-6 text-gray-300 leading-relaxed">
              Nestled in the heart of Craighall Park, The Woods Shopping Centre (formerly The Colony) is more than a shopping destination — it's a vibrant community hub where convenience, lifestyle, and character meet. Perfectly positioned on Jan Smuts Avenue at the corner of Rothesay Avenue, our open-air complex brings together the everyday essentials you need with the experiences you love.
            </p>
            <p className="text-lg text-gray-300 leading-relaxed">
              From morning coffee catch-ups and family dinners to boutique shopping, wellness retreats, and practical services, The Woods offers a carefully curated mix for every moment of your day. With ample free parking, easy walkways, and thoughtful access between levels, it's where Craighall comes together.
            </p>
          </div>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div className={`text-center p-6 rounded-lg ${darkMode ? 'bg-gray-700' : 'bg-white'} shadow-lg`}>
            <div className={`w-16 h-16 mx-auto mb-4 rounded-full flex items-center justify-center ${
              darkMode ? 'bg-green-600' : 'bg-green-100'
            }`}>
              <MapPin size={32} className={darkMode ? 'text-white' : 'text-green-600'} />
            </div>
            <h3 className={`text-xl font-semibold mb-2 ${darkMode ? 'text-white' : 'text-gray-900'}`}>
              Prime Location
            </h3>
            <p className={`${darkMode ? 'text-gray-300' : 'text-gray-600'}`}>
              Corner of Jan Smuts Avenue and Rothesay Avenue in Craighall Park
            </p>
          </div>

          <div className={`text-center p-6 rounded-lg ${darkMode ? 'bg-gray-700' : 'bg-white'} shadow-lg`}>
            <div className={`w-16 h-16 mx-auto mb-4 rounded-full flex items-center justify-center ${
              darkMode ? 'bg-green-600' : 'bg-green-100'
            }`}>
              <Car size={32} className={darkMode ? 'text-white' : 'text-green-600'} />
            </div>
            <h3 className={`text-xl font-semibold mb-2 ${darkMode ? 'text-white' : 'text-gray-900'}`}>
              Free Parking
            </h3>
            <p className={`${darkMode ? 'text-gray-300' : 'text-gray-600'}`}>
              Ample parking spaces with easy access to all levels of the centre
            </p>
          </div>

          <div className={`text-center p-6 rounded-lg ${darkMode ? 'bg-gray-700' : 'bg-white'} shadow-lg`}>
            <div className={`w-16 h-16 mx-auto mb-4 rounded-full flex items-center justify-center ${
              darkMode ? 'bg-green-600' : 'bg-green-100'
            }`}>
              <Clock size={32} className={darkMode ? 'text-white' : 'text-green-600'} />
            </div>
            <h3 className={`text-xl font-semibold mb-2 ${darkMode ? 'text-white' : 'text-gray-900'}`}>
              Extended Hours
            </h3>
            <p className={`${darkMode ? 'text-gray-300' : 'text-gray-600'}`}>
              Open 7 days a week with convenient hours to fit your schedule
            </p>
          </div>

          <div className={`text-center p-6 rounded-lg ${darkMode ? 'bg-gray-700' : 'bg-white'} shadow-lg`}>
            <div className={`w-16 h-16 mx-auto mb-4 rounded-full flex items-center justify-center ${
              darkMode ? 'bg-green-600' : 'bg-green-100'
            }`}>
              <Users size={32} className={darkMode ? 'text-white' : 'text-green-600'} />
            </div>
            <h3 className={`text-xl font-semibold mb-2 ${darkMode ? 'text-white' : 'text-gray-900'}`}>
              Community Hub
            </h3>
            <p className={`${darkMode ? 'text-gray-300' : 'text-gray-600'}`}>
              A vibrant meeting place where the Craighall community comes together
            </p>
          </div>
        </div>

        {/* Level Information */}
        <div className="mt-16">
          <h3 className={`text-2xl font-bold text-center mb-8 ${darkMode ? 'text-white' : 'text-gray-900'}`}>
            Multi-Level Shopping Experience
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className={`p-6 rounded-lg ${darkMode ? 'bg-gray-700' : 'bg-white'} shadow-lg`}>
              <h4 className={`text-xl font-semibold mb-3 ${darkMode ? 'text-green-400' : 'text-green-600'}`}>
                Ground Level
              </h4>
              <p className={`mb-3 ${darkMode ? 'text-gray-300' : 'text-gray-600'}`}>
                Main Square with restaurants and primary entrances
              </p>
              <ul className={`text-sm space-y-1 ${darkMode ? 'text-gray-400' : 'text-gray-500'}`}>
                <li>• Restaurants & dining</li>
                <li>• Main entrances</li>
                <li>• Central meeting area</li>
              </ul>
            </div>

            <div className={`p-6 rounded-lg ${darkMode ? 'bg-gray-700' : 'bg-white'} shadow-lg`}>
              <h4 className={`text-xl font-semibold mb-3 ${darkMode ? 'text-green-400' : 'text-green-600'}`}>
                Middle Level
              </h4>
              <p className={`mb-3 ${darkMode ? 'text-gray-300' : 'text-gray-600'}`}>
                Shopping level with supermarket and retail stores
              </p>
              <ul className={`text-sm space-y-1 ${darkMode ? 'text-gray-400' : 'text-gray-500'}`}>
                <li>• Checkers Supermarket</li>
                <li>• Retail stores</li>
                <li>• Back parking access</li>
              </ul>
            </div>

            <div className={`p-6 rounded-lg ${darkMode ? 'bg-gray-700' : 'bg-white'} shadow-lg`}>
              <h4 className={`text-xl font-semibold mb-3 ${darkMode ? 'text-green-400' : 'text-green-600'}`}>
                Upper Level
              </h4>
              <p className={`mb-3 ${darkMode ? 'text-gray-300' : 'text-gray-600'}`}>
                Professional services and wellness facilities
              </p>
              <ul className={`text-sm space-y-1 ${darkMode ? 'text-gray-400' : 'text-gray-500'}`}>
                <li>• Medical facilities</li>
                <li>• Wellness centers</li>
                <li>• Professional services</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CentreDescription;
