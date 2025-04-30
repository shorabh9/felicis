import React from 'react';
import { Linkedin, Twitter } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-gray-800 mt-[40px] text-white py-12">
      <div className="container mx-auto px-4">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Logo Section */}
          <div className="mb-6 md:mb-0">
            <div className="flex items-center mb-4">
              <svg className="w-8 h-8 mr-2" viewBox="0 0 24 24" fill="white">
                <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8z" />
                <path d="M12 6c-3.31 0-6 2.69-6 6s2.69 6 6 6 6-2.69 6-6-2.69-6-6-6zm0 10c-2.21 0-4-1.79-4-4s1.79-4 4-4 4 1.79 4 4-1.79 4-4 4z" />
              </svg>
              <span className="text-xl font-bold">Felicis</span>
            </div>
          </div>

          {/* Navigation Links */}
          <div className="grid grid-cols-2 gap-8">
            {/* About Us Column */}
            <div>
              <h3 className="text-lg font-medium mb-4">About us</h3>
              <ul className="space-y-2">
                <li><a href="#" className="hover:text-gray-300">Founder Pledge</a></li>
                <li><a href="#" className="hover:text-gray-300">Founders on Felicis</a></li>
                <li><a href="#" className="hover:text-gray-300">Impact</a></li>
                <li><a href="#" className="hover:text-gray-300">Benchmark Your Org</a></li>
                <li><a href="#" className="hover:text-gray-300">Felicis Fellows</a></li>
                <li><a href="#" className="hover:text-gray-300">Mission</a></li>
                <li><a href="#" className="hover:text-gray-300">Team</a></li>
                <li><a href="#" className="hover:text-gray-300">Companies</a></li>
              </ul>
            </div>

            {/* Focus Areas Column */}
            <div>
              <h3 className="text-lg font-medium mb-4">Focus Areas</h3>
              <ul className="space-y-2">
                <li><a href="#" className="hover:text-gray-300">AI</a></li>
                <li><a href="#" className="hover:text-gray-300">Global Resilience</a></li>
                <li><a href="#" className="hover:text-gray-300">Infra</a></li>
                <li><a href="#" className="hover:text-gray-300">Health & Bio</a></li>
                <li><a href="#" className="hover:text-gray-300">Security</a></li>
                <li><a href="#" className="hover:text-gray-300">Vertical SaaS</a></li>
                <li><a href="#" className="hover:text-gray-300">Insights</a></li>
              </ul>
            </div>
          </div>

          {/* Newsletter Subscription */}
          <div>
            <h3 className="text-lg font-medium mb-4">
              Get updates about Felicis, our founders, and our insights in your inbox:
            </h3>
            <div className="flex flex-col md:flex-row gap-2">
              <input
                type="email"
                placeholder="Enter your email address"
                className="px-4 py-2 rounded text-gray-800 w-full"
              />
              <button className="bg-transparent hover:bg-gray-700 text-white font-semibold py-2 px-4 border border-white rounded">
                Subscribe
              </button>
            </div>
          </div>
        </div>

        {/* Bottom Footer */}
        <div className="border-t border-gray-700 mt-8 pt-8 flex flex-col md:flex-row justify-between items-center">
          <div className="flex space-x-6 mb-4 md:mb-0">
            <a href="#" className="hover:text-gray-300">Terms of Service</a>
            <a href="#" className="hover:text-gray-300">Privacy Policy</a>
            <span>Copyright © 2025. Felicis All rights reserved.</span>
          </div>
          <div className="flex space-x-4">
            <a href="#" className="hover:text-gray-300">
              <Linkedin size={20} />
            </a>
            <a href="#" className="hover:text-gray-300">
              <Twitter size={20} />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;