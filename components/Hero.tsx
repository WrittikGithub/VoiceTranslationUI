'use client';

import { useTheme } from './ThemeProvider';

export default function Hero() {
  const { theme } = useTheme();

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden px-6 py-20">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-gray-50 via-white to-gray-100 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900"></div>
      
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-purple-300 dark:bg-purple-900 rounded-full mix-blend-multiply dark:mix-blend-screen filter blur-3xl opacity-20 animate-pulse-slow"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-pink-300 dark:bg-pink-900 rounded-full mix-blend-multiply dark:mix-blend-screen filter blur-3xl opacity-20 animate-pulse-slow" style={{ animationDelay: '1s' }}></div>
        <div className="absolute top-1/2 right-1/3 w-96 h-96 bg-blue-300 dark:bg-blue-900 rounded-full mix-blend-multiply dark:mix-blend-screen filter blur-3xl opacity-20 animate-pulse-slow" style={{ animationDelay: '2s' }}></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto w-full">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Side - Text Content */}
          <div className="space-y-8 animate-fade-in-up">
            {/* Feature Callout */}
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gray-100 dark:bg-gray-800 border border-gray-200 dark:border-gray-700">
              <svg className="w-4 h-4 text-purple-600 dark:text-purple-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z" />
              </svg>
              <span className="text-sm font-medium text-gray-700 dark:text-gray-300">Write as fast as you imagine</span>
            </div>

            {/* Main Headline */}
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-gray-900 dark:text-white leading-tight">
              We've typed for 150 Years.
              <br />
              <span className="bg-gradient-to-r from-pink-600 via-purple-600 to-blue-600 bg-clip-text text-transparent">
                It's time to Speak
              </span>
            </h1>

            {/* Description */}
            <p className="text-xl text-gray-600 dark:text-gray-400 leading-relaxed max-w-xl">
              Langlex ai turns your voice into clear text in real time, for everything from AI prompts to essays.
            </p>

            {/* Instruction */}
            <div className="flex items-center gap-3 text-gray-700 dark:text-gray-300">
              <span className="text-lg">Take a deep</span>
              <kbd className="px-3 py-1.5 text-sm font-semibold text-gray-800 dark:text-gray-200 bg-gray-100 dark:bg-gray-800 border border-gray-300 dark:border-gray-700 rounded-lg shadow-sm">
              breath
              </kbd>
              <span className="text-lg">and speak to outline a doc.</span>
              <svg className="w-5 h-5 text-gray-600 dark:text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
              </svg>
            </div>
          </div>

          {/* Right Side - Animated Voice Visualization */}
          <div className="relative flex items-center justify-center min-h-[500px] lg:min-h-[600px]">
            {/* Dashed Circle Path */}
            <div className="absolute inset-0 flex items-center justify-center">
              <svg className="w-full h-full max-w-[500px] max-h-[500px]" viewBox="0 0 500 500">
                <circle
                  cx="250"
                  cy="250"
                  r="200"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeDasharray="8 8"
                  className="text-gray-300 dark:text-gray-700"
                />
              </svg>
            </div>

            {/* Central Voice Circle */}
            <div className="relative z-20 flex items-center justify-center">
              <div className="relative w-48 h-48 md:w-64 md:h-64 rounded-full bg-white dark:bg-gray-800 border-4 border-transparent bg-clip-padding p-1 shadow-2xl">
                <div className="absolute inset-0 rounded-full bg-gradient-to-r from-pink-500 via-purple-500 to-blue-500 opacity-75 animate-pulse"></div>
                <div className="relative w-full h-full rounded-full bg-white dark:bg-gray-800 flex flex-col items-center justify-center gap-3">
                  {/* Voice Waveform Icon */}
                  <svg className="w-16 h-16 md:w-20 md:h-20 text-purple-600 dark:text-purple-400" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M3 9v6h4l5 5V4L7 9H3zm13.5 3c0-1.77-1.02-3.29-2.5-4.03v8.05c1.48-.73 2.5-2.25 2.5-4.02zM14 3.23v2.06c2.89.86 5 3.54 5 6.71s-2.11 5.85-5 6.71v2.06c4.01-.91 7-4.49 7-8.77s-2.99-7.86-7-8.77z"/>
                  </svg>
                  <span className="text-2xl md:text-3xl font-bold text-gray-900 dark:text-white">Hello!</span>
                </div>
              </div>
            </div>

            {/* Orbiting Voice-Related Icons */}
            {/* Microphone Icon - Top */}
            <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-10 animate-bounce-slow">
              <div className="w-16 h-16 md:w-20 md:h-20 rounded-xl bg-white dark:bg-gray-800 shadow-lg border border-gray-200 dark:border-gray-700 flex items-center justify-center hover:scale-110 transition-transform">
                <svg className="w-8 h-8 md:w-10 md:h-10 text-purple-600 dark:text-purple-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11a7 7 0 01-7 7m0 0a7 7 0 01-7-7m7 7v4m0 0H8m4 0h4m-4-8a3 3 0 01-3-3V5a3 3 0 116 0v6a3 3 0 01-3 3z" />
                </svg>
              </div>
            </div>

            {/* Speaker Icon - Right */}
            <div className="absolute right-0 top-1/2 transform translate-x-1/2 -translate-y-1/2 z-10 animate-bounce-slow" style={{ animationDelay: '0.5s' }}>
              <div className="w-16 h-16 md:w-20 md:h-20 rounded-xl bg-white dark:bg-gray-800 shadow-lg border border-gray-200 dark:border-gray-700 flex items-center justify-center hover:scale-110 transition-transform">
                <svg className="w-8 h-8 md:w-10 md:h-10 text-blue-600 dark:text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15.536 8.464a5 5 0 010 7.072m2.828-9.9a9 9 0 010 12.728M5.586 15H4a1 1 0 01-1-1v-4a1 1 0 011-1h1.586l4.707-4.707C10.923 3.663 12 4.109 12 5v14c0 .891-1.077 1.337-1.707.707L5.586 15z" />
                </svg>
              </div>
            </div>

            {/* Audio Waves Icon - Bottom */}
            <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 translate-y-1/2 z-10 animate-bounce-slow" style={{ animationDelay: '1s' }}>
              <div className="w-16 h-16 md:w-20 md:h-20 rounded-xl bg-white dark:bg-gray-800 shadow-lg border border-gray-200 dark:border-gray-700 flex items-center justify-center hover:scale-110 transition-transform">
                <svg className="w-8 h-8 md:w-10 md:h-10 text-pink-600 dark:text-pink-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19V6l12-3v13M9 19c0 1.105-1.343 2-3 2s-3-.895-3-2 1.343-2 3-2 3 .895 3 2zm12-3c0 1.105-1.343 2-3 2s-3-.895-3-2 1.343-2 3-2 3 .895 3 2zM9 10l12-3" />
                </svg>
              </div>
            </div>

            {/* Voice Command Icon - Left */}
            <div className="absolute left-0 top-1/2 transform -translate-x-1/2 -translate-y-1/2 z-10 animate-bounce-slow" style={{ animationDelay: '1.5s' }}>
              <div className="w-16 h-16 md:w-20 md:h-20 rounded-xl bg-white dark:bg-gray-800 shadow-lg border border-gray-200 dark:border-gray-700 flex items-center justify-center hover:scale-110 transition-transform">
                <svg className="w-8 h-8 md:w-10 md:h-10 text-purple-600 dark:text-purple-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z" />
                </svg>
              </div>
            </div>

            {/* Connecting Lines */}
            <svg className="absolute inset-0 w-full h-full pointer-events-none" viewBox="0 0 500 500">
              <line x1="250" y1="50" x2="250" y2="90" stroke="currentColor" strokeWidth="2" className="text-gray-300 dark:text-gray-700 opacity-50" />
              <line x1="450" y1="250" x2="410" y2="250" stroke="currentColor" strokeWidth="2" className="text-gray-300 dark:text-gray-700 opacity-50" />
              <line x1="250" y1="450" x2="250" y2="410" stroke="currentColor" strokeWidth="2" className="text-gray-300 dark:text-gray-700 opacity-50" />
              <line x1="50" y1="250" x2="90" y2="250" stroke="currentColor" strokeWidth="2" className="text-gray-300 dark:text-gray-700 opacity-50" />
            </svg>

            {/* Animated Curved Text */}
            {/* <div className="absolute bottom-16 right-4">
              <svg className="w-80 h-80" viewBox="0 0 300 300">
                <defs>
                  <path
                    id="curvedPath"
                    d="M 30,220 A 120,120 0 1,1 270,220"
                    fill="none"
                  />
                </defs>
                <text className="text-sm fill-gray-600 dark:fill-gray-400 font-medium">
                  <textPath href="#curvedPath" startOffset="0%">
                    <animate
                      attributeName="startOffset"
                      from="0%"
                      to="100%"
                      dur="20s"
                      repeatCount="indefinite"
                    />
                    langlex ai turns your voice into clear
                  </textPath>
                </text>
              </svg>
            </div> */}
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes bounce-slow {
          0%, 100% {
            transform: translateY(0) translateX(0);
          }
          50% {
            transform: translateY(-10px) translateX(0);
          }
        }
        .animate-bounce-slow {
          animation: bounce-slow 3s ease-in-out infinite;
        }
      `}</style>
    </section>
  );
}
