export default function VoiceWriting() {
  return (
    <section className="max-w-7xl mx-auto px-6 py-20">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        <div>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Let's your voice do the writing.
          </h2>
          <p className="text-lg text-gray-700 mb-6">
            Speak your thoughts and instantly turn them into polished updates that land in Slack. Share the full content, and enjoy your team aligned.
          </p>
          <button className="bg-gray-100 text-gray-900 px-6 py-3 rounded-lg font-medium hover:bg-gray-200 transition-colors flex items-center gap-2">
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
            </svg>
            Download to Windows/MacOS
          </button>
        </div>
        <div className="bg-white rounded-xl p-8 shadow-md border border-gray-100">
          <div className="space-y-4">
            <p className="text-gray-700 leading-relaxed">
              The rain had finally ceased, leaving the streets washed in silver light. Elena pulled her coat tighter, not against the cold, but against the strange feeling that someone had been following her since she left the cafe.
            </p>
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
      </div>
    </section>
  );
}
