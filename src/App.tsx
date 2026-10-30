import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import About from '@/components/About';
import Wings from '@/components/Wings';
import WhatWeDo from '@/components/WhatWeDo';
import Impact from '@/components/Impact';
import Strength from '@/components/Strength';

import Achievements from '@/components/Achievements';
import Journey from '@/components/Journey';
import Team from '@/components/Team';
import Contact from '@/components/Contact';

function App() {
  return (
    <div className="relative min-h-screen text-white">
      <div className="fixed inset-0 z-0 overflow-hidden pointer-events-none" aria-hidden="true">
        <video
          className="h-full w-full object-cover"
          src="/u2c%20logo%20video.mp4"
          autoPlay
          muted
          loop
          playsInline
          preload="metadata"
        />
        <div className="absolute inset-0 bg-navy-950/70" />
      </div>
      <div className="relative z-10">
      <Navbar />
      <main>
        <Hero />
        <About />
        <Wings />
        <WhatWeDo />
        <Impact />
        <Strength />
        
        <Achievements />
        <Journey />
        <Team />
        <Contact />
      </main>
      </div>
    </div>
  );
}

export default App;
