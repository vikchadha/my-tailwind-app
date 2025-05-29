'use client';

import { useEffect, useState } from 'react';
import Navbar from './components/Navbar';

export default function Home() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    // Smooth scroll for anchor links
    const handleSmoothScroll = (e) => {
      if (e.target.matches('a[href^="#"]')) {
        e.preventDefault();
        const targetId = e.target.getAttribute('href');
        if (targetId === '#') return;
        
        const targetElement = document.querySelector(targetId);
        if (targetElement) {
          window.scrollTo({
            top: targetElement.offsetTop - 100,
            behavior: 'smooth'
          });
          setIsMenuOpen(false);
        }
      }
    };

    document.addEventListener('click', handleSmoothScroll);
    return () => document.removeEventListener('click', handleSmoothScroll);
  }, []);

  return (
    <div className="min-h-screen bg-white">
      <Navbar />

      <main>
        {/* Hero Section */}
        <section id="hero" className="relative bg-gradient-to-r from-blue-600 to-blue-800 text-white overflow-hidden">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 md:py-28 lg:py-36 relative z-10">
            <div className="text-center max-w-4xl mx-auto">
              <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
                Your Brand, Reimagined by <span className="text-orange-400">AI</span>
              </h1>
              <p className="text-xl md:text-2xl text-blue-100 mb-10 max-w-3xl mx-auto">
                Create professional logos, websites, and marketing assets in minutes, not weeks.
              </p>
              <div className="flex flex-col sm:flex-row justify-center gap-4">
                <a 
                  href="#pricing" 
                  className="bg-orange-500 hover:bg-orange-600 text-white font-semibold py-4 px-8 rounded-full transition-all duration-300 transform hover:scale-105 shadow-lg"
                >
                  Generate Your Logo Now
                </a>
                <a 
                  href="#examples" 
                  className="bg-transparent hover:bg-white/10 text-white font-semibold py-4 px-8 border-2 border-white rounded-full transition-all duration-300"
                >
                  See Examples
                </a>
              </div>
              
              {/* Hero Image */}
              <div className="mt-16 relative max-w-5xl mx-auto">
                <div className="relative rounded-2xl overflow-hidden shadow-2xl border-8 border-white/20">
                  <div className="aspect-w-16 aspect-h-9 bg-gray-100">
                    <div className="w-full h-96 bg-gradient-to-br from-blue-50 to-blue-100 flex items-center justify-center">
                      <div className="text-center p-8 md:p-12">
                        <div className="inline-block mb-6 p-3 bg-white/20 rounded-lg">
                          <div className="w-16 h-16 bg-[#FFA500] rounded-lg flex items-center justify-center text-2xl font-bold text-white">M</div>
                        </div>
                        <h3 className="text-2xl font-bold text-gray-800 mb-2">AI-Generated Logo Concepts</h3>
                        <p className="text-gray-600 mb-6">Multiple design options based on your preferences</p>
                        <div className="flex justify-center space-x-4">
                          {[1, 2, 3, 4].map((item) => (
                            <div key={item} className={`w-3 h-3 rounded-full ${item === 1 ? 'bg-[#007BFF]' : 'bg-gray-300'}`}></div>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                
                {/* Decorative Elements */}
                <div className="absolute -top-6 -left-6 w-32 h-32 bg-[#FFA500]/20 rounded-full filter blur-2xl -z-10"></div>
                <div className="absolute -bottom-6 -right-6 w-40 h-40 bg-[#007BFF]/20 rounded-full filter blur-2xl -z-10"></div>
                
                {/* Trust Badge */}
                <div className="mt-8 flex flex-wrap justify-center items-center gap-4 text-sm text-blue-100">
                  <div className="flex items-center">
                    <div className="flex -space-x-2 mr-2">
                      {[1, 2, 3].map((item) => (
                        <div key={item} className="w-8 h-8 rounded-full bg-white/90 border-2 border-white"></div>
                      ))}
                    </div>
                    <span>Trusted by 10,000+ businesses</span>
                  </div>
                  <div className="h-4 w-px bg-white/30"></div>
                  <div className="flex items-center">
                    <div className="flex items-center mr-1">
                      {[...Array(5)].map((_, i) => (
                        <svg key={i} className="w-4 h-4 text-yellow-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                        </svg>
                      ))}
                    </div>
                    <span>4.9/5 from 1,500+ reviews</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          {/* Scroll Indicator */}
          <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2">
            <a href="#features" className="animate-bounce inline-block p-2 rounded-full bg-white/10 hover:bg-white/20 transition-colors">
              <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
              </svg>
            </a>
          </div>
        </section>

        {/* Features Section */}
        <section id="features" className="py-16 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-center mb-12">Key Features</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {[
                { 
                  icon: '🚀', 
                  title: 'Lightning Fast', 
                  description: 'Generate professional designs in seconds with our powerful AI technology.' 
                },
                { 
                  icon: '🎨', 
                  title: 'Endless Customization', 
                  description: 'Fully customizable templates to match your unique brand identity.' 
                },
                { 
                  icon: '📱', 
                  title: 'Mobile Optimized', 
                  description: 'Perfectly optimized designs that look great on all devices.' 
                },
              ].map((feature, index) => (
                <div key={index} className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300">
                  <div className="text-4xl mb-4">{feature.icon}</div>
                  <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
                  <p className="text-gray-600">{feature.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Pricing Section */}
        <section id="pricing" className="py-16 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-center mb-12">Simple, Transparent Pricing</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {[
                {
                  name: 'Starter',
                  price: '$29',
                  period: '/month',
                  description: 'Perfect for individuals and small businesses',
                  features: [
                    '5 AI logo generations',
                    'Basic templates',
                    'Email support',
                    'Commercial license',
                    'PNG & SVG files'
                  ],
                  buttonText: 'Get Started',
                  featured: false
                },
                {
                  name: 'Professional',
                  price: '$79',
                  period: '/month',
                  description: 'Ideal for growing businesses',
                  features: [
                    '20 AI logo generations',
                    'Premium templates',
                    'Priority support',
                    'Commercial license',
                    'All file formats',
                    'Brand guidelines',
                    'Unlimited revisions'
                  ],
                  buttonText: 'Get Started',
                  featured: true
                },
                {
                  name: 'Enterprise',
                  price: 'Custom',
                  period: '',
                  description: 'For large organizations with custom needs',
                  features: [
                    'Unlimited logo generations',
                    'Custom templates',
                    '24/7 dedicated support',
                    'White-label options',
                    'API access',
                    'Custom integrations',
                    'Team collaboration'
                  ],
                  buttonText: 'Contact Sales',
                  featured: false
                }
              ].map((plan, index) => (
                <div 
                  key={index}
                  className={`rounded-2xl p-8 ${
                    plan.featured 
                      ? 'bg-blue-600 text-white shadow-xl transform -translate-y-2' 
                      : 'bg-white text-gray-800 shadow-lg'
                  }`}
                >
                  {plan.featured && (
                    <div className="bg-yellow-400 text-xs font-semibold text-blue-800 px-3 py-1 rounded-full inline-block mb-4">
                      MOST POPULAR
                    </div>
                  )}
                  <h3 className="text-2xl font-bold mb-2">{plan.name}</h3>
                  <div className="flex items-baseline mb-2">
                    <span className="text-4xl font-extrabold">{plan.price}</span>
                    {plan.period && <span className="ml-2 text-gray-400">{plan.period}</span>}
                  </div>
                  <p className="text-sm mb-6">{plan.description}</p>
                  <ul className="space-y-3 mb-8">
                    {plan.features.map((feature, i) => (
                      <li key={i} className="flex items-center">
                        <svg 
                          className={`w-5 h-5 mr-2 ${plan.featured ? 'text-green-300' : 'text-green-500'}`} 
                          fill="none" 
                          stroke="currentColor" 
                          viewBox="0 0 24 24"
                        >
                          <path 
                            strokeLinecap="round" 
                            strokeLinejoin="round" 
                            strokeWidth="2" 
                            d="M5 13l4 4L19 7"
                          />
                        </svg>
                        {feature}
                      </li>
                    ))}
                  </ul>
                  <button 
                    className={`w-full py-3 px-6 rounded-lg font-semibold ${
                      plan.featured 
                        ? 'bg-white text-blue-600 hover:bg-gray-100' 
                        : 'bg-blue-600 text-white hover:bg-blue-700'
                    } transition-colors`}
                  >
                    {plan.buttonText}
                  </button>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <h3 className="text-xl font-semibold mb-4">Magnt</h3>
              <p className="text-gray-400">AI-powered branding platform that helps businesses create professional brand identities.</p>
            </div>
            <div>
              <h4 className="text-lg font-semibold mb-4">Product</h4>
              <ul className="space-y-2">
                <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Features</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Pricing</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Examples</a></li>
              </ul>
            </div>
            <div>
              <h4 className="text-lg font-semibold mb-4">Company</h4>
              <ul className="space-y-2">
                <li><a href="#" className="text-gray-400 hover:text-white transition-colors">About Us</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Blog</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Careers</a></li>
              </ul>
            </div>
            <div>
              <h4 className="text-lg font-semibold mb-4">Support</h4>
              <ul className="space-y-2">
                <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Help Center</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Contact Us</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Privacy Policy</a></li>
              </ul>
            </div>
          </div>
          <div className="border-t border-gray-800 mt-12 pt-8 text-center text-gray-400">
            <p>&copy; {new Date().getFullYear()} Magnt. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}