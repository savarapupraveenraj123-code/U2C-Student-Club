import ScrollReveal from './ScrollReveal';
import { useScrollReveal } from '@/hooks/useScrollReveal';
import { useCounter } from '@/hooks/useCounter';
import { stats } from '@/data/site';
import { clubInfo } from '@/data/club';
import { TapeStrip, DoodleUnderline, StampMark } from './ScrapbookDoodles';

function StatCard({ stat, start, index }: { stat: typeof stats[0]; start: boolean; index: number }) {
  const count = useCounter(typeof stat.value === 'number' ? stat.value : 0, 2000, start);
  const display = typeof stat.value === 'number' ? `${count}${stat.suffix}` : `${stat.value}${stat.suffix}`;
  const rots = ['-rotate-1', 'rotate-1', '-rotate-1.5', 'rotate-1'];
  const rot = rots[index % rots.length];

  return (
    <div className={`relative scrapbook-card p-7 text-center h-full flex flex-col justify-between transition-all duration-300 hover:rotate-0 hover:-translate-y-1 ${rot}`}>
      <div className="absolute -top-3 left-1/2 -translate-x-1/2">
        <TapeStrip variant={index % 2 === 0 ? 'gold' : 'paper'} angle={index % 2 === 0 ? -2 : 3} className="w-18 h-4" />
      </div>

      <div className="pt-2">
        <div className="font-display text-5xl sm:text-6xl font-extrabold text-amber-700 mb-1 tracking-tight">
          {display}
        </div>
        <p className="font-handwriting text-2xl font-bold text-[#1a1816] leading-tight">
          {stat.label}
        </p>
      </div>

      <div className="mt-4 pt-3 border-t border-[#dfd4bc]/80 flex items-center justify-between text-[11px] font-mono text-[#796c56]">
        <span>METRIC #{index + 1}</span>
        <span className="text-amber-800 font-semibold">VERIFIED</span>
      </div>
    </div>
  );
}

export default function Impact() {
  const { ref, revealed } = useScrollReveal<HTMLDivElement>();

  return (
    <section id="impact" className="relative py-24 overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_rgba(212,160,23,0.06),_transparent_65%)] pointer-events-none" />

      <div className="container-max section-padding relative z-10">
        <ScrollReveal className="text-center mb-16">
          <div className="flex items-center justify-center gap-2 mb-2">
            <span className="font-handwriting text-gold-400 text-2xl tracking-wide">✦ Chapter 04 &bull; Growth & Impact ✦</span>
          </div>
          <h2 className="font-display text-4xl sm:text-5xl md:text-6xl font-bold text-white mb-3">
            Student-Driven. <span className="gold-text">Creative.</span>
            <br />
            Inclusive. <span className="gold-text">Impactful.</span>
          </h2>
          <DoodleUnderline className="mb-4" />
          <p className="text-white/80 max-w-2xl mx-auto text-base sm:text-lg leading-relaxed mt-4">
            Ten continuous years of community building, talent exploration, and campus leadership.
          </p>
        </ScrollReveal>

        <div ref={ref} className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {stats.map((stat, i) => (
            <ScrollReveal key={stat.id} delay={i * 100}>
              <StatCard stat={stat} start={revealed} index={i} />
            </ScrollReveal>
          ))}
        </div>

        {/* Resilience Memo Note */}
        <ScrollReveal className="max-w-3xl mx-auto">
          <div className="relative scrapbook-card p-6 sm:p-8 rotate-[-0.5deg]">
            <div className="absolute -top-3.5 left-8">
              <TapeStrip variant="gold" angle={-1} className="w-24 h-5" />
            </div>

            <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 mb-3 pt-2">
              <div className="flex items-center gap-2">
                <span className="font-handwriting text-3xl font-bold text-amber-800">
                  Resilience & Spirit
                </span>
                <span className="font-mono text-xs uppercase bg-[#ebdcb9] text-[#6d4428] px-2 py-0.5 rounded">
                  2020 Archive
                </span>
              </div>
              <StampMark text="U2C PERSEVERANCE" year="COVID-19" className="text-[11px]" />
            </div>

            <p className="text-[#3f392f] text-base sm:text-lg leading-relaxed italic">
              &ldquo;{clubInfo.impactText}&rdquo;
            </p>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
