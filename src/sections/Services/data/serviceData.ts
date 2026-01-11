// Services data configuration
export interface ServiceItem {
    title: string;
    image: string;
    description: string;
    technologies: string[];
}

export const allServices: ServiceItem[] = [
    // Page 1 (4 cards)
    {
        title: "Frontend Development",
        image: "/assets/images/frontend.png",
        description: "Modern, responsive user interfaces with React, Angular, and Vue.js delivering exceptional user experiences",
        technologies: ["React", "Angular", "Vue.js", "TypeScript"]
    },
    {
        title: "Full Stack MERN",
        image: "/assets/images/mern.png",
        description: "Complete web applications using MongoDB, Express.js, React, and Node.js for scalable solutions",
        technologies: ["MongoDB", "Express.js", "React", "Node.js"]
    },
    {
        title: "Full Stack MEAN",
        image: "/assets/images/mean.png",
        description: "End-to-end web development with MongoDB, Express.js, Angular, and Node.js technology stack",
        technologies: ["MongoDB", "Express.js", "Angular", "Node.js"]
    },
    {
        title: "Backend Development",
        image: "/assets/images/backend.png",
        description: "Robust server-side architecture, RESTful APIs, and database optimization for high-performance applications",
        technologies: ["Node.js", "Express.js", "MongoDB", "REST APIs"]
    },
    // Page 2 (4 cards)
    {
        title: "AI Integration",
        image: "/assets/images/ai.png",
        description: "Smart application features with machine learning APIs, natural language processing, and intelligent automation",
        technologies: ["TensorFlow.js", "OpenAI API", "ML Models", "NLP"]
    },
    {
        title: "Mobile App Development",
        image: "/assets/images/mobile.png",
        description: "Cross-platform mobile applications using React Native and Ionic for iOS and Android platforms",
        technologies: ["React Native", "Ionic", "Cordova", "PWA"]
    },
    {
        title: "Desktop App Development",
        image: "/assets/images/desktop.png",
        description: "Desktop applications using Electron and modern web technologies for Windows, macOS, and Linux",
        technologies: ["Electron", "Node.js", "JavaScript", "HTML/CSS"]
    },
    {
        title: "JavaScript Ecosystem",
        image: "/assets/images/js-ecosystem.png",
        description: "Advanced JavaScript development with modern ES6+, TypeScript, and comprehensive tooling solutions",
        technologies: ["ES6+", "TypeScript", "Webpack", "Babel"]
    },
    // Page 3 (4 cards)
    {
        title: "UI/UX Design",
        image: "/assets/images/uiux.png",
        description: "User-centered design approach with wireframing, prototyping, and interactive design using modern tools",
        technologies: ["Figma", "Adobe XD", "Sketch", "Prototyping"]
    },
    {
        title: "API Development",
        image: "/assets/images/api.png",
        description: "RESTful and GraphQL API development with proper documentation, authentication, and security measures",
        technologies: ["REST APIs", "GraphQL", "JWT", "Swagger"]
    },
    {
        title: "Real-time Applications",
        image: "/assets/images/realtime.png",
        description: "Live chat systems, real-time notifications, and collaborative applications using WebSocket technology",
        technologies: ["Socket.io", "WebRTC", "WebSocket", "Redis"]
    },
    {
        title: "Testing & Debugging",
        image: "/assets/images/testing.png",
        description: "Comprehensive testing strategies including unit testing, integration testing, and automated testing pipelines",
        technologies: ["Jest", "Cypress", "Mocha", "Testing Library"]
    }
];
