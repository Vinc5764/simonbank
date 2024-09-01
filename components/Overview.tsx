import React from 'react';
import Image from 'next/image';
import CompanyImage from '@/public/assessment.png'; // Update with your image path
import { FaCheckCircle } from 'react-icons/fa';
import { FaPhoneAlt } from 'react-icons/fa';

const CompanyOverview = () => {
  return (
    <section className="container mx-auto px-4 py-16 flex flex-col md:flex-row items-center">
      {/* Left Section: Image */}
      <div className="w-full md:w-1/2">
        <Image
          src={CompanyImage}
          alt="Company Team"
          className="rounded-lg shadow-lg"
          width={600} // Adjust width and height based on your image size
          height={400}
        />
      </div>

      {/* Right Section: Content */}
      <div className="w-full md:w-1/2 mt-8 md:mt-0 md:pl-12">
        <h2 className="text-4xl font-bold text-gray-900 mb-4">Company Overview</h2>
        <div className="flex space-x-8 mb-6">
          <span className="cursor-pointer text-blue-500 border-b-2 border-blue-500 pb-1">About Us</span>
          <span className="cursor-pointer hover:text-blue-500">Mission</span>
          <span className="cursor-pointer hover:text-blue-500">Vision</span>
        </div>
        <p className="text-gray-700 mb-6">
          We’re a devoted team providing premium financial solutions. Explore our mission, values, and achievements as we empower clients for a secure financial future.
        </p>
        <ul className="space-y-4 text-gray-800">
          <li className="flex items-center">
            <FaCheckCircle className="text-blue-500 mr-2" />
            Identification Of Monthly Income
          </li>
          <li className="flex items-center">
            <FaCheckCircle className="text-blue-500 mr-2" />
            Creation Of Savings And Investment Plan
          </li>
          <li className="flex items-center">
            <FaCheckCircle className="text-blue-500 mr-2" />
            Management And Calculation Of Monthly Expenses
          </li>
        </ul>
        <div className="flex items-center mt-8 space-x-4">
          <button className="bg-blue-500 text-white px-6 py-3 rounded-full shadow-lg hover:bg-blue-600">
            Get Started
          </button>
          <button className="border-2 border-blue-500 text-blue-500 px-6 py-3 rounded-full shadow-lg flex items-center hover:bg-blue-500 hover:text-white">
            <FaPhoneAlt className="mr-2" />
            (00) 123 456 789
          </button>
        </div>
      </div>
    </section>
  );
};

export default CompanyOverview;
