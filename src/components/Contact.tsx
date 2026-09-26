import ScrollReveal from './ScrollReveal';
import { clubInfo, navLinks } from '@/data/club';
import ClubLogo from './ClubLogo';
import { Mail, Instagram, MapPin, ArrowUpRight } from 'lucide-react';

export default function Contact() {
  return (
    <section id="contact" className="relative py-24 bg-navy-950 overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom,_rgba(212,160,23,0.05),_transparent_60%)]" />
      <div className="container-max section-padding relative z-10">
        <ScrollReveal className="text-center mb-16">
          <p className="text-gold-400 text-sm font-medium tracking-[0.3em] uppercase mb-3">Contact</p>
          <h2 className="font-display text-4xl sm:text-5xl md:text-6xl font-bold text-white mb-4">
            Get in <span className="gold-text">Touch</span>
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-transparent via-gold-400 to-transparent mx-auto" />
        </ScrollReveal>

        <div className="grid lg:grid-cols-3 gap-6 mb-16">
          <ScrollReveal>
            <a
              href={`mailto:${clubInfo.email}`}
              className="group block glass-gold rounded-2xl p-8 text-center hover:border-gold-400/40 transition-all duration-300 h-full"
            >
              <div className="w-14 h-14 mx-auto mb-4 rounded-xl bg-gold-400/10 flex items-center justify-center group-hover:bg-gold-400/20 transition-all">
                <Mail className="w-7 h-7 text-gold-400" />
              </div>
              <h3 className="text-white font-semibold mb-1">Email Us</h3>
              <p className="text-gold-400 text-sm mb-2">{clubInfo.email}</p>
              <span className="inline-flex items-center gap-1 text-white/40 text-xs group-hover:text-gold-400 transition-colors">
                Send an email <ArrowUpRight className="w-3 h-3" />
              </span>
            </a>
          </ScrollReveal>

          <ScrollReveal delay={100}>
            <a
              href={clubInfo.instagramUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="group block glass-gold rounded-2xl p-8 text-center hover:border-gold-400/40 transition-all duration-300 h-full"
            >
              <div className="w-14 h-14 mx-auto mb-4 rounded-xl bg-gold-400/10 flex items-center justify-center group-hover:bg-gold-400/20 transition-all">
                <Instagram className="w-7 h-7 text-gold-400" />
              </div>
              <h3 className="text-white font-semibold mb-1">Follow Us</h3>
              <p className="text-gold-400 text-sm mb-2">{clubInfo.instagram}</p>
              <span className="inline-flex items-center gap-1 text-white/40 text-xs group-hover:text-gold-400 transition-colors">
                Visit Instagram <ArrowUpRight className="w-3 h-3" />
              </span>
            </a>
          </ScrollReveal>

          <ScrollReveal delay={200}>
            <div className="glass-gold rounded-2xl p-8 text-center h-full">
              <div className="w-14 h-14 mx-auto mb-4 rounded-xl bg-gold-400/10 flex items-center justify-center">
                <MapPin className="w-7 h-7 text-gold-400" />
              </div>
              <h3 className="text-white font-semibold mb-1">Visit Us</h3>
              <p className="text-white/60 text-sm leading-relaxed">
                {clubInfo.department}<br />{clubInfo.institution}
              </p>
            </div>
          </ScrollReveal>
        </div>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <a
            href={`mailto:${clubInfo.email}`}
            className="flex items-center gap-2 px-8 py-3.5 rounded-full bg-gradient-to-r from-gold-400 to-gold-600 text-navy-950 font-semibold magnetic-btn hover:shadow-xl hover:shadow-gold-500/40 transition-all"
          >
            <Mail className="w-4 h-4" />
            Email Us
          </a>
          <a
            href={clubInfo.instagramUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 px-8 py-3.5 rounded-full glass-gold text-gold-300 font-semibold hover:bg-gold-400/15 transition-all magnetic-btn"
          >
            <Instagram className="w-4 h-4" />
            Follow on Instagram
          </a>
        </div>
      </div>

      <footer className="relative z-10 mt-24 border-t border-gold-400/10 pt-12 pb-8">
        <div className="container-max section-padding">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-10">
            <div className="md:col-span-2">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-14 h-14 flex items-center justify-center">
                  <ClubLogo className="w-full h-full" />
                </div>
                <div>
                  <span className="font-display text-lg font-semibold text-white">U TOO CAN</span>
                  <p className="text-gold-400/80 text-xs tracking-[0.2em] uppercase">Students Club</p>
                </div>
              </div>
              <p className="text-gold-300 text-sm font-medium mb-2">{clubInfo.tagline}</p>
              <p className="text-white/40 text-sm leading-relaxed max-w-sm">
                {clubInfo.department}, {clubInfo.institution}. Established {clubInfo.established}.
              </p>
            </div>

            <div>
              <h4 className="text-white font-semibold text-sm mb-4">Quick Links</h4>
              <ul className="space-y-2">
                {navLinks.map((link) => (
                  <li key={link.href}>
                    <a
                      href={link.href}
                      onClick={(e) => { e.preventDefault(); document.querySelector(link.href)?.scrollIntoView({ behavior: 'smooth' }); }}
                      className="text-white/40 text-sm hover:text-gold-400 transition-colors"
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h4 className="text-white font-semibold text-sm mb-4">Connect</h4>
              <ul className="space-y-2">
                <li>
                  <a href={`mailto:${clubInfo.email}`} className="text-white/40 text-sm hover:text-gold-400 transition-colors inline-flex items-center gap-2">
                    <Mail className="w-3.5 h-3.5" /> {clubInfo.email}
                  </a>
                </li>
                <li>
                  <a href={clubInfo.instagramUrl} target="_blank" rel="noopener noreferrer" className="text-white/40 text-sm hover:text-gold-400 transition-colors inline-flex items-center gap-2">
                    <Instagram className="w-3.5 h-3.5" /> {clubInfo.instagram}
                  </a>
                </li>
                <li>
                  <a
                    href="#events"
                    onClick={(e) => { e.preventDefault(); document.querySelector('#events')?.scrollIntoView({ behavior: 'smooth' }); }}
                    className="inline-flex items-center gap-2 px-4 py-2 mt-2 rounded-full bg-gold-400/10 text-gold-400 text-sm font-medium hover:bg-gold-400/20 transition-all"
                  >
                    Explore Events
                  </a>
                </li>
              </ul>
            </div>
          </div>

          <div className="pt-6 border-t border-white/5 text-center">
            <p className="text-white/30 text-xs">
              &copy; {new Date().getFullYear()} U2C Students Club. All Rights Reserved.
            </p>
          </div>
        </div>
      </footer>
    </section>
  );
}
