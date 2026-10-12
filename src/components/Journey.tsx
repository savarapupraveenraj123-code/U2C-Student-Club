import ScrollReveal from './ScrollReveal';
import { journeyTimeline } from '@/data/timeline';
import { clubInfo } from '@/data/club';
import { Rocket } from 'lucide-react';

export default function Journey() {
  return (
    <section className="relative py-24 bg-navy-900 overflow-hidden">
      {/* Background glow */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_rgba(212,160,23,0.06),_transparent_65%)]" />

      <div className="container-max section-padding relative z-10">
        {/* Header */}
        <ScrollReveal className="text-center mb-20">
         <p className="text-white/80 mt-6 max-w-2xl mx-auto leading-relaxed">
  {clubInfo.journeyText}
</p>

          <h2 className="font-display text-4xl sm:text-5xl md:text-6xl font-bold text-white mb-4">
            From Students <span className="gold-text">to Alumni</span>
          </h2>

          <div className="w-20 h-1 bg-gradient-to-r from-transparent via-gold-400 to-transparent mx-auto" />

          <p className="text-white/60 mt-6 max-w-2xl mx-auto leading-relaxed">
            {clubInfo.journeyText}
          </p>
        </ScrollReveal>

        {/* Handwritten scrapbook timeline */}
        <div className="relative max-w-6xl mx-auto">
          {/* Desktop decorative line */}
          <div className="hidden lg:block absolute left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-transparent via-gold-400/30 to-transparent" />

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-x-20 gap-y-10 lg:gap-y-16">
            {journeyTimeline.map((m, i) => {
              const isLeft = i % 2 === 0;

              return (
                <ScrollReveal
                  key={m.id}
                  delay={i * 100}
                  className={`relative ${isLeft ? 'lg:translate-y-6' : 'lg:-translate-y-2'}`}
                >
                  {/* Connector */}
                  <div
                    className={`hidden lg:block absolute top-1/2 w-20 h-px bg-gold-400/40 ${isLeft ? '-right-20' : '-left-20'}`}
                  />

                  {/* Timeline dot */}
                  <div
                    className={`hidden lg:block absolute top-1/2 -translate-y-1/2 w-3 h-3 rounded-full bg-gold-400 ring-4 ring-gold-400/20 z-20 ${isLeft ? '-right-[86px]' : '-left-[86px]'}`}
                  />

                  {/* Paper history card */}
                  <article
                    className={`group relative rounded-md bg-[#fff8e8] text-[#242424] p-6 sm:p-8 border border-[#e5d6b5] shadow-[3px_5px_0px_rgba(0,0,0,0.10)] transition-transform duration-300 ${isLeft ? 'lg:-rotate-1 hover:rotate-0' : 'lg:rotate-1 hover:rotate-0'}`}
                  >
                    {/* Paper tape decoration */}
                    <div className="absolute -top-3 left-8 h-6 w-20 rotate-[-3deg] bg-[#d8c79b]/60" />
                    <div className="absolute top-3 right-4 font-['Caveat'] text-[#a33a2b]/20 text-5xl select-none">
                      “
                    </div>

                    {/* Year */}
                    <div className="flex items-center gap-3 mb-4">
                      <div className="w-10 h-10 rounded-full bg-[#a33a2b]/10 border border-[#a33a2b]/20 flex items-center justify-center shrink-0">
                        <Rocket className="w-5 h-5 text-[#a33a2b]" />
                      </div>
                      <span className="font-['Caveat'] text-[#a33a2b] text-4xl sm:text-5xl font-bold tracking-wide">
                        {m.year}
                      </span>
                    </div>

                    {/* Title */}
                    <h3 className="font-['Caveat'] text-[#202020] text-2xl sm:text-3xl font-bold mb-3">
                      {m.title}
                    </h3>

                    {/* Description */}
                    <p className="text-[#45413a] text-sm sm:text-base leading-7 max-w-xl">
                      {m.description}
                    </p>

                    {/* Hand-drawn underline */}
                    <div className="mt-6 w-16 h-[3px] rounded-full bg-[#a33a2b]/70 transition-all duration-300 group-hover:w-28" />
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
