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
          <p className="text-gold-400 text-sm font-medium tracking-[0.3em] uppercase mb-3">
            Our Journey
          </p>

          <h2 className="font-display text-4xl sm:text-5xl md:text-6xl font-bold text-white mb-4">
            From Students <span className="gold-text">to Alumni</span>
          </h2>

          <div className="w-20 h-1 bg-gradient-to-r from-transparent via-gold-400 to-transparent mx-auto" />

          <p className="text-white/60 mt-6 max-w-2xl mx-auto leading-relaxed">
            {clubInfo.journeyText}
          </p>
        </ScrollReveal>

        {/* Journey wall */}
        <div className="relative max-w-6xl mx-auto">

          {/* Desktop decorative line */}
          <div className="hidden lg:block absolute left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-transparent via-gold-400/20 to-transparent" />

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-x-20 gap-y-12 lg:gap-y-20">

            {journeyTimeline.map((m, i) => {
              const isLeft = i % 2 === 0;

              return (
                <ScrollReveal
                  key={m.id}
                  delay={i * 100}
                  className={`
                    relative
                    ${isLeft ? 'lg:translate-y-6' : 'lg:translate-y-[-10px]'}
                  `}
                >

                  {/* Connector */}
                  <div
                    className={`
                      hidden lg:block absolute top-1/2 w-20 h-px
                      bg-gradient-to-r from-gold-400/0 via-gold-400/40 to-gold-400/0
                      ${isLeft ? '-right-20' : '-left-20'}
                    `}
                  />

                  {/* Timeline dot */}
                  <div
                    className={`
                      hidden lg:block absolute top-1/2 -translate-y-1/2
                      w-4 h-4 rounded-full bg-gold-400
                      ring-4 ring-gold-400/20 z-20
                      ${isLeft ? '-right-[88px]' : '-left-[88px]'}
                    `}
                  />

                  {/* History Card */}
                  <div
                    className={`
                      group relative
                      glass-gold rounded-[28px]
                      p-7 sm:p-8
                      border border-gold-400/10
                      hover:border-gold-400/40
                      hover:bg-gold-400/[0.06]
                      transition-all duration-500
                      shadow-[0_15px_50px_rgba(0,0,0,0.18)]
                      ${isLeft
                        ? 'lg:rotate-[-1deg] hover:rotate-0'
                        : 'lg:rotate-[1deg] hover:rotate-0'
                      }
                    `}
                  >

                    {/* Decorative corner */}
                    <div className="absolute top-4 right-5 text-gold-400/10 text-5xl font-display">
                      "
                    </div>

                    {/* Year */}
                    <div className="flex items-center gap-3 mb-5">

                      <div className="w-10 h-10 rounded-full bg-gold-400/10 border border-gold-400/20 flex items-center justify-center">
                        <Rocket className="w-5 h-5 text-gold-400" />
                      </div>

                      <span className="text-gold-400 font-display text-3xl sm:text-4xl font-bold tracking-tight">
                        {m.year}
                      </span>

                    </div>

                    {/* Title */}
                    <h3 className="text-white text-xl sm:text-2xl font-semibold mb-3">
                      {m.title}
                    </h3>

                    {/* Description */}
                    <p className="text-white/55 text-sm sm:text-base leading-7 max-w-xl">
                      {m.description}
                    </p>

                    {/* Bottom accent */}
                    <div className="mt-6 w-16 h-[2px] bg-gradient-to-r from-gold-400 to-transparent group-hover:w-28 transition-all duration-500" />

                  </div>
                </ScrollReveal>
              );
            })}

          </div>

        </div>

      </div>
    </section>
  );
}
