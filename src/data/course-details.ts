export interface LessonItem {
  number: string;
  title: string;
  duration: string;
}

export interface CourseModuleItem {
  title: string;
  description: string;
}

export interface CourseReviewItem {
  id: string;
  author: string;
  role: string;
  rating: number;
  date: string;
  comment: string;
  avatar: string;
}

export interface SneakPeekImageItem {
  src: string;
  alt: string;
}

export interface RatingBreakdownItem {
  stars: number;
  count: number;
  percentage: number;
}

export interface CourseDetailData {
  id: string;
  slug: string;
  title: string;
  subtitle: string;
  instructorName: string;
  instructorRole: string;
  instructorAvatar: string;
  instructorBio: string;
  level: string;
  rating: number;
  reviewCount: number;
  studentCountText: string;
  lessonCountText: string;
  totalDurationText: string;
  price: number;
  billingPeriod: string;
  videoUrl: string;
  posterUrl: string;
  sampleLessons: LessonItem[];
  allLessons: LessonItem[];
  moreVideosCountText: string;
  descriptionParagraphs: string[];
  sneakPeekImages: SneakPeekImageItem[];
  keyPoints: string[];
  modules: CourseModuleItem[];
  progressPercentage: number;
  overallRating: number;
  ratingBreakdown: RatingBreakdownItem[];
  features: string[];
  reviews: CourseReviewItem[];
}

