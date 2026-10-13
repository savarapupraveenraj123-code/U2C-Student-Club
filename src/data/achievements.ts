export interface Achievement {
  id: string;
  title: string;
  description: string;
  year: string;
  icon: string;
  highlight?: boolean;
}

export const achievements: Achievement[] = [
  {
    id: 'ach-001',
    title: 'Best Club Award',
    description:
      'Recognized as the Best Club in ANITS, celebrating U2C\u2019s excellence in student engagement, innovation, creativity, and overall contribution to campus life.',
    year: '2024',
    icon: 'Trophy',
    highlight: true,
  },
  {
    id: 'ach-002',
    title: 'Pioneers Since 2016',
    description:
      'U2C was the first student club established in the Department of Mechanical Engineering at ANITS, paving the way for student-driven initiatives.',
    year: '2016',
    icon: 'Flag',
    highlight: true,
  },
  {
    id: 'ach-003',
    title: 'First Student Club of ANITS',
    description:
      'U2C holds the distinction of being one of the first student clubs at ANITS, setting a benchmark for student organizations across the campus.',
    year: '2016',
    icon: 'Award',
    highlight: true,
  },
  {
    id: 'ach-004',
    title: 'Decade of Excellence',
    description:
      'Completing 10 years of continuous student engagement, events, and activities since 2016.',
    year: '2026',
    icon: 'Star',
    highlight: true,
  },
];
