import React, { useState, useEffect } from 'react';
import { AnimatePresence } from 'framer-motion';

// UI Components
import { Toast } from '../../components/ui';

// Hero Sub-components
import {
    HeroContactForm,
    HeroHireModal,
    HeroBackground,
    HeroTestimonial,
    HeroExperience,
    HeroCenterContent
} from './components';

const Hero = () => {
    const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
    const [isHireModalOpen, setIsHireModalOpen] = useState(false);
    const [isContactFormOpen, setIsContactFormOpen] = useState(false);
    const [notification, setNotification] = useState<{
        message: string;
        type: 'success' | 'error' | 'info';
    } | null>(null);

    // Request notification permission on component mount
    useEffect(() => {
        if ('Notification' in window && Notification.permission === 'default') {
            Notification.requestPermission();
        }
    }, []);

    useEffect(() => {
        const handleMouseMove = (e: MouseEvent) => {
            setMousePosition({
                x: (e.clientX / window.innerWidth) * 100,
                y: (e.clientY / window.innerHeight) * 100
            });
        };

        window.addEventListener('mousemove', handleMouseMove);
        return () => window.removeEventListener('mousemove', handleMouseMove);
    }, []);

    const showNotification = (message: string, type: 'success' | 'error' | 'info' = 'success') => {
        setNotification({ message, type });
    };

    const handleHireMe = () => {
        setIsHireModalOpen(true);
        document.body.style.overflow = 'hidden';
    };

    const handlePortfolio = () => {
        const projectsSection = document.getElementById('projects');
        if (projectsSection) {
            projectsSection.scrollIntoView({ behavior: 'smooth' });
        } else {
            showNotification('Projects section coming soon!', 'info');
        }
    };

    const closeModals = () => {
        setIsHireModalOpen(false);
        setIsContactFormOpen(false);
        document.body.style.overflow = 'unset';
    };

    return (
        <section className="w-full min-h-screen relative overflow-hidden">
            {/* Notification Toast */}
            <AnimatePresence>
                {notification && (
                    <Toast
                        message={notification.message}
                        type={notification.type}
                        onClose={() => setNotification(null)}
                    />
                )}
            </AnimatePresence>

            {/* Enhanced Dynamic Background */}
            <HeroBackground mousePosition={mousePosition} />

            <div className="grid grid-cols-1 lg:grid-cols-[minmax(280px,1fr)_2fr_minmax(280px,1fr)] gap-8 lg:gap-12 min-h-screen px-6 lg:px-16 py-20 relative z-10 max-w-7xl mx-auto items-center">
                {/* LEFT TESTIMONIAL */}
                <HeroTestimonial />

                {/* CENTER MAIN CONTENT */}
                <HeroCenterContent
                    handleHireMe={handleHireMe}
                    handlePortfolio={handlePortfolio}
                />

                {/* RIGHT EXPERIENCE */}
                <HeroExperience />
            </div>

            {/* Hire Me Modal */}
            <HeroHireModal
                isOpen={isHireModalOpen}
                onClose={closeModals}
                onOpenContactForm={() => {
                    setIsHireModalOpen(false);
                    setIsContactFormOpen(true);
                }}
            />

            {/* Contact Form Modal */}
            <HeroContactForm
                isOpen={isContactFormOpen}
                onClose={closeModals}
            />


        </section>
    );
};

export default Hero;
