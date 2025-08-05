import React, { useEffect, useRef, useState } from "react";
import Header from "./components/Header";
import Hero from "./components/Hero";
import About from "./components/About";
import Contact from "./components/Contact";
import Service from "./components/Service";
import Project from "./components/Project";

export default function App() {
  const [activeSection, setActiveSection] = useState<"home" | "service" | "about" | "resume" | "project" | "contact">("home");
  const [showModal, setShowModal] = useState(false);

  const sectionRefs = {
    home: useRef<HTMLElement | null>(null),
    about: useRef<HTMLElement | null>(null),
    resume: useRef<HTMLElement | null>(null),
    project: useRef<HTMLElement | null>(null),
    contact: useRef<HTMLElement | null>(null),
    service: useRef<HTMLElement | null>(null),
  };

  const handleDownloadResume = async () => {
    try {
      const response = await fetch("/Malaviya_gautam_Resume.pdf");
  
      if (!response.ok) {
        throw new Error("Failed to fetch resume.");
      }
  
      const blob = await response.blob();
  
      // Check if the blob is a valid PDF (optional, but safe)
      if (blob.type !== "application/pdf") {
        throw new Error("Downloaded file is not a valid PDF.");
      }
  
      const url = URL.createObjectURL(blob);
  
      const link = document.createElement("a");
      link.href = url;
      link.download = "Malaviya-Gautam-Malaviya_gautam_Resume.pdf";
      link.click();
  
      // Show modal *after* download is triggered
      setTimeout(() => {
        setShowModal(true);
        URL.revokeObjectURL(url);
      }, 300);
    } catch (error) {
      console.error("Download failed:", error);
      // Optionally, show another toast or error modal here
    }
  };
  

  const handleScrollTo = {
    home: () => sectionRefs.home.current?.scrollIntoView({ behavior: "smooth" }),
    about: () => sectionRefs.about.current?.scrollIntoView({ behavior: "smooth" }),
    service: () => sectionRefs.service.current?.scrollIntoView({ behavior: "smooth" }),
    resume: handleDownloadResume,
    project: () => sectionRefs.project.current?.scrollIntoView({ behavior: "smooth" }),
    contact: () => sectionRefs.contact.current?.scrollIntoView({ behavior: "smooth" }),
  };

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const visibleEntry = entries.find((entry) => entry.isIntersecting);
        if (visibleEntry?.target?.id) {
          setActiveSection(visibleEntry.target.id as keyof typeof sectionRefs);
        }
      },
      { threshold: 0.6 }
    );

    Object.values(sectionRefs).forEach((ref) => {
      if (ref.current) observer.observe(ref.current);
    });

    return () => {
      Object.values(sectionRefs).forEach((ref) => {
        if (ref.current) observer.unobserve(ref.current);
      });
    };
  }, []);

  return (
    <>
      <Header onScrollTo={handleScrollTo} activeSection={activeSection} />

      {showModal && (
        <div className="fixed inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center z-50">
          <div className="bg-neutral-900 text-white rounded-2xl p-6 w-96 shadow-xl text-center border border-orange-500">
            <h2 className="text-2xl font-bold text-orange-500 mb-3">✅ Resume Downloaded</h2>
            <p className="mb-6 text-gray-300">Your resume has been successfully downloaded.</p>

            <div className="flex justify-center gap-4">
              <button
                onClick={() => window.open("/Malaviya_gautam_Resume.pdf", "_blank")}
                className="bg-orange-500 hover:bg-orange-600 text-white px-4 py-2 rounded-lg transition"
              >
                View PDF
              </button>
              <button
                onClick={() => setShowModal(false)}
                className="bg-gray-700 hover:bg-gray-600 text-white px-4 py-2 rounded-lg transition"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Sections */}
      <section id="home" ref={sectionRefs.home} className="h-screen">
        <Hero />
      </section>
      <section id="about" ref={sectionRefs.about}>
        <About />
      </section>
      <section id="service" ref={sectionRefs.service}>
        <Service />
      </section>
      <section id="project" ref={sectionRefs.project}>
        <Project />
      </section>
      <section id="contact" ref={sectionRefs.contact}>
        <Contact />
      </section>
    </>
  );
}
