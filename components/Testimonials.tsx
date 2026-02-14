export default function Testimonials() {
  const testimonials = [
    {
      name: "M. Alex Smith",
      initial: "M",
      quote: "Langlex AI has transformed how I work. The voice-to-text accuracy is incredible.",
      gradient: "from-purple-400 to-pink-400"
    },
    {
      name: "Sarah Johnson",
      initial: "S",
      quote: "Best voice translation tool I've used. It's become essential to my workflow.",
      gradient: ""
    },
    {
      name: "David Chen",
      initial: "D",
      quote: "The real-time transcription is flawless. Highly recommend!",
      gradient: ""
    },
    {
      name: "Emily Rodriguez",
      initial: "E",
      quote: "Game changer for productivity. Can't imagine working without it.",
      gradient: ""
    }
  ];

  return (
    <section className="max-w-7xl mx-auto px-6 py-20">
      <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-12 text-center">
        People love using Langlex AI for their Most important tasks
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {testimonials.map((testimonial, index) => (
          <div
            key={index}
            className={`bg-white rounded-xl p-6 shadow-md border border-gray-100 ${
              index === 0 ? `bg-gradient-to-br ${testimonial.gradient} text-white` : ""
            }`}
          >
            <div className="flex items-start gap-4">
              <div className={`w-12 h-12 rounded-full flex items-center justify-center font-semibold ${
                index === 0 ? "bg-white/20 text-white" : "bg-gray-200 text-gray-700"
              }`}>
                {testimonial.initial}
              </div>
              <div className="flex-1">
                <h4 className={`font-semibold mb-2 ${index === 0 ? "text-white" : "text-gray-900"}`}>
                  {testimonial.name}
                </h4>
                <p className={`text-sm ${index === 0 ? "text-white/90" : "text-gray-600"}`}>
                  {testimonial.quote}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
