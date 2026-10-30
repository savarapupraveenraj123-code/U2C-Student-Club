import ScrollReveal from './ScrollReveal';
import { activities } from '@/data/site';
import * as Icons from 'lucide-react';
import { TapeStrip, DoodleUnderline, PushPin } from './ScrapbookDoodles';

export default function WhatWeDo() {
  const getIcon = (name: string) => {
    const Icon = (Icons as unknown as Record<string, Icons.LucideIcon>)[name];
    return Icon || Icons.Circle;
  };

  const rotations = ['-rotate-1', 'rotate-1', '-rotate-1.5', 'rotate-0.5', 'rotate-1', '-rotate-0.5'];

  return (
    <section id="activities" className="relative py-24 overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_rgba(212,160,23,0.05),_transparent_65%)] pointer-events-none" />

      <div className="container-max section-padding relative z-10">
        <ScrollReveal className="text-center mb-16">
          <div className="flex items-center justify-center gap-2 mb-2">
            <span className="font-handwriting text-gold-400 text-2xl tracking-wide">✦ Chapter 03 &bull; Club Activities ✦</span>
          </div>
          <h2 className="font-display text-4xl sm:text-5xl md:text-6xl font-bold text-white mb-3">
            What <span className="gold-text">We Do</span>
          </h2>
          <DoodleUnderline className="mb-4" />
          <p className="text-white/80 max-w-2xl mx-auto text-base sm:text-lg leading-relaxed mt-4">
            From technical workshops to high-energy cultural fests, sports, and photography, discover what happens all year at U2C.
          </p>
        </ScrollReveal>

        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-5">
          {activities.map((act, i) => {
            const Icon = getIcon(act.icon);
            const rot = rotations[i % rotations.length];

            return (
              <ScrollReveal key={act.id} delay={i * 50}>
                <div
                  className={`group relative scrapbook-card p-5 text-center h-full flex flex-col items-center justify-center transition-all duration-300 hover:rotate-0 hover:-translate-y-1 ${rot}`}
                >
                  {/* Pin or tape accent */}
                  {i % 2 === 0 ? (
                    <div className="absolute -top-2 left-1/2 -translate-x-1/2">
                      <PushPin />
                    </div>
                  ) : (
                    <div className="absolute -top-2.5 left-1/2 -translate-x-1/2">
                      <TapeStrip variant="paper" angle={i % 3 === 0 ? -2 : 3} className="w-14 h-4" />
                    </div>
                  )}

                  <div className="w-12 h-12 mx-auto mb-3 mt-1 rounded-full border-2 border-dashed border-[#b68d46] bg-[#f5eccf] flex items-center justify-center group-hover:scale-110 transition-transform">
                    <Icon className="w-6 h-6 text-[#8e4f05] group-hover:rotate-6 transition-transform" />
                  </div>

                  <h3 className="font-handwriting text-xl sm:text-2xl font-bold text-[#1a1816] leading-tight">
                    {act.name}
                  </h3>

                  <span className="mt-2 text-[10px] font-mono uppercase tracking-wider text-[#796c56]">
                    Activity #{String(i + 1).padStart(2, '0')}
                  </span>
                </div>
              </ScrollReveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
