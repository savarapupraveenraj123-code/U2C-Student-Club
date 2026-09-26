export interface TeamMember {
  id: string;
  name: string;
  role: string;
  department: string;
  contact?: string;
  photo?: string;
  social?: {
    linkedin?: string;
    instagram?: string;
    email?: string;
  };
  category: TeamCategory;
}

export type TeamCategory =
  | 'Faculty Coordinators'
  | 'Student Coordinators'
  | 'Wing Heads'
  | 'Event Coordinators'
  | 'Core Team'
  | 'Alumni';

export const teamCategories: TeamCategory[] = [
  'Faculty Coordinators',
  'Student Coordinators',
  'Wing Heads',
  'Event Coordinators',
  'Core Team',
  'Alumni',
];

export const teamMembers: TeamMember[] = [
  {
    id: 'tm-001',
    name: 'G. NARESH (Assistant Professor)',
    role: 'Faculty Co-ordinator',
    department: 'Department of Mechanical Engineering, ANITS',
    photo: '/team/g-naresh.png',
    contact: '',
    category: 'Faculty Coordinators',
  },
  {
    id: 'tm-001b',
    name: 'P. BALA DIVYA (Assistant Professor)',
    role: 'Faculty Co-ordinator',
    department: 'Department of Mechanical Engineering, ANITS',
    photo: '/team/p-bala-divya.png',
    contact: '',
    category: 'Faculty Coordinators',
  },
  {
    id: 'tm-002',
    name: 'N. MIDUN KUMAR',
    role: 'President',
    department: 'Department of Mechanical Engineering, ANITS',
    photo: '/team/n-midun-kumar.jpg',
    contact: '7995754221',
    category: 'Student Coordinators',
  },
  {
    id: 'tm-003',
    name: 'MOTURI CHANDRASEKHAR',
    role: 'President',
    department: 'Department of Mechanical Engineering, ANITS',
    photo: '/team/m-chandrasekhar.jpg',
    contact: '8520939127',
    category: 'Student Coordinators',
  },
  {
    id: 'tm-004',
    name: 'P. BHANDHAVI LATHA',
    role: 'Secretary',
    department: 'Department of Mechanical Engineering, ANITS',
    photo: '/team/p-bhandhavi-latha.jpg',
    contact: '9704121403',
    category: 'Student Coordinators',
  },
];
