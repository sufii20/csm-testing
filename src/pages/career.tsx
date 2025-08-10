import React from "react";
import career from "../assets/career.png";
import careerBanner from "../assets/CarrerBanner.png";
// Placeholder images from Unsplash
const bannerImage =
  careerBanner;
const carImage =
 career;

const JobPosting: React.FC = () => {
  return (
    <div className="font-sans text-gray-800">
      {/* Banner */}
      <div className="relative">
        <img src={bannerImage}  className="w-full h-[400px] object-cover" />
        <div className="absolute inset-0 flex items-left justify-bottom bg-black bg-opacity-30">
          <h1 className="text-white text-lg md:text-xl font-semibold">WE ARE HIRING</h1>
        </div>
      </div>

      {/* Job Section */}
      <div className="container mx-auto px-4 py-10">
        <p className="text-sm mb-2">23-06-2025</p>
        <h2 className="text-2xl font-bold mb-6">Executive - Parts</h2>

        <div className="flex flex-col lg:flex-row gap-6">
          {/* Job Image */}
          <div className="flex-1">
            <img src={carImage} alt="Hiring" className="w-full object-cover border border-gray-200" />
          </div>

          {/* Form */}
          <div className="flex-1 bg-gray-50 border border-gray-200 p-3">
            <h3 className="font-bold text-lg mb-8">WE’D LOVE TO HEAR ABOUT YOU.</h3>
            <form className="space-y-6">
              <input
                type="text"
                placeholder="Name"
                className="w-full border-b border-gray-300 focus:outline-none py-2"
              />
              <input
                type="text"
                placeholder="Father Name"
                className="w-full border-b border-gray-300 focus:outline-none py-2"
              />
              <input
                type="tel"
                placeholder="Phone No."
                className="w-full border-b border-gray-300 focus:outline-none py-2"
              />
              <input
                type="text"
                placeholder="City"
                className="w-full border-b border-gray-300 focus:outline-none py-2"
              />
              <div className="w-full border border-gray-300 p-4 text-center text-gray-500 cursor-pointer">
                📎 Click To Upload Document
              </div>
              <button
                type="submit"
                className="w-full bg-black text-white py-2 hover:bg-gray-800 transition"
              >
                SUBMIT
              </button>
            </form>
          </div>
        </div>

        {/* Show More */}
        <div className="text-center mt-6">
          <button className="bg-black text-white px-6 py-2 hover:bg-gray-800 transition">
            Show More
          </button>
        </div>
      </div>


   
    </div>
  );
};

export default JobPosting;
