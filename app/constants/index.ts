export const navigation = {
  links: [
    {
      href: '/about',
      label: 'About',
    },
    {
      href: '#projects',
      label: 'Projects',
    },
    {
      href: '/contact',
      label: 'Contact',
    },
  ],
};

export const aboutMe = {
  description:
    "As a dedicated full-stack developer with two years in the trenches, I blend design aesthetics with technical prowess. For me, it's not just about building something, It's about crafting digital experiences that resonate. From sleek interfaces to efficient back-end processes, I'm here to transform ideas into captivating online realities.",
};

export const skills = {
  languages: {
    label: 'Programming Languages',
    skills: ['TypeScript', 'JavaScript', 'Solidity', 'Python'],
    others: ['C', 'MySQL', 'HTML', 'CSS'],
  },
  libraries: {
    label: 'Libraries & Frameworks',
    skills1: ['React.js', 'Next.js', 'Express', 'Prisma'],
    skills2: ['React-router-dom', 'Redux Toolkit', 'MangoDB', 'Tailwind'],
    skills3: ['SCSS', 'Ether.js'],
  },
  tools: {
    label: 'Tools & Platforms',
    skills1: ['Git', 'Figma', 'Vercel', 'Ubuntu'],
    skills2: ['Postman', 'VS Code'],
  },
};

export const recentProjects = [
  {
    label: 'Open Sense*',
    images: [
      '/projects_captures/open-sense.png',
      '/projects_captures/open-sense_browse.png',
    ],
    description:
      'An online education platform dedicated to fostering skill growth and personal development.',
    technologies: ['MERN', 'UI Design', 'Tailwind'],
    link: 'https://www.open-sense.ch',
  },
  {
    label: 'Career Compass',
    images: [
      '/projects_captures/career-compass.png',
      '/projects_captures/career-compass_logged-in.png',
    ],
    description: 'Simplifying your job search and application tracking.',
    technologies: ['MERN', 'UI Design', 'Tailwind'],
    link: 'https://career-compass.ch',
  },
  {
    label: 'Pulse',
    images: [
      '/projects_captures/pulse.png',
      '/projects_captures/pulse-logged-in.png',
    ],
    description:
      'A social platform where users share their style by linking to their fashion finds, adding a fresh twist to the world of social media',
    technologies: ['Next.js', 'Prisma', 'Pusher', 'aws S3', 'SCSS', 'Resend'],
    link: 'https://pulse-app.ch',
  },
  {
    label: 'Text Guard',
    images: [
      '/projects_captures/textguard.png',
      '/projects_captures/textguard-quick-start.png',
    ],
    description:
      'An NPM package designed for robust string data validation, enhancing application security.',
    technologies: ['Next.js', 'NPM', 'GITHUB ACTIONS', 'Vitest', 'Tailwind'],
    link: 'https://nehemie-textguard.vercel.app/',
  },
];
