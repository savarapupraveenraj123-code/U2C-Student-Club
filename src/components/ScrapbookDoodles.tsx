import React from 'react';

/**
 * Reusable hand-drawn SVG doodle assets and paper embellishments
 * for the U2C student club scrapbook aesthetic.
 */

interface TapeProps {
  className?: string;
  variant?: 'paper' | 'gold';
  angle?: number;
}

export function TapeStrip({ className = '', variant = 'paper', angle = -2 }: TapeProps) {
  const bgClass = variant === 'gold' ? 'tape-strip-gold' : 'tape-strip';
  return (
    <div
      className={`h-5 w-20 pointer-events-none z-20 ${bgClass} ${className}`}
      style={{ transform: `rotate(${angle}deg)` }}
      aria-hidden="true"
    />
  );
}

export function PushPin({ className = '' }: { className?: string }) {
  return (
    <div className={`relative w-4 h-4 pointer-events-none drop-shadow-md ${className}`} aria-hidden="true">
      <div className="w-3.5 h-3.5 rounded-full bg-gradient-to-br from-amber-300 via-amber-500 to-amber-700 shadow-inner mx-auto ring-1 ring-amber-200/50" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-1.5 h-1.5 rounded-full bg-white/70" />
    </div>
  );
}

export function DoodleUnderline({ className = '' }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 240 18"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={`w-40 sm:w-56 h-auto mx-auto text-gold-400 stroke-current ${className}`}
      aria-hidden="true"
    >
      <path
        d="M3 11C35 4 85 15 125 10C165 5 205 13 237 8"
        strokeWidth="3.2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M18 15C55 10 110 16 165 12C195 10 220 14 235 13"
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeOpacity="0.65"
      />
    </svg>
  );
}

export function DoodleArrow({ className = '', direction = 'right' }: { className?: string; direction?: 'right' | 'down' | 'curved' }) {
  if (direction === 'down') {
    return (
      <svg
        viewBox="0 0 32 60"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className={`w-6 h-12 text-gold-400 stroke-current ${className}`}
        aria-hidden="true"
      >
        <path
          d="M16 4C18 18 12 36 16 54M9 44C13 49 16 54 16 54C16 54 21 48 24 43"
          strokeWidth="2.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    );
  }

  if (direction === 'curved') {
    return (
      <svg
        viewBox="0 0 65 40"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className={`w-14 h-9 text-gold-400 stroke-current ${className}`}
        aria-hidden="true"
      >
        <path
          d="M4 32C18 36 44 32 54 14M54 14L43 12M54 14L59 24"
          strokeWidth="2.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    );
  }

  return (
    <svg
      viewBox="0 0 54 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={`w-12 h-6 text-gold-400 stroke-current ${className}`}
      aria-hidden="true"
    >
      <path
        d="M3 12C18 10 36 14 49 11M40 4C45 8 49 11 49 11C49 11 44 16 39 20"
        strokeWidth="2.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export function DoodleSparkle({ className = '' }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={`w-5 h-5 text-gold-300 stroke-current ${className}`}
      aria-hidden="true"
    >
      <path
        d="M12 2C12 7 17 12 22 12C17 12 12 17 12 22C12 17 7 12 2 12C7 12 12 7 12 2Z"
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
        fill="currentColor"
        fillOpacity="0.25"
      />
    </svg>
  );
}

export function StampMark({ text, year = '2016-2026', className = '' }: { text: string; year?: string; className?: string }) {
  return (
    <div
      className={`stamp-badge px-3 py-1 text-xs border-dashed border-gold-500/80 text-gold-400 bg-gold-400/5 rotate-[-2deg] select-none tracking-wider ${className}`}
      aria-hidden="true"
    >
      <span className="font-bold">{text}</span>
      {year && <span className="ml-1 opacity-75 font-mono text-[10px]">&bull; {year}</span>}
    </div>
  );
}
