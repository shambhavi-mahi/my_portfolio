/**
 * Central portfolio data — Shambhavi's resume.
 * Every fact on the site comes from this file. Update it here and the whole site follows.
 */

export type Palette = { from: string; via: string; to: string; accent: string };

export const profile = {
  fullName: 'Shambhavi',
  displayName: 'Shambhavi',
  firstName: 'SHAMBHAVI',
  seriesTag: 'THE SERIES',
  /** Fictional studio card shown at the very start of the opening sequence. */
  originalLabel: 'A SHAMBHAVI ORIGINAL',
  role: 'Full-Stack Developer',
  tagline: ['Full-Stack Developer', 'B.Tech CSE', 'Java'],
  intro:
    'A B.Tech Computer Science & Engineering student and full-stack developer building modern web applications with Java, Python, React, Node.js and more.',
  location: 'India',
  email: 'shambhavi@example.com', // TODO: replace with your actual email
  links: {
    linkedin: 'https://linkedin.com/', // TODO: replace with your LinkedIn URL
    github: 'https://github.com/',    // TODO: replace with your GitHub URL
  },
  resumePdf: '/assets/Shambhavi_Resume.pdf', // TODO: add your resume PDF to public/assets/
  portrait: {
    src: '/portrait.png',
    srcSet: '/portrait.png 1x',
    alt: 'Portrait of Shambhavi',
  },
  interests: ['System Design', 'Cloud Computing', 'Machine Learning'],
};

export const education = [
  {
    school: 'Your College Name', // TODO: replace
    place: 'Your City',          // TODO: replace
    degree: 'Bachelor of Technology — Computer Science & Engineering',
    period: '2023 – Present',
    score: 'CGPA X.XX',          // TODO: replace
  },
  {
    school: 'Your Junior College', // TODO: replace
    place: 'Your City',            // TODO: replace
    degree: 'Class XII / Intermediate',
    period: '2021 – 2023',
    score: 'Score: XXX/XXX',       // TODO: replace
  },
];

export const experience = [
  {
    company: 'Your Company / Internship', // TODO: replace or remove
    role: 'Developer',
    place: 'India',
    period: '2025 – Present',
    points: [
      'Describe your main responsibility here.',
      'Describe another achievement or task.',
      'Add more bullet points as needed.',
    ],
  },
];

export type Metric = { value: string; label: string };

export type Project = {
  id: string;
  title: string;
  year: string;
  genre: string;
  logline: string;
  stack: string[];
  build: string[];
  features: string[];
  metrics: Metric[];
  /** Omit when the repository isn't public — the GitHub button is hidden instead of linking to a 404. */
  github?: string;
  palette: Palette;
  motif: 'shield' | 'flow' | 'tenants';
};

export const projects: Project[] = [
  {
    id: 'project-1',
    title: 'Your Project 1',          // TODO: replace with your actual project
    year: '2025',
    genre: 'Full-Stack • Web',
    logline: 'A brief one-line description of your project.',
    stack: ['React', 'Node.js', 'PostgreSQL'],
    build: [
      'Describe what you built and the technical decisions you made.',
      'Describe the impact or scale of the project.',
    ],
    features: [
      'Key feature one',
      'Key feature two',
      'Key feature three',
    ],
    metrics: [
      { value: '1,000+', label: 'users served' },
      { value: '99%', label: 'uptime' },
    ],
    github: 'https://github.com/', // TODO: replace with your repo link
    palette: { from: '#2a0610', via: '#7a0f24', to: '#0b0710', accent: '#ff3d5a' },
    motif: 'shield',
  },
  {
    id: 'project-2',
    title: 'Your Project 2',          // TODO: replace
    year: '2025',
    genre: 'Backend • API',
    logline: 'A brief one-line description of your second project.',
    stack: ['Java', 'Spring Boot', 'MySQL'],
    build: [
      'Describe what you built.',
      'Describe the impact.',
    ],
    features: [
      'Key feature one',
      'Key feature two',
    ],
    metrics: [
      { value: '500+', label: 'requests/sec' },
      { value: '40%', label: 'faster response time' },
    ],
    github: 'https://github.com/', // TODO: replace
    palette: { from: '#1a0d02', via: '#8a4a07', to: '#0a0806', accent: '#ffb547' },
    motif: 'flow',
  },
  {
    id: 'project-3',
    title: 'Your Project 3',          // TODO: replace
    year: '2026',
    genre: 'SaaS • DevOps',
    logline: 'A brief one-line description of your third project.',
    stack: ['Node.js', 'React', 'Docker'],
    build: [
      'Describe what you built.',
      'Describe the impact.',
    ],
    features: [
      'Key feature one',
      'Key feature two',
    ],
    metrics: [
      { value: '50+', label: 'users' },
      { value: '0', label: 'downtime incidents' },
    ],
    palette: { from: '#04121f', via: '#0f4c6e', to: '#05080d', accent: '#4cc9ff' },
    motif: 'tenants',
  },
];

