// Environment configuration
// In a real app, these would come from .env files

export const env = {
    // API endpoints
    apiUrl: import.meta.env.VITE_API_URL || '/api',

    // Email service (EmailJS)
    emailjs: {
        serviceId: import.meta.env.VITE_EMAILJS_SERVICE_ID || '',
        templateId: import.meta.env.VITE_EMAILJS_TEMPLATE_ID || '',
        publicKey: import.meta.env.VITE_EMAILJS_PUBLIC_KEY || '',
    },

    // Analytics (optional)
    analytics: {
        gaId: import.meta.env.VITE_GA_ID || '',
    },

    // Feature flags
    features: {
        enableAnalytics: import.meta.env.VITE_ENABLE_ANALYTICS === 'true',
        enableContactForm: true,
    },

    // Environment
    isDev: import.meta.env.DEV,
    isProd: import.meta.env.PROD,
};

export default env;
