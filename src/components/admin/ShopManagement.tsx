'use client'

import React, { useState } from 'react';
import { Plus, Edit, Trash2, Search, Save, X } from 'lucide-react';

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

interface ShopManagementProps {
  darkMode: boolean;
}

const ShopManagement: React.FC<ShopManagementProps> = ({ darkMode }) => {
  const [shops, setShops] = useState<Shop[]>([
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
    }
  ]);

  const [editingShop, setEditingShop] = useState<Shop | null>(null);
  const [isAddingNew, setIsAddingNew] = useState(false);
  const [searchTerm, setSearchTerm] = useState('');
  const [formData, setFormData] = useState<Partial<Shop>>({});

  const categories = ['Dining', 'Retail & Convenience', 'Health & Wellness'];

  const filteredShops = shops.filter(shop =>
    shop.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    shop.category.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const handleEdit = (shop: Shop) => {
    setEditingShop(shop);
    setFormData(shop);
    setIsAddingNew(false);
  };

  const handleAddNew = () => {
    setIsAddingNew(true);
    setEditingShop(null);
    setFormData({
      name: '',
      category: 'Dining',
      description: '',
      image: '',
      phone: '',
      email: '',
      website: '',
      location: ''
    });
  };

  const handleSave = () => {
    if (isAddingNew) {
      const newShop: Shop = {
        ...formData as Shop,
        id: Date.now().toString()
      };
      setShops([...shops, newShop]);
    } else if (editingShop) {
      setShops(shops.map(shop => 
        shop.id === editingShop.id ? { ...formData as Shop, id: editingShop.id } : shop
      ));
    }
    handleCancel();
  };

  const handleCancel = () => {
    setEditingShop(null);
    setIsAddingNew(false);
    setFormData({});
  };

  const handleDelete = (id: string) => {
    if (confirm('Are you sure you want to delete this shop?')) {
      setShops(shops.filter(shop => shop.id !== id));
    }
  };

  const handleInputChange = (field: keyof Shop, value: string) => {
    setFormData({ ...formData, [field]: value });
  };

  if (editingShop || isAddingNew) {
    return (
      <div className="p-6">
        <div className="flex items-center justify-between mb-6">
          <h2 className={`text-2xl font-bold ${darkMode ? 'text-white' : 'text-gray-900'}`}>
            {isAddingNew ? 'Add New Shop' : 'Edit Shop'}
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
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label className={`block text-sm font-medium mb-2 ${darkMode ? 'text-gray-300' : 'text-gray-700'}`}>
                Shop Name *
              </label>
              <input
                type="text"
                required
                value={formData.name || ''}
                onChange={(e) => handleInputChange('name', e.target.value)}
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
              Description *
            </label>
            <textarea
              required
              rows={3}
              value={formData.description || ''}
              onChange={(e) => handleInputChange('description', e.target.value)}
              className={`w-full px-4 py-3 rounded-lg border transition-colors resize-none ${
                darkMode 
                  ? 'bg-gray-700 border-gray-600 text-white focus:border-green-500' 
                  : 'bg-white border-gray-300 text-gray-900 focus:border-green-500'
              } focus:outline-none focus:ring-2 focus:ring-green-500/20`}
            />
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

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label className={`block text-sm font-medium mb-2 ${darkMode ? 'text-gray-300' : 'text-gray-700'}`}>
                Phone
              </label>
              <input
                type="tel"
                value={formData.phone || ''}
                onChange={(e) => handleInputChange('phone', e.target.value)}
                className={`w-full px-4 py-3 rounded-lg border transition-colors ${
                  darkMode 
                    ? 'bg-gray-700 border-gray-600 text-white focus:border-green-500' 
                    : 'bg-white border-gray-300 text-gray-900 focus:border-green-500'
                } focus:outline-none focus:ring-2 focus:ring-green-500/20`}
              />
            </div>

            <div>
              <label className={`block text-sm font-medium mb-2 ${darkMode ? 'text-gray-300' : 'text-gray-700'}`}>
                Location
              </label>
              <input
                type="text"
                value={formData.location || ''}
                onChange={(e) => handleInputChange('location', e.target.value)}
                className={`w-full px-4 py-3 rounded-lg border transition-colors ${
                  darkMode 
                    ? 'bg-gray-700 border-gray-600 text-white focus:border-green-500' 
                    : 'bg-white border-gray-300 text-gray-900 focus:border-green-500'
                } focus:outline-none focus:ring-2 focus:ring-green-500/20`}
              />
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label className={`block text-sm font-medium mb-2 ${darkMode ? 'text-gray-300' : 'text-gray-700'}`}>
                Email
              </label>
              <input
                type="email"
                value={formData.email || ''}
                onChange={(e) => handleInputChange('email', e.target.value)}
                className={`w-full px-4 py-3 rounded-lg border transition-colors ${
                  darkMode 
                    ? 'bg-gray-700 border-gray-600 text-white focus:border-green-500' 
                    : 'bg-white border-gray-300 text-gray-900 focus:border-green-500'
                } focus:outline-none focus:ring-2 focus:ring-green-500/20`}
              />
            </div>

            <div>
              <label className={`block text-sm font-medium mb-2 ${darkMode ? 'text-gray-300' : 'text-gray-700'}`}>
                Website
              </label>
              <input
                type="url"
                value={formData.website || ''}
                onChange={(e) => handleInputChange('website', e.target.value)}
                className={`w-full px-4 py-3 rounded-lg border transition-colors ${
                  darkMode 
                    ? 'bg-gray-700 border-gray-600 text-white focus:border-green-500' 
                    : 'bg-white border-gray-300 text-gray-900 focus:border-green-500'
                } focus:outline-none focus:ring-2 focus:ring-green-500/20`}
              />
            </div>
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
              <span>Save Shop</span>
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
          Shop Management
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
          <span>Add Shop</span>
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
            placeholder="Search shops..."
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

      {/* Shop List */}
      <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-6">
        {filteredShops.map((shop) => (
          <div
            key={shop.id}
            className={`rounded-lg border overflow-hidden ${
              darkMode ? 'bg-gray-700 border-gray-600' : 'bg-white border-gray-200'
            } shadow-sm hover:shadow-md transition-shadow`}
          >
            <img
              src={shop.image}
              alt={shop.name}
              className="w-full h-48 object-cover"
            />
            <div className="p-4">
              <div className="flex items-start justify-between mb-2">
                <h3 className={`font-semibold ${darkMode ? 'text-white' : 'text-gray-900'}`}>
                  {shop.name}
                </h3>
                <span className={`px-2 py-1 text-xs rounded-full ${
                  shop.category === 'Dining' 
                    ? 'bg-orange-100 text-orange-700'
                    : shop.category === 'Health & Wellness'
                    ? 'bg-green-100 text-green-700'
                    : 'bg-blue-100 text-blue-700'
                }`}>
                  {shop.category}
                </span>
              </div>
              <p className={`text-sm mb-3 line-clamp-2 ${darkMode ? 'text-gray-300' : 'text-gray-600'}`}>
                {shop.description}
              </p>
              <div className="flex items-center justify-between">
                <span className={`text-xs ${darkMode ? 'text-gray-400' : 'text-gray-500'}`}>
                  {shop.location}
                </span>
                <div className="flex space-x-2">
                  <button
                    onClick={() => handleEdit(shop)}
                    className={`p-2 rounded-lg transition-colors ${
                      darkMode 
                        ? 'text-blue-400 hover:bg-gray-600' 
                        : 'text-blue-600 hover:bg-blue-50'
                    }`}
                  >
                    <Edit size={14} />
                  </button>
                  <button
                    onClick={() => handleDelete(shop.id)}
                    className={`p-2 rounded-lg transition-colors ${
                      darkMode 
                        ? 'text-red-400 hover:bg-gray-600' 
                        : 'text-red-600 hover:bg-red-50'
                    }`}
                  >
                    <Trash2 size={14} />
                  </button>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      {filteredShops.length === 0 && (
        <div className="text-center py-12">
          <p className={`text-lg ${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>
            No shops found matching your search.
          </p>
        </div>
      )}
    </div>
  );
};

export default ShopManagement;