export type Achievement = {
  id: string;
  title: string;
  org: string;
  detail: string;
  laurel: string;
  link?: string;
};

export const achievements: Achievement[] = [
  {
    id: 'achievement-1',
    title: 'Achievement Title',   // TODO: replace
    org: 'Organisation Name',     // TODO: replace
    detail: 'Brief description of this achievement.',
    laurel: 'Award / Recognition',
  },
  {
    id: 'achievement-2',
    title: 'Achievement Title 2', // TODO: replace
    org: 'Organisation Name 2',   // TODO: replace
    detail: 'Brief description of this achievement.',
    laurel: 'Recognition',
  },
  {
    id: 'competitive-coding',
    title: 'Problems Solved',     // TODO: update number
    org: 'LeetCode • GFG • CodeChef',
    detail: 'LeetCode: XXX+ problems. GFG: XXX+ problems. CodeChef: XXX+ problems.', // TODO
    laurel: 'Competitive Coding',
  },
];

export type Certification = { issuer: string; name: string; link: string };

export const certifications: Certification[] = [
  // TODO: Add your certifications here. Example:
  // { issuer: 'AWS', name: 'AWS Certified Cloud Practitioner', link: 'https://...' },
  { issuer: 'Issuer', name: 'Certification Name', link: '#' },
];

export type Skill = { name: string; mono: string; note?: string };
export type SkillCategory = { id: string; title: string; subtitle: string; skills: Skill[] };

export const skillCategories: SkillCategory[] = [
  {
    id: 'languages',
    title: 'Languages',
    subtitle: 'Java is the primary language',
    skills: [
      { name: 'Java', mono: 'Jv', note: 'Primary' },
      { name: 'Python', mono: 'Py' },
      { name: 'C', mono: 'C' },
      { name: 'C++', mono: 'C+' },
    ],
  },
  {
    id: 'frontend',
    title: 'Frontend',
    subtitle: 'Interfaces & the web platform',
    skills: [
      { name: 'React', mono: 'Re' },
      { name: 'HTML', mono: 'Ht' },
      { name: 'CSS', mono: 'Cs' },
      { name: 'JavaScript', mono: 'Js' },
    ],
  },
  {
    id: 'backend',
    title: 'Backend',
    subtitle: 'Server-side logic',
    skills: [
      { name: 'Node.js', mono: 'No' },
      { name: 'Express.js', mono: 'Ex' },
      { name: 'Spring Boot', mono: 'Sb' },
      { name: 'Flask', mono: 'Fl' },
    ],
  },
  {
    id: 'infra',
    title: 'Infra & Tools',
    subtitle: 'Shipping & architecture',
    skills: [
      { name: 'Docker', mono: 'Dk' },
      { name: 'REST APIs', mono: 'Ap' },
      { name: 'JWT Auth', mono: 'Jw' },
      { name: 'Git / GitHub', mono: 'Gt' },
    ],
  },
  {
    id: 'databases',
    title: 'Databases',
    subtitle: 'Indexing • Normalization',
    skills: [
      { name: 'PostgreSQL', mono: 'Pg' },
      { name: 'MongoDB', mono: 'Mg' },
      { name: 'MySQL', mono: 'My' },
    ],
  },
  {
    id: 'fundamentals',
    title: 'CS Fundamentals',
    subtitle: 'The foundations',
    skills: [
      { name: 'DSA', mono: 'Ds' },
      { name: 'OS', mono: 'Os' },
      { name: 'DBMS', mono: 'Db' },
      { name: 'OOPs', mono: 'Oo' },
    ],
  },
  {
    id: 'interests',
    title: 'Interests',
    subtitle: 'Coming soon to the series',
    skills: [
      { name: 'System Design', mono: 'Sd' },
      { name: 'Cloud Computing', mono: 'Cl' },
      { name: 'Machine Learning', mono: 'Ml' },
    ],
  },
];

