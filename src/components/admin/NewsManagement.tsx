'use client'

import React, { useState } from 'react';
import { Plus, Edit, Trash2, Search, Save, X, Calendar } from 'lucide-react';

interface NewsItem {
  id: string;
  title: string;
  description: string;
  date: string;
  image: string;
  category: string;
  featured: boolean;
}

interface NewsManagementProps {
  darkMode: boolean;
}

const NewsManagement: React.FC<NewsManagementProps> = ({ darkMode }) => {
  const [newsItems, setNewsItems] = useState<NewsItem[]>([
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
    }
  ]);

  const [editingNews, setEditingNews] = useState<NewsItem | null>(null);
  const [isAddingNew, setIsAddingNew] = useState(false);
  const [searchTerm, setSearchTerm] = useState('');
  const [formData, setFormData] = useState<Partial<NewsItem>>({});

  const categories = ['New Opening', 'Announcement', 'Event', 'Promotion', 'Update'];

  const filteredNews = newsItems.filter(item =>
    item.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
    item.category.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const handleEdit = (newsItem: NewsItem) => {
    setEditingNews(newsItem);
    setFormData(newsItem);
    setIsAddingNew(false);
  };

  const handleAddNew = () => {
    setIsAddingNew(true);
    setEditingNews(null);
    setFormData({
      title: '',
      description: '',
      date: new Date().toISOString().split('T')[0],
      image: '',
      category: 'Announcement',
      featured: false
    });
  };

  const handleSave = () => {
    if (isAddingNew) {
      const newItem: NewsItem = {
        ...formData as NewsItem,
        id: Date.now().toString()
      };
      setNewsItems([...newsItems, newItem]);
    } else if (editingNews) {
      setNewsItems(newsItems.map(item => 
        item.id === editingNews.id ? { ...formData as NewsItem, id: editingNews.id } : item
      ));
    }
    handleCancel();
  };

  const handleCancel = () => {
    setEditingNews(null);
    setIsAddingNew(false);
    setFormData({});
  };

  const handleDelete = (id: string) => {
    if (confirm('Are you sure you want to delete this news item?')) {
      setNewsItems(newsItems.filter(item => item.id !== id));
    }
  };

  const handleInputChange = (field: keyof NewsItem, value: string | boolean) => {
    setFormData({ ...formData, [field]: value });
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
        return 'bg-green-100 text-green-700';
      case 'Announcement':
        return 'bg-blue-100 text-blue-700';
      case 'Event':
        return 'bg-purple-100 text-purple-700';
      case 'Promotion':
        return 'bg-yellow-100 text-yellow-700';
      case 'Update':
        return 'bg-orange-100 text-orange-700';
      default:
        return 'bg-gray-100 text-gray-700';
    }
  };

  if (editingNews || isAddingNew) {
    return (
      <div className="p-6">
        <div className="flex items-center justify-between mb-6">
          <h2 className={`text-2xl font-bold ${darkMode ? 'text-white' : 'text-gray-900'}`}>
            {isAddingNew ? 'Add News Item' : 'Edit News Item'}
          </h2>
          <button
            onClick={handleCancel}
            className={`p-2 rounded-lg transition-colors ${
              darkMode ? 'hover:bg-gray-700 text-gray-400' : 'hover:bg-gray-100 text-gray-500'
            }`}
          >
            <X size={20} />
          </button>
        </div>

        <form className="space-y-6 max-w-2xl">
          <div>
            <label className={`block text-sm font-medium mb-2 ${darkMode ? 'text-gray-300' : 'text-gray-700'}`}>
              Title *
            </label>
            <input
              type="text"
              required
              value={formData.title || ''}
              onChange={(e) => handleInputChange('title', e.target.value)}
              className={`w-full px-4 py-3 rounded-lg border transition-colors ${
                darkMode 
                  ? 'bg-gray-700 border-gray-600 text-white focus:border-green-500' 
                  : 'bg-white border-gray-300 text-gray-900 focus:border-green-500'
              } focus:outline-none focus:ring-2 focus:ring-green-500/20`}
            />
          </div>

          <div>
            <label className={`block text-sm font-medium mb-2 ${darkMode ? 'text-gray-300' : 'text-gray-700'}`}>
              Description *
            </label>
            <textarea
              required
              rows={4}
              value={formData.description || ''}
              onChange={(e) => handleInputChange('description', e.target.value)}
              className={`w-full px-4 py-3 rounded-lg border transition-colors resize-none ${
                darkMode 
                  ? 'bg-gray-700 border-gray-600 text-white focus:border-green-500' 
                  : 'bg-white border-gray-300 text-gray-900 focus:border-green-500'
              } focus:outline-none focus:ring-2 focus:ring-green-500/20`}
            />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label className={`block text-sm font-medium mb-2 ${darkMode ? 'text-gray-300' : 'text-gray-700'}`}>
                Date *
              </label>
              <input
                type="date"
                required
                value={formData.date || ''}
                onChange={(e) => handleInputChange('date', e.target.value)}
                className={`w-full px-4 py-3 rounded-lg border transition-colors ${
                  darkMode 
                    ? 'bg-gray-700 border-gray-600 text-white focus:border-green-500' 
                    : 'bg-white border-gray-300 text-gray-900 focus:border-green-500'
                } focus:outline-none focus:ring-2 focus:ring-green-500/20`}
              />
            </div>

            <div>
              <label className={`block text-sm font-medium mb-2 ${darkMode ? 'text-gray-300' : 'text-gray-700'}`}>
                Category *
              </label>
              <select
                required
                value={formData.category || ''}
                onChange={(e) => handleInputChange('category', e.target.value)}
                className={`w-full px-4 py-3 rounded-lg border transition-colors ${
                  darkMode 
                    ? 'bg-gray-700 border-gray-600 text-white focus:border-green-500' 
                    : 'bg-white border-gray-300 text-gray-900 focus:border-green-500'
                } focus:outline-none focus:ring-2 focus:ring-green-500/20`}
              >
                {categories.map(category => (
                  <option key={category} value={category}>{category}</option>
                ))}
              </select>
            </div>
          </div>

          <div>
            <label className={`block text-sm font-medium mb-2 ${darkMode ? 'text-gray-300' : 'text-gray-700'}`}>
              Image URL *
            </label>
            <input
              type="url"
              required
              value={formData.image || ''}
              onChange={(e) => handleInputChange('image', e.target.value)}
              className={`w-full px-4 py-3 rounded-lg border transition-colors ${
                darkMode 
                  ? 'bg-gray-700 border-gray-600 text-white focus:border-green-500' 
                  : 'bg-white border-gray-300 text-gray-900 focus:border-green-500'
              } focus:outline-none focus:ring-2 focus:ring-green-500/20`}
            />
          </div>

          <div className="flex items-center">
            <input
              type="checkbox"
              id="featured"
              checked={formData.featured || false}
              onChange={(e) => handleInputChange('featured', e.target.checked)}
              className="w-4 h-4 text-green-600 border-gray-300 rounded focus:ring-green-500"
            />
            <label htmlFor="featured" className={`ml-2 text-sm ${darkMode ? 'text-gray-300' : 'text-gray-700'}`}>
              Featured (show in carousel)
            </label>
          </div>

          <div className="flex space-x-4">
            <button
              type="button"
              onClick={handleSave}
              className={`flex items-center space-x-2 px-6 py-3 rounded-lg font-medium transition-colors ${
                darkMode 
                  ? 'bg-green-600 hover:bg-green-500 text-white' 
                  : 'bg-green-700 hover:bg-green-600 text-white'
              }`}
            >
              <Save size={16} />
              <span>Save News</span>
            </button>
            <button
              type="button"
              onClick={handleCancel}
              className={`px-6 py-3 rounded-lg font-medium transition-colors border ${
                darkMode 
                  ? 'border-gray-600 text-gray-300 hover:bg-gray-700' 
                  : 'border-gray-300 text-gray-700 hover:bg-gray-50'
              }`}
            >
              Cancel
            </button>
          </div>
        </form>
      </div>
    );
  }

  return (
    <div className="p-6">
      <div className="flex items-center justify-between mb-6">
        <h2 className={`text-2xl font-bold ${darkMode ? 'text-white' : 'text-gray-900'}`}>
          News & Events Management
        </h2>
        <button
          onClick={handleAddNew}
          className={`flex items-center space-x-2 px-4 py-2 rounded-lg font-medium transition-colors ${
            darkMode 
              ? 'bg-green-600 hover:bg-green-500 text-white' 
              : 'bg-green-700 hover:bg-green-600 text-white'
          }`}
        >
          <Plus size={16} />
          <span>Add News</span>
        </button>
      </div>

      {/* Search */}
      <div className="mb-6">
        <div className="relative max-w-md">
          <Search size={20} className={`absolute left-3 top-1/2 transform -translate-y-1/2 ${
            darkMode ? 'text-gray-400' : 'text-gray-500'
          }`} />
          <input
            type="text"
            placeholder="Search news..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className={`w-full pl-10 pr-4 py-3 rounded-lg border transition-colors ${
              darkMode 
                ? 'bg-gray-700 border-gray-600 text-white placeholder-gray-400 focus:border-green-500' 
                : 'bg-white border-gray-300 text-gray-900 placeholder-gray-500 focus:border-green-500'
            } focus:outline-none focus:ring-2 focus:ring-green-500/20`}
          />
        </div>
      </div>

      {/* News List */}
      <div className="space-y-4">
        {filteredNews.map((item) => (
          <div
            key={item.id}
            className={`rounded-lg border overflow-hidden ${
              darkMode ? 'bg-gray-700 border-gray-600' : 'bg-white border-gray-200'
            } shadow-sm hover:shadow-md transition-shadow`}
          >
            <div className="md:flex">
              <div className="md:w-48">
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-48 md:h-full object-cover"
                />
              </div>
              <div className="flex-1 p-6">
                <div className="flex items-start justify-between mb-2">
                  <div className="flex items-center space-x-3">
                    <h3 className={`text-lg font-semibold ${darkMode ? 'text-white' : 'text-gray-900'}`}>
                      {item.title}
                    </h3>
                    {item.featured && (
                      <span className="px-2 py-1 text-xs bg-yellow-100 text-yellow-700 rounded-full">
                        Featured
                      </span>
                    )}
                  </div>
                  <div className="flex space-x-2">
                    <button
                      onClick={() => handleEdit(item)}
                      className={`p-2 rounded-lg transition-colors ${
                        darkMode 
                          ? 'text-blue-400 hover:bg-gray-600' 
                          : 'text-blue-600 hover:bg-blue-50'
                      }`}
                    >
                      <Edit size={16} />
                    </button>
                    <button
                      onClick={() => handleDelete(item.id)}
                      className={`p-2 rounded-lg transition-colors ${
                        darkMode 
                          ? 'text-red-400 hover:bg-gray-600' 
                          : 'text-red-600 hover:bg-red-50'
                      }`}
                    >
                      <Trash2 size={16} />
                    </button>
                  </div>
                </div>

                <div className="flex items-center space-x-4 mb-3">
                  <div className="flex items-center space-x-2">
                    <Calendar size={14} className={darkMode ? 'text-green-400' : 'text-green-600'} />
                    <span className={`text-sm ${darkMode ? 'text-gray-400' : 'text-gray-500'}`}>
                      {formatDate(item.date)}
                    </span>
                  </div>
                  <span className={`px-2 py-1 text-xs rounded-full ${getCategoryColor(item.category)}`}>
                    {item.category}
                  </span>
                </div>

                <p className={`text-sm line-clamp-2 ${darkMode ? 'text-gray-300' : 'text-gray-600'}`}>
                  {item.description}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>

      {filteredNews.length === 0 && (
        <div className="text-center py-12">
          <p className={`text-lg ${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>
            No news items found matching your search.
          </p>
        </div>
      )}
    </div>
  );
};

export default NewsManagement;
