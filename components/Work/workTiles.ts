export type WorkTile = {
  title: string;
  description: string;
  image: {
    src: string;
    width: number;
    height: number;
  };
};

export const workTiles: WorkTile[] = [
  {
    description: `Here are things`,
    title: `I've been a part of`,
    image: {
      src: '/static/images/aphex-apps.webp',
      width: 600,
      height: 770,
    },
  },
  {
    description: 'I built',
    title: 'Blu Club',
    image: {
      src: '/static/images/field-app.webp',
      width: 600,
      height: 554,
    },
  },
  {
    description: `I maintain`,
    title: 'Witchly Host',
    image: {
      src: '/static/images/planner-app.webp',
      width: 600,
      height: 717,
    },
  },
  {
    description: `I built`,
    title: 'WaveBay',
    image: {
      src: '/static/images/publication-app.webp',
      width: 600,
      height: 717,
    },
  },
];
