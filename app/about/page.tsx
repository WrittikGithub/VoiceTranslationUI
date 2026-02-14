import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Link from "next/link";

export default function AboutPage() {
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
                <pattern id="aboutGrid" width="40" height="40" patternUnits="userSpaceOnUse">
                  <path d="M 40 0 L 0 0 0 40" fill="none" stroke="currentColor" strokeWidth="1" className="text-purple-500"/>
                </pattern>
              </defs>
              <rect width="100%" height="100%" fill="url(#aboutGrid)" className="animate-spin-slow" style={{ animationDuration: '60s' }}></rect>
            </svg>
          </div>
          
          {/* Floating Voice Icons */}
          <div className="absolute top-32 left-20 w-16 h-16 opacity-15 animate-bounce-slow">
            <svg className="w-full h-full text-purple-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 11a7 7 0 01-7 7m0 0a7 7 0 01-7-7m7 7v4m0 0H8m4 0h4m-4-8a3 3 0 01-3-3V5a3 3 0 116 0v6a3 3 0 01-3 3z" />
            </svg>
          </div>
          <div className="absolute top-60 right-32 w-12 h-12 opacity-15 animate-bounce-slow" style={{ animationDelay: '0.5s' }}>
            <svg className="w-full h-full text-pink-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 11a7 7 0 01-7 7m0 0a7 7 0 01-7-7m7 7v4m0 0H8m4 0h4m-4-8a3 3 0 01-3-3V5a3 3 0 116 0v6a3 3 0 01-3 3z" />
            </svg>
          </div>
          
          {/* Floating Globe Icons */}
          <div className="absolute bottom-32 left-32 w-14 h-14 opacity-15 animate-bounce-slow" style={{ animationDelay: '1s' }}>
            <svg className="w-full h-full text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
          </div>
          <div className="absolute bottom-20 right-24 w-10 h-10 opacity-15 animate-bounce-slow" style={{ animationDelay: '1.5s' }}>
            <svg className="w-full h-full text-purple-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
          </div>
          
          {/* Animated Connecting Lines */}
          <svg className="absolute inset-0 w-full h-full opacity-10" style={{ pointerEvents: 'none' }}>
            <defs>
              <linearGradient id="aboutLineGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#9333ea" stopOpacity="0.5" />
                <stop offset="50%" stopColor="#ec4899" stopOpacity="0.5" />
                <stop offset="100%" stopColor="#2563eb" stopOpacity="0.5" />
              </linearGradient>
            </defs>
            <line x1="10%" y1="20%" x2="30%" y2="40%" stroke="url(#aboutLineGradient)" strokeWidth="2" className="animate-pulse-slow" />
            <line x1="70%" y1="30%" x2="90%" y2="50%" stroke="url(#aboutLineGradient)" strokeWidth="2" className="animate-pulse-slow" style={{ animationDelay: '1s' }} />
            <line x1="20%" y1="70%" x2="50%" y2="80%" stroke="url(#aboutLineGradient)" strokeWidth="2" className="animate-pulse-slow" style={{ animationDelay: '2s' }} />
          </svg>
        </div>
        
        <div className="relative max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-5xl md:text-7xl font-bold text-gray-900 dark:text-white mb-6">
                About Langlex AI
              </h1>
              <p className="text-xl md:text-2xl text-gray-600 dark:text-gray-400 max-w-3xl">
                Transforming communication through advanced voice-to-voice translation technology
              </p>
            </div>
            
            {/* Improved Animated Illustration */}
            <div className="relative h-64 md:h-96 flex items-center justify-center">
              <div className="relative w-full h-full max-w-md mx-auto">
                {/* Central Voice Icon with Gradient Ring */}
                <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-20">
                  <div className="relative w-40 h-40 md:w-48 md:h-48">
                    {/* Outer Glow Ring */}
                    <div className="absolute inset-0 rounded-full bg-gradient-to-r from-purple-500 via-pink-500 to-blue-500 opacity-75 animate-pulse blur-xl"></div>
                    
                    {/* Middle Ring */}
                    <div className="absolute inset-2 rounded-full border-4 border-transparent bg-gradient-to-r from-purple-500 via-pink-500 to-blue-500 bg-clip-border animate-spin-slow" style={{ animationDuration: '8s' }}>
                      <div className="absolute inset-0 rounded-full bg-white dark:bg-gray-900 m-1"></div>
                    </div>
                    
                    {/* Inner Circle with Icon */}
                    <div className="absolute inset-4 glass-card rounded-full flex items-center justify-center shadow-2xl">
                      <svg className="w-16 h-16 md:w-20 md:h-20 text-purple-600 dark:text-purple-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11a7 7 0 01-7 7m0 0a7 7 0 01-7-7m7 7v4m0 0H8m4 0h4m-4-8a3 3 0 01-3-3V5a3 3 0 116 0v6a3 3 0 01-3 3z" />
                      </svg>
                    </div>
                  </div>
                </div>
                
                {/* Orbiting Feature Icons */}
                <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2" style={{ width: '280px', height: '280px' }}>
                  {/* Globe Icon - Top */}
                  <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2 animate-bounce-slow">
                    <div className="glass-card rounded-xl p-4 w-16 h-16 flex items-center justify-center shadow-lg hover:scale-110 transition-transform">
                      <svg className="w-8 h-8 text-purple-600 dark:text-purple-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                    </div>
                  </div>
                  
                  {/* Communication Icon - Right */}
                  <div className="absolute right-0 top-1/2 transform translate-x-1/2 -translate-y-1/2 animate-bounce-slow" style={{ animationDelay: '0.2s' }}>
                    <div className="glass-card rounded-xl p-4 w-16 h-16 flex items-center justify-center shadow-lg hover:scale-110 transition-transform">
                      <svg className="w-8 h-8 text-pink-600 dark:text-pink-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
                      </svg>
                    </div>
                  </div>
                  
                  {/* Innovation Icon - Bottom */}
                  <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 translate-y-1/2 animate-bounce-slow" style={{ animationDelay: '0.4s' }}>
                    <div className="glass-card rounded-xl p-4 w-16 h-16 flex items-center justify-center shadow-lg hover:scale-110 transition-transform">
                      <svg className="w-8 h-8 text-blue-600 dark:text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                      </svg>
                    </div>
                  </div>
                  
                  {/* AI Icon - Left */}
                  <div className="absolute left-0 top-1/2 transform -translate-x-1/2 -translate-y-1/2 animate-bounce-slow" style={{ animationDelay: '0.6s' }}>
                    <div className="glass-card rounded-xl p-4 w-16 h-16 flex items-center justify-center shadow-lg hover:scale-110 transition-transform">
                      <svg className="w-8 h-8 text-purple-600 dark:text-purple-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                      </svg>
                    </div>
                  </div>
                  
                  {/* Connecting Lines */}
                  <svg className="absolute inset-0 w-full h-full opacity-20">
                    <circle cx="50%" cy="50%" r="140" fill="none" stroke="currentColor" strokeWidth="1" strokeDasharray="4 4" className="text-purple-500 animate-spin-slow" style={{ animationDuration: '20s' }}></circle>
                  </svg>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Mission Section - Full Width */}
      <section className="w-full py-16 bg-white dark:bg-gray-800">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6">
                Our Mission
              </h2>
              <p className="text-lg text-gray-700 dark:text-gray-300 mb-4">
                At Langlex AI, we believe that language barriers should never stand in the way of communication. 
                Our mission is to make voice translation accessible, accurate, and instantaneous for everyone, 
                everywhere.
              </p>
              <p className="text-lg text-gray-700 dark:text-gray-300">
                We've built a platform that leverages cutting-edge AI technology to break down linguistic barriers, 
                enabling seamless communication across languages in real-time.
              </p>
            </div>
            <div className="glass-card rounded-2xl p-8">
              <div className="text-6xl mb-4">🌍</div>
              <h3 className="text-2xl font-semibold text-gray-900 dark:text-white mb-3">
                Global Communication
              </h3>
              <p className="text-gray-600 dark:text-gray-400">
                Connecting people across languages and cultures through advanced AI translation technology.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section - Full Width */}
      <section className="w-full py-16 bg-gray-50 dark:bg-gray-900">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-12 text-center">
            Our Values
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="glass-card rounded-2xl p-8 text-center">
              <div className="text-5xl mb-4">🎯</div>
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">
                Accuracy
              </h3>
              <p className="text-gray-600 dark:text-gray-400">
                We strive for the highest translation accuracy, continuously improving our AI models to deliver 
                precise results.
              </p>
            </div>
            <div className="glass-card rounded-2xl p-8 text-center">
              <div className="text-5xl mb-4">⚡</div>
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">
                Speed
              </h3>
              <p className="text-gray-600 dark:text-gray-400">
                Real-time translation that keeps up with natural conversation pace, ensuring seamless communication.
              </p>
            </div>
            <div className="glass-card rounded-2xl p-8 text-center">
              <div className="text-5xl mb-4">🔒</div>
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">
                Privacy
              </h3>
              <p className="text-gray-600 dark:text-gray-400">
                Your voice data is processed securely and never stored. We prioritize your privacy and data security.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Technology Section - Full Width */}
      <section className="w-full py-16 bg-white dark:bg-gray-800">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div className="glass-card rounded-2xl p-8">
              <div className="text-6xl mb-4">🤖</div>
              <h3 className="text-2xl font-semibold text-gray-900 dark:text-white mb-3">
                Advanced AI Technology
              </h3>
              <p className="text-gray-600 dark:text-gray-400 mb-4">
                Powered by state-of-the-art machine learning models trained on millions of multilingual conversations.
              </p>
              <ul className="space-y-2 text-gray-700 dark:text-gray-300">
                <li className="flex items-center gap-2">
                  <span className="text-green-500">✓</span>
                  Neural machine translation
                </li>
                <li className="flex items-center gap-2">
                  <span className="text-green-500">✓</span>
                  Real-time speech recognition
                </li>
                <li className="flex items-center gap-2">
                  <span className="text-green-500">✓</span>
                  Natural language processing
                </li>
              </ul>
            </div>
            <div>
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6">
                Built with Innovation
              </h2>
              <p className="text-lg text-gray-700 dark:text-gray-300 mb-4">
                Langlex AI combines the latest advances in artificial intelligence, natural language processing, 
                and speech recognition to deliver unparalleled translation accuracy.
              </p>
              <p className="text-lg text-gray-700 dark:text-gray-300">
                Our technology stack includes cutting-edge neural networks that understand context, tone, and 
                cultural nuances, ensuring translations that feel natural and accurate.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section - Full Width */}
      <section className="w-full py-16 bg-gradient-to-r from-purple-600 to-pink-600">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-4xl md:text-5xl font-bold text-white mb-2">250K+</div>
              <div className="text-purple-100">Active Users</div>
            </div>
            <div>
              <div className="text-4xl md:text-5xl font-bold text-white mb-2">50+</div>
              <div className="text-purple-100">Languages</div>
            </div>
            <div>
              <div className="text-4xl md:text-5xl font-bold text-white mb-2">2.5M+</div>
              <div className="text-purple-100">Translations</div>
            </div>
            <div>
              <div className="text-4xl md:text-5xl font-bold text-white mb-2">95%+</div>
              <div className="text-purple-100">Accuracy Rate</div>
            </div>
          </div>
        </div>
      </section>

      {/* Team Section - Full Width */}
      <section className="w-full py-16 bg-gray-50 dark:bg-gray-900">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-12 text-center">
            Why Choose Langlex AI?
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="glass-card rounded-2xl p-6">
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
                Easy to Use
              </h3>
              <p className="text-gray-600 dark:text-gray-400 text-sm">
                Intuitive interface that requires no training. Start translating in seconds.
              </p>
            </div>
            <div className="glass-card rounded-2xl p-6">
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
                Multi-Language
              </h3>
              <p className="text-gray-600 dark:text-gray-400 text-sm">
                Support for over 50 languages with continuous expansion.
              </p>
            </div>
            <div className="glass-card rounded-2xl p-6">
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
                Real-Time
              </h3>
              <p className="text-gray-600 dark:text-gray-400 text-sm">
                Instant translation as you speak, no waiting required.
              </p>
            </div>
            <div className="glass-card rounded-2xl p-6">
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
                Secure & Private
              </h3>
              <p className="text-gray-600 dark:text-gray-400 text-sm">
                Your data is encrypted and never stored after translation.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Developers Section - Full Width */}
      <section className="w-full py-16 bg-white dark:bg-gray-800 relative overflow-hidden">
        {/* Background Decoration */}
        <div className="absolute inset-0 opacity-5 dark:opacity-10">
          <div className="absolute top-10 left-10 w-64 h-64 bg-purple-500 rounded-full blur-3xl animate-pulse-slow"></div>
          <div className="absolute bottom-10 right-10 w-64 h-64 bg-pink-500 rounded-full blur-3xl animate-pulse-slow" style={{ animationDelay: '1s' }}></div>
        </div>
        
        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4 text-center animate-fade-in-up">
            Meet the Developers
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-400 mb-12 text-center max-w-2xl mx-auto animate-fade-in-up" style={{ animationDelay: '0.1s' }}>
            The talented team behind Langlex AI, dedicated to making voice translation accessible to everyone.
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {/* Developer 1 */}
            <div className="glass-card rounded-2xl p-8 hover:shadow-2xl transition-all duration-500 transform hover:scale-105 hover:-translate-y-2 animate-fade-in-up group" style={{ animationDelay: '0.2s' }}>
              {/* Glow Effect on Hover */}
              <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-purple-500/0 via-pink-500/0 to-blue-500/0 group-hover:from-purple-500/10 group-hover:via-pink-500/10 group-hover:to-blue-500/10 transition-all duration-500 -z-10 blur-xl"></div>
              
              <div className="flex flex-col items-center text-center">
                {/* Avatar */}
                <div className="relative mb-6 group/avatar">
                  {/* Rotating Gradient Ring */}
                  <div 
                    className="absolute inset-0 rounded-full bg-[length:200%_100%] animate-gradient p-1 animate-spin-slow" 
                    style={{ 
                      animationDuration: '3s',
                      backgroundImage: 'linear-gradient(to right, #9333ea, #ec4899, #2563eb, #9333ea)'
                    }}
                  >
                    <div className="w-full h-full rounded-full bg-white dark:bg-gray-800"></div>
                  </div>
                  
                  {/* Avatar Container */}
                  <div className="relative w-32 h-32 rounded-full bg-gradient-to-r from-purple-500 via-pink-500 to-blue-500 p-1 animate-bounce-slow">
                    <div className="w-full h-full rounded-full bg-white dark:bg-gray-800 flex items-center justify-center overflow-hidden">
                      <svg className="w-16 h-16 text-purple-600 dark:text-purple-400 transition-transform duration-300 group-hover/avatar:scale-110" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                      </svg>
                    </div>
                  </div>
                  
                  {/* Status Indicator with Pulse */}
                  <div className="absolute bottom-2 right-2 w-4 h-4 bg-green-500 rounded-full border-2 border-white dark:border-gray-800 animate-pulse">
                    <div className="absolute inset-0 bg-green-500 rounded-full animate-ping opacity-75"></div>
                  </div>
                  
                  {/* Floating Particles */}
                  <div className="absolute -top-2 -left-2 w-2 h-2 bg-purple-500 rounded-full opacity-60 animate-bounce-slow"></div>
                  <div className="absolute -bottom-1 -right-1 w-1.5 h-1.5 bg-pink-500 rounded-full opacity-60 animate-bounce-slow" style={{ animationDelay: '0.5s' }}></div>
                </div>
                
                {/* Name with Gradient Animation */}
                <h3 className="text-2xl font-bold mb-2 bg-gradient-to-r from-purple-600 via-pink-600 to-blue-600 bg-clip-text text-transparent bg-[length:200%_auto] animate-gradient">
                  Writtik Bhattacharya
                </h3>
                
                {/* Role */}
                <p className="text-purple-600 dark:text-purple-400 font-semibold mb-4 transition-colors group-hover:text-pink-600 dark:group-hover:text-pink-400">
                  Lead Web/App Developer
                </p>
                
                {/* Bio */}
                <p className="text-gray-600 dark:text-gray-400 mb-6 leading-relaxed transition-colors group-hover:text-gray-700 dark:group-hover:text-gray-300">
                  Passionate about AI and language technology. Building innovative solutions to break down communication barriers and connect people worldwide.
                </p>
                
                {/* Social Links */}
                <div className="flex items-center gap-4">
                  <a
                    href="https://www.linkedin.com/in/writtikbhattacharya/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-10 h-10 glass-element rounded-full flex items-center justify-center text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 hover:scale-110 hover:rotate-6 transition-all duration-300 animate-fade-in-up"
                    style={{ animationDelay: '0.3s' }}
                    aria-label="LinkedIn"
                  >
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6zM2 9h4v12H2z" />
                      <circle cx="4" cy="4" r="2" />
                    </svg>
                  </a>
                  <a
                    href="https://github.com/langlex"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-10 h-10 glass-element rounded-full flex items-center justify-center text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white hover:scale-110 hover:rotate-6 transition-all duration-300 animate-fade-in-up"
                    style={{ animationDelay: '0.4s' }}
                    aria-label="GitHub"
                  >
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                      <path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd" />
                    </svg>
                  </a>
                  <a
                    href="mailto:info@langlex.com"
                    className="w-10 h-10 glass-element rounded-full flex items-center justify-center text-gray-600 dark:text-gray-400 hover:text-purple-600 dark:hover:text-purple-400 hover:scale-110 hover:rotate-6 transition-all duration-300 animate-fade-in-up"
                    style={{ animationDelay: '0.5s' }}
                    aria-label="Email"
                  >
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                  </a>
                </div>
              </div>
            </div>
            
            {/* Developer 2 */}
            <div className="glass-card rounded-2xl p-8 hover:shadow-2xl transition-all duration-500 transform hover:scale-105 hover:-translate-y-2 animate-fade-in-up group" style={{ animationDelay: '0.3s' }}>
              {/* Glow Effect on Hover */}
              <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-pink-500/0 via-blue-500/0 to-purple-500/0 group-hover:from-pink-500/10 group-hover:via-blue-500/10 group-hover:to-purple-500/10 transition-all duration-500 -z-10 blur-xl"></div>
              
              <div className="flex flex-col items-center text-center">
                {/* Avatar */}
                <div className="relative mb-6 group/avatar">
                  {/* Rotating Gradient Ring */}
                  <div 
                    className="absolute inset-0 rounded-full bg-[length:200%_100%] animate-gradient p-1 animate-spin-slow" 
                    style={{ 
                      animationDuration: '3s', 
                      animationDirection: 'reverse',
                      backgroundImage: 'linear-gradient(to right, #ec4899, #2563eb, #9333ea, #ec4899)'
                    }}
                  >
                    <div className="w-full h-full rounded-full bg-white dark:bg-gray-800"></div>
                  </div>
                  
                  {/* Avatar Container */}
                  <div className="relative w-32 h-32 rounded-full bg-gradient-to-r from-pink-500 via-blue-500 to-purple-500 p-1 animate-bounce-slow" style={{ animationDelay: '0.5s' }}>
                    <div className="w-full h-full rounded-full bg-white dark:bg-gray-800 flex items-center justify-center overflow-hidden">
                      <svg className="w-16 h-16 text-pink-600 dark:text-pink-400 transition-transform duration-300 group-hover/avatar:scale-110" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                      </svg>
                    </div>
                  </div>
                  
                  {/* Status Indicator with Pulse */}
                  <div className="absolute bottom-2 right-2 w-4 h-4 bg-green-500 rounded-full border-2 border-white dark:border-gray-800 animate-pulse">
                    <div className="absolute inset-0 bg-green-500 rounded-full animate-ping opacity-75"></div>
                  </div>
                  
                  {/* Floating Particles */}
                  <div className="absolute -top-2 -left-2 w-2 h-2 bg-pink-500 rounded-full opacity-60 animate-bounce-slow"></div>
                  <div className="absolute -bottom-1 -right-1 w-1.5 h-1.5 bg-blue-500 rounded-full opacity-60 animate-bounce-slow" style={{ animationDelay: '0.5s' }}></div>
                </div>
                
                {/* Name with Gradient Animation */}
                <h3 className="text-2xl font-bold mb-2 bg-gradient-to-r from-pink-600 via-blue-600 to-purple-600 bg-clip-text text-transparent bg-[length:200%_auto] animate-gradient">
                  Stephen Fernandes
                </h3>
                
                {/* Role */}
                <p className="text-pink-600 dark:text-pink-400 font-semibold mb-4 transition-colors group-hover:text-blue-600 dark:group-hover:text-blue-400">
                  AI/ML Engineer
                </p>
                
                {/* Bio */}
                <p className="text-gray-600 dark:text-gray-400 mb-6 leading-relaxed transition-colors group-hover:text-gray-700 dark:group-hover:text-gray-300">
                  Expert in machine learning and natural language processing. Focused on creating seamless user experiences and pushing the boundaries of AI/ML technology.
                </p>
                
                {/* Social Links */}
                <div className="flex items-center gap-4">
                  <a
                    href="#"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-10 h-10 glass-element rounded-full flex items-center justify-center text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 hover:scale-110 hover:rotate-6 transition-all duration-300 animate-fade-in-up"
                    style={{ animationDelay: '0.4s' }}
                    aria-label="LinkedIn"
                  >
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6zM2 9h4v12H2z" />
                      <circle cx="4" cy="4" r="2" />
                    </svg>
                  </a>
                  <a
                    href="#"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-10 h-10 glass-element rounded-full flex items-center justify-center text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white hover:scale-110 hover:rotate-6 transition-all duration-300 animate-fade-in-up"
                    style={{ animationDelay: '0.5s' }}
                    aria-label="GitHub"
                  >
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                      <path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd" />
                    </svg>
                  </a>
                  <a
                    href="mailto:info@langlex.com"
                    className="w-10 h-10 glass-element rounded-full flex items-center justify-center text-gray-600 dark:text-gray-400 hover:text-pink-600 dark:hover:text-pink-400 hover:scale-110 hover:rotate-6 transition-all duration-300 animate-fade-in-up"
                    style={{ animationDelay: '0.6s' }}
                    aria-label="Email"
                  >
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section - Full Width */}
      <section className="w-full py-20 bg-gray-50 dark:bg-gray-900">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6">
            Ready to Break Language Barriers?
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-400 mb-8 max-w-2xl mx-auto">
            Join thousands of users who are already experiencing seamless voice translation with Langlex AI.
          </p>
          <Link
            href="/"
            className="inline-block px-8 py-4 bg-gradient-to-r from-purple-600 to-pink-600 text-white rounded-lg font-semibold hover:shadow-xl transition-all duration-300 transform hover:scale-105"
          >
            Get Started Now
          </Link>
        </div>
      </section>

      <Footer />
    </main>
  );
}
