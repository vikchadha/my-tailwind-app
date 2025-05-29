'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 10;
      if (isScrolled !== scrolled) {
        setScrolled(isScrolled);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [scrolled]);

  return (
    <nav className={`fixed w-full z-50 transition-all duration-300 ${scrolled ? 'bg-white shadow-md py-2' : 'bg-white/95 backdrop-blur-sm py-4'}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex-shrink-0">
            <Link href="/" className="flex items-center">
              <span className="text-2xl font-bold text-[#007BFF]">
                Magnt
              </span>
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-center space-x-8">
              <Link href="#features" className="text-gray-700 hover:text-[#007BFF] px-3 py-2 text-sm font-medium transition-colors">
                Features
              </Link>
              <Link href="#how-it-works" className="text-gray-600 hover:text-[#007BFF] px-3 py-2 text-sm font-medium transition-colors">
                How It Works
              </Link>
              <Link href="#examples" className="text-gray-600 hover:text-[#007BFF] px-3 py-2 text-sm font-medium transition-colors">
                Examples
              </Link>
              <Link href="#pricing" className="text-gray-600 hover:text-[#007BFF] px-3 py-2 text-sm font-medium transition-colors">
                Pricing
              </Link>
              <Link href="#blog" className="text-gray-600 hover:text-[#007BFF] px-3 py-2 text-sm font-medium transition-colors">
                Blog
              </Link>
            </div>
          </div>

          {/* Auth Buttons */}
          <div className="hidden md:flex items-center space-x-4">
            <Link 
              href="/login" 
              className="text-gray-700 hover:text-[#007BFF] px-4 py-2 text-sm font-medium transition-colors"
            >
              Login
            </Link>
            <Link 
              href="/signup" 
              className="bg-[#FFA500] hover:bg-[#e69500] text-white px-5 py-2.5 rounded-md text-sm font-medium transition-colors shadow-md hover:shadow-lg transform hover:-translate-y-0.5"
            >
              Get Started Free
            </Link>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-700 hover:text-[#007BFF] hover:bg-gray-100 focus:outline-none"
              aria-expanded="false"
            >
              <span className="sr-only">Open main menu</span>
              {!isOpen ? (
                <svg className="block h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              ) : (
                <svg className="block h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      <div className={`${isOpen ? 'block' : 'hidden'} md:hidden bg-white shadow-xl`}>
        <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
          <Link 
            href="#features" 
            className="block px-3 py-3 rounded-md text-base font-medium text-gray-700 hover:bg-[#F0F4F8] hover:text-[#007BFF]"
            onClick={() => setIsOpen(false)}
          >
            Features
          </Link>
          <Link 
            href="#how-it-works" 
            className="block px-3 py-3 rounded-md text-base font-medium text-gray-700 hover:bg-[#F0F4F8] hover:text-[#007BFF]"
            onClick={() => setIsOpen(false)}
          >
            How It Works
          </Link>
          <Link 
            href="#examples" 
            className="block px-3 py-3 rounded-md text-base font-medium text-gray-700 hover:bg-[#F0F4F8] hover:text-[#007BFF]"
            onClick={() => setIsOpen(false)}
          >
            Examples
          </Link>
          <Link 
            href="#pricing" 
            className="block px-3 py-3 rounded-md text-base font-medium text-gray-700 hover:bg-[#F0F4F8] hover:text-[#007BFF]"
            onClick={() => setIsOpen(false)}
          >
            Pricing
          </Link>
          <Link 
            href="#blog" 
            className="block px-3 py-3 rounded-md text-base font-medium text-gray-700 hover:bg-[#F0F4F8] hover:text-[#007BFF]"
            onClick={() => setIsOpen(false)}
          >
            Blog
          </Link>
        </div>
        <div className="pt-4 pb-3 border-t border-gray-200">
          <div className="mt-3 space-y-3 px-4">
            <Link 
              href="/login" 
              className="block w-full text-center px-4 py-3 border border-gray-300 rounded-md shadow-sm text-base font-medium text-gray-700 bg-white hover:bg-gray-50"
              onClick={() => setIsOpen(false)}
            >
              Login
            </Link>
            <Link 
              href="/signup" 
              className="block w-full text-center px-4 py-3 border border-transparent rounded-md shadow-sm text-base font-medium text-white bg-[#FFA500] hover:bg-[#e69500]"
              onClick={() => setIsOpen(false)}
            >
              Get Started Free
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
}
