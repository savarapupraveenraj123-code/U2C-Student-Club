export interface GalleryImage {
  id: string;
  src: string;
  alt: string;
  category: GalleryCategory;
  width: number;
  height: number;
}

export type GalleryCategory =
  | 'Events'
  | 'Photography'
  | 'Cultural'
  | 'Sports'
  | 'Workshops'
  | 'Innovation'
  | 'Behind The Scenes'
  | 'U2C Memories';

export const galleryCategories: GalleryCategory[] = [
  'Events',
  'Photography',
  'Cultural',
  'Sports',
  'Workshops',
  'Innovation',
  'Behind The Scenes',
  'U2C Memories',
];

export const gallery: GalleryImage[] = [
  { id: 'g1', src: 'https://images.pexels.com/photos/2774556/pexels-photo-2774556.jpeg?auto=compress&cs=tinysrgb&w=800', alt: 'Students at a cultural event performance', category: 'Cultural', width: 800, height: 1200 },
  { id: 'g2', src: 'https://images.pexels.com/photos/358048/pexels-photo-358048.jpeg?auto=compress&cs=tinysrgb&w=800', alt: 'Photography exhibition display', category: 'Photography', width: 800, height: 600 },
  { id: 'g3', src: 'https://images.pexels.com/photos/46798/the-ball-stadion-football-the-pitch-46798.jpeg?auto=compress&cs=tinysrgb&w=800', alt: 'Sports tournament action shot', category: 'Sports', width: 800, height: 500 },
  { id: 'g4', src: 'https://images.pexels.com/photos/3184369/pexels-photo-3184369.jpeg?auto=compress&cs=tinysrgb&w=800', alt: 'Innovation workshop brainstorming session', category: 'Innovation', width: 800, height: 533 },
  { id: 'g5', src: 'https://images.pexels.com/photos/3184339/pexels-photo-3184339.jpeg?auto=compress&cs=tinysrgb&w=800', alt: 'Technical event presentation', category: 'Events', width: 800, height: 533 },
  { id: 'g6', src: 'https://images.pexels.com/photos/167636/pexels-photo-167636.jpeg?auto=compress&cs=tinysrgb&w=800', alt: 'Cultural night stage performance', category: 'Cultural', width: 800, height: 533 },
  { id: 'g7', src: 'https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg?auto=compress&cs=tinysrgb&w=800', alt: 'Team working on a project together', category: 'Workshops', width: 800, height: 533 },
  { id: 'g8', src: 'https://images.pexels.com/photos/375898/pexels-photo-375898.jpeg?auto=compress&cs=tinysrgb&w=800', alt: 'Camera setup for photography session', category: 'Behind The Scenes', width: 800, height: 1200 },
  { id: 'g9', src: 'https://images.pexels.com/photos/167964/pexels-photo-167964.jpeg?auto=compress&cs=tinysrgb&w=800', alt: 'Group photo of U2C members', category: 'U2C Memories', width: 800, height: 533 },
  { id: 'g10', src: 'https://images.pexels.com/photos/2002717/pexels-photo-2002717.jpeg?auto=compress&cs=tinysrgb&w=800', alt: 'Art and creative display', category: 'Photography', width: 800, height: 1200 },
  { id: 'g11', src: 'https://images.pexels.com/photos/2531551/pexels-photo-2531551.jpeg?auto=compress&cs=tinysrgb&w=800', alt: 'Dance performance on stage', category: 'Cultural', width: 800, height: 500 },
  { id: 'g12', src: 'https://images.pexels.com/photos/462024/pexels-photo-462024.jpeg?auto=compress&cs=tinysrgb&w=800', alt: 'Cricket match in progress', category: 'Sports', width: 800, height: 533 },
  { id: 'g13', src: 'https://images.pexels.com/photos/3184398/pexels-photo-3184398.jpeg?auto=compress&cs=tinysrgb&w=800', alt: 'Innovation pitch presentation', category: 'Innovation', width: 800, height: 533 },
  { id: 'g14', src: 'https://images.pexels.com/photos/1190298/pexels-photo-1190298.jpeg?auto=compress&cs=tinysrgb&w=800', alt: 'Workshop learning session', category: 'Workshops', width: 800, height: 533 },
  { id: 'g15', src: 'https://images.pexels.com/photos/1190297/pexels-photo-1190297.jpeg?auto=compress&cs=tinysrgb&w=800', alt: 'Behind the scenes event preparation', category: 'Behind The Scenes', width: 800, height: 533 },
  { id: 'g16', src: 'https://images.pexels.com/photos/3184325/pexels-photo-3184325.jpeg?auto=compress&cs=tinysrgb&w=800', alt: 'U2C anniversary celebration', category: 'U2C Memories', width: 800, height: 533 },
];
