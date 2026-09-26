export interface Stat {
  id: string;
  value: number | string;
  suffix: string;
  label: string;
  isPlaceholder?: boolean;
}

export const stats: Stat[] = [
  { id: 's1', value: 10, suffix: '+', label: 'Years of Legacy' },
  { id: 's2', value: 6, suffix: '', label: 'Active Wings' },
  { id: 's3', value: 100, suffix: '+', label: 'Student Activities', isPlaceholder: true },
  { id: 's4', value: '\u221E', suffix: '', label: 'Ideas & Opportunities' },
];

export interface Activity {
  id: string;
  name: string;
  icon: string;
}

export const activities: Activity[] = [
  { id: 'a1', name: 'Technical Events', icon: 'Cpu' },
  { id: 'a2', name: 'Non-Technical Events', icon: 'Calendar' },
  { id: 'a3', name: 'Cultural Programs', icon: 'Music' },
  { id: 'a4', name: 'Sports Activities', icon: 'Trophy' },
  { id: 'a5', name: 'Photography', icon: 'Camera' },
  { id: 'a6', name: 'Videography', icon: 'Video' },
  { id: 'a7', name: 'Art & Creative Activities', icon: 'Palette' },
  { id: 'a8', name: 'Competitions', icon: 'Swords' },
  { id: 'a9', name: 'Workshops', icon: 'Wrench' },
  { id: 'a10', name: 'Student Initiatives', icon: 'Sparkles' },
  { id: 'a11', name: 'Collaborative Events', icon: 'Users' },
];

export interface Announcement {
  id: string;
  text: string;
  link?: string;
}

export const announcements: Announcement[] = [
  { id: 'an1', text: 'Explore the latest U2C events and activities', link: '#events' },
];
