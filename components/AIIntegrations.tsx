export default function AIIntegrations() {
  const companies = [
    "OpenAI",
    "NovelAI",
    "Google AI",
    "Hugging Face",
    "Midjourney",
    "stability.ai"
  ];

  return (
    <section className="max-w-7xl mx-auto px-6 py-16">
      <div className="flex items-center justify-center gap-8 flex-wrap">
        {companies.map((company, index) => (
          <div key={company} className="flex items-center">
            <span className="text-gray-600 text-sm font-medium">{company}</span>
            {index < companies.length - 1 && (
              <div className="w-px h-6 bg-gray-300 mx-4"></div>
            )}
          </div>
        ))}
      </div>
    </section>
  );
}
