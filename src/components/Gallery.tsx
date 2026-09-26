import { useState, useMemo } from 'react';
import ScrollReveal from './ScrollReveal';
import Lightbox from './Lightbox';
import { gallery, galleryCategories, type GalleryCategory } from '@/data/gallery';
import { Search } from 'lucide-react';

export default function Gallery() {
  const [activeCategory, setActiveCategory] = useState<GalleryCategory | 'All'>('All');
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);

  const filtered = useMemo(() => {
    if (activeCategory === 'All') return gallery;
    return gallery.filter((img) => img.category === activeCategory);
  }, [activeCategory]);

  return (
    <section id="gallery" className="relative py-24 bg-navy-950 overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_rgba(212,160,23,0.04),_transparent_60%)]" />
      <div className="container-max section-padding relative z-10">
        <ScrollReveal className="text-center mb-12">
          <p className="text-gold-400 text-sm font-medium tracking-[0.3em] uppercase mb-3">Gallery</p>
          <h2 className="font-display text-4xl sm:text-5xl md:text-6xl font-bold text-white mb-4">
            U2C <span className="gold-text">Moments</span>
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-transparent via-gold-400 to-transparent mx-auto" />
          <p className="text-white/50 mt-6 max-w-2xl mx-auto">
            A collection of memories captured through the years at U2C events and activities.
          </p>
        </ScrollReveal>

        <ScrollReveal className="mb-8">
          <div className="flex flex-wrap items-center justify-center gap-2">
            {(['All', ...galleryCategories] as const).map((cat) => (
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

        <div className="columns-1 sm:columns-2 lg:columns-3 xl:columns-4 gap-4">
          {filtered.map((img, i) => (
            <ScrollReveal key={img.id} delay={(i % 6) * 60} className="masonry-item">
              <button
                onClick={() => setLightboxIndex(i)}
                className="block w-full rounded-xl overflow-hidden glass-gold group relative"
              >
                <img
                  src={img.src}
                  alt={img.alt}
                  loading="lazy"
                  className="w-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-navy-950/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <div className="absolute bottom-0 left-0 right-0 p-4 opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-y-2 group-hover:translate-y-0">
                  <span className="text-gold-400 text-xs font-medium tracking-wider uppercase">{img.category}</span>
                  <p className="text-white/80 text-sm">{img.alt}</p>
                </div>
              </button>
            </ScrollReveal>
          ))}
        </div>

        {filtered.length === 0 && (
          <p className="text-center text-white/40 py-12">No photos in this category yet.</p>
        )}
      </div>

      <Lightbox
        images={filtered}
        index={lightboxIndex}
        onClose={() => setLightboxIndex(null)}
        onNavigate={setLightboxIndex}
      />
    </section>
  );
}
