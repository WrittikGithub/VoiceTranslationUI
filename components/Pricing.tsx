export default function Pricing() {
  const plans = [
    {
      name: "Starter",
      label: "Free Plan",
      price: null,
      features: [
        "Basic voice-to-text",
        "Limited transcription time",
        "Standard accuracy",
        "Basic support"
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
        "Unlimited transcription",
        "High accuracy",
        "Multiple languages",
        "Export options",
        "Priority support"
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
        "Everything in Pro",
        "Team collaboration",
        "Advanced analytics",
        "Priority support",
        "Custom integrations"
      ],
      buttonText: "Get Started",
      buttonStyle: "glass-button-secondary",
      popular: false
    }
  ];

  return (
    <section className="max-w-7xl mx-auto px-6 py-20">
      <div className="text-center mb-16">
        <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4 transition-colors">
          Get started for free
        </h2>
        <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto transition-colors">
          Choose the perfect plan for your voice translation needs
        </p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {plans.map((plan, index) => (
          <div
            key={plan.name}
            className={`glass-card relative overflow-hidden transition-all duration-300 hover:scale-105 hover:shadow-2xl ${
              plan.popular ? 'ring-2 ring-purple-500/50 ring-offset-2 ring-offset-transparent' : ''
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
    </section>
  );
}
