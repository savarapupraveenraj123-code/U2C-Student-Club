import ScrollReveal from './ScrollReveal';
import { clubInfo } from '@/data/club';
import { aboutTimeline } from '@/data/timeline';
import { CalendarDays, Users, GraduationCap, Award } from 'lucide-react';
import { TapeStrip, DoodleUnderline, StampMark } from './ScrapbookDoodles';

const highlightIcons = [CalendarDays, Users, GraduationCap, Award];
const cardRotations = ['-rotate-1', 'rotate-1', '-rotate-1.5', 'rotate-1'];

export default function About() {
  return (
    <section id="about" className="relative py-24 overflow-hidden">
      {/* Background radial glow */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_rgba(212,160,23,0.06),_transparent_65%)] pointer-events-none" />

      <div className="container-max section-padding relative z-10">
        <ScrollReveal className="text-center mb-16">
          <div className="flex items-center justify-center gap-2 mb-2">
            <span className="font-handwriting text-gold-400 text-2xl tracking-wide">✦ Chapter 01 &bull; Our Story ✦</span>
          </div>
          <h2 className="font-display text-4xl sm:text-5xl md:text-6xl font-bold text-white mb-3">
            A Decade of <span className="gold-text">Legacy</span>
          </h2>
          <DoodleUnderline className="mb-4" />
          <p className="text-white/80 max-w-3xl mx-auto text-base sm:text-lg leading-relaxed mt-4">
            {clubInfo.aboutText}
          </p>
        </ScrollReveal>

        {/* 4 Highlights styled as cream scrapbook memo cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-24">
          {clubInfo.aboutHighlights.map((hl, i) => {
            const Icon = highlightIcons[i];
            const rot = cardRotations[i % cardRotations.length];
            return (
              <ScrollReveal key={hl.title} delay={i * 100}>
                <div
                  className={`group relative scrapbook-card p-6 text-center h-full flex flex-col items-center justify-between transition-all duration-300 ${rot}`}
                >
                  {/* Washi tape accent */}
                  <div className="absolute -top-3 left-1/2 -translate-x-1/2">
                    <TapeStrip variant={i % 2 === 0 ? 'paper' : 'gold'} angle={i % 2 === 0 ? -2 : 3} />
                  </div>

                  <div className="w-full pt-3">
                    {/* Stamped icon */}
                    <div className="w-14 h-14 mx-auto mb-4 rounded-full border-2 border-dashed border-[#b68d46] bg-[#f5eccf] flex items-center justify-center group-hover:scale-105 transition-transform">
                      <Icon className="w-7 h-7 text-[#8e4f05]" />
                    </div>

                    <h3 className="font-handwriting text-2xl font-bold text-[#1a1816] mb-2 leading-tight">
                      {hl.title}
                    </h3>
                    <p className="text-[#3f392f] text-sm leading-relaxed font-normal">
                      {hl.description}
                    </p>
                  </div>

                  <div className="mt-4 pt-3 border-t border-[#dfd4bc]/80 w-full flex items-center justify-between text-[11px] text-[#716550] font-mono">
                    <span>MEMO #{i + 1}</span>
                    <span className="font-handwriting text-amber-800 text-sm font-semibold">U2C Notes</span>
                  </div>
                </div>
              </ScrollReveal>
            );
          })}
        </div>

        {/* Timeline Section */}
        <ScrollReveal className="text-center mb-14">
          <div className="inline-block">
            <StampMark text="TIMELINE ARCHIVE" year="2016-2026" className="mb-3" />
          </div>
          <h3 className="font-display text-3xl sm:text-4xl font-semibold text-white">
            Milestones Across <span className="gold-text">Ten Years</span>
          </h3>
          <p className="text-white/60 text-sm sm:text-base mt-2 max-w-xl mx-auto">
            A chronological scrapbook of key moments in U2C's student-led history.
          </p>
        </ScrollReveal>

        {/* Handcrafted Timeline with dashed gold tracks */}
        <div className="relative max-w-4xl mx-auto">
          <div className="absolute left-4 sm:left-1/2 sm:-translate-x-1/2 top-0 bottom-0 w-[2px] border-l-2 border-dashed border-gold-400/35" />

          {aboutTimeline.map((milestone, i) => {
            const isEven = i % 2 === 0;
            return (
              <ScrollReveal key={milestone.id} delay={i * 80}>
                <div className={`relative flex items-start mb-10 ${isEven ? 'sm:justify-end' : ''}`}>
                  {/* Pin dot */}
                  <div className="absolute left-4 sm:left-1/2 sm:-translate-x-1/2 -translate-x-[7px] w-4 h-4 rounded-full bg-gold-400 ring-4 ring-gold-400/20 z-10 shadow-md" />

                  {/* Card container */}
                  <div className={`pl-12 sm:pl-0 sm:w-[calc(50%-2.5rem)] ${isEven ? 'sm:pr-10 sm:text-right' : 'sm:pl-10'}`}>
                    <div
                      className={`relative scrapbook-card p-5 text-left border border-[#dfd4bc] ${
                        isEven ? 'sm:-rotate-1' : 'sm:rotate-1'
                      }`}
                    >
                      {/* Tape on card corner */}
                      <div className={`absolute -top-2.5 ${isEven ? 'right-4' : 'left-4'}`}>
                        <TapeStrip variant="paper" angle={isEven ? 4 : -4} className="w-16 h-4" />
                      </div>

                      <div className="flex items-center justify-between mb-2 pt-1">
                        <span className="font-handwriting text-3xl font-bold text-amber-700 tracking-wide">
                          {milestone.year}
                        </span>
                        <span className="text-[10px] uppercase font-mono tracking-wider text-[#796c56] bg-[#f0e4c6] px-2 py-0.5 rounded">
                          Archive
                        </span>
                      </div>

                      <h4 className="text-[#1a1816] font-bold text-base mb-1">
                        {milestone.title}
                      </h4>
                      <p className="text-[#453e34] text-sm leading-relaxed">
                        {milestone.description}
                      </p>
                    </div>
                  </div>
                </div>
              </ScrollReveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
