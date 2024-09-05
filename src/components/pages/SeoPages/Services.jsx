import React from 'react';
import cl1 from '../assets/cl1.png'; // Import image if needed for other purposes

const Services = () => {
  const seoServices = [
    {
      title: 'Guaranteed SEO Services',
      description: 'Complete Website Analysis. We, with an in-depth review of your site, find out weaknesses & strengths and discover why the site is not fulfilling peak efficiency.'
    },
    {
      title: 'Higher Brand Credibility',
      description: 'Take Business To The Next Level, Definite Increased in Quality Traffic, Impressive Marketing Return on Investment, Increase Visibility.'
    },
    {
      title: 'Achieve Higher Conversion Rates',
      description: 'Build Brand Awareness Through Better Rankings, Google Analytics for Better Consumer Insight.'
    }
    // Add more services as needed
  ];

  return (
    <div>
      {/* SEO Services Section */}
      <section className="bg-gray-100 py-14">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl font-bold mb-8">Best SEO Services for Optimal Results</h2>
          <p className="text-gray-600 mb-6">
            Using search engines as a channel for increasing happy customers, our aim is to give your website a good position in popular search engine results page lists.
            Search Engines are the most effective way to get your website noticed by potential customers. Arrc Technology provides the best organic SEO services in Pune at affordable prices. We are Fastest Growing and Most Awarded Full-Service SEO Company.
          </p>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {seoServices.map((service, index) => (
              <div key={index} className="bg-white p-6 shadow-md rounded-lg">
                <h3 className="text-xl font-semibold mb-2">{service.title}</h3>
                <p className="text-gray-700">{service.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SEM Services Section */}
      <section className="bg-white py-14">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl font-bold mb-8">Search Engine Marketing (SEM)</h2>
          <p className="text-gray-600 mb-6">
            Search Engine has become an integral part of every internet user’s life, an online support system guiding most of their search activities. This has made availing search engine marketing services a necessary step in the road to increasing online visibility and overall ‘search-ability’ in search engine results page.
            Search engine marketing (SEM) is a form of Internet marketing that involves the promotion of websites by increasing their visibility in search engine results pages (SERPs) primarily through paid advertising.
          </p>
          <p className="text-gray-600 mb-6">
            SEM uses paid advertising with AdWords or Bing Ads, pay per click (particularly beneficial for local providers as it enables potential consumers to contact a company directly with one click).
          </p>
          <p className="text-gray-600 mb-6">
            A keyword analysis is performed for both SEO and SEM, but not necessarily at the same time. SEM and SEO both need to be monitored and updated frequently to reflect evolving best practices.
          </p>
          <p className="text-gray-600">
            Arrc Technology is a fastest growing Search Engine Marketing Agency in Pune which mainly focuses on providing the best quality SEM services to the clients. Our mission at Arrc Technology is to bloom as an eminent SEM agency in Pune, in this vastly spreading era of digital marketing by delivering the best quality Search Engine Marketing Services to our clients and maintain our reputation by making a balance between guaranteed results and client satisfaction.
          </p>
        </div>
      </section>
    </div>
  );
};

export default Services;
