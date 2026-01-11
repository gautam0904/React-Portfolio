import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { ServiceBackground } from './components';
import ServiceLeftColumn from './components/ServiceLeftColumn';
import ServiceRightColumn from './components/ServiceRightColumn';

interface ServiceProps {
    className?: string;
}

const Service: React.FC<ServiceProps> = ({ className }) => {
    const containerRef = useRef<HTMLDivElement>(null);
    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start end", "end start"]
    });

    const opacity = useTransform(scrollYProgress, [0, 0.2], [0, 1]);
    const y = useTransform(scrollYProgress, [0, 0.2], [100, 0]);

    return (
        <section
            id="services"
            ref={containerRef}
            className={`service-section ${className || ''}`}
            style={{
                minHeight: '100vh',
                position: 'relative',
                background: '#0a0a0a',
                overflow: 'hidden',
                padding: '6rem 2rem'
            }}
        >
            <style>{`
                .service-grid-layout {
                    display: grid;
                    grid-template-columns: 1fr;
                    gap: 3rem;
                    position: relative;
                    z-index: 10;
                    max-width: 1400px;
                    margin: 0 auto;
                }
                @media (min-width: 1024px) {
                    .service-grid-layout {
                        grid-template-columns: 400px 1fr;
                        gap: 4rem;
                    }
                }
                @media (min-width: 1280px) {
                    .service-grid-layout {
                        grid-template-columns: 450px 1fr;
                        gap: 6rem;
                    }
                }
            `}</style>

            <ServiceBackground />

            {/* Ambient Background Elements */}
            <div style={{
                position: 'absolute',
                top: 0,
                left: 0,
                width: '100%',
                height: '100%',
                background: 'radial-gradient(circle at 0% 0%, rgba(37, 99, 235, 0.05), transparent 40%)',
                zIndex: 1,
                pointerEvents: 'none'
            }} />

            <motion.div
                className="service-grid-layout"
                style={{ opacity, y }}
            >
                <ServiceLeftColumn />
                <ServiceRightColumn />
            </motion.div>
        </section>
    );
};

export default Service;
