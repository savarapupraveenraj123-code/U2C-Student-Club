import ScrollReveal from './ScrollReveal';
import { teamMembers, teamCategories, type TeamCategory } from '@/data/team';
import { Phone, Linkedin, Instagram, Mail, User } from 'lucide-react';
import { useState } from 'react';
import { TapeStrip, DoodleUnderline } from './ScrapbookDoodles';

export default function Team() {
  const [activeCategory, setActiveCategory] = useState<TeamCategory>('Faculty Coordinators');

  const filtered = teamMembers.filter((m) => m.category === activeCategory);
  const availableCategories = teamCategories.filter((cat) => teamMembers.some((m) => m.category === cat));

  const rots = ['-rotate-1', 'rotate-1', '-rotate-1.5', 'rotate-1.5'];

  return (
    <section id="team" className="relative py-24 overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_rgba(212,160,23,0.06),_transparent_65%)] pointer-events-none" />

      <div className="container-max section-padding relative z-10">
        <ScrollReveal className="text-center mb-12">
          <div className="flex items-center justify-center gap-2 mb-2">
            <span className="font-handwriting text-gold-400 text-2xl tracking-wide">✦ Chapter 08 &bull; The Faces of U2C ✦</span>
          </div>
          <h2 className="font-display text-4xl sm:text-5xl md:text-6xl font-bold text-white mb-3">
            Our <span className="gold-text">Coordinators</span>
          </h2>
          <DoodleUnderline className="mb-4" />
          <p className="text-white/80 max-w-2xl mx-auto text-base sm:text-lg leading-relaxed mt-4">
            The dedicated faculty mentors and student leaders driving U2C forward across every initiative.
          </p>
        </ScrollReveal>

        {/* Category folder tab buttons */}
        <ScrollReveal className="mb-12">
          <div className="flex flex-wrap gap-2.5 justify-center">
            {availableCategories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`px-5 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                  activeCategory === cat
                    ? 'bg-gradient-to-r from-gold-400 to-gold-600 text-navy-950 shadow-md shadow-gold-500/20 font-semibold'
                    : 'glass text-white/70 hover:text-gold-300 hover:border-gold-400/40'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </ScrollReveal>

        {/* Polaroid Style Coordinator Cards */}
        <div className="flex flex-wrap justify-center items-stretch gap-8 max-w-5xl mx-auto">
          {filtered.map((member, i) => {
            const rot = rots[i % rots.length];

            return (
              <ScrollReveal key={member.id} delay={i * 100} className="w-full sm:w-80 max-w-sm flex">
                <div
                  className={`group relative scrapbook-polaroid p-5 pb-6 text-center w-full flex flex-col justify-between transition-all duration-300 ${rot}`}
                >
                  {/* Washi tape on top of polaroid */}
                  <div className="absolute -top-3 left-1/2 -translate-x-1/2">
                    <TapeStrip variant={i % 2 === 0 ? 'paper' : 'gold'} angle={i % 2 === 0 ? -2 : 3} className="w-20 h-5" />
                  </div>

                  <div>
                    {/* Photo area */}
                    <div className="relative w-full aspect-square max-w-[240px] mx-auto mb-4 overflow-hidden rounded bg-[#ebe2cb] border border-[#d5c6a1] shadow-inner">
                      {member.photo ? (
                        <img
                          src={member.photo}
                          alt={member.name}
                          loading="lazy"
                          className="w-full h-full object-cover object-top filter contrast-[1.02] group-hover:scale-105 transition-transform duration-500"
                        />
                      ) : (
                        <div className="w-full h-full flex items-center justify-center bg-gradient-to-br from-[#ebdcb9] to-[#d6c39a]">
                          <User className="w-16 h-16 text-[#8e4f05]/40" />
                        </div>
                      )}
                    </div>

                    {/* Handwritten caption on polaroid */}
                    <h3 className="font-handwriting text-2xl sm:text-3xl font-bold text-[#1a1816] mb-1 leading-tight">
                      {member.name}
                    </h3>
                    <p className="font-handwriting text-xl text-amber-800 font-semibold mb-2">
                      {member.role}
                    </p>
                    <p className="text-[#514b40] text-xs leading-relaxed mb-4 font-normal">
                      {member.department}
                    </p>
                  </div>

                  <div className="pt-3 border-t border-[#dfd4bc] w-full">
                    {member.contact && (
                      <a
                        href={`tel:${member.contact}`}
                        className="inline-flex items-center justify-center gap-2 text-xs font-mono font-semibold bg-[#f0e4c6] text-[#553018] px-3 py-1.5 rounded-full hover:bg-[#e6d5b0] transition-colors w-full"
                      >
                        <Phone className="w-3.5 h-3.5" />
                        Call: {member.contact}
                      </a>
                    )}
                    {member.social && (
                      <div className="flex items-center justify-center gap-3 mt-3">
                        {member.social.linkedin && (
                          <a href={member.social.linkedin} className="text-[#6b5e48] hover:text-[#8e4f05] transition-colors" aria-label="LinkedIn">
                            <Linkedin className="w-4 h-4" />
                          </a>
                        )}
                        {member.social.instagram && (
                          <a href={member.social.instagram} className="text-[#6b5e48] hover:text-[#8e4f05] transition-colors" aria-label="Instagram">
                            <Instagram className="w-4 h-4" />
                          </a>
                        )}
                        {member.social.email && (
                          <a href={`mailto:${member.social.email}`} className="text-[#6b5e48] hover:text-[#8e4f05] transition-colors" aria-label="Email">
                            <Mail className="w-4 h-4" />
                          </a>
                        )}
                      </div>
                    )}
                  </div>
                </div>
              </ScrollReveal>
            );
          })}
        </div>

        {filtered.length === 0 && (
          <p className="text-center text-white/50 py-12 font-handwriting text-xl">
            ✦ More coordinators being updated in the album soon ✦
          </p>
        )}
      </div>
    </section>
  );
}
