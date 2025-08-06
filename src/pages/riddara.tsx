import React, { useState } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import RiddaraFullBanner from '../assets/RiddaraFullBanner.png';
import whiteCar from '../assets/car_white_top.webp';
import blueCar from '../assets/car_blue.webp';
import greyCar from '../assets/car_gray.webp';
import greenCar from '../assets/car_green_top.webp';
//slider 1
import slidea from '../assets/ExtSlideA.png';
import slideb from '../assets/ExSlideB.png';
import slidec from '../assets/ExSlideC.png';
import slided from '../assets/ExSlideD.png';
import slidee from '../assets/ExSlideE.png';
//slider2 images
import slideA from '../assets/IntSlideA.png';
import slideB from '../assets/IntSlideB.png';
import slideC from '../assets/IntSlideC.png';
import slideD from '../assets/IntSlideD.png';
import slideE from '../assets/IntSlideE.png';
//banner and additional images
import FrontGrid from '../assets/FrontGrillWide.png';
import FrameRD from '../assets/FrameRD.png';
import GrillWhite from '../assets/GrillCard.png';
import Backlight from '../assets/BacklightCard.png';
import RiddaraSpec from '../assets/RiddaraSpecs.png';
//last banner and four images
import airbag from '../assets/AirBags.png';
import cameraTech from '../assets/CameraTech.png';
import DriveAssist from '../assets/DriveAssist.png';
import ModernTrunk from '../assets/ModernTrunk.png';

