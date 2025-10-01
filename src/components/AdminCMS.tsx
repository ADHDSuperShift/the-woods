'use client'

import React, { useState } from 'react';
import { Shield, X, Store, FileText, Settings, LogOut } from 'lucide-react';
import ShopManagement from './admin/ShopManagement';
import NewsManagement from './admin/NewsManagement';
import GeneralSettings from './admin/GeneralSettings';

interface AdminCMSProps {
  darkMode: boolean;
  onClose: () => void;
}

const AdminCMS: React.FC<AdminCMSProps> = ({ darkMode, onClose }) => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [loginForm, setLoginForm] = useState({ username: '', password: '' });
  const [activeTab, setActiveTab] = useState('shops');
  const [loginError, setLoginError] = useState('');

  const tabs = [
    { id: 'shops', label: 'Shop Management', icon: Store },
    { id: 'news', label: 'News & Events', icon: FileText },
    { id: 'settings', label: 'General Settings', icon: Settings }
  ];

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    if (loginForm.username === 'admin' && loginForm.password === 'admin123') {
      setIsAuthenticated(true);
      setLoginError('');
    } else {
      setLoginError('Invalid credentials');
    }
  };

  const handleLogout = () => {
    setIsAuthenticated(false);
    setLoginForm({ username: '', password: '' });
    setActiveTab('shops');
  };

  const handleBackdropClick = (e: React.MouseEvent) => {
    if (e.target === e.currentTarget) {
      onClose();
    }
  };

  return (
    <div 
      className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-start justify-center p-4 pt-4"
      onClick={handleBackdropClick}
    >
      <div className={`relative w-full max-w-7xl h-[90vh] rounded-xl shadow-2xl overflow-hidden ${
        darkMode ? 'bg-gray-800' : 'bg-white'
      }`}>
        <div className={`flex items-center justify-between p-6 border-b ${
          darkMode ? 'border-gray-700 bg-gray-800' : 'border-gray-200 bg-white'
        }`}>
          <h1 className={`text-2xl font-bold ${darkMode ? 'text-white' : 'text-gray-900'}`}>
            The Woods CMS
          </h1>
          <div className="flex items-center space-x-4">
            {isAuthenticated && (
              <button
                onClick={handleLogout}
                className={`flex items-center space-x-2 px-3 py-2 rounded-lg transition-colors ${
                  darkMode 
                    ? 'text-gray-300 hover:bg-gray-700' 
                    : 'text-gray-600 hover:bg-gray-100'
                }`}
              >
                <LogOut size={16} />
                <span>Logout</span>
              </button>
            )}
            <button
              onClick={onClose}
              className={`p-2 rounded-lg transition-colors ${
                darkMode ? 'hover:bg-gray-700 text-gray-400' : 'hover:bg-gray-100 text-gray-500'
              }`}
            >
              <X size={24} />
            </button>
          </div>
        </div>

        {!isAuthenticated ? (
          <div className="flex items-center justify-center h-full p-8">
            <div className={`w-full max-w-md p-8 rounded-xl ${
              darkMode ? 'bg-gray-700 border border-gray-600' : 'bg-gray-50 border border-gray-200'
            }`}>
              <div className="text-center mb-8">
                <Shield className={`mx-auto h-12 w-12 mb-4 ${
                  darkMode ? 'text-green-400' : 'text-green-600'
                }`} />
                <h2 className={`text-2xl font-bold ${darkMode ? 'text-white' : 'text-gray-900'}`}>
                  Admin Login
                </h2>
                <p className={`mt-2 ${darkMode ? 'text-gray-300' : 'text-gray-600'}`}>
                  Please sign in to access the CMS
                </p>
              </div>

              <form onSubmit={handleLogin} className="space-y-6">
                <div>
                  <label className={`block text-sm font-medium mb-2 ${darkMode ? 'text-gray-300' : 'text-gray-700'}`}>
                    Username
                  </label>
                  <input
                    type="text"
                    required
                    value={loginForm.username}
                    onChange={(e) => setLoginForm({ ...loginForm, username: e.target.value })}
                    className={`w-full px-4 py-3 rounded-lg border transition-colors ${
                      darkMode 
                        ? 'bg-gray-600 border-gray-500 text-white focus:border-green-500' 
                        : 'bg-white border-gray-300 text-gray-900 focus:border-green-500'
                    } focus:outline-none focus:ring-2 focus:ring-green-500/20`}
                    placeholder="Enter username"
                  />
                </div>

                <div>
                  <label className={`block text-sm font-medium mb-2 ${darkMode ? 'text-gray-300' : 'text-gray-700'}`}>
                    Password
                  </label>
                  <input
                    type="password"
                    required
                    value={loginForm.password}
                    onChange={(e) => setLoginForm({ ...loginForm, password: e.target.value })}
                    className={`w-full px-4 py-3 rounded-lg border transition-colors ${
                      darkMode 
                        ? 'bg-gray-600 border-gray-500 text-white focus:border-green-500' 
                        : 'bg-white border-gray-300 text-gray-900 focus:border-green-500'
                    } focus:outline-none focus:ring-2 focus:ring-green-500/20`}
                    placeholder="Enter password"
                  />
                </div>

                {loginError && (
                  <div className={`p-3 rounded-lg ${
                    darkMode ? 'bg-red-900/20 border border-red-800 text-red-200' : 'bg-red-50 border border-red-200 text-red-700'
                  }`}>
                    {loginError}
                  </div>
                )}

                <button
                  type="submit"
                  className={`w-full py-3 px-4 rounded-lg font-medium transition-colors ${
                    darkMode 
                      ? 'bg-green-600 hover:bg-green-500 text-white' 
                      : 'bg-green-700 hover:bg-green-600 text-white'
                  }`}
                >
                  Sign In
                </button>
              </form>

              <div className={`mt-6 p-4 rounded-lg ${
                darkMode ? 'bg-gray-600/50' : 'bg-gray-100'
              }`}>
                <p className={`text-sm ${darkMode ? 'text-gray-300' : 'text-gray-600'}`}>
                  Demo credentials:
                </p>
                <p className={`text-sm font-mono ${darkMode ? 'text-green-400' : 'text-green-600'}`}>
                  Username: admin<br />
                  Password: admin123
                </p>
              </div>
            </div>
          </div>
        ) : (
          <div className="flex h-full">
            <div className={`w-64 border-r ${
              darkMode ? 'bg-gray-700 border-gray-600' : 'bg-gray-50 border-gray-200'
            }`}>
              <nav className="p-4 space-y-2">
                {tabs.map((tab) => {
                  const Icon = tab.icon;
                  return (
                    <button
                      key={tab.id}
                      onClick={() => setActiveTab(tab.id)}
                      className={`w-full flex items-center space-x-3 px-4 py-3 rounded-lg text-left transition-colors ${
                        activeTab === tab.id
                          ? darkMode 
                            ? 'bg-green-600 text-white' 
                            : 'bg-green-700 text-white'
                          : darkMode 
                            ? 'text-gray-300 hover:bg-gray-600' 
                            : 'text-gray-700 hover:bg-gray-100'
                      }`}
                    >
                      <Icon size={20} />
                      <span>{tab.label}</span>
                    </button>
                  );
                })}
              </nav>
            </div>

            <div className="flex-1 overflow-y-auto">
              {activeTab === 'shops' && <ShopManagement darkMode={darkMode} />}
              {activeTab === 'news' && <NewsManagement darkMode={darkMode} />}
              {activeTab === 'settings' && <GeneralSettings darkMode={darkMode} />}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default AdminCMS;
