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
    <section id="wings" className="relative py-24 bg-[#f5efdf] overflow-hidden">
      <div className="absolute inset-0 opacity-40 pointer-events-none bg-[radial-gradient(ellipse_at_top_left,_rgba(163,58,43,0.07),_transparent_55%)]" />
      <div className="container-max section-padding relative z-10">
        <ScrollReveal className="text-center mb-16">
          <p className="font-['Caveat'] text-[#a33a2b] text-2xl sm:text-3xl font-bold tracking-wide mb-2">What We Do</p>
          <h2 className="font-['Caveat'] text-5xl sm:text-6xl md:text-7xl font-bold text-[#242424] mb-3">
            Six <span className="text-[#a33a2b] underline decoration-[#c9a45c] decoration-2 underline-offset-8">Wings</span> of U2C
          </h2>
          <div className="w-24 h-[2px] bg-[#a33a2b] mx-auto rotate-[-1deg]" />
          <p className="text-[#554f45] mt-6 max-w-2xl mx-auto text-sm sm:text-base leading-7">
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
                  className={`group relative bg-[#fffaf0] text-[#28251f] rounded-sm p-6 sm:p-7 cursor-pointer h-full overflow-hidden border border-[#dfd0ae] shadow-[3px_5px_0px_rgba(55,43,25,0.10)] transition-all duration-300 hover:shadow-[5px_7px_0px_rgba(55,43,25,0.13)] ${i % 3 === 0 ? 'md:-rotate-1 hover:rotate-0' : i % 3 === 1 ? 'md:rotate-[0.7deg] hover:rotate-0' : 'md:rotate-[-0.4deg] hover:rotate-0'}`}
                >
                  <div className="absolute top-3 right-3 w-3 h-3 rounded-full bg-[#d8c28f]/70" />
                  <div className="relative z-10">
                    <div className="flex items-center justify-between mb-5">
                      <span className="font-['Caveat'] text-4xl font-bold text-[#a33a2b]/55 transition-colors">
                        {wing.number}
                      </span>
                      <div className="w-14 h-14 rounded-full border-2 border-dashed border-[#b68d46] bg-[#f4e8ca] flex items-center justify-center group-hover:scale-105 transition-all">
                        <Icon className="w-7 h-7 text-[#a33a2b]" />
                      </div>
                    </div>
                    <h3 className="font-['Caveat'] text-3xl font-bold text-[#242424] mb-1">{wing.name}</h3>
                    <p className="font-['Caveat'] text-[#a33a2b] text-xl font-semibold mb-2">{wing.tagline}</p>
                    <p className="text-[#514b41] text-sm leading-7 mb-5">{wing.description}</p>
                    <button className="flex items-center gap-2 text-[#a33a2b] text-sm font-semibold group-hover:gap-3 transition-all">
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
          className="fixed inset-0 z-[100] flex items-center justify-center bg-[#171717]/80 backdrop-blur-sm animate-fade-in p-4"
          onClick={() => setSelected(null)}
        >
          <div
            className="bg-[#fff8e8] text-[#242424] border border-[#dfd0ae] shadow-2xl rounded-sm p-7 sm:p-8 max-w-lg w-full relative animate-scale-in"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={() => setSelected(null)}
              className="absolute top-4 right-4 p-2 text-[#665d4e] hover:text-[#a33a2b] transition-colors"
              aria-label="Close"
            >
              <X className="w-6 h-6" />
            </button>
            {(() => {
              const Icon = getIcon(selected.icon);
              return (
                <>
                  <div className="flex items-center gap-4 mb-6 pr-8">
                    <div className="w-16 h-16 rounded-full border-2 border-dashed border-[#b68d46] bg-[#f4e8ca] flex items-center justify-center shrink-0">
                      <Icon className="w-8 h-8 text-[#a33a2b]" />
                    </div>
                    <div>
                      <span className="font-['Caveat'] text-[#a33a2b]/70 text-3xl font-bold">{selected.number}</span>
                      <h3 className="font-['Caveat'] text-3xl sm:text-4xl font-bold text-[#242424]">{selected.name}</h3>
                      <p className="font-['Caveat'] text-[#a33a2b] text-xl font-semibold">{selected.tagline}</p>
                    </div>
                  </div>
                  <p className="text-[#514b41] leading-7 mb-6">{selected.description}</p>
                  <div>
                    <h4 className="font-['Caveat'] text-[#242424] font-bold text-2xl mb-3">Activities</h4>
                    <div className="flex flex-wrap gap-2">
                      {selected.activities.map((act) => (
                        <span key={act} className="px-3 py-1.5 rounded-sm border border-[#d8c49c] bg-[#f5e9cf] text-[#6d4428] text-xs font-medium">
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
