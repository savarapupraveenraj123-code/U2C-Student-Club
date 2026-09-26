import ScrollReveal from './ScrollReveal';
import { clubInfo } from '@/data/club';
import { aboutTimeline } from '@/data/timeline';
import { CalendarDays, Users, GraduationCap, Award } from 'lucide-react';

const highlightIcons = [CalendarDays, Users, GraduationCap, Award];

export default function About() {
  return (
    <section id="about" className="relative py-24 bg-navy-950 overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_rgba(212,160,23,0.05),_transparent_60%)]" />
      <div className="container-max section-padding relative z-10">
        <ScrollReveal className="text-center mb-16">
          <p className="text-gold-400 text-sm font-medium tracking-[0.3em] uppercase mb-3">About U2C</p>
          <h2 className="font-display text-4xl sm:text-5xl md:text-6xl font-bold text-white mb-4">
            A Decade of <span className="gold-text">Legacy</span>
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-transparent via-gold-400 to-transparent mx-auto" />
        </ScrollReveal>

        <ScrollReveal className="max-w-3xl mx-auto text-center mb-16">
          <p className="text-white/70 text-lg leading-relaxed">{clubInfo.aboutText}</p>
        </ScrollReveal>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-20">
          {clubInfo.aboutHighlights.map((hl, i) => {
            const Icon = highlightIcons[i];
            return (
              <ScrollReveal key={hl.title} delay={i * 100}>
                <div className="glass-gold rounded-2xl p-6 text-center h-full hover:bg-gold-400/10 transition-all duration-300 group">
                  <div className="w-12 h-12 mx-auto mb-4 rounded-xl bg-gold-400/10 flex items-center justify-center group-hover:bg-gold-400/20 transition-all">
                    <Icon className="w-6 h-6 text-gold-400" />
                  </div>
                  <h3 className="text-white font-semibold text-base mb-2">{hl.title}</h3>
                  <p className="text-white/50 text-sm leading-relaxed">{hl.description}</p>
                </div>
              </ScrollReveal>
            );
          })}
        </div>

        <ScrollReveal>
          <h3 className="font-display text-2xl sm:text-3xl font-semibold text-white text-center mb-12">
            Our <span className="gold-text">Timeline</span>
          </h3>
        </ScrollReveal>

        <div className="relative max-w-4xl mx-auto">
          <div className="absolute left-4 sm:left-1/2 sm:-translate-x-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-gold-400/0 via-gold-400/40 to-gold-400/0" />
          {aboutTimeline.map((milestone, i) => (
            <ScrollReveal key={milestone.id} delay={i * 80}>
              <div className={`relative flex items-start mb-8 ${i % 2 === 0 ? 'sm:justify-end' : ''}`}>
                <div className={`absolute left-4 sm:left-1/2 sm:-translate-x-1/2 w-3 h-3 rounded-full bg-gold-400 ring-4 ring-gold-400/20 z-10`} />
                <div className={`pl-12 sm:pl-0 sm:w-[calc(50%-2rem)] ${i % 2 === 0 ? 'sm:pr-12 sm:text-right' : 'sm:pl-12'}`}>
                  <div className="glass rounded-2xl p-5 hover:border-gold-400/30 transition-all">
                    <span className="text-gold-400 font-display text-2xl font-bold">{milestone.year}</span>
                    <h4 className="text-white font-semibold mt-1 mb-1">{milestone.title}</h4>
                    <p className="text-white/50 text-sm leading-relaxed">{milestone.description}</p>
                  </div>
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
