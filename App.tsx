import React from 'react';
import { Hero } from './components/Hero';
import { PainPoints } from './components/PainPoints';
import { VideoSection } from './components/VideoSection';
import { About } from './components/About';
import { Methodology } from './components/Methodology';
import { Audience } from './components/Audience';
import { FAQ } from './components/FAQ';
import { Footer } from './components/Footer';

const App: React.FC = () => {
  return (
    <main className="w-full overflow-x-hidden selection:bg-sage-200 selection:text-sage-900">
      <Hero />
      <PainPoints />
      <VideoSection />
      <About />
      <Methodology />
      <Audience />
      <FAQ />
      <Footer />
    </main>
  );
};

export default App;