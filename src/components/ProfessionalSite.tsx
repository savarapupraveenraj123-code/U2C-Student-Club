import { useEffect, useState } from 'react';
import {
  ArrowRight, ArrowUpRight, Award, CalendarDays, Camera, ChevronDown,
  Compass, Heart, Instagram, Lightbulb, Mail, MapPin, Menu, Music2,
  Palette, PenTool, Sparkles, Star, Trophy, Users, X
} from 'lucide-react';
import { clubInfo, navLinks } from '@/data/club';
import { wings } from '@/data/wings';
import { achievements } from '@/data/achievements';
import { aboutTimeline } from '@/data/timeline';
import { teamMembers, teamCategories, type TeamCategory } from '@/data/team';
import { activities, stats } from '@/data/site';

const iconMap = {
  Camera, Palette, Lightbulb, Music: Music2, Trophy, PenTool,
  Award, Star, Flag: Compass
} as const;

const nav = [
  { label: 'Home', href: '#home' },
  { label: 'Our Story', href: '#about' },
  { label: 'Six Wings', href: '#wings' },
  { label: 'Legacy', href: '#legacy' },
  { label: 'Our Team', href: '#team' },
  { label: 'Contact', href: '#contact' },
];

export default function ProfessionalSite() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeTeam, setActiveTeam] = useState<TeamCategory>('Faculty Coordinators');
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const goTo = (href: string) => {
    setMenuOpen(false);
    document.querySelector(href)?.scrollIntoView({ behavior: 'smooth', block: 'start' });
  };

  const visibleTeam = teamMembers.filter(member => member.category === activeTeam);

  return (
    <div className="u2c-site min-h-screen overflow-hidden bg-[#08090b] text-white">
      <div className="pointer-events-none fixed inset-0 z-0 overflow-hidden" aria-hidden="true">
        <video
          className="h-full w-full object-cover"
          src="/u2c%20logo%20video.mp4"
          autoPlay
          muted
          playsInline
          preload="auto"
          onTimeUpdate={(event) => {
            const video = event.currentTarget;
            if (video.duration && video.currentTime >= video.duration - 2) video.pause();
          }}
        />
        <div className="absolute inset-0 bg-[#08090b]/75" />
      </div>
      <div className="relative z-10">
      <header className={`u2c-nav fixed inset-x-0 top-0 z-50 transition-all duration-300 ${scrolled ? 'u2c-nav-scrolled' : ''}`}>
        <div className="mx-auto flex max-w-7xl items-center justify-between px-5 py-3 sm:px-8">
          <button onClick={() => goTo('#home')} className="flex items-center gap-3 text-left" aria-label="U Too Can home">
            <img src="/u2c-logo-transparent.png" alt="U Too Can logo" className="h-11 w-11 object-contain" />
            <span className="leading-tight">
              <span className="block text-sm font-black tracking-[0.18em] text-white">U TOO CAN</span>
              <span className="mt-1 block text-[9px] font-semibold uppercase tracking-[0.28em] text-[#d8b66a]">Students Club · ANITS</span>
            </span>
          </button>

          <nav className="hidden items-center gap-7 lg:flex" aria-label="Main navigation">
            {nav.map(item => (
              <button key={item.href} onClick={() => goTo(item.href)} className="u2c-nav-link text-[12px] font-semibold tracking-wide text-white/75 transition-colors hover:text-[#e8c77d]">
                {item.label}
              </button>
            ))}
            <button onClick={() => goTo('#contact')} className="u2c-button u2c-button-gold !px-5 !py-2.5 text-xs">Connect with us <ArrowUpRight size={14} /></button>
          </nav>

          <button className="rounded-full border border-white/15 p-2 text-white lg:hidden" onClick={() => setMenuOpen(!menuOpen)} aria-label="Toggle menu">
            {menuOpen ? <X size={21} /> : <Menu size={21} />}
          </button>
        </div>
        {menuOpen && (
          <div className="border-t border-white/10 bg-[#090a0d]/95 px-5 py-4 backdrop-blur-2xl lg:hidden">
            <div className="mx-auto flex max-w-7xl flex-col gap-1">
              {nav.map(item => <button key={item.href} onClick={() => goTo(item.href)} className="rounded-lg px-3 py-3 text-left text-sm text-white/80 hover:bg-white/5 hover:text-[#e8c77d]">{item.label}</button>)}
              <button onClick={() => goTo('#contact')} className="u2c-button u2c-button-gold mt-2">Connect with us <ArrowUpRight size={15} /></button>
            </div>
          </div>
        )}
      </header>

      <main>
        <section id="home" className="u2c-hero relative flex min-h-[780px] items-center overflow-hidden pt-24 sm:min-h-[860px]">
          <div className="absolute inset-0">
            <div className="absolute inset-0 bg-gradient-to-r from-[#07080b]/95 via-[#07080b]/65 to-[#07080b]/20" />
            <div className="absolute inset-0 bg-gradient-to-t from-[#08090b] via-transparent to-[#08090b]/35" />
          </div>
          <div className="u2c-orb absolute -right-32 top-28 h-[520px] w-[520px] rounded-full" />
          <div className="relative z-10 mx-auto grid w-full max-w-7xl items-center gap-12 px-5 pb-28 pt-20 sm:px-8 lg:grid-cols-[1.12fr_.88fr]">
            <div className="max-w-3xl">
              <div className="u2c-eyebrow mb-7 inline-flex items-center gap-2 rounded-full px-4 py-2 text-[10px] font-bold uppercase tracking-[0.25em] text-[#e8c77d]">
                <span className="h-1.5 w-1.5 rounded-full bg-[#e8c77d] shadow-[0_0_12px_#e8c77d]" />
                ANITS · Since 07 October 2016
              </div>
              <p className="mb-4 text-xs font-semibold uppercase tracking-[0.36em] text-white/60">A decade of ideas, talent & togetherness</p>
              <h1 className="u2c-display text-6xl font-semibold leading-[.94] tracking-[-0.055em] sm:text-7xl md:text-8xl lg:text-[104px]">
                U TOO<br /><span className="u2c-gold-text">CAN.</span>
              </h1>
              <p className="mt-7 max-w-xl text-base leading-8 text-white/70 sm:text-lg">
                A student-powered community where creativity finds a stage, ideas find direction, and every talent gets the chance to shine.
              </p>
              <div className="mt-9 flex flex-col gap-3 sm:flex-row">
                <button onClick={() => goTo('#about')} className="u2c-button u2c-button-gold">Discover our story <ArrowRight size={16} /></button>
                <button onClick={() => goTo('#wings')} className="u2c-button u2c-button-outline">Explore the six wings <Compass size={16} /></button>
              </div>
              <div className="mt-14 flex flex-wrap items-center gap-x-8 gap-y-4 border-t border-white/15 pt-7">
                <div><p className="text-2xl font-semibold text-white">2016<span className="text-[#d8b66a]">—</span>2026</p><p className="mt-1 text-[9px] uppercase tracking-[.22em] text-white/45">Ten years of legacy</p></div>
                <div className="hidden h-9 w-px bg-white/15 sm:block" />
                <div><p className="text-2xl font-semibold text-white">06</p><p className="mt-1 text-[9px] uppercase tracking-[.22em] text-white/45">Creative wings</p></div>
                <div className="hidden h-9 w-px bg-white/15 sm:block" />
                <div><p className="text-2xl font-semibold text-white">01</p><p className="mt-1 text-[9px] uppercase tracking-[.22em] text-white/45">United community</p></div>
              </div>
            </div>
            <div className="hidden justify-end lg:flex">
              <div className="u2c-hero-note relative w-[310px] rounded-[28px] p-7">
                <div className="mb-8 flex items-center justify-between">
                  <span className="text-[9px] font-bold uppercase tracking-[.3em] text-[#e8c77d]">The U2C spirit</span>
                  <Sparkles size={17} className="text-[#e8c77d]" />
                </div>
                <p className="u2c-display text-4xl leading-tight text-white">Enhance.<br />Explore.<br /><span className="u2c-gold-text">Execute.</span></p>
                <div className="mt-8 border-t border-white/10 pt-5">
                  <p className="text-sm leading-6 text-white/55">Built by students. Powered by passion. Growing together since 2016.</p>
                </div>
                <div className="absolute -bottom-5 -right-5 flex h-20 w-20 rotate-12 items-center justify-center rounded-full border border-[#d8b66a]/50 bg-[#11100d] text-center text-[9px] font-bold uppercase leading-4 tracking-widest text-[#e8c77d]">10 years<br />strong</div>
              </div>
            </div>
          </div>
          <button onClick={() => goTo('#about')} className="absolute bottom-8 left-1/2 z-10 flex -translate-x-1/2 flex-col items-center gap-2 text-[9px] uppercase tracking-[.28em] text-white/45 hover:text-[#e8c77d]">
            Scroll to explore <ChevronDown size={16} />
          </button>
        </section>

        <section className="u2c-ribbon border-y border-white/10 py-5">
          <div className="mx-auto flex max-w-7xl flex-wrap items-center justify-center gap-x-10 gap-y-3 px-5 text-[10px] font-semibold uppercase tracking-[.28em] text-white/50 sm:justify-between sm:px-8">
            <span>Creativity</span><span className="text-[#d8b66a]">✳</span><span>Community</span><span className="text-[#d8b66a]">✳</span><span>Leadership</span><span className="text-[#d8b66a]">✳</span><span>Innovation</span><span className="text-[#d8b66a]">✳</span><span>Culture</span>
          </div>
        </section>

        <section id="about" className="u2c-section relative scroll-mt-24 py-24 sm:py-32">
          <div className="mx-auto grid max-w-7xl gap-14 px-5 sm:px-8 lg:grid-cols-[.9fr_1.1fr] lg:items-center">
            <div>
              <p className="u2c-kicker">01 / Who we are</p>
              <h2 className="u2c-heading mt-5">More than a club.<br /><span className="u2c-gold-text">A place to become.</span></h2>
              <p className="mt-7 max-w-xl text-base leading-8 text-white/60">{clubInfo.aboutText}</p>
              <p className="mt-5 max-w-xl text-sm leading-7 text-white/45">{clubInfo.strengthText}</p>
              <button onClick={() => goTo('#legacy')} className="u2c-text-link mt-8">Explore our journey <ArrowUpRight size={16} /></button>
            </div>
            <div className="grid grid-cols-2 gap-3 sm:gap-4">
              {stats.map((stat, index) => (
                <div key={stat.id} className={`u2c-stat-card rounded-2xl p-6 sm:p-8 ${index === 0 ? 'u2c-stat-featured' : ''}`}>
                  <p className="u2c-display text-4xl font-semibold sm:text-5xl">{stat.value}{stat.suffix}</p>
                  <p className="mt-3 text-[10px] font-semibold uppercase tracking-[.2em] text-white/45">{stat.label}</p>
                </div>
              ))}
              <div className="col-span-2 rounded-2xl border border-[#d8b66a]/20 bg-[#d8b66a]/[.06] p-6 sm:p-7">
                <div className="flex items-start gap-4">
                  <div className="rounded-xl bg-[#d8b66a]/10 p-3 text-[#e8c77d]"><Heart size={21} /></div>
                  <div><p className="text-sm font-semibold text-white">Student-led. Faculty-supported.</p><p className="mt-2 text-sm leading-6 text-white/50">A shared space where students take initiative, learn together and turn their ideas into campus experiences.</p></div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="wings" className="u2c-section scroll-mt-24 border-y border-white/[.07] bg-transparent py-24 sm:py-32">
          <div className="mx-auto max-w-7xl px-5 sm:px-8">
            <div className="mb-14 flex flex-col justify-between gap-6 md:flex-row md:items-end">
              <div><p className="u2c-kicker">02 / Find your space</p><h2 className="u2c-heading mt-5">Six wings.<br /><span className="u2c-gold-text">One shared spirit.</span></h2></div>
              <p className="max-w-md text-sm leading-7 text-white/50">Different interests. Different talents. One community that gives every student room to explore what they love.</p>
            </div>
            <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-3">
              {wings.map((wing, index) => {
                const Icon = iconMap[wing.icon as keyof typeof iconMap] || Sparkles;
                return (
                  <article key={wing.id} className="u2c-wing-card group relative overflow-hidden rounded-2xl p-7 sm:p-8">
                    <div className="flex items-start justify-between">
                      <div className="u2c-icon-box flex h-12 w-12 items-center justify-center rounded-xl"><Icon size={22} /></div>
                      <span className="u2c-display text-4xl text-white/[.12]">{wing.number}</span>
                    </div>
                    <p className="mt-9 text-[9px] font-bold uppercase tracking-[.24em] text-[#d8b66a]">{wing.tagline}</p>
                    <h3 className="mt-3 text-xl font-semibold tracking-tight text-white">{wing.name}</h3>
                    <p className="mt-4 min-h-[72px] text-sm leading-6 text-white/50">{wing.description}</p>
                    <div className="mt-6 flex flex-wrap gap-2">
                      {wing.activities.slice(0, 3).map(activity => <span key={activity} className="rounded-full border border-white/10 px-3 py-1 text-[9px] font-medium text-white/45">{activity}</span>)}
                    </div>
                    <div className="u2c-card-line absolute bottom-0 left-7 right-7 h-px" />
                  </article>
                );
              })}
            </div>
          </div>
        </section>

        <section id="activities" className="u2c-section scroll-mt-24 py-24 sm:py-32">
          <div className="mx-auto grid max-w-7xl gap-12 px-5 sm:px-8 lg:grid-cols-[.8fr_1.2fr]">
            <div><p className="u2c-kicker">03 / What we do</p><h2 className="u2c-heading mt-5">Make space<br />for <span className="u2c-gold-text">every talent.</span></h2><p className="mt-6 max-w-md text-sm leading-7 text-white/50">From technical challenges to cultural celebrations, U2C brings students together through experiences that build confidence, friendships and skills.</p><button onClick={() => goTo('#contact')} className="u2c-button u2c-button-outline mt-8">Be part of it <ArrowRight size={15} /></button></div>
            <div className="grid grid-cols-2 gap-3 sm:grid-cols-3">
              {activities.map((activity, index) => <div key={activity.id} className="u2c-activity flex min-h-[118px] flex-col justify-between rounded-xl p-4 sm:p-5"><span className="text-[9px] font-bold tracking-[.2em] text-[#d8b66a]/65">{String(index + 1).padStart(2, '0')}</span><p className="mt-5 text-sm font-medium leading-5 text-white/80">{activity.name}</p></div>)}
            </div>
          </div>
        </section>

        <section id="legacy" className="u2c-section scroll-mt-24 border-y border-white/[.07] bg-[#0c0e12] py-24 sm:py-32">
          <div className="mx-auto max-w-7xl px-5 sm:px-8">
            <div className="mb-14 max-w-2xl"><p className="u2c-kicker">04 / The journey</p><h2 className="u2c-heading mt-5">A decade in the making.</h2><p className="mt-5 text-sm leading-7 text-white/50">{clubInfo.journeyText}</p></div>
            <div className="relative grid gap-5 md:grid-cols-2 xl:grid-cols-4">
              {aboutTimeline.map((item, index) => <article key={item.id} className="u2c-timeline-card relative rounded-2xl p-6"><div className="mb-8 flex items-center justify-between"><span className="u2c-display text-3xl text-[#e8c77d]">{item.year}</span><span className="text-[9px] tracking-[.22em] text-white/25">0{index + 1}</span></div><h3 className="text-base font-semibold text-white">{item.title}</h3><p className="mt-3 text-sm leading-6 text-white/45">{item.description}</p></article>)}
            </div>
          </div>
        </section>

        <section className="u2c-section py-24 sm:py-32">
          <div className="mx-auto max-w-7xl px-5 sm:px-8">
            <div className="mb-12 flex flex-col justify-between gap-5 md:flex-row md:items-end"><div><p className="u2c-kicker">05 / Milestones</p><h2 className="u2c-heading mt-5">Proud moments.<br /><span className="u2c-gold-text">Lasting impact.</span></h2></div><p className="max-w-sm text-sm leading-7 text-white/50">Every milestone is a reminder of the students, mentors and ideas that have shaped our story.</p></div>
            <div className="grid gap-4 md:grid-cols-2">
              {achievements.map((item, index) => {
                const Icon = iconMap[item.icon as keyof typeof iconMap] || Award;
                return <article key={item.id} className="u2c-award-card flex gap-5 rounded-2xl p-6 sm:p-8"><div className="u2c-icon-box mt-1 flex h-12 w-12 shrink-0 items-center justify-center rounded-xl"><Icon size={21} /></div><div className="min-w-0"><div className="flex flex-wrap items-center gap-3"><span className="text-[9px] font-bold uppercase tracking-[.2em] text-[#d8b66a]">{item.year}</span>{index === 0 && <span className="rounded-full border border-[#d8b66a]/30 px-2 py-1 text-[8px] font-bold uppercase tracking-widest text-[#e8c77d]">Recognition</span>}</div><h3 className="mt-3 text-lg font-semibold text-white">{item.title}</h3><p className="mt-3 text-sm leading-6 text-white/50">{item.description}</p></div></article>;
              })}
            </div>
          </div>
        </section>

        <section id="team" className="u2c-section scroll-mt-24 border-y border-white/[.07] bg-[#0c0e12] py-24 sm:py-32">
          <div className="mx-auto max-w-7xl px-5 sm:px-8">
            <div className="mb-12 text-center"><p className="u2c-kicker">06 / The people behind U2C</p><h2 className="u2c-heading mt-5">Guided by experience.<br /><span className="u2c-gold-text">Driven by students.</span></h2><p className="mx-auto mt-5 max-w-xl text-sm leading-7 text-white/50">A community grows stronger when people come together to lead, support and inspire.</p></div>
            <div className="mb-9 flex flex-wrap justify-center gap-2">{teamCategories.filter(category => teamMembers.some(member => member.category === category)).map(category => <button key={category} onClick={() => setActiveTeam(category)} className={`rounded-full border px-5 py-2.5 text-[10px] font-semibold tracking-wide transition-all ${activeTeam === category ? 'border-[#d8b66a] bg-[#d8b66a] text-[#111]' : 'border-white/15 text-white/55 hover:border-[#d8b66a]/60 hover:text-white'}`}>{category}</button>)}</div>
            <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
              {visibleTeam.map(member => <article key={member.id} className="u2c-person-card overflow-hidden rounded-2xl"><div className="relative aspect-[4/3] overflow-hidden bg-[#15171b]">{member.photo ? <img src={member.photo} alt={member.name} className="h-full w-full object-cover object-top transition-transform duration-700 hover:scale-105" /> : <div className="flex h-full items-center justify-center text-[#d8b66a]"><Users size={48} /></div>}<div className="absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-[#0b0d10] to-transparent" /></div><div className="p-6"><p className="text-[9px] font-bold uppercase tracking-[.2em] text-[#d8b66a]">{member.role}</p><h3 className="mt-2 text-base font-semibold text-white">{member.name}</h3><p className="mt-2 text-xs leading-5 text-white/45">{member.department}</p></div></article>)}
              {visibleTeam.length === 0 && <div className="col-span-full rounded-2xl border border-white/10 p-8 text-center text-sm text-white/50">More team profiles will be added soon.</div>}
            </div>
          </div>
        </section>

        <section id="contact" className="u2c-section scroll-mt-24 py-24 sm:py-32">
          <div className="mx-auto max-w-7xl px-5 sm:px-8">
            <div className="u2c-contact-panel relative overflow-hidden rounded-[28px] p-8 sm:p-12 lg:p-16">
              <div className="u2c-contact-glow absolute -right-20 -top-32 h-96 w-96 rounded-full" />
              <div className="relative z-10 grid gap-12 lg:grid-cols-[1.1fr_.9fr] lg:items-end">
                <div><p className="u2c-kicker">07 / Your next chapter</p><h2 className="u2c-display mt-6 text-5xl font-semibold leading-[1.02] tracking-tight sm:text-6xl">Your talent.<br /><span className="u2c-gold-text">Your ideas.</span><br />Your U2C.</h2><p className="mt-6 max-w-lg text-sm leading-7 text-white/55">{clubInfo.joinText}</p><a href={`mailto:${clubInfo.email}`} className="u2c-button u2c-button-gold mt-8 inline-flex">Start a conversation <ArrowUpRight size={16} /></a></div>
                <div className="space-y-4">
                  <a href={`mailto:${clubInfo.email}`} className="u2c-contact-link flex items-center gap-4 rounded-xl p-5"><span className="u2c-icon-box flex h-11 w-11 items-center justify-center rounded-lg"><Mail size={19} /></span><span className="min-w-0"><span className="block text-[9px] uppercase tracking-[.2em] text-white/40">Email</span><span className="mt-1 block break-all text-sm text-white">{clubInfo.email}</span></span><ArrowUpRight className="ml-auto shrink-0 text-[#d8b66a]" size={17} /></a>
                  <a href={clubInfo.instagramUrl} target="_blank" rel="noreferrer" className="u2c-contact-link flex items-center gap-4 rounded-xl p-5"><span className="u2c-icon-box flex h-11 w-11 items-center justify-center rounded-lg"><Instagram size={19} /></span><span><span className="block text-[9px] uppercase tracking-[.2em] text-white/40">Instagram</span><span className="mt-1 block text-sm text-white">{clubInfo.instagram}</span></span><ArrowUpRight className="ml-auto shrink-0 text-[#d8b66a]" size={17} /></a>
                  <div className="u2c-contact-link flex items-center gap-4 rounded-xl p-5"><span className="u2c-icon-box flex h-11 w-11 items-center justify-center rounded-lg"><MapPin size={19} /></span><span><span className="block text-[9px] uppercase tracking-[.2em] text-white/40">Find us</span><span className="mt-1 block text-sm text-white">Mechanical Engineering · ANITS</span></span></div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      <footer className="border-t border-white/10 bg-[#07080a] py-10">
        <div className="mx-auto flex max-w-7xl flex-col gap-7 px-5 sm:px-8 md:flex-row md:items-center md:justify-between">
          <div className="flex items-center gap-3"><img src="/u2c-logo-transparent.png" alt="" className="h-10 w-10 object-contain" /><div><p className="text-xs font-bold tracking-[.2em] text-white">U TOO CAN</p><p className="mt-1 text-[9px] uppercase tracking-[.2em] text-[#d8b66a]">Enhance · Explore · Execute</p></div></div>
          <div className="flex flex-wrap gap-x-5 gap-y-2">{nav.map(item => <button key={item.href} onClick={() => goTo(item.href)} className="text-[10px] text-white/45 transition-colors hover:text-[#e8c77d]">{item.label}</button>)}</div>
          <p className="text-[10px] text-white/35">© {new Date().getFullYear()} U TOO CAN Students Club · ANITS</p>
        </div>
      </footer>
      </div>
    </div>
  );
}
