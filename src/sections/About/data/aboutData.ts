// About section data configuration
export interface ExperienceItem {
    company: string;
    location: string;
    period: string;
    role: string;
    highlights: string[];
}

export const experience: ExperienceItem[] = [
    {
        company: "Shaligram Infotech",
        location: "Ahmedabad",
        period: "Jan 2024 – Present",
        role: "Full Stack Developer",
        highlights: [
            "Leading full-stack development projects using MEAN/MERN stack",
            "Building responsive, high-performance web applications",
            "Optimizing front-end and back-end for enhanced UX",
            "Collaborating with cross-functional teams on project delivery"
        ]
    },
    {
        company: "Blurbee Solution",
        location: "Gujarat",
        period: "Aug 2023 – Dec 2023",
        role: "Full Stack Developer Intern",
        highlights: [
            "Developed dynamic web applications using React and Node.js",
            "Implemented RESTful APIs and database integrations",
            "Gained hands-on experience in agile development workflows"
        ]
    }
];
