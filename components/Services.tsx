import React from 'react';

const services = [
  {
    title: 'Budget Planning',
    description:
      'Stay in control of your finances with effortless tracking and monitoring of your transactions.',
    icon: '📊', // You can replace this with an SVG or image
    link: '#',
  },
  {
    title: 'Savings Advice',
    description:
      'Rest assured with our robust security measures to protect your transactions and sensitive information.',
    icon: '💰', // You can replace this with an SVG or image
    link: '#',
  },
  {
    title: 'Financial Assessment',
    description:
      'We provide detailed assessments to help you make informed financial decisions.',
    icon: '💼', // You can replace this with an SVG or image
    link: '#',
  },
  {
    title: 'Insurance Advice',
    description:
      'We offer advice to ensure you have the best insurance coverage tailored to your needs.',
    icon: '🛡️', // You can replace this with an SVG or image
    link: '#',
  },
];

const Services = () => {
  return (
    <section className="py-16 bg-white">
      <div className="container flex flex-col lg:flex-row mx-auto">
        <div className="text-left mb-8">
          <h3 className="text-blue-600 font-semibold">SERVICES</h3>
          <h2 className="text-4xl font-bold">Wealth Management Firm</h2>
          <p className="text-gray-600 mt-4">
            We specialize in providing asset management services and solutions
            for individuals and organizations.
          </p>
        </div>
        <div className="grid gap-8 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-2">
          {services.map((service, index) => (
            <div
              key={index}
              className="p-6 bg-gray-50 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300"
            >
              <div className="text-blue-600 text-4xl mb-4">{service.icon}</div>
              <h3 className="text-xl font-semibold mb-2">{service.title}</h3>
              <p className="text-gray-600 mb-4">{service.description}</p>
              <a
                href={service.link}
                className="text-blue-600 font-semibold hover:underline"
              >
                Explore Plan &rarr;
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
