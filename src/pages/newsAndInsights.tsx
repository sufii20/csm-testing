import React from 'react';
import news from '../assets/news.png';
import news1 from '../assets/news1.png';
import news2 from '../assets/news2.png';
import news3 from '../assets/news3.png';

const NewsPage: React.FC = () => {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Banner */}
      <div className="relative h-96 overflow-hidden">
        <div className="absolute inset-0">
          <img 
            src={news} 
            alt="News Banner" 
            className="w-full h-full object-cover"
          />
        </div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-full flex items-end justify-between pb-8">
          <div className="text-left">
            <h1 className="text-3xl font-bold text-black italic">
              NEWS & INSIGHTS
            </h1>
          </div>
          <div className="flex items-center space-x-4">
            <span className="bg-transparent border border-black-300 rounded px-4 py-2 text-sm text-gray-700">
              Category
            </span>
            <span className="bg-transparent border border-black-300 rounded px-4 py-2 text-sm text-gray-700">
              Category
            </span>
            <button className="bg-black text-white px-6 py-2 text-sm font-medium rounded hover:bg-gray-800 transition-colors">
              SEARCH
            </button>
          </div>
        </div>
      </div>

      {/* News Articles Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="space-y-16">
          
          {/* First Article */}
          <div className="flex flex-col lg:flex-row items-center lg:items-start space-y-8 lg:space-y-0 lg:space-x-12">
            <div className="lg:w-1/2">
              <img 
                src={news1}
                alt="CSM & Geely Meeting" 
                className="w-full h-80 object-cover rounded-lg shadow-lg"
              />
            </div>
            <div className="lg:w-1/2">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">
                CSM & GEELY SIGNED MOU TO LAUNCH NEOS IN PAKISTAN
              </h2>
              <p className="text-gray-600 mb-6 leading-relaxed">
                The MoU Signing Between Capital Smart Motors (CSM) And Geely 
                Marks A Significant Step Toward Transforming Pakistan's 
                Mobility Landscape...
              </p>
              <div className="text-sm text-gray-500 mb-6">
                22-06-2025
              </div>
            </div>
          </div>

          {/* Second Article */}
          <div className="flex flex-col lg:flex-row items-center lg:items-start space-y-8 lg:space-y-0 lg:space-x-12">
            <div className="lg:w-1/2">
              <img 
                src={news2}
                alt="Nedara Electric Pickup Truck" 
                className="w-full h-80 object-cover rounded-lg shadow-lg"
              />
            </div>
            <div className="lg:w-1/2">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">
                CHAIRMAN OF CSM GRABS ATTENTION OF DEALER MEETUP AT SERENA HOTEL
              </h2>
              <p className="text-gray-600 mb-6 leading-relaxed">
                CSM Had The Privilege Of Participating In The Dealer Meetup Organized 
                By Capital Smart City At Serena Hotel, Islamabad. The Event Was 
                Graced By The Presence Of The Chairman Of HRL Engineering...
              </p>
              <div className="text-sm text-gray-500 mb-6">
                23-06-2025
              </div>
            </div>
          </div>

          {/* Third Article */}
          <div className="flex flex-col lg:flex-row items-center lg:items-start space-y-8 lg:space-y-0 lg:space-x-12">
            <div className="lg:w-1/2">
              <img 
                src={news3}
                alt="Team Meeting" 
                className="w-full h-80 object-cover rounded-lg shadow-lg"
              />
            </div>
            <div className="lg:w-1/2">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">
                FORGING EXCELLENCE FOR PAKISTAN'S AUTOMOTIVE FUTURE
              </h2>
              <p className="text-gray-600 mb-6 leading-relaxed">
                The Management At CSM Envisages Driving Uncompromising 
                Standards, Fine Tuning Products, Dealership Network, And Technical 
                Expertise Well Ahead Of Launch.
              </p>
              <p className="text-gray-600 mb-6 leading-relaxed">
                To Ensure Flawless Execution, CSM Has Engaged Their Teams For 
                Intensive Training With Our Business Collaboration Partners Mastering 
                Details Of New Energy Vehicle (NEV) Technologies...
              </p>
              <div className="text-sm text-gray-500 mb-6">
                23-06-2025
              </div>
            </div>
          </div>

        </div>

        {/* View More Button */}
        <div className="text-center mt-16">
          <button className="bg-black text-white px-8 py-3 text-sm font-medium rounded hover:bg-gray-800 transition-colors">
            View More
          </button>
        </div>
      </div>
    </div>
  );
};

export default NewsPage;