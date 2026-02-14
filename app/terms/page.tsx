import Header from "@/components/Header";
import Footer from "@/components/Footer";

export default function TermsPage() {
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
                <pattern id="termsGrid" width="40" height="40" patternUnits="userSpaceOnUse">
                  <path d="M 40 0 L 0 0 0 40" fill="none" stroke="currentColor" strokeWidth="1" className="text-purple-500"/>
                </pattern>
              </defs>
              <rect width="100%" height="100%" fill="url(#termsGrid)" className="animate-spin-slow" style={{ animationDuration: '60s' }}></rect>
            </svg>
          </div>
          
          {/* Animated Document Icons */}
          <div className="absolute top-10 right-10 w-40 h-40 opacity-20">
            <div className="relative w-full h-full animate-bounce-slow">
              <div className="absolute inset-0 glass-card rounded-lg transform rotate-6 shadow-lg"></div>
              <div className="absolute inset-2 glass-card rounded-lg transform -rotate-3 shadow-lg"></div>
              <div className="absolute inset-4 glass-card rounded-lg shadow-lg"></div>
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
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
          </div>
          
          {/* Animated Connecting Lines */}
          <svg className="absolute inset-0 w-full h-full opacity-10" style={{ pointerEvents: 'none' }}>
            <defs>
              <linearGradient id="termsLineGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#9333ea" stopOpacity="0.5" />
                <stop offset="50%" stopColor="#ec4899" stopOpacity="0.5" />
                <stop offset="100%" stopColor="#2563eb" stopOpacity="0.5" />
              </linearGradient>
            </defs>
            <line x1="10%" y1="20%" x2="30%" y2="40%" stroke="url(#termsLineGradient)" strokeWidth="2" className="animate-pulse-slow" />
            <line x1="70%" y1="30%" x2="90%" y2="50%" stroke="url(#termsLineGradient)" strokeWidth="2" className="animate-pulse-slow" style={{ animationDelay: '1s' }} />
            <line x1="20%" y1="70%" x2="50%" y2="80%" stroke="url(#termsLineGradient)" strokeWidth="2" className="animate-pulse-slow" style={{ animationDelay: '2s' }} />
          </svg>
        </div>
        
        <div className="relative max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-5xl md:text-7xl font-bold text-gray-900 dark:text-white mb-6">
                Terms & Conditions
              </h1>
              <p className="text-xl md:text-2xl text-gray-600 dark:text-gray-400 max-w-3xl mb-4">
                Please read these terms carefully before using Langlex AI services.
              </p>
              <p className="text-sm text-gray-500 dark:text-gray-400">
                Last updated: December 2024
              </p>
            </div>
            
            {/* Animated Document Illustration */}
            <div className="relative h-64 md:h-80 flex items-center justify-center">
              <div className="relative w-full h-full">
                {/* Central Document */}
                <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-32 h-40 glass-card rounded-lg p-4 flex flex-col items-center justify-center animate-pulse">
                  <svg className="w-16 h-20 text-purple-600 dark:text-purple-400 mb-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                  </svg>
                  <div className="w-12 h-1 bg-gray-300 dark:bg-gray-600 rounded mb-1"></div>
                  <div className="w-10 h-1 bg-gray-300 dark:bg-gray-600 rounded"></div>
                </div>
                
                {/* Floating Checkmarks */}
                <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-12 h-12 rounded-full bg-green-500 flex items-center justify-center animate-bounce-slow">
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                
                <div className="absolute bottom-0 left-0 w-12 h-12 rounded-full bg-green-500 flex items-center justify-center animate-bounce-slow" style={{ animationDelay: '0.3s' }}>
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                
                <div className="absolute bottom-0 right-0 w-12 h-12 rounded-full bg-green-500 flex items-center justify-center animate-bounce-slow" style={{ animationDelay: '0.6s' }}>
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                
                {/* Animated Lines */}
                <svg className="absolute inset-0 w-full h-full opacity-30">
                  <line x1="50%" y1="10%" x2="50%" y2="40%" stroke="currentColor" strokeWidth="2" className="text-green-500">
                    <animate attributeName="opacity" values="0.3;1;0.3" dur="2s" repeatCount="indefinite"/>
                  </line>
                  <line x1="50%" y1="60%" x2="20%" y2="80%" stroke="currentColor" strokeWidth="2" className="text-green-500">
                    <animate attributeName="opacity" values="0.3;1;0.3" dur="2s" begin="0.5s" repeatCount="indefinite"/>
                  </line>
                  <line x1="50%" y1="60%" x2="80%" y2="80%" stroke="currentColor" strokeWidth="2" className="text-green-500">
                    <animate attributeName="opacity" values="0.3;1;0.3" dur="2s" begin="1s" repeatCount="indefinite"/>
                  </line>
                </svg>
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
                Acceptance of Terms
              </h2>
              <p className="text-lg leading-relaxed">
                By accessing and using Langlex AI, you accept and agree to be bound by the terms and 
                provision of this agreement. If you do not agree to these terms, please do not use our service. 
                Your continued use of the service constitutes your acceptance of these terms.
              </p>
            </div>

            <div className="glass-card rounded-2xl p-8 md:p-10">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-6">
                Use License
              </h2>
              <p className="text-lg leading-relaxed mb-6">
                Permission is granted to temporarily use Langlex AI for personal, non-commercial purposes. 
                This license does not include:
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="flex items-start gap-3 p-4 bg-red-50 dark:bg-red-900/20 rounded-lg">
                  <span className="text-red-500 text-xl">✗</span>
                  <span className="text-gray-700 dark:text-gray-300">Modifying or copying materials</span>
                </div>
                <div className="flex items-start gap-3 p-4 bg-red-50 dark:bg-red-900/20 rounded-lg">
                  <span className="text-red-500 text-xl">✗</span>
                  <span className="text-gray-700 dark:text-gray-300">Using materials for commercial purposes</span>
                </div>
                <div className="flex items-start gap-3 p-4 bg-red-50 dark:bg-red-900/20 rounded-lg">
                  <span className="text-red-500 text-xl">✗</span>
                  <span className="text-gray-700 dark:text-gray-300">Removing copyright or proprietary notations</span>
                </div>
                <div className="flex items-start gap-3 p-4 bg-red-50 dark:bg-red-900/20 rounded-lg">
                  <span className="text-red-500 text-xl">✗</span>
                  <span className="text-gray-700 dark:text-gray-300">Transferring materials to another person</span>
                </div>
              </div>
            </div>

            <div className="glass-card rounded-2xl p-8 md:p-10">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-6">
                Service Availability
              </h2>
              <p className="text-lg leading-relaxed mb-4">
                We strive to provide continuous service availability but do not guarantee uninterrupted access. 
                We reserve the right to modify, suspend, or discontinue any part of the service at any time 
                without prior notice.
              </p>
              <div className="bg-yellow-50 dark:bg-yellow-900/20 p-6 rounded-lg">
                <p className="text-gray-700 dark:text-gray-300">
                  <strong>Service Interruptions:</strong> We may perform scheduled maintenance or updates that 
                  temporarily interrupt service. We will make reasonable efforts to notify users of planned 
                  maintenance when possible.
                </p>
              </div>
            </div>

            <div className="glass-card rounded-2xl p-8 md:p-10">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-6">
                User Responsibilities
              </h2>
              <p className="text-lg mb-6">Users are responsible for:</p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="flex items-start gap-3 p-4 bg-gray-50 dark:bg-gray-900/50 rounded-lg">
                  <span className="text-purple-600 dark:text-purple-400 text-xl">✓</span>
                  <span className="text-gray-700 dark:text-gray-300">Maintaining the confidentiality of account credentials</span>
                </div>
                <div className="flex items-start gap-3 p-4 bg-gray-50 dark:bg-gray-900/50 rounded-lg">
                  <span className="text-purple-600 dark:text-purple-400 text-xl">✓</span>
                  <span className="text-gray-700 dark:text-gray-300">All activities that occur under their account</span>
                </div>
                <div className="flex items-start gap-3 p-4 bg-gray-50 dark:bg-gray-900/50 rounded-lg">
                  <span className="text-purple-600 dark:text-purple-400 text-xl">✓</span>
                  <span className="text-gray-700 dark:text-gray-300">Ensuring compliance with applicable laws</span>
                </div>
                <div className="flex items-start gap-3 p-4 bg-gray-50 dark:bg-gray-900/50 rounded-lg">
                  <span className="text-purple-600 dark:text-purple-400 text-xl">✓</span>
                  <span className="text-gray-700 dark:text-gray-300">Not using the service for illegal or unauthorized purposes</span>
                </div>
              </div>
            </div>

            <div className="glass-card rounded-2xl p-8 md:p-10">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-6">
                Prohibited Uses
              </h2>
              <p className="text-lg mb-6">You agree not to use the service:</p>
              <ul className="space-y-3">
                <li className="flex items-start gap-3">
                  <span className="text-red-500 mt-1">•</span>
                  <span className="text-gray-700 dark:text-gray-300">For any unlawful purpose or to solicit others to perform unlawful acts</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-red-500 mt-1">•</span>
                  <span className="text-gray-700 dark:text-gray-300">To violate any international, federal, provincial, or state regulations, rules, or laws</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-red-500 mt-1">•</span>
                  <span className="text-gray-700 dark:text-gray-300">To infringe upon or violate our intellectual property rights or the intellectual property rights of others</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-red-500 mt-1">•</span>
                  <span className="text-gray-700 dark:text-gray-300">To harass, abuse, insult, harm, defame, slander, disparage, intimidate, or discriminate</span>
                </li>
              </ul>
            </div>

            <div className="glass-card rounded-2xl p-8 md:p-10">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-6">
                Limitation of Liability
              </h2>
              <p className="text-lg leading-relaxed mb-4">
                Langlex AI shall not be liable for any indirect, incidental, special, consequential, or 
                punitive damages resulting from your use or inability to use the service.
              </p>
              <div className="bg-gray-50 dark:bg-gray-900/50 p-6 rounded-lg">
                <p className="text-gray-700 dark:text-gray-300">
                  <strong>Disclaimer:</strong> The service is provided "as is" without warranties of any kind, 
                  either express or implied. We do not guarantee that the service will be error-free, 
                  uninterrupted, or free from viruses or other harmful components.
                </p>
              </div>
            </div>

            <div className="glass-card rounded-2xl p-8 md:p-10">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-6">
                Intellectual Property
              </h2>
              <p className="text-lg leading-relaxed mb-4">
                All content, features, and functionality of Langlex AI are owned by us and are protected by 
                international copyright, trademark, and other intellectual property laws.
              </p>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div className="bg-purple-50 dark:bg-purple-900/20 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 dark:text-white mb-2">Copyright</h4>
                  <p className="text-sm text-gray-600 dark:text-gray-400">All content is protected by copyright laws</p>
                </div>
                <div className="bg-purple-50 dark:bg-purple-900/20 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 dark:text-white mb-2">Trademarks</h4>
                  <p className="text-sm text-gray-600 dark:text-gray-400">Langlex AI and related marks are trademarks</p>
                </div>
                <div className="bg-purple-50 dark:bg-purple-900/20 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 dark:text-white mb-2">Proprietary Rights</h4>
                  <p className="text-sm text-gray-600 dark:text-gray-400">All rights reserved</p>
                </div>
              </div>
            </div>

            <div className="glass-card rounded-2xl p-8 md:p-10">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-6">
                Payment Terms
              </h2>
              <p className="text-lg leading-relaxed mb-4">
                For paid plans, payment is required in advance. All fees are non-refundable unless otherwise 
                stated. We reserve the right to change our pricing with 30 days notice.
              </p>
            </div>

            <div className="glass-card rounded-2xl p-8 md:p-10">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-6">
                Termination
              </h2>
              <p className="text-lg leading-relaxed">
                We may terminate or suspend your access immediately, without prior notice or liability, for 
                any reason whatsoever, including without limitation if you breach the Terms.
              </p>
            </div>

            <div className="glass-card rounded-2xl p-8 md:p-10">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-6">
                Governing Law
              </h2>
              <p className="text-lg leading-relaxed">
                These Terms shall be governed and construed in accordance with the laws of India, without 
                regard to its conflict of law provisions.
              </p>
            </div>

            <div className="glass-card rounded-2xl p-8 md:p-10">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-6">
                Changes to Terms
              </h2>
              <p className="text-lg leading-relaxed mb-4">
                We reserve the right to modify these terms at any time. Changes will be effective immediately 
                upon posting. Continued use of the service constitutes acceptance of modified terms.
              </p>
              <div className="bg-blue-50 dark:bg-blue-900/20 p-6 rounded-lg">
                <p className="text-gray-700 dark:text-gray-300">
                  <strong>Notification:</strong> We will notify users of significant changes to these terms 
                  via email or through a notice on our website. It is your responsibility to review these 
                  terms periodically.
                </p>
              </div>
            </div>

            <div className="glass-card rounded-2xl p-8 md:p-10 bg-gradient-to-r from-purple-50 to-pink-50 dark:from-purple-900/20 dark:to-pink-900/20">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-6">
                Contact Information
              </h2>
              <p className="text-lg mb-6">
                For questions about these Terms & Conditions, please contact us:
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
