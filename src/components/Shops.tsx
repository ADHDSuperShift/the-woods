'use client'

import React, { useState, useMemo, useEffect } from 'react';
import { Search, Filter, ChevronLeft, ChevronRight } from 'lucide-react';
import ShopCard from './ShopCard';
import ShopModal from './ShopModal';

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

interface ShopsProps {
  darkMode: boolean;
}

const Shops: React.FC<ShopsProps> = ({ darkMode }) => {
  const [activeCategory, setActiveCategory] = useState('All');
  const [searchTerm, setSearchTerm] = useState('');
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);
  const [selectedShop, setSelectedShop] = useState<Shop | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleShopClick = (shop: Shop) => {
    setSelectedShop(shop);
    setIsModalOpen(true);
  };

  const categories = ['All', 'Dining', 'Retail & Convenience', 'Health & Wellness'];

  const shops: Shop[] = [
    // Dining / Food & Beverage
    {
      id: '1',
      name: 'Besos',
      category: 'Dining',
      description: 'Brunch and casual dining restaurant offering a relaxed atmosphere.',
      image: 'https://d64gsuwffb70l.cloudfront.net/68d7c3fe7f348cca8c4b825b_1758971065643_bab77077.webp',
      phone: '066 466 3860',
      location: 'Shop UR01'
    },
    {
      id: '2',
      name: 'Colony Arms',
      category: 'Dining',
      description: 'Traditional bar and restaurant serving hearty meals and beverages.',
      image: 'https://d64gsuwffb70l.cloudfront.net/68d7c3fe7f348cca8c4b825b_1758971067465_ba53a2b3.webp',
      phone: '(011) 447 6646',
      email: 'info@colonyarms.co.za',
      location: 'Shop BR08'
    },
    {
      id: '3',
      name: 'Liberté',
      category: 'Dining',
      description: 'French food and wine restaurant offering authentic French cuisine.',
      image: 'https://d64gsuwffb70l.cloudfront.net/68d7c3fe7f348cca8c4b825b_1758971069415_62771f0a.webp',
      email: 'bookings@liberterestaurant.com',
      location: 'Shop UR04'
    },
    {
      id: '4',
      name: 'Alma',
      category: 'Dining',
      description: 'Contemporary dining experience with seasonal menus.',
      image: 'https://d64gsuwffb70l.cloudfront.net/68d7c3fe7f348cca8c4b825b_1758971071280_b3ac7e78.webp',
      location: 'Shop UR02'
    },
    {
      id: '5',
      name: 'Pronto Italian Restaurant',
      category: 'Dining',
      description: 'Authentic Italian cuisine with fresh ingredients and traditional recipes.',
      image: 'https://d64gsuwffb70l.cloudfront.net/68d7c3fe7f348cca8c4b825b_1758971080658_1c5ba11c.webp',
      phone: '(011) 447 4346',
      email: 'info@prontoitalianrestaurant.co.za',
      location: 'Shop UR08'
    },
    {
      id: '6',
      name: 'Baglios',
      category: 'Dining',
      description: 'Italian restaurant and café serving delicious Mediterranean cuisine.',
      image: 'https://d64gsuwffb70l.cloudfront.net/68d7c3fe7f348cca8c4b825b_1758971083386_2ab501a9.webp',
      location: 'Shop B1'
    },

    // Retail / Convenience / Lifestyle / General Stores
    {
      id: '7',
      name: 'Checkers',
      category: 'Retail & Convenience',
      description: 'Supermarket for groceries, household needs, and fresh produce.',
      image: 'https://d64gsuwffb70l.cloudfront.net/68d7c3fe7f348cca8c4b825b_1758971085846_9f103bac.webp',
      location: 'Anchor Store'
    },
    {
      id: '8',
      name: 'Checkers Liquor',
      category: 'Retail & Convenience',
      description: 'Full-licence liquor store attached to Checkers supermarket.',
      image: 'https://d64gsuwffb70l.cloudfront.net/68d7c3fe7f348cca8c4b825b_1758971092839_1d193e34.webp',
      location: 'Adjacent to Checkers'
    },
    {
      id: '9',
      name: 'Baby City',
      category: 'Retail & Convenience',
      description: 'Specialized store selling baby goods and children\'s essentials.',
      image: 'https://d64gsuwffb70l.cloudfront.net/68d7c3fe7f348cca8c4b825b_1758971094572_a4408f7b.webp',
      location: 'Shop 19'
    },
    {
      id: '10',
      name: 'Lillie Jewellery & Gifts',
      category: 'Retail & Convenience',
      description: 'Jewellery, gifts and decorative items for special occasions.',
      image: 'https://d64gsuwffb70l.cloudfront.net/68d7c3fe7f348cca8c4b825b_1758971067465_ba53a2b3.webp',
      location: 'Back parking area next to stairs'
    },
    {
      id: '11',
      name: 'First Choice Flooring & Décor',
      category: 'Retail & Convenience',
      description: 'Homeware, flooring solutions and home décor items.',
      image: 'https://d64gsuwffb70l.cloudfront.net/68d7c3fe7f348cca8c4b825b_1758971065643_bab77077.webp',
      location: 'Lower level next to Rothesay Avenue'
    },
    {
      id: '12',
      name: 'Dial-a-Bed',
      category: 'Retail & Convenience',
      description: 'Bed shop specializing in mattresses and bedroom homeware.',
      image: 'https://d64gsuwffb70l.cloudfront.net/68d7c3fe7f348cca8c4b825b_1758971069415_62771f0a.webp',
      location: 'Lower level'
    },
    {
      id: '13',
      name: 'Kiddie Ma Jigs (Craighall Toys & Dress Up)',
      category: 'Retail & Convenience',
      description: 'Toys and dress-up costumes for children of all ages.',
      image: 'https://d64gsuwffb70l.cloudfront.net/68d7c3fe7f348cca8c4b825b_1758971071280_b3ac7e78.webp',
      location: 'Lower level area'
    },
    {
      id: '14',
      name: 'Good Boi Club',
      category: 'Retail & Convenience',
      description: 'Pet shop offering pet supplies, food, and accessories.',
      image: 'https://d64gsuwffb70l.cloudfront.net/68d7c3fe7f348cca8c4b825b_1758971080658_1c5ba11c.webp',
      location: 'Lower level'
    },
    {
      id: '15',
      name: 'Standard Bank AutoBank (ATM)',
      category: 'Retail & Convenience',
      description: 'Automated banking services and cash withdrawal.',
      image: 'https://d64gsuwffb70l.cloudfront.net/68d7c3fe7f348cca8c4b825b_1758971083386_2ab501a9.webp',
      location: 'Lower passage outside Dial-a-Bed'
    },
    {
      id: '16',
      name: 'Energy Emporium',
      category: 'Retail & Convenience',
      description: 'Spiritual and alternative gifts, wellness products and accessories.',
      image: 'https://d64gsuwffb70l.cloudfront.net/68d7c3fe7f348cca8c4b825b_1758971085846_9f103bac.webp',
      location: 'Up metal staircase (above Baby City)'
    },

    // Health, Wellness, Medical & Services
    {
      id: '17',
      name: 'The Local Choice / Colony Pharmacy',
      category: 'Health & Wellness',
      description: 'Full service pharmacy and clinic providing healthcare services.',
      image: 'https://d64gsuwffb70l.cloudfront.net/68d7c3fe7f348cca8c4b825b_1758971092839_1d193e34.webp',
      location: 'Shop 101'
    },
    {
      id: '18',
      name: 'In Balance Physiotherapy & Pilates',
      category: 'Health & Wellness',
      description: 'Physiotherapy treatments and Pilates classes for rehabilitation and fitness.',
      image: 'https://d64gsuwffb70l.cloudfront.net/68d7c3fe7f348cca8c4b825b_1758971094572_a4408f7b.webp',
      location: 'First floor, upper level'
    },
    {
      id: '19',
      name: 'Syon Optometrist',
      category: 'Health & Wellness',
      description: 'Professional eye care services and optical solutions.',
      image: 'https://d64gsuwffb70l.cloudfront.net/68d7c3fe7f348cca8c4b825b_1758971067465_ba53a2b3.webp',
      location: 'Upper passage from back parking'
    },
    {
      id: '20',
      name: 'Dr Alain Sanua, MD / Clinic',
      category: 'Health & Wellness',
      description: 'Medical practice offering general healthcare and alternative medicine.',
      image: 'https://d64gsuwffb70l.cloudfront.net/68d7c3fe7f348cca8c4b825b_1758971069415_62771f0a.webp',
      location: 'Shop S203, upper level'
    },
    {
      id: '21',
      name: 'Luna Spa',
      category: 'Health & Wellness',
      description: 'Spa and wellness treatments in a relaxing environment.',
      image: 'https://d64gsuwffb70l.cloudfront.net/68d7c3fe7f348cca8c4b825b_1758971071280_b3ac7e78.webp',
      location: 'Shop S04, first floor'
    },
    {
      id: '22',
      name: 'SANBS (South African National Blood Service)',
      category: 'Health & Wellness',
      description: 'Blood donation site supporting community health initiatives.',
      image: 'https://d64gsuwffb70l.cloudfront.net/68d7c3fe7f348cca8c4b825b_1758971080658_1c5ba11c.webp',
      location: 'First floor area'
    },
    {
      id: '23',
      name: 'Astro Spa',
      category: 'Health & Wellness',
      description: 'Nail studio, massage, facials and beauty treatments.',
      image: 'https://d64gsuwffb70l.cloudfront.net/68d7c3fe7f348cca8c4b825b_1758971083386_2ab501a9.webp',
      location: 'Shop S209A'
    },
    {
      id: '24',
      name: 'Smaak Hair Salon',
      category: 'Health & Wellness',
      description: 'Professional hair styling and salon services.',
      image: 'https://d64gsuwffb70l.cloudfront.net/68d7c3fe7f348cca8c4b825b_1758971085846_9f103bac.webp',
      location: 'Suite 210, first floor'
    },
    {
      id: '25',
      name: 'BuXS Financials',
      category: 'Health & Wellness',
      description: 'Accounting, financial and bookkeeping services.',
      image: 'https://d64gsuwffb70l.cloudfront.net/68d7c3fe7f348cca8c4b825b_1758971092839_1d193e34.webp',
      location: 'First floor upper passage'
    },
    {
      id: '26',
      name: 'Salix Manufacturing Jewellers',
      category: 'Health & Wellness',
      description: 'Jewellery manufacturing and custom workshop services.',
      image: 'https://d64gsuwffb70l.cloudfront.net/68d7c3fe7f348cca8c4b825b_1758971094572_a4408f7b.webp',
      location: 'First floor'
    },
    {
      id: '27',
      name: 'Logiscool Coding',
      category: 'Health & Wellness',
      description: 'Child education and enrichment through coding and technology.',
      image: 'https://d64gsuwffb70l.cloudfront.net/68d7c3fe7f348cca8c4b825b_1758971067465_ba53a2b3.webp',
      location: 'First floor area'
    },
    {
      id: '28',
      name: 'Kumon Craighall',
      category: 'Health & Wellness',
      description: 'Tutoring and after-school educational support programs.',
      image: 'https://d64gsuwffb70l.cloudfront.net/68d7c3fe7f348cca8c4b825b_1758971069415_62771f0a.webp',
      location: 'First floor / upstairs area'
    },
    {
      id: '29',
      name: 'Remake Tile Gallery',
      category: 'Health & Wellness',
      description: 'Tile and architectural design consultation services.',
      image: 'https://d64gsuwffb70l.cloudfront.net/68d7c3fe7f348cca8c4b825b_1758971071280_b3ac7e78.webp',
      location: 'First floor upper level'
    },
    {
      id: '30',
      name: 'Vajrapani Kadampa Buddhist Centre',
      category: 'Health & Wellness',
      description: 'Buddhist meditation center offering spiritual guidance and classes.',
      image: 'https://d64gsuwffb70l.cloudfront.net/68d7c3fe7f348cca8c4b825b_1758971080658_1c5ba11c.webp',
      location: 'Upstairs area left of Baby City'
    }
  ];

  const filteredShops = useMemo(() => {
    return shops.filter(shop => {
      const matchesCategory = activeCategory === 'All' || shop.category === activeCategory;
      const matchesSearch = shop.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                           shop.description.toLowerCase().includes(searchTerm.toLowerCase());
      return matchesCategory && matchesSearch;
    });
  }, [activeCategory, searchTerm]);

  // Carousel logic - now uses filtered shops
  const ITEMS_PER_SLIDE = 3;
  const totalSlides = Math.ceil(filteredShops.length / ITEMS_PER_SLIDE);

  // Auto-rotating carousel effect
  useEffect(() => {
    if (!isAutoPlaying || filteredShops.length === 0) return;

    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % totalSlides);
    }, 3000); // Change slide every 3 seconds

    return () => clearInterval(interval);
  }, [isAutoPlaying, totalSlides, filteredShops.length]);

  // Reset slide when filters change
  useEffect(() => {
    setCurrentSlide(0);
  }, [activeCategory, searchTerm]);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % totalSlides);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + totalSlides) % totalSlides);
  };

  return (
    <section id="shops" className={`py-20 ${darkMode ? 'bg-gray-900' : 'bg-gray-50'}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className={`text-3xl sm:text-4xl font-bold mb-4 ${darkMode ? 'text-white' : 'text-gray-900'}`}>
            The Shops at The Woods
          </h2>
          <p className={`text-lg max-w-2xl mx-auto ${darkMode ? 'text-gray-300' : 'text-gray-600'}`}>
            Convenience shopping at its best. Everything you need all in one space.
          </p>
        </div>

        {/* Auto-Rotating Shops Carousel */}
        <div className="mb-16">
          <div className="relative">
            {/* Search and Filter Controls */}
            <div className="mb-8">
              <h3 className={`text-2xl font-bold mb-6 text-center ${darkMode ? 'text-white' : 'text-gray-900'}`}>
                Find Your Perfect Shop
              </h3>
              <div className="flex flex-col md:flex-row gap-4 items-center justify-between max-w-4xl mx-auto">
                <div className="relative flex-1 max-w-md">
                  <Search size={20} className={`absolute left-3 top-1/2 transform -translate-y-1/2 ${
                    darkMode ? 'text-gray-400' : 'text-gray-500'
                  }`} />
                  <input
                    type="text"
                    placeholder="Search shops..."
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    className={`w-full pl-10 pr-4 py-3 rounded-lg border transition-colors ${
                      darkMode 
                        ? 'bg-gray-800 border-gray-600 text-white placeholder-gray-400 focus:border-green-500' 
                        : 'bg-white border-gray-300 text-gray-900 placeholder-gray-500 focus:border-green-500'
                    } focus:outline-none focus:ring-2 focus:ring-green-500/20`}
                  />
                </div>

                <div className="flex flex-wrap gap-2">
                  {categories.map((category) => (
                    <button
                      key={category}
                      onClick={() => setActiveCategory(category)}
                      className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors ${
                        activeCategory === category
                          ? darkMode ? 'bg-green-600 text-white' : 'bg-green-700 text-white'
                          : darkMode ? 'bg-gray-800 text-gray-300 hover:bg-gray-700' : 'bg-white text-gray-700 hover:bg-gray-100'
                      } border ${darkMode ? 'border-gray-600' : 'border-gray-300'}`}
                    >
                      {category}
                    </button>
                  ))}
                </div>
              </div>
            </div>
            
            <div className="relative overflow-hidden">
              {/* Carousel Container */}
              <div 
                className="flex transition-transform duration-700 ease-in-out"
                style={{ transform: `translateX(-${currentSlide * 100}%)` }}
                onMouseEnter={() => setIsAutoPlaying(false)}
                onMouseLeave={() => setIsAutoPlaying(true)}
              >
                {Array.from({ length: totalSlides }).map((_, slideIndex) => (
                  <div key={slideIndex} className="w-full flex-shrink-0">
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 px-4">
                      {filteredShops
                        .slice(slideIndex * ITEMS_PER_SLIDE, (slideIndex + 1) * ITEMS_PER_SLIDE)
                        .map((shop) => (
                          <div key={shop.id} className="transform hover:scale-105 transition-transform duration-300">
                            <ShopCard shop={shop} darkMode={darkMode} onClick={handleShopClick} />
                          </div>
                        ))}
                    </div>
                  </div>
                ))}
              </div>

              {/* Navigation Arrows */}
              <button
                onClick={prevSlide}
                className={`absolute left-4 top-1/2 transform -translate-y-1/2 p-3 rounded-full transition-all duration-200 ${
                  darkMode 
                    ? 'bg-gray-800 hover:bg-gray-700 text-white border-gray-600' 
                    : 'bg-white hover:bg-gray-50 text-gray-800 border-gray-300'
                } border shadow-lg hover:shadow-xl z-10`}
              >
                <ChevronLeft size={24} />
              </button>
              
              <button
                onClick={nextSlide}
                className={`absolute right-4 top-1/2 transform -translate-y-1/2 p-3 rounded-full transition-all duration-200 ${
                  darkMode 
                    ? 'bg-gray-800 hover:bg-gray-700 text-white border-gray-600' 
                    : 'bg-white hover:bg-gray-50 text-gray-800 border-gray-300'
                } border shadow-lg hover:shadow-xl z-10`}
              >
                <ChevronRight size={24} />
              </button>
            </div>

            {/* Slide Indicators */}
            <div className="flex justify-center space-x-2 mt-6">
              {Array.from({ length: totalSlides }).map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentSlide(index)}
                  className={`w-3 h-3 rounded-full transition-all duration-200 ${
                    index === currentSlide
                      ? darkMode ? 'bg-green-400' : 'bg-green-600'
                      : darkMode ? 'bg-gray-600' : 'bg-gray-300'
                  }`}
                />
              ))}
            </div>

            {/* Auto-play Toggle */}
            <div className="text-center mt-4">
              <button
                onClick={() => setIsAutoPlaying(!isAutoPlaying)}
                className={`text-sm px-4 py-2 rounded-lg transition-colors ${
                  darkMode 
                    ? 'text-gray-400 hover:text-white hover:bg-gray-800' 
                    : 'text-gray-600 hover:text-gray-900 hover:bg-gray-100'
                }`}
              >
                {isAutoPlaying ? 'Pause Auto-play' : 'Resume Auto-play'}
              </button>
            </div>
          </div>

          {/* No Results Message */}
          {filteredShops.length === 0 && (
            <div className="text-center py-12">
              <Filter size={48} className={`mx-auto mb-4 ${darkMode ? 'text-gray-600' : 'text-gray-400'}`} />
              <p className={`text-lg ${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>
                No shops found matching your criteria.
              </p>
              <button
                onClick={() => {
                  setActiveCategory('All');
                  setSearchTerm('');
                }}
                className={`mt-4 px-6 py-2 rounded-lg transition-colors ${
                  darkMode ? 'bg-green-600 hover:bg-green-500 text-white' : 'bg-green-700 hover:bg-green-600 text-white'
                }`}
              >
                Clear Filters
              </button>
            </div>
          )}
        </div>
      </div>

      <ShopModal
        shop={selectedShop}
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        darkMode={darkMode}
      />
    </section>
  );
};

export default Shops;