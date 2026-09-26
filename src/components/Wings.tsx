import { useState } from 'react';
import ScrollReveal from './ScrollReveal';
import { wings, type Wing } from '@/data/wings';
import * as Icons from 'lucide-react';
import { X, ArrowRight } from 'lucide-react';

export default function Wings() {
  const [selected, setSelected] = useState<Wing | null>(null);

  const getIcon = (name: string) => {
    const Icon = (Icons as unknown as Record<string, Icons.LucideIcon>)[name];
    return Icon || Icons.Circle;
  };

  return (
    <section id="wings" className="relative py-24 bg-navy-900 overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom,_rgba(212,160,23,0.05),_transparent_60%)]" />
      <div className="container-max section-padding relative z-10">
        <ScrollReveal className="text-center mb-16">
          <p className="text-gold-400 text-sm font-medium tracking-[0.3em] uppercase mb-3">What We Do</p>
          <h2 className="font-display text-4xl sm:text-5xl md:text-6xl font-bold text-white mb-4">
            Six <span className="gold-text">Wings</span> of U2C
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-transparent via-gold-400 to-transparent mx-auto" />
          <p className="text-white/50 mt-6 max-w-2xl mx-auto">
            Each wing represents a unique space for students to explore their passions and showcase their talents.
          </p>
        </ScrollReveal>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {wings.map((wing, i) => {
            const Icon = getIcon(wing.icon);
            return (
              <ScrollReveal key={wing.id} delay={i * 100}>
                <div
                  onClick={() => setSelected(wing)}
                  className="group relative glass-gold rounded-2xl p-6 cursor-pointer h-full overflow-hidden transition-all duration-500 hover:border-gold-400/40 hover:bg-gold-400/5"
                >
                  <div className="absolute -top-12 -right-12 w-32 h-32 bg-gold-400/5 rounded-full blur-2xl group-hover:bg-gold-400/15 transition-all duration-500" />
                  <div className="relative z-10">
                    <div className="flex items-center justify-between mb-5">
                      <span className="font-display text-4xl font-bold text-gold-400/20 group-hover:text-gold-400/40 transition-colors">
                        {wing.number}
                      </span>
                      <div className="w-14 h-14 rounded-xl bg-gold-400/10 flex items-center justify-center group-hover:bg-gold-400/20 group-hover:scale-110 transition-all">
                        <Icon className="w-7 h-7 text-gold-400" />
                      </div>
                    </div>
                    <h3 className="font-display text-xl font-bold text-white mb-1">{wing.name}</h3>
                    <p className="text-gold-400/70 text-xs font-medium tracking-wider uppercase mb-3">{wing.tagline}</p>
                    <p className="text-white/50 text-sm leading-relaxed mb-5">{wing.description}</p>
                    <button className="flex items-center gap-2 text-gold-400 text-sm font-medium group-hover:gap-3 transition-all">
                      Explore Wing
                      <ArrowRight className="w-4 h-4" />
                    </button>
                  </div>
                </div>
              </ScrollReveal>
            );
          })}
        </div>
      </div>

      {selected && (
        <div
          className="fixed inset-0 z-[100] flex items-center justify-center bg-black/80 backdrop-blur-sm animate-fade-in p-4"
          onClick={() => setSelected(null)}
        >
          <div
            className="glass-gold rounded-3xl p-8 max-w-lg w-full relative animate-scale-in"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={() => setSelected(null)}
              className="absolute top-4 right-4 p-2 text-white/50 hover:text-gold-400 transition-colors"
              aria-label="Close"
            >
              <X className="w-6 h-6" />
            </button>
            {(() => {
              const Icon = getIcon(selected.icon);
              return (
                <>
                  <div className="flex items-center gap-4 mb-6">
                    <div className="w-16 h-16 rounded-2xl bg-gold-400/15 flex items-center justify-center">
                      <Icon className="w-8 h-8 text-gold-400" />
                    </div>
                    <div>
                      <span className="text-gold-400/40 font-display text-2xl font-bold">{selected.number}</span>
                      <h3 className="font-display text-2xl font-bold text-white">{selected.name}</h3>
                      <p className="text-gold-400/70 text-xs font-medium tracking-wider uppercase">{selected.tagline}</p>
                    </div>
                  </div>
                  <p className="text-white/60 leading-relaxed mb-6">{selected.description}</p>
                  <div>
                    <h4 className="text-white font-semibold text-sm mb-3">Activities</h4>
                    <div className="flex flex-wrap gap-2">
                      {selected.activities.map((act) => (
                        <span key={act} className="px-3 py-1.5 rounded-full bg-gold-400/10 text-gold-300 text-xs font-medium">
                          {act}
                        </span>
                      ))}
                    </div>
                  </div>
                </>
              );
            })()}
          </div>
        </div>
      )}
    </section>
  );
}
