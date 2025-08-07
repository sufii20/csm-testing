import React, { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

import JMEVBanner from '../assets/HeroBanner/JMEVBanner.png';
// Car color variants
import blackCar from '../assets/JMEV_page/ColorSelector/black.png';
import blueCar from '../assets/JMEV_page/ColorSelector/blue.png';
import whiteCar from '../assets/JMEV_page/ColorSelector/white.png';
import greenCar from '../assets/JMEV_page/ColorSelector/green.png';
import purpleCar from '../assets/JMEV_page/ColorSelector/Purple.png';
//slider 2
import slideA from '../assets/JMEV_page/ADAS/ADAS-A.png';
import slideB from '../assets/JMEV_page/ADAS/ADAS-B.png';
import slideC from '../assets/JMEV_page/ADAS/ADAS-C.png';
import slideD from '../assets/JMEV_page/ADAS/ADAS-D.png';
import slideE from '../assets/JMEV_page/ADAS/ADAS-E.png';
//slider1 images
import slidea from '../assets/JMEV_page/ADD/Exterior-A.png';
import slideb from '../assets/JMEV_page/ADD/Exterior-B.png';
import slidec from '../assets/JMEV_page/ADD/Exterior-C.png';
import slided from '../assets/JMEV_page/ADD/Exterior-D.png';
import slidee from '../assets/JMEV_page/ADD/Exterior-E.png';
//slider3 images
import InteriorA from '../assets/JMEV_page/InteriorFeatures/Interior-A.png';
import InteriorB from '../assets/JMEV_page/InteriorFeatures/Interior-B.png';
import InteriorC from '../assets/JMEV_page/InteriorFeatures/Interior-C.png';
import InteriorD from '../assets/JMEV_page/InteriorFeatures/Interior-D.png';
import InteriorE from '../assets/JMEV_page/InteriorFeatures/Interior-E.png';
//banner and additional images
import FeatureBig from '../assets/JMEV_page/Grid/FeatureBig.png';
import FeatureLeft from '../assets/JMEV_page/Grid/FeatureLeft.png';
import FeatureRight from '../assets/JMEV_page/Grid/FeatureRight.png';
import JmevSpecs from '../assets/JMEV_page/JmevSpecs.png';

export const JMEV = () => {
  const [currentCarIndex, setCurrentCarIndex] = useState(0);
  const [currentSlideIndex, setCurrentSlideIndex] = useState(0);
  const [currentSlideIndex2, setCurrentSlideIndex2] = useState(0);
  const [currentSlideIndex3, setCurrentSlideIndex3] = useState(0);
  const [isDesktop, setIsDesktop] = useState(false);

  // Handle responsive design
  useEffect(() => {
    const handleResize = () => {
      setIsDesktop(window.innerWidth >= 768);
    };

    handleResize(); // Initial check
    window.addEventListener('resize', handleResize);
    
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  // Car color variants for JMEV
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
      colorCode: '#227ba4ff'
    },
    {
      image: purpleCar,
      color: 'Purple',
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
      image: blackCar, // Using white car as placeholder for black
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

  // First Advanced Driving Dynamics slides data (5 slides)
  const slides = [
    {
      image: slidea,
      title: "Nearly 2m² large panoramic nano skylight",
      description: "Double-layer laminated silver-coated glass is used to filter up to 98% of ultraviolet rays, so you don't have to worry about being bothered by sunlight  in the car."
    },
    {
      image: slideb,
      title: "70% High strength steel skeleton", 
      description: "The only one in its class that uses 44 hot-formed steel plates with a strength of up to 1500MPa, with a high-strength steel ratio of over 71%, to build a high-strength cage."
    },
    {
      image: slidec,
      title: "Galaxy platform pure electric base modular design",
      description: "the new pure electric A-class vehicle platform is modularly designed, and the underlying logic is designed for comfortable living."
    },
    {
      image: slided,
      title: "3 Driving Modes",
      description: "Three driving modes deal with the challenges of all road conditions in real time Economic mode: Better economic electric energy,Motion mode: More positive power response,Standard mode: Both economic power and electric energy."
    },
    {
      image: slidee,
      title: "Exterior Features: McPherson rear multi-link independent suspension",
      description: "The design of the front McPherson rear multi-link independent suspension provides a comfortable driving experience. Drive forward in comfort with driving control at ease."
    }
  ];

  // Interior Features slides data (5 slides)
  const slides2 = [
    {
      image: InteriorA,
      title: "SMART HOME SPACE",
      description: "Experience a spacious, intelligent cockpit where comfort meets innovation.Designed around you, the expansive cabin maximizes space and comfort.With intelligent innovation at its core, every journey feels effortlessly refined"
    },
    {
      image: InteriorB,
      title: "6-way Power Seat", 
      description: "The driver’s seat is electrically adjustable in 6 directions and the driver can switch the comfortable driving and riding spaces at will to meet the space needs of the driver and passengers for free and pleasant travel."
    },
    {
      image: InteriorC,
      title: "14.6-inch multimedia touch screen ",
      description: "The central console features a 14.6-inch multimedia touchscreen that makes driving an easier and more pleasant experience."
    },
    {
      image: InteriorD,
      title: "Intelligent Thermal Management System",
      description: "Use the first waste heat A/C system for EV in China to effectively improve the energy consumption index and increase the endurance mileage by 30% compared with of ordinary RTC heating A/C (heat pump A/C optional)."
    },
    {
      image: InteriorE,
      title: "360 AVM visual system",
      description: "Accurate identification of the surrounding environment and support of 100+ parking scenarios, including incomplete parking lines and parking spaces on curves, with an all-around view enable the blind spot disappear and the field of vision return."
    }
  ];

  // Security Features slides data
  const securitySlides = [
    {
      image: slideA,
      title: "SUPREME PROTECTION",
      description: "Superior durability and proven reliability are validated across multiple dimensions of testing."
    },
    {
      image: slideB,
      title: "Comprehensive Airbag Protection", 
      description: "JMEV ElIgh offers full-range airbag coverage for driver and passengers.Enhanced safety from all angles ensures peace of mind on every journey."
    },
    {
      image: slideC,
      title: "Overcoming All-Scenario Challenges",
      description: "JMEV ElIgh adapts to all road conditions with smart drive modes and efficient performance. Its advanced tech and lightweight body ensure confident, smooth driving anytime, anywhere."
    },
    {
      image: slideD,
      title: "Level 2.5 Intelligent Driving Assistance",
      description: "JMEV ELIgh features Level 2.5 intelligent driving for smarter, safer journeys.It supports lane keeping, adaptive cruise, and real-time road monitoring"
    },
     {
      image: slideE,
      title: "Michelin tyre*",
      description: "Aluminum alloy wheels paired with Michelin high-performance tires deliver a perfect blend of grip, comfort, and a sleek, sporty look."
    }
  ];

  // Slider navigation functions
  const getMaxIndex = (slidesLength) => {
    return Math.max(0, slidesLength - (isDesktop ? 2 : 1));
  };

  // Car navigation functions
  const nextCar = () => {
    setCurrentCarIndex((prev) => (prev + 1) % cars.length);
  };

  const prevCar = () => {
    setCurrentCarIndex((prev) => (prev - 1 + cars.length) % cars.length);
  };

  const selectCar = (index) => {
    setCurrentCarIndex(index);
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

  const nextSlide = () => {
    setCurrentSlideIndex((prev) => {
      const maxIndex = getMaxIndex(slides.length);
      return prev >= maxIndex ? 0 : prev + 1;
    });
  };

  const prevSlide = () => {
    setCurrentSlideIndex((prev) => {
      const maxIndex = getMaxIndex(slides.length);
      return prev <= 0 ? maxIndex : prev - 1;
    });
  };

  const nextSlide2 = () => {
    setCurrentSlideIndex2((prev) => {
      const maxIndex = getMaxIndex(slides2.length);
      return prev >= maxIndex ? 0 : prev + 1;
    });
  };

  const prevSlide2 = () => {
    setCurrentSlideIndex2((prev) => {
      const maxIndex = getMaxIndex(slides2.length);
      return prev <= 0 ? maxIndex : prev - 1;
    });
  };

  const nextSlide3 = () => {
    setCurrentSlideIndex3((prev) => {
      const maxIndex = getMaxIndex(securitySlides.length);
      return prev >= maxIndex ? 0 : prev + 1;
    });
  };

  const prevSlide3 = () => {
    setCurrentSlideIndex3((prev) => {
      const maxIndex = getMaxIndex(securitySlides.length);
      return prev <= 0 ? maxIndex : prev - 1;
    });
  };

  return (
    <div className="w-full">
      {/* Hero Banner Section */}
      <div className="relative w-full">
        <img 
          src={JMEVBanner} 
          alt="JMEV Hero Banner"
          className="w-full h-auto object-cover"
        />
        
        {/* Buttons positioned at bottom right */}
        <div className="absolute bottom-8 right-8 flex space-x-4">
          <button
              className="px-4 sm:px-8 py-3 sm:py-4 border-2 border-white text-white bg-transparent  hover:text-black transition-all duration-300 text-sm font-semibold tracking-wide shadow-lg hover:shadow-xl transform hover:scale-105"
              style={{ borderRadius: "8px" }}
            >
              BOOK NOW
            </button>
            <button
              className="px-4 sm:px-8 py-3 sm:py-4 border-2 border-white text-white bg-black   transition-all duration-300 text-sm font-semibold tracking-wide shadow-lg hover:shadow-xl transform hover:scale-105"
              style={{ borderRadius: "8px" }}
            >
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
                <h3 className="text-xl font-light text-gray-700 mb-1">500 Km*</h3>
                <p className="text-gray-500 text-xs">Driving Range</p>
              </div>
              <div className="flex flex-col items-center px-6 border-l border-r border-gray-300 mx-4">
                <p className="text-xs text-gray-400 mb-1 uppercase tracking-wider">Ultra Low</p>
                <h3 className="text-xl font-light text-gray-700 mb-1">0.26</h3>
                <p className="text-gray-500 text-xs">Wind Resistance</p>
              </div>
              <div className="flex flex-col items-center px-6">
                <p className="text-xs text-gray-400 mb-1 uppercase tracking-wider">Intelligent</p>
                <h3 className="text-xl font-light text-gray-700 mb-1">L 2.5</h3>
                <p className="text-gray-500 text-xs">Driving Assistant</p>
              </div>
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
                alt={`JMEV ${cars[currentCarIndex].color} car`}
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

          <div className="relative">
            <div className="relative overflow-hidden">
              <div 
                className="flex transition-transform duration-500 ease-in-out gap-6"
                style={{ transform: `translateX(-${currentSlideIndex * (isDesktop ? 50 : 100)}%)` }}
              >
                {slides.map((slide, index) => (
                  <div key={index} className="w-full md:w-1/2 flex-shrink-0 px-2">
                    <div className="bg-white rounded-lg overflow-hidden group cursor-pointer">
                      <div className="relative overflow-hidden">
                        <img 
                          src={slide.image} 
                          alt={slide.title}
                          className="w-full h-auto object-contain transition-transform duration-500 group-hover:scale-105"
                        />
                      </div>
                      
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
            <div className="w-full">
              <img 
                src={FeatureBig} 
                alt="JMEV Main Vehicle"
                className="w-full h-auto object-contain"
              />
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="w-full">
                <img 
                  src={FeatureLeft} 
                  alt="JMEV Side View"
                  className="w-full h-auto object-contain"
                />
              </div>
              <div className="w-full">
                <img 
                  src={FeatureRight} 
                  alt="JMEV Front View"
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
          {/* Section Title with Lines on Both Sides */}
          <div className="text-center mb-12">
            <div className="flex items-center justify-left mb-8">
              {/* <div className="flex-1 h-px bg-gray-400 max-w-24"></div> */}
              <h2 className="px-6 text-lg font-medium text-gray-800 tracking-wider">
                INTERIOR FEATURES
              </h2>
              {/* <div className="flex-1 h-px bg-gray-400 max-w-24"></div> */}
            </div>
          </div>

          <div className="relative">
            <div className="relative overflow-hidden">
              <div 
                className="flex transition-transform duration-500 ease-in-out gap-6"
                style={{ transform: `translateX(-${currentSlideIndex2 * (isDesktop ? 50 : 100)}%)` }}
              >
                {slides2.map((slide, index) => (
                  <div key={index} className="w-full md:w-1/2 flex-shrink-0 px-2">
                    <div className="bg-white rounded-lg overflow-hidden group cursor-pointer">
                      <div className="relative overflow-hidden">
                        <img 
                          src={slide.image} 
                          alt={slide.title}
                          className="w-full h-auto object-contain transition-transform duration-500 group-hover:scale-105"
                        />
                      </div>
                      
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

          <div className="flex justify-end mt-4">
            <button className="px-8 py-3 bg-black text-white hover:bg-gray-800 transition-all duration-300 text-sm font-semibold tracking-wide shadow-lg hover:shadow-xl transform hover:scale-105 rounded">
              BROCHURE
            </button>
          </div>
        </div>
      </div>

      {/* Security Features Section */}
      <div className="bg-white py-16 px-4">
        <div className="max-w-7xl mx-auto">
          {/* Section Title with Lines on Both Sides */}
          <div className="text-center mb-12">
            <div className="flex items-center justify-center mb-8">
              <div className="flex-1 h-px bg-gray-400 max-w-24"></div>
              <h2 className="px-6 text-lg font-medium text-gray-800 tracking-wider">
                SECURITY FEATURES
              </h2>
              <div className="flex-1 h-px bg-gray-400 max-w-24"></div>
            </div>
          </div>

          <div className="relative">
            <div className="relative overflow-hidden">
              <div 
                className="flex transition-transform duration-500 ease-in-out gap-6"
                style={{ transform: `translateX(-${currentSlideIndex3 * (isDesktop ? 50 : 100)}%)` }}
              >
                {securitySlides.map((slide, index) => (
                  <div key={index} className="w-full md:w-1/2 flex-shrink-0 px-2">
                    <div className="bg-white rounded-lg overflow-hidden group cursor-pointer">
                      <div className="relative overflow-hidden">
                        <img 
                          src={slide.image} 
                          alt={slide.title}
                          className="w-full h-auto object-contain transition-transform duration-500 group-hover:scale-105"
                        />
                      </div>
                      
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
              src={JmevSpecs} 
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

export default JMEV;