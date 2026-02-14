import Header from "@/components/Header";
import Footer from "@/components/Footer";

export default function DocumentationPage() {
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
                <pattern id="docGrid" width="40" height="40" patternUnits="userSpaceOnUse">
                  <path d="M 40 0 L 0 0 0 40" fill="none" stroke="currentColor" strokeWidth="1" className="text-purple-500"/>
                </pattern>
              </defs>
              <rect width="100%" height="100%" fill="url(#docGrid)" className="animate-spin-slow" style={{ animationDuration: '60s' }}></rect>
            </svg>
          </div>
          
          {/* Animated Code Brackets */}
          <div className="absolute top-20 left-10 text-6xl md:text-8xl font-bold text-purple-500/10 dark:text-purple-400/10 animate-pulse-slow font-mono">
            {'{'}
          </div>
          <div className="absolute bottom-20 right-10 text-6xl md:text-8xl font-bold text-pink-500/10 dark:text-pink-400/10 animate-pulse-slow font-mono" style={{ animationDelay: '1s' }}>
            {'}'}
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
              <linearGradient id="docLineGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#9333ea" stopOpacity="0.5" />
                <stop offset="50%" stopColor="#ec4899" stopOpacity="0.5" />
                <stop offset="100%" stopColor="#2563eb" stopOpacity="0.5" />
              </linearGradient>
            </defs>
            <line x1="10%" y1="20%" x2="30%" y2="40%" stroke="url(#docLineGradient)" strokeWidth="2" className="animate-pulse-slow" />
            <line x1="70%" y1="30%" x2="90%" y2="50%" stroke="url(#docLineGradient)" strokeWidth="2" className="animate-pulse-slow" style={{ animationDelay: '1s' }} />
            <line x1="20%" y1="70%" x2="50%" y2="80%" stroke="url(#docLineGradient)" strokeWidth="2" className="animate-pulse-slow" style={{ animationDelay: '2s' }} />
          </svg>
        </div>
        
        <div className="relative max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-5xl md:text-7xl font-bold text-gray-900 dark:text-white mb-6">
                Documentation
              </h1>
              <p className="text-xl md:text-2xl text-gray-600 dark:text-gray-400 max-w-3xl">
                Comprehensive technical documentation for Langlex AI API and integration.
              </p>
            </div>
            
            {/* Animated Documentation Illustration */}
            <div className="relative h-64 md:h-80 flex items-center justify-center">
              <div className="relative w-full h-full">
                {/* Central Book/Document */}
                <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-32 h-40 glass-card rounded-lg p-4 flex flex-col items-center justify-center animate-pulse">
                  <svg className="w-16 h-20 text-purple-600 dark:text-purple-400 mb-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                  </svg>
                  <div className="w-12 h-1 bg-gray-300 dark:bg-gray-600 rounded mb-1"></div>
                  <div className="w-10 h-1 bg-gray-300 dark:bg-gray-600 rounded"></div>
                </div>
                
                {/* Floating Code Elements */}
                <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2 glass-card rounded-lg px-3 py-2 animate-bounce-slow">
                  <span className="text-xs font-mono text-green-600 dark:text-green-400">API</span>
                </div>
                
                <div className="absolute bottom-0 left-0 glass-card rounded-lg px-3 py-2 animate-bounce-slow" style={{ animationDelay: '0.3s' }}>
                  <span className="text-xs font-mono text-blue-600 dark:text-blue-400">REST</span>
                </div>
                
                <div className="absolute bottom-0 right-0 glass-card rounded-lg px-3 py-2 animate-bounce-slow" style={{ animationDelay: '0.6s' }}>
                  <span className="text-xs font-mono text-purple-600 dark:text-purple-400">JSON</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="max-w-4xl mx-auto px-6 py-16">
        <div className="glass-card rounded-2xl p-8 md:p-12">

          <div className="space-y-8">
            <div>
              <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">
                API Overview
              </h2>
              <div className="space-y-4 text-gray-700 dark:text-gray-300">
                <p>
                  Langlex AI provides a RESTful API for voice translation services. 
                  Our API allows you to integrate voice-to-text translation capabilities into your applications.
                </p>
                <div className="glass-element p-4 rounded-lg">
                  <strong>Base URL:</strong> <code className="text-purple-600 dark:text-purple-400">https://api.langlex.com/v1</code>
                </div>
              </div>
            </div>

            <div>
              <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">
                Authentication
              </h2>
              <div className="space-y-3 text-gray-700 dark:text-gray-300">
                <p>All API requests require authentication using an API key:</p>
                <div className="glass-element p-4 rounded-lg">
                  <pre className="text-sm overflow-x-auto">
{`Authorization: Bearer YOUR_API_KEY`}
                  </pre>
                </div>
              </div>
            </div>

            <div>
              <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">
                Endpoints
              </h2>
              <div className="space-y-4 text-gray-700 dark:text-gray-300">
                <div className="glass-element p-4 rounded-lg">
                  <h3 className="font-semibold mb-2">POST /translate-voice</h3>
                  <p className="text-sm">Translate voice input to text in the target language.</p>
                  <pre className="text-xs mt-2 bg-gray-100 dark:bg-gray-800 p-2 rounded overflow-x-auto">
{`{
  "audio": "base64_encoded_audio",
  "source_language": "en",
  "target_language": "es"
}`}
                  </pre>
                </div>
              </div>
            </div>

            <div>
              <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">
                Rate Limits
              </h2>
              <div className="space-y-3 text-gray-700 dark:text-gray-300">
                <ul className="list-disc list-inside space-y-2 ml-4">
                  <li>Free Plan: 100 requests per day</li>
                  <li>Pro Plan: 1,000 requests per day</li>
                  <li>Team Plan: 10,000 requests per day</li>
                </ul>
              </div>
            </div>

            <div>
              <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">
                SDKs & Libraries
              </h2>
              <div className="space-y-3 text-gray-700 dark:text-gray-300">
                <p>Official SDKs available for:</p>
                <ul className="list-disc list-inside space-y-2 ml-4">
                  <li>JavaScript/TypeScript</li>
                  <li>Python</li>
                  <li>Java</li>
                  <li>PHP</li>
                </ul>
              </div>
            </div>

            <div>
              <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">
                Support
              </h2>
              <div className="space-y-3 text-gray-700 dark:text-gray-300">
                <p>
                  For API support, contact us at <a href="mailto:info@langlex.com" className="text-purple-600 dark:text-purple-400 hover:underline">info@langlex.com</a>
                </p>
                <p>
                  View API reference documentation: <a href="/api-reference" className="text-purple-600 dark:text-purple-400 hover:underline">API Reference</a>
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </main>
  );
}
