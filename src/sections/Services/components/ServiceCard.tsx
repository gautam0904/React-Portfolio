import React from 'react';
import { motion } from 'framer-motion';

interface ServiceCardProps {
    service: {
        title: string;
        description: string;
        image: string;
        technologies: string[];
    };
    index: number;
    hoveredCard: number | null;
    hoveredButton: number | null;
    onCardHover: (index: number | null) => void;
    onButtonHover: (index: number | null) => void;
    currentPage: number;
}

const cardVariants = {
    hidden: { y: 120, opacity: 0, scale: 0.7 },
    visible: {
        y: 0,
        opacity: 1,
        scale: 1,
        transition: {
            duration: 1,
            ease: [0.68, -0.55, 0.265, 1.55]
        }
    }
};

const ServiceCard: React.FC<ServiceCardProps> = ({
    service,
    index,
    hoveredCard,
    hoveredButton,
    onCardHover,
    onButtonHover,
    currentPage
}) => {
    return (
        <motion.div
            key={`${currentPage}-${index}`}
            variants={cardVariants}
            initial="hidden"
            animate="visible"
            whileHover={{
                y: -15,
                scale: 1.02,
                transition: { duration: 0.4, ease: "easeOut" }
            }}
            onMouseEnter={() => onCardHover(index)}
            onMouseLeave={() => onCardHover(null)}
            style={{
                background: hoveredCard === index
                    ? 'rgba(255, 102, 0, 0.1)'
                    : 'rgba(255, 255, 255, 0.05)',
                borderRadius: '25px',
                padding: '2rem',
                backdropFilter: 'blur(15px)',
                border: hoveredCard === index
                    ? '1px solid rgba(255, 102, 0, 0.3)'
                    : '1px solid rgba(255, 255, 255, 0.1)',
                position: 'relative',
                overflow: 'hidden',
                boxShadow: hoveredCard === index
                    ? '0 20px 40px rgba(255, 102, 0, 0.2)'
                    : '0 10px 30px rgba(0, 0, 0, 0.3)',
                transition: 'all 0.4s ease',
                minHeight: '400px'
            }}
        >
            <motion.h3
                animate={{
                    color: hoveredCard === index ? '#ff6600' : 'white'
                }}
                transition={{ duration: 0.3 }}
                style={{
                    fontSize: '1.5rem',
                    fontWeight: 'bold',
                    marginBottom: '1.5rem',
                    position: 'relative',
                    zIndex: 3
                }}
            >
                {service.title}
            </motion.h3>

            <div
                style={{
                    width: '100%',
                    height: '180px',
                    borderRadius: '20px',
                    overflow: 'hidden',
                    marginBottom: '1.5rem',
                    position: 'relative',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    backgroundColor: 'rgba(255, 255, 255, 0.05)'
                }}
            >
                <motion.img
                    src={service.image}
                    alt={service.title}
                    whileHover={{ scale: 1.1 }}
                    transition={{ duration: 0.4 }}
                    style={{
                        maxWidth: '80%',
                        maxHeight: '80%',
                        width: 'auto',
                        height: 'auto',
                        objectFit: 'contain'
                    }}
                />
            </div>

            <p style={{
                fontSize: '0.9rem',
                color: '#cccccc',
                lineHeight: '1.6',
                marginBottom: '1.5rem'
            }}>
                {service.description}
            </p>

            <div style={{
                display: 'flex',
                flexWrap: 'wrap',
                gap: '0.5rem',
                marginBottom: '1.5rem'
            }}>
                {service.technologies.map((tech, techIndex) => (
                    <span
                        key={techIndex}
                        style={{
                            backgroundColor: 'rgba(255, 102, 0, 0.2)',
                            color: '#ff6600',
                            padding: '0.3rem 0.8rem',
                            borderRadius: '15px',
                            fontSize: '0.75rem',
                            border: '1px solid rgba(255, 102, 0, 0.3)'
                        }}
                    >
                        {tech}
                    </span>
                ))}
            </div>

            <motion.button
                onMouseEnter={() => onButtonHover(index)}
                onMouseLeave={() => onButtonHover(null)}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
                style={{
                    position: 'absolute',
                    bottom: '1.5rem',
                    right: '1.5rem',
                    width: '50px',
                    height: '50px',
                    borderRadius: '50%',
                    backgroundColor: hoveredButton === index ? '#ff6600' : '#2a2a2a',
                    border: 'none',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    cursor: 'pointer',
                    transition: 'all 0.3s ease',
                    zIndex: 3,
                    boxShadow: hoveredButton === index
                        ? '0 8px 20px rgba(255, 102, 0, 0.4)'
                        : '0 4px 10px rgba(0, 0, 0, 0.3)'
                }}
            >
                <motion.svg
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="white"
                    strokeWidth="2"
                    animate={{
                        x: hoveredButton === index ? 2 : 0,
                        y: hoveredButton === index ? -2 : 0
                    }}
                    transition={{ duration: 0.2 }}
                >
                    <path d="M7 17L17 7M17 7H7M17 7V17" />
                </motion.svg>
            </motion.button>
        </motion.div>
    );
};

export default ServiceCard;
