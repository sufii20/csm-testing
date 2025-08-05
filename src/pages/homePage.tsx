import React, { useState, useEffect } from "react";
import { Star, ChevronLeft, ChevronRight } from "lucide-react";

// Hero banners
import ZeekrBanner from "../assets/HeroBanner/ZeekrBanner.png";
import ForthingBanner from "../assets/HeroBanner/ForthingBanner.png";
import JMEVBanner from "../assets/HeroBanner/JMEVBanner.png";
import RiddaraBanner from "../assets/HeroBanner/RiddaraBanner.png";

// Car slider images
import image1 from "../assets/CardSliderImg/image1.png";
import image2 from "../assets/CardSliderImg/image2.png";
import image3 from "../assets/CardSliderImg/image3.png";
import image4 from "../assets/CardSliderImg/image4.png";

// Other assets
import RiddaraVideo from "../assets/RiddaraVideo.mp4";
import ServiceImage from "../assets/Home-v2.png";
import CSMGeely from "../assets/insights/CSM-GEELY-MOU.png";
import autoMob from "../assets/insights/auto-mob-future.png";
import sareena from "../assets/insights/SERENA-hotel-isb.png";
import accessories from "../assets/services/accesories.png";
import call from "../assets/services/callCenter.png";
import merchandise from "../assets/services/MErchandise.png";
//Interior images
import fortingInterior from "../assets/interiorView/ForthingInterior.png";
import jmeVInterior from "../assets/interiorView/JMeVInterior.png";
import zeekrX from "../assets/interiorView/ZeekeX.png";
import zeekrInterior from "../assets/interiorView/ZeekrInterior.png";

