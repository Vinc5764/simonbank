'use client'
import React, { useState } from 'react';
import Image from 'next/image';
import project from '@/public/Project.png';
import project1 from '@/public/Project-1.png';
import project2 from '@/public/Project-2.png';
import project3 from '@/public/Project-3.png';

const projects = [
  {
    title: 'Portfolio Management',
    subtitle: 'Manage Account Information',
    image: project,
  },
  {
    title: 'Financial Assessment',
    subtitle: 'Budget Planning',
    image: project1,
  },
  {
    title: 'Budget Planning',
    subtitle: 'Financial Advice',
    image: project2,
  },
  {
    title: 'Insurance Advice',
    subtitle: 'Financial Planning',
    image: project3,
  },
];

const OurProjects = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % projects.length);
  };

  const prevSlide = () => {
    setCurrentIndex(
      (prevIndex) => (prevIndex - 1 + projects.length) % projects.length
    );
  };

  const slidesToShow = 3; // Change this value to adjust number of slides to show

  const slides = projects.slice(currentIndex, currentIndex + slidesToShow);

  return (
    <section className="py-16 bg-gray-100">
      <div className="container mx-auto text-center">
        <h2 className="text-3xl font-semibold mb-4">Our Projects</h2>
        <p className="text-gray-600 mb-8">
          Find your favourite jobs and get the benefits of yourself
        </p>
        <div className="relative flex justify-center items-center">
          {/* Previous Button */}
          <button
            className="absolute left-0 bg-black bg-opacity-50 text-white p-2 rounded-full"
            onClick={prevSlide}
          >
            &#8592;
          </button>

          {/* Carousel Slides */}
          <div className="flex overflow-hidden w-full">
            {slides.map((project, index) => (
              <div key={index} className="p-4 flex-shrink-0 w-1/3">
                <div className="relative rounded-lg overflow-hidden shadow-lg">
                  <Image
                    src={project.image}
                    alt={project.title}
                    width={800}
                    height={600}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-black bg-opacity-50 flex flex-col justify-center items-center text-white p-6">
                    <h3 className="text-xl font-semibold">{project.title}</h3>
                    <p className="mt-2">{project.subtitle}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Next Button */}
          <button
            className="absolute right-0 bg-black bg-opacity-50 text-white p-2 rounded-full"
            onClick={nextSlide}
          >
            &#8594;
          </button>
        </div>

        {/* Dots for indicating the active slide */}
        <div className="mt-4 flex justify-center space-x-2">
          {projects.map((_, index) => (
            <button
              key={index}
              className={`w-3 h-3 rounded-full ${
                index === currentIndex ? 'bg-black' : 'bg-gray-400'
              }`}
              onClick={() => setCurrentIndex(index)}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default OurProjects;
