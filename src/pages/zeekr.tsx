import  { useState } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import ForthingBanner from '../assets/Forthing/HeroBanner/ForthingBanner.png'; 
//slider 1
import slidea from '../assets/Forthing/ADD/Exterior-A.png';
import slideb from '../assets/Forthing/ADD/Exterior-B.png';
import slidec from '../assets/Forthing/ADD/Exterior-C.png';
import slided from '../assets/Forthing/ADD/Exterior-D.png';
import slidee from '../assets/Forthing/ADD/Exterior-E.jpg';
//slider2 images
import slideA from '../assets/Forthing/InteriorFeatures/Interior-A.png';
import slideB from '../assets/Forthing/InteriorFeatures/Interior-B.png';
import slideC from '../assets/Forthing/InteriorFeatures/Interior-C.png';
import slideD from '../assets/Forthing/InteriorFeatures/Interior-D.png';
import slideE from '../assets/Forthing/InteriorFeatures/Interior-E.png';
//banner and additional images
import ForthingSpec from '../assets/Forthing/ForthingSpecs.png';
import ForthingBig from '../assets/Forthing/Grid/ForthingBig.png';
import ForthingLeft from '../assets/Forthing/Grid/ForthingLeft.png';
import ForthingRight from '../assets/Forthing/Grid/ForthingRight.png';

