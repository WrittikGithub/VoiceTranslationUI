import Header from "@/components/Header";
import Footer from "@/components/Footer";

export default function UserGuidePage() {
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
                <pattern id="guideGrid" width="40" height="40" patternUnits="userSpaceOnUse">
                  <path d="M 40 0 L 0 0 0 40" fill="none" stroke="currentColor" strokeWidth="1" className="text-purple-500"/>
                </pattern>
              </defs>
              <rect width="100%" height="100%" fill="url(#guideGrid)" className="animate-spin-slow" style={{ animationDuration: '60s' }}></rect>
            </svg>
          </div>
          
          {/* Animated Book/Document Icons */}
          <div className="absolute top-10 right-10 w-40 h-40 opacity-20">
            <div className="relative w-full h-full animate-bounce-slow">
              <div className="absolute inset-0 glass-card rounded-lg transform rotate-6"></div>
              <div className="absolute inset-2 glass-card rounded-lg transform -rotate-3"></div>
              <div className="absolute inset-4 glass-card rounded-lg"></div>
            </div>
          </div>
          
          {/* Floating Document Icons */}
          <div className="absolute top-32 left-20 w-16 h-16 opacity-15 animate-bounce-slow">
            <svg className="w-full h-full text-purple-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
            </svg>
          </div>
          <div className="absolute top-60 right-32 w-12 h-12 opacity-15 animate-bounce-slow" style={{ animationDelay: '0.5s' }}>
            <svg className="w-full h-full text-pink-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
            </svg>
          </div>
          
          {/* Animated Connecting Lines */}
          <svg className="absolute inset-0 w-full h-full opacity-10" style={{ pointerEvents: 'none' }}>
            <defs>
              <linearGradient id="guideLineGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#9333ea" stopOpacity="0.5" />
                <stop offset="50%" stopColor="#ec4899" stopOpacity="0.5" />
                <stop offset="100%" stopColor="#2563eb" stopOpacity="0.5" />
              </linearGradient>
            </defs>
            <line x1="10%" y1="20%" x2="30%" y2="40%" stroke="url(#guideLineGradient)" strokeWidth="2" className="animate-pulse-slow" />
            <line x1="70%" y1="30%" x2="90%" y2="50%" stroke="url(#guideLineGradient)" strokeWidth="2" className="animate-pulse-slow" style={{ animationDelay: '1s' }} />
            <line x1="20%" y1="70%" x2="50%" y2="80%" stroke="url(#guideLineGradient)" strokeWidth="2" className="animate-pulse-slow" style={{ animationDelay: '2s' }} />
          </svg>
        </div>
        
        <div className="relative max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-5xl md:text-7xl font-bold text-gray-900 dark:text-white mb-6">
                User Guide
              </h1>
              <p className="text-xl md:text-2xl text-gray-600 dark:text-gray-400 max-w-3xl">
                Learn how to get the most out of Langlex AI voice translation platform.
              </p>
            </div>
            
            {/* Animated Guide Illustration */}
            <div className="relative h-64 md:h-80 flex items-center justify-center">
              <div className="relative w-full h-full">
                {/* Central Book Icon */}
                <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-32 h-32 glass-card rounded-xl p-6 flex items-center justify-center animate-pulse">
                  <svg className="w-20 h-20 text-purple-600 dark:text-purple-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                  </svg>
                </div>
                
                {/* Floating Step Numbers */}
                <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-16 h-16 rounded-full bg-gradient-to-r from-purple-500 to-pink-500 flex items-center justify-center text-white font-bold text-xl animate-bounce-slow">
                  1
                </div>
                
                <div className="absolute right-0 top-1/2 transform translate-x-1/2 -translate-y-1/2 w-16 h-16 rounded-full bg-gradient-to-r from-pink-500 to-blue-500 flex items-center justify-center text-white font-bold text-xl animate-bounce-slow" style={{ animationDelay: '0.3s' }}>
                  2
                </div>
                
                <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 translate-y-1/2 w-16 h-16 rounded-full bg-gradient-to-r from-blue-500 to-purple-500 flex items-center justify-center text-white font-bold text-xl animate-bounce-slow" style={{ animationDelay: '0.6s' }}>
                  3
                </div>
                
                {/* Connecting Arrows */}
                <svg className="absolute inset-0 w-full h-full opacity-40">
                  <path d="M 50% 10% Q 60% 30% 70% 40%" fill="none" stroke="currentColor" strokeWidth="2" className="text-purple-500">
                    <animate attributeName="stroke-dasharray" values="0,1000;1000,0" dur="2s" repeatCount="indefinite"/>
                  </path>
                  <path d="M 70% 50% Q 60% 70% 50% 90%" fill="none" stroke="currentColor" strokeWidth="2" className="text-pink-500">
                    <animate attributeName="stroke-dasharray" values="0,1000;1000,0" dur="2s" begin="0.5s" repeatCount="indefinite"/>
                  </path>
                </svg>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Content Section - Full Width */}
      <section className="w-full py-16 bg-white dark:bg-gray-800">
        <div className="max-w-7xl mx-auto px-6">
          <div className="space-y-12">
            <div className="glass-card rounded-2xl p-8 md:p-10">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-6">
                Getting Started
              </h2>
              <div className="space-y-4 text-gray-700 dark:text-gray-300">
                <p className="text-lg leading-relaxed">
                  Welcome to Langlex AI! Our platform makes voice-to-voice translation simple and intuitive. 
                  Follow these steps to get started:
                </p>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-6">
                  <div className="flex items-start gap-3 p-4 bg-gray-50 dark:bg-gray-900/50 rounded-lg">
                    <span className="text-purple-600 dark:text-purple-400 font-bold text-xl">1</span>
                    <span>Click the record button on the main page</span>
                  </div>
                  <div className="flex items-start gap-3 p-4 bg-gray-50 dark:bg-gray-900/50 rounded-lg">
                    <span className="text-purple-600 dark:text-purple-400 font-bold text-xl">2</span>
                    <span>Speak naturally into your microphone</span>
                  </div>
                  <div className="flex items-start gap-3 p-4 bg-gray-50 dark:bg-gray-900/50 rounded-lg">
                    <span className="text-purple-600 dark:text-purple-400 font-bold text-xl">3</span>
                    <span>Select your source and target languages</span>
                  </div>
                  <div className="flex items-start gap-3 p-4 bg-gray-50 dark:bg-gray-900/50 rounded-lg">
                    <span className="text-purple-600 dark:text-purple-400 font-bold text-xl">4</span>
                    <span>View your translated text in real-time</span>
                  </div>
                  <div className="flex items-start gap-3 p-4 bg-gray-50 dark:bg-gray-900/50 rounded-lg md:col-span-2">
                    <span className="text-purple-600 dark:text-purple-400 font-bold text-xl">5</span>
                    <span>Copy or export your translation</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="glass-card rounded-2xl p-8 md:p-10">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-6">
                Voice Recording Tips
              </h2>
              <p className="text-lg mb-6">For best results, follow these tips:</p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="flex items-start gap-3 p-4 bg-green-50 dark:bg-green-900/20 rounded-lg">
                  <span className="text-green-500 text-xl">✓</span>
                  <span className="text-gray-700 dark:text-gray-300">Speak clearly and at a moderate pace</span>
                </div>
                <div className="flex items-start gap-3 p-4 bg-green-50 dark:bg-green-900/20 rounded-lg">
                  <span className="text-green-500 text-xl">✓</span>
                  <span className="text-gray-700 dark:text-gray-300">Minimize background noise</span>
                </div>
                <div className="flex items-start gap-3 p-4 bg-green-50 dark:bg-green-900/20 rounded-lg">
                  <span className="text-green-500 text-xl">✓</span>
                  <span className="text-gray-700 dark:text-gray-300">Use a good quality microphone if possible</span>
                </div>
                <div className="flex items-start gap-3 p-4 bg-green-50 dark:bg-green-900/20 rounded-lg">
                  <span className="text-green-500 text-xl">✓</span>
                  <span className="text-gray-700 dark:text-gray-300">Speak in complete sentences</span>
                </div>
                <div className="flex items-start gap-3 p-4 bg-green-50 dark:bg-green-900/20 rounded-lg md:col-span-2">
                  <span className="text-green-500 text-xl">✓</span>
                  <span className="text-gray-700 dark:text-gray-300">Pause between thoughts for better accuracy</span>
                </div>
              </div>
            </div>

            <div className="glass-card rounded-2xl p-8 md:p-10">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-6">
                Language Selection
              </h2>
              <p className="text-lg leading-relaxed mb-6">
                Langlex AI supports over 50 languages. You can:
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="p-4 bg-purple-50 dark:bg-purple-900/20 rounded-lg">
                  <h4 className="font-semibold text-gray-900 dark:text-white mb-2">Auto-Detect</h4>
                  <p className="text-gray-600 dark:text-gray-400 text-sm">Automatically detect source language</p>
                </div>
                <div className="p-4 bg-purple-50 dark:bg-purple-900/20 rounded-lg">
                  <h4 className="font-semibold text-gray-900 dark:text-white mb-2">Manual Selection</h4>
                  <p className="text-gray-600 dark:text-gray-400 text-sm">Manually select both source and target languages</p>
                </div>
                <div className="p-4 bg-purple-50 dark:bg-purple-900/20 rounded-lg">
                  <h4 className="font-semibold text-gray-900 dark:text-white mb-2">Switch Anytime</h4>
                  <p className="text-gray-600 dark:text-gray-400 text-sm">Change languages during recording</p>
                </div>
                <div className="p-4 bg-purple-50 dark:bg-purple-900/20 rounded-lg">
                  <h4 className="font-semibold text-gray-900 dark:text-white mb-2">Any Pair</h4>
                  <p className="text-gray-600 dark:text-gray-400 text-sm">Translate between any supported language pair</p>
                </div>
              </div>
            </div>

            <div className="glass-card rounded-2xl p-8 md:p-10">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-6">
                Features & Shortcuts
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="glass-element p-6 rounded-lg text-center">
                  <div className="text-4xl mb-3">⌨️</div>
                  <h4 className="font-semibold text-gray-900 dark:text-white mb-2">Spacebar</h4>
                  <p className="text-sm text-gray-600 dark:text-gray-400">Hold to record (when enabled)</p>
                </div>
                <div className="glass-element p-6 rounded-lg text-center">
                  <div className="text-4xl mb-3">📋</div>
                  <h4 className="font-semibold text-gray-900 dark:text-white mb-2">Copy Button</h4>
                  <p className="text-sm text-gray-600 dark:text-gray-400">Instantly copy translated text</p>
                </div>
                <div className="glass-element p-6 rounded-lg text-center">
                  <div className="text-4xl mb-3">💾</div>
                  <h4 className="font-semibold text-gray-900 dark:text-white mb-2">Export</h4>
                  <p className="text-sm text-gray-600 dark:text-gray-400">Save translations in various formats</p>
                </div>
              </div>
            </div>

            <div className="glass-card rounded-2xl p-8 md:p-10">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-6">
                Troubleshooting
              </h2>
              <div className="space-y-6">
                <div className="p-6 bg-yellow-50 dark:bg-yellow-900/20 rounded-lg">
                  <h3 className="font-semibold text-gray-900 dark:text-white mb-2 text-lg">Microphone not working?</h3>
                  <p className="text-gray-700 dark:text-gray-300">Check your browser permissions and ensure your microphone is enabled. Go to browser settings and allow microphone access for this site.</p>
                </div>
                <div className="p-6 bg-yellow-50 dark:bg-yellow-900/20 rounded-lg">
                  <h3 className="font-semibold text-gray-900 dark:text-white mb-2 text-lg">Translation accuracy issues?</h3>
                  <p className="text-gray-700 dark:text-gray-300">Try speaking more clearly, reducing background noise, or speaking at a slower pace. Ensure you're in a quiet environment.</p>
                </div>
                <div className="p-6 bg-blue-50 dark:bg-blue-900/20 rounded-lg">
                  <h3 className="font-semibold text-gray-900 dark:text-white mb-2 text-lg">Need help?</h3>
                  <p className="text-gray-700 dark:text-gray-300">Contact our support team at <a href="mailto:info@langlex.com" className="text-purple-600 dark:text-purple-400 hover:underline font-medium">info@langlex.com</a> or call us at <a href="tel:+917892242495" className="text-purple-600 dark:text-purple-400 hover:underline font-medium">91 - 789 - 224 - 2495</a></p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </main>
  );
}

