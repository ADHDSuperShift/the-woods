import React, { useState } from 'react';
import { ArrowRight, MapPin, Clock } from 'lucide-react';
import ContactModal from './ContactModal';

interface HeroProps {
  darkMode: boolean;
  setActiveSection: (section: string) => void;
}

const Hero: React.FC<HeroProps> = ({ darkMode, setActiveSection }) => {
  const [isContactModalOpen, setIsContactModalOpen] = useState(false);

  const handleExploreShops = () => {
    setActiveSection('shops');
    const element = document.getElementById('shops');
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  const handleContactUs = () => {
    setIsContactModalOpen(true);
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `url('https://d64gsuwffb70l.cloudfront.net/68d7c3fe7f348cca8c4b825b_1758971060193_168d4086.webp')`
        }}
      >
        <div className="absolute inset-0 bg-black/60" />
      </div>

      {/* Content */}
      <div className="relative z-10 text-center px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto">
        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6 animate-fade-in">
          Visit The Woods
          <span className="block text-2xl sm:text-3xl lg:text-4xl mt-2 text-green-400">
            Shopping Centre
          </span>
        </h1>
        
        <div className="mb-8">
          <p className="text-xl sm:text-2xl font-medium mb-6 text-green-400">
            Your Lifestyle, Your Neighbourhood, Your Woods.
          </p>
        </div>

        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
          <button
            onClick={handleExploreShops}
            className="group px-8 py-4 rounded-lg font-semibold transition-all duration-300 transform hover:scale-105 bg-green-600 hover:bg-green-500 text-white shadow-lg hover:shadow-xl flex items-center space-x-2"
          >
            <span>Explore Our Shops</span>
            <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
          </button>
          
          <button
            onClick={handleContactUs}
            className="px-8 py-4 rounded-lg font-semibold transition-all duration-300 border-2 border-white text-white hover:bg-white hover:text-gray-900"
          >
            Contact Us
          </button>
        </div>

        {/* Quick Info Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 max-w-2xl mx-auto">
          <div className="p-4 rounded-lg transition-all duration-300 bg-green-600 hover:bg-green-500 shadow-lg hover:shadow-xl">
            <div className="flex items-center space-x-3 text-white">
              <MapPin size={20} className="text-white" />
              <div className="text-left">
                <p className="font-semibold">Location</p>
                <p className="text-sm opacity-90">Jan Smuts Ave & Rothesay Ave, Craighall Park</p>
              </div>
            </div>
          </div>
          
          <div className="p-4 rounded-lg transition-all duration-300 bg-green-600 hover:bg-green-500 shadow-lg hover:shadow-xl">
            <div className="flex items-center space-x-3 text-white">
              <Clock size={20} className="text-white" />
              <div className="text-left">
                <p className="font-semibold">Hours</p>
                <p className="text-sm opacity-90">Mon-Fri 8am-9pm, Weekends 8am-10pm</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <ContactModal
        isOpen={isContactModalOpen}
        onClose={() => setIsContactModalOpen(false)}
        darkMode={darkMode}
        type="general"
      />
    </section>
  );
};

export default Hero;