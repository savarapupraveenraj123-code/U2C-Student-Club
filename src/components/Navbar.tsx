import { useEffect, useState } from 'react';
import { Menu, X } from 'lucide-react';
import { navLinks } from '@/data/club';
import ClubLogo from './ClubLogo';

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 30);
    handleScroll();
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNav = (href: string) => {
    setOpen(false);
    const el = document.querySelector<HTMLElement>(href);
    if (!el) return;
    const targetTop = el.getBoundingClientRect().top + window.scrollY - 88;
    window.scrollTo({ top: Math.max(0, targetTop), behavior: 'smooth' });
  };

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? 'bg-navy-950/90 backdrop-blur-xl border-b border-gold-400/20 py-2'
          : 'bg-transparent py-4'
      }`}
    >
      <div className="container-max section-padding flex items-center justify-between">
        <a href="#home" className="flex items-center gap-3 group" onClick={(e) => { e.preventDefault(); handleNav('#home'); }}>
          <div className="relative w-12 h-12 flex items-center justify-center">
            <ClubLogo className="w-full h-full" priority />
            <div className="absolute inset-1 rounded-full bg-gold-400/15 blur-md -z-10 group-hover:bg-gold-400/30 transition-all" />
          </div>
          <div className="hidden sm:block">
            <span className="font-display text-lg font-semibold text-white tracking-wide">U TOO CAN</span>
            <span className="block text-[10px] text-gold-400/80 tracking-[0.2em] uppercase">Students Club</span>
          </div>
        </a>

        <ul className="hidden lg:flex items-center gap-1">
          {navLinks.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                onClick={(e) => { e.preventDefault(); handleNav(link.href); }}
                className={`px-3 py-2 text-sm font-medium rounded-lg transition-all duration-300 hover:text-gold-400 hover:bg-gold-400/10 ${
                  link.label === 'Join Us' ? 'text-gold-400' : 'text-white/80'
                }`}
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>

       

        <button
          className="lg:hidden p-2 text-white"
          onClick={() => setOpen(!open)}
          aria-label="Toggle navigation menu"
        >
          {open ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      <div
        className={`lg:hidden overflow-hidden transition-all duration-500 ${
          open ? 'max-h-[600px] opacity-100' : 'max-h-0 opacity-0'
        }`}
      >
        <ul className="flex flex-col gap-1 px-6 py-4 bg-navy-900/95 backdrop-blur-xl border-t border-gold-400/10">
          {navLinks.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                onClick={(e) => { e.preventDefault(); handleNav(link.href); }}
                className={`block px-4 py-3 rounded-lg text-sm font-medium transition-all hover:bg-gold-400/10 hover:text-gold-400 ${
                  link.label === 'Join Us' ? 'text-gold-400' : 'text-white/80'
                }`}
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
}
