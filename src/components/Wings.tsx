import { useState } from 'react';
import ScrollReveal from './ScrollReveal';
import { wings, type Wing } from '@/data/wings';
import * as Icons from 'lucide-react';
import { X, ArrowRight } from 'lucide-react';
import { TapeStrip, DoodleUnderline, StampMark } from './ScrapbookDoodles';

export default function Wings() {
  const [selected, setSelected] = useState<Wing | null>(null);

  const getIcon = (name: string) => {
    const Icon = (Icons as unknown as Record<string, Icons.LucideIcon>)[name];
    return Icon || Icons.Circle;
  };

  const rotations = ['-rotate-1', 'rotate-1', '-rotate-0.5', 'rotate-1.5', '-rotate-1', 'rotate-0.5'];

  return (
    <section id="wings" className="relative py-24 overflow-hidden">
      {/* Background ambient gold glow */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_rgba(212,160,23,0.06),_transparent_65%)] pointer-events-none" />

      <div className="container-max section-padding relative z-10">
        <ScrollReveal className="text-center mb-16">
          <div className="flex items-center justify-center gap-2 mb-2">
            <span className="font-handwriting text-gold-400 text-2xl tracking-wide">✦ Chapter 02 &bull; Discover Your Space ✦</span>
          </div>
          <h2 className="font-display text-4xl sm:text-5xl md:text-6xl font-bold text-white mb-3">
            Six <span className="gold-text">Wings</span> of U2C
          </h2>
          <DoodleUnderline className="mb-4" />
          <p className="text-white/80 max-w-2xl mx-auto text-base sm:text-lg leading-relaxed mt-4">
            Each wing represents a unique space for students to explore their passions, develop skills, and showcase their talents.
          </p>
        </ScrollReveal>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {wings.map((wing, i) => {
            const Icon = getIcon(wing.icon);
            const rot = rotations[i % rotations.length];

            return (
              <ScrollReveal key={wing.id} delay={i * 100}>
                <div
                  onClick={() => setSelected(wing)}
                  className={`group relative scrapbook-card p-6 sm:p-7 cursor-pointer h-full flex flex-col justify-between transition-all duration-300 hover:rotate-0 ${rot}`}
                >
                  {/* Washi tape accent on top */}
                  <div className="absolute -top-3 left-8">
                    <TapeStrip variant={i % 2 === 0 ? 'paper' : 'gold'} angle={i % 2 === 0 ? -3 : 2} className="w-18 h-5" />
                  </div>

                  <div>
                    <div className="flex items-center justify-between mb-4 pt-2">
                      <span className="font-handwriting text-4xl font-bold text-amber-700/80">
                        {wing.number}
                      </span>
                      <div className="w-13 h-13 w-12 h-12 rounded-full border-2 border-dashed border-[#b68d46] bg-[#f5eccf] flex items-center justify-center group-hover:scale-105 transition-all">
                        <Icon className="w-6 h-6 text-[#8e4f05]" />
                      </div>
                    </div>

                    <h3 className="font-handwriting text-3xl font-bold text-[#1a1816] mb-1">
                      {wing.name}
                    </h3>
                    <p className="font-handwriting text-xl text-amber-800 font-semibold mb-3">
                      {wing.tagline}
                    </p>
                    <p className="text-[#453e34] text-sm leading-relaxed mb-6">
                      {wing.description}
                    </p>
                  </div>

                  <div className="pt-4 border-t border-[#dfd4bc]/80 flex items-center justify-between">
                    <div className="flex flex-wrap gap-1 max-w-[70%]">
                      {wing.activities.slice(0, 2).map((act) => (
                        <span key={act} className="text-[10px] font-mono uppercase bg-[#f0e4c6] text-[#6d4428] px-2 py-0.5 rounded">
                          {act}
                        </span>
                      ))}
                      {wing.activities.length > 2 && (
                        <span className="text-[10px] font-mono text-[#796c56] px-1 py-0.5">
                          +{wing.activities.length - 2}
                        </span>
                      )}
                    </div>

                    <button
                      className="inline-flex items-center gap-1.5 text-amber-800 font-semibold text-sm group-hover:gap-2.5 transition-all"
                      aria-label={`Explore ${wing.name}`}
                    >
                      <span className="font-handwriting text-base">Details</span>
                      <ArrowRight className="w-4 h-4 text-amber-700" />
                    </button>
                  </div>
                </div>
              </ScrollReveal>
            );
          })}
        </div>
      </div>

      {/* Modal Dialog for Wing Details */}
      {selected && (
        <div
          className="fixed inset-0 z-[100] flex items-center justify-center bg-black/85 backdrop-blur-sm animate-fade-in p-4"
          onClick={() => setSelected(null)}
        >
          <div
            className="relative scrapbook-card p-7 sm:p-9 max-w-lg w-full animate-scale-in border-2 border-[#dfd4bc] shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Corner washi tape on modal */}
            <div className="absolute -top-3 left-8">
              <TapeStrip variant="gold" angle={-2} className="w-24 h-5" />
            </div>

            <button
              onClick={() => setSelected(null)}
              className="absolute top-4 right-4 p-2 text-[#665d4e] hover:text-[#8e4f05] rounded-full hover:bg-[#ebdcb9] transition-colors"
              aria-label="Close dialog"
            >
              <X className="w-6 h-6" />
            </button>

            {(() => {
              const Icon = getIcon(selected.icon);
              return (
                <>
                  <div className="flex items-center gap-4 mb-6 pr-8 pt-2">
                    <div className="w-16 h-16 rounded-full border-2 border-dashed border-[#b68d46] bg-[#f5eccf] flex items-center justify-center shrink-0">
                      <Icon className="w-8 h-8 text-[#8e4f05]" />
                    </div>
                    <div>
                      <span className="font-handwriting text-amber-700 text-3xl font-bold">{selected.number}</span>
                      <h3 className="font-handwriting text-3xl sm:text-4xl font-bold text-[#1a1816] leading-tight">
                        {selected.name}
                      </h3>
                      <p className="font-handwriting text-amber-800 text-xl font-semibold">{selected.tagline}</p>
                    </div>
                  </div>

                  <p className="text-[#3f392f] text-base leading-relaxed mb-6 font-normal">
                    {selected.description}
                  </p>

                  <div className="border-t border-[#dfd4bc] pt-4">
                    <div className="flex items-center justify-between mb-3">
                      <h4 className="font-handwriting text-[#1a1816] font-bold text-2xl">
                        Wing Activities & Focus Areas
                      </h4>
                      <StampMark text="U2C WING" year="" className="text-[10px]" />
                    </div>
                    <div className="flex flex-wrap gap-2">
                      {selected.activities.map((act) => (
                        <span
                          key={act}
                          className="px-3 py-1.5 rounded border border-[#d8c49c] bg-[#f2e6cb] text-[#553018] text-xs font-medium"
                        >
                          &bull; {act}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div className="mt-7 text-right">
                    <button
                      onClick={() => setSelected(null)}
                      className="px-5 py-2 rounded-full bg-gradient-to-r from-gold-500 to-gold-600 text-navy-950 font-semibold text-sm hover:opacity-95 transition-all"
                    >
                      Close
                    </button>
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
