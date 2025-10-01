'use client'

import React, { useState } from 'react';
import { MapPin, Clock, Phone, Mail, Facebook, Instagram, CheckCircle } from 'lucide-react';

interface ContactProps {
  darkMode: boolean;
}

const Contact: React.FC<ContactProps> = ({ darkMode }) => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 2000));
    
    console.log('Contact form submitted:', formData);
    setSubmitted(true);
    setIsSubmitting(false);
    
    // Reset form after 3 seconds
    setTimeout(() => {
      setSubmitted(false);
      setFormData({
        firstName: '',
        lastName: '',
        email: '',
        message: ''
      });
    }, 3000);
  };

  const openingHours = [
    { days: 'Monday - Friday', hours: '8:00 AM - 9:00 PM' },
    { days: 'Saturday - Sunday', hours: '8:00 AM - 10:00 PM' }
  ];

  const contactInfo = [
    {
      icon: <MapPin className={darkMode ? 'text-green-400' : 'text-green-600'} size={24} />,
      title: 'Address',
      details: ['345 Jan Smuts Ave', 'Craighall Park, Randburg', '2196, South Africa']
    },
    {
      icon: <Phone className={darkMode ? 'text-blue-400' : 'text-blue-600'} size={24} />,
      title: 'Phone',
      details: ['+27 11 447 8000', 'Centre Management']
    },
    {
      icon: <Mail className={darkMode ? 'text-purple-400' : 'text-purple-600'} size={24} />,
      title: 'Email',
      details: ['info@thewoodscraighall.co.za', 'management@thewoodscraighall.co.za']
    }
  ];

  return (
    <section id="contact" className={`py-20 ${darkMode ? 'bg-gray-800' : 'bg-white'}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className={`text-3xl sm:text-4xl font-bold mb-4 ${darkMode ? 'text-white' : 'text-gray-900'}`}>
            Contact Us
          </h2>
          <p className={`text-lg max-w-2xl mx-auto ${darkMode ? 'text-gray-300' : 'text-gray-600'}`}>
            Get in touch with us for inquiries, feedback, or assistance. We're here to help!
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Information */}
          <div>
            <h3 className={`text-2xl font-bold mb-8 ${darkMode ? 'text-white' : 'text-gray-900'}`}>
              Get in Touch
            </h3>
            
            {/* Contact Details */}
            <div className="space-y-6 mb-8">
              {contactInfo.map((info, index) => (
                <div key={index} className="flex items-start space-x-4">
                  <div className="flex-shrink-0">
                    {info.icon}
                  </div>
                  <div>
                    <h4 className={`font-semibold mb-2 ${darkMode ? 'text-white' : 'text-gray-900'}`}>
                      {info.title}
                    </h4>
                    {info.details.map((detail, idx) => (
                      <p key={idx} className={`${darkMode ? 'text-gray-300' : 'text-gray-600'}`}>
                        {detail}
                      </p>
                    ))}
                  </div>
                </div>
              ))}
            </div>

            {/* Opening Hours */}
            <div className={`p-6 rounded-xl ${
              darkMode ? 'bg-gray-900 border border-gray-700' : 'bg-gray-50 border border-gray-200'
            }`}>
              <div className="flex items-center space-x-3 mb-4">
                <Clock className={darkMode ? 'text-green-400' : 'text-green-600'} size={24} />
                <h4 className={`font-semibold ${darkMode ? 'text-white' : 'text-gray-900'}`}>
                  Opening Hours
                </h4>
              </div>
              <div className="space-y-2">
                {openingHours.map((schedule, index) => (
                  <div key={index} className="flex justify-between">
                    <span className={darkMode ? 'text-gray-300' : 'text-gray-600'}>
                      {schedule.days}
                    </span>
                    <span className={`font-medium ${darkMode ? 'text-white' : 'text-gray-900'}`}>
                      {schedule.hours}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            {/* Social Media */}
            <div className="mt-8">
              <h4 className={`font-semibold mb-4 ${darkMode ? 'text-white' : 'text-gray-900'}`}>
                Follow Us
              </h4>
              <div className="flex space-x-4">
                <a
                  href="https://web.facebook.com/thecolonycentre/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`p-3 rounded-lg transition-colors ${
                    darkMode 
                      ? 'bg-gray-700 text-blue-400 hover:bg-blue-600 hover:text-white' 
                      : 'bg-blue-50 text-blue-600 hover:bg-blue-600 hover:text-white'
                  }`}
                >
                  <Facebook size={24} />
                </a>
                <a
                  href="https://www.instagram.com/thewoodsshoppingcentre/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`p-3 rounded-lg transition-colors ${
                    darkMode 
                      ? 'bg-gray-700 text-pink-400 hover:bg-pink-600 hover:text-white' 
                      : 'bg-pink-50 text-pink-600 hover:bg-pink-600 hover:text-white'
                  }`}
                >
                  <Instagram size={24} />
                </a>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div>
            <h3 className={`text-2xl font-bold mb-8 ${darkMode ? 'text-white' : 'text-gray-900'}`}>
              Send us a Message
            </h3>
            
            {submitted ? (
              <div className={`p-8 rounded-xl text-center ${
                darkMode ? 'bg-green-900/20 border border-green-700' : 'bg-green-50 border border-green-200'
              }`}>
                <CheckCircle size={48} className="text-green-500 mx-auto mb-4" />
                <h4 className={`text-xl font-semibold mb-2 ${darkMode ? 'text-green-400' : 'text-green-700'}`}>
                  Thank You!
                </h4>
                <p className={darkMode ? 'text-gray-300' : 'text-gray-600'}>
                  Your message has been sent successfully. We'll get back to you soon!
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className={`block text-sm font-medium mb-2 ${darkMode ? 'text-gray-300' : 'text-gray-700'}`}>
                      First Name *
                    </label>
                    <input
                      type="text"
                      name="firstName"
                      required
                      value={formData.firstName}
                      onChange={handleInputChange}
                      className={`w-full px-4 py-3 rounded-lg border transition-colors ${
                        darkMode 
                          ? 'bg-gray-900 border-gray-600 text-white focus:border-green-500' 
                          : 'bg-white border-gray-300 text-gray-900 focus:border-green-500'
                      } focus:outline-none focus:ring-2 focus:ring-green-500/20`}
                    />
                  </div>
                  <div>
                    <label className={`block text-sm font-medium mb-2 ${darkMode ? 'text-gray-300' : 'text-gray-700'}`}>
                      Last Name *
                    </label>
                    <input
                      type="text"
                      name="lastName"
                      required
                      value={formData.lastName}
                      onChange={handleInputChange}
                      className={`w-full px-4 py-3 rounded-lg border transition-colors ${
                        darkMode 
                          ? 'bg-gray-900 border-gray-600 text-white focus:border-green-500' 
                          : 'bg-white border-gray-300 text-gray-900 focus:border-green-500'
                      } focus:outline-none focus:ring-2 focus:ring-green-500/20`}
                    />
                  </div>
                </div>

                <div>
                  <label className={`block text-sm font-medium mb-2 ${darkMode ? 'text-gray-300' : 'text-gray-700'}`}>
                    Email *
                  </label>
                  <input
                    type="email"
                    name="email"
                    required
                    value={formData.email}
                    onChange={handleInputChange}
                    className={`w-full px-4 py-3 rounded-lg border transition-colors ${
                      darkMode 
                        ? 'bg-gray-900 border-gray-600 text-white focus:border-green-500' 
                        : 'bg-white border-gray-300 text-gray-900 focus:border-green-500'
                    } focus:outline-none focus:ring-2 focus:ring-green-500/20`}
                  />
                </div>

                <div>
                  <label className={`block text-sm font-medium mb-2 ${darkMode ? 'text-gray-300' : 'text-gray-700'}`}>
                    Message *
                  </label>
                  <textarea
                    name="message"
                    required
                    rows={6}
                    value={formData.message}
                    onChange={handleInputChange}
                    placeholder="How can we help you?"
                    className={`w-full px-4 py-3 rounded-lg border transition-colors resize-none ${
                      darkMode 
                        ? 'bg-gray-900 border-gray-600 text-white placeholder-gray-400 focus:border-green-500' 
                        : 'bg-white border-gray-300 text-gray-900 placeholder-gray-500 focus:border-green-500'
                    } focus:outline-none focus:ring-2 focus:ring-green-500/20`}
                  />
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className={`w-full py-4 px-6 rounded-lg font-semibold transition-colors ${
                    darkMode 
                      ? 'bg-green-600 hover:bg-green-500 text-white' 
                      : 'bg-green-700 hover:bg-green-600 text-white'
                  } disabled:opacity-50 disabled:cursor-not-allowed`}
                >
                  {isSubmitting ? 'Sending...' : 'Send Message'}
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;