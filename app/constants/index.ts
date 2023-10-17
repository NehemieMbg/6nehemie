export const navigation = {
  links: [
    {
      href: 'about-me',
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

export const moreAboutMe = {
  label: 'More About Me',
  description:
    "I'm a lifelong learner, driven to grow and embrace challenges. With a background in graphic design and a passion for kickboxing, I embody discipline, determination, and a thirst for new experiences. Currently, I'm at the end of my last year at Holberton School, where I'm further honing my skills in software engineering.",
  whatIDo:
    "I'm dedicated to crafting robust and efficient solutions that prioritize user satisfaction. My journey is one of continuous evolution, with a relentless pursuit of pushing the boundaries in the world of development. My work seamlessly merges technical excellence with design aesthetics, transforming concepts into captivating online realities. I'm also passionately exploring the dynamic field of AI, expanding my horizons in the ever-evolving tech landscape.",
  whatIDo2:
    "I'm dedicated to crafting robust and efficient solutions that prioritize user satisfaction. My journey is one of continuous evolution, with a relentless pursuit of pushing the boundaries in the world of development. My work involves merging the technical aspects with design aesthetics, where I transform concepts into captivating online experiences. It's not about being perfect but about learning and evolving every day. I'm also diving headfirst into the dynamic world of AI, continuously expanding my horizons in the ever-changing tech landscape.",
  whatIDo3:
    "I'm committed to creating robust, user-centric solutions, prioritizing continuous learning and evolution. My work fuses technical aspects with design aesthetics to craft engaging online experiences. I'm also diving into the dynamic world of AI, continuously expanding my horizons in the ever-changing tech landscape.",
};

export const experiences = [
  {
    label: 'Student Software Developer',
    company: 'Holberton School',
    date: '2022 - Pres',
  },
  {
    label: 'Production Operator',
    company: 'Green Yard Frozen',
    date: 'Dec 2018 - Aug 2021',
  },
  {
    label: 'Intern Graphic Designer',
    company: 'Pano',
    date: 'Jun 2018 - Jul 2018',
  },
  {
    label: 'Intern Graphic Designer',
    company: 'Made In V',
    date: 'Jun 2017 - Aug 2017',
  },
  {
    label: 'Intern Graphic Designer',
    company: '2D Sign',
    date: 'Jan 2016 - Mar 2016',
  },
];
