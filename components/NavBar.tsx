'use client';
import React, { useState } from 'react';
import Image from 'next/image';
import { FaFacebookF, FaLinkedinIn, FaTwitter, FaInstagram, FaYoutube, FaBars, FaTimes } from 'react-icons/fa';
import Logo from '@/public/Logo.svg'; // Update with your logo path

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <header className="bg-blue-900">
      <div className="container mx-auto px-4 py-2 flex justify-between items-center">
        {/* Left Section: Language and Address */}
        <div className="flex items-center space-x-4 text-white">
          <span>English</span>
          <span className="text-gray-400">|</span>
          <span className="flex items-center">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 11c2.21 0 4-1.79 4-4S14.21 3 12 3 8 4.79 8 7s1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v3h16v-3c0-2.66-5.33-4-8-4z" />
            </svg>
            160 Broadway 15th floor, New York
          </span>
          <span className="text-gray-400">|</span>
          <span className="flex items-center">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5h18M9 3v2m6-2v2m2 4H7l-2 9h14l-2-9zM2 9h20" />
            </svg>
            333 456 8888
          </span>
        </div>

        {/* Social Media Icons */}
        {/* <div className="flex space-x-4 text-white">
          <FaFacebookF className="hover:text-gray-400 cursor-pointer" />
          <FaLinkedinIn className="hover:text-gray-400 cursor-pointer" />
          <FaTwitter className="hover:text-gray-400 cursor-pointer" />
          <FaInstagram className="hover:text-gray-400 cursor-pointer" />
          <FaYoutube className="hover:text-gray-400 cursor-pointer" />
        </div> */}
      </div>

      <nav className="bg-white shadow-md">
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          {/* Logo */}
          <Image src={Logo} alt="Finatex Logo" width={120} height={40} />

          {/* Hamburger Menu Icon */}
          <div className="md:hidden">
            <button onClick={toggleMenu} className="focus:outline-none">
              {isOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
            </button>
          </div>

          {/* Navigation Links */}
          <ul className={`md:flex space-x-8 text-gray-800 ${isOpen ? 'block' : 'hidden'} md:block`}>
            <li className="hover:text-blue-500 cursor-pointer">Home</li>
            <li className="hover:text-blue-500 cursor-pointer">About</li>
            <li className="hover:text-blue-500 cursor-pointer">Services</li>
            <li className="hover:text-blue-500 cursor-pointer">Case Studies</li>
            <li className="hover:text-blue-500 cursor-pointer">Pages</li>
            <li className="hover:text-blue-500 cursor-pointer">Blog</li>
            <li className="hover:text-blue-500 cursor-pointer">Contact</li>
          </ul>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
