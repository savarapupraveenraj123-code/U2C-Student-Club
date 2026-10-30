import ScrollReveal from './ScrollReveal';
import { journeyTimeline } from '@/data/timeline';
import { clubInfo } from '@/data/club';
import { Rocket } from 'lucide-react';
import { TapeStrip, DoodleUnderline, StampMark } from './ScrapbookDoodles';

export default function Journey() {
  return (
    <section id="journey" className="relative py-24 overflow-hidden">
      {/* Background glow */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_rgba(212,160,23,0.06),_transparent_65%)] pointer-events-none" />

      <div className="container-max section-padding relative z-10">
        {/* Header */}
        <ScrollReveal className="text-center mb-20">
          <div className="flex items-center justify-center gap-2 mb-2">
            <span className="font-handwriting text-gold-400 text-2xl tracking-wide">✦ Chapter 07 &bull; Generations Connected ✦</span>
          </div>
          <h2 className="font-display text-4xl sm:text-5xl md:text-6xl font-bold text-white mb-3">
            From Students <span className="gold-text">to Alumni</span>
          </h2>
          <DoodleUnderline className="mb-4" />
          <p className="text-white/80 max-w-2xl mx-auto text-base sm:text-lg leading-relaxed mt-4">
            {clubInfo.journeyText}
          </p>
        </ScrollReveal>

        {/* Handwritten scrapbook timeline */}
        <div className="relative max-w-6xl mx-auto">
          {/* Desktop decorative center dashed track */}
          <div className="hidden lg:block absolute left-1/2 top-0 bottom-0 w-[2px] -translate-x-1/2 border-l-2 border-dashed border-gold-400/35" />

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-x-20 gap-y-12">
            {journeyTimeline.map((m, i) => {
              const isLeft = i % 2 === 0;

              return (
                <ScrollReveal
                  key={m.id}
                  delay={i * 100}
                  className={`relative ${isLeft ? 'lg:translate-y-4' : 'lg:-translate-y-4'}`}
                >
                  {/* Connector lines on desktop */}
                  <div
                    className={`hidden lg:block absolute top-1/2 w-20 border-t-2 border-dashed border-gold-400/40 ${
                      isLeft ? '-right-20' : '-left-20'
                    }`}
                  />

                  {/* Timeline dot */}
                  <div
                    className={`hidden lg:block absolute top-1/2 -translate-y-1/2 w-4 h-4 rounded-full bg-gold-400 ring-4 ring-gold-400/20 z-20 ${
                      isLeft ? '-right-[88px]' : '-left-[88px]'
                    }`}
                  />

                  {/* Paper history card */}
                  <article
                    className={`group relative scrapbook-card p-6 sm:p-8 transition-all duration-300 ${
                      isLeft ? 'lg:-rotate-1 hover:rotate-0' : 'lg:rotate-1 hover:rotate-0'
                    }`}
                  >
                    {/* Washi tape decoration */}
                    <div className="absolute -top-3 left-8">
                      <TapeStrip variant={i % 2 === 0 ? 'paper' : 'gold'} angle={isLeft ? -3 : 2} className="w-22 h-5" />
                    </div>

                    {/* Year badge */}
                    <div className="flex items-center justify-between gap-3 mb-4 pt-2">
                      <div className="flex items-center gap-3">
                        <div className="w-11 h-11 rounded-full border-2 border-dashed border-[#b68d46] bg-[#f5eccf] flex items-center justify-center shrink-0">
                          <Rocket className="w-5 h-5 text-[#8e4f05]" />
                        </div>
                        <span className="font-handwriting text-4xl sm:text-5xl font-bold text-amber-700 tracking-wide">
                          {m.year}
                        </span>
                      </div>

                      <StampMark text="U2C STORY" year="" className="text-[10px]" />
                    </div>

                    {/* Title */}
                    <h3 className="font-handwriting text-2xl sm:text-3xl font-bold text-[#1a1816] mb-2 leading-tight">
                      {m.title}
                    </h3>

                    {/* Description */}
                    <p className="text-[#453e34] text-sm sm:text-base leading-relaxed">
                      {m.description}
                    </p>

                    <div className="mt-5 pt-3 border-t border-[#dfd4bc]/80 flex items-center justify-between text-[11px] font-mono text-[#796c56]">
                      <span>CHAPTER ENTRY #{String(i + 1).padStart(2, '0')}</span>
                      <span className="font-handwriting text-amber-800 text-sm font-semibold">Decade Archive</span>
                    </div>
                  </article>
                </ScrollReveal>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
