import React from 'react';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { ProblemSection } from './components/ProblemSection';
import { SolutionSection } from './components/SolutionSection';
import { FeaturesSection } from './components/FeaturesSection';
import { SegmentsSection } from './components/SegmentsSection';
import { DifferentiationSection } from './components/DifferentiationSection';
import { SocialProofSection } from './components/SocialProofSection';
import { Footer } from './components/Footer';
import { ChatWidget } from './components/ChatWidget';

function App() {
  return (
    <div className="min-h-screen bg-white overflow-x-hidden">
      <Header />
      <main>
        <Hero />
        <ProblemSection />
        <SolutionSection />
        <FeaturesSection />
        <SegmentsSection />
        <DifferentiationSection />
        <SocialProofSection />
      </main>
      <Footer />
      <ChatWidget />
    </div>
  );
}

export default App;