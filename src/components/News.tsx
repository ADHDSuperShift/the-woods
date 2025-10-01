'use client'

import React, { useState } from 'react';
import { Calendar, ArrowRight, Tag } from 'lucide-react';

interface NewsItem {
  id: string;
  title: string;
  description: string;
  date: string;
  image: string;
  category: string;
  featured: boolean;
}

interface NewsProps {
  darkMode: boolean;
}

const News: React.FC<NewsProps> = ({ darkMode }) => {
  const [selectedCategory, setSelectedCategory] = useState('All');

  const newsItems: NewsItem[] = [
    {
      id: '1',
      title: 'Astro Spa Grand Opening',
      description: 'Experience luxury wellness at our newest addition. Astro Spa brings world-class treatments and relaxation to The Woods.',
      date: '2024-03-15',
      image: 'https://d64gsuwffb70l.cloudfront.net/68d7c3fe7f348cca8c4b825b_1758971091076_35face59.webp',
      category: 'New Opening',
      featured: true
    },
    {
      id: '2',
      title: 'Baglios Restaurant Now Open',
      description: 'Authentic Italian dining experience with fresh pasta, wood-fired pizzas, and an extensive wine selection.',
      date: '2024-03-10',
      image: 'https://d64gsuwffb70l.cloudfront.net/68d7c3fe7f348cca8c4b825b_1758971065643_bab77077.webp',
      category: 'New Opening',
      featured: true
    },
    {
      id: '3',
      title: 'Alma Restaurant Launches',
      description: 'Contemporary cuisine meets innovative cocktails in our latest dining destination.',
      date: '2024-03-05',
      image: 'https://d64gsuwffb70l.cloudfront.net/68d7c3fe7f348cca8c4b825b_1758971067465_ba53a2b3.webp',
      category: 'New Opening',
      featured: true
    },
    {
      id: '4',
      title: 'Extended Weekend Hours',
      description: 'We\'re now open until 10pm on weekends to better serve our community.',
      date: '2024-02-28',
      image: 'https://d64gsuwffb70l.cloudfront.net/68d7c3fe7f348cca8c4b825b_1758971080658_1c5ba11c.webp',
      category: 'Announcement',
      featured: false
    },
    {
      id: '5',
      title: 'Wellness Week Special',
      description: 'Join us for a week of wellness activities, health screenings, and special offers.',
      date: '2024-02-20',
      image: 'https://d64gsuwffb70l.cloudfront.net/68d7c3fe7f348cca8c4b825b_1758971092839_1d193e34.webp',
      category: 'Event',
      featured: false
    },
    {
      id: '6',
      title: 'New Parking System',
      description: 'Improved parking experience with digital payment options and extended free parking.',
      date: '2024-02-15',
      image: 'https://d64gsuwffb70l.cloudfront.net/68d7c3fe7f348cca8c4b825b_1758971083386_2ab501a9.webp',
      category: 'Announcement',
      featured: false
    },
    {
      id: '7',
      title: 'Community Market Days',
      description: 'Monthly local vendor markets featuring artisanal products and fresh produce.',
      date: '2024-02-10',
      image: 'https://d64gsuwffb70l.cloudfront.net/68d7c3fe7f348cca8c4b825b_1758971085846_9f103bac.webp',
      category: 'Event',
      featured: false
    },
    {
      id: '8',
      title: 'Fitness First Expansion',
      description: 'Our gym has expanded with new equipment and additional group fitness classes.',
      date: '2024-02-05',
      image: 'https://d64gsuwffb70l.cloudfront.net/68d7c3fe7f348cca8c4b825b_1758971094572_a4408f7b.webp',
      category: 'Update',
      featured: false
    }
  ];

  const categories = ['All', 'New Opening', 'Announcement', 'Event', 'Update'];

  const filteredNews = selectedCategory === 'All' 
    ? newsItems 
    : newsItems.filter(item => item.category === selectedCategory);

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
    <section id="news" className={`py-20 ${darkMode ? 'bg-gray-900' : 'bg-gray-50'}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className={`text-3xl sm:text-4xl font-bold mb-4 ${darkMode ? 'text-white' : 'text-gray-900'}`}>
            News & Announcements
          </h2>
          <p className={`text-lg max-w-2xl mx-auto ${darkMode ? 'text-gray-300' : 'text-gray-600'}`}>
            Stay in the know with the latest updates, new openings, and exciting events at The Woods.
          </p>
        </div>

        {/* Category Filter */}
        <div className="flex flex-wrap justify-center gap-2 mb-12">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setSelectedCategory(category)}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                selectedCategory === category
                  ? darkMode ? 'bg-green-600 text-white' : 'bg-green-700 text-white'
                  : darkMode ? 'bg-gray-800 text-gray-300 hover:bg-gray-700' : 'bg-white text-gray-700 hover:bg-gray-100'
              } border ${darkMode ? 'border-gray-600' : 'border-gray-300'}`}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Featured News */}
        {selectedCategory === 'All' && (
          <div className="mb-16">
            <h3 className={`text-2xl font-bold mb-8 ${darkMode ? 'text-white' : 'text-gray-900'}`}>
              Featured News
            </h3>
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              {newsItems.filter(item => item.featured).map((item) => (
                <article key={item.id} className={`group overflow-hidden rounded-xl shadow-lg transition-all duration-300 hover:shadow-2xl hover:scale-105 ${
                  darkMode ? 'bg-gray-800 border border-gray-700' : 'bg-white border border-gray-200'
                }`}>
                  <div className="relative h-48 overflow-hidden">
                    <img
                      src={item.image}
                      alt={item.title}
                      className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                    />
                    <div className="absolute top-4 left-4">
                      <span className={`px-3 py-1 text-xs font-medium rounded-full ${getCategoryColor(item.category)}`}>
                        {item.category}
                      </span>
                    </div>
                  </div>
                  <div className="p-6">
                    <div className="flex items-center space-x-2 mb-3">
                      <Calendar size={16} className={darkMode ? 'text-gray-400' : 'text-gray-500'} />
                      <span className={`text-sm ${darkMode ? 'text-gray-400' : 'text-gray-500'}`}>
                        {formatDate(item.date)}
                      </span>
                    </div>
                    <h3 className={`text-lg font-semibold mb-3 ${darkMode ? 'text-white' : 'text-gray-900'}`}>
                      {item.title}
                    </h3>
                    <p className={`text-sm mb-4 line-clamp-3 ${darkMode ? 'text-gray-300' : 'text-gray-600'}`}>
                      {item.description}
                    </p>
                    <button className={`flex items-center space-x-2 text-sm font-medium transition-colors ${
                      darkMode ? 'text-green-400 hover:text-green-300' : 'text-green-700 hover:text-green-600'
                    }`}>
                      <span>Read More</span>
                      <ArrowRight size={16} />
                    </button>
                  </div>
                </article>
              ))}
            </div>
          </div>
        )}

        {/* All News */}
        <div>
          <h3 className={`text-2xl font-bold mb-8 ${darkMode ? 'text-white' : 'text-gray-900'}`}>
            {selectedCategory === 'All' ? 'All News' : `${selectedCategory} News`}
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredNews.map((item) => (
              <article key={item.id} className={`group overflow-hidden rounded-xl shadow-lg transition-all duration-300 hover:shadow-2xl hover:scale-105 ${
                darkMode ? 'bg-gray-800 border border-gray-700' : 'bg-white border border-gray-200'
              }`}>
                <div className="relative h-48 overflow-hidden">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                  />
                  <div className="absolute top-4 left-4">
                    <span className={`px-3 py-1 text-xs font-medium rounded-full ${getCategoryColor(item.category)}`}>
                      {item.category}
                    </span>
                  </div>
                </div>
                <div className="p-6">
                  <div className="flex items-center space-x-2 mb-3">
                    <Calendar size={16} className={darkMode ? 'text-gray-400' : 'text-gray-500'} />
                    <span className={`text-sm ${darkMode ? 'text-gray-400' : 'text-gray-500'}`}>
                      {formatDate(item.date)}
                    </span>
                  </div>
                  <h3 className={`text-lg font-semibold mb-3 ${darkMode ? 'text-white' : 'text-gray-900'}`}>
                    {item.title}
                  </h3>
                  <p className={`text-sm mb-4 line-clamp-3 ${darkMode ? 'text-gray-300' : 'text-gray-600'}`}>
                    {item.description}
                  </p>
                  <button className={`flex items-center space-x-2 text-sm font-medium transition-colors ${
                    darkMode ? 'text-green-400 hover:text-green-300' : 'text-green-700 hover:text-green-600'
                  }`}>
                    <span>Read More</span>
                    <ArrowRight size={16} />
                  </button>
                </div>
              </article>
            ))}
          </div>
        </div>

        {filteredNews.length === 0 && (
          <div className="text-center py-12">
            <Tag size={48} className={`mx-auto mb-4 ${darkMode ? 'text-gray-600' : 'text-gray-400'}`} />
            <p className={`text-lg ${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>
              No news found in this category.
            </p>
          </div>
        )}
      </div>
    </section>
  );
};

export default News;