'use client'

import React, { useState } from 'react';
import { MapPin, ArrowUp, ArrowDown, Car, Navigation } from 'lucide-react';

// TypeScript interface for Megaplex level descriptions
interface MegaplexLevel {
  name: string;
  description: string;
  keyFeatures: string[];
  accessNotes?: string;
}

interface CentreMapProps {
  darkMode: boolean;
}

const CentreMap: React.FC<CentreMapProps> = ({ darkMode }) => {
  const [selectedLevel, setSelectedLevel] = useState<string>('Ground Level');

  // Create a Map from level names to their details
  const megaplexLevels = new Map<string, MegaplexLevel>([
    [
      'Ground Level',
      {
        name: 'Ground Level',
        description: 'Main Square / Ground Level area with restaurants and front entrances.',
        keyFeatures: ['Restaurants', 'Front entrances', 'Main dining area'],
        accessNotes: 'Primary entry point for visitors via Jan Smuts Avenue.'
      }
    ],
    [
      'Middle Level',
      {
        name: 'Middle Level',
        description: 'Back Parking / Middle Level area hosting the supermarket, pharmacy, Baby City, Lillie etc.',
        keyFeatures: ['Checkers Supermarket', 'Colony Pharmacy', 'Baby City', 'Lillie Jewellery'],
        accessNotes: 'Accessible via back parking with convenient vehicle access.'
      }
    ],
    [
      'Upper Level',
      {
        name: 'Upper Level',
        description: 'First Floor (above shops) for offices, medical, wellness, and services.',
        keyFeatures: ['Medical facilities', 'Wellness centers', 'Professional services', 'Educational centers'],
        accessNotes: 'Located above the shops, accessible via stairs and walkways.'
      }
    ],
    [
      'Lower Level',
      {
        name: 'Lower Level',
        description: 'Downstairs from back parking for shops like Dial-a-Bed, Good Boi Club, Kiddie Ma Jigs, First Choice Flooring etc.',
        keyFeatures: ['Dial-a-Bed', 'Good Boi Club', 'Kiddie Ma Jigs', 'First Choice Flooring'],
        accessNotes: 'Accessed downstairs from the back parking area via Rothesay Avenue.'
      }
    ]
  ]);

  const levelOrder = ['Upper Level', 'Middle Level', 'Ground Level', 'Lower Level'];

  const getLevelIcon = (levelName: string) => {
    switch (levelName) {
      case 'Upper Level':
        return <ArrowUp size={20} className={darkMode ? 'text-blue-400' : 'text-blue-600'} />;
      case 'Middle Level':
        return <Car size={20} className={darkMode ? 'text-green-400' : 'text-green-600'} />;
      case 'Ground Level':
        return <MapPin size={20} className={darkMode ? 'text-orange-400' : 'text-orange-600'} />;
      case 'Lower Level':
        return <ArrowDown size={20} className={darkMode ? 'text-purple-400' : 'text-purple-600'} />;
      default:
        return <MapPin size={20} />;
    }
  };

  const getLevelColor = (levelName: string) => {
    switch (levelName) {
      case 'Upper Level':
        return darkMode ? 'bg-blue-900/30 text-blue-400 border-blue-600' : 'bg-blue-100 text-blue-700 border-blue-300';
      case 'Middle Level':
        return darkMode ? 'bg-green-900/30 text-green-400 border-green-600' : 'bg-green-100 text-green-700 border-green-300';
      case 'Ground Level':
        return darkMode ? 'bg-orange-900/30 text-orange-400 border-orange-600' : 'bg-orange-100 text-orange-700 border-orange-300';
      case 'Lower Level':
        return darkMode ? 'bg-purple-900/30 text-purple-400 border-purple-600' : 'bg-purple-100 text-purple-700 border-purple-300';
      default:
        return darkMode ? 'bg-gray-800 text-gray-300' : 'bg-gray-100 text-gray-700';
    }
  };

  return (
    <section id="centre-map" className={`py-20 ${darkMode ? 'bg-gray-800' : 'bg-white'}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className={`text-3xl sm:text-4xl font-bold mb-4 ${darkMode ? 'text-white' : 'text-gray-900'}`}>
            Centre Layout & Navigation
          </h2>
          <p className={`text-lg max-w-2xl mx-auto ${darkMode ? 'text-gray-300' : 'text-gray-600'}`}>
            Find your way around The Woods with our multi-level layout guide. Each level offers unique experiences and convenient access.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Level Selection */}
          <div className="lg:col-span-1">
            <h3 className={`text-xl font-semibold mb-6 ${darkMode ? 'text-white' : 'text-gray-900'}`}>
              Select Level
            </h3>
            <div className="space-y-3">
              {levelOrder.map((levelName) => {
                const isSelected = selectedLevel === levelName;
                return (
                  <button
                    key={levelName}
                    onClick={() => setSelectedLevel(levelName)}
                    className={`w-full p-4 rounded-lg text-left transition-all duration-200 border-2 ${
                      isSelected 
                        ? getLevelColor(levelName)
                        : darkMode 
                        ? 'bg-gray-700 text-gray-300 border-gray-600 hover:bg-gray-600' 
                        : 'bg-gray-50 text-gray-700 border-gray-200 hover:bg-gray-100'
                    }`}
                  >
                    <div className="flex items-center space-x-3">
                      {getLevelIcon(levelName)}
                      <span className="font-medium">{levelName}</span>
                    </div>
                  </button>
                );
              })}
            </div>
          </div>

          {/* Level Details */}
          <div className="lg:col-span-2">
            {(() => {
              const level = megaplexLevels.get(selectedLevel);
              if (!level) return null;

              return (
                <div className={`p-8 rounded-xl border ${
                  darkMode ? 'bg-gray-700 border-gray-600' : 'bg-gray-50 border-gray-200'
                }`}>
                  <div className="flex items-center space-x-3 mb-6">
                    {getLevelIcon(level.name)}
                    <h3 className={`text-2xl font-bold ${darkMode ? 'text-white' : 'text-gray-900'}`}>
                      {level.name}
                    </h3>
                  </div>

                  <p className={`text-lg mb-6 ${darkMode ? 'text-gray-300' : 'text-gray-600'}`}>
                    {level.description}
                  </p>

                  <div className="mb-6">
                    <h4 className={`text-lg font-semibold mb-3 ${darkMode ? 'text-white' : 'text-gray-900'}`}>
                      Key Features
                    </h4>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                      {level.keyFeatures.map((feature, index) => (
                        <div
                          key={index}
                          className={`p-3 rounded-lg ${
                            darkMode ? 'bg-gray-600' : 'bg-white'
                          } border ${darkMode ? 'border-gray-500' : 'border-gray-200'}`}
                        >
                          <span className={`text-sm ${darkMode ? 'text-gray-200' : 'text-gray-700'}`}>
                            {feature}
                          </span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {level.accessNotes && (
                    <div className={`p-4 rounded-lg ${
                      darkMode ? 'bg-blue-900/20 border-blue-600' : 'bg-blue-50 border-blue-200'
                    } border`}>
                      <div className="flex items-start space-x-3">
                        <Navigation size={20} className={darkMode ? 'text-blue-400' : 'text-blue-600'} />
                        <div>
                          <h5 className={`font-medium mb-1 ${darkMode ? 'text-blue-400' : 'text-blue-700'}`}>
                            Access Information
                          </h5>
                          <p className={`text-sm ${darkMode ? 'text-blue-300' : 'text-blue-600'}`}>
                            {level.accessNotes}
                          </p>
                        </div>
                      </div>
                    </div>
                  )}
                </div>
              );
            })()}
          </div>
        </div>

        {/* Navigation Tips */}
        <div className={`mt-12 p-6 rounded-xl ${
          darkMode ? 'bg-gray-700 border-gray-600' : 'bg-gray-50 border-gray-200'
        } border`}>
          <h4 className={`text-lg font-semibold mb-4 ${darkMode ? 'text-white' : 'text-gray-900'}`}>
            Navigation Tips
          </h4>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="flex items-start space-x-3">
              <Car size={18} className={darkMode ? 'text-green-400' : 'text-green-600'} />
              <div>
                <p className={`font-medium ${darkMode ? 'text-white' : 'text-gray-900'}`}>
                  Free Parking
                </p>
                <p className={`text-sm ${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>
                  Ample parking available at multiple levels
                </p>
              </div>
            </div>
            <div className="flex items-start space-x-3">
              <Navigation size={18} className={darkMode ? 'text-blue-400' : 'text-blue-600'} />
              <div>
                <p className={`font-medium ${darkMode ? 'text-white' : 'text-gray-900'}`}>
                  Easy Access
                </p>
                <p className={`text-sm ${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>
                  Convenient walkways connect all levels
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CentreMap;
