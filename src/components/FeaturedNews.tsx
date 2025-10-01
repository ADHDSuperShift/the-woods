'use client'

import React, { useState, useEffect } from 'react';
import { Calendar, ArrowRight, ChevronLeft, ChevronRight, Tag } from 'lucide-react';

interface NewsItem {
  id: string;
  title: string;
  description: string;
  date: string;
  image: string;
  category: string;
}

interface FeaturedNewsProps {
  darkMode: boolean;
}

const FeaturedNews: React.FC<FeaturedNewsProps> = ({ darkMode }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  const featuredNews: NewsItem[] = [
    {
      id: '1',
      title: 'Astro Spa Grand Opening',
      description: 'Experience luxury wellness at our newest addition. Astro Spa brings world-class treatments and relaxation to The Woods.',
      date: '2024-03-15',
      image: 'https://d64gsuwffb70l.cloudfront.net/68d7c3fe7f348cca8c4b825b_1758971091076_35face59.webp',
      category: 'New Opening'
    },
    {
      id: '2',
      title: 'Baglios Restaurant Now Open',
      description: 'Authentic Italian dining experience with fresh pasta, wood-fired pizzas, and an extensive wine selection.',
      date: '2024-03-10',
      image: 'https://d64gsuwffb70l.cloudfront.net/68d7c3fe7f348cca8c4b825b_1758971065643_bab77077.webp',
      category: 'New Opening'
    },
    {
      id: '3',
      title: 'Alma Restaurant Launches',
      description: 'Contemporary cuisine meets innovative cocktails in our latest dining destination.',
      date: '2024-03-05',
      image: 'https://d64gsuwffb70l.cloudfront.net/68d7c3fe7f348cca8c4b825b_1758971067465_ba53a2b3.webp',
      category: 'New Opening'
    },
    {
      id: '4',
      title: 'Extended Weekend Hours',
      description: 'We\'re now open until 10pm on weekends to better serve our community with more convenient shopping times.',
      date: '2024-02-28',
      image: 'https://d64gsuwffb70l.cloudfront.net/68d7c3fe7f348cca8c4b825b_1758971080658_1c5ba11c.webp',
      category: 'Announcement'
    }
  ];

  // Auto-rotate carousel
  useEffect(() => {
    if (!isAutoPlaying) return;

    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => 
        prevIndex === featuredNews.length - 1 ? 0 : prevIndex + 1
      );
    }, 4000);

    return () => clearInterval(interval);
  }, [currentIndex, isAutoPlaying, featuredNews.length]);

  const goToSlide = (index: number) => {
    setCurrentIndex(index);
    setIsAutoPlaying(false);
    setTimeout(() => setIsAutoPlaying(true), 5000);
  };

  const goToPrevious = () => {
    const newIndex = currentIndex === 0 ? featuredNews.length - 1 : currentIndex - 1;
    goToSlide(newIndex);
  };

  const goToNext = () => {
    const newIndex = currentIndex === featuredNews.length - 1 ? 0 : currentIndex + 1;
    goToSlide(newIndex);
  };

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    });
  };

  const getCategoryColor = (category: string) => {
    switch (category) {
      case 'New Opening':
        return darkMode ? 'bg-green-900/30 text-green-400' : 'bg-green-100 text-green-700';
      case 'Announcement':
        return darkMode ? 'bg-blue-900/30 text-blue-400' : 'bg-blue-100 text-blue-700';
      case 'Event':
        return darkMode ? 'bg-purple-900/30 text-purple-400' : 'bg-purple-100 text-purple-700';
      case 'Update':
        return darkMode ? 'bg-orange-900/30 text-orange-400' : 'bg-orange-100 text-orange-700';
      default:
        return darkMode ? 'bg-gray-700 text-gray-300' : 'bg-gray-100 text-gray-700';
    }
  };

  return (
    <section id="events" className={`py-20 ${darkMode ? 'bg-gray-800' : 'bg-gray-50'}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className={`text-3xl sm:text-4xl font-bold mb-4 ${darkMode ? 'text-white' : 'text-gray-900'}`}>
            Events & Promotions
          </h2>
          <p className={`text-lg max-w-2xl mx-auto ${darkMode ? 'text-gray-300' : 'text-gray-600'}`}>
            Stay updated with the latest events, promotions, and new openings at The Woods Shopping Centre.
          </p>
        </div>

        <div className="relative">
          {/* Carousel Container */}
          <div className="relative overflow-hidden rounded-xl">
            <div 
              className="flex transition-transform duration-500 ease-in-out"
              style={{ transform: `translateX(-${currentIndex * 100}%)` }}
            >
              {featuredNews.map((item) => (
                <div key={item.id} className="w-full flex-shrink-0">
                  <div className={`${darkMode ? 'bg-gray-700' : 'bg-white'} rounded-xl shadow-lg overflow-hidden`}>
                    <div className="md:flex">
                      <div className="md:w-1/2">
                        <div className="relative h-64 md:h-80">
                          <img
                            src={item.image}
                            alt={item.title}
                            className="w-full h-full object-cover"
                          />
                          <div className="absolute top-4 left-4">
                            <span className={`px-3 py-1 rounded-full text-xs font-medium ${getCategoryColor(item.category)}`}>
                              <Tag size={12} className="inline mr-1" />
                              {item.category}
                            </span>
                          </div>
                        </div>
                      </div>
                      <div className="md:w-1/2 p-8 flex flex-col justify-center">
                        <div className="flex items-center mb-4">
                          <Calendar size={16} className={darkMode ? 'text-green-400' : 'text-green-600'} />
                          <span className={`ml-2 text-sm ${darkMode ? 'text-gray-400' : 'text-gray-500'}`}>
                            {formatDate(item.date)}
                          </span>
                        </div>
                        <h3 className={`text-2xl font-bold mb-4 ${darkMode ? 'text-white' : 'text-gray-900'}`}>
                          {item.title}
                        </h3>
                        <p className={`text-lg mb-6 ${darkMode ? 'text-gray-300' : 'text-gray-600'} leading-relaxed`}>
                          {item.description}
                        </p>
                        <button className={`inline-flex items-center text-sm font-medium transition-colors ${
                          darkMode ? 'text-green-400 hover:text-green-300' : 'text-green-600 hover:text-green-700'
                        }`}>
                          Read More
                          <ArrowRight size={16} className="ml-1" />
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Navigation Arrows */}
          <button
            onClick={goToPrevious}
            className={`absolute left-4 top-1/2 transform -translate-y-1/2 p-2 rounded-full transition-colors ${
              darkMode ? 'bg-gray-600 hover:bg-gray-500 text-white' : 'bg-white hover:bg-gray-100 text-gray-700'
            } shadow-lg`}
            aria-label="Previous news item"
          >
            <ChevronLeft size={24} />
          </button>
          <button
            onClick={goToNext}
            className={`absolute right-4 top-1/2 transform -translate-y-1/2 p-2 rounded-full transition-colors ${
              darkMode ? 'bg-gray-600 hover:bg-gray-500 text-white' : 'bg-white hover:bg-gray-100 text-gray-700'
            } shadow-lg`}
            aria-label="Next news item"
          >
            <ChevronRight size={24} />
          </button>

          {/* Dots Pagination */}
          <div className="flex justify-center mt-8 space-x-2">
            {featuredNews.map((_, index) => (
              <button
                key={index}
                onClick={() => goToSlide(index)}
                className={`w-3 h-3 rounded-full transition-colors ${
                  index === currentIndex
                    ? darkMode ? 'bg-green-500' : 'bg-green-600'
                    : darkMode ? 'bg-gray-600' : 'bg-gray-300'
                }`}
                aria-label={`Go to slide ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeaturedNews;
