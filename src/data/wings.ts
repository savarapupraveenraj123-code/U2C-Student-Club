export interface Wing {
  id: string;
  number: string;
  name: string;
  tagline: string;
  description: string;
  icon: string;
  activities: string[];
}

export const wings: Wing[] = [
  {
    id: 'lit-cite',
    number: '01',
    name: 'LIT_CITE',
    tagline: 'Photography & Videography',
    description:
      'Capturing and creating engaging content through photography, reels, videography, and digital media.',
    icon: 'Camera',
    activities: ['Photography', 'Videography', 'Reels', 'Digital Media', 'Content Creation'],
  },
  {
    id: 'creative-pods',
    number: '02',
    name: 'CREATIVE PODS',
    tagline: 'Art & Imagination',
    description:
      'A space for creativity, art, and imaginative expression through diverse activities.',
    icon: 'Palette',
    activities: ['Art', 'Design', 'Crafts', 'Creative Workshops', 'Imaginative Expression'],
  },
  {
    id: 'innovation-cell',
    number: '03',
    name: 'INNOVATION CELL',
    tagline: 'Innovation & Entrepreneurship',
    description:
      'Encouraging innovation, problem-solving, technical thinking, entrepreneurship, startup ideas, and creative solutions.',
    icon: 'Lightbulb',
    activities: ['Problem-Solving', 'Startup Ideas', 'Technical Thinking', 'Entrepreneurship', 'Creative Solutions'],
  },
  {
    id: 'cultural-club',
    number: '04',
    name: 'CULTURAL CLUB',
    tagline: 'Music & Dance',
    description:
      'Celebrating culture and talent through music, dance, performances, and cultural events.',
    icon: 'Music',
    activities: ['Music', 'Dance', 'Performances', 'Cultural Events', 'Talent Shows'],
  },
  {
    id: 'sports-club',
    number: '05',
    name: 'SPORTS CLUB',
    tagline: 'Fitness & Teamwork',
    description:
      'Promoting fitness, teamwork, sportsmanship, and a spirit of healthy competition.',
    icon: 'Trophy',
    activities: ['Fitness', 'Team Sports', 'Athletics', 'Competition', 'Sportsmanship'],
  },
  {
    id: 'writers-hub',
    number: '06',
    name: 'WRITERS HUB',
    tagline: 'Words & Literature',
    description:
      'A platform for writers to express their thoughts through words, stories, poetry, essays, and literature.',
    icon: 'PenTool',
    activities: ['Poetry', 'Storytelling', 'Essays', 'Literature', 'Creative Writing'],
  },
];
