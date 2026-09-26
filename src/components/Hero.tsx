import ParticleBackground from './ParticleBackground';
import { clubInfo } from '@/data/club';
import { ChevronDown, ArrowRight } from 'lucide-react';
import ClubLogo from './ClubLogo';

export default function Hero() {
  const scrollTo = (href: string) => {
    document.querySelector(href)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden bg-navy-950">
      <div className="absolute inset-0 bg-gradient-to-b from-navy-950 via-navy-900 to-navy-950" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_rgba(212,160,23,0.08),_transparent_70%)]" />
      <ParticleBackground density={70} />

      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[400px] h-[400px] bg-gold-400/10 rounded-full blur-[100px] animate-glow-pulse pointer-events-none" />

      <div className="relative z-10 container-max section-padding text-center pt-20 pb-10">
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full glass-gold text-gold-300 text-xs font-medium tracking-wider uppercase mb-8 animate-fade-down">
          <span className="w-1.5 h-1.5 rounded-full bg-gold-400 animate-pulse" />
          Established 2016 &bull; A Decade of Legacy
        </div>

      <div className="relative inline-block mb-8 animate-scale-in">
  <div className="absolute inset-0 bg-gold-400/20 rounded-full blur-3xl animate-glow-pulse" />

  <div className="relative w-44 h-44 sm:w-56 sm:h-56 mx-auto flex items-center justify-center drop-shadow-[0_0_28px_rgba(242,173,22,0.35)]">
    <ClubLogo className="w-full h-full" priority />
  </div>
</div>

        <h1 className="font-display text-6xl sm:text-7xl md:text-8xl lg:text-9xl font-bold text-white tracking-tight mb-2 animate-fade-up text-shadow-lg-gold">
          U TOO CAN
        </h1>

        <p className="text-lg sm:text-xl text-gold-400/90 font-medium tracking-[0.3em] uppercase mb-4 animate-fade-up" style={{ animationDelay: '0.15s' }}>
          Students Club
        </p>

        <p className="text-base sm:text-lg text-gold-300 font-medium mb-8 animate-fade-up" style={{ animationDelay: '0.25s' }}>
          {clubInfo.tagline}
        </p>

        <p className="max-w-2xl mx-auto text-white/60 text-base sm:text-lg leading-relaxed mb-10 animate-fade-up" style={{ animationDelay: '0.35s' }}>
          Empowering students to explore their talents, express their creativity, build confidence, and create experiences beyond academics.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 animate-fade-up" style={{ animationDelay: '0.45s' }}>
          <button
            onClick={() => scrollTo('#about')}
            className="group flex items-center gap-2 px-8 py-3.5 rounded-full bg-gradient-to-r from-gold-400 to-gold-600 text-navy-950 font-semibold magnetic-btn hover:shadow-xl hover:shadow-gold-500/40 transition-all"
          >
            Explore U2C
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </button>
        </div>
      </div>

      <button
        onClick={() => scrollTo('#about')}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 text-white/40 hover:text-gold-400 transition-colors animate-scroll-bounce"
        aria-label="Scroll down"
      >
        <ChevronDown className="w-6 h-6" />
      </button>
    </section>
  );
}