const Homepage = () => {
  const [currentHeroBanner, setCurrentHeroBanner] = useState(0);
  const [currentCarSlide, setCurrentCarSlide] = useState(0);
  const [currentInteriorBanner, setCurrentInteriorBanner] = useState(0);

  const heroBanners = [
    { id: 1, image: ZeekrBanner },
    { id: 2, image: ForthingBanner },
    { id: 3, image: JMEVBanner },
    { id: 4, image: RiddaraBanner },
  ];

  const interiorBanners = [
    { id: 1, image: fortingInterior, title: "Forthing Interior" },
    { id: 2, image: jmeVInterior, title: "JMEV Interior" },
    { id: 3, image: zeekrX, title: "Zeekr X Interior" },
    { id: 4, image: zeekrInterior, title: "Zeekr Interior" },
  ];

  const cars = [
    {
      id: 1,
      image: image1,
      brand: "ZEEKR",
      logo: "Z",
    },
    {
      id: 2,
      image: image2,
      brand: "RIDDARA",
      logo: "R",
    },
    {
      id: 3,
      image: image3,
      brand: "FORTHING",
      logo: "F",
    },
    {
      id: 4,
      image: image4,
      brand: "JMEV",
      logo: "J",
    },
  ];

  const services = [
    {
      id: 1,
      title: "Merchandise",
      description:
        "A Capital Selection Of Premium Branded Merchandise That Embodies The Spirit Of Innovation And Style.",
      image: merchandise,
    },
    {
      id: 2,
      title: "Call Centre",
      description:
        "A Dedicated Customer Care Service, Offering Personalized Support And Seamless Communication For All Inquiries.",
      image: call,
    },
    {
      id: 3,
      title: "Parts/Accessories",
      description:
        "Authentic Parts And Refined Accessories, Engineered To Enhance Performance And Elevate Your Driving Experience.",
      image: accessories,
    },
  ];

  const testimonials = [
    {
      id: 1,
      name: "Azuish Pandey",
      location: "Sindh, Pakistan",
      rating: 5,
      text: "The listing Was Very Nice Than I'll Make. Everything Worked Perfect Well. We Appreciated A Simple Decision Using Page That With A Video, Full Sections. Course Stamps – Everything Was Great And We Likes Good Analytics On It.",
      image:
        "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=150&q=80",
    },
    {
      id: 2,
      name: "Milano Nascimento",
      location: "Punjab, Pakistan",
      rating: 5,
      text: "The Listing Was Not Upto Than I Till Build. Everything Worked Well. We Appreciated A Simple Decision Using Page That With A Video, Full Sections. Course Stamps – Everything Was Great And We Didn't Need Analytics On That.",
      image:
        "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-4.0.3&auto=format&fit=crop&w=150&q=80",
    },
    {
      id: 3,
      name: "Eve Aritt",
      location: "Islamabad, Pakistan",
      rating: 5,
      text: "The Listing Was Too Much Than I'll Make. Everything Worked Perfect Well. We Appreciated A Simple Decision Using Page That With A Video, Full Sections. Course Stamps – Everything Was Great And We Likes Good Analytics On It.",
      image:
        "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&auto=format&fit=crop&w=150&q=80",
    },
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentHeroBanner((prev) => (prev + 1) % heroBanners.length);
    }, 6000);
    return () => clearInterval(interval);
  }, []);

  // Add useEffect for interior banner auto-transition
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentInteriorBanner((prev) => (prev + 1) % interiorBanners.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  const nextHeroBanner = () => {
    setCurrentHeroBanner((prev) => (prev + 1) % heroBanners.length);
  };

  const prevHeroBanner = () => {
    setCurrentHeroBanner(
      (prev) => (prev - 1 + heroBanners.length) % heroBanners.length
    );
  };

  const nextCarSlide = () => {
    setCurrentCarSlide((prev) => (prev + 1) % cars.length);
  };

  const prevCarSlide = () => {
    setCurrentCarSlide((prev) => (prev - 1 + cars.length) % cars.length);
  };

  const getVisibleCars = () => {
    const visible = [];
    for (let i = 0; i < 3; i++) {
      const index = (currentCarSlide + i) % cars.length;
      visible.push(cars[index]);
    }
    return visible;
  };

  return (
    <div className="bg-white">
      {/* Hero Banner Section - Optimized for 1440x450 aspect ratio with extra text space */}
      <section className="relative h-[160px] sm:h-[200px] md:h-[280px] lg:h-[380px] xl:h-[520px] overflow-hidden">
        {heroBanners.map((banner, index) => (
          <div
            key={banner.id}
            className={`absolute inset-0 transition-opacity duration-1000 ${
              index === currentHeroBanner ? "opacity-100" : "opacity-0"
            }`}
          >
            <img
              src={banner.image}
              alt={`Banner ${banner.id}`}
              className="w-full h-full object-contain"
            />
          </div>
        ))}

        {/* Navigation Controls - Mobile Responsive */}
        <div className="absolute right-4 md:right-6 top-1/2 transform -translate-y-1/2 flex flex-col items-center z-20">
          {/* Pagination Dots */}
          <div className="flex flex-col space-y-2 md:space-y-3 mb-4 md:mb-6">
            {heroBanners.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentHeroBanner(index)}
                className={`w-2 h-2 md:w-3 md:h-3 rounded-full transition-all duration-300 ${
                  index === currentHeroBanner
                    ? "bg-white scale-125"
                    : "bg-white/50 hover:bg-white/70"
                }`}
              />
            ))}
          </div>

          {/* Arrow Navigation */}
          <div className="flex space-x-1 md:space-x-2">
            <button
              onClick={prevHeroBanner}
              className="bg-white/20 backdrop-blur-sm hover:bg-white/30 rounded-full p-1.5 md:p-2 transition-all duration-300 shadow-lg"
            >
              <ChevronLeft className="w-4 h-4 md:w-5 md:h-5 text-white" />
            </button>
            <button
              onClick={nextHeroBanner}
              className="bg-white/20 backdrop-blur-sm hover:bg-white/30 rounded-full p-1.5 md:p-2 transition-all duration-300 shadow-lg"
            >
              <ChevronRight className="w-4 h-4 md:w-5 md:h-5 text-white" />
            </button>
          </div>
        </div>
      </section>

      {/* Car Slider - Updated Design */}
      <section className="relative py-20 bg-gray-50 overflow-hidden">
        {/* Navigation Arrows */}
        <button
          onClick={prevCarSlide}
          className="absolute left-4 md:left-6 top-1/2 transform -translate-y-1/2 z-20 bg-white/20 backdrop-blur-sm hover:bg-white/30 rounded-full p-3 md:p-4 transition-all duration-300 shadow-lg"
        >
          <ChevronLeft className="w-5 h-5 md:w-6 md:h-6 text-gray-700" />
        </button>

        <button
          onClick={nextCarSlide}
          className="absolute right-4 md:right-6 top-1/2 transform -translate-y-1/2 z-20 bg-white/20 backdrop-blur-sm hover:bg-white/30 rounded-full p-3 md:p-4 transition-all duration-300 shadow-lg"
        >
          <ChevronRight className="w-5 h-5 md:w-6 md:h-6 text-gray-700" />
        </button>

        {/* Slider Container */}
        <div className="w-full overflow-hidden">
          <div className="flex transition-transform duration-500 ease-in-out">
            {getVisibleCars().map((car, index) => (
              <div
                key={`${car.id}-${currentCarSlide}-${index}`}
                className="w-full md:w-1/3 flex-shrink-0"
              >
                {/* Car Card */}
                <div className="relative h-[400px] md:h-[600px] overflow-hidden group">
                  {/* Background Image */}
                  <img
                    src={car.image}
                    alt={`Car ${car.id}`}
                    className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-300"
                  />

                  {/* Learn More Button */}
                  <div className="absolute bottom-6 md:bottom-8 left-4 md:left-8">
                    <button className="px-6 md:px-8 py-2 md:py-3 border-2 border-white/40 bg-white/10 backdrop-blur-sm hover:bg-white/20 hover:border-white/60 transition-all duration-300 text-white font-medium tracking-wide text-sm md:text-base">
                      Learn More
                      <ChevronRight className="inline-block w-3 h-3 md:w-4 md:h-4 ml-2" />
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Bottom spacing for "Our Services" text */}
        <div className="mt-16 text-center">
          <div className="flex items-center justify-center space-x-4 md:space-x-6">
            <div className="h-px bg-gray-400 w-16 md:w-32"></div>
            <h2 className="text-2xl md:text-3xl font-bold text-gray-700 tracking-wide whitespace-nowrap">
              Our Services
            </h2>
            <div className="h-px bg-gray-400 w-16 md:w-32"></div>
          </div>
        </div>
      </section>

      {/* Our Services */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {services.map((service) => (
              <div
                key={service.id}
                className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300"
              >
                <div className="relative h-48">
                  <img
                    src={service.image}
                    alt={service.title}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-black/20"></div>
                </div>
                <div className="p-6 text-left">
                  <h3 className="text-xl font-bold text-blue-800 mb-3">
                    {service.title}
                  </h3>
                  <p className="text-gray-600 text-sm leading-relaxed">
                    {service.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Interior View */}
      <section className="py-16 bg-white">
        <div className="max-w-12xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="relative h-96 md:h-[500px] rounded-lg overflow-hidden">
            <video
              src={RiddaraVideo}
              className="w-full h-full object-cover"
              autoPlay
              loop
              muted
              playsInline
            />
            <div className="absolute inset-0 bg-black/30 flex items-center justify-center">
              <div className="text-center text-white"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Customer Feedback */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <div className="flex items-center justify-center space-x-4 md:space-x-6">
              <div className="h-px bg-gray-400 w-16 md:w-32"></div>
              <h2 className="text-2xl md:text-3xl font-bold text-gray-900 tracking-wide whitespace-nowrap">
                Our Customer Feedback
              </h2>
              <div className="h-px bg-gray-400 w-16 md:w-32"></div>
            </div>
          </div>
          <div className="flex flex-col md:flex-row justify-center items-end gap-6 md:gap-8">
            {/* Left smaller testimonial - positioned lower */}
            <div className="bg-white rounded-lg shadow-lg p-5 w-full md:w-72 mb-0 md:mb-8">
              <div className="flex items-center mb-3">
                <div className="w-10 h-10 rounded-full mr-3 overflow-hidden">
                  <img
                    src={testimonials[0].image}
                    alt={testimonials[0].name}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div>
                  <h4 className="font-bold text-blue-800 text-sm">
                    Orlaith Parastu
                  </h4>
                  <p className="text-xs text-blue-800">Bought BYD Dolphin</p>
                </div>
              </div>
              <p className="text-black text-xs leading-relaxed text-left">
                The Listing Was Hot (More Than 170 Bids). Everything Worked
                Well. We Appreciated A Simple Process.Listing Page, Chat With A
                Seller, The Auction, Escrow Service – Everything Was Great And
                We Didn't Need Anything On Top.
              </p>
            </div>

            {/* Center larger testimonial - full height */}
            <div className="bg-white rounded-lg shadow-lg p-6 md:p-8 w-full md:w-96">
              <div className="flex items-center mb-4">
                <div className="w-12 md:w-14 h-12 md:h-14 rounded-full mr-4 overflow-hidden">
                  <img
                    src={testimonials[1].image}
                    alt={testimonials[1].name}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div>
                  <h4 className="font-bold text-blue-800 text-base md:text-lg">
                    Melina Nesterenko
                  </h4>
                  <p className="text-sm text-blue-800">Bought Tesla Model 3</p>
                </div>
              </div>
              <p className="text-black text-sm leading-relaxed text-left">
                The Listing Was Hot (More Than 170 Bids). Everything Worked
                Well. We Appreciated A Simple Process.Listing Page, Chat With A
                Seller, The Auction, Escrow Service – Everything Was Great And
                We Didn't Need Anything On Top.
              </p>
            </div>

            {/* Right smaller testimonial - positioned lower */}
            <div className="bg-white rounded-lg shadow-lg p-5 w-full md:w-72 mb-0 md:mb-8">
              <div className="flex items-center mb-3">
                <div className="w-10 h-10 rounded-full mr-3 overflow-hidden">
                  <img
                    src={testimonials[2].image}
                    alt={testimonials[2].name}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div>
                  <h4 className="font-bold text-blue-800 text-sm">Eve Artie</h4>
                  <p className="text-xs text-blue-800">Bought A Riddara</p>
                </div>
              </div>
              <p className="text-black text-xs leading-relaxed text-left">
                The Listing Was Hot (More Than 170 Bids). Everything Worked
                Well. We Appreciated A Simple Process.Listing Page, Chat With A
                Seller, The Auction, Escrow Service – Everything Was Great And
                We Didn't Need Anything On Top.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Interior Banner Section */}
      <section className="relative h-[500px] md:h-[600px] lg:h-[700px] overflow-hidden">
        {interiorBanners.map((banner, index) => (
          <div
            key={banner.id}
            className={`absolute inset-0 transition-opacity duration-1000 ${
              index === currentInteriorBanner ? "opacity-100" : "opacity-0"
            }`}
          >
            <img
              src={banner.image}
              alt={banner.title}
              className="w-full h-full object-contain md:object-cover"
            />
            <div className="absolute inset-0 bg-black/10"></div>
          </div>
        ))}
      </section>

      {/* News & Insights */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <div className="flex items-center justify-center space-x-4 md:space-x-6">
              <div className="h-px bg-gray-400 w-16 md:w-32"></div>
              <h2 className="text-2xl md:text-3xl font-bold text-gray-900 tracking-wide whitespace-nowrap">
                News & Insights
              </h2>
              <div className="h-px bg-gray-400 w-16 md:w-32"></div>
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white rounded-lg shadow-lg overflow-hidden">
              <img
                src={CSMGeely}
                alt="News 1"
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <h4 className="font-bold text-gray-900 mb-2">
                  CSM & GEELY Signed MOU To Launch Zeekr In Pakistan
                </h4>
              </div>
            </div>
            <div className="bg-white rounded-lg shadow-lg overflow-hidden">
              <img
                src={sareena}
                alt="News 2"
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <h4 className="font-bold text-gray-900 mb-2">
                  Dealer Meetup Organized By Capital Smart City At Serena Hotel,
                  Islamabad
                </h4>
              </div>
            </div>
            <div className="bg-white rounded-lg shadow-lg overflow-hidden">
              <img
                src={autoMob}
                alt="News 3"
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <h4 className="font-bold text-gray-900 mb-2">
                  Zeging Excellence For Pakistan's Automotive Future
                </h4>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Homepage;