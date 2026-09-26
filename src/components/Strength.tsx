import ScrollReveal from './ScrollReveal';
import { clubInfo } from '@/data/club';
import { Heart, Users, Sparkles } from 'lucide-react';

export default function Strength() {
  return (
    <section className="relative py-24 bg-navy-950 overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_rgba(212,160,23,0.05),_transparent_60%)]" />
      <div className="container-max section-padding relative z-10">
        <div className="grid lg:grid-cols-1 gap-12 items-center max-w-4xl mx-auto">
          <ScrollReveal>
            <div>
              <p className="text-gold-400 text-sm font-medium tracking-[0.3em] uppercase mb-3">Our Strength</p>
              <h2 className="font-display text-4xl sm:text-5xl font-bold text-white mb-6">
                United by <span className="gold-text">Students</span>,
                <br />
                Guided by <span className="gold-text">Faculty</span>
              </h2>
              <p className="text-white/60 text-lg leading-relaxed mb-8">{clubInfo.strengthText}</p>
              <div className="flex flex-wrap gap-4">
                <div className="flex items-center gap-3 glass-gold rounded-xl px-5 py-3">
                  <Users className="w-5 h-5 text-gold-400" />
                  <span className="text-white/80 text-sm font-medium">Student Unity</span>
                </div>
                <div className="flex items-center gap-3 glass-gold rounded-xl px-5 py-3">
                  <Heart className="w-5 h-5 text-gold-400" />
                  <span className="text-white/80 text-sm font-medium">Faculty Support</span>
                </div>
                <div className="flex items-center gap-3 glass-gold rounded-xl px-5 py-3">
                  <Sparkles className="w-5 h-5 text-gold-400" />
                  <span className="text-white/80 text-sm font-medium">Endless Ideas</span>
                </div>
              </div>
            </div>
          </ScrollReveal>

          
        </div>
      </div>
    </section>
  );
}
