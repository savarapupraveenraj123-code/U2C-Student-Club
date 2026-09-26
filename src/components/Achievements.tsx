import ScrollReveal from './ScrollReveal';
import { achievements } from '@/data/achievements';
import * as Icons from 'lucide-react';

export default function Achievements() {
  const getIcon = (name: string) => {
    const Icon = (Icons as unknown as Record<string, Icons.LucideIcon>)[name];
    return Icon || Icons.Award;
  };

  return (
    <section id="achievements" className="relative py-24 bg-navy-950 overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_rgba(212,160,23,0.06),_transparent_60%)]" />
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[500px] h-[500px] bg-gold-400/5 rounded-full blur-[120px] pointer-events-none" />
      <div className="container-max section-padding relative z-10">
        <ScrollReveal className="text-center mb-16">
          <p className="text-gold-400 text-sm font-medium tracking-[0.3em] uppercase mb-3">Achievements</p>
          <h2 className="font-display text-4xl sm:text-5xl md:text-6xl font-bold text-white mb-4">
            Our <span className="gold-text">Achievements</span>
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-transparent via-gold-400 to-transparent mx-auto" />
        </ScrollReveal>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {achievements.map((ach, i) => {
            const Icon = getIcon(ach.icon);
            return (
              <ScrollReveal key={ach.id} delay={i * 120}>
                <div className={`group relative glass-gold rounded-2xl p-8 hover:border-gold-400/40 transition-all duration-500 overflow-hidden ${
                  ach.highlight ? 'md:col-span-1' : ''
                }`}>
                  <div className="absolute -top-8 -right-8 w-32 h-32 bg-gold-400/5 rounded-full blur-2xl group-hover:bg-gold-400/15 transition-all duration-500" />
                  <div className="relative z-10 flex items-start gap-5">
                    <div className="flex-shrink-0">
                      <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-gold-300/20 to-gold-600/20 flex items-center justify-center group-hover:scale-110 transition-transform">
                        <Icon className="w-8 h-8 text-gold-400" />
                      </div>
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center gap-3 mb-2">
                        <span className="text-gold-400/40 font-display text-2xl font-bold">{ach.year}</span>
                        {ach.highlight && (
                          <span className="px-2 py-0.5 rounded-full bg-gold-400/15 text-gold-300 text-[10px] font-medium tracking-wider uppercase">
                            Milestone
                          </span>
                        )}
                      </div>
                      <h3 className="font-display text-xl font-bold text-white mb-2">{ach.title}</h3>
                      <p className="text-white/50 text-sm leading-relaxed">{ach.description}</p>
                    </div>
                  </div>
                </div>
              </ScrollReveal>
            );
          })}
        </div>

        <ScrollReveal delay={200} className="mt-12 text-center">
          <p className="text-white/40 text-sm italic">
            More achievements will be added as U2C continues to grow. To add a new achievement, edit the data file at <code className="text-gold-400/60">src/data/achievements.ts</code>.
          </p>
        </ScrollReveal>
      </div>
    </section>
  );
}
