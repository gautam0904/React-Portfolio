import React, { useEffect, useRef, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Header from "./components/Header";
import Hero from "./components/Hero";
import About from "./components/About";
import Contact from "./components/Contact";
import Service from "./components/Service";
import Project from "./components/Project";

export default function App() {
  const [activeSection, setActiveSection] = useState<"home" | "service" | "about" | "resume" | "project" | "contact">("home");
  const [showModal, setShowModal] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const sectionRefs = {
    home: useRef<HTMLElement | null>(null),
    about: useRef<HTMLElement | null>(null),
    resume: useRef<HTMLElement | null>(null),
    project: useRef<HTMLElement | null>(null),
    contact: useRef<HTMLElement | null>(null),
    service: useRef<HTMLElement | null>(null),
  };

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
      setActiveSection('home'); // Manually set active section
    },
    about: () => {
      sectionRefs.about.current?.scrollIntoView({ behavior: "smooth" });
      setActiveSection('about'); // Manually set active section
    },
    service: () => {
      sectionRefs.service.current?.scrollIntoView({ behavior: "smooth" });
      setActiveSection('service'); // Manually set active section
    },
    resume: handleDownloadResume,
    project: () => {
      sectionRefs.project.current?.scrollIntoView({ behavior: "smooth" });
      setActiveSection('project'); // Manually set active section
    },
    contact: () => {
      sectionRefs.contact.current?.scrollIntoView({ behavior: "smooth" });
      setActiveSection('contact'); // Manually set active section
    },
  };

  // Enhanced Intersection Observer
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        // Sort entries by intersection ratio (how much is visible)
        entries.sort((a, b) => b.intersectionRatio - a.intersectionRatio);
        
        // Find the most visible entry
        const mostVisible = entries.find((entry) => entry.intersectionRatio > 0.1);
        
        if (mostVisible?.target?.id) {
          console.log('Most visible section:', mostVisible.target.id); // Debug log
          setActiveSection(mostVisible.target.id as keyof typeof sectionRefs);
        }
      },
      { 
        threshold: [0.1, 0.25, 0.5, 0.75], // Multiple thresholds for better detection
        rootMargin: '-10% 0px -10% 0px' // Offset to detect sections better
      }
    );

    // Observe all sections
    Object.values(sectionRefs).forEach((ref) => {
      if (ref.current) {
        console.log('Observing section:', ref.current.id); // Debug log
        observer.observe(ref.current);
      }
    });

    return () => {
      Object.values(sectionRefs).forEach((ref) => {
        if (ref.current) observer.unobserve(ref.current);
      });
    };
  }, []);

  // Alternative scroll listener as backup
  useEffect(() => {
    const handleScroll = () => {
      const sections = Object.entries(sectionRefs).filter(([key]) => key !== 'resume');
      let currentSection = 'home';
      
      sections.forEach(([key, ref]) => {
        if (ref.current) {
          const rect = ref.current.getBoundingClientRect();
          // If section is in the top half of viewport
          if (rect.top <= window.innerHeight / 2 && rect.bottom >= window.innerHeight / 2) {
            currentSection = key;
          }
        }
      });
      
      if (currentSection !== activeSection) {
        console.log('Scroll detected section:', currentSection); // Debug log
        setActiveSection(currentSection as keyof typeof sectionRefs);
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, [activeSection]);

  return (
    <div className="relative">
      {/* Enhanced Header */}
      <Header onScrollTo={handleScrollTo} activeSection={activeSection} />

      {/* Loading Overlay */}
      <AnimatePresence>
        {isLoading && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/60 backdrop-blur-md flex items-center justify-center z-[9999]"
          >
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
              className="bg-white/95 backdrop-blur-xl rounded-2xl p-8 shadow-2xl border border-orange-200/50"
            >
              <div className="flex items-center gap-4">
                <motion.div
                  animate={{ rotate: 360 }}
                  transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
                  className="w-8 h-8 border-3 border-orange-500 border-t-transparent rounded-full"
                />
                <div>
                  <h3 className="text-lg font-semibold text-gray-900">Downloading Resume</h3>
                  <p className="text-sm text-gray-600">Please wait...</p>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Enhanced Modal */}
      <AnimatePresence>
        {showModal && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/60 backdrop-blur-md flex items-center justify-center z-50 p-4"
            onClick={() => setShowModal(false)}
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.8, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.8, y: 20 }}
              onClick={(e) => e.stopPropagation()}
              className="bg-white/95 backdrop-blur-xl rounded-3xl p-8 w-full max-w-md shadow-2xl border border-orange-200/50 relative overflow-hidden"
            >
              {/* Background decoration */}
              <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-bl from-orange-100/50 to-transparent rounded-full" />
              <div className="absolute bottom-0 left-0 w-24 h-24 bg-gradient-to-tr from-orange-50/50 to-transparent rounded-full" />
              
              {/* Content */}
              <div className="relative z-10 text-center">
                {/* Success icon */}
                <motion.div
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{ delay: 0.2, type: "spring", stiffness: 300 }}
                  className="w-16 h-16 bg-gradient-to-r from-green-500 to-green-600 rounded-full flex items-center justify-center mx-auto mb-6 shadow-lg"
                >
                  <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </motion.div>

                <motion.h2
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.3 }}
                  className="text-2xl font-bold text-gray-900 mb-2"
                >
                  Resume Downloaded Successfully!
                </motion.h2>
                
                <motion.p
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.4 }}
                  className="text-gray-600 mb-8 leading-relaxed"
                >
                  My resume has been downloaded to your device. You can also view it online or download it again anytime.
                </motion.p>

                {/* Action buttons */}
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.5 }}
                  className="flex flex-col sm:flex-row gap-3"
                >
                  <motion.button
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    onClick={() => window.open("/Malaviya_gautam_Resume.pdf", "_blank")}
                    className="flex-1 bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 text-white px-6 py-3 rounded-xl font-semibold transition-all duration-200 shadow-lg hover:shadow-xl flex items-center justify-center gap-2"
                  >
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                    </svg>
                    View PDF
                  </motion.button>
                  
                  <motion.button
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    onClick={() => setShowModal(false)}
                    className="flex-1 bg-gray-100 hover:bg-gray-200 text-gray-700 px-6 py-3 rounded-xl font-semibold transition-all duration-200 border border-gray-200 hover:border-gray-300"
                  >
                    Close
                  </motion.button>
                </motion.div>

                {/* Additional info */}
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.6 }}
                  className="mt-6 pt-6 border-t border-gray-200"
                >
                  <div className="flex items-center justify-center gap-4 text-sm text-gray-500">
                    <div className="flex items-center gap-1">
                      <div className="w-2 h-2 bg-green-400 rounded-full"></div>
                      <span>PDF Format</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <div className="w-2 h-2 bg-blue-400 rounded-full"></div>
                      <span>Latest Version</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <div className="w-2 h-2 bg-orange-400 rounded-full"></div>
                      <span>Optimized</span>
                    </div>
                  </div>
                </motion.div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Enhanced Sections with proper IDs and minimum heights */}
      <main className="relative">
        {/* Home Section */}
        <motion.section
          id="home"
          ref={sectionRefs.home}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6 }}
          className="min-h-screen relative"
        >
          <Hero />
        </motion.section>

        {/* About Section */}
        <motion.section
          id="about"
          ref={sectionRefs.about}
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          viewport={{ once: true, margin: "-100px" }}
          className="min-h-screen relative" // Added min-height
        >
          <About />
        </motion.section>

        {/* Service Section */}
        <motion.section
          id="service"
          ref={sectionRefs.service}
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          viewport={{ once: true, margin: "-100px" }}
          className="min-h-screen relative" // Added min-height
        >
          <Service />
        </motion.section>

        {/* Project Section */}
        <motion.section
          id="project"
          ref={sectionRefs.project}
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          viewport={{ once: true, margin: "-100px" }}
          className="min-h-screen relative" // Added min-height
        >
          <Project />
        </motion.section>

        {/* Contact Section */}
        <motion.section
          id="contact"
          ref={sectionRefs.contact}
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          viewport={{ once: true, margin: "-100px" }}
          className="min-h-screen relative" // Added min-height
        >
          <Contact />
        </motion.section>
      </main>

      {/* Scroll to top button */}
      <motion.button
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ 
          opacity: activeSection !== 'home' ? 1 : 0,
          scale: activeSection !== 'home' ? 1 : 0.8
        }}
        transition={{ duration: 0.3 }}
        onClick={() => handleScrollTo.home()}
        className={`
          fixed bottom-8 right-8 w-12 h-12 bg-gradient-to-r from-orange-500 to-orange-600 
          text-white rounded-full shadow-lg hover:shadow-xl transition-all duration-300 
          flex items-center justify-center z-40 hover:scale-110
          ${activeSection === 'home' ? 'pointer-events-none' : 'pointer-events-auto'}
        `}
      >
        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 10l7-7m0 0l7 7m-7-7v18" />
        </svg>
      </motion.button>

      {/* Section progress indicator */}
      <motion.div
        initial={{ opacity: 0, x: 50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.6, delay: 1 }}
        className="fixed right-8 top-1/2 transform -translate-y-1/2 z-40 hidden lg:block"
      >
        <div className="flex flex-col gap-3">
          {Object.entries(sectionRefs).filter(([key]) => key !== 'resume').map(([key, ref], index) => (
            <motion.div
              key={key}
              whileHover={{ scale: 1.2 }}
              onClick={() => {
                const handler = handleScrollTo[key as keyof typeof handleScrollTo];
                if (typeof handler === 'function') {
                  handler();
                }
              }}
              className={`
                w-3 h-3 rounded-full cursor-pointer transition-all duration-300 border-2
                ${activeSection === key 
                  ? 'bg-orange-500 border-orange-500 shadow-lg shadow-orange-500/50' 
                  : 'bg-white/50 border-white/50 hover:bg-white/80 hover:border-white/80'
                }
              `}
            />
          ))}
        </div>
      </motion.div>

    </div>
  );
}
