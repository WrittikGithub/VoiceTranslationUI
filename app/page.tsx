import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Metrics from "@/components/Metrics";
import ContentBlocks from "@/components/ContentBlocks";
import AIIntegrations from "@/components/AIIntegrations";
import BuiltForWork from "@/components/BuiltForWork";
import Pricing from "@/components/Pricing";
import VoiceRecording from "@/components/VoiceRecording";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-gray-50 via-white to-gray-100 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900 transition-colors">
      <Header />
      <section id="home">
        <Hero />
      </section>
      <VoiceRecording />
      <Metrics />
      <ContentBlocks />
      <section id="apis">
        <AIIntegrations />
      </section>
      <section id="user-guide">
        <BuiltForWork />
      </section>
      <section id="pricing">
        <Pricing />
      </section>
      <Footer />
    </main>
  );
}
