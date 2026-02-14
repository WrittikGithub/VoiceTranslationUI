import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Link from "next/link";

export default function APIsPage() {
  const endpoints = [
    {
      method: "POST",
      path: "/api/v1/translate-voice",
      description: "Translate voice input to text in the target language",
      parameters: [
        { name: "audio", type: "string (base64)", required: true, description: "Base64 encoded audio file" },
        { name: "source_language", type: "string", required: false, description: "Source language code (auto-detect if not provided)" },
        { name: "target_language", type: "string", required: true, description: "Target language code" }
      ],
      example: {
        request: `{
  "audio": "base64_encoded_audio_data",
  "source_language": "en",
  "target_language": "es"
}`,
        response: `{
  "success": true,
  "translated_text": "Hola, ¿cómo estás?",
  "source_language": "en",
  "target_language": "es",
  "confidence": 0.95
}`
      }
    },
    {
      method: "GET",
      path: "/api/v1/languages",
      description: "Get list of supported languages",
      parameters: [],
      example: {
        request: "GET /api/v1/languages",
        response: `{
  "success": true,
  "languages": [
    { "code": "en", "name": "English" },
    { "code": "es", "name": "Spanish" },
    { "code": "fr", "name": "French" }
  ]
}`
      }
    }
  ];

  const sdks = [
    { name: "JavaScript/TypeScript", icon: "📦", link: "#" },
    { name: "Python", icon: "🐍", link: "#" },
    { name: "Java", icon: "☕", link: "#" },
    { name: "PHP", icon: "🐘", link: "#" },
    { name: "Ruby", icon: "💎", link: "#" },
    { name: "Go", icon: "🐹", link: "#" }
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
                <pattern id="apisGrid" width="40" height="40" patternUnits="userSpaceOnUse">
                  <path d="M 40 0 L 0 0 0 40" fill="none" stroke="currentColor" strokeWidth="1" className="text-purple-500"/>
                </pattern>
              </defs>
              <rect width="100%" height="100%" fill="url(#apisGrid)" className="animate-spin-slow" style={{ animationDuration: '60s' }}></rect>
            </svg>
          </div>
          
          {/* Animated Code Brackets */}
          <div className="absolute top-20 left-10 text-6xl md:text-8xl font-bold text-purple-500/10 dark:text-purple-400/10 animate-pulse-slow font-mono">
            {'{'}
          </div>
          <div className="absolute bottom-20 right-10 text-6xl md:text-8xl font-bold text-pink-500/10 dark:text-pink-400/10 animate-pulse-slow font-mono" style={{ animationDelay: '1s' }}>
            {'}'}
          </div>
          
          {/* Floating Code Icons */}
          <div className="absolute top-32 left-20 w-16 h-16 opacity-15 animate-bounce-slow">
            <svg className="w-full h-full text-purple-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
            </svg>
          </div>
          <div className="absolute top-60 right-32 w-12 h-12 opacity-15 animate-bounce-slow" style={{ animationDelay: '0.5s' }}>
            <svg className="w-full h-full text-pink-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M8 9l3 3-3 3m5 0h3M5 20h14a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
            </svg>
          </div>
          
          {/* Animated Connecting Lines */}
          <svg className="absolute inset-0 w-full h-full opacity-10" style={{ pointerEvents: 'none' }}>
            <defs>
              <linearGradient id="apisLineGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#9333ea" stopOpacity="0.5" />
                <stop offset="50%" stopColor="#ec4899" stopOpacity="0.5" />
                <stop offset="100%" stopColor="#2563eb" stopOpacity="0.5" />
              </linearGradient>
            </defs>
            <line x1="10%" y1="20%" x2="30%" y2="40%" stroke="url(#apisLineGradient)" strokeWidth="2" className="animate-pulse-slow" />
            <line x1="70%" y1="30%" x2="90%" y2="50%" stroke="url(#apisLineGradient)" strokeWidth="2" className="animate-pulse-slow" style={{ animationDelay: '1s' }} />
            <line x1="20%" y1="70%" x2="50%" y2="80%" stroke="url(#apisLineGradient)" strokeWidth="2" className="animate-pulse-slow" style={{ animationDelay: '2s' }} />
          </svg>
        </div>
        
        <div className="relative max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-5xl md:text-7xl font-bold text-gray-900 dark:text-white mb-6">
                API Documentation
              </h1>
              <p className="text-xl md:text-2xl text-gray-600 dark:text-gray-400 max-w-3xl">
                Integrate Langlex AI voice translation into your applications with our powerful REST API.
              </p>
            </div>
            
            {/* Animated API Illustration */}
            <div className="relative h-64 md:h-80 flex items-center justify-center">
              <div className="relative w-full h-full">
                {/* Central API Icon */}
                <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-32 h-32 glass-card rounded-xl p-6 flex items-center justify-center animate-pulse">
                  <svg className="w-20 h-20 text-purple-600 dark:text-purple-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
                  </svg>
                </div>
                
                {/* Floating Endpoint Cards */}
                <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2 glass-card rounded-lg px-4 py-2 animate-bounce-slow">
                  <span className="text-xs font-mono text-green-600 dark:text-green-400">POST</span>
                  <span className="text-xs font-mono text-gray-600 dark:text-gray-400 ml-2">/api/v1</span>
                </div>
                
                <div className="absolute bottom-0 left-0 glass-card rounded-lg px-4 py-2 animate-bounce-slow" style={{ animationDelay: '0.3s' }}>
                  <span className="text-xs font-mono text-blue-600 dark:text-blue-400">GET</span>
                  <span className="text-xs font-mono text-gray-600 dark:text-gray-400 ml-2">/languages</span>
                </div>
                
                <div className="absolute bottom-0 right-0 glass-card rounded-lg px-4 py-2 animate-bounce-slow" style={{ animationDelay: '0.6s' }}>
                  <span className="text-xs font-mono text-purple-600 dark:text-purple-400">JSON</span>
                </div>
                
                {/* Animated Connection Lines */}
                <svg className="absolute inset-0 w-full h-full opacity-30">
                  <line x1="50%" y1="10%" x2="50%" y2="40%" stroke="currentColor" strokeWidth="2" className="text-green-500">
                    <animate attributeName="opacity" values="0.3;1;0.3" dur="2s" repeatCount="indefinite"/>
                  </line>
                  <line x1="50%" y1="60%" x2="20%" y2="80%" stroke="currentColor" strokeWidth="2" className="text-blue-500">
                    <animate attributeName="opacity" values="0.3;1;0.3" dur="2s" begin="0.5s" repeatCount="indefinite"/>
                  </line>
                  <line x1="50%" y1="60%" x2="80%" y2="80%" stroke="currentColor" strokeWidth="2" className="text-purple-500">
                    <animate attributeName="opacity" values="0.3;1;0.3" dur="2s" begin="1s" repeatCount="indefinite"/>
                  </line>
                </svg>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Overview Section - Full Width */}
      <section className="w-full py-16 bg-white dark:bg-gray-800">
        <div className="max-w-7xl mx-auto px-6">
          <div className="glass-card rounded-2xl p-8 md:p-10 mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-6">
              API Overview
            </h2>
            <p className="text-lg text-gray-700 dark:text-gray-300 mb-6 leading-relaxed">
              Langlex AI provides a RESTful API for voice translation services. Our API allows you to integrate 
              voice-to-text translation capabilities into your applications seamlessly.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="p-6 bg-purple-50 dark:bg-purple-900/20 rounded-lg">
                <h3 className="font-semibold text-gray-900 dark:text-white mb-2">Base URL</h3>
                <code className="text-sm text-purple-600 dark:text-purple-400">https://api.langlex.com/v1</code>
              </div>
              <div className="p-6 bg-purple-50 dark:bg-purple-900/20 rounded-lg">
                <h3 className="font-semibold text-gray-900 dark:text-white mb-2">Authentication</h3>
                <code className="text-sm text-purple-600 dark:text-purple-400">Bearer Token</code>
              </div>
              <div className="p-6 bg-purple-50 dark:bg-purple-900/20 rounded-lg">
                <h3 className="font-semibold text-gray-900 dark:text-white mb-2">Format</h3>
                <code className="text-sm text-purple-600 dark:text-purple-400">JSON</code>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Authentication Section - Full Width */}
      <section className="w-full py-16 bg-gray-50 dark:bg-gray-900">
        <div className="max-w-7xl mx-auto px-6">
          <div className="glass-card rounded-2xl p-8 md:p-10">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-6">
              Authentication
            </h2>
            <p className="text-lg text-gray-700 dark:text-gray-300 mb-6">
              All API requests require authentication using an API key. Include your API key in the Authorization header:
            </p>
            <div className="bg-gray-900 dark:bg-black rounded-lg p-6 overflow-x-auto">
              <pre className="text-green-400 text-sm">
{`Authorization: Bearer YOUR_API_KEY`}
              </pre>
            </div>
            <p className="text-sm text-gray-600 dark:text-gray-400 mt-4">
              Get your API key from your account dashboard after signing up for a Pro or Team plan.
            </p>
          </div>
        </div>
      </section>

      {/* Endpoints Section - Full Width */}
      <section className="w-full py-16 bg-white dark:bg-gray-800">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-12">
            API Endpoints
          </h2>
          <div className="space-y-8">
            {endpoints.map((endpoint, index) => (
              <div key={index} className="glass-card rounded-2xl p-8 md:p-10">
                <div className="flex items-center gap-4 mb-6">
                  <span className={`px-4 py-2 rounded-lg font-semibold text-sm ${
                    endpoint.method === 'POST' 
                      ? 'bg-green-100 dark:bg-green-900/30 text-green-700 dark:text-green-400'
                      : 'bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-400'
                  }`}>
                    {endpoint.method}
                  </span>
                  <code className="text-lg font-mono text-gray-900 dark:text-white">{endpoint.path}</code>
                </div>
                <p className="text-lg text-gray-700 dark:text-gray-300 mb-6">
                  {endpoint.description}
                </p>
                
                {endpoint.parameters.length > 0 && (
                  <div className="mb-6">
                    <h4 className="font-semibold text-gray-900 dark:text-white mb-4">Parameters</h4>
                    <div className="overflow-x-auto">
                      <table className="w-full border-collapse">
                        <thead>
                          <tr className="border-b border-gray-200 dark:border-gray-700">
                            <th className="text-left py-2 px-4 font-semibold text-gray-900 dark:text-white">Name</th>
                            <th className="text-left py-2 px-4 font-semibold text-gray-900 dark:text-white">Type</th>
                            <th className="text-left py-2 px-4 font-semibold text-gray-900 dark:text-white">Required</th>
                            <th className="text-left py-2 px-4 font-semibold text-gray-900 dark:text-white">Description</th>
                          </tr>
                        </thead>
                        <tbody>
                          {endpoint.parameters.map((param, idx) => (
                            <tr key={idx} className="border-b border-gray-200 dark:border-gray-700">
                              <td className="py-2 px-4 text-gray-700 dark:text-gray-300 font-mono text-sm">{param.name}</td>
                              <td className="py-2 px-4 text-gray-700 dark:text-gray-300 text-sm">{param.type}</td>
                              <td className="py-2 px-4 text-gray-700 dark:text-gray-300 text-sm">
                                {param.required ? <span className="text-red-500">Yes</span> : <span className="text-gray-500">No</span>}
                              </td>
                              <td className="py-2 px-4 text-gray-700 dark:text-gray-300 text-sm">{param.description}</td>
                            </tr>
                          ))}
                        </tbody>
                      </table>
                    </div>
                  </div>
                )}

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <h4 className="font-semibold text-gray-900 dark:text-white mb-3">Request Example</h4>
                    <div className="bg-gray-900 dark:bg-black rounded-lg p-4 overflow-x-auto">
                      <pre className="text-green-400 text-xs">{endpoint.example.request}</pre>
                    </div>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 dark:text-white mb-3">Response Example</h4>
                    <div className="bg-gray-900 dark:bg-black rounded-lg p-4 overflow-x-auto">
                      <pre className="text-green-400 text-xs">{endpoint.example.response}</pre>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SDKs Section - Full Width */}
      {/* <section className="w-full py-16 bg-gray-50 dark:bg-gray-900">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-12 text-center">
            Official SDKs
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
            {sdks.map((sdk, index) => (
              <a
                key={index}
                href={sdk.link}
                className="glass-card rounded-2xl p-6 text-center hover:scale-105 transition-all duration-300 group"
              >
                <div className="text-4xl mb-3">{sdk.icon}</div>
                <h3 className="font-semibold text-gray-900 dark:text-white group-hover:text-purple-600 dark:group-hover:text-purple-400 transition-colors">
                  {sdk.name}
                </h3>
              </a>
            ))}
          </div>
        </div>
      </section> */}

      {/* Rate Limits Section - Full Width */}
      <section className="w-full py-16 bg-white dark:bg-gray-800">
        <div className="max-w-7xl mx-auto px-6">
          <div className="glass-card rounded-2xl p-8 md:p-10">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-6">
              Rate Limits
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="p-6 bg-gray-50 dark:bg-gray-900/50 rounded-lg">
                <h3 className="font-semibold text-gray-900 dark:text-white mb-2">Free Plan</h3>
                <p className="text-2xl font-bold text-gray-900 dark:text-white">100</p>
                <p className="text-sm text-gray-600 dark:text-gray-400">requests per day</p>
              </div>
              <div className="p-6 bg-purple-50 dark:bg-purple-900/20 rounded-lg">
                <h3 className="font-semibold text-gray-900 dark:text-white mb-2">Pro Plan</h3>
                <p className="text-2xl font-bold text-gray-900 dark:text-white">1,000</p>
                <p className="text-sm text-gray-600 dark:text-gray-400">requests per day</p>
              </div>
              <div className="p-6 bg-pink-50 dark:bg-pink-900/20 rounded-lg">
                <h3 className="font-semibold text-gray-900 dark:text-white mb-2">Team Plan</h3>
                <p className="text-2xl font-bold text-gray-900 dark:text-white">10,000</p>
                <p className="text-sm text-gray-600 dark:text-gray-400">requests per day</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section - Full Width */}
      <section className="w-full py-20 bg-gradient-to-r from-purple-600 to-pink-600">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Ready to Integrate?
          </h2>
          <p className="text-xl text-purple-100 mb-8 max-w-2xl mx-auto">
            Get started with our API today. Sign up for a Pro or Team plan to receive your API key.
          </p>
          <Link
            href="/pricing"
            className="inline-block px-8 py-4 bg-white text-purple-600 rounded-lg font-semibold hover:shadow-xl transition-all duration-300 transform hover:scale-105"
          >
            View Pricing Plans
          </Link>
        </div>
      </section>

      <Footer />
    </main>
  );
}
