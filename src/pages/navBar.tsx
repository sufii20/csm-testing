import React, { useState } from 'react';
import { ChevronDown, X } from 'lucide-react';
import logo from '../assets/Logo-main.svg'; // Ensure the path is correct
import starIcon from '../assets/icon.svg'; // Import the star icon

const Navbar = ({ onPageChange, currentPage }) => {
  const [isBrandsOpen, setIsBrandsOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const brands = [
    { name: 'ZEEKR', page: 'zeekr' }, 
    { name: 'RIDDARA', page: 'riddara' },
    { name: 'FORTHING', page: 'forthing' },
    { name: 'JMEV', page: 'jmev' },
  ];

  const handleNavigation = (page, event) => {
    event.preventDefault();
    onPageChange(page);
    setIsBrandsOpen(false); // Close dropdown when navigating
    setIsMobileMenuOpen(false); // Close mobile menu when navigating
  };

  const handleBrandClick = (brandPage, event) => {
    event.preventDefault();
    onPageChange(brandPage);
    setIsBrandsOpen(false);
    setIsMobileMenuOpen(false);
  };

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
    if (isBrandsOpen) {
      setIsBrandsOpen(false);
    }
  };

  return (
    <header className="w-full bg-white border-b border-gray-200 relative">
      <div className="w-full px-6 lg:px-12">
        <div className="flex items-center justify-between h-20">
          
          {/* Left Side - Logo */}
          <div className="flex items-center">
            <img 
              src={logo} 
              alt="Capital Smart Motors Logo" 
              className="h-12 w-auto mr-4"
            />
            <div className="flex flex-col">
          
            </div>
          </div>

          {/* Center - Navigation Menu */}
          <nav className="hidden lg:flex items-center space-x-8 xl:space-x-12">
            <a 
              href="#" 
              onClick={(e) => handleNavigation('home', e)}
              className={`text-sm font-medium uppercase tracking-wide transition-colors ${
                currentPage === 'home' 
                  ? 'text-black border-b-2 border-black pb-1' 
                  : 'text-gray-600 hover:text-black'
              }`}
            >
              HOME
            </a>
            
            <a 
              href="#" 
              onClick={(e) => handleNavigation('about', e)}
              className={`text-sm font-medium uppercase tracking-wide transition-colors ${
                currentPage === 'about' 
                  ? 'text-black border-b-2 border-black pb-1' 
                  : 'text-gray-600 hover:text-black'
              }`}
            >
              ABOUT US
            </a>
            
            {/* Brands Dropdown */}
            <div className="relative">
              <button
                onClick={() => setIsBrandsOpen(!isBrandsOpen)}
                className={`flex items-center text-sm font-medium uppercase tracking-wide transition-colors ${
                  ['zeekr', 'riddara', 'forthing', 'jmev'].includes(currentPage)
                    ? 'text-black border-b-2 border-black pb-1'
                    : 'text-gray-600 hover:text-black'
                }`}
              >
                BRANDS
                <ChevronDown className="ml-1 h-4 w-4" />
              </button>
              
              {isBrandsOpen && (
                <>
                  {/* Overlay */}
                  <div 
                    className="fixed inset-0 z-40"
                    onClick={() => setIsBrandsOpen(false)}
                  />
                  
                  {/* Dropdown Menu */}
                  <div className="absolute top-full left-0 mt-2 w-48 bg-white rounded-md shadow-lg border border-gray-200 z-50">
                    <div className="py-1">
                      {brands.map((brand, index) => (
                        <a
                          key={index}
                          href="#"
                          onClick={(e) => handleBrandClick(brand.page, e)}
                          className={`block px-4 py-2 text-sm transition-colors ${
                            currentPage === brand.page
                              ? 'bg-gray-100 text-black font-medium'
                              : 'text-gray-700 hover:bg-gray-50 hover:text-black'
                          }`}
                        >
                          {brand.name}
                        </a>
                      ))}
                    </div>
                  </div>
                </>
              )}
            </div>
            
            <a 
              href="#" 
              onClick={(e) => handleNavigation('news', e)}
              className={`text-sm font-medium uppercase tracking-wide transition-colors ${
                currentPage === 'news' 
                  ? 'text-black border-b-2 border-black pb-1' 
                  : 'text-gray-600 hover:text-black'
              }`}
            >
              NEWS & INSIGHTS
            </a>
            
            <a 
              href="#" 
              onClick={(e) => handleNavigation('locations', e)}
              className={`text-sm font-medium uppercase tracking-wide transition-colors ${
                currentPage === 'locations' 
                  ? 'text-black border-b-2 border-black pb-1' 
                  : 'text-gray-600 hover:text-black'
              }`}
            >
              LOCATIONS
            </a>
            
            <a 
              href="#" 
              onClick={(e) => handleNavigation('contact', e)}
              className={`text-sm font-medium uppercase tracking-wide transition-colors ${
                currentPage === 'contact' 
                  ? 'text-black border-b-2 border-black pb-1' 
                  : 'text-gray-600 hover:text-black'
              }`}
            >
              CONTACT US
            </a>
          </nav>

          {/* Right Side - Rating (Desktop) */}
          <div className="hidden lg:flex items-center">
            <img 
              src={starIcon} 
              alt="Star" 
              className="w-8 h-8 text-gray-600 mr-3"
            />
            <span className="text-black font-bold text-lg">789,967</span>
          </div>

          {/* Mobile Menu Button */}
          <div className="lg:hidden">
            <button 
              className="text-gray-600 hover:text-black p-1"
              onClick={toggleMobileMenu}
              aria-label="Toggle mobile menu"
            >
              {isMobileMenuOpen ? (
                <X className="w-6 h-6" />
              ) : (
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      {isMobileMenuOpen && (
        <div 
          className="fixed inset-0 bg-black bg-opacity-50 z-40 lg:hidden"
          onClick={() => setIsMobileMenuOpen(false)}
        />
      )}

      {/* Mobile Menu */}
      <div className={`lg:hidden fixed top-0 right-0 h-full w-80 bg-white shadow-xl transform transition-transform duration-300 ease-in-out z-50 ${
        isMobileMenuOpen ? 'translate-x-0' : 'translate-x-full'
      }`}>
        <div className="flex flex-col h-full">
          {/* Mobile Menu Header */}
          <div className="flex items-center justify-between p-6 border-b border-gray-200 h-20">
            <img 
              src={logo} 
              alt="Capital Smart Motors Logo" 
              className="h-12 w-auto"
            />
            <button 
              onClick={() => setIsMobileMenuOpen(false)}
              className="p-2 text-gray-600 hover:text-black transition-colors"
              aria-label="Close mobile menu"
            >
              <X className="w-6 h-6" />
            </button>
          </div>

          {/* Mobile Menu Items */}
          <nav className="flex-1 px-6 py-6 space-y-2">
            <a
              href="#"
              onClick={(e) => handleNavigation('home', e)}
              className={`block px-4 py-3 rounded-md text-sm font-medium uppercase tracking-wide transition-colors ${
                currentPage === 'home'
                  ? 'bg-gray-100 text-black'
                  : 'text-gray-600 hover:bg-gray-50 hover:text-black'
              }`}
            >
              HOME
            </a>

            <a
              href="#"
              onClick={(e) => handleNavigation('about', e)}
              className={`block px-4 py-3 rounded-md text-sm font-medium uppercase tracking-wide transition-colors ${
                currentPage === 'about'
                  ? 'bg-gray-100 text-black'
                  : 'text-gray-600 hover:bg-gray-50 hover:text-black'
              }`}
            >
              ABOUT US
            </a>

            {/* Mobile Brands Section */}
            <div>
              <button
                onClick={() => setIsBrandsOpen(!isBrandsOpen)}
                className={`w-full flex items-center justify-between px-4 py-3 rounded-md text-sm font-medium uppercase tracking-wide transition-colors ${
                  ['zeekr', 'riddara', 'forthing', 'jmev'].includes(currentPage)
                    ? 'bg-gray-100 text-black'
                    : 'text-gray-600 hover:bg-gray-50 hover:text-black'
                }`}
              >
                BRANDS
                <ChevronDown className={`ml-1 h-4 w-4 transition-transform ${
                  isBrandsOpen ? 'rotate-180' : ''
                }`} />
              </button>
              
              {isBrandsOpen && (
                <div className="mt-2 ml-4 space-y-1">
                  {brands.map((brand, index) => (
                    <a
                      key={index}
                      href="#"
                      onClick={(e) => handleBrandClick(brand.page, e)}
                      className={`block px-4 py-2 rounded-md text-sm transition-colors ${
                        currentPage === brand.page
                          ? 'bg-gray-100 text-black font-medium'
                          : 'text-gray-600 hover:bg-gray-50 hover:text-black'
                      }`}
                    >
                      {brand.name}
                    </a>
                  ))}
                </div>
              )}
            </div>

            <a
              href="#"
              onClick={(e) => handleNavigation('news', e)}
              className={`block px-4 py-3 rounded-md text-sm font-medium uppercase tracking-wide transition-colors ${
                currentPage === 'news'
                  ? 'bg-gray-100 text-black'
                  : 'text-gray-600 hover:bg-gray-50 hover:text-black'
              }`}
            >
              NEWS & INSIGHTS
            </a>

            <a
              href="#"
              onClick={(e) => handleNavigation('locations', e)}
              className={`block px-4 py-3 rounded-md text-sm font-medium uppercase tracking-wide transition-colors ${
                currentPage === 'locations'
                  ? 'bg-gray-100 text-black'
                  : 'text-gray-600 hover:bg-gray-50 hover:text-black'
              }`}
            >
              LOCATIONS
            </a>

            <a
              href="#"
              onClick={(e) => handleNavigation('contact', e)}
              className={`block px-4 py-3 rounded-md text-sm font-medium uppercase tracking-wide transition-colors ${
                currentPage === 'contact'
                  ? 'bg-gray-100 text-black'
                  : 'text-gray-600 hover:bg-gray-50 hover:text-black'
              }`}
            >
              CONTACT US
            </a>
          </nav>

          {/* Mobile Rating Footer */}
          <div className="border-t border-gray-200 p-6">
            <div className="flex items-center justify-center">
              <img 
                src={starIcon} 
                alt="Star" 
                className="w-8 h-8 text-gray-600 mr-3"
              />
              <span className="text-black font-bold text-lg">789,967</span>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Navbar;