export interface TimelineMilestone {
  id: string;
  year: string;
  title: string;
  description: string;
}

export const aboutTimeline: TimelineMilestone[] = [
  { id: 't1', year: '2016', title: 'Foundation', description: 'U2C was founded by Mechanical Engineering students on 7 October 2016.' },
  { id: 't2', year: '2017', title: 'Growth', description: 'Expanded activities and welcomed more student members across the department.' },
  { id: 't3', year: '2018', title: 'More Student Activities', description: 'Introduced new events and activities, increasing student engagement.' },
  { id: 't4', year: '2019', title: 'Expanded Creative Initiatives', description: 'Launched creative wings including photography, art, and cultural activities.' },
  { id: 't5', year: '2020', title: 'Online Events During COVID-19', description: 'Adapted to the pandemic with online events, sessions, and competitions.' },
  { id: 't6', year: '2021+', title: 'Continued Student Engagement', description: 'Sustained momentum with hybrid events and growing alumni network.' },
  { id: 't7', year: '2026', title: 'Decade of Legacy', description: 'Celebrating 10 years of empowering student talent and creativity.' },
];

export const journeyTimeline: TimelineMilestone[] = [
  { id: 'j1', year: '2016', title: 'Founded by Students', description: 'A group of passionate Mechanical Engineering students came together to create U2C.' },
  { id: 'j2', year: '2017', title: 'Growing the Family', description: 'More students joined, expanding the club\u2019s reach and activities.' },
  { id: 'j3', year: '2018', title: 'Wings Take Flight', description: 'The six wings were established, creating dedicated spaces for diverse talents.' },
  { id: 'j4', year: '2019', title: 'Creative Renaissance', description: 'Photography, art, and cultural events flourished across campus.' },
  { id: 'j5', year: '2020', title: 'Resilience Through COVID-19', description: 'U2C kept the spirit alive through online events and virtual engagement.' },
  { id: 'j6', year: '2021+', title: 'Stronger Together', description: 'Alumni network grew, connecting generations of U2C members.' },
  { id: 'j7', year: '2026', title: 'From Students to Alumni', description: 'A decade later, U2C continues to thrive through student leadership and alumni support.' },
];
