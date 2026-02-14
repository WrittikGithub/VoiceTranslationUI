import Header from "@/components/Header";
import Footer from "@/components/Footer";

export default function NewsPage() {
  const newsItems = [
    {
      date: "December 15, 2024",
      title: "Langlex AI Launches New Real-Time Translation Feature",
      excerpt: "We're excited to announce our new real-time voice translation feature that provides instant translations as you speak.",
      category: "Product Update"
    },
    {
      date: "December 1, 2024",
      title: "Support for 10 New Languages Added",
      excerpt: "Langlex AI now supports 10 additional languages, bringing our total to over 50 supported languages worldwide.",
      category: "Feature Release"
    },
    {
      date: "November 20, 2024",
      title: "New Dark Mode Theme Available",
      excerpt: "Experience Langlex AI with our new dark mode theme, designed for comfortable viewing in low-light environments.",
      category: "UI Update"
    },
    {
      date: "November 5, 2024",
      title: "Performance Improvements and Bug Fixes",
      excerpt: "We've made significant performance improvements and fixed several bugs to enhance your translation experience.",
      category: "Update"
    },
    {
      date: "October 25, 2024",
      title: "Langlex AI Reaches 100K Active Users",
      excerpt: "We're thrilled to announce that Langlex AI has reached a milestone of 100,000 active users worldwide.",
      category: "Milestone"
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
                <pattern id="newsGrid" width="40" height="40" patternUnits="userSpaceOnUse">
                  <path d="M 40 0 L 0 0 0 40" fill="none" stroke="currentColor" strokeWidth="1" className="text-purple-500"/>
                </pattern>
              </defs>
              <rect width="100%" height="100%" fill="url(#newsGrid)" className="animate-spin-slow" style={{ animationDuration: '60s' }}></rect>
            </svg>
          </div>
          
          {/* Animated News Icons */}
          <div className="absolute top-10 right-10 w-40 h-40 opacity-20 animate-bounce-slow">
            <div className="relative w-full h-full">
              <div className="absolute inset-0 glass-card rounded-lg transform rotate-6"></div>
              <div className="absolute inset-2 glass-card rounded-lg transform -rotate-3">
                <div className="w-full h-2 bg-purple-500 rounded mb-2"></div>
                <div className="w-3/4 h-2 bg-pink-500 rounded mb-2"></div>
                <div className="w-1/2 h-2 bg-blue-500 rounded"></div>
              </div>
            </div>
          </div>
          
          {/* Floating News Icons */}
          <div className="absolute top-32 left-20 w-16 h-16 opacity-15 animate-bounce-slow">
            <svg className="w-full h-full text-purple-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 20H5a2 2 0 01-2-2V6a2 2 0 012-2h10a2 2 0 012 2v1m2 13a2 2 0 01-2-2V7m2 13a2 2 0 002-2V9a2 2 0 00-2-2h-2m-4-3H9M7 16h6M7 8h6v4H7V8z" />
            </svg>
          </div>
          <div className="absolute top-60 right-32 w-12 h-12 opacity-15 animate-bounce-slow" style={{ animationDelay: '0.5s' }}>
            <svg className="w-full h-full text-pink-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M11 5.882V19.24a1.76 1.76 0 01-3.417.592l-2.147-6.15M18 13a3 3 0 100-6M5.436 13.683A4.001 4.001 0 017 6h1.832c4.1 0 7.625-1.234 9.168-3v14c-1.543-1.766-5.067-3-9.168-3H7a3.988 3.988 0 01-1.564-.317z" />
            </svg>
          </div>
          
          {/* Animated Connecting Lines */}
          <svg className="absolute inset-0 w-full h-full opacity-10" style={{ pointerEvents: 'none' }}>
            <defs>
              <linearGradient id="newsLineGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#9333ea" stopOpacity="0.5" />
                <stop offset="50%" stopColor="#ec4899" stopOpacity="0.5" />
                <stop offset="100%" stopColor="#2563eb" stopOpacity="0.5" />
              </linearGradient>
            </defs>
            <line x1="10%" y1="20%" x2="30%" y2="40%" stroke="url(#newsLineGradient)" strokeWidth="2" className="animate-pulse-slow" />
            <line x1="70%" y1="30%" x2="90%" y2="50%" stroke="url(#newsLineGradient)" strokeWidth="2" className="animate-pulse-slow" style={{ animationDelay: '1s' }} />
            <line x1="20%" y1="70%" x2="50%" y2="80%" stroke="url(#newsLineGradient)" strokeWidth="2" className="animate-pulse-slow" style={{ animationDelay: '2s' }} />
          </svg>
        </div>
        
        <div className="relative max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-5xl md:text-7xl font-bold text-gray-900 dark:text-white mb-6">
                News & Updates
              </h1>
              <p className="text-xl md:text-2xl text-gray-600 dark:text-gray-400 max-w-3xl">
                Stay informed about the latest features, updates, and announcements from Langlex AI.
              </p>
            </div>
            
            {/* Animated News Illustration */}
            <div className="relative h-64 md:h-80 flex items-center justify-center">
              <div className="relative w-full h-full">
                {/* Central Megaphone */}
                <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-32 h-32 glass-card rounded-xl p-6 flex items-center justify-center animate-pulse">
                  <svg className="w-20 h-20 text-purple-600 dark:text-purple-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15.536 8.464a5 5 0 010 7.072m2.828-9.9a9 9 0 010 12.728M5.586 15H4a1 1 0 01-1-1v-4a1 1 0 011-1h1.586l4.707-4.707C10.923 3.663 12 4.109 12 5v14c0 .891-1.077 1.337-1.707.707L5.586 15z" />
                  </svg>
                </div>
                
                {/* Floating News Cards */}
                <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-24 h-16 glass-card rounded-lg animate-bounce-slow flex items-center justify-center">
                  <span className="text-xs font-semibold text-purple-600">NEW</span>
                </div>
                
                <div className="absolute bottom-0 left-0 w-24 h-16 glass-card rounded-lg animate-bounce-slow flex items-center justify-center" style={{ animationDelay: '0.3s' }}>
                  <span className="text-xs font-semibold text-pink-600">UPDATE</span>
                </div>
                
                <div className="absolute bottom-0 right-0 w-24 h-16 glass-card rounded-lg animate-bounce-slow flex items-center justify-center" style={{ animationDelay: '0.6s' }}>
                  <span className="text-xs font-semibold text-blue-600">FEATURE</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="max-w-4xl mx-auto px-6 py-16">
        <div className="space-y-6">
          {newsItems.map((news, index) => (
            <div key={index} className="glass-card rounded-2xl p-6 md:p-8 hover:shadow-xl transition-all duration-300">
              <div className="flex items-start justify-between mb-4">
                <span className="px-3 py-1 bg-gradient-to-r from-purple-600 to-pink-600 text-white text-xs font-semibold rounded-full">
                  {news.category}
                </span>
                <span className="text-sm text-gray-500 dark:text-gray-400">
                  {news.date}
                </span>
              </div>
              <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-3">
                {news.title}
              </h2>
              <p className="text-gray-600 dark:text-gray-400">
                {news.excerpt}
              </p>
            </div>
          ))}
        </div>
      </section>
      <Footer />
    </main>
  );
}
