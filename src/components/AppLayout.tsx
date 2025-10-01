'use client'

import React, { useState } from 'react';
import Header from './Header';
import Hero from './Hero';
import CentreDescription from './CentreDescription';
import Shops from './Shops';
import FeaturedNews from './FeaturedNews';
import Leasing from './Leasing';
import Footer from './Footer';

const AppLayout: React.FC = () => {
  const [activeSection, setActiveSection] = useState('home');
  const darkMode = true; // Permanently set to dark mode

  return (
    <div className="min-h-screen transition-colors duration-300 dark bg-gray-900">
      <Header 
        darkMode={darkMode}
        activeSection={activeSection}
        setActiveSection={setActiveSection}
      />
      <main className="pt-16">
        <Hero darkMode={darkMode} setActiveSection={setActiveSection} />
        <CentreDescription darkMode={darkMode} />
        <Shops darkMode={darkMode} />
        <FeaturedNews darkMode={darkMode} />
        <Leasing darkMode={darkMode} />
      </main>
      <Footer darkMode={darkMode} />
    </div>
  );
};

export default AppLayout;
