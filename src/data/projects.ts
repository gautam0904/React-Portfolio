import type { Project } from '../types';

export const projects: Project[] = [
    {
        id: 'tavili-foodstock',
        title: 'Tavili Foodstock Management',
        description: 'A comprehensive food stock management system with real-time inventory tracking, automated reordering, and analytics dashboard.',
        image: '/assets/images/project1.png',
        technologies: ['Angular', 'Node.js', 'MongoDB', 'Express.js'],
        category: 'fullstack',
        liveUrl: '#',
        githubUrl: 'https://github.com/gautam0904'
    },
    {
        id: 'bus-booking',
        title: 'Bus Booking System',
        description: 'Online bus ticket booking platform with seat selection, payment integration, and booking management features.',
        image: '/assets/images/project2.png',
        technologies: ['React', 'Node.js', 'PostgreSQL', 'Stripe'],
        category: 'fullstack',
        liveUrl: '#',
        githubUrl: 'https://github.com/gautam0904'
    },
    {
        id: 'cms',
        title: 'Content Management System',
        description: 'A flexible CMS for managing website content with role-based access control and media management.',
        image: '/assets/images/project3.png',
        technologies: ['Next.js', 'MongoDB', 'AWS S3', 'TypeScript'],
        category: 'fullstack',
        liveUrl: '#',
        githubUrl: 'https://github.com/gautam0904'
    },
    {
        id: 'quiz-system',
        title: 'Dynamic Quiz Generation',
        description: 'Interactive quiz platform with AI-powered question generation, real-time scoring, and performance analytics.',
        image: '/assets/images/project4.png',
        technologies: ['Angular', 'Express.js', 'MongoDB', 'OpenAI'],
        category: 'fullstack',
        liveUrl: '#',
        githubUrl: 'https://github.com/gautam0904'
    }
];

export const projectCategories = [
    { id: 'all', label: 'All Projects' },
    { id: 'fullstack', label: 'Full Stack' },
    { id: 'frontend', label: 'Frontend' },
    { id: 'backend', label: 'Backend' }
];
