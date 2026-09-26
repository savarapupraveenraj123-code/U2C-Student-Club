import ScrollReveal from './ScrollReveal';
import { teamMembers, teamCategories, type TeamCategory } from '@/data/team';
import { Mail, Phone, Linkedin, Instagram, User } from 'lucide-react';
import { useState } from 'react';

export default function Team() {
  const [activeCategory, setActiveCategory] = useState<TeamCategory>('Faculty Coordinators');

  const filtered = teamMembers.filter((m) => m.category === activeCategory);
  const availableCategories = teamCategories.filter((cat) => teamMembers.some((m) => m.category === cat));

  return (
    <section id="team" className="relative py-24 bg-navy-950 overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_rgba(212,160,23,0.04),_transparent_60%)]" />
      <div className="container-max section-padding relative z-10">
        <ScrollReveal className="text-center mb-12">
          <p className="text-gold-400 text-sm font-medium tracking-[0.3em] uppercase mb-3">Team</p>
          <h2 className="font-display text-4xl sm:text-5xl md:text-6xl font-bold text-white mb-4">
            Our <span className="gold-text">Coordinators</span>
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-transparent via-gold-400 to-transparent mx-auto" />
          <p className="text-white/50 mt-6 max-w-2xl mx-auto">
            The dedicated team behind U2C, guiding students and driving the club forward.
          </p>
        </ScrollReveal>

        <ScrollReveal className="mb-8">
          <div className="flex flex-wrap gap-2 justify-center">
            {availableCategories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                  activeCategory === cat
                    ? 'bg-gradient-to-r from-gold-400 to-gold-600 text-navy-950'
                    : 'glass text-white/60 hover:text-gold-400 hover:bg-gold-400/10'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </ScrollReveal>

        <div className="flex flex-wrap justify-center items-stretch gap-6 max-w-5xl mx-auto">
          {filtered.map((member, i) => (
            <ScrollReveal key={member.id} delay={i * 100} className="w-full sm:w-80 max-w-sm flex">
              <div className="group glass-gold rounded-2xl p-6 text-center hover:border-gold-400/40 transition-all duration-300 w-full flex flex-col justify-between">
                <div>
                  <div className="relative w-28 h-28 mx-auto mb-4">
                    {member.photo ? (
                      <img
                        src={member.photo}
                        alt={member.name}
                        loading="lazy"
                        className="w-full h-full rounded-full object-cover object-top shadow-lg"
                      />
                    ) : (
                      <div className="w-full h-full rounded-full bg-gradient-to-br from-gold-400/20 to-gold-600/20 flex items-center justify-center">
                        <User className="w-12 h-12 text-gold-400/60" />
                      </div>
                    )}
                    <div className="absolute inset-0 rounded-full ring-2 ring-gold-400/20 group-hover:ring-gold-400/40 transition-all" />
                  </div>
                  <h3 className="font-display text-lg font-bold text-white mb-1">{member.name}</h3>
                  <p className="text-gold-400 text-sm font-medium mb-2">{member.role}</p>
                  <p className="text-white/40 text-xs leading-relaxed mb-3">{member.department}</p>
                </div>

                <div>
                  {member.contact && (
                    <a
                      href={`tel:${member.contact}`}
                      className="inline-flex items-center gap-2 text-white/60 text-sm hover:text-gold-400 transition-colors mt-2"
                    >
                      <Phone className="w-3.5 h-3.5" />
                      {member.contact}
                    </a>
                  )}
                  {member.social && (
                    <div className="flex items-center justify-center gap-3 mt-3">
                      {member.social.linkedin && (
                        <a href={member.social.linkedin} className="text-white/40 hover:text-gold-400 transition-colors" aria-label="LinkedIn">
                          <Linkedin className="w-4 h-4" />
                        </a>
                      )}
                      {member.social.instagram && (
                        <a href={member.social.instagram} className="text-white/40 hover:text-gold-400 transition-colors" aria-label="Instagram">
                          <Instagram className="w-4 h-4" />
                        </a>
                      )}
                      {member.social.email && (
                        <a href={`mailto:${member.social.email}`} className="text-white/40 hover:text-gold-400 transition-colors" aria-label="Email">
                          <Mail className="w-4 h-4" />
                        </a>
                      )}
                    </div>
                  )}
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>

        {filtered.length === 0 && (
          <p className="text-center text-white/40 py-12">
            No members in this category yet. To add team members, edit the data file at <code className="text-gold-400/60">src/data/team.ts</code>.
          </p>
        )}
      </div>
    </section>
  );
}
