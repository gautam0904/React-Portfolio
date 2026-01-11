import React from 'react';
import { motion } from 'framer-motion';

interface TestimonialCardProps {
    testimonial: {
        name: string;
        role: string;
        avatar: string;
        rating: number;
        text: string;
    };
    index: number;
}

const itemVariants = {
    hidden: { opacity: 0, y: 30, scale: 0.95 },
    visible: {
        opacity: 1,
        y: 0,
        scale: 1,
        transition: {
            type: "spring" as const,
            damping: 20,
            stiffness: 300
        }
    }
};

const TestimonialCard: React.FC<TestimonialCardProps> = ({ testimonial, index }) => {
    return (
        <motion.div
            key={index}
            variants={itemVariants}
            whileHover={{
                y: -10,
                scale: 1.02,
                transition: { duration: 0.3 }
            }}
            style={{
                background: 'rgba(255, 255, 255, 0.08)',
                borderRadius: '25px',
                padding: '3rem',
                backdropFilter: 'blur(20px)',
                border: '1px solid rgba(255, 255, 255, 0.15)',
                position: 'relative',
                boxShadow: '0 25px 50px rgba(0,0,0,0.2)'
            }}
        >
            <div style={{
                display: 'flex',
                alignItems: 'center',
                gap: '1.5rem',
                marginBottom: '2rem'
            }}>
                <motion.img
                    whileHover={{ scale: 1.1 }}
                    src={testimonial.avatar}
                    alt={testimonial.name}
                    style={{
                        width: '70px',
                        height: '70px',
                        borderRadius: '50%',
                        objectFit: 'cover',
                        border: '3px solid #ff6600'
                    }}
                />
                <div>
                    <h4 style={{
                        color: 'white',
                        fontSize: '1.3rem',
                        fontWeight: 'bold',
                        margin: '0 0 0.5rem 0'
                    }}>
                        {testimonial.name}
                    </h4>
                    <p style={{
                        color: '#cccccc',
                        fontSize: '1.1rem',
                        margin: 0
                    }}>
                        {testimonial.role}
                    </p>
                </div>
            </div>

            <div style={{
                display: 'flex',
                gap: '0.25rem',
                marginBottom: '2rem'
            }}>
                {Array(5).fill(0).map((_, i) => (
                    <motion.span
                        key={i}
                        initial={{ opacity: 0, scale: 0 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        transition={{ delay: i * 0.1, type: "spring", stiffness: 300 }}
                        style={{ color: '#ff6600', fontSize: '1.3rem' }}
                    >
                        ★
                    </motion.span>
                ))}
                <span style={{ color: 'white', marginLeft: '0.75rem', fontSize: '1.1rem' }}>
                    {testimonial.rating}
                </span>
            </div>

            <p style={{
                color: '#cccccc',
                fontSize: '1.2rem',
                lineHeight: '1.7',
                margin: 0
            }}>
                {testimonial.text}
            </p>
        </motion.div>
    );
};

export default TestimonialCard;
