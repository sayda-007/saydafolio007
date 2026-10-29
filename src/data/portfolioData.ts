export type Project = {
  slug: string
  title: string
  shortDescription: string
  description: string
  technologies: string[]
  liveUrl: string
  repoUrl: string
  summary: string[]
  verifiedDetails: string[]
  knownLimitations: string[]
  futureImprovements: string[]
}

export const personalInfo = {
  name: 'Sayda Sheikh',
  brand: 'sayda007',
  cvUrl: '/assets/Sayda_Akter_CV.pdf',
  profileImage: '/assets/Sayda.png',
  email: 'saydaa.akter01@gmail.com',
  phone: '+8801610679330',
}

export const socialLinks = [
  { label: 'GitHub', url: 'https://github.com/sayda-007', icon: 'github' },
  { label: 'LinkedIn', url: 'https://www.linkedin.com/in/saydaa007', icon: 'linkedin' },
  { label: 'Facebook', url: 'https://www.facebook.com/sayda007', icon: 'facebook' },
  { label: 'Instagram', url: 'https://www.instagram.com/sayda.sheikh._/', icon: 'instagram' },
  { label: 'X', url: 'https://x.com/sayda007', icon: 'x' },
] as const

export const navItems = [
  { label: 'About', href: '#about' },
  { label: 'Skills', href: '#skills' },
  { label: 'Education', href: '#education' },
  { label: 'Experience', href: '#experience' },
  { label: 'Projects', href: '#projects' },
  { label: 'Contact', href: '#contact' },
] as const

export const projects: Project[] = [
  {
    slug: 'bazardor',
    title: 'BazarDor',
    shortDescription: 'A marketplace-style project built with Next.js, Better Auth, SQLite, and a public API.',
    description:
      'BazarDor is a public project built with Next.js App Router, React, TypeScript, Tailwind CSS, Better Auth, SQLite with better-sqlite3, React Hot Toast, and the Programming Hero Bazar Dor API. The project demonstrates a full-stack learning approach in a modern app structure.',
    technologies: [
      'Next.js App Router',
      'React',
      'TypeScript',
      'Tailwind CSS',
      'Better Auth',
      'SQLite with better-sqlite3',
      'React Hot Toast',
      'Programming Hero Bazar Dor API',
    ],
    liveUrl: 'https://bazar-dor-a7-chi.vercel.app/',
    repoUrl: 'https://github.com/sayda-007/Bazar-Dor_A7',
    summary: [
      'Built with Next.js App Router and TypeScript.',
      'Uses Tailwind CSS and Better Auth for app styling and authentication.',
      'Connected to the Programming Hero Bazar Dor API with SQLite-backed data storage.',
    ],
    verifiedDetails: [
      'The project stack is verified as Next.js App Router, React, TypeScript, Tailwind CSS, Better Auth, SQLite with better-sqlite3, React Hot Toast, and the Programming Hero Bazar Dor API.',
      'The live demo is published on Vercel and the repository is public on GitHub.',
      'This project is a stronger full-stack learning example within the portfolio.',
    ],
    knownLimitations: [
      'No verified limitation details were provided for this project in the available brief.',
    ],
    futureImprovements: [
      'Suggestion: review and refine the user experience for larger marketplace flows and product management.',
      'Suggestion: strengthen validation, error handling, and mobile polish as the app grows.',
    ],
  },
  {
    slug: 'fitlog',
    title: 'FitLog',
    shortDescription: 'A JavaScript-based project focused on a practical app interface and user flow.',
    description:
      'FitLog is a front-end project created with React and JavaScript. It demonstrates a structured, user-facing interface and is part of the portfolio work created while learning to build responsive app experiences.',
    technologies: ['React', 'JavaScript', 'CSS'],
    liveUrl: 'https://fit-log-a06-gilt.vercel.app/',
    repoUrl: 'https://github.com/sayda-007/FitLog_A06',
    summary: [
      'Created using React and JavaScript for an interactive front-end experience.',
      'Styled with CSS for a clean and readable interface.',
      'Included as a portfolio project demonstrating app-building practice.',
    ],
    verifiedDetails: [
      'Project technologies are verified as React, JavaScript, and CSS.',
      'The project is publicly hosted on Vercel and available in GitHub.',
      'This project shows practical front-end activity in the portfolio build.',
    ],
    knownLimitations: [
      'No verified limitation details were provided for this project in the project brief.',
    ],
    futureImprovements: [
      'Suggestion: add a stronger information architecture for clearer user flows.',
      'Suggestion: improve accessibility and responsiveness with more careful mobile testing.',
    ],
  },
  {
    slug: 'devstack',
    title: 'DevStack',
    shortDescription: 'A React + TypeScript interface built as a practical front-end project.',
    description:
      'DevStack is a web project created with React, TypeScript, and CSS. It reflects a clean, developer-focused interface and demonstrates front-end learning through project-based implementation.',
    technologies: ['React', 'TypeScript', 'CSS'],
    liveUrl: 'https://devstack-a05-007.netlify.app/',
    repoUrl: 'https://github.com/sayda-007/DevStack_A05',
    summary: [
      'Built as a front-end project in React and TypeScript.',
      'Uses a clean, structured layout with reusable styling patterns.',
      'Published publicly with a live demo and source code repository.',
    ],
    verifiedDetails: [
      'Project technologies are verified as React, TypeScript, and CSS.',
      'The live demo is hosted on Netlify and the repository is available on GitHub.',
      'This project is part of the portfolio work created during web-development learning.',
    ],
    knownLimitations: [
      'No verified limitation details were provided for this project beyond the general project information available in the portfolio brief.',
    ],
    futureImprovements: [
      'Suggestion: improve the project structure for easier maintenance and scaling.',
      'Suggestion: expand the UI with more interactive components and clearer content hierarchy.',
    ],
  },
  {
    slug: 'cultural-day',
    title: 'Cultural Day Invitation 2026',
    shortDescription: 'A static invitation page designed with HTML and CSS for a cultural event.',
    description:
      'This project is a static event invitation page built with HTML and CSS. It focuses on presentation, visual consistency, and event communication in a lightweight front-end format.',
    technologies: ['HTML', 'CSS'],
    liveUrl: 'https://sayda-007.github.io/CSE-25_Cultural-Day-Invitation_2026/',
    repoUrl: 'https://github.com/sayda-007/CSE-25_Cultural-Day-Invitation_2026',
    summary: [
      'A simple static page created using HTML and CSS.',
      'Designed for an event or celebration announcement.',
      'Published on GitHub Pages for easy access and sharing.',
    ],
    verifiedDetails: [
      'Project technologies are verified as HTML and CSS.',
      'The site is published on GitHub Pages and linked publicly.',
      'This project is a lightweight front-end build focused on a themed landing page.',
    ],
    knownLimitations: [
      'No specific limitation details were provided in the project brief for this project.',
    ],
    futureImprovements: [
      'Suggestion: add more responsive adjustments for smaller screens and varied viewport sizes.',
      'Suggestion: make the layout more modular and content-driven for easier updates.',
    ],
  },
  {
    slug: 'devconf',
    title: 'DEVCONF 2026',
    shortDescription: 'A static conference-style landing page built with HTML and CSS.',
    description:
      'DEVCONF 2026 is a static HTML and CSS project designed as a conference-style landing page. It demonstrates front-end layout structure and event branding in a lightweight format.',
    technologies: ['HTML', 'CSS'],
    liveUrl: 'https://sayda-007.github.io/B14-A01-DevConf-2026-main/',
    repoUrl: 'https://github.com/sayda-007/B14-A01-DevConf-2026-main',
    summary: [
      'Created as a static event or conference landing page.',
      'Built with HTML and CSS for a clean promotional layout.',
      'Publicly available through GitHub Pages.',
    ],
    verifiedDetails: [
      'Project technologies are verified as HTML and CSS.',
      'The live demo and source code are both publicly linked.',
      'This project is a static front-end build and is included here as a verified portfolio project.',
    ],
    knownLimitations: [
      'Known limitation: the existing project is not fully responsive on mobile devices.',
    ],
    futureImprovements: [
      'Suggestion: improve the mobile layout and responsive breakpoints for smaller screens.',
      'Suggestion: refine the visual hierarchy and spacing for a more consistent presentation across devices.',
    ],
  },
]

