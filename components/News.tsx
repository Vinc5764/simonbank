import React from 'react';
import Image from 'next/image';
import { FaRegCalendarAlt } from 'react-icons/fa';
import item10 from '@/public/item10.png';
import item11 from '@/public/item11.png';
import item12 from '@/public/item12.png';
import item13 from '@/public/item13.png';

const LatestNews = () => {
  const newsItems = [
    {
      id: 1,
      category: 'Marketing',
      title: 'CI Financial Sells RIA Stake In New Expansion Strategy',
      author: 'Avitex',
      date: '1 days ago',
      imageSrc: item10, // Replace with your image paths
    },
    {
      id: 2,
      category: 'Development',
      title: 'Barred Financial Advisors Charged In $72 Million Criminal',
      author: 'Avitex',
      date: '2 days ago',
      imageSrc: item11,
    },
    {
      id: 3,
      category: 'Design',
      title: 'Retirement Planning Strategies',
      author: 'Avitex',
      date: '2 days ago',
      imageSrc: item12,
    },
  ];

  return (
    <section className="bg-white py-12">
      <div className="container mx-auto">
        <h2 className="text-3xl font-bold text-center mb-8">Latest News</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {newsItems.map((item) => (
            <div key={item.id} className="bg-white shadow-lg rounded-lg overflow-hidden">
              <Image
                src={item.imageSrc}
                alt={item.title}
                className="w-full h-48 object-cover"
                width={400}
                height={300}
              />
              <div className="p-4">
                <span className="inline-block bg-gray-200 text-gray-800 text-xs px-2 py-1 rounded-full mb-2">{item.category}</span>
                <h3 className="text-xl font-semibold text-gray-800 mb-2 hover:text-blue-600 cursor-pointer">{item.title}</h3>
                <div className="text-gray-500 text-sm flex items-center space-x-2">
                  <span>by {item.author}</span>
                  <FaRegCalendarAlt />
                  <span>{item.date}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default LatestNews;
