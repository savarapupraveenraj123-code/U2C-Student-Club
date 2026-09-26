import { useState, useMemo } from 'react';
import ScrollReveal from './ScrollReveal';
import { events, eventCategories, type U2CEvent } from '@/data/events';
import { Search, Calendar, MapPin, Clock, X, Users, Trophy } from 'lucide-react';

function formatDate(dateStr: string) {
  return new Date(dateStr).toLocaleDateString('en-US', { day: 'numeric', month: 'short', year: 'numeric' });
}

function StatusBadge({ status }: { status: string }) {
  const colors: Record<string, string> = {
    UPCOMING: 'bg-blue-400/15 text-blue-300 border-blue-400/30',
    ONGOING: 'bg-green-400/15 text-green-300 border-green-400/30',
    COMPLETED: 'bg-white/10 text-white/50 border-white/20',
    'REGISTRATION OPEN': 'bg-gold-400/15 text-gold-300 border-gold-400/30',
  };
  return (
    <span className={`px-3 py-1 rounded-full text-xs font-medium border ${colors[status] || colors['COMPLETED']}`}>
      {status}
    </span>
  );
}

export default function Events() {
  const [category, setCategory] = useState<string>('ALL');
  const [search, setSearch] = useState('');
  const [selected, setSelected] = useState<U2CEvent | null>(null);

  const filtered = useMemo(() => {
    return events.filter((e) => {
      const matchCat = category === 'ALL' || e.category === category;
      const matchSearch = e.title.toLowerCase().includes(search.toLowerCase()) ||
        e.shortDescription.toLowerCase().includes(search.toLowerCase()) ||
        e.wing.toLowerCase().includes(search.toLowerCase());
      return matchCat && matchSearch;
    });
  }, [category, search]);

  return (
    <section id="events" className="relative py-24 bg-navy-900 overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom,_rgba(212,160,23,0.05),_transparent_60%)]" />
      <div className="container-max section-padding relative z-10">
        <ScrollReveal className="text-center mb-12">
          <p className="text-gold-400 text-sm font-medium tracking-[0.3em] uppercase mb-3">Events</p>
          <h2 className="font-display text-4xl sm:text-5xl md:text-6xl font-bold text-white mb-4">
            U2C <span className="gold-text">Events</span>
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-transparent via-gold-400 to-transparent mx-auto" />
          <p className="text-white/50 mt-6 max-w-2xl mx-auto">
            Explore upcoming, ongoing, and past events organized by U2C across all six wings.
          </p>
        </ScrollReveal>

        <ScrollReveal className="mb-8">
          <div className="flex flex-col lg:flex-row gap-4 items-center justify-between">
            <div className="flex flex-wrap gap-2 justify-center">
              {eventCategories.map((cat) => (
                <button
                  key={cat}
                  onClick={() => setCategory(cat)}
                  className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                    category === cat
                      ? 'bg-gradient-to-r from-gold-400 to-gold-600 text-navy-950'
                      : 'glass text-white/60 hover:text-gold-400 hover:bg-gold-400/10'
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>
            <div className="relative w-full lg:w-64">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-white/30" />
              <input
                type="text"
                placeholder="Search events..."
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                className="w-full pl-10 pr-4 py-2.5 rounded-full glass text-white text-sm placeholder:text-white/30 focus:outline-none focus:border-gold-400/40 transition-all"
              />
            </div>
          </div>
        </ScrollReveal>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filtered.map((evt, i) => (
            <ScrollReveal key={evt.id} delay={i * 80}>
              <div className="group glass-gold rounded-2xl overflow-hidden h-full flex flex-col hover:border-gold-400/40 transition-all duration-300">
                <div className="relative aspect-[16/10] overflow-hidden">
                  <img
                    src={evt.poster}
                    alt={`${evt.title} poster`}
                    loading="lazy"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute top-3 left-3">
                    <StatusBadge status={evt.status} />
                  </div>
                  <div className="absolute top-3 right-3">
                    <span className="px-3 py-1 rounded-full bg-navy-950/80 backdrop-blur-sm text-gold-400 text-xs font-medium">
                      {evt.category}
                    </span>
                  </div>
                </div>
                <div className="p-5 flex flex-col flex-1">
                  <h3 className="font-display text-lg font-bold text-white mb-2">{evt.title}</h3>
                  <p className="text-white/50 text-sm leading-relaxed mb-4 flex-1">{evt.shortDescription}</p>
                  <div className="space-y-2 mb-4">
                    <div className="flex items-center gap-2 text-white/40 text-xs">
                      <Calendar className="w-3.5 h-3.5 text-gold-400/60" />
                      {formatDate(evt.date)} &bull; {evt.time}
                    </div>
                    <div className="flex items-center gap-2 text-white/40 text-xs">
                      <MapPin className="w-3.5 h-3.5 text-gold-400/60" />
                      {evt.venue}
                    </div>
                    <div className="flex items-center gap-2 text-white/40 text-xs">
                      <Users className="w-3.5 h-3.5 text-gold-400/60" />
                      {evt.wing}
                    </div>
                  </div>
                  <button
                    onClick={() => setSelected(evt)}
                    className="w-full py-2.5 rounded-lg glass text-white/80 text-sm font-medium hover:bg-gold-400/10 hover:text-gold-400 transition-all"
                  >
                    View Details
                  </button>
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>

        {filtered.length === 0 && (
          <p className="text-center text-white/40 py-12">No events found matching your search.</p>
        )}
      </div>

      {selected && (
        <div
          className="fixed inset-0 z-[100] flex items-center justify-center bg-black/80 backdrop-blur-sm animate-fade-in p-4"
          onClick={() => setSelected(null)}
        >
          <div
            className="glass-gold rounded-3xl max-w-2xl w-full max-h-[90vh] overflow-y-auto animate-scale-in"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="relative">
              <img src={selected.poster} alt={`${selected.title} poster`} className="w-full h-56 object-cover rounded-t-3xl" />
              <button
                onClick={() => setSelected(null)}
                className="absolute top-4 right-4 p-2 bg-navy-950/60 backdrop-blur-sm rounded-full text-white/70 hover:text-gold-400 transition-colors"
                aria-label="Close"
              >
                <X className="w-5 h-5" />
              </button>
              <div className="absolute top-4 left-4">
                <StatusBadge status={selected.status} />
              </div>
            </div>
            <div className="p-6">
              <div className="flex items-center gap-2 mb-2">
                <span className="px-3 py-1 rounded-full bg-gold-400/10 text-gold-400 text-xs font-medium">{selected.category}</span>
                <span className="text-white/40 text-xs">{selected.wing}</span>
              </div>
              <h3 className="font-display text-2xl font-bold text-white mb-4">{selected.title}</h3>
              <p className="text-white/60 leading-relaxed mb-6">{selected.fullDescription}</p>

              <div className="grid grid-cols-2 gap-4 mb-6">
                <div className="glass rounded-xl p-4">
                  <div className="flex items-center gap-2 text-gold-400 text-xs mb-1">
                    <Calendar className="w-3.5 h-3.5" /> Date
                  </div>
                  <p className="text-white/80 text-sm">{formatDate(selected.date)}</p>
                </div>
                <div className="glass rounded-xl p-4">
                  <div className="flex items-center gap-2 text-gold-400 text-xs mb-1">
                    <Clock className="w-3.5 h-3.5" /> Time
                  </div>
                  <p className="text-white/80 text-sm">{selected.time}</p>
                </div>
                <div className="glass rounded-xl p-4">
                  <div className="flex items-center gap-2 text-gold-400 text-xs mb-1">
                    <MapPin className="w-3.5 h-3.5" /> Venue
                  </div>
                  <p className="text-white/80 text-sm">{selected.venue}</p>
                </div>
                <div className="glass rounded-xl p-4">
                  <div className="flex items-center gap-2 text-gold-400 text-xs mb-1">
                    <Users className="w-3.5 h-3.5" /> Organizers
                  </div>
                  <p className="text-white/80 text-sm">{selected.organizers.join(', ')}</p>
                </div>
              </div>

              <div className="mb-6">
                <h4 className="text-white font-semibold text-sm mb-3">Rules & Guidelines</h4>
                <ul className="space-y-2">
                  {selected.rules.map((rule, i) => (
                    <li key={i} className="flex items-start gap-2 text-white/50 text-sm">
                      <span className="text-gold-400 mt-1">•</span>
                      {rule}
                    </li>
                  ))}
                </ul>
              </div>

              {selected.results && (
                <div className="mb-6">
                  <h4 className="flex items-center gap-2 text-white font-semibold text-sm mb-3">
                    <Trophy className="w-4 h-4 text-gold-400" /> Results & Winners
                  </h4>
                  <ul className="space-y-2">
                    {selected.results.map((r, i) => (
                      <li key={i} className="flex items-start gap-2 text-white/50 text-sm">
                        <span className="text-gold-400 mt-1">•</span>
                        {r}
                      </li>
                    ))}
                  </ul>
                </div>
              )}

            </div>
          </div>
        </div>
      )}
    </section>
  );
}
