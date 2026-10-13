import ScrollReveal from './ScrollReveal';
import { clubInfo } from '@/data/club';
import { Heart, Users, Sparkles } from 'lucide-react';
import { TapeStrip, DoodleUnderline } from './ScrapbookDoodles';

export default function Strength() {
  const pillars = [
    { title: 'Student Unity', desc: 'Driven by peer collaboration, shared ambition, and creative freedom.', icon: Users },
    { title: 'Faculty Support', desc: 'Guided by dedicated mentors who empower students to take initiative.', icon: Heart },
    { title: 'Endless Ideas', desc: 'A limitless environment where any project or concept can come to life.', icon: Sparkles },
  ];

  return (
    <section id="strength" className="relative py-24 bg-navy-900 overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_rgba(212,160,23,0.06),_transparent_65%)] pointer-events-none" />

      <div className="container-max section-padding relative z-10">
        <div className="max-w-4xl mx-auto text-center mb-16">
          <ScrollReveal>
            <div className="flex items-center justify-center gap-2 mb-2">
              <span className="font-handwriting text-gold-400 text-2xl tracking-wide">✦ Chapter 05 &bull; The Pillars ✦</span>
            </div>
            <h2 className="font-display text-4xl sm:text-5xl md:text-6xl font-bold text-white mb-3">
              United by <span className="gold-text">Students</span>,
              <br className="hidden sm:inline" /> Guided by <span className="gold-text">Faculty</span>
            </h2>
            <DoodleUnderline className="mb-6" />
            <p className="text-white/85 text-lg leading-relaxed max-w-3xl mx-auto">
              {clubInfo.strengthText}
            </p>
          </ScrollReveal>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {pillars.map((pillar, i) => {
            const Icon = pillar.icon;
            const rots = ['-rotate-1', 'rotate-1', '-rotate-0.5'];
            const rot = rots[i % rots.length];

            return (
              <ScrollReveal key={pillar.title} delay={i * 100}>
                <div
                  className={`group relative scrapbook-card p-6 sm:p-7 text-center h-full flex flex-col justify-between transition-all duration-300 hover:rotate-0 hover:-translate-y-1 ${rot}`}
                >
                  <div className="absolute -top-3 left-1/2 -translate-x-1/2">
                    <TapeStrip variant={i === 1 ? 'gold' : 'paper'} angle={i % 2 === 0 ? -2 : 3} className="w-18 h-4" />
                  </div>

                  <div className="pt-2">
                    <div className="w-14 h-14 mx-auto mb-4 rounded-full border-2 border-dashed border-[#b68d46] bg-[#f5eccf] flex items-center justify-center group-hover:scale-105 transition-transform">
                      <Icon className="w-7 h-7 text-[#8e4f05]" />
                    </div>

                    <h3 className="font-handwriting text-2xl sm:text-3xl font-bold text-[#1a1816] mb-2">
                      {pillar.title}
                    </h3>
                    <p className="text-[#453e34] text-sm leading-relaxed">
                      {pillar.desc}
                    </p>
                  </div>

                  <div className="mt-5 pt-3 border-t border-[#dfd4bc]/80 flex items-center justify-between text-[11px] font-mono text-[#796c56]">
                    <span>PILLAR 0{i + 1}</span>
                    <span className="font-handwriting text-amber-800 text-sm font-semibold">Core Value</span>
                  </div>
                </div>
              </ScrollReveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
