'use client'

import React, { useState } from 'react';
import { Menu, X } from 'lucide-react';
import ContactModal from './ContactModal';
import AdminCMS from './AdminCMS';

interface HeaderProps {
  darkMode: boolean;
  activeSection: string;
  setActiveSection: (section: string) => void;
}

const Header: React.FC<HeaderProps> = ({ darkMode, activeSection, setActiveSection }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isContactModalOpen, setIsContactModalOpen] = useState(false);
  const [isAdminCMSOpen, setIsAdminCMSOpen] = useState(false);

  const navItems = [
    { id: 'home', label: 'Home' },
    { id: 'shops', label: 'Shops' },
    { id: 'events', label: 'Events' },
    { id: 'leasing', label: 'Leasing' },
    { id: 'contact', label: 'Contact' },
    { id: 'admin', label: 'Admin' }
  ];

  const handleNavClick = (sectionId: string) => {
    setActiveSection(sectionId);
    setMobileMenuOpen(false);
    
    if (sectionId === 'home') {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    } else if (sectionId === 'contact') {
      setIsContactModalOpen(true);
    } else if (sectionId === 'admin') {
      setIsAdminCMSOpen(true);
    } else {
      const element = document.getElementById(sectionId);
      element?.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 transition-all duration-300 bg-gray-900/95 border-gray-700 backdrop-blur-sm border-b">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center">
            <h1 className="text-xl font-bold text-green-400">
              The Woods
            </h1>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-8">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => handleNavClick(item.id)}
                className={`px-3 py-2 rounded-md text-sm font-medium transition-colors ${
                  activeSection === item.id
                    ? 'text-green-400 bg-green-900/20'
                    : 'text-gray-300 hover:text-green-400'
                }`}
              >
                {item.label}
              </button>
            ))}
          </nav>

          <div className="flex items-center space-x-4">
            {/* Mobile menu button */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="md:hidden p-2 rounded-md text-gray-300 hover:text-green-400"
            >
              {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {mobileMenuOpen && (
          <div className="md:hidden border-t border-gray-700">
            <div className="px-2 pt-2 pb-3 space-y-1">
              {navItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => handleNavClick(item.id)}
                  className={`block w-full text-left px-3 py-2 rounded-md text-base font-medium transition-colors ${
                    activeSection === item.id
                      ? 'text-green-400 bg-green-900/20'
                      : 'text-gray-300 hover:text-green-400'
                  }`}
                >
                  {item.label}
                </button>
              ))}
            </div>
          </div>
        )}
      </div>

      <ContactModal
        isOpen={isContactModalOpen}
        onClose={() => setIsContactModalOpen(false)}
        darkMode={darkMode}
        type="general"
      />
      
      {isAdminCMSOpen && (
        <AdminCMS
          darkMode={darkMode}
          onClose={() => setIsAdminCMSOpen(false)}
        />
      )}
    </header>
  );
};

export default Header;