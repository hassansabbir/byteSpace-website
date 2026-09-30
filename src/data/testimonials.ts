export interface Testimonial {
  id: string;
  name: string;
  role: string;
  avatarUrl: string;
  content: string;
}

export const TESTIMONIALS: Testimonial[] = [
  {
    id: 'sarah-m',
    name: 'Sarah M.',
    role: 'Enthusiastic Learner',
    avatarUrl: '/images/testimonials/sarah.webp',
    content:
      'ByteSpace has transformed my approach to learning. The diverse range of courses and the quality of content provided by creators have exceeded my expectations. The platform truly fosters a sense of community and lifelong learning.',
  },
  {
    id: 'james-l',
    name: 'James L.',
    role: 'Lifelong Learner',
    avatarUrl: '/images/testimonials/james.webp',
    content:
      "I've tried several online learning platforms, and ByteSpace stands out for its vibrant community and the variety of courses available. The easy navigation and engaging content make it a go-to platform for continuous skill development.",
  },
  {
    id: 'alex-b',
    name: 'Alex B.',
    role: 'Inspired Creator',
    avatarUrl: '/images/testimonials/alex.webp',
    content:
      "As a creator, ByteSpace has been a game-changer for me. The Course Editor is user-friendly, and the support from the community is incredible. It's fulfilling to see my courses making a positive impact on learners globally.",
  },
];
