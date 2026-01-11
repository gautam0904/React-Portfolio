import type { Skill } from '../types';

export const skills: Skill[] = [
    // Frontend
    { name: 'React', level: 90, category: 'frontend' },
    { name: 'Angular', level: 85, category: 'frontend' },
    { name: 'Next.js', level: 80, category: 'frontend' },
    { name: 'TypeScript', level: 85, category: 'frontend' },
    { name: 'JavaScript', level: 90, category: 'frontend' },
    { name: 'HTML/CSS', level: 95, category: 'frontend' },
    { name: 'Tailwind CSS', level: 85, category: 'frontend' },

    // Backend
    { name: 'Node.js', level: 85, category: 'backend' },
    { name: 'Express.js', level: 85, category: 'backend' },
    { name: 'REST APIs', level: 90, category: 'backend' },

    // Database
    { name: 'MongoDB', level: 85, category: 'database' },
    { name: 'PostgreSQL', level: 75, category: 'database' },
    { name: 'SQL', level: 80, category: 'database' },

    // Tools
    { name: 'Git', level: 85, category: 'tools' },
    { name: 'Docker', level: 70, category: 'tools' },
    { name: 'AWS', level: 65, category: 'tools' }
];

export const featuredSkills = [
    'Angular',
    'React',
    'Next.js',
    'Node.js',
    'Express.js',
    'MongoDB',
    'SQL',
    'PostgreSQL',
    'JavaScript',
    'TypeScript'
];

export const floatingBadges = [
    { name: 'React', color: 'orange' },
    { name: 'Node.js', color: 'blue' },
    { name: 'Angular', color: 'red' },
    { name: 'Full Stack', color: 'purple' }
];
