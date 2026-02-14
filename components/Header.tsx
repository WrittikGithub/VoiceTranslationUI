'use client';

import { useTheme } from './ThemeProvider';
import { useState, useEffect } from 'react';
import { usePathname } from 'next/navigation';
import Link from 'next/link';
import Image from 'next/image';

export default function Header() {
  const { theme, toggleTheme } = useTheme();
  const [activeSection, setActiveSection] = useState('home');
  const pathname = usePathname();

  useEffect(() => {
    // Only handle scroll detection on home page
    if (pathname !== '/') return;

    const handleScroll = () => {
      // Section order matches document order (top to bottom)
      const sections = ['home', 'apis', 'user-guide', 'pricing'];
      const scrollY = window.scrollY;
      const triggerLine = scrollY + 150; // Point in viewport we use to decide active section (below header)

      let currentSection = 'home';

      for (const sectionId of sections) {
        const element = document.getElementById(sectionId);
        if (element) {
          const rect = element.getBoundingClientRect();
          const sectionTop = rect.top + scrollY;
          const sectionBottom = sectionTop + rect.height;

          if (triggerLine >= sectionTop && triggerLine < sectionBottom) {
            currentSection = sectionId;
            break;
          }
        }
      }

      setActiveSection(currentSection);
    };

    // Run once on mount to set initial state
    handleScroll();

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, [pathname]);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      const headerOffset = 80;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  return (
    <header className="sticky top-0 z-50 bg-white dark:bg-gray-900 border-b border-gray-200 dark:border-gray-800 transition-colors backdrop-blur-sm bg-white/90 dark:bg-gray-900/90">
      <div className="max-w-7xl mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link 
            href="/" 
            className="flex items-center gap-3 cursor-pointer group"
            onClick={(e) => {
              if (pathname === '/') {
                e.preventDefault();
                scrollToSection('home');
              }
            }}
          >
            <div className="w-10 h-10 rounded-full overflow-hidden border-2 border-gray-900 dark:border-white flex items-center justify-center transition-colors bg-white dark:bg-gray-900 relative">
              <Image
                src="/images/langlexlogo-removebg-preview.png"
                alt="Langlex AI logo"
                width={40}
                height={40}
                className="object-contain relative z-10"
                draggable={false}
              />
              {/* Glow effect for logo */}
              <div className="absolute inset-0 bg-gradient-to-r from-purple-600 via-pink-600 to-blue-600 rounded-full blur-sm opacity-30 animate-pulse-slow"></div>
            </div>
            {/* Animated Logo Text */}
            <div className="relative inline-block">
              {/* Main Logo with Animated Gradient */}
              <h1 className="text-xl font-semibold relative z-10">
                <span className="bg-gradient-to-r from-purple-600 via-pink-600 to-blue-600 bg-clip-text text-transparent bg-[length:200%_auto] animate-gradient">
                  Langlex AI
                </span>
              </h1>
              
              {/* Glow Effect Behind */}
              <div className="absolute inset-0 text-xl font-semibold bg-gradient-to-r from-purple-600 via-pink-600 to-blue-600 bg-clip-text text-transparent blur-md opacity-30 animate-pulse-slow -z-0">
                Langlex AI
              </div>
              
              {/* Animated Underline with Shimmer */}
              <div className="relative mt-1 h-0.5 w-full overflow-hidden rounded-full bg-gray-200 dark:bg-gray-700">
                <div className="absolute inset-0 bg-gradient-to-r from-purple-600 via-pink-600 to-blue-600 rounded-full animate-shimmer"></div>
              </div>
              
              {/* Floating Particles Effect */}
              <div className="absolute -top-1 -right-2 w-1.5 h-1.5 bg-purple-500 rounded-full opacity-60 animate-bounce-slow"></div>
              <div className="absolute -bottom-0.5 -left-1 w-1 h-1 bg-pink-500 rounded-full opacity-60 animate-bounce-slow" style={{ animationDelay: '0.5s' }}></div>
              <div className="absolute top-1/2 -right-3 w-1 h-1 bg-blue-500 rounded-full opacity-60 animate-bounce-slow" style={{ animationDelay: '1s' }}></div>
            </div>
          </Link>

          {/* Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <Link
              href="/"
              onClick={(e) => {
                if (pathname === '/') {
                  e.preventDefault();
                  scrollToSection('home');
                }
              }}
              className={`text-sm font-medium flex items-center gap-1 transition-all duration-300 relative pb-1 ${
                pathname === '/' && activeSection === 'home'
                  ? 'text-gray-900 dark:text-white font-semibold'
                  : 'text-gray-700 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white'
              }`}
            >
              {pathname === '/' && activeSection === 'home' && (
                <>
                  <span className="w-1.5 h-1.5 bg-purple-600 dark:bg-purple-400 rounded-full animate-pulse"></span>
                  <span className="absolute -bottom-1 left-0 right-0 h-0.5 bg-purple-600 dark:bg-purple-400 rounded-full"></span>
                </>
              )}
              Home
            </Link>
            <Link
              href="/about"
              className={`text-sm font-medium flex items-center gap-1 transition-all duration-300 relative pb-1 ${
                pathname === '/about'
                  ? 'text-gray-900 dark:text-white font-semibold'
                  : 'text-gray-700 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white'
              }`}
            >
              {pathname === '/about' && (
                <>
                  <span className="w-1.5 h-1.5 bg-purple-600 dark:bg-purple-400 rounded-full animate-pulse"></span>
                  <span className="absolute -bottom-1 left-0 right-0 h-0.5 bg-purple-600 dark:bg-purple-400 rounded-full"></span>
                </>
              )}
              About
            </Link>
            <Link
              href="/pricing"
              className={`text-sm font-medium flex items-center gap-1 transition-all duration-300 relative pb-1 ${
                pathname === '/pricing'
                  ? 'text-gray-900 dark:text-white font-semibold'
                  : 'text-gray-700 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white'
              }`}
            >
              {pathname === '/pricing' && (
                <>
                  <span className="w-1.5 h-1.5 bg-purple-600 dark:bg-purple-400 rounded-full animate-pulse"></span>
                  <span className="absolute -bottom-1 left-0 right-0 h-0.5 bg-purple-600 dark:bg-purple-400 rounded-full"></span>
                </>
              )}
              Pricing
            </Link>
            <Link
              href="/user-guide"
              className={`text-sm font-medium flex items-center gap-1 transition-all duration-300 relative pb-1 ${
                pathname === '/user-guide'
                  ? 'text-gray-900 dark:text-white font-semibold'
                  : 'text-gray-700 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white'
              }`}
            >
              {pathname === '/user-guide' && (
                <>
                  <span className="w-1.5 h-1.5 bg-purple-600 dark:bg-purple-400 rounded-full animate-pulse"></span>
                  <span className="absolute -bottom-1 left-0 right-0 h-0.5 bg-purple-600 dark:bg-purple-400 rounded-full"></span>
                </>
              )}
              User Guide
            </Link>
            <Link
              href="/apis"
              className={`text-sm font-medium flex items-center gap-1 transition-all duration-300 relative pb-1 ${
                pathname === '/apis'
                  ? 'text-gray-900 dark:text-white font-semibold'
                  : 'text-gray-700 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white'
              }`}
            >
              {pathname === '/apis' && (
                <>
                  <span className="w-1.5 h-1.5 bg-purple-600 dark:bg-purple-400 rounded-full animate-pulse"></span>
                  <span className="absolute -bottom-1 left-0 right-0 h-0.5 bg-purple-600 dark:bg-purple-400 rounded-full"></span>
                </>
              )}
              APIs
            </Link>
            <Link
              href="/contact"
              className={`text-sm font-medium flex items-center gap-1 transition-all duration-300 relative pb-1 ${
                pathname === '/contact'
                  ? 'text-gray-900 dark:text-white font-semibold'
                  : 'text-gray-700 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white'
              }`}
            >
              {pathname === '/contact' && (
                <>
                  <span className="w-1.5 h-1.5 bg-purple-600 dark:bg-purple-400 rounded-full animate-pulse"></span>
                  <span className="absolute -bottom-1 left-0 right-0 h-0.5 bg-purple-600 dark:bg-purple-400 rounded-full"></span>
                </>
              )}
              Contact
            </Link>
          </nav>

          {/* Dark/Light Mode Toggle */}
          <button
            onClick={(e) => {
              e.preventDefault();
              e.stopPropagation();
              toggleTheme();
            }}
            className="p-2 rounded-lg bg-gray-100 dark:bg-gray-800 hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors"
            aria-label="Toggle theme"
            type="button"
          >
            {theme === 'light' ? (
              // Moon icon for dark mode
              <svg key="moon" className="w-5 h-5 text-gray-900 dark:text-white transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z" />
              </svg>
            ) : (
              // Sun icon for light mode
              <svg key="sun" className="w-5 h-5 text-gray-900 dark:text-white transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z" />
              </svg>
            )}
          </button>
        </div>
      </div>
    </header>
  );
}