export const Forthing = () => {
  const [currentSlideIndex, setCurrentSlideIndex] = useState(0);
  const [currentSlideIndex2, setCurrentSlideIndex2] = useState(0);
  const [currentSlideIndex3, setCurrentSlideIndex3] = useState(0);

  // First Advanced Driving Dynamics slides data (5 slides)
  const slides = [
    {
      image: slidea,
      title: "Big Panoramic Sunroof",
      description: "Experience the Open Sky With The Largest Panoramic Sunroof - Perfect for a More Open Feel And Cabin Experience."
    },
    {
      image: slideb,
      title: "Modern Grille and Headlights", 
      description: "Stand Out With a Bold Interior Smile And Sleek LED Headlights, Combined With Advanced Read Light Clusters."
    },
    {
      image: slidec,
      title: "Intelligent Color Switch",
      description: "Advanced color-changing technology adapts to different environments and driving conditions."
    },
    {
      image: slided,
      title: "Smart Drive Assistance",
      description: "Cutting-edge AI-powered driving assistance for enhanced safety and performance on any terrain."
    },
    {
      image: slidee,
      title: "Extreme Performance",
      description: "Built for the most challenging conditions with superior engineering and robust design."
    }
  ];

  // Interior Features slides data (5 slides) - Using exact text from image
  const slides2 = [
    {
      image: slideA,
      title: "SMART HOME SPACE",
      description: "Step Into A Roomy, Two-Space Cabin Where Comfort And Innovation Come Together. Thoughtfully Designed For You, The Driver-Interior Offers Maximum Space And Even Smart Features Throughout Made From Ultra-Premium, Eco-Friendly Materials."
    },
    {
      image: slideB,
      title: "ERGONOMIC SEATS WITH LEATHER & VENTILATION OPTION", 
      description: "Designed For Optimal Comfort And Support, The Seats Feature High-End Finishes And Optional Ventilation To Enhance The Driving Experience In Modern Luxury."
    },
    {
      image: slideC,
      title: "Premium Interior Design",
      description: "Luxurious cabin with cutting-edge materials and sophisticated styling for ultimate comfort."
    },
    {
      image: slideD,
      title: "Smart Connectivity",
      description: "Seamless integration with your digital life through advanced connectivity features."
    },
    {
      image: slideE,
      title: "Ambient Lighting",
      description: "Customizable ambient lighting creates the perfect atmosphere for every journey."
    }
  ];

  // Security Features slides data - using your imports
  const securitySlides = [
    {
      image: slidea,
      title: "ADAS Advanced Driver Assistance System",
      description: "ADAS Advanced Driver Assistance System Enhances Driver Safety With Intelligent Features Like Lane Departure Warning, Automatic Emergency Braking, And Smart Collision For A Smarter, More Secure Drive."
    },
    {
      image: slideb,
      title: "AEB Autonomous Emergency Braking", 
      description: "A Autonomous Emergency Braking And Automatic Pre-The The Brakes If It Helps Find A Potential Collision, Significantly Reducing The Impact Of Automatic The Risk Of Accidents For Your Safety."
    },
    {
      image: slidec,
      title: "Lane Departure Warning System",
      description: "Advanced lane monitoring technology that alerts drivers when unintentional lane departures are detected, ensuring safer highway driving."
    },
    {
      image: slided,
      title: "Collision Avoidance Technology",
      description: "State-of-the-art sensors and AI technology work together to predict and prevent potential collisions before they occur."
    }
  ];

  const nextSlide = () => {
    setCurrentSlideIndex((prev) => {
      const isDesktop = window.innerWidth >= 768;
      const maxIndex = Math.max(0, slides.length - (isDesktop ? 2 : 1));
      return prev >= maxIndex ? 0 : prev + 1;
    });
  };

  const prevSlide = () => {
    setCurrentSlideIndex((prev) => {
      const isDesktop = window.innerWidth >= 768;
      const maxIndex = Math.max(0, slides.length - (isDesktop ? 2 : 1));
      return prev <= 0 ? maxIndex : prev - 1;
    });
  };

  // Functions for second slider
  const nextSlide2 = () => {
    setCurrentSlideIndex2((prev) => {
      const isDesktop = window.innerWidth >= 768;
      const maxIndex = Math.max(0, slides2.length - (isDesktop ? 2 : 1));
      return prev >= maxIndex ? 0 : prev + 1;
    });
  };

  const prevSlide2 = () => {
    setCurrentSlideIndex2((prev) => {
      const isDesktop = window.innerWidth >= 768;
      const maxIndex = Math.max(0, slides2.length - (isDesktop ? 2 : 1));
      return prev <= 0 ? maxIndex : prev - 1;
    });
  };

  // Functions for security slider
  const nextSlide3 = () => {
    setCurrentSlideIndex3((prev) => {
      const isDesktop = window.innerWidth >= 768;
      const maxIndex = Math.max(0, securitySlides.length - (isDesktop ? 2 : 1));
      return prev >= maxIndex ? 0 : prev + 1;
    });
  };

  const prevSlide3 = () => {
    setCurrentSlideIndex3((prev) => {
      const isDesktop = window.innerWidth >= 768;
      const maxIndex = Math.max(0, securitySlides.length - (isDesktop ? 2 : 1));
      return prev <= 0 ? maxIndex : prev - 1;
    });
  };

  return (
    <div className="w-full">
      {/* Hero Banner Section */}
      <div className="relative w-full">
        <img 
          src={ForthingBanner} 
          alt="Forthing Hero Banner"
          className="w-full h-auto object-cover"
        />
        
        {/* Buttons positioned at bottom right */}
        <div className="absolute bottom-8 right-8 flex space-x-4">
          <button className="px-8 py-4 border-2 border-white text-white bg-transparent hover:bg-white hover:text-black transition-all duration-300 text-sm font-semibold tracking-wide shadow-lg hover:shadow-xl transform hover:scale-105" style={{borderRadius: '8px'}}>
            BOOK NOW
          </button>
          <button className="px-8 py-4 border-2 border-black text-white bg-black hover:bg-white hover:text-black transition-all duration-300 text-sm font-semibold tracking-wide shadow-lg hover:shadow-xl transform hover:scale-105" style={{borderRadius: '8px'}}>
            BROCHURE
          </button>
        </div>
      </div>

      {/* Specifications Section */}
      <div className="bg-white py-4 px-8">
        <div className="max-w-4xl mx-auto">
          <div className="flex justify-center items-center">
            <div className="flex items-center bg-transparent rounded-lg p-4 shadow-sm">
              <div className="flex flex-col items-center px-6">
                <p className="text-xs text-gray-400 mb-1 uppercase tracking-wider">UP TO</p>
                <h3 className="text-xl font-light text-gray-700 mb-1">1100 Km*</h3>
                <p className="text-gray-500 text-xs">Driving Range</p>
              </div>
              <div className="flex flex-col items-center px-6 border-l border-r border-gray-300 mx-4">
                <p className="text-xs text-gray-400 mb-1 uppercase tracking-wider">AS FAST AS</p>
                <h3 className="text-xl font-light text-gray-700 mb-1">10.9 Sec*</h3>
                <p className="text-gray-500 text-xs">To Reach 100</p>
              </div>
              <div className="flex flex-col items-center px-6">
                <p className="text-xs text-gray-400 mb-1 uppercase tracking-wider">UP TO</p>
                <h3 className="text-xl font-light text-gray-700 mb-1">31.94 KWh*</h3>
                <p className="text-gray-500 text-xs">Capacity</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Exterior Features Title */}
      <div className="bg-white py-4 px-4">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-xl font-semibold text-gray-800 text-center mb-4">
            Advanced Driving Dynamics
          </h2>
        </div>
      </div>

      {/* Exterior Features Slider Section */}
      <div className="bg-white py-4 px-4">
        <div className="max-w-7xl mx-auto">
          {/* Slider Container */}
          <div className="relative">
            {/* Main Slide Display - Show 2 at a time on desktop, 1 on mobile */}
            <div className="relative overflow-hidden">
              <div 
                className="flex transition-transform duration-500 ease-in-out gap-6"
                style={{ transform: `translateX(-${currentSlideIndex * (window.innerWidth < 768 ? 100 : 50)}%)` }}
              >
                {slides.map((slide, index) => (
                  <div key={index} className="w-full md:w-1/2 flex-shrink-0 px-2">
                    <div className="bg-white rounded-lg overflow-hidden group cursor-pointer">
                      {/* Image with hover zoom effect */}
                      <div className="relative overflow-hidden">
                        <img 
                          src={slide.image} 
                          alt={slide.title}
                          className="w-full h-auto object-contain transition-transform duration-500 group-hover:scale-105"
                        />
                      </div>
                      
                      {/* Text Content Below Image - Left Aligned with Gray Background */}
                      <div className="p-4 md:p-6 text-left bg-gray-100">
                        <h3 className="text-base md:text-lg font-semibold text-gray-800 mb-2 md:mb-3">
                          {slide.title}
                        </h3>
                        <p className="text-xs md:text-sm text-gray-600 leading-relaxed">
                          {slide.description}
                        </p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Navigation Arrows */}
            <button 
              onClick={prevSlide}
              className="absolute left-4 top-1/2 transform -translate-y-1/2 z-10 p-3 bg-white rounded-full shadow-lg text-gray-600 hover:text-gray-800 hover:shadow-xl transition-all duration-300"
            >
              <ChevronLeft className="w-6 h-6" />
            </button>
            
            <button 
              onClick={nextSlide}
              className="absolute right-4 top-1/2 transform -translate-y-1/2 z-10 p-3 bg-white rounded-full shadow-lg text-gray-600 hover:text-gray-800 hover:shadow-xl transition-all duration-300"
            >
              <ChevronRight className="w-6 h-6" />
            </button>
          </div>
        </div>
      </div>

      {/* Main Vehicle Gallery Section */}
      <div className="bg-white py-8 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="space-y-4">
            {/* Top - Large banner image spanning full width */}
            <div className="w-full">
              <img 
                src={ForthingBig} 
                alt="Forthing Main Vehicle"
                className="w-full h-auto object-contain"
              />
            </div>
            
            {/* Bottom - Two smaller images side by side */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="w-full">
                <img 
                  src={ForthingLeft} 
                  alt="Forthing Side View"
                  className="w-full h-auto object-contain"
                />
              </div>
              <div className="w-full">
                <img 
                  src={ForthingRight} 
                  alt="Forthing Front View"
                  className="w-full h-auto object-contain"
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Interior Features Section */}
      <div className="bg-gray-50 py-16 px-4">
        <div className="max-w-7xl mx-auto">
          {/* Section Title - Left Aligned */}
          <div className="mb-12">
            <h2 className="text-2xl font-semibold text-gray-800 text-left">
              Interior Features
            </h2>
          </div>

          {/* Slider Container */}
          <div className="relative">
            {/* Main Slide Display - Show 2 at a time on desktop, 1 on mobile */}
            <div className="relative overflow-hidden">
              <div 
                className="flex transition-transform duration-500 ease-in-out gap-6"
                style={{ transform: `translateX(-${currentSlideIndex2 * (window.innerWidth < 768 ? 100 : 50)}%)` }}
              >
                {slides2.map((slide, index) => (
                  <div key={index} className="w-full md:w-1/2 flex-shrink-0 px-2">
                    <div className="bg-white rounded-lg overflow-hidden group cursor-pointer">
                      {/* Image with hover zoom effect */}
                      <div className="relative overflow-hidden">
                        <img 
                          src={slide.image} 
                          alt={slide.title}
                          className="w-full h-auto object-contain transition-transform duration-500 group-hover:scale-105"
                        />
                      </div>
                      
                      {/* Text Content Below Image - Left Aligned with Gray Background */}
                      <div className="p-4 md:p-6 text-left bg-gray-100">
                        <h3 className="text-base md:text-lg font-semibold text-gray-800 mb-2 md:mb-3">
                          {slide.title}
                        </h3>
                        <p className="text-xs md:text-sm text-gray-600 leading-relaxed">
                          {slide.description}
                        </p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Navigation Arrows */}
            <button 
              onClick={prevSlide2}
              className="absolute left-4 top-1/2 transform -translate-y-1/2 z-10 p-3 bg-white rounded-full shadow-lg text-gray-600 hover:text-gray-800 hover:shadow-xl transition-all duration-300"
            >
              <ChevronLeft className="w-6 h-6" />
            </button>
            
            <button 
              onClick={nextSlide2}
              className="absolute right-4 top-1/2 transform -translate-y-1/2 z-10 p-3 bg-white rounded-full shadow-lg text-gray-600 hover:text-gray-800 hover:shadow-xl transition-all duration-300"
            >
              <ChevronRight className="w-6 h-6" />
            </button>
          </div>

          {/* Brochure Button - Bottom Right */}
          <div className="flex justify-end mt-4">
            <button className="px-8 py-3 bg-black text-white hover:bg-gray-800 transition-all duration-300 text-sm font-semibold tracking-wide shadow-lg hover:shadow-xl transform hover:scale-105" style={{borderRadius: '4px'}}>
              BROCHURE
            </button>
          </div>
        </div>
      </div>

      {/* Security Features Section */}
      <div className="bg-white py-16 px-4">
        <div className="max-w-7xl mx-auto">
          {/* Section Title - Centered with lines on both sides */}
          <div className="mb-8">
            <div className="flex items-center justify-center">
              <div className="flex-1 h-px bg-gray-300"></div>
              <h2 className="text-2xl font-semibold text-gray-800 px-8">
                Security Features
              </h2>
              <div className="flex-1 h-px bg-gray-300"></div>
            </div>
          </div>

          {/* Slider Container */}
          <div className="relative">
            {/* Main Slide Display - Show 2 at a time on desktop, 1 on mobile */}
            <div className="relative overflow-hidden">
              <div 
                className="flex transition-transform duration-500 ease-in-out gap-6"
                style={{ transform: `translateX(-${currentSlideIndex3 * (window.innerWidth < 768 ? 100 : 50)}%)` }}
              >
                {securitySlides.map((slide, index) => (
                  <div key={index} className="w-full md:w-1/2 flex-shrink-0 px-2">
                    <div className="bg-white rounded-lg overflow-hidden group cursor-pointer">
                      {/* Image with hover zoom effect */}
                      <div className="relative overflow-hidden">
                        <img 
                          src={slide.image} 
                          alt={slide.title}
                          className="w-full h-auto object-contain transition-transform duration-500 group-hover:scale-105"
                        />
                      </div>
                      
                      {/* Text Content Below Image - Left Aligned with Gray Background */}
                      <div className="p-4 md:p-6 text-left bg-gray-100">
                        <h3 className="text-base md:text-lg font-semibold text-gray-800 mb-2 md:mb-3">
                          {slide.title}
                        </h3>
                        <p className="text-xs md:text-sm text-gray-600 leading-relaxed">
                          {slide.description}
                        </p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Navigation Arrows */}
            <button 
              onClick={prevSlide3}
              className="absolute left-4 top-1/2 transform -translate-y-1/2 z-10 p-3 bg-white rounded-full shadow-lg text-gray-600 hover:text-gray-800 hover:shadow-xl transition-all duration-300"
            >
              <ChevronLeft className="w-6 h-6" />
            </button>
            
            <button 
              onClick={nextSlide3}
              className="absolute right-4 top-1/2 transform -translate-y-1/2 z-10 p-3 bg-white rounded-full shadow-lg text-gray-600 hover:text-gray-800 hover:shadow-xl transition-all duration-300"
            >
              <ChevronRight className="w-6 h-6" />
            </button>
          </div>
        </div>
      </div>

      {/* Final Specifications Section */}
      <div className="bg-white py-8 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="w-full">
            <img 
              src={ForthingSpec} 
              alt="Forthing Specifications"
              className="w-full h-auto object-contain"
            />
          </div>
          
          {/* Final decorative line at the bottom */}
          <div className="flex items-center justify-center pt-8">
            <div className="w-20 h-px bg-gradient-to-r from-transparent via-gray-400 to-transparent rounded-full opacity-60"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Forthing;