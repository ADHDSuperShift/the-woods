'use client'

import React, { useState } from 'react';
import { X, Mail, Phone, MapPin, Send, CheckCircle } from 'lucide-react';

interface ContactModalProps {
  isOpen: boolean;
  onClose: () => void;
  darkMode: boolean;
  type: 'leasing' | 'general';
}

const ContactModal: React.FC<ContactModalProps> = ({ isOpen, onClose, darkMode, type }) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: type === 'leasing' ? 'Leasing Inquiry' : '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
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
        name: '',
        email: '',
        phone: '',
        subject: type === 'leasing' ? 'Leasing Inquiry' : '',
        message: ''
      });
      onClose();
    }, 3000);
  };

  const handleBackdropClick = (e: React.MouseEvent) => {
    if (e.target === e.currentTarget) {
      onClose();
    }
  };

  if (!isOpen) return null;

  return (
    <div 
      className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4"
      onClick={handleBackdropClick}
    >
      <div className={`relative max-w-2xl w-full max-h-[90vh] overflow-y-auto rounded-xl shadow-2xl ${
        darkMode ? 'bg-gray-800' : 'bg-white'
      }`}>
        {/* Header */}
        <div className={`sticky top-0 flex items-center justify-between p-6 border-b ${
          darkMode ? 'border-gray-700 bg-gray-800' : 'border-gray-200 bg-white'
        }`}>
          <h2 className={`text-2xl font-bold ${darkMode ? 'text-white' : 'text-gray-900'}`}>
            {type === 'leasing' ? 'Leasing Inquiry' : 'Contact Us'}
          </h2>
          <button
            onClick={onClose}
            className={`p-2 rounded-lg transition-colors ${
              darkMode ? 'hover:bg-gray-700 text-gray-400' : 'hover:bg-gray-100 text-gray-500'
            }`}
          >
            <X size={24} />
          </button>
        </div>

        {/* Content */}
        <div className="p-6">
          {submitted ? (
            <div className={`text-center py-8 ${
              darkMode ? 'bg-green-900/20 border border-green-700' : 'bg-green-50 border border-green-200'
            } rounded-xl`}>
              <CheckCircle size={48} className="text-green-500 mx-auto mb-4" />
              <h3 className={`text-xl font-semibold mb-2 ${darkMode ? 'text-green-400' : 'text-green-700'}`}>
                Thank You!
              </h3>
              <p className={darkMode ? 'text-gray-300' : 'text-gray-600'}>
                {type === 'leasing' 
                  ? 'Your leasing inquiry has been submitted. We\'ll get back to you within 24 hours.'
                  : 'Your message has been sent. We\'ll respond as soon as possible.'
                }
              </p>
            </div>
          ) : (
            <>
              {/* Contact Info */}
              <div className={`grid grid-cols-1 md:grid-cols-3 gap-4 mb-8 p-4 rounded-lg ${
                darkMode ? 'bg-gray-700' : 'bg-gray-50'
              }`}>
                <div className="flex items-center space-x-3">
                  <div className={`p-2 rounded-lg ${darkMode ? 'bg-green-600' : 'bg-green-100'}`}>
                    <Phone size={16} className={darkMode ? 'text-white' : 'text-green-600'} />
                  </div>
                  <div>
                    <p className={`text-sm font-medium ${darkMode ? 'text-gray-300' : 'text-gray-700'}`}>
                      Phone
                    </p>
                    <p className={`text-sm ${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>
                      011 447 9380
                    </p>
                  </div>
                </div>

                <div className="flex items-center space-x-3">
                  <div className={`p-2 rounded-lg ${darkMode ? 'bg-green-600' : 'bg-green-100'}`}>
                    <Mail size={16} className={darkMode ? 'text-white' : 'text-green-600'} />
                  </div>
                  <div>
                    <p className={`text-sm font-medium ${darkMode ? 'text-gray-300' : 'text-gray-700'}`}>
                      Email
                    </p>
                    <p className={`text-sm ${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>
                      info@thewoods.co.za
                    </p>
                  </div>
                </div>

                <div className="flex items-center space-x-3">
                  <div className={`p-2 rounded-lg ${darkMode ? 'bg-green-600' : 'bg-green-100'}`}>
                    <MapPin size={16} className={darkMode ? 'text-white' : 'text-green-600'} />
                  </div>
                  <div>
                    <p className={`text-sm font-medium ${darkMode ? 'text-gray-300' : 'text-gray-700'}`}>
                      Location
                    </p>
                    <p className={`text-sm ${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>
                      Craighall Park
                    </p>
                  </div>
                </div>
              </div>

              {/* Form */}
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className={`block text-sm font-medium mb-2 ${darkMode ? 'text-gray-300' : 'text-gray-700'}`}>
                      Full Name *
                    </label>
                    <input
                      type="text"
                      name="name"
                      required
                      value={formData.name}
                      onChange={handleInputChange}
                      className={`w-full px-4 py-3 rounded-lg border transition-colors ${
                        darkMode 
                          ? 'bg-gray-700 border-gray-600 text-white focus:border-green-500' 
                          : 'bg-white border-gray-300 text-gray-900 focus:border-green-500'
                      } focus:outline-none focus:ring-2 focus:ring-green-500/20`}
                    />
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
                          ? 'bg-gray-700 border-gray-600 text-white focus:border-green-500' 
                          : 'bg-white border-gray-300 text-gray-900 focus:border-green-500'
                      } focus:outline-none focus:ring-2 focus:ring-green-500/20`}
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className={`block text-sm font-medium mb-2 ${darkMode ? 'text-gray-300' : 'text-gray-700'}`}>
                      Phone
                    </label>
                    <input
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleInputChange}
                      className={`w-full px-4 py-3 rounded-lg border transition-colors ${
                        darkMode 
                          ? 'bg-gray-700 border-gray-600 text-white focus:border-green-500' 
                          : 'bg-white border-gray-300 text-gray-900 focus:border-green-500'
                      } focus:outline-none focus:ring-2 focus:ring-green-500/20`}
                    />
                  </div>
                  <div>
                    <label className={`block text-sm font-medium mb-2 ${darkMode ? 'text-gray-300' : 'text-gray-700'}`}>
                      Subject
                    </label>
                    <select
                      name="subject"
                      value={formData.subject}
                      onChange={handleInputChange}
                      className={`w-full px-4 py-3 rounded-lg border transition-colors ${
                        darkMode 
                          ? 'bg-gray-700 border-gray-600 text-white focus:border-green-500' 
                          : 'bg-white border-gray-300 text-gray-900 focus:border-green-500'
                      } focus:outline-none focus:ring-2 focus:ring-green-500/20`}
                    >
                      <option value="">Select subject</option>
                      <option value="Leasing Inquiry">Leasing Inquiry</option>
                      <option value="General Information">General Information</option>
                      <option value="Customer Service">Customer Service</option>
                      <option value="Events & Marketing">Events & Marketing</option>
                      <option value="Other">Other</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label className={`block text-sm font-medium mb-2 ${darkMode ? 'text-gray-300' : 'text-gray-700'}`}>
                    Message *
                  </label>
                  <textarea
                    name="message"
                    rows={4}
                    required
                    value={formData.message}
                    onChange={handleInputChange}
                    placeholder={type === 'leasing' 
                      ? 'Tell us about your business and space requirements...'
                      : 'How can we help you?'
                    }
                    className={`w-full px-4 py-3 rounded-lg border transition-colors resize-none ${
                      darkMode 
                        ? 'bg-gray-700 border-gray-600 text-white placeholder-gray-400 focus:border-green-500' 
                        : 'bg-white border-gray-300 text-gray-900 placeholder-gray-500 focus:border-green-500'
                    } focus:outline-none focus:ring-2 focus:ring-green-500/20`}
                  />
                </div>

                <div className="flex space-x-4">
                  <button
                    type="button"
                    onClick={onClose}
                    className={`flex-1 py-3 px-6 rounded-lg font-medium transition-colors border ${
                      darkMode 
                        ? 'border-gray-600 text-gray-300 hover:bg-gray-700' 
                        : 'border-gray-300 text-gray-700 hover:bg-gray-50'
                    }`}
                  >
                    Cancel
                  </button>
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className={`flex-1 py-3 px-6 rounded-lg font-medium transition-colors ${
                      darkMode 
                        ? 'bg-green-600 hover:bg-green-500 text-white' 
                        : 'bg-green-700 hover:bg-green-600 text-white'
                    } disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center space-x-2`}
                  >
                    {isSubmitting ? (
                      <span>Sending...</span>
                    ) : (
                      <>
                        <Send size={16} />
                        <span>Send Message</span>
                      </>
                    )}
                  </button>
                </div>
              </form>
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default ContactModal;