export const skillEvidence: Record<string, string[]> = {
  Java: ['Oracle Java Certified', 'Projects'],
  Python: ['Projects', 'Flask'],
  React: ['Project 1', 'Project 2'],
  HTML: ['Web Projects'],
  CSS: ['Web Projects'],
  JavaScript: ['Frontend Projects'],
  'Node.js': ['Project 1', 'Project 2'],
  'Spring Boot': ['Backend Projects'],
  Docker: ['DevOps Projects'],
  'REST APIs': ['All Projects'],
  'Git / GitHub': ['All Projects'],
  PostgreSQL: ['Database Projects'],
  MongoDB: ['NoSQL Projects'],
  DBMS: ['CS Fundamentals'],
  DSA: ['Competitive Coding', '500+ problems solved'],
};

export type Episode = {
  code: string;
  title: string;
  description: string;
  tags: string[];
  runtime: string;
  palette: Palette;
};

export type Season = {
  number: number;
  title: string;
  period: string;
  synopsis: string;
  episodes: Episode[];
};

const crimson: Palette = { from: '#24060b', via: '#6e0d1d', to: '#09070a', accent: '#ff3d5a' };
const amber: Palette = { from: '#1c1003', via: '#6b3c06', to: '#0a0806', accent: '#ffb547' };
const ocean: Palette = { from: '#04121f', via: '#0f4c6e', to: '#05080d', accent: '#4cc9ff' };
const violet: Palette = { from: '#120822', via: '#3d1a6e', to: '#07060c', accent: '#b98bff' };
const jade: Palette = { from: '#03150f', via: '#0d5a40', to: '#050a08', accent: '#46e3a8' };

export const seasons: Season[] = [
  {
    number: 1,
    title: 'The Beginning',
    period: '2021 – 2023',
    synopsis: 'Class XII years — Mathematics, Physics and Chemistry.',
    episodes: [
      {
        code: 'S01 E01',
        title: 'The Foundation',
        description: 'Class XII — finishing with strong marks and a passion for technology.',
        tags: ['Class XII', 'Science'],
        runtime: '2021 – 2023',
        palette: amber,
      },
    ],
  },
  {
    number: 2,
    title: 'Enter: CS & Engineering',
    period: '2023 – Present',
    synopsis: 'B.Tech in Computer Science & Engineering.',
    episodes: [
      {
        code: 'S02 E01',
        title: 'The Engineer',
        description: 'Bachelor of Technology in Computer Science & Engineering.',
        tags: ['B.Tech', 'CSE'],
        runtime: '2023 – Present',
        palette: violet,
      },
      {
        code: 'S02 E02',
        title: 'The Problem Solver',
        description: 'Competitive coding — solving 500+ problems on LeetCode, GFG, and CodeChef.',
        tags: ['DSA', 'LeetCode', 'GFG', 'CodeChef'],
        runtime: '500+ problems',
        palette: jade,
      },
    ],
  },
  {
    number: 3,
    title: 'Building Real Products',
    period: '2025 – 2026',
    synopsis: 'Full-stack projects, certifications, and growing into a real developer.',
    episodes: [
      {
        code: 'S03 E01',
        title: 'The Developer',
        description: 'Building real-world full-stack applications with modern technologies.',
        tags: ['React', 'Node.js', 'Java'],
        runtime: '2025 – 2026',
        palette: ocean,
      },
      {
        code: 'S03 E02',
        title: 'The Projects',
        description: 'Shipping three full-stack projects with measurable impact.',
        tags: ['Full-Stack', 'APIs', 'Docker'],
        runtime: '2026',
        palette: crimson,
      },
    ],
  },
  {
    number: 4,
    title: "What's Next",
    period: 'Now streaming',
    synopsis: 'Exploring System Design, Cloud Computing, and Machine Learning.',
    episodes: [
      {
        code: 'S04 E01',
        title: 'The Next Chapter',
        description: 'Exploring System Design, Cloud Computing, and Machine Learning.',
        tags: ['System Design', 'Cloud', 'Machine Learning'],
        runtime: 'In production',
        palette: violet,
      },
    ],
  },
];

export type TopPick = { label: string; title: string; detail: string; palette: Palette };

