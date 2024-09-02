'use client'
import React from 'react';
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
  // {
  //   title: 'Insurance Advice',
  //   subtitle: 'Financial Planning',
  //   image: project3,
  // },
];

const OurProjects = () => {
  return (
    <section className="py-16 px-4 bg-gray-100">
      <div className="container mx-auto text-center">
        <h2 className="text-3xl font-semibold mb-4">Our Projects</h2>
        <p className="text-gray-600 mb-8">
          Find your favourite jobs and get the benefits of yourself
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div key={index} className="bg-white rounded-lg overflow-hidden shadow-lg">
              <Image
                src={project.image}
                alt={project.title}
                width={800}
                height={600}
                className="w-full h-56 object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl font-semibold text-gray-800">{project.title}</h3>
                <p className="mt-2 text-gray-600">{project.subtitle}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default OurProjects;
