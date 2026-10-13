interface ClubLogoProps {
  className?: string;
  priority?: boolean;
}

export default function ClubLogo({ className = '', priority = false }: ClubLogoProps) {
  return (
    <img
      src="/u2c-logo-transparent.png"
      alt="U Too Can Students Club 10 Years logo"
      className={`object-contain ${className}`}
      loading={priority ? 'eager' : 'lazy'}
    />
  );
}
