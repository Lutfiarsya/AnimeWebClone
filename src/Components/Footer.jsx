import React from 'react';
import { FaTwitter, FaFacebook, FaInstagram, FaDiscord } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="bg-gradient-to-b from-gray-900 to-gray-800 text-white py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
          <div className="space-y-4">
            <h3 className="text-2xl font-semibold mb-4 text-[--ThirdColor]">MyAnimeList Clone</h3>
            <p className="text-gray-300">Your ultimate destination for anime and manga enthusiasts. Track, share, and discover your favorite series.</p>
            <div className="flex space-x-4 pt-4 overflow-hidden">
              <a href="#" className="text-gray-400 hover:text-[--ThirdColor] transform hover:scale-110 transition-all">
                <FaTwitter size={24} />
              </a>
              <a href="#" className="text-gray-400 hover:text-[--ThirdColor] transform hover:scale-110 transition-all">
                <FaFacebook size={24} />
              </a>
              <a href="#" className="text-gray-400 hover:text-[--ThirdColor] transform hover:scale-110 transition-all">
                <FaInstagram size={24} />
              </a>
              <a href="#" className="text-gray-400 hover:text-[--ThirdColor] transform hover:scale-110 transition-all">
                <FaDiscord size={24} />
              </a>
            </div>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-4 text-[--ThirdColor]">Quick Links</h4>
            <ul className="space-y-3">
              <li><a href="#" className="text-gray-300 hover:text-[--ThirdCColor] transition-colors duration-200">Home</a></li>
              <li><a href="#" className="text-gray-300 hover:text-[--ThirdColor] transition-colors duration-200">Anime List</a></li>
              <li><a href="#" className="text-gray-300 hover:text-[--ThirdColor] transition-colors duration-200">Manga List</a></li>
              <li><a href="#" className="text-gray-300 hover:text-[--ThirdColor] transition-colors duration-200">Season Chart</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-4 text-[--ThirdColor]">Community</h4>
            <ul className="space-y-3">
              <li><a href="#" className="text-gray-300 hover:text-[--ThirdColor] transition-colors duration-200">Forums</a></li>
              <li><a href="#" className="text-gray-300 hover:text-[--ThirdColor] transition-colors duration-200">Articles</a></li>
              <li><a href="#" className="text-gray-300 hover:text-[--ThirdColor] transition-colors duration-200">Reviews</a></li>
              <li><a href="#" className="text-gray-300 hover:text-[--ThirdColor] transition-colors duration-200">Members</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-4 text-[--ThirdColor]">Newsletter</h4>
            <p className="text-gray-300 mb-4">Stay updated with our latest news and updates.</p>
            <div className="flex flex-col space-y-3">
              <input 
                type="email" 
                placeholder="Enter your email" 
                className="bg-gray-700 text-white px-4 py-2 rounded focus:outline-none focus:ring-2 focus:ring-blue-400"
              />
              <button className="bg-blue-500 hover:bg-blue-600 px-4 py-2 rounded transition-colors duration-200">
                Subscribe
              </button>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-700 mt-12 pt-8 text-center">
          <p className="text-gray-400">
            &copy; {new Date().getFullYear()} MyAnimeList Clone. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
