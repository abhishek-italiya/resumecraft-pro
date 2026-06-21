import corporateSvg from '../assets/templates/corporate.svg';
import creativeSvg from '../assets/templates/creative.svg';
import minimalSvg from '../assets/templates/minimal.svg';
import executiveSvg from '../assets/templates/executive.svg';
import techSvg from '../assets/templates/tech.svg';
import boldSvg from '../assets/templates/bold.svg';
import compactSvg from '../assets/templates/compact.svg';
import accentSvg from '../assets/templates/accent.svg';

export const STORAGE_KEY = 'resumecraft-pro-data';
export const THEME_KEY = 'resumecraft-pro-theme';

export const TEMPLATES = [
  {
    id: 'corporate',
    name: 'Corporate Professional',
    description: 'Clean, structured layout perfect for corporate roles and traditional industries.',
    color: '#2563EB',
    image: corporateSvg,
    features: ['ATS Optimized', 'Professional Layout', 'Clean Typography'],
  },
  {
    id: 'creative',
    name: 'Creative Modern',
    description: 'Bold design with accent colors ideal for creative and tech professionals.',
    color: '#7C3AED',
    image: creativeSvg,
    features: ['Modern Design', 'Color Accents', 'Visual Hierarchy'],
  },
  {
    id: 'minimal',
    name: 'Minimal Elegant',
    description: 'Minimalist elegance with focus on content and readability.',
    color: '#06B6D4',
    image: minimalSvg,
    features: ['Minimal Design', 'Elegant Typography', 'Content Focus'],
  },
  {
    id: 'executive',
    name: 'Executive Classic',
    description: 'Elegant serif layout for traditional corporate and professional industries.',
    color: '#0F172A',
    image: executiveSvg,
    features: ['Elegant Serif Font', 'Classic Dividers', 'High Contrast'],
  },
  {
    id: 'tech',
    name: 'Tech Sidebar',
    description: 'Sleek dark-indigo sidebar layout tailored for software and tech engineering.',
    color: '#10B981',
    image: techSvg,
    features: ['Dark Slate Sidebar', 'Code-Friendly Font', 'Grid Layout'],
  },
  {
    id: 'bold',
    name: 'Bold Header Banner',
    description: 'Contrasting top header design with a neat split column layout.',
    color: '#4F46E5',
    image: boldSvg,
    features: ['Header Banner', 'Split Layout', 'Modern Accents'],
  },
  {
    id: 'compact',
    name: 'Modern Compact Grid',
    description: 'Structured layout with thin lines and gray borders for rich content candidates.',
    color: '#64748B',
    image: compactSvg,
    features: ['Grid Alignment', 'Compact Design', 'High-Density Info'],
  },
  {
    id: 'accent',
    name: 'Elegant Accent Warm',
    description: 'Warm design with amber/orange tones and graphical headers.',
    color: '#D97706',
    image: accentSvg,
    features: ['Amber Highlights', 'Decorative Icons', 'Modern Spacing'],
  },
];

export const defaultResume = {
  template: 'corporate',
  personal: {
    profileImage: '',
    fullName: 'Abhishek Italiya',
    title: 'Full Stack Developer',
    email: 'abhiitaliya5@gmail.com',
    phone: '+91 98765 43210',
    address: 'Surat, Gujarat, India',
    linkedin: 'https://www.linkedin.com/in/abhishek-italiya-765a20298/',
    github: 'https://github.com/abhishek-italiya',
    portfolio: 'https://github.com/abhishek-italiya',
  },
  summary: 'Passionate Full Stack Developer with expertise in React, Node.js, and modern web technologies. Experienced in building scalable applications and delivering high-quality solutions.',
  education: [
    {
      id: crypto.randomUUID(),
      college: 'University of Technology',
      degree: 'B.Tech in Computer Science',
      cgpa: '8.5',
      startDate: '2019-08',
      endDate: '2023-05',
    },
  ],
  experience: [
    {
      id: crypto.randomUUID(),
      company: 'Tech Solutions Inc.',
      position: 'Senior Full Stack Developer',
      description: 'Led development of enterprise web applications using React and Node.js. Improved application performance by 40% and mentored junior developers.',
      startDate: '2023-06',
      endDate: 'Present',
    },
  ],
  projects: [
    {
      id: crypto.randomUUID(),
      name: 'ResumeCraft Pro',
      description: 'A premium SaaS resume builder with live preview, multiple templates, and PDF export.',
      technologies: 'React, Tailwind CSS, Framer Motion',
      github: 'https://github.com/abhishek-italiya',
      liveDemo: '',
    },
  ],
  skills: {
    categories: [
      {
        id: crypto.randomUUID(),
        name: 'Frontend',
        skills: ['React', 'JavaScript', 'TypeScript', 'Tailwind CSS'],
      },
      {
        id: crypto.randomUUID(),
        name: 'Backend',
        skills: ['Node.js', 'Express', 'MongoDB', 'PostgreSQL'],
      },
    ],
  },
  certifications: [
    {
      id: crypto.randomUUID(),
      name: 'AWS Certified Developer',
      issuer: 'Amazon Web Services',
      date: '2024-03',
    },
  ],
  languages: [
    { id: crypto.randomUUID(), name: 'English', proficiency: 'Fluent' },
    { id: crypto.randomUUID(), name: 'Hindi', proficiency: 'Native' },
  ],
  achievements: [
    {
      id: crypto.randomUUID(),
      title: 'Best Developer Award 2024',
      description: 'Recognized for outstanding contributions to open source projects.',
    },
  ],
};

export const createEmptyEducation = () => ({
  id: crypto.randomUUID(),
  college: '',
  degree: '',
  cgpa: '',
  startDate: '',
  endDate: '',
});

export const createEmptyExperience = () => ({
  id: crypto.randomUUID(),
  company: '',
  position: '',
  description: '',
  startDate: '',
  endDate: '',
});

export const createEmptyProject = () => ({
  id: crypto.randomUUID(),
  name: '',
  description: '',
  technologies: '',
  github: '',
  liveDemo: '',
});

export const createEmptyCertification = () => ({
  id: crypto.randomUUID(),
  name: '',
  issuer: '',
  date: '',
});

export const createEmptyLanguage = () => ({
  id: crypto.randomUUID(),
  name: '',
  proficiency: 'Intermediate',
});

export const createEmptyAchievement = () => ({
  id: crypto.randomUUID(),
  title: '',
  description: '',
});

export const createEmptySkillCategory = () => ({
  id: crypto.randomUUID(),
  name: '',
  skills: [],
});
