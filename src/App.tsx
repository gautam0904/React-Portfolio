import React, { useEffect, useRef, useState, useMemo } from "react";
import { AnimatePresence } from "framer-motion";
import Header from "./components/Header";
import Hero from "./sections/Hero";
import About from "./sections/About";
import Contact from "./sections/Contact";
import Service from "./sections/Services";
import Project from "./sections/Projects";
import LoadingOverlay from "./components/LoadingOverlay";
import ResumeModal from "./components/ResumeModal";
import ScrollToTopButton from "./components/ScrollToTopButton";
import SectionProgressIndicator from "./components/SectionProgressIndicator";


export default function App() {
  const [activeSection, setActiveSection] = useState<"home" | "service" | "about" | "resume" | "project" | "contact">("home");
  const [showModal, setShowModal] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const homeRef = useRef<HTMLElement | null>(null);
  const aboutRef = useRef<HTMLElement | null>(null);
  const resumeRef = useRef<HTMLElement | null>(null);
  const projectRef = useRef<HTMLElement | null>(null);
  const contactRef = useRef<HTMLElement | null>(null);
  const serviceRef = useRef<HTMLElement | null>(null);

  const sectionRefs = useMemo(() => ({
    home: homeRef,
    about: aboutRef,
    resume: resumeRef,
    project: projectRef,
    contact: contactRef,
    service: serviceRef,
  }), []);

  const handleDownloadResume = async () => {
    setIsLoading(true);
    try {
      const response = await fetch("/Malaviya_gautam_Resume.pdf");

      if (!response.ok) {
        throw new Error("Failed to fetch resume.");
      }

      const blob = await response.blob();

      if (blob.type !== "application/pdf") {
        throw new Error("Downloaded file is not a valid PDF.");
      }

      const url = URL.createObjectURL(blob);

      const link = document.createElement("a");
      link.href = url;
      link.download = "Gautam-Malaviya-Resume.pdf";
      link.click();

      setTimeout(() => {
        setIsLoading(false);
        setShowModal(true);
        URL.revokeObjectURL(url);
      }, 500);
    } catch (error) {
      console.error("Download failed:", error);
      setIsLoading(false);
    }
  };

  const handleScrollTo = {
    home: () => {
      sectionRefs.home.current?.scrollIntoView({ behavior: "smooth" });
      setActiveSection('home');
    },
    about: () => {
      sectionRefs.about.current?.scrollIntoView({ behavior: "smooth" });
      setActiveSection('about');
    },
    service: () => {
      sectionRefs.service.current?.scrollIntoView({ behavior: "smooth" });
      setActiveSection('service');
    },
    resume: handleDownloadResume,
    project: () => {
      sectionRefs.project.current?.scrollIntoView({ behavior: "smooth" });
      setActiveSection('project');
    },
    contact: () => {
      sectionRefs.contact.current?.scrollIntoView({ behavior: "smooth" });
      setActiveSection('contact');
    },
  };

  // Enhanced Intersection Observer
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.sort((a, b) => b.intersectionRatio - a.intersectionRatio);
        const mostVisible = entries.find((entry) => entry.intersectionRatio > 0.1);

        if (mostVisible?.target?.id) {
          console.log('Most visible section:', mostVisible.target.id);
          setActiveSection(mostVisible.target.id as keyof typeof sectionRefs);
        }
      },
      {
        threshold: [0.1, 0.25, 0.5, 0.75],
        rootMargin: '-10% 0px -10% 0px'
      }
    );

    Object.values(sectionRefs).forEach((ref) => {
      if (ref.current) {
        console.log('Observing section:', ref.current.id);
        observer.observe(ref.current);
      }
    });

    return () => {
      Object.values(sectionRefs).forEach((ref) => {
        if (ref.current) observer.unobserve(ref.current);
      });
    };
  }, [sectionRefs]);

  // Alternative scroll listener as backup
  useEffect(() => {
    const handleScroll = () => {
      const sections = Object.entries(sectionRefs).filter(([key]) => key !== 'resume');
      let currentSection = 'home';

      sections.forEach(([key, ref]) => {
        if (ref.current) {
          const rect = ref.current.getBoundingClientRect();
          if (rect.top <= window.innerHeight / 2 && rect.bottom >= window.innerHeight / 2) {
            currentSection = key;
          }
        }
      });

      if (currentSection !== activeSection) {
        console.log('Scroll detected section:', currentSection);
        setActiveSection(currentSection as keyof typeof sectionRefs);
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, [activeSection, sectionRefs]);

  const sections = Object.entries(sectionRefs)
    .filter(([key]) => key !== 'resume')
    .map(([key]) => ({ key, name: key }));

  const handleSectionClick = (key: string) => {
    const handler = handleScrollTo[key as keyof typeof handleScrollTo];
    if (typeof handler === 'function') {
      handler();
    }
  };

  return (
    <div className="relative">
      <Header onScrollTo={handleScrollTo} activeSection={activeSection} />

      <AnimatePresence>
        {isLoading && <LoadingOverlay />}
      </AnimatePresence>

      <AnimatePresence>
        {showModal && <ResumeModal isOpen={showModal} onClose={() => setShowModal(false)} />}
      </AnimatePresence>

      <main className="relative">
        <section id="home" ref={homeRef} className="min-h-screen relative">
          <Hero />
        </section>

        <section id="about" ref={aboutRef} className="min-h-screen relative">
          <About />
        </section>

        <section id="service" ref={serviceRef} className="min-h-screen relative">
          <Service />
        </section>

        <section id="project" ref={projectRef} className="min-h-screen relative">
          <Project />
        </section>

        <section id="contact" ref={contactRef} className="min-h-screen relative">
          <Contact />
        </section>
      </main>

      <ScrollToTopButton
        isVisible={activeSection !== 'home'}
        onClick={() => handleScrollTo.home()}
      />

      <SectionProgressIndicator
        sections={sections}
        activeSection={activeSection}
        onSectionClick={handleSectionClick}
      />
    </div>
  );
}