export const FEATURED_COURSE_DETAIL: CourseDetailData = {
  id: 'course-build-digital-asset',
  slug: 'build-digital-asset',
  title: 'Build Digital Asset: A Comprehensive Guide',
  subtitle: 'Unlock the Power of Digital Creation with Expert Guidance',
  instructorName: 'purepearl studio',
  instructorRole: 'Professional Creator',
  instructorAvatar: '/images/Home/hero/avatars/avatar-1.jpg',
  instructorBio: 'Ready to Dive In? Enroll Now and Start Building Your Digital Future!',
  level: 'Intermediate',
  rating: 4.8,
  reviewCount: 172,
  studentCountText: '199 Students',
  lessonCountText: '112 Lessons',
  totalDurationText: '24 hours',
  price: 25,
  billingPeriod: 'lifetime',
  videoUrl: '/videos/course-video.mp4',
  posterUrl: '/images/courses/course-preview-video.jpg',
  sampleLessons: [
    {
      number: '01',
      title: 'Introduction to Digital Assets',
      duration: '12 mins',
    },
    {
      number: '02',
      title: 'Design Principles for Impacts',
      duration: '21 mins',
    },
    {
      number: '03',
      title: 'Advanced Techniques in Digital Creation',
      duration: '16 mins',
    },
  ],
  allLessons: [
    {
      number: '01',
      title: 'Introduction to Digital Assets',
      duration: '12 mins',
    },
    {
      number: '02',
      title: 'Design Principles for Impacts',
      duration: '21 mins',
    },
    {
      number: '03',
      title: 'Advanced Techniques in Digital Creation',
      duration: '16 mins',
    },
    {
      number: '04',
      title: 'Design System Foundations & Tokens',
      duration: '24 mins',
    },
    {
      number: '05',
      title: 'Scalable Asset Production Workflows',
      duration: '18 mins',
    },
    {
      number: '06',
      title: 'Exporting, Packaging & Version Control',
      duration: '22 mins',
    },
    {
      number: '07',
      title: 'Commercial Licensing & Digital Marketplace Publishing',
      duration: '29 mins',
    },
  ],
  moreVideosCountText: '99 more videos',
  descriptionParagraphs: [
    'Embark on an enlightening exploration into the world of digital creation with our comprehensive course, "Build Digital Assets: A Comprehensive Guide." This transformative learning experience invites you to delve deep into the intricacies of crafting impactful digital content. From laying the groundwork with foundational concepts to mastering advanced techniques, this guide is meticulously curated to empower you with the skills essential for navigating the dynamic landscape of digital asset creation.',
    'In the initial modules, you\'ll establish a solid foundation by immersing yourself in the foundational concepts that form the backbone of digital asset creation. Understand the fundamental elements that constitute compelling digital content and gain proficiency in leveraging these elements to communicate effectively in the digital realm.',
    'As you progress through the course, you\'ll ascend to higher levels of expertise, delving into the nuances of design principles that drive impactful creations. Uncover the secrets behind effective visual communication, exploring color theory, typography, and layout strategies that elevate your digital assets to new heights. Engage in hands-on exercises that reinforce your understanding, allowing you to apply these principles in practical scenarios.',
  ],
  sneakPeekImages: [
    {
      src: '/images/courses/learn-figma.jpg',
      alt: 'Hand sketching wireframe concepts on paper',
    },
    {
      src: '/images/courses/build-digital-asset.jpg',
      alt: 'Digital interface design in progress on laptop',
    },
    {
      src: '/images/courses/the-power-of-big-data.jpg',
      alt: 'Desktop monitor showing design system layout',
    },
    {
      src: '/images/courses/sneak-peek-mobile.jpg',
      alt: 'Creative mobile app prototypes on smartphones',
    },
  ],
  keyPoints: [
    'Foundational Concepts',
    'Design Principles Mastery',
    'Advanced Techniques in Digital Creation',
    'Project Showcase and Critique',
    'Optimizing for Various Platforms',
    'Digital Asset Management Best Practices',
    'Monetization Strategies',
    'Capstone Project: Building Your Portfolio',
  ],
  modules: [
    {
      title: 'Module 1: Introduction to Digital Assets',
      description: "Lay the groundwork with lessons like 'Understanding Digital Elements' and 'Navigating Design Software Tools.' Dive into the essentials of digital asset creation.",
    },
    {
      title: 'Module 2: Design Principles for Impact',
      description: "Master the principles that drive impactful designs with lessons such as 'Color Theory in Digital Design' and 'Typography Essentials.' Elevate your visual communication skills.",
    },
    {
      title: 'Module 4: User-Centric Design Strategies',
      description: "Understand 'Design Thinking in Digital Creation' and delve into 'User Experience (UX) Essentials.' Craft digital assets with a focus on user-centric design.",
    },
    {
      title: 'Module 5: Interactive Media and Engagement',
      description: "Engage your audience with lessons like 'Creating Interactive Presentations' and 'Integrating Multimedia Elements.' Master the art of creating immersive digital experiences.",
    },
    {
      title: 'Module 6: Project Showcase and Critique',
      description: "Perfect your presentation skills with 'Effective Presentation Techniques' and embrace collaboration with 'Peer Critique and Collaboration.' Showcase your work with confidence.",
    },
    {
      title: 'Module 7: Optimizing Digital Assets for Various Platforms',
      description: "Adapt your digital creations for 'Mobile Platforms' and optimize for 'Social Media.' Ensure widespread accessibility and engagement across diverse digital landscapes.",
    },
  ],
  progressPercentage: 55,
  overallRating: 4.7,
  ratingBreakdown: [
    { stars: 5, count: 720, percentage: 88 },
    { stars: 4, count: 120, percentage: 26 },
    { stars: 3, count: 21, percentage: 8 },
    { stars: 2, count: 12, percentage: 4 },
    { stars: 1, count: 16, percentage: 6 },
  ],
  features: [
    'Learning Resources',
    'Quality Lesson Videos',
    'Certificate of Completion',
    'Private Consultation',
  ],
  reviews: [
    {
      id: 'rev-1',
      author: 'PurePearl Studio',
      role: 'UI/UX Designer',
      rating: 5,
      date: 'a year ago',
      comment: '"The course provided me with a comprehensive understanding of digital asset creation. The lessons were in-depth, practical, and immediately applicable to my work. Highly recommended!"',
      avatar: '/images/Home/hero/avatars/avatar-1.jpg',
    },
    {
      id: 'rev-2',
      author: 'Albert Flores',
      role: 'UI/UX Designer',
      rating: 5,
      date: 'a year ago',
      comment: '"This course transformed my approach to digital design. The combination of theory, hands-on exercises, and real-world applications made it a truly enriching experience. Excited to implement what I\'ve learned!"',
      avatar: '/images/Home/hero/avatars/avatar-5.jpg',
    },
    {
      id: 'rev-3',
      author: 'Cody Fisher',
      role: 'UI/UX Designer',
      rating: 5,
      date: 'a year ago',
      comment: '"Outstanding content from start to finish. The pacing was perfect and the practical projects gave me the confidence to publish my own digital assets commercially."',
      avatar: '/images/Home/hero/avatars/avatar-3.jpg',
    },
  ],
};

export function getCourseDetailBySlug(slug: string): CourseDetailData {
  const formattedTitle = slug
    .split('-')
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    .join(' ');

  return {
    ...FEATURED_COURSE_DETAIL,
    slug,
    title: slug === 'build-digital-asset' ? FEATURED_COURSE_DETAIL.title : `${formattedTitle}: A Comprehensive Guide`,
  };
}
