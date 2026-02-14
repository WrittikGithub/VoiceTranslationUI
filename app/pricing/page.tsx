import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Link from "next/link";

export default function PricingPage() {
  const plans = [
    {
      name: "Starter",
      label: "Free Plan",
      price: null,
      features: [
        "Basic voice-to-text translation",
        "Up to 10 minutes of transcription per day",
        "Standard accuracy (90%+)",
        "Basic support via email",
        "5 supported languages",
        "Export to text format"
      ],
      buttonText: "Get Started",
      buttonStyle: "glass-button-secondary",
      popular: false
    },
    {
      name: "Pro Plan",
      price: "$8.00",
      period: "/ Month",
      features: [
        "Unlimited transcription time",
        "High accuracy (95%+)",
        "50+ supported languages",
        "Export to multiple formats (TXT, DOCX, PDF)",
        "Priority email support",
        "Real-time translation",
        "Custom vocabulary",
        "API access"
      ],
      buttonText: "Go Pro Plan",
      buttonStyle: "glass-button-primary",
      popular: true
    },
    {
      name: "Team Plan",
      price: "$12.00",
      period: "/ Month",
      features: [
        "Everything in Pro Plan",
        "Team collaboration features",
        "Advanced analytics dashboard",
        "24/7 priority support",
        "Custom integrations",
        "Team management tools",
        "Shared workspaces",
        "Bulk translation processing",
        "White-label options"
      ],
      buttonText: "Get Team Plan",
      buttonStyle: "glass-button-secondary",
      popular: false
    }
  ];

  const faqs = [
    {
      question: "Can I change plans anytime?",
      answer: "Yes, you can upgrade or downgrade your plan at any time. Changes take effect immediately."
    },
    {
      question: "What payment methods do you accept?",
      answer: "We accept all major credit cards, debit cards, and PayPal. All payments are processed securely."
    },
    {
      question: "Is there a free trial?",
      answer: "Yes, the Starter plan is completely free forever. You can also try Pro features with a 14-day free trial."
    },
    {
      question: "Can I cancel anytime?",
      answer: "Yes, you can cancel your subscription at any time. You'll continue to have access until the end of your billing period."
    }
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
                <pattern id="pricingGrid" width="40" height="40" patternUnits="userSpaceOnUse">
                  <path d="M 40 0 L 0 0 0 40" fill="none" stroke="currentColor" strokeWidth="1" className="text-purple-500"/>
                </pattern>
              </defs>
              <rect width="100%" height="100%" fill="url(#pricingGrid)" className="animate-spin-slow" style={{ animationDuration: '60s' }}></rect>
            </svg>
          </div>
          
          {/* Animated Price Tags */}
          <div className="absolute top-20 left-10 w-32 h-32 opacity-20 animate-bounce-slow">
            <div className="glass-card rounded-lg p-4 transform rotate-12">
              <div className="text-3xl font-bold text-purple-600">$</div>
            </div>
          </div>
          
          <div className="absolute top-40 right-20 w-32 h-32 opacity-20 animate-bounce-slow" style={{ animationDelay: '0.5s' }}>
            <div className="glass-card rounded-lg p-4 transform -rotate-12">
              <div className="text-3xl font-bold text-pink-600">$</div>
            </div>
          </div>
          
          {/* Floating Currency Icons */}
          <div className="absolute top-32 left-20 w-16 h-16 opacity-15 animate-bounce-slow">
            <div className="w-full h-full rounded-full bg-gradient-to-r from-purple-500 to-pink-500 flex items-center justify-center text-white font-bold text-xl">$</div>
          </div>
          <div className="absolute top-60 right-32 w-12 h-12 opacity-15 animate-bounce-slow" style={{ animationDelay: '0.5s' }}>
            <div className="w-full h-full rounded-full bg-gradient-to-r from-pink-500 to-blue-500 flex items-center justify-center text-white font-bold">€</div>
          </div>
          <div className="absolute bottom-32 left-32 w-14 h-14 opacity-15 animate-bounce-slow" style={{ animationDelay: '1s' }}>
            <div className="w-full h-full rounded-full bg-gradient-to-r from-blue-500 to-purple-500 flex items-center justify-center text-white font-bold">£</div>
          </div>
          
          {/* Animated Connecting Lines */}
          <svg className="absolute inset-0 w-full h-full opacity-10" style={{ pointerEvents: 'none' }}>
            <defs>
              <linearGradient id="pricingLineGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#9333ea" stopOpacity="0.5" />
                <stop offset="50%" stopColor="#ec4899" stopOpacity="0.5" />
                <stop offset="100%" stopColor="#2563eb" stopOpacity="0.5" />
              </linearGradient>
            </defs>
            <line x1="10%" y1="20%" x2="30%" y2="40%" stroke="url(#pricingLineGradient)" strokeWidth="2" className="animate-pulse-slow" />
            <line x1="70%" y1="30%" x2="90%" y2="50%" stroke="url(#pricingLineGradient)" strokeWidth="2" className="animate-pulse-slow" style={{ animationDelay: '1s' }} />
            <line x1="20%" y1="70%" x2="50%" y2="80%" stroke="url(#pricingLineGradient)" strokeWidth="2" className="animate-pulse-slow" style={{ animationDelay: '2s' }} />
          </svg>
        </div>
        
        <div className="relative max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-5xl md:text-7xl font-bold text-gray-900 dark:text-white mb-6">
                Get Started for Free
              </h1>
              <p className="text-xl md:text-2xl text-gray-600 dark:text-gray-400 max-w-3xl">
                Choose the perfect plan for your voice translation needs. Start free, upgrade anytime.
              </p>
            </div>
            
            {/* Animated Pricing Illustration */}
            <div className="relative h-64 md:h-80 flex items-center justify-center">
              <div className="relative w-full h-full">
                {/* Central Circle with Dollar Sign */}
                <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-40 h-40 rounded-full bg-gradient-to-r from-purple-500 via-pink-500 to-blue-500 flex items-center justify-center animate-pulse">
                  <span className="text-6xl font-bold text-white">$</span>
                </div>
                
                {/* Floating Price Cards */}
                <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-24 h-16 glass-card rounded-lg animate-bounce-slow flex items-center justify-center">
                  <span className="text-2xl font-bold text-purple-600">Free</span>
                </div>
                
                <div className="absolute bottom-0 left-0 w-24 h-16 glass-card rounded-lg animate-bounce-slow flex items-center justify-center" style={{ animationDelay: '0.3s' }}>
                  <span className="text-xl font-bold text-pink-600">$8</span>
                </div>
                
                <div className="absolute bottom-0 right-0 w-24 h-16 glass-card rounded-lg animate-bounce-slow flex items-center justify-center" style={{ animationDelay: '0.6s' }}>
                  <span className="text-xl font-bold text-blue-600">$12</span>
                </div>
                
                {/* Connecting Lines */}
                <svg className="absolute inset-0 w-full h-full opacity-30">
                  <line x1="50%" y1="10%" x2="50%" y2="40%" stroke="currentColor" strokeWidth="2" className="text-purple-500 animate-pulse"/>
                  <line x1="50%" y1="60%" x2="20%" y2="80%" stroke="currentColor" strokeWidth="2" className="text-pink-500 animate-pulse" style={{ animationDelay: '0.3s' }}></line>
                  <line x1="50%" y1="60%" x2="80%" y2="80%" stroke="currentColor" strokeWidth="2" className="text-blue-500 animate-pulse" style={{ animationDelay: '0.6s' }}></line>
                </svg>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing Cards - Full Width */}
      <section className="w-full py-16 bg-white dark:bg-gray-800">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {plans.map((plan, index) => (
              <div
                key={plan.name}
                className={`glass-card relative overflow-hidden transition-all duration-300 hover:scale-105 hover:shadow-2xl rounded-2xl ${
                  plan.popular ? 'ring-2 ring-purple-500/50 ring-offset-2 ring-offset-transparent md:-mt-4 md:mb-4' : ''
                }`}
              >
                {plan.popular && (
                  <div className="absolute top-0 right-0 bg-gradient-to-r from-purple-500 to-pink-500 text-white text-xs font-semibold px-4 py-1 rounded-bl-lg">
                    Most Popular
                  </div>
                )}
                <div className="p-8">
                  <div className="mb-6">
                    <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-2 transition-colors">
                      {plan.name}
                    </h3>
                    {plan.label && (
                      <span className="inline-block text-xs font-semibold text-purple-600 dark:text-purple-400 bg-purple-100 dark:bg-purple-900/30 px-3 py-1 rounded-full mb-4 transition-colors">
                        {plan.label}
                      </span>
                    )}
                    {plan.price && (
                      <div className="mt-4">
                        <span className="text-4xl font-bold text-gray-900 dark:text-white transition-colors">
                          {plan.price}
                        </span>
                        <span className="text-gray-600 dark:text-gray-400 text-lg ml-2 transition-colors">
                          {plan.period}
                        </span>
                      </div>
                    )}
                    {!plan.price && (
                      <div className="mt-4">
                        <span className="text-4xl font-bold text-gray-900 dark:text-white transition-colors">
                          Free
                        </span>
                      </div>
                    )}
                  </div>
                  
                  <ul className="space-y-4 mb-8">
                    {plan.features.map((feature, idx) => (
                      <li key={idx} className="flex items-start gap-3">
                        <div className="mt-1 flex-shrink-0">
                          <svg className="w-5 h-5 text-green-500 dark:text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                          </svg>
                        </div>
                        <span className="text-gray-700 dark:text-gray-300 text-sm transition-colors">
                          {feature}
                        </span>
                      </li>
                    ))}
                  </ul>
                  
                  <button className={`w-full px-6 py-3 rounded-xl font-semibold transition-all duration-300 ${plan.buttonStyle}`}>
                    {plan.buttonText}
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Comparison Section - Full Width */}
      <section className="w-full py-16 bg-gray-50 dark:bg-gray-900">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-12 text-center">
            Compare Plans
          </h2>
          <div className="glass-card rounded-2xl p-8 overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="border-b border-gray-200 dark:border-gray-700">
                  <th className="text-left py-4 px-4 font-semibold text-gray-900 dark:text-white">Feature</th>
                  <th className="text-center py-4 px-4 font-semibold text-gray-900 dark:text-white">Starter</th>
                  <th className="text-center py-4 px-4 font-semibold text-gray-900 dark:text-white">Pro</th>
                  <th className="text-center py-4 px-4 font-semibold text-gray-900 dark:text-white">Team</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200 dark:divide-gray-700">
                <tr>
                  <td className="py-4 px-4 text-gray-700 dark:text-gray-300">Transcription Time</td>
                  <td className="py-4 px-4 text-center text-gray-700 dark:text-gray-300">10 min/day</td>
                  <td className="py-4 px-4 text-center text-gray-700 dark:text-gray-300">Unlimited</td>
                  <td className="py-4 px-4 text-center text-gray-700 dark:text-gray-300">Unlimited</td>
                </tr>
                <tr>
                  <td className="py-4 px-4 text-gray-700 dark:text-gray-300">Languages</td>
                  <td className="py-4 px-4 text-center text-gray-700 dark:text-gray-300">5</td>
                  <td className="py-4 px-4 text-center text-gray-700 dark:text-gray-300">50+</td>
                  <td className="py-4 px-4 text-center text-gray-700 dark:text-gray-300">50+</td>
                </tr>
                <tr>
                  <td className="py-4 px-4 text-gray-700 dark:text-gray-300">Accuracy</td>
                  <td className="py-4 px-4 text-center text-gray-700 dark:text-gray-300">90%+</td>
                  <td className="py-4 px-4 text-center text-gray-700 dark:text-gray-300">95%+</td>
                  <td className="py-4 px-4 text-center text-gray-700 dark:text-gray-300">95%+</td>
                </tr>
                <tr>
                  <td className="py-4 px-4 text-gray-700 dark:text-gray-300">API Access</td>
                  <td className="py-4 px-4 text-center text-gray-500">✗</td>
                  <td className="py-4 px-4 text-center text-green-500">✓</td>
                  <td className="py-4 px-4 text-center text-green-500">✓</td>
                </tr>
                <tr>
                  <td className="py-4 px-4 text-gray-700 dark:text-gray-300">Team Features</td>
                  <td className="py-4 px-4 text-center text-gray-500">✗</td>
                  <td className="py-4 px-4 text-center text-gray-500">✗</td>
                  <td className="py-4 px-4 text-center text-green-500">✓</td>
                </tr>
                <tr>
                  <td className="py-4 px-4 text-gray-700 dark:text-gray-300">Support</td>
                  <td className="py-4 px-4 text-center text-gray-700 dark:text-gray-300">Email</td>
                  <td className="py-4 px-4 text-center text-gray-700 dark:text-gray-300">Priority Email</td>
                  <td className="py-4 px-4 text-center text-gray-700 dark:text-gray-300">24/7 Priority</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* FAQ Section - Full Width */}
      <section className="w-full py-16 bg-white dark:bg-gray-800">
        <div className="max-w-4xl mx-auto px-6">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-12 text-center">
            Frequently Asked Questions
          </h2>
          <div className="space-y-6">
            {faqs.map((faq, index) => (
              <div key={index} className="glass-card rounded-2xl p-6">
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">
                  {faq.question}
                </h3>
                <p className="text-gray-600 dark:text-gray-400">
                  {faq.answer}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section - Full Width */}
      <section className="w-full py-20 bg-gradient-to-r from-purple-600 to-pink-600">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Ready to Get Started?
          </h2>
          <p className="text-xl text-purple-100 mb-8 max-w-2xl mx-auto">
            Join thousands of users who are already experiencing seamless voice translation with Langlex AI.
          </p>
          <Link
            href="/"
            className="inline-block px-8 py-4 bg-white text-purple-600 rounded-lg font-semibold hover:shadow-xl transition-all duration-300 transform hover:scale-105"
          >
            Start Free Trial
          </Link>
        </div>
      </section>

      <Footer />
    </main>
  );
}
