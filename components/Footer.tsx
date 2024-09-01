import React from 'react';
import { FaFacebookF, FaTwitter, FaLinkedinIn, FaInstagram, FaYoutube } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="bg-blue-900 text-white py-8">
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-4 gap-8">
        {/* Logo and Description */}
        <div>
          <h2 className="text-2xl font-bold">Finatex</h2>
          <p className="mt-2 text-gray-400">
            We are a diversified company specialized in providing comprehensive financial solutions for individuals and businesses.
          </p>
          {/* Social Media Icons */}
          <div className="flex space-x-4 mt-4">
            <FaFacebookF className="hover:text-gray-300 cursor-pointer" />
            <FaTwitter className="hover:text-gray-300 cursor-pointer" />
            <FaLinkedinIn className="hover:text-gray-300 cursor-pointer" />
            <FaInstagram className="hover:text-gray-300 cursor-pointer" />
            <FaYoutube className="hover:text-gray-300 cursor-pointer" />
          </div>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
          <ul className="space-y-2">
            <li className="hover:text-gray-300 cursor-pointer">About us</li>
            <li className="hover:text-gray-300 cursor-pointer">Services</li>
            <li className="hover:text-gray-300 cursor-pointer">Case Studies</li>
            <li className="hover:text-gray-300 cursor-pointer">Contact</li>
          </ul>
        </div>

        {/* Pages */}
        <div>
          <h3 className="text-lg font-semibold mb-4">Pages</h3>
          <ul className="space-y-2">
            <li className="hover:text-gray-300 cursor-pointer">FAQs</li>
            <li className="hover:text-gray-300 cursor-pointer">Pricing</li>
            <li className="hover:text-gray-300 cursor-pointer">Partners</li>
            <li className="hover:text-gray-300 cursor-pointer">Support Center</li>
          </ul>
        </div>

        {/* Blog and Newsletter */}
        <div>
          <h3 className="text-lg font-semibold mb-4">Blog</h3>
          <ul className="space-y-2">
            <li className="hover:text-gray-300 cursor-pointer">Blog List</li>
            <li className="hover:text-gray-300 cursor-pointer">Blog Grid</li>
            <li className="hover:text-gray-300 cursor-pointer">Masonry</li>
            <li className="hover:text-gray-300 cursor-pointer">Blog Detail</li>
          </ul>
          <h3 className="text-lg font-semibold mt-6 mb-4">Newsletter</h3>
          <p className="text-gray-400">Need help? 24/7</p>
          <p className="font-bold text-lg">001-1234-88888</p>
          <p className="text-gray-400 mt-2">101 E 129th St, East Chicago, IN 46312, US</p>
          <div className="mt-4">
            <input
              type="email"
              placeholder="Your email address"
              className="p-2 rounded-l-lg border-none focus:ring-0 text-gray-900"
            />
            <button className="bg-blue-600 p-2 rounded-r-lg text-white hover:bg-blue-700">
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14.752 11.168l-9.978 9.978M14.752 11.168V5.41m0 5.758l9.977-9.977-9.977 9.977z" />
              </svg>
            </button>
          </div>
        </div>
      </div>

      <div className="border-t border-gray-700 mt-8 pt-4">
        <p className="text-center text-gray-400">©2023 Finatex. All Rights Reserved.</p>
        <div className="flex justify-center space-x-4 mt-2 text-sm">
          <a href="#" className="hover:text-gray-300">Terms Of Service</a>
          <a href="#" className="hover:text-gray-300">Privacy Policy</a>
          <a href="#" className="hover:text-gray-300">Cookie Policy</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
