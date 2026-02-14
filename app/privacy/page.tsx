import Header from "@/components/Header";
import Footer from "@/components/Footer";

export default function PrivacyPage() {
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
                <pattern id="privacyGrid" width="40" height="40" patternUnits="userSpaceOnUse">
                  <path d="M 40 0 L 0 0 0 40" fill="none" stroke="currentColor" strokeWidth="1" className="text-purple-500"/>
                </pattern>
              </defs>
              <rect width="100%" height="100%" fill="url(#privacyGrid)" className="animate-spin-slow" style={{ animationDuration: '60s' }}></rect>
            </svg>
          </div>
          
          {/* Animated Shield Icons */}
          <div className="absolute top-10 right-10 w-40 h-40 opacity-20 animate-bounce-slow">
            <svg viewBox="0 0 100 100" className="w-full h-full text-green-500">
              <path d="M 50,10 L 20,25 L 20,50 Q 20,70 50,85 Q 80,70 80,50 L 80,25 Z" fill="currentColor" opacity="0.3"/>
              <path d="M 50,10 L 20,25 L 20,50 Q 20,70 50,85 Q 80,70 80,50 L 80,25 Z" fill="none" stroke="currentColor" strokeWidth="3"/>
              <path d="M 50,30 L 40,40 L 50,50 L 60,40 Z" fill="currentColor" className="animate-pulse"/>
            </svg>
          </div>
          
          {/* Floating Lock Icons */}
          <div className="absolute top-32 left-20 w-16 h-16 opacity-15 animate-bounce-slow">
            <svg className="w-full h-full text-purple-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
            </svg>
          </div>
          <div className="absolute top-60 right-32 w-12 h-12 opacity-15 animate-bounce-slow" style={{ animationDelay: '0.5s' }}>
            <svg className="w-full h-full text-pink-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
            </svg>
          </div>
          
          {/* Animated Connecting Lines */}
          <svg className="absolute inset-0 w-full h-full opacity-10" style={{ pointerEvents: 'none' }}>
            <defs>
              <linearGradient id="privacyLineGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#9333ea" stopOpacity="0.5" />
                <stop offset="50%" stopColor="#ec4899" stopOpacity="0.5" />
                <stop offset="100%" stopColor="#2563eb" stopOpacity="0.5" />
              </linearGradient>
            </defs>
            <line x1="10%" y1="20%" x2="30%" y2="40%" stroke="url(#privacyLineGradient)" strokeWidth="2" className="animate-pulse-slow" />
            <line x1="70%" y1="30%" x2="90%" y2="50%" stroke="url(#privacyLineGradient)" strokeWidth="2" className="animate-pulse-slow" style={{ animationDelay: '1s' }} />
            <line x1="20%" y1="70%" x2="50%" y2="80%" stroke="url(#privacyLineGradient)" strokeWidth="2" className="animate-pulse-slow" style={{ animationDelay: '2s' }} />
          </svg>
        </div>
        
        <div className="relative max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-5xl md:text-7xl font-bold text-gray-900 dark:text-white mb-6">
                Privacy Policy
              </h1>
              <p className="text-xl md:text-2xl text-gray-600 dark:text-gray-400 max-w-3xl mb-4">
                Your privacy is important to us. Learn how we collect, use, and protect your information.
              </p>
              <p className="text-sm text-gray-500 dark:text-gray-400">
                Last updated: December 2024
              </p>
            </div>
            
            {/* Animated Shield Illustration */}
            <div className="relative h-64 md:h-80 flex items-center justify-center">
              <div className="relative w-full h-full">
                {/* Central Shield */}
                <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-40 h-40 glass-card rounded-xl p-6 flex items-center justify-center animate-pulse">
                  <svg className="w-32 h-32 text-green-500 dark:text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                  </svg>
                </div>
                
                {/* Floating Lock Icons */}
                <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-16 h-16 glass-card rounded-full flex items-center justify-center animate-bounce-slow">
                  <svg className="w-8 h-8 text-purple-600 dark:text-purple-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                  </svg>
                </div>
                
                <div className="absolute bottom-0 left-0 w-16 h-16 glass-card rounded-full flex items-center justify-center animate-bounce-slow" style={{ animationDelay: '0.3s' }}>
                  <svg className="w-8 h-8 text-pink-600 dark:text-pink-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                  </svg>
                </div>
                
                <div className="absolute bottom-0 right-0 w-16 h-16 glass-card rounded-full flex items-center justify-center animate-bounce-slow" style={{ animationDelay: '0.6s' }}>
                  <svg className="w-8 h-8 text-blue-600 dark:text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                  </svg>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Content Section - Full Width */}
      <section className="w-full py-16 bg-white dark:bg-gray-800">
        <div className="max-w-7xl mx-auto px-6">
          <div className="space-y-12 text-gray-700 dark:text-gray-300">
            <div className="glass-card rounded-2xl p-8 md:p-10">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-6">
                Introduction
              </h2>
              <p className="text-lg leading-relaxed">
                At Langlex AI, we are committed to protecting your privacy. This Privacy Policy explains 
                how we collect, use, disclose, and safeguard your information when you use our voice 
                translation service. We understand the importance of privacy and are dedicated to maintaining 
                the trust you place in us.
              </p>
            </div>

            <div className="glass-card rounded-2xl p-8 md:p-10">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-6">
                Information We Collect
              </h2>
              <div className="space-y-6">
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">Voice Data</h3>
                  <p className="text-lg leading-relaxed">
                    When you use our voice translation service, we process your voice recordings temporarily 
                    to provide translation services. We do not store your voice recordings after translation 
                    is complete. All voice data is processed in real-time and immediately discarded.
                  </p>
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">Usage Data</h3>
                  <p className="text-lg leading-relaxed">
                    We collect information about how you interact with our service, including pages visited, 
                    features used, and translation history. This data helps us improve our service and 
                    enhance user experience.
                  </p>
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">Device Information</h3>
                  <p className="text-lg leading-relaxed">
                    We may collect information about your device, including browser type, operating system, 
                    and device identifiers to ensure optimal service performance.
                  </p>
                </div>
              </div>
            </div>

            <div className="glass-card rounded-2xl p-8 md:p-10">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-6">
                How We Use Your Information
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="flex items-start gap-3">
                  <span className="text-purple-600 dark:text-purple-400 text-2xl">✓</span>
                  <div>
                    <h4 className="font-semibold text-gray-900 dark:text-white mb-2">Service Provision</h4>
                    <p className="text-gray-600 dark:text-gray-400">To provide and maintain our voice translation service</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <span className="text-purple-600 dark:text-purple-400 text-2xl">✓</span>
                  <div>
                    <h4 className="font-semibold text-gray-900 dark:text-white mb-2">Service Improvement</h4>
                    <p className="text-gray-600 dark:text-gray-400">To improve and optimize our translation accuracy</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <span className="text-purple-600 dark:text-purple-400 text-2xl">✓</span>
                  <div>
                    <h4 className="font-semibold text-gray-900 dark:text-white mb-2">Analytics</h4>
                    <p className="text-gray-600 dark:text-gray-400">To analyze usage patterns and enhance user experience</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <span className="text-purple-600 dark:text-purple-400 text-2xl">✓</span>
                  <div>
                    <h4 className="font-semibold text-gray-900 dark:text-white mb-2">Communication</h4>
                    <p className="text-gray-600 dark:text-gray-400">To communicate with you about service updates</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="glass-card rounded-2xl p-8 md:p-10">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-6">
                Data Security
              </h2>
              <p className="text-lg leading-relaxed mb-6">
                We implement industry-standard security measures to protect your data, including encryption 
                of voice data during transmission and processing. However, no method of transmission over the 
                internet is 100% secure.
              </p>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div className="bg-purple-50 dark:bg-purple-900/20 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 dark:text-white mb-2">Encryption</h4>
                  <p className="text-sm text-gray-600 dark:text-gray-400">All data is encrypted in transit and at rest</p>
                </div>
                <div className="bg-purple-50 dark:bg-purple-900/20 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 dark:text-white mb-2">Secure Servers</h4>
                  <p className="text-sm text-gray-600 dark:text-gray-400">Data processed on secure, monitored servers</p>
                </div>
                <div className="bg-purple-50 dark:bg-purple-900/20 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 dark:text-white mb-2">Regular Audits</h4>
                  <p className="text-sm text-gray-600 dark:text-gray-400">Regular security audits and updates</p>
                </div>
              </div>
            </div>

            <div className="glass-card rounded-2xl p-8 md:p-10">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-6">
                Data Retention
              </h2>
              <p className="text-lg leading-relaxed mb-4">
                Voice recordings are processed in real-time and are not stored after translation completion. 
                Usage data may be retained for analytical purposes in accordance with applicable laws.
              </p>
              <div className="bg-gray-50 dark:bg-gray-900/50 p-6 rounded-lg">
                <p className="text-gray-700 dark:text-gray-300">
                  <strong>Retention Period:</strong> Voice data is deleted immediately after processing. 
                  Usage data is retained for up to 12 months for analytical purposes, after which it is 
                  permanently deleted.
                </p>
              </div>
            </div>

            <div className="glass-card rounded-2xl p-8 md:p-10">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-6">
                Your Rights
              </h2>
              <p className="text-lg mb-6">You have the following rights regarding your personal data:</p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="flex items-start gap-3 p-4 bg-gray-50 dark:bg-gray-900/50 rounded-lg">
                  <span className="text-green-500 text-xl">✓</span>
                  <span className="text-gray-700 dark:text-gray-300">Access your personal data</span>
                </div>
                <div className="flex items-start gap-3 p-4 bg-gray-50 dark:bg-gray-900/50 rounded-lg">
                  <span className="text-green-500 text-xl">✓</span>
                  <span className="text-gray-700 dark:text-gray-300">Request deletion of your data</span>
                </div>
                <div className="flex items-start gap-3 p-4 bg-gray-50 dark:bg-gray-900/50 rounded-lg">
                  <span className="text-green-500 text-xl">✓</span>
                  <span className="text-gray-700 dark:text-gray-300">Opt-out of data collection</span>
                </div>
                <div className="flex items-start gap-3 p-4 bg-gray-50 dark:bg-gray-900/50 rounded-lg">
                  <span className="text-green-500 text-xl">✓</span>
                  <span className="text-gray-700 dark:text-gray-300">File a complaint with regulatory authorities</span>
                </div>
              </div>
            </div>

            <div className="glass-card rounded-2xl p-8 md:p-10">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-6">
                Cookies and Tracking
              </h2>
              <p className="text-lg leading-relaxed mb-4">
                We use cookies and similar tracking technologies to enhance your experience. You can control 
                cookie preferences through your browser settings.
              </p>
            </div>

            <div className="glass-card rounded-2xl p-8 md:p-10">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-6">
                Third-Party Services
              </h2>
              <p className="text-lg leading-relaxed">
                We may use third-party services to help us operate our service. These services have their 
                own privacy policies, and we encourage you to review them.
              </p>
            </div>

            <div className="glass-card rounded-2xl p-8 md:p-10 bg-gradient-to-r from-purple-50 to-pink-50 dark:from-purple-900/20 dark:to-pink-900/20">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-6">
                Contact Us
              </h2>
              <p className="text-lg mb-6">
                If you have questions about this Privacy Policy or wish to exercise your rights, please contact us:
              </p>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div>
                  <h4 className="font-semibold text-gray-900 dark:text-white mb-2">Email</h4>
                  <a href="mailto:info@langlex.com" className="text-purple-600 dark:text-purple-400 hover:underline">
                    info@langlex.com
                  </a>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900 dark:text-white mb-2">Phone</h4>
                  <a href="tel:+917892242495" className="text-purple-600 dark:text-purple-400 hover:underline">
                    91 - 789 - 224 - 2495
                  </a>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900 dark:text-white mb-2">Address</h4>
                  <p className="text-gray-600 dark:text-gray-400 text-sm">
                    G-415B, Adarsh Enclave,<br />
                    Ayanagar, New Delhi - 110047
                  </p>
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
