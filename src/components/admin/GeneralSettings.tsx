'use client'

import React, { useState } from 'react';
import { Save, Settings, MapPin, Clock, Phone, Mail, Facebook, Instagram, Twitter } from 'lucide-react';

interface SiteSettings {
  siteName: string;
  tagline: string;
  description: string;
  address: {
    street: string;
    city: string;
    province: string;
    postal: string;
  };
  contact: {
    phone: string;
    email: string;
    fax: string;
  };
  hours: {
    weekdays: string;
    saturday: string;
    sunday: string;
  };
  social: {
    facebook: string;
    instagram: string;
    twitter: string;
  };
  maintenance: {
    enabled: boolean;
    message: string;
  };
}

interface GeneralSettingsProps {
  darkMode: boolean;
}

const GeneralSettings: React.FC<GeneralSettingsProps> = ({ darkMode }) => {
  const [settings, setSettings] = useState<SiteSettings>({
    siteName: 'The Woods Shopping Centre',
    tagline: 'Shop, Dine & Unwind in Style',
    description: 'Premier shopping destination in Graighall, offering an exceptional mix of retail, dining, and wellness experiences.',
    address: {
      street: '18 Crescent Road',
      city: 'Graighall',
      province: 'Gauteng',
      postal: '2193'
    },
    contact: {
      phone: '+27 11 442 5600',
      email: 'info@thewoodscentre.co.za',
      fax: '+27 11 442 5601'
    },
    hours: {
      weekdays: '09:00 - 18:00',
      saturday: '09:00 - 17:00',
      sunday: '10:00 - 15:00'
    },
    social: {
      facebook: 'https://facebook.com/thewoodscentre',
      instagram: 'https://instagram.com/thewoodscentre',
      twitter: 'https://twitter.com/thewoodscentre'
    },
    maintenance: {
      enabled: false,
      message: 'We are currently performing scheduled maintenance. Please check back soon.'
    }
  });

  const [activeTab, setActiveTab] = useState('general');
  const [saved, setSaved] = useState(false);

  const tabs = [
    { id: 'general', label: 'General Info', icon: Settings },
    { id: 'contact', label: 'Contact & Hours', icon: Phone },
    { id: 'social', label: 'Social Media', icon: Instagram },
    { id: 'maintenance', label: 'Maintenance', icon: Clock }
  ];

  const handleInputChange = (section: keyof SiteSettings, field: string, value: string | boolean) => {
    setSettings(prev => ({
      ...prev,
      [section]: typeof prev[section] === 'object' && prev[section] !== null
        ? { ...prev[section], [field]: value }
        : value
    }));
  };

  const handleSave = () => {
    // In a real app, this would save to a backend
    console.log('Saving settings:', settings);
    setSaved(true);
    setTimeout(() => setSaved(false), 3000);
  };

  const renderGeneralTab = () => (
    <div className="space-y-6">
      <div>
        <label className={`block text-sm font-medium mb-2 ${darkMode ? 'text-gray-300' : 'text-gray-700'}`}>
          Site Name
        </label>
        <input
          type="text"
          value={settings.siteName}
          onChange={(e) => handleInputChange('siteName', '', e.target.value)}
          className={`w-full px-4 py-3 rounded-lg border transition-colors ${
            darkMode 
              ? 'bg-gray-700 border-gray-600 text-white focus:border-green-500' 
              : 'bg-white border-gray-300 text-gray-900 focus:border-green-500'
          } focus:outline-none focus:ring-2 focus:ring-green-500/20`}
        />
      </div>

      <div>
        <label className={`block text-sm font-medium mb-2 ${darkMode ? 'text-gray-300' : 'text-gray-700'}`}>
          Tagline
        </label>
        <input
          type="text"
          value={settings.tagline}
          onChange={(e) => handleInputChange('tagline', '', e.target.value)}
          className={`w-full px-4 py-3 rounded-lg border transition-colors ${
            darkMode 
              ? 'bg-gray-700 border-gray-600 text-white focus:border-green-500' 
              : 'bg-white border-gray-300 text-gray-900 focus:border-green-500'
          } focus:outline-none focus:ring-2 focus:ring-green-500/20`}
        />
      </div>

      <div>
        <label className={`block text-sm font-medium mb-2 ${darkMode ? 'text-gray-300' : 'text-gray-700'}`}>
          Description
        </label>
        <textarea
          rows={4}
          value={settings.description}
          onChange={(e) => handleInputChange('description', '', e.target.value)}
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
            Street Address
          </label>
          <input
            type="text"
            value={settings.address.street}
            onChange={(e) => handleInputChange('address', 'street', e.target.value)}
            className={`w-full px-4 py-3 rounded-lg border transition-colors ${
              darkMode 
                ? 'bg-gray-700 border-gray-600 text-white focus:border-green-500' 
                : 'bg-white border-gray-300 text-gray-900 focus:border-green-500'
            } focus:outline-none focus:ring-2 focus:ring-green-500/20`}
          />
        </div>

        <div>
          <label className={`block text-sm font-medium mb-2 ${darkMode ? 'text-gray-300' : 'text-gray-700'}`}>
            City
          </label>
          <input
            type="text"
            value={settings.address.city}
            onChange={(e) => handleInputChange('address', 'city', e.target.value)}
            className={`w-full px-4 py-3 rounded-lg border transition-colors ${
              darkMode 
                ? 'bg-gray-700 border-gray-600 text-white focus:border-green-500' 
                : 'bg-white border-gray-300 text-gray-900 focus:border-green-500'
            } focus:outline-none focus:ring-2 focus:ring-green-500/20`}
          />
        </div>

        <div>
          <label className={`block text-sm font-medium mb-2 ${darkMode ? 'text-gray-300' : 'text-gray-700'}`}>
            Province
          </label>
          <input
            type="text"
            value={settings.address.province}
            onChange={(e) => handleInputChange('address', 'province', e.target.value)}
            className={`w-full px-4 py-3 rounded-lg border transition-colors ${
              darkMode 
                ? 'bg-gray-700 border-gray-600 text-white focus:border-green-500' 
                : 'bg-white border-gray-300 text-gray-900 focus:border-green-500'
            } focus:outline-none focus:ring-2 focus:ring-green-500/20`}
          />
        </div>

        <div>
          <label className={`block text-sm font-medium mb-2 ${darkMode ? 'text-gray-300' : 'text-gray-700'}`}>
            Postal Code
          </label>
          <input
            type="text"
            value={settings.address.postal}
            onChange={(e) => handleInputChange('address', 'postal', e.target.value)}
            className={`w-full px-4 py-3 rounded-lg border transition-colors ${
              darkMode 
                ? 'bg-gray-700 border-gray-600 text-white focus:border-green-500' 
                : 'bg-white border-gray-300 text-gray-900 focus:border-green-500'
            } focus:outline-none focus:ring-2 focus:ring-green-500/20`}
          />
        </div>
      </div>
    </div>
  );

  const renderContactTab = () => (
    <div className="space-y-6">
      <h3 className={`text-lg font-medium ${darkMode ? 'text-white' : 'text-gray-900'}`}>
        Contact Information
      </h3>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div>
          <label className={`block text-sm font-medium mb-2 ${darkMode ? 'text-gray-300' : 'text-gray-700'}`}>
            Phone Number
          </label>
          <input
            type="tel"
            value={settings.contact.phone}
            onChange={(e) => handleInputChange('contact', 'phone', e.target.value)}
            className={`w-full px-4 py-3 rounded-lg border transition-colors ${
              darkMode 
                ? 'bg-gray-700 border-gray-600 text-white focus:border-green-500' 
                : 'bg-white border-gray-300 text-gray-900 focus:border-green-500'
            } focus:outline-none focus:ring-2 focus:ring-green-500/20`}
          />
        </div>

        <div>
          <label className={`block text-sm font-medium mb-2 ${darkMode ? 'text-gray-300' : 'text-gray-700'}`}>
            Email Address
          </label>
          <input
            type="email"
            value={settings.contact.email}
            onChange={(e) => handleInputChange('contact', 'email', e.target.value)}
            className={`w-full px-4 py-3 rounded-lg border transition-colors ${
              darkMode 
                ? 'bg-gray-700 border-gray-600 text-white focus:border-green-500' 
                : 'bg-white border-gray-300 text-gray-900 focus:border-green-500'
            } focus:outline-none focus:ring-2 focus:ring-green-500/20`}
          />
        </div>

        <div>
          <label className={`block text-sm font-medium mb-2 ${darkMode ? 'text-gray-300' : 'text-gray-700'}`}>
            Fax Number
          </label>
          <input
            type="tel"
            value={settings.contact.fax}
            onChange={(e) => handleInputChange('contact', 'fax', e.target.value)}
            className={`w-full px-4 py-3 rounded-lg border transition-colors ${
              darkMode 
                ? 'bg-gray-700 border-gray-600 text-white focus:border-green-500' 
                : 'bg-white border-gray-300 text-gray-900 focus:border-green-500'
            } focus:outline-none focus:ring-2 focus:ring-green-500/20`}
          />
        </div>
      </div>

      <h3 className={`text-lg font-medium mt-8 ${darkMode ? 'text-white' : 'text-gray-900'}`}>
        Operating Hours
      </h3>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div>
          <label className={`block text-sm font-medium mb-2 ${darkMode ? 'text-gray-300' : 'text-gray-700'}`}>
            Monday - Friday
          </label>
          <input
            type="text"
            value={settings.hours.weekdays}
            onChange={(e) => handleInputChange('hours', 'weekdays', e.target.value)}
            className={`w-full px-4 py-3 rounded-lg border transition-colors ${
              darkMode 
                ? 'bg-gray-700 border-gray-600 text-white focus:border-green-500' 
                : 'bg-white border-gray-300 text-gray-900 focus:border-green-500'
            } focus:outline-none focus:ring-2 focus:ring-green-500/20`}
          />
        </div>

        <div>
          <label className={`block text-sm font-medium mb-2 ${darkMode ? 'text-gray-300' : 'text-gray-700'}`}>
            Saturday
          </label>
          <input
            type="text"
            value={settings.hours.saturday}
            onChange={(e) => handleInputChange('hours', 'saturday', e.target.value)}
            className={`w-full px-4 py-3 rounded-lg border transition-colors ${
              darkMode 
                ? 'bg-gray-700 border-gray-600 text-white focus:border-green-500' 
                : 'bg-white border-gray-300 text-gray-900 focus:border-green-500'
            } focus:outline-none focus:ring-2 focus:ring-green-500/20`}
          />
        </div>

        <div>
          <label className={`block text-sm font-medium mb-2 ${darkMode ? 'text-gray-300' : 'text-gray-700'}`}>
            Sunday
          </label>
          <input
            type="text"
            value={settings.hours.sunday}
            onChange={(e) => handleInputChange('hours', 'sunday', e.target.value)}
            className={`w-full px-4 py-3 rounded-lg border transition-colors ${
              darkMode 
                ? 'bg-gray-700 border-gray-600 text-white focus:border-green-500' 
                : 'bg-white border-gray-300 text-gray-900 focus:border-green-500'
            } focus:outline-none focus:ring-2 focus:ring-green-500/20`}
          />
        </div>
      </div>
    </div>
  );

  const renderSocialTab = () => (
    <div className="space-y-6">
      <h3 className={`text-lg font-medium ${darkMode ? 'text-white' : 'text-gray-900'}`}>
        Social Media Links
      </h3>

      <div className="space-y-4">
        <div>
          <label className={`flex items-center space-x-2 text-sm font-medium mb-2 ${darkMode ? 'text-gray-300' : 'text-gray-700'}`}>
            <Facebook size={16} />
            <span>Facebook</span>
          </label>
          <input
            type="url"
            value={settings.social.facebook}
            onChange={(e) => handleInputChange('social', 'facebook', e.target.value)}
            className={`w-full px-4 py-3 rounded-lg border transition-colors ${
              darkMode 
                ? 'bg-gray-700 border-gray-600 text-white focus:border-green-500' 
                : 'bg-white border-gray-300 text-gray-900 focus:border-green-500'
            } focus:outline-none focus:ring-2 focus:ring-green-500/20`}
          />
        </div>

        <div>
          <label className={`flex items-center space-x-2 text-sm font-medium mb-2 ${darkMode ? 'text-gray-300' : 'text-gray-700'}`}>
            <Instagram size={16} />
            <span>Instagram</span>
          </label>
          <input
            type="url"
            value={settings.social.instagram}
            onChange={(e) => handleInputChange('social', 'instagram', e.target.value)}
            className={`w-full px-4 py-3 rounded-lg border transition-colors ${
              darkMode 
                ? 'bg-gray-700 border-gray-600 text-white focus:border-green-500' 
                : 'bg-white border-gray-300 text-gray-900 focus:border-green-500'
            } focus:outline-none focus:ring-2 focus:ring-green-500/20`}
          />
        </div>

        <div>
          <label className={`flex items-center space-x-2 text-sm font-medium mb-2 ${darkMode ? 'text-gray-300' : 'text-gray-700'}`}>
            <Twitter size={16} />
            <span>Twitter</span>
          </label>
          <input
            type="url"
            value={settings.social.twitter}
            onChange={(e) => handleInputChange('social', 'twitter', e.target.value)}
            className={`w-full px-4 py-3 rounded-lg border transition-colors ${
              darkMode 
                ? 'bg-gray-700 border-gray-600 text-white focus:border-green-500' 
                : 'bg-white border-gray-300 text-gray-900 focus:border-green-500'
            } focus:outline-none focus:ring-2 focus:ring-green-500/20`}
          />
        </div>
      </div>
    </div>
  );

  const renderMaintenanceTab = () => (
    <div className="space-y-6">
      <h3 className={`text-lg font-medium ${darkMode ? 'text-white' : 'text-gray-900'}`}>
        Maintenance Mode
      </h3>

      <div className="flex items-center">
        <input
          type="checkbox"
          id="maintenance"
          checked={settings.maintenance.enabled}
          onChange={(e) => handleInputChange('maintenance', 'enabled', e.target.checked)}
          className="w-4 h-4 text-green-600 border-gray-300 rounded focus:ring-green-500"
        />
        <label htmlFor="maintenance" className={`ml-2 text-sm ${darkMode ? 'text-gray-300' : 'text-gray-700'}`}>
          Enable maintenance mode
        </label>
      </div>

      {settings.maintenance.enabled && (
        <div className={`p-4 rounded-lg border ${
          darkMode ? 'bg-yellow-900/20 border-yellow-800' : 'bg-yellow-50 border-yellow-200'
        }`}>
          <p className={`text-sm ${darkMode ? 'text-yellow-200' : 'text-yellow-800'}`}>
            ⚠️ Warning: Enabling maintenance mode will make the site unavailable to visitors.
          </p>
        </div>
      )}

      <div>
        <label className={`block text-sm font-medium mb-2 ${darkMode ? 'text-gray-300' : 'text-gray-700'}`}>
          Maintenance Message
        </label>
        <textarea
          rows={3}
          value={settings.maintenance.message}
          onChange={(e) => handleInputChange('maintenance', 'message', e.target.value)}
          className={`w-full px-4 py-3 rounded-lg border transition-colors resize-none ${
            darkMode 
              ? 'bg-gray-700 border-gray-600 text-white focus:border-green-500' 
              : 'bg-white border-gray-300 text-gray-900 focus:border-green-500'
          } focus:outline-none focus:ring-2 focus:ring-green-500/20`}
        />
      </div>
    </div>
  );

  return (
    <div className="p-6">
      <div className="flex items-center justify-between mb-6">
        <h2 className={`text-2xl font-bold ${darkMode ? 'text-white' : 'text-gray-900'}`}>
          General Settings
        </h2>
        <button
          onClick={handleSave}
          className={`flex items-center space-x-2 px-4 py-2 rounded-lg font-medium transition-colors ${
            saved
              ? 'bg-green-100 text-green-700 border border-green-200'
              : darkMode 
                ? 'bg-green-600 hover:bg-green-500 text-white' 
                : 'bg-green-700 hover:bg-green-600 text-white'
          }`}
        >
          <Save size={16} />
          <span>{saved ? 'Saved!' : 'Save Changes'}</span>
        </button>
      </div>

      {/* Tabs */}
      <div className="flex space-x-1 mb-6">
        {tabs.map((tab) => {
          const Icon = tab.icon;
          return (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`flex items-center space-x-2 px-4 py-2 rounded-lg font-medium transition-colors ${
                activeTab === tab.id
                  ? darkMode 
                    ? 'bg-green-600 text-white' 
                    : 'bg-green-700 text-white'
                  : darkMode 
                    ? 'text-gray-300 hover:bg-gray-700' 
                    : 'text-gray-600 hover:bg-gray-100'
              }`}
            >
              <Icon size={16} />
              <span>{tab.label}</span>
            </button>
          );
        })}
      </div>

      {/* Tab Content */}
      <div className="max-w-4xl">
        {activeTab === 'general' && renderGeneralTab()}
        {activeTab === 'contact' && renderContactTab()}
        {activeTab === 'social' && renderSocialTab()}
        {activeTab === 'maintenance' && renderMaintenanceTab()}
      </div>
    </div>
  );
};

export default GeneralSettings;
