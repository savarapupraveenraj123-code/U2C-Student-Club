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
    <div className="min-h-screen bg-navy-950 text-white">
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
  );
}

export default App;
