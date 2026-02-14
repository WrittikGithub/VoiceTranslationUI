export default function ContentBlocks() {
  return (
    <section className="max-w-7xl mx-auto px-6 py-16">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* Left Block - Chat History */}
        <div className="glass-card rounded-xl p-8 transition-all duration-300 hover:scale-[1.02]">
          <div className="space-y-4">
            <p className="text-gray-700 dark:text-gray-300 leading-relaxed transition-colors">
              "Hello, I need to translate a business presentation from English to Indian Languages. Can you help me convert my voice notes into professional Indian Languages text? I have about 15 minutes of audio that needs to be transcribed and translated accurately for an important client meeting tomorrow morning."
            </p>
            <div className="flex items-center gap-2 pt-4">
              <div className="flex-1 h-1 bg-gradient-to-r from-purple-400 via-pink-400 to-blue-400 rounded-full"></div>
            </div>
            <div className="flex items-end gap-1.5 pt-2">
              <div className="w-1.5 h-6 bg-purple-400 rounded-full"></div>
              <div className="w-1.5 h-10 bg-pink-400 rounded-full"></div>
              <div className="w-1.5 h-4 bg-blue-400 rounded-full"></div>
              <div className="w-1.5 h-8 bg-purple-400 rounded-full"></div>
              <div className="w-1.5 h-6 bg-pink-400 rounded-full"></div>
              <div className="w-1.5 h-12 bg-blue-400 rounded-full"></div>
              <div className="w-1.5 h-5 bg-purple-400 rounded-full"></div>
              <div className="w-1.5 h-7 bg-pink-400 rounded-full"></div>
              <div className="w-1.5 h-9 bg-blue-400 rounded-full"></div>
              <div className="w-1.5 h-5 bg-purple-400 rounded-full"></div>
            </div>
          </div>
        </div>

        {/* Right Block - AI Agent */}
        <div className="glass-card rounded-xl p-8 transition-all duration-300 hover:scale-[1.02]">
          <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-6 transition-colors">Langlex AI - Hello, how can I help?</h3>
          <div className="space-y-4 mb-6">
            <div className="flex items-start gap-3">
              <span className="text-gray-900 dark:text-white font-medium transition-colors">1.</span>
              <div>
                <p className="text-gray-900 dark:text-white font-medium transition-colors">Real-time Voice Translation</p>
                <p className="text-gray-600 dark:text-gray-400 text-sm mt-1 transition-colors">Speak naturally and get instant translations in over 50 languages with high accuracy</p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <span className="text-gray-900 dark:text-white font-medium transition-colors">2.</span>
              <div>
                <p className="text-gray-900 dark:text-white font-medium transition-colors">AI-Powered Transcription</p>
                <p className="text-gray-600 dark:text-gray-400 text-sm mt-1 transition-colors">Convert your voice recordings into clear, formatted text with advanced speech recognition</p>
              </div>
            </div>
          </div>
          {/* <div className="flex gap-2 mt-8">
            <input
              type="text"
              placeholder="Type your message or speak..."
              className="flex-1 px-4 py-2 glass-element border border-gray-300 dark:border-gray-600 rounded-lg text-sm text-gray-900 dark:text-white bg-white/50 dark:bg-gray-800/50 focus:outline-none focus:ring-2 focus:ring-purple-500 transition-all"
            />
            <select className="px-4 py-2 glass-element border border-gray-300 dark:border-gray-600 rounded-lg text-sm bg-white/50 dark:bg-gray-800/50 text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-purple-500 transition-all">
              <option>GPT-4</option>
              <option>GPT-3.5</option>
              <option>Claude</option>
            </select>
            <button className="px-4 py-2 glass-button-primary rounded-lg transition-all hover:scale-110">
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
              </svg>
            </button>
          </div> */}
        </div>
      </div>
    </section>
  );
}
