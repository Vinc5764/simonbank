import React from 'react';

const CallToAction = () => {
  return (
    <section className="relative bg-cover bg-center py-16 px-4 [background-image:url('../public/form.png')]">
      <div className="container mx-auto flex flex-col md:flex-row items-center justify-between">
        <div className="text-white max-w-lg mb-8 md:mb-0">
          <h1 className="text-4xl font-bold leading-tight mb-4">
            Unlock Financial Potential With Expert Guidance. Plan For A Secure Future.
          </h1>
          <p className="text-lg">
            Schedule a consultation now to be sure of the plan.
          </p>
        </div>
        <div className="bg-white p-8 rounded-lg shadow-lg w-full md:w-auto max-w-lg">
          <h2 className="text-2xl font-semibold mb-4">Request A Call Back</h2>
          <form className="space-y-4">
            <div className="flex flex-col md:flex-row gap-4">
              <input
                type="text"
                placeholder="Name"
                className="flex-1 px-4 w-1/2 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600"
              />
              <input
                type="email"
                placeholder="Email"
                className="flex-1 px-4 py-2 border rounded-lg w-1/2
                 focus:outline-none focus:ring-2 focus:ring-blue-600"
              />
            </div>
            <select className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600">
              <option>Financial Planning</option>
              <option>Budget Planning</option>
              <option>Insurance Advice</option>
              <option>Savings Advice</option>
            </select>
            <textarea
              placeholder="Your Message"
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600"
              rows="4"
            />
            <button
              type="submit"
              className="w-full bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700 transition duration-300"
            >
              Send Message
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default CallToAction;
