import ScrollReveal from './ScrollReveal';
import { clubInfo, navLinks } from '@/data/club';
import ClubLogo from './ClubLogo';
import { Mail, Instagram, MapPin, ArrowUpRight } from 'lucide-react';
import { TapeStrip, DoodleUnderline, StampMark } from './ScrapbookDoodles';

export default function Contact() {
  const cardRots = ['-rotate-1', 'rotate-1', '-rotate-0.5'];

  return (
    <section id="contact" className="relative py-24 bg-navy-900 overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom,_rgba(212,160,23,0.06),_transparent_65%)] pointer-events-none" />

      <div className="container-max section-padding relative z-10">
        <ScrollReveal className="text-center mb-16">
          <div className="flex items-center justify-center gap-2 mb-2">
            <span className="font-handwriting text-gold-400 text-2xl tracking-wide">✦ Chapter 09 &bull; Get In Touch ✦</span>
          </div>
          <h2 className="font-display text-4xl sm:text-5xl md:text-6xl font-bold text-white mb-3">
            Get in <span className="gold-text">Touch</span>
          </h2>
          <DoodleUnderline className="mb-4" />
          <p className="text-white/80 max-w-2xl mx-auto text-base sm:text-lg leading-relaxed mt-4">
            Have questions, innovative project ideas, or want to collaborate with U2C? Connect with us anytime.
          </p>
        </ScrollReveal>

        {/* Postcard/Letter Style Contact Cards */}
        <div className="grid lg:grid-cols-3 gap-8 mb-16 max-w-5xl mx-auto">
          {/* Email Card */}
          <ScrollReveal>
            <a
              href={`mailto:${clubInfo.email}`}
              className={`group block relative scrapbook-card p-7 text-center h-full transition-all duration-300 hover:rotate-0 hover:-translate-y-1 ${cardRots[0]}`}
            >
              <div className="absolute -top-3 left-8">
                <TapeStrip variant="gold" angle={-2} className="w-18 h-4" />
              </div>

              <div className="pt-2">
                <div className="w-14 h-14 mx-auto mb-4 rounded-full border-2 border-dashed border-[#b68d46] bg-[#f5eccf] flex items-center justify-center group-hover:scale-105 transition-transform">
                  <Mail className="w-7 h-7 text-[#8e4f05]" />
                </div>
                <h3 className="font-handwriting text-3xl font-bold text-[#1a1816] mb-1">Email Us</h3>
                <p className="text-amber-800 font-semibold text-sm mb-3 font-mono">{clubInfo.email}</p>
                <p className="text-[#514b40] text-xs leading-relaxed mb-4">
                  Send your inquiries, ideas, or event proposals directly to our inbox.
                </p>
              </div>

              <div className="pt-3 border-t border-[#dfd4bc] flex items-center justify-center gap-1.5 text-xs font-semibold text-[#8e4f05] group-hover:gap-2.5 transition-all">
                <span>Send an email</span>
                <ArrowUpRight className="w-3.5 h-3.5" />
              </div>
            </a>
          </ScrollReveal>

          {/* Instagram Card */}
          <ScrollReveal delay={100}>
            <a
              href={clubInfo.instagramUrl}
              target="_blank"
              rel="noopener noreferrer"
              className={`group block relative scrapbook-card p-7 text-center h-full transition-all duration-300 hover:rotate-0 hover:-translate-y-1 ${cardRots[1]}`}
            >
              <div className="absolute -top-3 right-8">
                <TapeStrip variant="paper" angle={3} className="w-18 h-4" />
              </div>

              <div className="pt-2">
                <div className="w-14 h-14 mx-auto mb-4 rounded-full border-2 border-dashed border-[#b68d46] bg-[#f5eccf] flex items-center justify-center group-hover:scale-105 transition-transform">
                  <Instagram className="w-7 h-7 text-[#8e4f05]" />
                </div>
                <h3 className="font-handwriting text-3xl font-bold text-[#1a1816] mb-1">Follow Us</h3>
                <p className="text-amber-800 font-semibold text-sm mb-3 font-mono">{clubInfo.instagram}</p>
                <p className="text-[#514b40] text-xs leading-relaxed mb-4">
                  Stay updated on recent events, reels, photo highlights, and upcoming wings sessions.
                </p>
              </div>

              <div className="pt-3 border-t border-[#dfd4bc] flex items-center justify-center gap-1.5 text-xs font-semibold text-[#8e4f05] group-hover:gap-2.5 transition-all">
                <span>Visit Instagram</span>
                <ArrowUpRight className="w-3.5 h-3.5" />
              </div>
            </a>
          </ScrollReveal>

          {/* Visit Us Card */}
          <ScrollReveal delay={200}>
            <div
              className={`group relative scrapbook-card p-7 text-center h-full flex flex-col justify-between transition-all duration-300 ${cardRots[2]}`}
            >
              <div className="absolute -top-3 left-1/2 -translate-x-1/2">
                <TapeStrip variant="paper" angle={-1} className="w-18 h-4" />
              </div>

              <div className="pt-2">
                <div className="w-14 h-14 mx-auto mb-4 rounded-full border-2 border-dashed border-[#b68d46] bg-[#f5eccf] flex items-center justify-center">
                  <MapPin className="w-7 h-7 text-[#8e4f05]" />
                </div>
                <h3 className="font-handwriting text-3xl font-bold text-[#1a1816] mb-1">Visit Us</h3>
                <p className="text-[#3f392f] text-sm leading-relaxed mb-2 font-medium">
                  {clubInfo.department}
                </p>
                <p className="text-[#514b40] text-xs leading-relaxed">
                  {clubInfo.institution}
                </p>
              </div>

              <div className="pt-3 border-t border-[#dfd4bc] text-[11px] font-mono text-[#796c56]">
                <StampMark text="CAMPUS BASE" year="ANITS" className="text-[10px]" />
              </div>
            </div>
          </ScrollReveal>
        </div>

        {/* Join Us Scrapbook Banner */}
        <ScrollReveal className="max-w-4xl mx-auto mb-16">
          <div className="relative scrapbook-card p-8 sm:p-10 text-center border-2 border-[#dfd4bc]">
            <div className="absolute -top-3 left-12">
              <TapeStrip variant="gold" angle={-2} className="w-24 h-5" />
            </div>
            <div className="absolute -top-3 right-12">
              <TapeStrip variant="paper" angle={2} className="w-24 h-5" />
            </div>

            <h3 className="font-handwriting text-3xl sm:text-4xl font-bold text-[#1a1816] mb-3">
              {clubInfo.joinHeading}
            </h3>
            <p className="text-[#453e34] text-base sm:text-lg leading-relaxed max-w-2xl mx-auto mb-6">
              {clubInfo.joinText}
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <a
                href={`mailto:${clubInfo.email}`}
                className="flex items-center gap-2 px-8 py-3 rounded-full bg-gradient-to-r from-gold-500 to-gold-600 text-navy-950 font-semibold shadow-lg shadow-gold-500/30 hover:scale-105 transition-all"
              >
                <Mail className="w-4 h-4" />
                Email U2C Club
              </a>
              <a
                href={clubInfo.instagramUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-7 py-3 rounded-full border border-[#b68d46] bg-[#f5eccf] text-[#553018] font-semibold hover:bg-[#ebdcb9] transition-all"
              >
                <Instagram className="w-4 h-4 text-[#8e4f05]" />
                Join via Instagram
              </a>
            </div>
          </div>
        </ScrollReveal>
      </div>

      {/* Footer */}
      <footer className="relative z-10 border-t border-gold-400/20 pt-14 pb-8 bg-navy-950/90">
        <div className="container-max section-padding">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-10">
            <div className="md:col-span-2">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-14 h-14 flex items-center justify-center">
                  <ClubLogo className="w-full h-full" />
                </div>
                <div>
                  <span className="font-display text-xl font-bold text-white tracking-wide">U TOO CAN</span>
                  <p className="text-gold-400/90 text-xs tracking-[0.2em] uppercase font-semibold">Students Club</p>
                </div>
              </div>
              <p className="font-handwriting text-2xl text-gold-300 font-semibold mb-2">
                {clubInfo.tagline}
              </p>
              <p className="text-white/60 text-sm leading-relaxed max-w-sm">
                {clubInfo.department}, {clubInfo.institution}. Established {clubInfo.established}.
              </p>
            </div>

            <div>
              <h4 className="font-handwriting text-2xl font-bold text-white mb-3">Quick Navigation</h4>
              <ul className="space-y-2">
                {navLinks.map((link) => (
                  <li key={link.href}>
                    <a
                      href={link.href}
                      onClick={(e) => {
                        e.preventDefault();
                        document.querySelector(link.href)?.scrollIntoView({ behavior: 'smooth' });
                      }}
                      className="text-white/60 text-sm hover:text-gold-400 transition-colors inline-block"
                    >
                      &bull; {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h4 className="font-handwriting text-2xl font-bold text-white mb-3">Stay Connected</h4>
              <ul className="space-y-2.5">
                <li>
                  <a
                    href={`mailto:${clubInfo.email}`}
                    className="text-white/70 text-sm hover:text-gold-400 transition-colors inline-flex items-center gap-2"
                  >
                    <Mail className="w-4 h-4 text-gold-400" /> {clubInfo.email}
                  </a>
                </li>
                <li>
                  <a
                    href={clubInfo.instagramUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-white/70 text-sm hover:text-gold-400 transition-colors inline-flex items-center gap-2"
                  >
                    <Instagram className="w-4 h-4 text-gold-400" /> {clubInfo.instagram}
                  </a>
                </li>
              </ul>
            </div>
          </div>

          <div className="pt-6 border-t border-gold-400/10 flex flex-col sm:flex-row items-center justify-between gap-3 text-center sm:text-left">
            <p className="text-white/50 text-xs">
              &copy; {new Date().getFullYear()} U TOO CAN Students Club &bull; All Rights Reserved.
            </p>
            <p className="font-handwriting text-gold-300 text-lg">
              Crafted with passion &bull; A Decade of Student Legacy (2016&ndash;2026)
            </p>
          </div>
        </div>
      </footer>
    </section>
  );
}
