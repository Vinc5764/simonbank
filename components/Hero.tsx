import React from 'react';
import Image from 'next/image';
import BackgroundImage from '@/public/slider2.png'; // Update with the actual path
import GrowthImage from '@/public/subslider2-1.png'; // Update with the actual path
import UserImage from '@/public/subslider2-2.png'; // Update with the actual path

const HeroSection = () => {
  return (
    <section className="relative px-4 bg-[#faf7f2] py-16">
      <div className="container mx-auto flex flex-col md:flex-row items-center justify-between">
        {/* Text Section */}
        <div className="md:w-1/2 mb-8 md:mb-0">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-800 leading-tight mb-4">
            Reach Financial Goals <br /> With Our Expert <br /> Guidance & Solutions
          </h1>
          <p className="text-gray-600 mb-6">
            Get personalized financial advice to help reach your financial goals.
          </p>
          <div className="flex  items-center">
            <input
              type="email"
              placeholder="Email"
              className="px-4 py-2 w-full max-w-xs rounded-l-md border border-gray-300 focus:outline-none"
            />
            <button className="px-6 sm:py-2  lg:py-2 bg-black text-white rounded-r-md hover:bg-gray-800 focus:outline-none">
              Get Started
            </button>
          </div>
        </div>

        {/* Image/Graphics Section */}
        <div className="md:w-1/2 flex justify-center relative">
          {/* Background Image */}
          <Image
            src={BackgroundImage}
            alt="Background with blue circle"
            className="w-full h-auto"
            layout="intrinsic"
            priority
          />

          {/* Overlayed Images */}
          <div className="absolute top-10 right-10 w-64">
            <Image
              src={GrowthImage}
              alt="Business Growth"
              className="w-full h-auto"
            />
          </div>
          <div className="absolute bottom-10 right-5 w-64">
            <Image
              src={UserImage}
              alt="User Stats"
              className="w-full h-auto"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
