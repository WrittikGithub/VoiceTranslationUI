'use client';

import { useState, useEffect } from 'react';

interface ReachModalProps {
  isOpen: boolean;
  onClose: () => void;
  activeTab?: 'reach' | 'faqs' | 'feedback' | 'release-notes';
}

export default function ReachModal({ isOpen, onClose, activeTab = 'reach' }: ReachModalProps) {
  const [currentTab, setCurrentTab] = useState<'reach' | 'faqs' | 'feedback' | 'release-notes'>(activeTab);

  useEffect(() => {
    setCurrentTab(activeTab);
  }, [activeTab]);

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);

  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        onClose();
      }
    };
    if (isOpen) {
      window.addEventListener('keydown', handleEscape);
    }
    return () => {
      window.removeEventListener('keydown', handleEscape);
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  const tabs = [
    { id: 'reach' as const, label: 'Reach', icon: '📧' },
    { id: 'faqs' as const, label: 'FAQs', icon: '❓' },
    { id: 'feedback' as const, label: 'Feedback', icon: '💬' },
    { id: 'release-notes' as const, label: 'Release Notes', icon: '📝' },
  ];

  const content = {
    reach: {
      title: 'Get in Touch',
      description: 'We\'d love to hear from you. Choose the best way to reach us:',
      items: [
        {
          icon: '📧',
          title: 'Email',
          description: 'Mail to info@langlex.com',
          action: 'mailto:info@langlex.com',
        },
        {
          icon: '📞',
          title: 'Phone',
          description: 'Call us at 91 - 789 - 224 - 2495',
          action: 'tel:+917892242495',
        },
        {
          icon: '📍',
          title: 'Address',
          description: 'G-415B, Adarsh Enclave, Ayanagar, New Delhi - 110047',
          action: 'https://maps.google.com/?q=G-415B+Adarsh+Enclave+Ayanagar+New+Delhi+110047',
        },
      ],
    },
    faqs: {
      title: 'Frequently Asked Questions',
      description: 'Find answers to common questions about Langlex AI',
      items: [
        {
          question: 'How does voice translation work?',
          answer: 'Langlex AI uses advanced machine learning models to convert your voice input into text in real-time, then translates it to your desired language with high accuracy.',
        },
        {
          question: 'What languages are supported?',
          answer: 'We support over 50 languages including English, Spanish, French, German, Chinese, Japanese, Korean, and many more. The list is continuously expanding.',
        },
        {
          question: 'Is my data secure?',
          answer: 'Yes, we take data security seriously. All voice recordings are encrypted and processed securely. We do not store your voice data after translation is complete.',
        },
        {
          question: 'Can I use Langlex AI offline?',
          answer: 'Currently, Langlex AI requires an internet connection for real-time translation. We are working on offline capabilities for future releases.',
        },
        {
          question: 'What is the accuracy rate?',
          answer: 'Our translation accuracy is over 95% for most language pairs. Accuracy may vary depending on audio quality, background noise, and speaking clarity.',
        },
        {
          question: 'How do I get started?',
          answer: 'Simply click the record button, speak naturally, and watch your words transform into translated text in real-time. No account required for basic usage.',
        },
      ],
    },
    feedback: {
      title: 'Share Your Feedback',
      description: 'Your feedback helps us improve Langlex AI. We appreciate your input!',
      items: [
        {
          type: 'feature',
          title: 'Feature Request',
          description: 'Have an idea for a new feature? Email us at info@langlex.com',
          email: 'info@langlex.com',
        },
        {
          type: 'bug',
          title: 'Report a Bug',
          description: 'Found something that\'s not working? Report it to info@langlex.com',
          email: 'info@langlex.com',
        },
        {
          type: 'improvement',
          title: 'Suggest Improvement',
          description: 'Have suggestions to make Langlex AI better? Contact us at info@langlex.com',
          email: 'info@langlex.com',
        },
        {
          type: 'general',
          title: 'General Feedback',
          description: 'Share your overall experience and thoughts. Reach us at info@langlex.com',
          email: 'info@langlex.com',
        },
      ],
    },
    'release-notes': {
      title: 'Release Notes',
      description: 'Stay updated with the latest features and improvements',
      items: [
        {
          version: 'v2.1.0',
          date: 'December 2024',
          features: [
            'Added support for 10 new languages',
            'Improved translation accuracy by 15%',
            'Enhanced voice recognition for noisy environments',
            'New dark mode theme',
          ],
        },
        {
          version: 'v2.0.0',
          date: 'November 2024',
          features: [
            'Complete UI redesign with glassmorphism',
            'Real-time voice translation',
            'Multi-language support',
            'Export functionality',
          ],
        },
        {
          version: 'v1.5.0',
          date: 'October 2024',
          features: [
            'Added copy to clipboard feature',
            'Improved error handling',
            'Performance optimizations',
            'Bug fixes and stability improvements',
          ],
        },
      ],
    },
  };

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4"
      onClick={onClose}
    >
      {/* Backdrop */}
      <div className="absolute inset-0 bg-black/50 dark:bg-black/70 backdrop-blur-sm transition-opacity animate-fade-in" />

      {/* Modal */}
      <div
        className="relative w-full max-w-4xl max-h-[90vh] glass-card rounded-2xl shadow-2xl overflow-hidden animate-fade-in-up"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="sticky top-0 z-10 bg-white/80 dark:bg-gray-900/80 backdrop-blur-md border-b border-gray-200 dark:border-gray-700 px-6 py-4">
          <div className="flex items-center justify-between">
            <div>
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white">
                {content[currentTab].title}
              </h2>
              <p className="text-sm text-gray-600 dark:text-gray-400 mt-1">
                {content[currentTab].description}
              </p>
            </div>
            <button
              onClick={onClose}
              className="p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
              aria-label="Close modal"
            >
              <svg className="w-6 h-6 text-gray-600 dark:text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>

          {/* Tabs */}
          <div className="flex gap-2 mt-4 overflow-x-auto">
            {tabs.map((tab) => (
              <button
                key={tab.id}
                onClick={() => setCurrentTab(tab.id)}
                className={`px-4 py-2 rounded-lg text-sm font-medium transition-all duration-300 whitespace-nowrap ${
                  currentTab === tab.id
                    ? 'bg-gradient-to-r from-purple-600 to-pink-600 text-white shadow-lg'
                    : 'bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-700'
                }`}
              >
                <span className="mr-2">{tab.icon}</span>
                {tab.label}
              </button>
            ))}
          </div>
        </div>

        {/* Content */}
        <div className="overflow-y-auto max-h-[calc(90vh-140px)] p-6">
          {currentTab === 'reach' && (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {content.reach.items.map((item, index) => (
                <a
                  key={index}
                  href={item.action}
                  target={item.action.startsWith('http') ? '_blank' : undefined}
                  rel={item.action.startsWith('http') ? 'noopener noreferrer' : undefined}
                  className="glass-element p-6 rounded-xl hover:scale-105 transition-all duration-300 group"
                >
                  <div className="text-4xl mb-3">{item.icon}</div>
                  <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2 group-hover:text-purple-600 dark:group-hover:text-purple-400 transition-colors">
                    {item.title}
                  </h3>
                  <p className="text-gray-600 dark:text-gray-400 text-sm">
                    {item.description}
                  </p>
                </a>
              ))}
            </div>
          )}

          {currentTab === 'faqs' && (
            <div className="space-y-4">
              {content.faqs.items.map((faq, index) => (
                <div
                  key={index}
                  className="glass-element p-6 rounded-xl hover:shadow-lg transition-all duration-300"
                >
                  <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2 flex items-start gap-2">
                    <span className="text-purple-600 dark:text-purple-400">Q:</span>
                    {faq.question}
                  </h3>
                  <p className="text-gray-600 dark:text-gray-400 mt-2 pl-6">
                    <span className="text-purple-600 dark:text-purple-400 font-medium">A:</span> {faq.answer}
                  </p>
                </div>
              ))}
            </div>
          )}

          {currentTab === 'feedback' && (
            <div className="space-y-4">
              {content.feedback.items.map((item, index) => (
                <div
                  key={index}
                  className="glass-element p-6 rounded-xl hover:scale-105 transition-all duration-300 group"
                >
                  <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2 group-hover:text-purple-600 dark:group-hover:text-purple-400 transition-colors">
                    {item.title}
                  </h3>
                  <p className="text-gray-600 dark:text-gray-400 text-sm mb-4">
                    {item.description}
                  </p>
                  <a
                    href={`mailto:${item.email}?subject=${encodeURIComponent(item.title)} - Langlex AI Feedback`}
                    className="inline-block px-4 py-2 bg-gradient-to-r from-purple-600 to-pink-600 text-white rounded-lg hover:shadow-lg transition-all duration-300 text-sm font-medium"
                  >
                    Send Email
                  </a>
                </div>
              ))}
            </div>
          )}

          {currentTab === 'release-notes' && (
            <div className="space-y-6">
              {content['release-notes'].items.map((release, index) => (
                <div
                  key={index}
                  className="glass-element p-6 rounded-xl hover:shadow-lg transition-all duration-300"
                >
                  <div className="flex items-center justify-between mb-4">
                    <h3 className="text-xl font-bold text-gray-900 dark:text-white">
                      {release.version}
                    </h3>
                    <span className="text-sm text-gray-600 dark:text-gray-400">
                      {release.date}
                    </span>
                  </div>
                  <ul className="space-y-2">
                    {release.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-start gap-2 text-gray-700 dark:text-gray-300">
                        <span className="text-green-500 mt-1">✓</span>
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