export const educationData = [
  {
    title: 'BSc in Computer Science and Engineering',
    institution: 'Dhaka City College',
    period: 'Ongoing',
  },
  {
    title: 'HSC, Science',
    institution: 'Begum Badrunnessa Government Girls\' College, Dhaka',
    period: '2022',
  },
  {
    title: 'SSC, Science',
    institution: 'Maniknagar Model High School, Dhaka',
    period: '2020',
  },
]

export const experienceData = [
  {
    role: 'Teacher',
    company: 'Education Project ALO, Sasakawa Health Foundation',
    period: 'December 2023 – May 2024',
    description:
      'Supported learning activities in an educational project environment. This role strengthened communication, organization, and mentoring skills that are useful in technical collaboration and project-based work.',
  },
]

export const certificationData = [
  {
    title: 'National Skill Certificate — Professional Back-Office Service',
    issuer: 'NSDA',
    level: 'BNQF Level III',
    date: 'May 16, 2026',
  },
  {
    title: 'Computer Operation',
    issuer: 'Bangladesh Technical Education Board',
    level: 'NTVQF Level I',
    date: 'December 2, 2023',
  },
]

export const skillGroups = [
  {
    title: 'Frontend',
    items: ['HTML', 'CSS', 'JavaScript', 'React', 'TypeScript', 'Tailwind CSS'],
  },
  {
    title: 'Tools',
    items: ['Git', 'GitHub'],
  },
  {
    title: 'Backend fundamentals / current learning',
    items: ['Node.js', 'Express', 'REST APIs', 'CRUD', 'MongoDB queries and operators', 'Authentication', 'JWT', 'Security fundamentals', 'Deployment'],
  },
]
