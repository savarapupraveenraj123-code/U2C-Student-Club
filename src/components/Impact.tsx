import ScrollReveal from './ScrollReveal';
import { useScrollReveal } from '@/hooks/useScrollReveal';
import { useCounter } from '@/hooks/useCounter';
import { stats } from '@/data/site';
import { clubInfo } from '@/data/club';

function StatCard({ stat, start }: { stat: typeof stats[0]; start: boolean }) {
  const count = useCounter(typeof stat.value === 'number' ? stat.value : 0, 2000, start);
  const display = typeof stat.value === 'number' ? `${count}${stat.suffix}` : `${stat.value}${stat.suffix}`;

  return (
    <div className="glass-gold rounded-2xl p-8 text-center hover:bg-gold-400/10 transition-all duration-300 group">
      <div className="font-display text-5xl sm:text-6xl font-bold gold-text mb-2 group-hover:scale-110 transition-transform">
        {display}
      </div>
      <p className="text-white/60 text-sm font-medium tracking-wide">{stat.label}</p>
      {stat.isPlaceholder && (
        <p className="text-gold-400/40 text-[10px] mt-1 italic">Placeholder</p>
      )}
    </div>
  );
}

export default function Impact() {
  const { ref, revealed } = useScrollReveal<HTMLDivElement>();

  return (
    <section className="relative py-24 bg-navy-900 overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_rgba(212,160,23,0.06),_transparent_60%)]" />
      <div className="container-max section-padding relative z-10">
        <ScrollReveal className="text-center mb-16">
          <p className="text-gold-400 text-sm font-medium tracking-[0.3em] uppercase mb-3">Our Impact</p>
          <h2 className="font-display text-4xl sm:text-5xl md:text-6xl font-bold text-white mb-4">
            Student-Driven. <span className="gold-text">Creative.</span>
            <br />
            Inclusive. <span className="gold-text">Impactful.</span>
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-transparent via-gold-400 to-transparent mx-auto" />
          <p className="text-white/60 mt-6 max-w-2xl mx-auto leading-relaxed">{clubInfo.impactText}</p>
        </ScrollReveal>

        <div ref={ref} className="grid grid-cols-2 lg:grid-cols-4 gap-4">
          {stats.map((stat, i) => (
            <ScrollReveal key={stat.id} delay={i * 100}>
              <StatCard stat={stat} start={revealed} />
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
