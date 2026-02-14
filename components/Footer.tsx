'use client';

import { useEffect, useState } from 'react';
import Link from 'next/link';
import ReachModal from './ReachModal';

export default function Footer() {
  const [isVisible, setIsVisible] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [activeModalTab, setActiveModalTab] = useState<'reach' | 'faqs' | 'feedback' | 'release-notes'>('reach');

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const footerLinks = {
    "Home": ["Home", "About", "Pricing", "Contact"],
    "User Guide": ["User Guide", "Documentation", "Manage"],
    "News": ["News", "Updates", "Privacy"],
    "Tools": ["Tools", "Terms", "Changelog"],
    "Reach": ["Reach", "FAQs", "Feedback", "Release Notes"]
  };

  const socialIcons = [
    { name: "Twitter", icon: "M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z", color: "hover:text-blue-400", href: "#" },
    { name: "Facebook", icon: "M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z", color: "hover:text-blue-600", href: "#" },
    { name: "Instagram", icon: "M16 2a4 4 0 014 4v12a4 4 0 01-4 4H8a4 4 0 01-4-4V6a4 4 0 014-4h8zm0 2H8a2 2 0 00-2 2v12a2 2 0 002 2h8a2 2 0 002-2V6a2 2 0 00-2-2zm-4 6a4 4 0 110 8 4 4 0 010-8zm0 2a2 2 0 100 4 2 2 0 000-4zm4-3a1 1 0 110 2 1 1 0 010-2z", color: "hover:text-pink-500", href: "#  " },
    { name: "LinkedIn", icon: "M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6zM2 9h4v12H2z", color: "hover:text-blue-700", href: "https://www.linkedin.com/in/writtikbhattacharya/" },
    { name: "YouTube", icon: "M22.54 6.42a2.78 2.78 0 00-1.94-2C18.88 4 12 4 12 4s-6.88 0-8.6.46a2.78 2.78 0 00-1.94 2A29 29 0 001 11.75a29 29 0 00.46 5.33A2.78 2.78 0 003.4 19c1.72.46 8.6.46 8.6.46s6.88 0 8.6-.46a2.78 2.78 0 001.94-2 29 29 0 00.46-5.25 29 29 0 00-.46-5.33z", color: "hover:text-red-600", href: "https://www.youtube.com/@langlex" },
    { name: "Github", icon: "M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 00-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0020 4.77 5.07 5.07 0 0019.91 1S18.73.65 16 2.48a13.38 13.38 0 00-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 005 4.77a5.44 5.44 0 00-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 009 18.13V22", color: "hover:text-gray-900 dark:hover:text-white", href: "https://github.com/langlex" },
  ];

  return (
    <footer className="relative mt-20 overflow-hidden">
      {/* Animated Background Gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-gray-50 via-white to-gray-100 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_50%,rgba(139,92,246,0.1),transparent_50%)] animate-pulse-slow"></div>
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_80%,rgba(236,72,153,0.1),transparent_50%)] animate-pulse-slow" style={{ animationDelay: '1s' }}></div>
      </div>

      {/* Glassmorphism Overlay */}
      <div className="relative backdrop-blur-sm">
        <div className="max-w-7xl mx-auto px-6 py-16">
          <div className={`grid grid-cols-1 md:grid-cols-5 gap-8 mb-12 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            {/* Left Side - Logo and Description */}
            <div className="md:col-span-2 space-y-6">
              <div className="space-y-4">
                {/* Animated Logo */}
                <div className="relative inline-block group">
                  {/* Main Logo with Animated Gradient */}
                  <h3 className="text-3xl font-bold relative z-10">
                    <span className="bg-gradient-to-r from-purple-600 via-pink-600 to-blue-600 bg-clip-text text-transparent bg-[length:200%_auto] animate-gradient">
                      Langlex AI
                    </span>
                  </h3>
                  
                  {/* Glow Effect Behind */}
                  <div className="absolute inset-0 text-3xl font-bold bg-gradient-to-r from-purple-600 via-pink-600 to-blue-600 bg-clip-text text-transparent blur-md opacity-40 animate-pulse-slow -z-0">
                    Langlex AI
                  </div>
                  
                  {/* Animated Underline with Shimmer */}
                  <div className="relative mt-2 h-1 w-full overflow-hidden rounded-full bg-gray-200 dark:bg-gray-700">
                    <div className="absolute inset-0 bg-gradient-to-r from-purple-600 via-pink-600 to-blue-600 rounded-full animate-shimmer"></div>
                  </div>
                  
                  {/* Floating Particles Effect */}
                  <div className="absolute -top-2 -right-2 w-2 h-2 bg-purple-500 rounded-full opacity-60 animate-bounce-slow"></div>
                  <div className="absolute -bottom-1 -left-1 w-1.5 h-1.5 bg-pink-500 rounded-full opacity-60 animate-bounce-slow" style={{ animationDelay: '0.5s' }}></div>
                  <div className="absolute top-1/2 -right-4 w-1 h-1 bg-blue-500 rounded-full opacity-60 animate-bounce-slow" style={{ animationDelay: '1s' }}></div>
                </div>
                <p className="text-gray-600 dark:text-gray-400 text-sm leading-relaxed max-w-md transition-colors">
                  Langlex AI turns your voice into clear text in real time, for everything from AI prompts to essays. Experience seamless voice-to-voice translation powered by advanced AI.
                </p>
              </div>
              
              {/* Social Media Icons */}
              <div className="flex items-center gap-4">
                {socialIcons.map((social, index) => (
                  <a
                    key={social.name}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`group relative w-10 h-10 flex items-center justify-center glass-element rounded-full transition-all duration-300 hover:scale-110 hover:rotate-6 ${social.color} text-gray-600 dark:text-gray-400`}
                    style={{ animationDelay: `${index * 100}ms` }}
                  >
                    <svg className="w-5 h-5 transition-all duration-300 group-hover:scale-110" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={social.icon} />
                    </svg>
                    <span className="absolute -top-8 left-1/2 -translate-x-1/2 bg-gray-900 dark:bg-gray-700 text-white text-xs px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none whitespace-nowrap">
                      {social.name}
                    </span>
                  </a>
                ))}
              </div>

              {/* Status Indicator */}
              <div className="flex items-center gap-2 text-sm">
                <div className="relative">
                  <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse"></div>
                  <div className="absolute inset-0 w-3 h-3 bg-green-500 rounded-full animate-ping opacity-75"></div>
                </div>
                <span className="text-green-600 dark:text-green-400 font-medium transition-colors">
                  All systems operational
                </span>
              </div>
            </div>

            {/* Footer Links Columns */}
            {Object.entries(footerLinks).map(([category, links], categoryIndex) => (
              <div 
                key={category}
                className={`space-y-4 transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-5'}`}
                style={{ animationDelay: `${(categoryIndex + 1) * 100}ms` }}
              >
                <h4 className="font-bold text-gray-900 dark:text-white text-sm uppercase tracking-wider transition-colors">
                  {category}
                </h4>
                <ul className="space-y-3">
                  {links.map((link, linkIndex) => {
                    // Handle Reach section links to open modal
                    const isReachSection = category === 'Reach';
                    
                    // Map link text to modal tab IDs
                    const linkToTabMap: Record<string, 'reach' | 'faqs' | 'feedback' | 'release-notes'> = {
                      'Reach': 'reach',
                      'FAQs': 'faqs',
                      'Feedback': 'feedback',
                      'Release Notes': 'release-notes',
                    };
                    
                    const linkId = linkToTabMap[link];
                    
                    if (isReachSection && linkId) {
                      return (
                        <li key={link}>
                          <button
                            onClick={() => {
                              setActiveModalTab(linkId);
                              setIsModalOpen(true);
                            }}
                            className="group relative text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white text-sm transition-all duration-300 inline-block hover:translate-x-1 text-left w-full"
                          >
                            <span className="relative z-10">{link}</span>
                            <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-purple-500 to-pink-500 group-hover:w-full transition-all duration-300"></span>
                          </button>
                        </li>
                      );
                    }
                    
                    // Map footer links to page routes
                    const linkToRouteMap: Record<string, string> = {
                      'Home': '/',
                      'About': '/about',
                      'Pricing': '/pricing',
                      'Contact': '/contact',
                      'User Guide': '/user-guide',
                      'Documentation': '/documentation',
                      'Manage': '/user-guide',
                      'News': '/news',
                      'Updates': '/updates',
                      'Privacy': '/privacy',
                      'Tools': '/documentation',
                      'Terms': '/terms',
                      'Changelog': '/updates',
                    };
                    
                    const route = linkToRouteMap[link] || '#';
                    
                    // Use Link for internal routes, anchor for external
                    if (route.startsWith('/') || route === '#') {
                      return (
                        <li key={link}>
                          <Link 
                            href={route}
                            className="group relative text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white text-sm transition-all duration-300 inline-block hover:translate-x-1"
                          >
                            <span className="relative z-10">{link}</span>
                            <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-purple-500 to-pink-500 group-hover:w-full transition-all duration-300"></span>
                          </Link>
                        </li>
                      );
                    }
                    
                    return (
                      <li key={link}>
                        <a 
                          href={route}
                          className="group relative text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white text-sm transition-all duration-300 inline-block hover:translate-x-1"
                        >
                          <span className="relative z-10">{link}</span>
                          <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-purple-500 to-pink-500 group-hover:w-full transition-all duration-300"></span>
                        </a>
                      </li>
                    );
                  })}
                </ul>
              </div>
            ))}
          </div>

          {/* Animated Separator Line */}
          <div className={`relative py-8 transition-all duration-1000 ${isVisible ? 'opacity-100' : 'opacity-0'}`}>
            {/* Animated Gradient Line */}
            <div className="relative h-0.5 w-full overflow-hidden rounded-full">
              {/* Base line */}
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-gray-300 dark:via-gray-600 to-transparent"></div>
              {/* Animated gradient wave */}
              <div 
                className="absolute inset-0 bg-[length:200%_100%] animate-gradient rounded-full"
                style={{
                  backgroundImage: 'linear-gradient(to right, #9333ea, #ec4899, #2563eb, #9333ea)'
                }}
              ></div>
              {/* Shimmer effect */}
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/50 to-transparent animate-shimmer rounded-full"></div>
            </div>
            
            {/* Floating particles along the line */}
            <div className="absolute top-8 left-0 w-full h-0.5">
              <div className="absolute left-[10%] top-1/2 -translate-y-1/2 w-2 h-2 bg-purple-500 rounded-full opacity-60 animate-bounce-slow blur-sm"></div>
              <div className="absolute left-[30%] top-1/2 -translate-y-1/2 w-1.5 h-1.5 bg-pink-500 rounded-full opacity-60 animate-bounce-slow blur-sm" style={{ animationDelay: '0.3s' }}></div>
              <div className="absolute left-[50%] top-1/2 -translate-y-1/2 w-2 h-2 bg-blue-500 rounded-full opacity-60 animate-bounce-slow blur-sm" style={{ animationDelay: '0.6s' }}></div>
              <div className="absolute left-[70%] top-1/2 -translate-y-1/2 w-1.5 h-1.5 bg-purple-500 rounded-full opacity-60 animate-bounce-slow blur-sm" style={{ animationDelay: '0.9s' }}></div>
              <div className="absolute left-[90%] top-1/2 -translate-y-1/2 w-1 h-1 bg-pink-500 rounded-full opacity-60 animate-bounce-slow blur-sm" style={{ animationDelay: '1.2s' }}></div>
            </div>
          </div>

          {/* Bottom Line */}
          <div className={`pt-4 flex flex-col md:flex-row justify-between items-center gap-4 transition-all duration-1000 ${isVisible ? 'opacity-100' : 'opacity-0'}`}>
            <div className="flex gap-6 text-sm">
              <Link 
                href="/privacy" 
                className="text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white transition-all duration-300 relative group"
              >
                Privacy Policy
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-purple-500 group-hover:w-full transition-all duration-300"></span>
              </Link>
              <Link 
                href="/terms" 
                className="text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white transition-all duration-300 relative group"
              >
                Terms & Conditions
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-purple-500 group-hover:w-full transition-all duration-300"></span>
              </Link>
            </div>
            <div className="text-sm text-gray-500 dark:text-gray-500">
              Developed by <a href="https://www.linkedin.com/in/writtikbhattacharya/" target="_blank" className="text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white transition-all duration-300 relative group">Writtik Bhattacharya</a>
            </div>
            <div className="text-sm text-gray-500 dark:text-gray-500">
              © {new Date().getFullYear()} <a href="https://www.langlex.com/" target="_blank" className="text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white transition-all duration-300 relative group">Langlex AI</a>. All rights reserved.
            </div>
          </div>
        </div>
      </div>

      {/* Reach Modal */}
      <ReachModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        activeTab={activeModalTab}
      />
    </footer>
  );
}
