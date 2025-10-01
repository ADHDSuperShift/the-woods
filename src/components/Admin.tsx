'use client'

import React, { useState } from 'react';
import { Lock, User, Eye, EyeOff, Shield } from 'lucide-react';

interface AdminProps {
  darkMode: boolean;
}

const Admin: React.FC<AdminProps> = ({ darkMode }) => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const [credentials, setCredentials] = useState({ username: '', password: '' });
  const [loginError, setLoginError] = useState('');

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    if (credentials.username === 'admin' && credentials.password === 'woods2024') {
      setIsAuthenticated(true);
      setLoginError('');
    } else {
      setLoginError('Invalid credentials');
    }
  };

  const handleLogout = () => {
    setIsAuthenticated(false);
    setCredentials({ username: '', password: '' });
  };

  if (!isAuthenticated) {
    return (
      <section id="admin" className={`py-20 min-h-screen flex items-center ${darkMode ? 'bg-gray-900' : 'bg-gray-50'}`}>
        <div className="max-w-md mx-auto px-4 w-full">
          <div className={`p-8 rounded-xl shadow-lg ${darkMode ? 'bg-gray-800 border border-gray-700' : 'bg-white border border-gray-200'}`}>
            <div className="text-center mb-8">
              <Shield size={48} className={`mx-auto mb-4 ${darkMode ? 'text-green-400' : 'text-green-600'}`} />
              <h2 className={`text-2xl font-bold ${darkMode ? 'text-white' : 'text-gray-900'}`}>Admin Login</h2>
              <p className={`mt-2 ${darkMode ? 'text-gray-300' : 'text-gray-600'}`}>Access the admin dashboard</p>
            </div>

            <form onSubmit={handleLogin} className="space-y-6">
              <div>
                <label className={`block text-sm font-medium mb-2 ${darkMode ? 'text-gray-300' : 'text-gray-700'}`}>
                  Username
                </label>
                <div className="relative">
                  <User size={20} className={`absolute left-3 top-1/2 transform -translate-y-1/2 ${darkMode ? 'text-gray-400' : 'text-gray-500'}`} />
                  <input
                    type="text"
                    value={credentials.username}
                    onChange={(e) => setCredentials({...credentials, username: e.target.value})}
                    className={`w-full pl-10 pr-4 py-3 rounded-lg border ${darkMode ? 'bg-gray-900 border-gray-600 text-white' : 'bg-white border-gray-300'} focus:outline-none focus:ring-2 focus:ring-green-500/20`}
                    placeholder="Enter username"
                    required
                  />
                </div>
              </div>

              <div>
                <label className={`block text-sm font-medium mb-2 ${darkMode ? 'text-gray-300' : 'text-gray-700'}`}>
                  Password
                </label>
                <div className="relative">
                  <Lock size={20} className={`absolute left-3 top-1/2 transform -translate-y-1/2 ${darkMode ? 'text-gray-400' : 'text-gray-500'}`} />
                  <input
                    type={showPassword ? 'text' : 'password'}
                    value={credentials.password}
                    onChange={(e) => setCredentials({...credentials, password: e.target.value})}
                    className={`w-full pl-10 pr-12 py-3 rounded-lg border ${darkMode ? 'bg-gray-900 border-gray-600 text-white' : 'bg-white border-gray-300'} focus:outline-none focus:ring-2 focus:ring-green-500/20`}
                    placeholder="Enter password"
                    required
                  />
                  <button
                    type="button"
                    onClick={() => setShowPassword(!showPassword)}
                    className={`absolute right-3 top-1/2 transform -translate-y-1/2 ${darkMode ? 'text-gray-400' : 'text-gray-500'}`}
                  >
                    {showPassword ? <EyeOff size={20} /> : <Eye size={20} />}
                  </button>
                </div>
              </div>

              {loginError && (
                <div className="text-red-500 text-sm text-center">{loginError}</div>
              )}

              <button
                type="submit"
                className={`w-full py-3 px-4 rounded-lg font-semibold ${darkMode ? 'bg-green-600 hover:bg-green-500' : 'bg-green-700 hover:bg-green-600'} text-white transition-colors`}
              >
                Login
              </button>
            </form>

            <div className={`mt-6 p-4 rounded-lg ${darkMode ? 'bg-gray-700' : 'bg-gray-100'}`}>
              <p className={`text-sm ${darkMode ? 'text-gray-300' : 'text-gray-600'}`}>
                Demo credentials: admin / woods2024
              </p>
            </div>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section id="admin" className={`py-20 ${darkMode ? 'bg-gray-900' : 'bg-gray-50'}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center mb-8">
          <h2 className={`text-3xl font-bold ${darkMode ? 'text-white' : 'text-gray-900'}`}>Admin Dashboard</h2>
          <button
            onClick={handleLogout}
            className={`px-4 py-2 rounded-lg ${darkMode ? 'bg-red-600 hover:bg-red-500' : 'bg-red-700 hover:bg-red-600'} text-white transition-colors`}
          >
            Logout
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className={`p-6 rounded-xl ${darkMode ? 'bg-gray-800 border border-gray-700' : 'bg-white border border-gray-200'}`}>
            <h3 className={`text-xl font-semibold mb-4 ${darkMode ? 'text-white' : 'text-gray-900'}`}>Manage Shops</h3>
            <p className={`mb-4 ${darkMode ? 'text-gray-300' : 'text-gray-600'}`}>Add, edit, or remove shops from the directory.</p>
            <button className={`w-full py-2 px-4 rounded-lg ${darkMode ? 'bg-blue-600 hover:bg-blue-500' : 'bg-blue-700 hover:bg-blue-600'} text-white transition-colors`}>
              Manage Shops
            </button>
          </div>

          <div className={`p-6 rounded-xl ${darkMode ? 'bg-gray-800 border border-gray-700' : 'bg-white border border-gray-200'}`}>
            <h3 className={`text-xl font-semibold mb-4 ${darkMode ? 'text-white' : 'text-gray-900'}`}>News & Events</h3>
            <p className={`mb-4 ${darkMode ? 'text-gray-300' : 'text-gray-600'}`}>Create and manage news articles and events.</p>
            <button className={`w-full py-2 px-4 rounded-lg ${darkMode ? 'bg-green-600 hover:bg-green-500' : 'bg-green-700 hover:bg-green-600'} text-white transition-colors`}>
              Manage News
            </button>
          </div>

          <div className={`p-6 rounded-xl ${darkMode ? 'bg-gray-800 border border-gray-700' : 'bg-white border border-gray-200'}`}>
            <h3 className={`text-xl font-semibold mb-4 ${darkMode ? 'text-white' : 'text-gray-900'}`}>Site Content</h3>
            <p className={`mb-4 ${darkMode ? 'text-gray-300' : 'text-gray-600'}`}>Update opening hours, contact info, and other content.</p>
            <button className={`w-full py-2 px-4 rounded-lg ${darkMode ? 'bg-purple-600 hover:bg-purple-500' : 'bg-purple-700 hover:bg-purple-600'} text-white transition-colors`}>
              Edit Content
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Admin;