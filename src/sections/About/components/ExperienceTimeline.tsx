import React from 'react';
import { motion } from 'framer-motion';

interface ExperienceItem {
    company: string;
    location: string;
    period: string;
    role: string;
    highlights: string[];
}

interface ExperienceTimelineProps {
    experience: ExperienceItem[];
}

const ExperienceTimeline: React.FC<ExperienceTimelineProps> = ({ experience }) => {
    return (
        <div style={{
            maxWidth: '800px',
            margin: '0 auto',
            position: 'relative',
            paddingLeft: '40px'
        }}>
            {/* Continuous Timeline Line */}
            <div style={{
                position: 'absolute',
                left: '11px',
                top: '8px',
                bottom: '8px',
                width: '3px',
                background: 'linear-gradient(180deg, #ff6600 0%, #ff8533 50%, #ff6600 100%)',
                borderRadius: '3px',
                zIndex: 0
            }} />

            {experience.map((item, idx) => (
                <motion.div
                    key={idx}
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: idx * 0.15 }}
                    viewport={{ once: true }}
                    style={{
                        position: 'relative',
                        marginBottom: idx === experience.length - 1 ? 0 : '2.5rem'
                    }}
                >
                    {/* Timeline Dot */}
                    <div style={{
                        position: 'absolute',
                        left: '-33px',
                        top: '24px',
                        width: '14px',
                        height: '14px',
                        borderRadius: '50%',
                        backgroundColor: '#ff6600',
                        border: '3px solid #fff',
                        boxShadow: '0 0 0 4px rgba(255, 102, 0, 0.2), 0 2px 8px rgba(0,0,0,0.1)',
                        zIndex: 2
                    }} />

                    {/* Experience Card */}
                    <motion.div
                        whileHover={{
                            y: -4,
                            boxShadow: '0 12px 40px rgba(0,0,0,0.12)'
                        }}
                        transition={{ duration: 0.2 }}
                        style={{
                            background: '#fff',
                            borderRadius: '16px',
                            padding: '1.75rem 2rem',
                            boxShadow: '0 4px 20px rgba(0,0,0,0.06)',
                            border: '1px solid rgba(0,0,0,0.04)',
                            cursor: 'default'
                        }}
                    >
                        {/* Header Row: Role & Duration */}
                        <div style={{
                            display: 'flex',
                            flexWrap: 'wrap',
                            justifyContent: 'space-between',
                            alignItems: 'flex-start',
                            gap: '1rem',
                            marginBottom: '0.75rem'
                        }}>
                            <div>
                                <h3 style={{
                                    fontSize: '1.35rem',
                                    fontWeight: '700',
                                    color: '#1a2035',
                                    marginBottom: '0.25rem',
                                    lineHeight: '1.3'
                                }}>
                                    {item.role}
                                </h3>
                                <p style={{
                                    fontSize: '1rem',
                                    color: '#666',
                                    fontWeight: '500',
                                    display: 'flex',
                                    alignItems: 'center',
                                    gap: '0.5rem'
                                }}>
                                    <span style={{ color: '#ff6600' }}>@</span>
                                    {item.company}
                                    <span style={{ color: '#ccc' }}>•</span>
                                    <span style={{ color: '#888', fontWeight: '400' }}>{item.location}</span>
                                </p>
                            </div>

                            {/* Duration Badge */}
                            <span style={{
                                display: 'inline-flex',
                                alignItems: 'center',
                                gap: '0.4rem',
                                backgroundColor: 'rgba(255, 102, 0, 0.08)',
                                color: '#ff6600',
                                padding: '0.4rem 1rem',
                                borderRadius: '20px',
                                fontSize: '0.85rem',
                                fontWeight: '600',
                                whiteSpace: 'nowrap'
                            }}>
                                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                                    <circle cx="12" cy="12" r="10" />
                                    <polyline points="12,6 12,12 16,14" />
                                </svg>
                                {item.period}
                            </span>
                        </div>

                        {/* Highlights List */}
                        <ul style={{
                            listStyle: 'none',
                            padding: 0,
                            margin: '1rem 0 0 0'
                        }}>
                            {item.highlights.map((highlight, hIdx) => (
                                <li
                                    key={hIdx}
                                    style={{
                                        display: 'flex',
                                        alignItems: 'flex-start',
                                        gap: '0.75rem',
                                        marginBottom: hIdx === item.highlights.length - 1 ? 0 : '0.6rem',
                                        fontSize: '0.95rem',
                                        color: '#555',
                                        lineHeight: '1.5'
                                    }}
                                >
                                    <span style={{
                                        color: '#ff6600',
                                        fontSize: '0.6rem',
                                        marginTop: '0.45rem',
                                        flexShrink: 0
                                    }}>●</span>
                                    {highlight}
                                </li>
                            ))}
                        </ul>
                    </motion.div>
                </motion.div>
            ))}
        </div>
    );
};

export default ExperienceTimeline;
