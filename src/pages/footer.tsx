import React from 'react';
import logoMain from '../assets/logo-main.svg';

// Types
interface FooterLink {
  label: string;
  href: string;
}

interface FooterColumn {
  links: FooterLink[];
}

interface SocialLink {
  name: string;
  href: string;
  icon: React.ReactNode;
  bgColor: string;
}

const Newsletter = () => {
  return (
    <section className="py-16 bg-white relative overflow-hidden">
      <div className="max-w-5xl mx-auto px-2 sm:px-6 lg:px-4">
        <div className="flex flex-col md:flex-row items-center justify-between relative z-10">
          {/* Text Block */}
          <div className="mb-6 md:mb-0 text-center md:text-left">
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900">
              Stay Connected
            </h2>
            <p className="text-gray-600">
              Join Our Mailing List For News &amp; Updates
            </p>
          </div>

          {/* Input + Button */}
          <div className="relative w-full max-w-md">
            <input
              type="email"
              placeholder="Enter Your Email"
              className="w-full px-5 py-3 border border-gray-400 focus:outline-none focus:border-black"
            />
            <button
              type="submit"
              className="absolute top-0 right-0 h-full px-5 bg-black text-white flex items-center justify-center"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-4 w-4"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M9 5l7 7-7 7"
                />
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Watermark Background Logo */}
      <div className="absolute inset-0 opacity-5 flex justify-end items-center pr-10 md:pr-20 pointer-events-none">
        <img
          src={logoMain}
          alt="Watermark"
          className="w-32 md:w-48 lg:w-64 xl:w-72"
        />
      </div>
    </section>
  );
};

const Footer: React.FC = () => {
  // Footer data
  const footerColumns: FooterColumn[] = [
    {
      links: [
        { label: 'About Us', href: '#' },
        { label: 'Mission Statement', href: '#' },
        { label: 'Vision Statement', href: '#' },
        { label: 'Store Locator', href: '#' },
      ],
    },
    {
      links: [
        { label: 'Contact Us', href: '#' },
        { label: 'Customer Feedback', href: '#' },
        { label: 'Careers', href: '#' },
        { label: 'FAQs', href: '#' },
      ],
    },
    {
      links: [
        { label: 'ZEEKR', href: '#' },
        { label: 'RIDDARA', href: '#' },
        { label: 'FORTHING', href: '#' },
        { label: 'JMEV', href: '#' },
      ],
    },
  ];

  const socialLinks: SocialLink[] = [
    {
      name: 'Twitter',
      href: '#',
      bgColor: 'bg-blue-400',
      icon: (
        <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
          <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z"/>
        </svg>
      ),
    },
    {
      name: 'Facebook',
      href: '#',
      bgColor: 'bg-blue-600',
      icon: (
        <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
          <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
        </svg>
      ),
    },
    {
      name: 'LinkedIn',
      href: '#',
      bgColor: 'bg-blue-700',
      icon: (
        <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
          <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
        </svg>
      ),
    },
  ];

  const legalLinks: FooterLink[] = [
    { label: 'Terms Of Service', href: '#' },
    { label: 'Privacy Policy', href: '#' },
    { label: 'Trust & Safety', href: '#' },
    { label: 'Law Enforcement', href: '#' },
  ];

  return (
    <footer className="bg-white border-t border-gray-200">
      <div className="max-w-7xl mx-auto px-5 py-10">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8 mb-10">
          {/* Left Section: Logo and Social */}
          <div className="flex flex-col items-start gap-5">
            {/* Logo Section */}
            <div className="flex items-center gap-3">
              <img 
                src={logoMain} 
                alt="Capital Smart Motors" 
                className="w-100 h-120" 
              />
            </div>
            
            {/* Social Links */}
            <div className="flex gap-2.5">
              {socialLinks.map((social) => (
                <a
                  key={social.name}
                  href={social.href}
                  className={`w-9 h-9 ${social.bgColor} rounded-full flex items-center justify-center text-white hover:opacity-80 transition-opacity`}
                  aria-label={social.name}
                >
                  {social.icon}
                </a>
              ))}
            </div>
          </div>

          {/* Footer Columns - Each in its own grid column */}
          {footerColumns.map((column, columnIndex) => (
            <div key={columnIndex} className="flex flex-col gap-4 items-start">
              {column.links.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  className="text-gray-600 text-sm hover:text-gray-800 transition-colors text-left"
                >
                  {link.label}
                </a>
              ))}
            </div>
          ))}
        </div>

        {/* Footer Bottom */}
        <div className="border-t border-white-200 pt-5 -mx-5 px-5 pb-5">
          <div className="bg-white-200 -mx-5 px-5 py-5">
            <div className="flex flex-col lg:flex-row justify-between items-start gap-2 max-w-7xl mx-auto">
              <div className="text-gray-600 text-sm">
                © 2025 Capital Smart Motors
              </div>
              <div className="flex flex-wrap justify-start lg:justify-end gap-3">
                {legalLinks.map((link) => (
                  <a
                    key={link.label}
                    href={link.href}
                    className="text-gray-600 text-sm hover:text-gray-800 transition-colors"
                  >
                    {link.label}
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

// Combined component showing both Newsletter and Footer
const NewsletterFooterComponent: React.FC = () => {
  return (
    <div>
      <Newsletter />
      <Footer />
    </div>
  );
};

export default NewsletterFooterComponent;