// Common types for the portfolio application

// Form types
export interface FormData {
    name: string;
    email: string;
    company?: string;
    project?: string;
    budget?: string;
    message?: string;
}

export interface FormErrors {
    [key: string]: string;
}

export interface FormState {
    data: FormData;
    errors: FormErrors;
    isSubmitting: boolean;
    isSuccess: boolean;
}

// Notification types
export type NotificationType = 'success' | 'error' | 'info';

export interface Notification {
    message: string;
    type: NotificationType;
}

// Project types
export interface Project {
    id: string;
    title: string;
    description: string;
    image: string;
    technologies: string[];
    liveUrl?: string;
    githubUrl?: string;
    category: string;
}

// Service types
export interface Service {
    id: string;
    title: string;
    description: string;
    icon: string;
    features: string[];
}

// Experience types
export interface Experience {
    company: string;
    location: string;
    period: string;
    role: string;
    description: string;
    logo?: string;
}

// Skill types
export interface Skill {
    name: string;
    level: number;
    category: 'frontend' | 'backend' | 'database' | 'tools';
    icon?: string;
}

// Navigation types
export interface NavItem {
    id: string;
    label: string;
    href: string;
}

// Social link types
export interface SocialLink {
    name: string;
    url: string;
    icon: string;
}
