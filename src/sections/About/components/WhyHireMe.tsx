import React from 'react';
import { motion } from 'framer-motion';

const WhyHireMe: React.FC = () => {
    return (
        <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            viewport={{ once: true }}
            style={{
                background: 'linear-gradient(180deg, #0f0f0f 0%, #1a1a1a 50%, #0f0f0f 100%)',
                padding: '8rem 2rem',
                minHeight: '100vh',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                position: 'relative',
                overflow: 'hidden'
            }}
        >
            {/* Background decorative elements */}
            <div style={{
                position: 'absolute',
                top: '20%',
                left: '-10%',
                width: '400px',
                height: '400px',
                background: 'radial-gradient(circle, rgba(255, 102, 0, 0.08) 0%, transparent 70%)',
                borderRadius: '50%',
                pointerEvents: 'none'
            }} />
            <div style={{
                position: 'absolute',
                bottom: '10%',
                right: '-5%',
                width: '300px',
                height: '300px',
                background: 'radial-gradient(circle, rgba(255, 102, 0, 0.05) 0%, transparent 70%)',
                borderRadius: '50%',
                pointerEvents: 'none'
            }} />

            <div style={{
                maxWidth: '1000px',
                width: '100%',
                position: 'relative',
                zIndex: 1
            }}>
                {/* Section Header */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.2 }}
                    viewport={{ once: true }}
                    style={{ textAlign: 'center', marginBottom: '2rem' }}
                >
                    <h2 style={{
                        fontSize: '3rem',
                        fontWeight: 'bold',
                        color: 'white',
                        marginBottom: '1rem',
                        lineHeight: '1.2'
                    }}>
                        Why <span style={{ color: '#ff6600' }}>Hire Me?</span>
                    </h2>
                    <p style={{
                        fontSize: '1.15rem',
                        color: '#aaa',
                        maxWidth: '600px',
                        margin: '0 auto',
                        lineHeight: '1.7'
                    }}>
                        Certified Full Stack Developer with expertise in MEAN/MERN stack,
                        delivering high-performance web applications and exceptional user experiences.
                    </p>
                </motion.div>

                {/* Stats Row - 3 Equal Cards */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.3 }}
                    viewport={{ once: true }}
                    style={{
                        display: 'grid',
                        gridTemplateColumns: 'repeat(3, 1fr)',
                        gap: '1.5rem',
                        marginBottom: '3rem'
                    }}
                >
                    {[
                        { number: '30+', label: 'Projects Completed', icon: '📦' },
                        { number: '1+', label: 'Year Experience', icon: '💼' },
                        { number: '✓', label: 'Available to Hire', icon: '' }
                    ].map((stat, idx) => (
                        <motion.div
                            key={idx}
                            whileHover={{ y: -4, borderColor: 'rgba(255, 102, 0, 0.4)' }}
                            transition={{ duration: 0.2 }}
                            style={{
                                background: 'rgba(255, 255, 255, 0.03)',
                                border: '1px solid rgba(255, 255, 255, 0.08)',
                                borderRadius: '16px',
                                padding: '2rem 1.5rem',
                                textAlign: 'center',
                                cursor: 'default'
                            }}
                        >
                            <div style={{
                                fontSize: '2.5rem',
                                fontWeight: 'bold',
                                color: stat.number === '✓' ? '#4ade80' : '#ff6600',
                                marginBottom: '0.5rem',
                                lineHeight: '1'
                            }}>
                                {stat.number}
                            </div>
                            <div style={{
                                fontSize: '0.95rem',
                                color: '#888',
                                fontWeight: '500'
                            }}>
                                {stat.label}
                            </div>
                        </motion.div>
                    ))}
                </motion.div>

                {/* Key Highlights */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.4 }}
                    viewport={{ once: true }}
                    style={{ marginBottom: '3rem' }}
                >
                    <h3 style={{
                        fontSize: '1.25rem',
                        color: 'white',
                        marginBottom: '1.25rem',
                        fontWeight: '600',
                        textAlign: 'center'
                    }}>
                        What I Bring to the Table
                    </h3>
                    <div style={{
                        display: 'grid',
                        gridTemplateColumns: 'repeat(2, 1fr)',
                        gap: '1rem',
                        maxWidth: '800px',
                        margin: '0 auto'
                    }}>
                        {[
                            'Building responsive, high-performance web applications',
                            'Led full-stack projects: e-commerce, management systems, SaaS apps',
                            'Strong problem-solving and debugging capabilities',
                            'Effective collaboration with cross-functional teams'
                        ].map((highlight, idx) => (
                            <div
                                key={idx}
                                style={{
                                    display: 'flex',
                                    alignItems: 'flex-start',
                                    gap: '0.75rem',
                                    padding: '0.75rem',
                                    background: 'rgba(255, 255, 255, 0.02)',
                                    borderRadius: '8px'
                                }}
                            >
                                <span style={{
                                    color: '#ff6600',
                                    fontSize: '1.2rem',
                                    lineHeight: '1',
                                    flexShrink: 0
                                }}>▸</span>
                                <span style={{
                                    color: '#bbb',
                                    fontSize: '0.95rem',
                                    lineHeight: '1.5'
                                }}>{highlight}</span>
                            </div>
                        ))}
                    </div>
                </motion.div>

                {/* Tech Stack */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.5 }}
                    viewport={{ once: true }}
                    style={{ marginBottom: '3rem', textAlign: 'center' }}
                >
                    <h3 style={{
                        fontSize: '1.25rem',
                        color: 'white',
                        marginBottom: '1.25rem',
                        fontWeight: '600'
                    }}>
                        Tech Stack
                    </h3>
                    <div style={{
                        display: 'flex',
                        flexWrap: 'wrap',
                        justifyContent: 'center',
                        gap: '0.75rem'
                    }}>
                        {['React', 'Node.js', 'MongoDB', 'Angular', 'TypeScript', 'Express.js'].map((tech, idx) => (
                            <motion.span
                                key={idx}
                                whileHover={{ scale: 1.05, backgroundColor: 'rgba(255, 102, 0, 0.2)' }}
                                transition={{ duration: 0.15 }}
                                style={{
                                    backgroundColor: 'rgba(255, 102, 0, 0.1)',
                                    color: '#ff6600',
                                    padding: '0.6rem 1.25rem',
                                    borderRadius: '25px',
                                    fontSize: '0.9rem',
                                    fontWeight: '500',
                                    border: '1px solid rgba(255, 102, 0, 0.3)',
                                    cursor: 'default'
                                }}
                            >
                                {tech}
                            </motion.span>
                        ))}
                    </div>
                </motion.div>

                {/* CTA Button */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.6 }}
                    viewport={{ once: true }}
                    style={{ textAlign: 'center' }}
                >
                    <motion.button
                        whileHover={{
                            scale: 1.05,
                            boxShadow: '0 12px 40px rgba(255, 102, 0, 0.5)'
                        }}
                        whileTap={{ scale: 0.98 }}
                        transition={{ duration: 0.2 }}
                        style={{
                            background: 'linear-gradient(135deg, #ff6600 0%, #ff8533 100%)',
                            color: 'white',
                            padding: '1.1rem 3.5rem',
                            fontSize: '1.1rem',
                            fontWeight: '600',
                            border: 'none',
                            borderRadius: '30px',
                            cursor: 'pointer',
                            boxShadow: '0 8px 30px rgba(255, 102, 0, 0.35)',
                            display: 'inline-flex',
                            alignItems: 'center',
                            gap: '0.5rem'
                        }}
                        onClick={() => window.open('mailto:malaviyagautam0942@gmail.com', '_blank')}
                    >
                        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                            <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
                            <polyline points="22,6 12,13 2,6" />
                        </svg>
                        Hire Me
                    </motion.button>
                    <p style={{
                        marginTop: '1rem',
                        color: '#666',
                        fontSize: '0.85rem'
                    }}>
                        or email me at <span style={{ color: '#ff6600' }}>malaviyagautam0942@gmail.com</span>
                    </p>
                </motion.div>
            </div>
        </motion.div>
    );
};

export default WhyHireMe;
