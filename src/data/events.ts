export type EventCategory =
  | 'TECHNICAL'
  | 'CULTURAL'
  | 'SPORTS'
  | 'CREATIVE'
  | 'INNOVATION'
  | 'LITERARY';

export type EventStatus = 'UPCOMING' | 'ONGOING' | 'COMPLETED' | 'REGISTRATION OPEN';

export interface U2CEvent {
  id: string;
  title: string;
  date: string;
  time: string;
  venue: string;
  wing: string;
  category: EventCategory | 'ALL';
  shortDescription: string;
  fullDescription: string;
  status: EventStatus;
  poster: string;
  organizers: string[];
  rules: string[];
  registrationLink: string;
  results?: string[];
}

export const eventCategories: (EventCategory | 'ALL')[] = [
  'ALL',
  'TECHNICAL',
  'CULTURAL',
  'SPORTS',
  'CREATIVE',
  'INNOVATION',
  'LITERARY',
];

export const events: U2CEvent[] = [
  {
    id: 'evt-001',
    title: 'U2C TechFest 2026',
    date: '2026-03-15',
    time: '10:00 AM',
    venue: 'ANITS Seminar Hall, Block C',
    wing: 'Innovation Cell',
    category: 'TECHNICAL',
    shortDescription: 'A grand technical festival featuring coding competitions, robotics challenges, and innovation showcases.',
    fullDescription:
      'U2C TechFest 2026 is the flagship technical event of the Innovation Cell, bringing together students across departments for a day of coding competitions, robotics challenges, project exhibitions, and innovation showcases. Participants will have the opportunity to demonstrate their technical skills, collaborate with peers, and win exciting prizes.',
    status: 'UPCOMING',
    poster: 'https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg?auto=compress&cs=tinysrgb&w=800',
    organizers: ['Innovation Cell Team', 'U2C Core Committee'],
    rules: [
      'Open to all ANITS students',
      'Teams of up to 4 members for group events',
      'Registration is mandatory',
      'Participants must carry valid college ID',
    ],
    registrationLink: '#join',
  },
  {
    id: 'evt-002',
    title: 'Cultural Night',
    date: '2026-02-20',
    time: '6:00 PM',
    venue: 'ANITS Open Air Auditorium',
    wing: 'Cultural Club',
    category: 'CULTURAL',
    shortDescription: 'An evening of music, dance, and cultural performances celebrating student talent.',
    fullDescription:
      'Cultural Night is a vibrant celebration of music, dance, and cultural performances. Students from all wings come together to showcase their artistic talents in a grand evening filled with energy, creativity, and entertainment.',
    status: 'REGISTRATION OPEN',
    poster: 'https://images.pexels.com/photos/167636/pexels-photo-167636.jpeg?auto=compress&cs=tinysrgb&w=800',
    organizers: ['Cultural Club Team'],
    rules: [
      'Solo and group performances welcome',
      'Performance duration: max 5 minutes solo, 8 minutes group',
      'Register at least 3 days before the event',
      'Soundtracks must be submitted in advance',
    ],
    registrationLink: '#join',
  },
  {
    id: 'evt-003',
    title: 'Inter-Wing Sports Tournament',
    date: '2026-01-25',
    time: '8:00 AM',
    venue: 'ANITS Sports Ground',
    wing: 'Sports Club',
    category: 'SPORTS',
    shortDescription: 'A thrilling inter-wing sports tournament featuring cricket, football, badminton, and more.',
    fullDescription:
      'The Inter-Wing Sports Tournament is a competitive sporting event where all six wings of U2C compete against each other in cricket, football, badminton, table tennis, and athletics. The tournament promotes fitness, teamwork, and a spirit of healthy competition.',
    status: 'UPCOMING',
    poster: 'https://images.pexels.com/photos/46798/the-ball-stadion-football-the-pitch-46798.jpeg?auto=compress&cs=tinysrgb&w=800',
    organizers: ['Sports Club Team'],
    rules: [
      'Each wing must field a complete team',
      'Knockout format for all sports',
      'Fair play is mandatory',
      'Umpire decisions are final',
    ],
    registrationLink: '#join',
  },
  {
    id: 'evt-004',
    title: 'Photography Exhibition',
    date: '2025-12-10',
    time: '11:00 AM',
    venue: 'ME Department Lobby',
    wing: 'LIT_CITE',
    category: 'CREATIVE',
    shortDescription: 'A showcase of stunning photographs captured by U2C members throughout the year.',
    fullDescription:
      'The Photography Exhibition is an annual showcase organized by LIT_CITE, displaying the best photographs captured by U2C members. The exhibition features categories including portrait, landscape, street photography, and creative edits.',
    status: 'COMPLETED',
    poster: 'https://images.pexels.com/photos/375898/pexels-photo-375898.jpeg?auto=compress&cs=tinysrgb&w=800',
    organizers: ['LIT_CITE Team'],
    rules: [
      'Open to all U2C members',
      'Maximum 5 entries per participant',
      'Photos must be original work',
      'Both edited and unedited photos accepted',
    ],
    registrationLink: '#',
    results: ['Best Photograph: To be announced', 'Most Creative: To be announced'],
  },
  {
    id: 'evt-005',
    title: 'Innovation Pitch Day',
    date: '2026-04-05',
    time: '2:00 PM',
    venue: 'ANITS Innovation Lab',
    wing: 'Innovation Cell',
    category: 'INNOVATION',
    shortDescription: 'Pitch your startup ideas and innovative solutions to a panel of judges.',
    fullDescription:
      'Innovation Pitch Day is an opportunity for students to present their startup ideas and innovative solutions to a panel of faculty and industry judges. The best ideas receive mentorship and potential support for development.',
    status: 'UPCOMING',
    poster: 'https://images.pexels.com/photos/3184339/pexels-photo-3184339.jpeg?auto=compress&cs=tinysrgb&w=800',
    organizers: ['Innovation Cell Team'],
    rules: [
      'Pitch duration: 5 minutes presentation + 3 minutes Q&A',
      'Teams of up to 3 members',
      'Idea must be original',
      'Presentation slides required',
    ],
    registrationLink: '#join',
  },
  {
    id: 'evt-006',
    title: 'Writers Meet & Poetry Slam',
    date: '2026-02-08',
    time: '4:00 PM',
    venue: 'ME Department Seminar Room',
    wing: 'Writers Hub',
    category: 'LITERARY',
    shortDescription: 'An open mic session for poetry, storytelling, and creative writing.',
    fullDescription:
      'The Writers Meet & Poetry Slam is an open mic literary event where students share their poetry, stories, and creative writing. The event encourages self-expression and celebrates the power of words.',
    status: 'REGISTRATION OPEN',
    poster: 'https://images.pexels.com/photos/261909/pexels-photo-261909.jpeg?auto=compress&cs=tinysrgb&w=800',
    organizers: ['Writers Hub Team'],
    rules: [
      'Open to all ANITS students',
      'Performance duration: max 4 minutes',
      'Original content only',
      'Language: English, Telugu, or Hindi',
    ],
    registrationLink: '#join',
  },
];
