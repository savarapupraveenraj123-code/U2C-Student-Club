import ScrollReveal from './ScrollReveal';
import { achievements } from '@/data/achievements';
import * as Icons from 'lucide-react';
import { TapeStrip, DoodleUnderline, StampMark } from './ScrapbookDoodles';

export default function Achievements() {
  const getIcon = (name: string) => {
    const Icon = (Icons as unknown as Record<string, Icons.LucideIcon>)[name];
    return Icon || Icons.Award;
  };

  const cardRots = ['-rotate-1', 'rotate-1', 'rotate-0.5', '-rotate-1'];

  return (
    <section id="achievements" className="relative py-24 overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_rgba(212,160,23,0.06),_transparent_65%)] pointer-events-none" />

      <div className="container-max section-padding relative z-10">
        <ScrollReveal className="text-center mb-16">
          <div className="flex items-center justify-center gap-2 mb-2">
            <span className="font-handwriting text-gold-400 text-2xl tracking-wide">✦ Chapter 06 &bull; Hall of Fame ✦</span>
          </div>
          <h2 className="font-display text-4xl sm:text-5xl md:text-6xl font-bold text-white mb-3">
            Our <span className="gold-text">Achievements</span>
          </h2>
          <DoodleUnderline className="mb-4" />
          <p className="text-white/80 max-w-2xl mx-auto text-base sm:text-lg leading-relaxed mt-4">
            Benchmark moments that celebrate U2C's student leadership, innovation, and university-wide impact.
          </p>
        </ScrollReveal>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {achievements.map((ach, i) => {
            const Icon = getIcon(ach.icon);
            const rot = cardRots[i % cardRots.length];

            return (
              <ScrollReveal key={ach.id} delay={i * 120}>
                <div
                  className={`group relative scrapbook-card p-7 sm:p-8 transition-all duration-300 hover:rotate-0 hover:-translate-y-1 ${rot}`}
                >
                  {/* Washi tape at top */}
                  <div className={`absolute -top-3 ${i % 2 === 0 ? 'left-8' : 'right-8'}`}>
                    <TapeStrip variant={i % 2 === 0 ? 'gold' : 'paper'} angle={i % 2 === 0 ? -2 : 3} className="w-20 h-5" />
                  </div>

                  <div className="flex items-start gap-5 pt-2">
                    <div className="flex-shrink-0">
                      <div className="w-16 h-16 rounded-full border-2 border-dashed border-[#b68d46] bg-[#f5eccf] flex items-center justify-center group-hover:scale-105 transition-transform">
                        <Icon className="w-8 h-8 text-[#8e4f05]" />
                      </div>
                    </div>

                    <div className="flex-1">
                      <div className="flex items-center gap-3 mb-2">
                        <span className="font-handwriting text-3xl font-bold text-amber-700">
                          {ach.year}
                        </span>
                        {ach.highlight && (
                          <span className="px-2.5 py-0.5 rounded border border-[#d8c49c] bg-[#f2e6cb] text-[#6d4428] text-[10px] font-mono uppercase tracking-wider font-semibold">
                            Milestone
                          </span>
                        )}
                      </div>

                      <h3 className="font-handwriting text-2xl sm:text-3xl font-bold text-[#1a1816] mb-2 leading-tight">
                        {ach.title}
                      </h3>

                      <p className="text-[#453e34] text-sm leading-relaxed">
                        {ach.description}
                      </p>
                    </div>
                  </div>

                  <div className="mt-5 pt-3 border-t border-[#dfd4bc]/80 flex items-center justify-between text-[11px] font-mono text-[#796c56]">
                    <span>RECORD #{String(i + 1).padStart(2, '0')}</span>
                    <StampMark text="ANITS RECOGNIZED" year={ach.year} className="text-[10px]" />
                  </div>
                </div>
              </ScrollReveal>
            );
          })}
        </div>

        <ScrollReveal delay={200} className="mt-14 text-center">
          <p className="text-white/50 text-sm font-handwriting text-lg">
            ✦ More achievements are written every semester as U2C students dream bigger ✦
          </p>
        </ScrollReveal>
      </div>
    </section>
  );
}
