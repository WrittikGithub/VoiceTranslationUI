import Header from "@/components/Header";
import Footer from "@/components/Footer";

export default function UpdatesPage() {
  const updates = [
    {
      version: "v2.1.0",
      date: "December 15, 2024",
      type: "Feature",
      changes: [
        "Added real-time translation preview",
        "Improved voice recognition accuracy by 15%",
        "New copy-to-clipboard functionality",
        "Enhanced dark mode theme",
        "Performance optimizations"
      ]
    },
    {
      version: "v2.0.0",
      date: "November 20, 2024",
      type: "Major Release",
      changes: [
        "Complete UI redesign with glassmorphism",
        "New voice recording interface",
        "Support for 10 additional languages",
        "Improved error handling",
        "Mobile responsiveness improvements"
      ]
    },
    {
      version: "v1.5.2",
      date: "November 5, 2024",
      type: "Patch",
      changes: [
        "Fixed audio playback issues",
        "Resolved translation timeout errors",
        "Improved browser compatibility",
        "Minor UI fixes"
      ]
    },
    {
      version: "v1.5.0",
      date: "October 25, 2024",
      type: "Feature",
      changes: [
        "Added export functionality",
        "New language selection UI",
        "Improved translation accuracy",
        "Added keyboard shortcuts"
      ]
    },
  ];

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
                <pattern id="updatesGrid" width="40" height="40" patternUnits="userSpaceOnUse">
                  <path d="M 40 0 L 0 0 0 40" fill="none" stroke="currentColor" strokeWidth="1" className="text-purple-500"/>
                </pattern>
              </defs>
              <rect width="100%" height="100%" fill="url(#updatesGrid)" className="animate-spin-slow" style={{ animationDuration: '60s' }}></rect>
            </svg>
          </div>
          
          {/* Animated Version Tags */}
          <div className="absolute top-20 left-10 w-32 h-16 glass-card rounded-lg opacity-20 animate-bounce-slow flex items-center justify-center">
            <span className="text-2xl font-bold text-purple-600">v2.1</span>
          </div>
          
          <div className="absolute top-40 right-20 w-32 h-16 glass-card rounded-lg opacity-20 animate-bounce-slow flex items-center justify-center" style={{ animationDelay: '0.5s' }}>
            <span className="text-2xl font-bold text-pink-600">v2.0</span>
          </div>
          
          {/* Floating Update Icons */}
          <div className="absolute top-32 left-20 w-16 h-16 opacity-15 animate-bounce-slow">
            <svg className="w-full h-full text-purple-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
            </svg>
          </div>
          <div className="absolute top-60 right-32 w-12 h-12 opacity-15 animate-bounce-slow" style={{ animationDelay: '0.5s' }}>
            <svg className="w-full h-full text-pink-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
            </svg>
          </div>
          
          {/* Animated Connecting Lines */}
          <svg className="absolute inset-0 w-full h-full opacity-10" style={{ pointerEvents: 'none' }}>
            <defs>
              <linearGradient id="updatesLineGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#9333ea" stopOpacity="0.5" />
                <stop offset="50%" stopColor="#ec4899" stopOpacity="0.5" />
                <stop offset="100%" stopColor="#2563eb" stopOpacity="0.5" />
              </linearGradient>
            </defs>
            <line x1="10%" y1="20%" x2="30%" y2="40%" stroke="url(#updatesLineGradient)" strokeWidth="2" className="animate-pulse-slow" />
            <line x1="70%" y1="30%" x2="90%" y2="50%" stroke="url(#updatesLineGradient)" strokeWidth="2" className="animate-pulse-slow" style={{ animationDelay: '1s' }} />
            <line x1="20%" y1="70%" x2="50%" y2="80%" stroke="url(#updatesLineGradient)" strokeWidth="2" className="animate-pulse-slow" style={{ animationDelay: '2s' }} />
          </svg>
        </div>
        
        <div className="relative max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-5xl md:text-7xl font-bold text-gray-900 dark:text-white mb-6">
                Product Updates
              </h1>
              <p className="text-xl md:text-2xl text-gray-600 dark:text-gray-400 max-w-3xl">
                Track all the latest updates and improvements to Langlex AI.
              </p>
            </div>
            
            {/* Animated Updates Illustration */}
            <div className="relative h-64 md:h-80 flex items-center justify-center">
              <div className="relative w-full h-full">
                {/* Central Update Icon */}
                <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-32 h-32 glass-card rounded-xl p-6 flex items-center justify-center animate-pulse">
                  <svg className="w-20 h-20 text-purple-600 dark:text-purple-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
                  </svg>
                </div>
                
                {/* Floating Version Numbers */}
                <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-20 h-12 glass-card rounded-lg animate-bounce-slow flex items-center justify-center">
                  <span className="text-sm font-bold text-purple-600">v2.1.0</span>
                </div>
                
                <div className="absolute bottom-0 left-0 w-20 h-12 glass-card rounded-lg animate-bounce-slow flex items-center justify-center" style={{ animationDelay: '0.3s' }}>
                  <span className="text-sm font-bold text-pink-600">v2.0.0</span>
                </div>
                
                <div className="absolute bottom-0 right-0 w-20 h-12 glass-card rounded-lg animate-bounce-slow flex items-center justify-center" style={{ animationDelay: '0.6s' }}>
                  <span className="text-sm font-bold text-blue-600">v1.5.0</span>
                </div>
                
                {/* Animated Arrows */}
                <svg className="absolute inset-0 w-full h-full opacity-40">
                  <path d="M 50% 10% L 50% 40%" fill="none" stroke="currentColor" strokeWidth="2" className="text-purple-500">
                    <animate attributeName="stroke-dasharray" values="0,1000;1000,0" dur="2s" repeatCount="indefinite"/>
                  </path>
                  <path d="M 50% 60% L 20% 80%" fill="none" stroke="currentColor" strokeWidth="2" className="text-pink-500">
                    <animate attributeName="stroke-dasharray" values="0,1000;1000,0" dur="2s" begin="0.5s" repeatCount="indefinite"/>
                  </path>
                  <path d="M 50% 60% L 80% 80%" fill="none" stroke="currentColor" strokeWidth="2" className="text-blue-500">
                    <animate attributeName="stroke-dasharray" values="0,1000;1000,0" dur="2s" begin="1s" repeatCount="indefinite"/>
                  </path>
                </svg>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="max-w-4xl mx-auto px-6 py-16">

        <div className="space-y-8">
          {updates.map((update, index) => (
            <div key={index} className="glass-card rounded-2xl p-6 md:p-8">
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center gap-3">
                  <h2 className="text-2xl font-bold text-gray-900 dark:text-white">
                    {update.version}
                  </h2>
                  <span className={`px-3 py-1 text-xs font-semibold rounded-full ${
                    update.type === 'Major Release' 
                      ? 'bg-gradient-to-r from-purple-600 to-pink-600 text-white'
                      : update.type === 'Feature'
                      ? 'bg-blue-100 dark:bg-blue-900 text-blue-700 dark:text-blue-300'
                      : 'bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300'
                  }`}>
                    {update.type}
                  </span>
                </div>
                <span className="text-sm text-gray-500 dark:text-gray-400">
                  {update.date}
                </span>
              </div>
              <ul className="space-y-2">
                {update.changes.map((change, changeIndex) => (
                  <li key={changeIndex} className="flex items-start gap-2 text-gray-700 dark:text-gray-300">
                    <span className="text-green-500 mt-1">✓</span>
                    <span>{change}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>
      <Footer />
    </main>
  );
}
