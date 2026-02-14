export default function Metrics() {
  return (
    <section className="max-w-7xl mx-auto px-6 py-16 relative z-0">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
        {/* Active Users */}
        <div className="glass-card rounded-xl p-6 transition-all duration-300 hover:scale-105">
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 bg-gradient-to-br from-purple-400 to-pink-400 rounded-full flex items-center justify-center shadow-lg">
              <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
              </svg>
            </div>
            <div>
              <div className="text-3xl font-bold text-gray-900 dark:text-white transition-colors">250K</div>
              <div className="text-sm text-gray-600 dark:text-gray-400 transition-colors">Active Users</div>
            </div>
          </div>
        </div>

        {/* Total Downloads */}
        <div className="glass-card rounded-xl p-6 transition-all duration-300 hover:scale-105">
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 bg-gradient-to-br from-blue-400 to-cyan-400 rounded-full flex items-center justify-center shadow-lg">
              <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
              </svg>
            </div>
            <div>
              <div className="text-3xl font-bold text-gray-900 dark:text-white transition-colors">2.5M</div>
              <div className="text-sm text-gray-600 dark:text-gray-400 transition-colors">Total Download</div>
            </div>
          </div>
        </div>

        {/* Total Users */}
        <div className="glass-card rounded-xl p-6 transition-all duration-300 hover:scale-105">
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 bg-gradient-to-br from-green-400 to-emerald-400 rounded-full flex items-center justify-center shadow-lg">
              <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
              </svg>
            </div>
            <div>
              <div className="text-3xl font-bold text-gray-900 dark:text-white transition-colors">4.6M</div>
              <div className="text-sm text-gray-600 dark:text-gray-400 transition-colors">Total Users</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