export const topPicks: TopPick[] = [
  { label: 'Primary language', title: 'Java', detail: 'Primary language • Spring Boot backend', palette: amber },
  { label: 'The AI stack', title: 'Python', detail: 'ML / AI & backend scripting', palette: crimson },
  { label: 'Frontend choice', title: 'React', detail: 'Modern UI development', palette: ocean },
  { label: 'Backend runtime', title: 'Node.js', detail: 'API & server-side logic', palette: violet },
  { label: 'Container tool', title: 'Docker', detail: 'Containerized deployments', palette: jade },
  { label: 'Database', title: 'PostgreSQL', detail: 'Primary relational database', palette: amber },
  { label: 'Problems solved', title: '500+', detail: 'LeetCode • GFG • CodeChef', palette: crimson },
  { label: 'Interests', title: 'System Design', detail: 'with Cloud & Machine Learning', palette: ocean },
  { label: 'Cloud interest', title: 'AWS', detail: 'Cloud computing & deployments', palette: violet },
  { label: 'AI interest', title: 'Machine Learning', detail: 'Deep Learning & AI applications', palette: jade },
];

/** Slides for the "▶ Play Intro" cinematic sequence. */
export type IntroSlide = { kicker: string; title: string; lines: string[]; chips?: string[] };

export const introSlides: IntroSlide[] = [
  {
    kicker: 'Education',
    title: 'B.Tech · CSE',
    lines: ['Your College Name', '2023 – Present'],
    chips: ['CGPA X.XX'],
  },
  {
    kicker: 'Skills',
    title: 'Java first.',
    lines: ['Python, C, C++ · React, Node.js, Express.js', 'PostgreSQL, MongoDB, MySQL · Docker, REST, JWT'],
    chips: ['Java', 'Python', 'React', 'Node.js', 'Docker'],
  },
  {
    kicker: 'Projects',
    title: 'My Originals',
    lines: [
      'Project 1 — description here',
      'Project 2 — description here',
      'Project 3 — description here',
    ],
  },
  {
    kicker: 'Achievements',
    title: 'Top Moments',
    lines: [
      'Achievement 1',
      'Achievement 2',
      'Competitive Coding — 500+ problems',
    ],
  },
  {
    kicker: 'Certified',
    title: 'Certifications',
    lines: ['Your certifications here'],
  },
  {
    kicker: 'Current mission',
    title: 'Now exploring',
    lines: ['System Design · Cloud Computing · Machine Learning'],
  },
];

export type ProfileId = 'shambhavi' | 'recruiter' | 'developer' | 'creative';
export type SectionId = 'about' | 'journey' | 'originals' | 'picks' | 'skills' | 'moments' | 'story';

export const viewerProfiles: {
  id: ProfileId;
  name: string;
  blurb: string;
  color: string;
  order: SectionId[];
}[] = [
  {
    id: 'shambhavi',
    name: 'Shambhavi',
    blurb: 'The full series, in order',
    color: '#e5132b',
    order: ['about', 'journey', 'originals', 'picks', 'skills', 'moments', 'story'],
  },
  {
    id: 'recruiter',
    name: 'Recruiter',
    blurb: 'Resume, achievements & skills first',
    color: '#4cc9ff',
    order: ['story', 'moments', 'skills', 'originals', 'about', 'journey', 'picks'],
  },
  {
    id: 'developer',
    name: 'Developer',
    blurb: 'Projects, stack & GitHub first',
    color: '#46e3a8',
    order: ['originals', 'skills', 'journey', 'moments', 'about', 'picks', 'story'],
  },
  {
    id: 'creative',
    name: 'Creative',
    blurb: 'The story arc & highlights first',
    color: '#ffb547',
    order: ['journey', 'picks', 'originals', 'moments', 'about', 'skills', 'story'],
  },
];

export const sectionMeta: Record<SectionId, { nav: string; card: string; meta: string; palette: Palette }> = {
  about: { nav: 'About', card: 'About Me', meta: 'The Pilot • Education & training', palette: violet },
  journey: { nav: 'Journey', card: 'My Journey', meta: `${seasons.length} Seasons • ${seasons.reduce((n, s) => n + s.episodes.length, 0)} Episodes`, palette: amber },
  originals: { nav: 'Originals', card: 'My Projects', meta: `${projects.length} Originals • 2026`, palette: crimson },
  picks: { nav: 'Top Picks', card: 'Top Picks', meta: 'Top 10 from the resume', palette: jade },
  skills: { nav: 'Skills', card: 'My Skills', meta: `${skillCategories.length} Categories`, palette: ocean },
  moments: { nav: 'Moments', card: 'My Achievements', meta: `${achievements.length} Moments • ${certifications.length} Certifications`, palette: crimson },
  story: { nav: 'Resume', card: 'The Full Story', meta: 'Resume • View & download', palette: violet },
};
