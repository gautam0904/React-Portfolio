import type { Service } from '../types';

export const services: Service[] = [
    {
        id: 'web-development',
        title: 'Web Development',
        description: 'Building responsive, high-performance web applications using modern frameworks like React, Angular, and Next.js with clean, maintainable code.',
        icon: 'code',
        features: [
            'Responsive Design',
            'Performance Optimization',
            'SEO Best Practices',
            'Cross-browser Compatibility'
        ]
    },
    {
        id: 'backend-development',
        title: 'Backend Development',
        description: 'Developing robust server-side applications with Node.js, Express.js, and RESTful APIs that scale with your business needs.',
        icon: 'server',
        features: [
            'RESTful API Design',
            'Database Integration',
            'Authentication & Security',
            'Microservices Architecture'
        ]
    },
    {
        id: 'database-design',
        title: 'Database Design',
        description: 'Designing efficient database schemas and implementing data solutions with MongoDB, PostgreSQL, and SQL databases.',
        icon: 'database',
        features: [
            'Schema Design',
            'Query Optimization',
            'Data Migration',
            'Backup Strategies'
        ]
    },
    {
        id: 'fullstack-solutions',
        title: 'Full Stack Solutions',
        description: 'End-to-end application development using the MEAN/MERN stack, from concept to deployment.',
        icon: 'layers',
        features: [
            'Complete Application Development',
            'DevOps Integration',
            'Cloud Deployment',
            'Continuous Integration'
        ]
    },
    {
        id: 'ui-ux-design',
        title: 'UI/UX Design',
        description: 'Creating intuitive user interfaces with modern design principles, animations, and exceptional user experience.',
        icon: 'palette',
        features: [
            'Modern UI Design',
            'Interactive Animations',
            'User Research',
            'Prototyping'
        ]
    },
    {
        id: 'consulting',
        title: 'Technical Consulting',
        description: 'Providing expert guidance on technology stack selection, architecture decisions, and development best practices.',
        icon: 'consulting',
        features: [
            'Technology Assessment',
            'Architecture Review',
            'Code Audits',
            'Performance Analysis'
        ]
    }
];
