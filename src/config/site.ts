// Site configuration and SEO metadata

export const siteConfig = {
    name: "Gautam Malaviya",
    title: "Gautam Malaviya | Full Stack Developer",
    description: "Full Stack Developer specializing in MEAN/MERN stack. Building responsive, high-performance web applications with MongoDB, Express.js, Angular, React, and Node.js.",
    url: "https://gautammalaviya.com",
    author: "Gautam Malaviya",
    email: "malaviyagautam0942@gmail.com",

    // Social links
    social: {
        github: "https://github.com/gautam0904",
        linkedin: "https://linkedin.com/in/gautam-malaviya",
        twitter: "https://twitter.com",
    },

    // SEO defaults
    seo: {
        keywords: [
            "Full Stack Developer",
            "MEAN Stack",
            "MERN Stack",
            "React Developer",
            "Angular Developer",
            "Node.js Developer",
            "MongoDB",
            "Web Development",
            "Surat",
            "India"
        ],
        ogImage: "/og-image.png",
        twitterCard: "summary_large_image"
    },

    // Navigation items
    nav: [
        { id: "home", label: "Home", href: "#home" },
        { id: "about", label: "About", href: "#about" },
        { id: "service", label: "Service", href: "#service" },
        { id: "resume", label: "Resume", href: "#resume" },
        { id: "project", label: "Project", href: "#project" },
        { id: "contact", label: "Contact", href: "#contact" }
    ]
};

export default siteConfig;
