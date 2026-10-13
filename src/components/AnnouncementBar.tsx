import { announcements } from '@/data/site';
import { Megaphone, X } from 'lucide-react';
import { useState } from 'react';

export default function AnnouncementBar() {
  const [closed, setClosed] = useState(false);
  if (closed || announcements.length === 0) return null;

  return (
    <div className="relative z-40 bg-gradient-to-r from-gold-600 via-gold-400 to-gold-600 text-navy-950 text-sm font-medium overflow-hidden">
      <div className="container-max section-padding flex items-center justify-center gap-3 py-2">
        <Megaphone className="w-4 h-4 flex-shrink-0" />
        <div className="overflow-hidden flex-1 text-center">
          {announcements.map((a) => (
            <a
              key={a.id}
              href={a.link}
              className="inline-block hover:underline"
            >
              {a.text}
            </a>
          ))}
        </div>
        <button
          onClick={() => setClosed(true)}
          className="p-1 hover:bg-navy-950/20 rounded transition-colors flex-shrink-0"
          aria-label="Dismiss announcement"
        >
          <X className="w-3.5 h-3.5" />
        </button>
      </div>
    </div>
  );
}
