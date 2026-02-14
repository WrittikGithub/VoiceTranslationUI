import Header from "@/components/Header";
import Footer from "@/components/Footer";

export default function ContactPage() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-gray-50 via-white to-gray-100 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900 transition-colors">
      <Header />
      
      {/* Hero Section - Full Width */}
      <section className="w-full py-20 md:py-32 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-purple-600/10 via-pink-600/10 to-blue-600/10 dark:from-purple-600/20 dark:via-pink-600/20 dark:to-blue-600/20"></div>
        
        {/* Animated Background Elements */}
        <div className="absolute inset-0 overflow-hidden">
          {/* Floating Gradient Orbs */}
          <div className="absolute top-20 left-10 w-72 h-72 bg-purple-500 rounded-full mix-blend-multiply dark:mix-blend-screen filter blur-3xl opacity-20 animate-pulse-slow"></div>
          <div className="absolute top-40 right-20 w-96 h-96 bg-pink-500 rounded-full mix-blend-multiply dark:mix-blend-screen filter blur-3xl opacity-20 animate-pulse-slow" style={{ animationDelay: '1s' }}></div>
          <div className="absolute bottom-20 left-1/3 w-80 h-80 bg-blue-500 rounded-full mix-blend-multiply dark:mix-blend-screen filter blur-3xl opacity-20 animate-pulse-slow" style={{ animationDelay: '2s' }}></div>
          
          {/* Animated Grid Pattern */}
          <div className="absolute inset-0 opacity-5 dark:opacity-10">
            <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
              <defs>
                <pattern id="grid" width="40" height="40" patternUnits="userSpaceOnUse">
                  <path d="M 40 0 L 0 0 0 40" fill="none" stroke="currentColor" strokeWidth="1" className="text-purple-500"/>
                </pattern>
              </defs>
              <rect width="100%" height="100%" fill="url(#grid)" className="animate-spin-slow" style={{ animationDuration: '60s' }}></rect>
            </svg>
          </div>
          
          {/* Animated Communication Icons - Multiple */}
          <div className="absolute top-10 right-10 w-40 h-40 opacity-20 animate-bounce-slow">
            <svg viewBox="0 0 100 100" className="w-full h-full text-purple-500">
              <path d="M 20,50 Q 30,30 50,30 Q 70,30 80,50 Q 70,70 50,70 Q 30,70 20,50" fill="currentColor" opacity="0.3"/>
              <circle cx="35" cy="45" r="3" fill="currentColor" className="animate-pulse"/>
              <circle cx="50" cy="45" r="3" fill="currentColor" className="animate-pulse" style={{ animationDelay: '0.2s' }}></circle>
              <circle cx="65" cy="45" r="3" fill="currentColor" className="animate-pulse" style={{ animationDelay: '0.4s' }}></circle>
            </svg>
          </div>
          
          {/* Floating Email Icons */}
          <div className="absolute top-32 left-20 w-16 h-16 opacity-15 animate-bounce-slow">
            <svg className="w-full h-full text-purple-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
            </svg>
          </div>
          <div className="absolute top-60 right-32 w-12 h-12 opacity-15 animate-bounce-slow" style={{ animationDelay: '0.5s' }}>
            <svg className="w-full h-full text-pink-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
            </svg>
          </div>
          
          {/* Floating Phone Icons */}
          <div className="absolute bottom-32 left-32 w-14 h-14 opacity-15 animate-bounce-slow" style={{ animationDelay: '1s' }}>
            <svg className="w-full h-full text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
            </svg>
          </div>
          <div className="absolute bottom-20 right-24 w-10 h-10 opacity-15 animate-bounce-slow" style={{ animationDelay: '1.5s' }}>
            <svg className="w-full h-full text-purple-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
            </svg>
          </div>
          
          {/* Animated Location Pins */}
          <div className="absolute top-1/2 left-10 w-20 h-20 opacity-10 animate-bounce-slow">
            <svg className="w-full h-full text-pink-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
            </svg>
          </div>
          <div className="absolute top-1/3 right-16 w-16 h-16 opacity-10 animate-bounce-slow" style={{ animationDelay: '0.7s' }}>
            <svg className="w-full h-full text-blue-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
            </svg>
          </div>
          
          {/* Animated Connecting Lines */}
          <svg className="absolute inset-0 w-full h-full opacity-10" style={{ pointerEvents: 'none' }}>
            <defs>
              <linearGradient id="lineGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#9333ea" stopOpacity="0.5" />
                <stop offset="50%" stopColor="#ec4899" stopOpacity="0.5" />
                <stop offset="100%" stopColor="#2563eb" stopOpacity="0.5" />
              </linearGradient>
            </defs>
            <line x1="10%" y1="20%" x2="30%" y2="40%" stroke="url(#lineGradient)" strokeWidth="2" className="animate-pulse-slow" />
            <line x1="70%" y1="30%" x2="90%" y2="50%" stroke="url(#lineGradient)" strokeWidth="2" className="animate-pulse-slow" style={{ animationDelay: '1s' }} />
            <line x1="20%" y1="70%" x2="50%" y2="80%" stroke="url(#lineGradient)" strokeWidth="2" className="animate-pulse-slow" style={{ animationDelay: '2s' }} />
          </svg>
        </div>
        
        <div className="relative max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-5xl md:text-7xl font-bold text-gray-900 dark:text-white mb-6">
                Get in Touch
              </h1>
              <p className="text-xl md:text-2xl text-gray-600 dark:text-gray-400 max-w-3xl">
                We'd love to hear from you. Reach out to us through any of the channels below.
              </p>
            </div>
            
            {/* Animated Contact Icons */}
            <div className="relative h-64 md:h-80 flex items-center justify-center">
              <div className="relative w-full h-full">
                {/* Email Icon - Animated */}
                <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-20 h-20 animate-bounce-slow">
                  <div className="glass-card rounded-xl p-4 w-full h-full flex items-center justify-center">
                    <svg className="w-12 h-12 text-purple-600 dark:text-purple-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                  </div>
                </div>
                
                {/* Phone Icon - Animated */}
                <div className="absolute bottom-0 left-0 w-20 h-20 animate-bounce-slow" style={{ animationDelay: '0.3s' }}>
                  <div className="glass-card rounded-xl p-4 w-full h-full flex items-center justify-center">
                    <svg className="w-12 h-12 text-pink-600 dark:text-pink-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                    </svg>
                  </div>
                </div>
                
                {/* Location Icon - Animated */}
                <div className="absolute bottom-0 right-0 w-20 h-20 animate-bounce-slow" style={{ animationDelay: '0.6s' }}>
                  <div className="glass-card rounded-xl p-4 w-full h-full flex items-center justify-center">
                    <svg className="w-12 h-12 text-blue-600 dark:text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                  </div>
                </div>
                
                {/* Central Pulsing Circle */}
                <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-24 h-24 rounded-full bg-gradient-to-r from-purple-500 via-pink-500 to-blue-500 animate-pulse opacity-50"></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Methods - Full Width */}
      <section className="w-full py-16 bg-white dark:bg-gray-800 relative overflow-hidden">
        {/* Animated Background Decorations */}
        <div className="absolute inset-0 overflow-hidden opacity-5 dark:opacity-10">
          {/* Floating Circles */}
          <div className="absolute top-10 left-10 w-32 h-32 border-2 border-purple-500 rounded-full animate-spin-slow" style={{ animationDuration: '20s' }}></div>
          <div className="absolute bottom-10 right-10 w-24 h-24 border-2 border-pink-500 rounded-full animate-spin-slow" style={{ animationDuration: '15s', animationDirection: 'reverse' }}></div>
          <div className="absolute top-1/2 right-20 w-16 h-16 border-2 border-blue-500 rounded-full animate-spin-slow" style={{ animationDuration: '25s' }}></div>
          
          {/* Animated Dots Pattern */}
          <div className="absolute inset-0">
            {[...Array(20)].map((_, i) => (
              <div
                key={i}
                className="absolute w-2 h-2 bg-purple-500 rounded-full opacity-30 animate-pulse-slow"
                style={{
                  left: `${(i * 5) % 100}%`,
                  top: `${(i * 7) % 100}%`,
                  animationDelay: `${i * 0.2}s`
                }}
              ></div>
            ))}
          </div>
        </div>
        
        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            <a
              href="mailto:info@langlex.com"
              className="glass-card rounded-2xl p-8 text-center hover:scale-105 transition-all duration-300 group"
            >
              <div className="text-5xl mb-4">📧</div>
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3 group-hover:text-purple-600 dark:group-hover:text-purple-400 transition-colors">
                Email Us
              </h3>
              <p className="text-gray-600 dark:text-gray-400 mb-4">
                Send us an email and we'll get back to you as soon as possible.
              </p>
              <p className="text-purple-600 dark:text-purple-400 font-medium">
                info@langlex.com
              </p>
            </a>

            <a
              href="tel:+917892242495"
              className="glass-card rounded-2xl p-8 text-center hover:scale-105 transition-all duration-300 group"
            >
              <div className="text-5xl mb-4">📞</div>
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3 group-hover:text-purple-600 dark:group-hover:text-purple-400 transition-colors">
                Call Us
              </h3>
              <p className="text-gray-600 dark:text-gray-400 mb-4">
                Give us a call during business hours for immediate assistance.
              </p>
              <p className="text-purple-600 dark:text-purple-400 font-medium">
                91 - 789 - 224 - 2495
              </p>
            </a>

            <a
              href="https://maps.google.com/?q=G-415B+Adarsh+Enclave+Ayanagar+New+Delhi+110047"
              target="_blank"
              rel="noopener noreferrer"
              className="glass-card rounded-2xl p-8 text-center hover:scale-105 transition-all duration-300 group"
            >
              <div className="text-5xl mb-4">📍</div>
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3 group-hover:text-purple-600 dark:group-hover:text-purple-400 transition-colors">
                Visit Us
              </h3>
              <p className="text-gray-600 dark:text-gray-400 mb-4">
                Come visit our office in New Delhi, India.
              </p>
              <p className="text-purple-600 dark:text-purple-400 font-medium text-sm">
                G-415B, Adarsh Enclave,<br />
                Ayanagar, New Delhi - 110047
              </p>
            </a>
          </div>
        </div>
      </section>

      {/* Contact Form Section - Full Width */}
      <section className="w-full py-16 bg-gray-50 dark:bg-gray-900 relative overflow-hidden">
        {/* Animated Background Elements */}
        <div className="absolute inset-0 overflow-hidden opacity-5 dark:opacity-10">
          {/* Animated Wave Pattern */}
          <svg className="absolute bottom-0 left-0 w-full h-32" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
            <path d="M0,60 C300,100 600,20 900,60 C1050,80 1125,70 1200,60 L1200,120 L0,120 Z" fill="url(#waveGradient)" className="animate-pulse-slow">
              <animate attributeName="d" dur="8s" repeatCount="indefinite" values="M0,60 C300,100 600,20 900,60 C1050,80 1125,70 1200,60 L1200,120 L0,120 Z;M0,80 C300,40 600,100 900,80 C1050,60 1125,90 1200,80 L1200,120 L0,120 Z;M0,60 C300,100 600,20 900,60 C1050,80 1125,70 1200,60 L1200,120 L0,120 Z"></animate>
            </path>
            <defs>
              <linearGradient id="waveGradient" x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="0%" stopColor="#9333ea" stopOpacity="0.3" />
                <stop offset="50%" stopColor="#ec4899" stopOpacity="0.3" />
                <stop offset="100%" stopColor="#2563eb" stopOpacity="0.3" />
              </linearGradient>
            </defs>
          </svg>
          
          {/* Floating Geometric Shapes */}
          <div className="absolute top-20 left-20 w-20 h-20 border-4 border-purple-400 rotate-45 opacity-20 animate-spin-slow" style={{ animationDuration: '30s' }}></div>
          <div className="absolute bottom-20 right-20 w-16 h-16 border-4 border-pink-400 rotate-45 opacity-20 animate-spin-slow" style={{ animationDuration: '25s', animationDirection: 'reverse' }}></div>
          
          {/* Animated Stars */}
          {[...Array(15)].map((_, i) => (
            <div
              key={i}
              className="absolute w-1 h-1 bg-blue-400 rounded-full opacity-40 animate-pulse-slow"
              style={{
                left: `${(i * 6.67) % 100}%`,
                top: `${(i * 8) % 100}%`,
                animationDelay: `${i * 0.3}s`
              }}
            ></div>
          ))}
        </div>
        
        <div className="max-w-4xl mx-auto px-6 relative z-10">
          <div className="glass-card rounded-2xl p-8 md:p-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4 text-center">
              Send Us a Message
            </h2>
            <p className="text-gray-600 dark:text-gray-400 mb-8 text-center">
              Fill out the form below and we'll respond within 24 hours.
            </p>
            
            <form className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                    Name *
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    required
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-800 text-gray-900 dark:text-white focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all"
                    placeholder="Your name"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                    Email *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-800 text-gray-900 dark:text-white focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all"
                    placeholder="your.email@example.com"
                  />
                </div>
              </div>
              
              <div>
                <label htmlFor="subject" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                  Subject *
                </label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  required
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-800 text-gray-900 dark:text-white focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all"
                  placeholder="What is this regarding?"
                />
              </div>
              
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                  Message *
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={6}
                  required
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-800 text-gray-900 dark:text-white focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all resize-none"
                  placeholder="Your message here..."
                ></textarea>
              </div>
              
              <div className="text-center">
                <button
                  type="submit"
                  className="px-8 py-4 bg-gradient-to-r from-purple-600 to-pink-600 text-white rounded-lg font-semibold hover:shadow-xl transition-all duration-300 transform hover:scale-105"
                >
                  Send Message
                </button>
              </div>
            </form>
          </div>
        </div>
      </section>

      {/* Office Hours Section - Full Width */}
      <section className="w-full py-16 bg-white dark:bg-gray-800 relative overflow-hidden">
        {/* Animated Background Decorations */}
        <div className="absolute inset-0 overflow-hidden opacity-5 dark:opacity-10">
          {/* Animated Circles */}
          <div className="absolute top-1/4 left-1/4 w-40 h-40 border-2 border-purple-500 rounded-full animate-pulse-slow"></div>
          <div className="absolute bottom-1/4 right-1/4 w-32 h-32 border-2 border-pink-500 rounded-full animate-pulse-slow" style={{ animationDelay: '1s' }}></div>
          
          {/* Animated Lines */}
          <svg className="absolute inset-0 w-full h-full" style={{ pointerEvents: 'none' }}>
            <line x1="20%" y1="0%" x2="20%" y2="100%" stroke="url(#verticalGradient)" strokeWidth="1" className="animate-pulse-slow" />
            <line x1="80%" y1="0%" x2="80%" y2="100%" stroke="url(#verticalGradient)" strokeWidth="1" className="animate-pulse-slow" style={{ animationDelay: '1s' }} />
            <defs>
              <linearGradient id="verticalGradient" x1="0%" y1="0%" x2="0%" y2="100%">
                <stop offset="0%" stopColor="#9333ea" stopOpacity="0.2" />
                <stop offset="50%" stopColor="#ec4899" stopOpacity="0.2" />
                <stop offset="100%" stopColor="#2563eb" stopOpacity="0.2" />
              </linearGradient>
            </defs>
          </svg>
        </div>
        
        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-6">
                Office Hours
              </h2>
              <div className="space-y-4">
                <div className="flex justify-between items-center py-3 border-b border-gray-200 dark:border-gray-700">
                  <span className="text-gray-700 dark:text-gray-300 font-medium">Monday - Friday</span>
                  <span className="text-gray-900 dark:text-white">9:00 AM - 6:00 PM IST</span>
                </div>
                <div className="flex justify-between items-center py-3 border-b border-gray-200 dark:border-gray-700">
                  <span className="text-gray-700 dark:text-gray-300 font-medium">Saturday</span>
                  <span className="text-gray-900 dark:text-white">10:00 AM - 4:00 PM IST</span>
                </div>
                <div className="flex justify-between items-center py-3">
                  <span className="text-gray-700 dark:text-gray-300 font-medium">Sunday</span>
                  <span className="text-gray-900 dark:text-white">Closed</span>
                </div>
              </div>
            </div>
            
            <div className="glass-card rounded-2xl p-8">
              <h3 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">
                Quick Response
              </h3>
              <p className="text-gray-600 dark:text-gray-400 mb-4">
                We typically respond to emails within 24 hours during business days. For urgent matters, 
                please call us directly.
              </p>
              <div className="space-y-2">
                <p className="text-sm text-gray-500 dark:text-gray-400">
                  <strong>Support:</strong> Available Monday - Friday, 9 AM - 6 PM IST
                </p>
                <p className="text-sm text-gray-500 dark:text-gray-400">
                  <strong>Sales:</strong> Available Monday - Saturday, 9 AM - 6 PM IST
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Map Section - Full Width */}
      <section className="w-full py-16 bg-gray-50 dark:bg-gray-900 relative overflow-hidden">
        {/* Animated Background Elements */}
        <div className="absolute inset-0 overflow-hidden opacity-5 dark:opacity-10">
          {/* Animated Location Icons */}
          <div className="absolute top-10 left-1/4 w-12 h-12 opacity-20 animate-bounce-slow">
            <svg className="w-full h-full text-purple-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
            </svg>
          </div>
          <div className="absolute top-20 right-1/3 w-10 h-10 opacity-20 animate-bounce-slow" style={{ animationDelay: '0.5s' }}>
            <svg className="w-full h-full text-pink-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
            </svg>
          </div>
          <div className="absolute bottom-10 left-1/3 w-14 h-14 opacity-20 animate-bounce-slow" style={{ animationDelay: '1s' }}>
            <svg className="w-full h-full text-blue-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
            </svg>
          </div>
          
          {/* Animated Grid Overlay */}
          <div className="absolute inset-0">
            <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
              <defs>
                <pattern id="mapGrid" width="50" height="50" patternUnits="userSpaceOnUse">
                  <path d="M 50 0 L 0 0 0 50" fill="none" stroke="currentColor" strokeWidth="0.5" className="text-purple-400 opacity-20"/>
                </pattern>
              </defs>
              <rect width="100%" height="100%" fill="url(#mapGrid)"></rect>
            </svg>
          </div>
        </div>
        
        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-8 text-center">
            Find Us on the Map
          </h2>
          <div className="glass-card rounded-2xl overflow-hidden">
            <iframe
              src="https://maps.google.com/maps?q=G-415B,+Adarsh+Enclave,+Ayanagar,+New+Delhi+-+110047&t=&z=15&ie=UTF8&iwloc=&output=embed"
              width="100%"
              height="450"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="w-full"
              title="G-415B, Adarsh Enclave, Ayanagar, New Delhi - 110047 Location"
            ></iframe>
          </div>
          
          {/* Alternative: Direct Google Maps Link */}
          <div className="mt-4 text-center">
            <a
              href="https://www.google.com/maps/search/?api=1&query=G-415B,+Adarsh+Enclave,+Ayanagar,+New+Delhi+-+110047"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-purple-600 to-pink-600 text-white rounded-lg font-semibold hover:shadow-xl transition-all duration-300 transform hover:scale-105"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
              </svg>
              Open in Google Maps
            </a>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
