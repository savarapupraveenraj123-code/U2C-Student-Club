import ScrollReveal from './ScrollReveal';
import { activities } from '@/data/site';
import * as Icons from 'lucide-react';

export default function WhatWeDo() {
  const getIcon = (name: string) => {
    const Icon = (Icons as unknown as Record<string, Icons.LucideIcon>)[name];
    return Icon || Icons.Circle;
  };

  return (
    <section className="relative py-24 bg-navy-950 overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_rgba(212,160,23,0.04),_transparent_60%)]" />
      <div className="container-max section-padding relative z-10">
        <ScrollReveal className="text-center mb-16">
          <p className="text-gold-400 text-sm font-medium tracking-[0.3em] uppercase mb-3">Activities</p>
          <h2 className="font-display text-4xl sm:text-5xl md:text-6xl font-bold text-white mb-4">
            What <span className="gold-text">We Do</span>
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-transparent via-gold-400 to-transparent mx-auto" />
        </ScrollReveal>

        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
          {activities.map((act, i) => {
            const Icon = getIcon(act.icon);
            return (
              <ScrollReveal key={act.id} delay={i * 60}>
                <div className="group glass rounded-2xl p-5 text-center hover:border-gold-400/30 hover:bg-gold-400/5 transition-all duration-300">
                  <div className="w-12 h-12 mx-auto mb-3 rounded-xl bg-gold-400/10 flex items-center justify-center group-hover:bg-gold-400/20 group-hover:scale-110 transition-all">
                    <Icon className="w-6 h-6 text-gold-400 group-hover:rotate-6 transition-transform" />
                  </div>
                  <h3 className="text-white/80 text-sm font-medium">{act.name}</h3>
                </div>
              </ScrollReveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
