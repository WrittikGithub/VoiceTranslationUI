export default function BuiltForWork() {
  return (
    <section className="max-w-7xl mx-auto px-6 py-20">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        <div>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6 transition-colors">
            Built for the way you work
          </h2>
        </div>
        <div>
          <p className="text-lg text-gray-700 dark:text-gray-300 mb-6 transition-colors">
            Advanced features that give you more control, more accuracy, and a voice-to-text experience designed for the way you work.
          </p>
          <button className="glass-button-secondary px-6 py-3 rounded-xl font-semibold transition-all duration-300 flex items-center gap-2 hover:scale-105">
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11a7 7 0 01-7 7m0 0a7 7 0 01-7-7m7 7v4m0 0H8m4 0h4m-4-8a3 3 0 01-3-3V5a3 3 0 116 0v6a3 3 0 01-3 3z" />
            </svg>
            Write with your Voice
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </button>
        </div>
      </div>
    </section>
  );
}
