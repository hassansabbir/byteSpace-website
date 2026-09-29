export const heroAvatars = [
  '/images/Home/hero/avatars/avatar-1.jpg',
  '/images/Home/hero/avatars/avatar-2.jpg',
  '/images/Home/hero/avatars/avatar-3.jpg',
  '/images/Home/hero/avatars/avatar-4.jpg',
  '/images/Home/hero/avatars/avatar-5.jpg',
];

export interface DecorativeElement {
  src: string;
  w: number;
  h: number;
  style: React.CSSProperties;
}

export const decorativeElements: DecorativeElement[] = [
  { src: '/images/Home/hero/left-top-elemtnt.png', w: 500, h: 724, style: { top: '16%', left: '-2%', width: 'clamp(130px,15vw,260px)' } },
  { src: '/images/Home/hero/left-middle-elemtnt.png', w: 707, h: 704, style: { top: '51%', left: '10%', width: 'clamp(50px,5.5vw,90px)' } },
  { src: '/images/Home/hero/left-bottom-elemtnt.png', w: 1375, h: 1371, style: { bottom: '-5%', left: '-3%', width: 'clamp(160px,21vw,340px)' } },
  { src: '/images/Home/hero/right-top-element.png', w: 852, h: 1488, style: { top: '8%', right: '-2%', width: 'clamp(100px,13vw,220px)' } },
  { src: '/images/Home/hero/right-middle-element.png', w: 756, h: 756, style: { top: '48%', right: '10%', width: 'clamp(55px,6.5vw,105px)' } },
  { src: '/images/Home/hero/right-bottom-element.png', w: 1265, h: 1327, style: { bottom: '-4%', right: '-2%', width: 'clamp(140px,19vw,310px)' } },
];
