import { useEffect, useCallback } from 'react';
import { X, ChevronLeft, ChevronRight } from 'lucide-react';

interface LightboxProps {
  images: { src: string; alt: string }[];
  index: number | null;
  onClose: () => void;
  onNavigate: (index: number) => void;
}

export default function Lightbox({ images, index, onClose, onNavigate }: LightboxProps) {
  const handleKey = useCallback(
    (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
      if (e.key === 'ArrowLeft' && index !== null && index > 0) onNavigate(index - 1);
      if (e.key === 'ArrowRight' && index !== null && index < images.length - 1) onNavigate(index + 1);
    },
    [index, images.length, onClose, onNavigate]
  );

  useEffect(() => {
    window.addEventListener('keydown', handleKey);
    document.body.style.overflow = 'hidden';
    return () => {
      window.removeEventListener('keydown', handleKey);
      document.body.style.overflow = '';
    };
  }, [handleKey]);

  if (index === null) return null;

  return (
    <div
      className="fixed inset-0 z-[100] flex items-center justify-center bg-black/90 backdrop-blur-sm animate-fade-in"
      onClick={onClose}
      role="dialog"
      aria-modal="true"
      aria-label="Image viewer"
    >
      <button
        className="absolute top-4 right-4 p-2 text-white/70 hover:text-gold-400 transition-colors z-10"
        onClick={onClose}
        aria-label="Close image viewer"
      >
        <X className="w-8 h-8" />
      </button>
      {index > 0 && (
        <button
          className="absolute left-4 p-2 text-white/70 hover:text-gold-400 transition-colors z-10"
          onClick={(e) => { e.stopPropagation(); onNavigate(index - 1); }}
          aria-label="Previous image"
        >
          <ChevronLeft className="w-10 h-10" />
        </button>
      )}
      {index < images.length - 1 && (
        <button
          className="absolute right-4 p-2 text-white/70 hover:text-gold-400 transition-colors z-10"
          onClick={(e) => { e.stopPropagation(); onNavigate(index + 1); }}
          aria-label="Next image"
        >
          <ChevronRight className="w-10 h-10" />
        </button>
      )}
      <figure className="max-w-[90vw] max-h-[90vh]" onClick={(e) => e.stopPropagation()}>
        <img
          src={images[index].src}
          alt={images[index].alt}
          className="max-w-full max-h-[85vh] object-contain rounded-lg"
        />
        <figcaption className="text-center text-white/60 text-sm mt-3">{images[index].alt}</figcaption>
      </figure>
    </div>
  );
}