export const RiddaraShowcase = () => {
  const [currentCarIndex, setCurrentCarIndex] = useState(0); // Start with green with black top
  const [currentSlideIndex, setCurrentSlideIndex] = useState(0);
  const [currentSlideIndex2, setCurrentSlideIndex2] = useState(0);

  const cars = [
    {
      image: greenCar,
      color: 'Green with black top',
      bgColor: 'bg-gradient-to-b from-black to-green-700',
      colorCode: '#65775D'
    },
    {
      image: blueCar,
      color: 'Blue',
      bgColor: 'bg-blue-900',
      colorCode: '#033146'
    },
    {
      image: greyCar,
      color: 'Grey',
      bgColor: 'bg-gray-400',
      colorCode: '#ACB3C0'
    },
    {
      image: whiteCar,
      color: 'White with black top',
      bgColor: 'bg-gradient-to-b from-black to-white',
      colorCode: '#FFFFFF'
    },
    {
      image: whiteCar,
      color: 'White',
      bgColor: 'bg-white',
      colorCode: '#FFFFFF'
    },
    {
      image: whiteCar, // Using white car as placeholder for black
      color: 'Black',
      bgColor: 'bg-black',
      colorCode: '#000000'
    },
    {
      image: greenCar,
      color: 'Green',
      bgColor: 'bg-green-700',
      colorCode: '#65775D'
    }
  ];

  // First Advanced Driving Dynamics slides data
  const slides = [
    {
      image: slidea,
      title: "815mm Water-Wading Depth",
      description: "Easily Navigates Rivers And Shallow Waters With A Class-Leading Wading Depth Of 815mm."
    },
    {
      image: slideb,
      title: "45° Incline Capability",
      description: "Effortlessly Tackles Steep Slopes And Rugged Terrain With A Powerful Climbing Ability For Supreme Off-Road Performance."
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

  // Second Advanced Driving Dynamics slides data (using interior slider images)
  const slides2 = [
    {
      image: slideA,
      title: "Premium Interior Design",
      description: "Luxurious cabin with cutting-edge materials and sophisticated styling for ultimate comfort."
    },
    {
      image: slideB,
      title: "Advanced Infotainment",
      description: "State-of-the-art entertainment and navigation system with intuitive touch controls."
    },
    {
      image: slideC,
      title: "Ergonomic Seating",
      description: "Premium leather seats with multi-zone climate control and massage functionality."
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

  const nextSlide = () => {
    setCurrentSlideIndex((prev) => {
      const maxIndex = Math.max(0, slides.length - 3);
      return prev >= maxIndex ? 0 : prev + 1;
    });
  };

  const prevSlide = () => {
    setCurrentSlideIndex((prev) => {
      const maxIndex = Math.max(0, slides.length - 3);
      return prev <= 0 ? maxIndex : prev - 1;
    });
  };

  // Functions for second slider
  const nextSlide2 = () => {
    setCurrentSlideIndex2((prev) => {
      const maxIndex = Math.max(0, slides2.length - 3);
      return prev >= maxIndex ? 0 : prev + 1;
    });
  };

  const prevSlide2 = () => {
    setCurrentSlideIndex2((prev) => {
      const maxIndex = Math.max(0, slides2.length - 3);
      return prev <= 0 ? maxIndex : prev - 1;
    });
  };

  const nextCar = () => {
    setCurrentCarIndex((prev) => (prev + 1) % cars.length);
  };

  const prevCar = () => {
    setCurrentCarIndex((prev) => (prev - 1 + cars.length) % cars.length);
  };

  // Helper function to create gradient style for two-tone colors
  const getColorStyle = (index) => {
    const car = cars[index];
    if (car.color === 'Green with black top') {
      return {
        background: `linear-gradient(to bottom, #000000, ${car.colorCode})`
      };
    } else if (car.color === 'White with black top') {
      return {
        background: `linear-gradient(to bottom, #000000, ${car.colorCode})`
      };
    } else {
      return {
        backgroundColor: car.colorCode
      };
    }
  };

  const selectCar = (index) => {
    setCurrentCarIndex(index);
  };

  return (
    <div className="w-full">
      {/* Hero Banner Section */}
      <div className="relative h-screen bg-cover bg-center bg-no-repeat" style={{ backgroundImage: `url(${FrameRD})` }}>
        <div className="absolute inset-0"></div>
        <div className="relative z-10 h-full flex flex-col">
          {/* Text positioned on left side */}
          <div className="flex-1 flex flex-col justify-center px-8 md:px-16 lg:px-24">
            <div className="text-white max-w-lg">

            </div>
          </div>

          {/* Buttons positioned at bottom right with 5% rounded corners */}
          <div className="absolute bottom-8 right-8 flex space-x-4">
            <button className="px-8 py-4 border-2 border-white text-white bg-transparent hover:bg-white hover:text-black transition-all duration-300 text-sm font-semibold tracking-wide shadow-lg hover:shadow-xl transform hover:scale-105" style={{ borderRadius: '8px' }}>
              BOOK NOW
            </button>
            <button className="px-8 py-4 border-2 border-white text-white bg-transparent hover:bg-white hover:text-black transition-all duration-300 text-sm font-semibold tracking-wide shadow-lg hover:shadow-xl transform hover:scale-105" style={{ borderRadius: '8px' }}>
              BROCHURE
            </button>
          </div>
        </div>
      </div>

      {/* Specifications Section */}
      <div className="bg-white py-12 px-8">
        <div className="max-w-5xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-0 text-center">
            <div className="flex flex-col items-center px-6">
              <p className="text-xs text-gray-400 mb-1 uppercase tracking-wider">UP TO</p>
              <h3 className="text-2xl font-light text-gray-700 mb-1">632 Km*</h3>
              <p className="text-gray-500 text-xs">Driving Range</p>
            </div>
            <div className="flex flex-col items-center px-6 border-l border-r border-gray-200">
              <p className="text-xs text-gray-400 mb-1 uppercase tracking-wider">AS FAST AS</p>
              <h3 className="text-2xl font-light text-gray-700 mb-1">4.5 Sec*</h3>
              <p className="text-gray-500 text-xs">To Reach 100</p>
            </div>
            <div className="flex flex-col items-center px-6">
              <p className="text-xs text-gray-400 mb-1 uppercase tracking-wider">UP TO</p>
              <h3 className="text-2xl font-light text-gray-700 mb-1">86.56 KWh*</h3>
              <p className="text-gray-500 text-xs">Capacity</p>
            </div>
          </div>
        </div>
      </div>

      {/* Car Gallery Section */}
      <div className="bg-gradient-to-b from-gray-50 to-white py-8 px-4 relative min-h-[600px]">
        <div className="max-w-7xl mx-auto relative">

          {/* Color selector dots - positioned top right */}
          <div className="absolute top-4 right-4 z-20 flex space-x-2">
            {cars.map((car, index) => (
              <button
                key={index}
                onClick={() => selectCar(index)}
                className={`w-4 h-4 rounded-full transition-all duration-300 border border-gray-300 ${currentCarIndex === index ? 'ring-2 ring-gray-600 ring-offset-2' : ''
                  }`}
                style={getColorStyle(index)}
                title={car.color}
              />
            ))}
          </div>

          {/* Navigation arrows on sides */}
          <button
            onClick={prevCar}
            className="absolute left-4 top-1/2 transform -translate-y-1/2 z-10 p-2 text-gray-400 hover:text-gray-600 transition-colors"
          >
            <ChevronLeft className="w-6 h-6" />
          </button>

          <button
            onClick={nextCar}
            className="absolute right-4 top-1/2 transform -translate-y-1/2 z-10 p-2 text-gray-400 hover:text-gray-600 transition-colors"
          >
            <ChevronRight className="w-6 h-6" />
          </button>

          {/* Car image centered */}
          <div className="flex justify-center items-center h-full py-12">
            <div className="w-full max-w-4xl">
              <img
                src={cars[currentCarIndex].image}
                alt={`Riddara ${cars[currentCarIndex].color} car`}
                className="w-full h-auto object-contain transition-all duration-500"
              />
            </div>
          </div>

          {/* Gallery Bottom Line - Small decorative line */}
          <div className="flex items-center justify-center mt-4 mb-8">
            <div className="w-16 h-px bg-gradient-to-r from-transparent via-gray-400 to-transparent rounded-full opacity-60"></div>
          </div>

        </div>
      </div>

      {/* Advanced Driving Dynamics Section */}
      <div className="bg-white py-16 px-4">
        <div className="max-w-7xl mx-auto">
          {/* Section Title with Lines on Both Sides */}
          <div className="text-center mb-12">
            <div className="flex items-center justify-center mb-8">
              <div className="flex-1 h-px bg-gray-400 max-w-24"></div>
              <h2 className="px-6 text-lg font-medium text-gray-800 tracking-wider">
                ADVANCED DRIVING DYNAMICS
              </h2>
              <div className="flex-1 h-px bg-gray-400 max-w-24"></div>
            </div>
          </div>

          {/* Slider Container */}
          <div className="relative">
            {/* Main Slide Display - Show 3 at a time */}
            <div className="relative overflow-hidden">
              <div
                className="flex transition-transform duration-500 ease-in-out gap-6"
                style={{ transform: `translateX(-${currentSlideIndex * (100 / 3)}%)` }}
              >
                {slides.map((slide, index) => (
                  <div key={index} className="w-1/3 flex-shrink-0 px-2">
                    <div className="bg-white rounded-lg overflow-hidden shadow-lg group cursor-pointer">
                      {/* Image with hover zoom effect */}
                      <div className="relative overflow-hidden h-96">
                        <img
                          src={slide.image}
                          alt={slide.title}
                          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                        />
                      </div>

                      {/* Text Content Below Image - Left Aligned */}
                      <div className="p-6 bg-gray-100 text-left">
                        {/* Title with small line above */}
                        <div className="mb-3">
                          <div className="w-8 h-px bg-gray-400 mb-3"></div>
                          <h3 className="text-lg font-semibold text-gray-800">
                            {slide.title}
                          </h3>
                        </div>
                        <p className="text-sm text-gray-600 leading-relaxed">
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

            {/* Slide Indicators */}
            <div className="flex justify-center mt-8 space-x-2">
              {Array.from({ length: Math.max(1, slides.length - 2) }, (_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentSlideIndex(index)}
                  className={`w-3 h-3 rounded-full transition-all duration-300 ${currentSlideIndex === index
                      ? 'bg-gray-800 w-8'
                      : 'bg-gray-300 hover:bg-gray-400'
                    }`}
                />
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* New Banner and Images Section */}
      <div className="bg-white py-8 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="space-y-4">
            {/* Top - Large banner image spanning full width */}
            <div className="rounded-lg overflow-hidden">
              <img
                src={FrontGrid}
                alt="Riddara Banner"
                className="w-full h-auto object-contain"
              />
            </div>

            {/* Bottom - Two smaller images side by side */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="rounded-lg overflow-hidden">
                <img
                  src={GrillWhite}
                  alt="Riddara Detail 1"
                  className="w-full h-auto object-contain"
                />
              </div>
              <div className="rounded-lg overflow-hidden">
                <img
                  src={Backlight}
                  alt="Riddara Detail 2"
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
            {/* Main Slide Display - Show 3 at a time */}
            <div className="relative overflow-hidden">
              <div
                className="flex transition-transform duration-500 ease-in-out gap-6"
                style={{ transform: `translateX(-${currentSlideIndex2 * (100 / 3)}%)` }}
              >
                {slides2.map((slide, index) => (
                  <div key={index} className="w-1/3 flex-shrink-0 px-2">
                    <div className="bg-white rounded-lg overflow-hidden shadow-lg group cursor-pointer">
                      {/* Image with hover zoom effect */}
                      <div className="relative overflow-hidden h-96">
                        <img
                          src={slide.image}
                          alt={slide.title}
                          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                        />
                      </div>

                      {/* Text Content Below Image - Left Aligned */}
                      <div className="p-6 bg-gray-100 text-left">
                        {/* Title with small line above */}
                        <div className="mb-3">
                          <div className="w-8 h-px bg-gray-400 mb-3"></div>
                          <h3 className="text-lg font-semibold text-gray-800">
                            {slide.title}
                          </h3>
                        </div>
                        <p className="text-sm text-gray-600 leading-relaxed">
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

            {/* Slide Indicators */}
            <div className="flex justify-center mt-8 space-x-2">
              {Array.from({ length: Math.max(1, slides2.length - 2) }, (_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentSlideIndex2(index)}
                  className={`w-3 h-3 rounded-full transition-all duration-300 ${currentSlideIndex2 === index
                      ? 'bg-gray-800 w-8'
                      : 'bg-gray-300 hover:bg-gray-400'
                    }`}
                />
              ))}
            </div>
          </div>

          {/* Brochure Button - Bottom Right */}
          <div className="flex justify-end mt-8">
            <button className="px-8 py-3 bg-black text-white hover:bg-gray-800 transition-all duration-300 text-sm font-semibold tracking-wide shadow-lg hover:shadow-xl transform hover:scale-105" style={{ borderRadius: '4px' }}>
              BROCHURE
            </button>
          </div>
        </div>
      </div>

      {/* Final Image Gallery Section */}
      <div className="bg-white py-8 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="space-y-4">
            {/* Top - Large banner image spanning full width */}
            <div className="rounded-lg overflow-hidden">
              <img
                src={RiddaraSpec}
                alt="Riddara Final Banner"
                className="w-full h-auto object-contain"
              />
            </div>

            {/* First row - Two images side by side */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="rounded-lg overflow-hidden justify-self-start" style={{ height: '330px', aspectRatio: '500 / 330' }}>
                <img
                  src={airbag}
                  alt="Riddara Feature 1"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="rounded-lg overflow-hidden justify-self-end" style={{ height: '330px', aspectRatio: '760 / 330' }}>
                <img
                  src={cameraTech}
                  alt="Riddara Feature 2"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>

            {/* Second row - Two more images side by side */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="rounded-lg overflow-hidden justify-self-start" style={{ height: '330px', aspectRatio: '760 / 330' }}>
                <img
                  src={ModernTrunk}
                  alt="Riddara Feature 3"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="rounded-lg overflow-hidden justify-self-end" style={{ height: '330px', aspectRatio: '500 / 330' }}>
                <img
                  src={DriveAssist}
                  alt="Riddara Feature 4"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>

            {/* Final decorative line at the bottom */}
            <div className="flex items-center justify-center pt-8">
              <div className="w-20 h-px bg-gradient-to-r from-transparent via-gray-400 to-transparent rounded-full opacity-60"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RiddaraShowcase;