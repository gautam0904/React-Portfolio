import React from 'react';
import { motion } from 'framer-motion';
import { CheckCircle, Zap, ShieldCheck, Phone } from 'lucide-react';

const ServiceLeftColumn: React.FC = () => {
    const bullets = [
        "Clean, maintainable architecture",
        "Full-stack implementation (UI to database)",
        "Performance-optimized deployment"
    ];

    const trustIndicators = [
        { icon: <CheckCircle size={28} strokeWidth={1.5} />, title: "Quality-First", subtitle: "Pixel-perfect + tested code" },
        { icon: <Zap size={28} strokeWidth={1.5} />, title: "Fast Iteration", subtitle: "2-week sprints, clear updates" },
        { icon: <ShieldCheck size={28} strokeWidth={1.5} />, title: "Secure By Default", subtitle: "Authentication, validation, encryption" },
        { icon: <Phone size={28} strokeWidth={1.5} />, title: "Ongoing Support", subtitle: "Post-launch maintenance available" }
    ];

    return (
        <div style={{ paddingRight: '2rem' }}>
            <motion.h2
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                style={{
                    fontSize: '3.5rem',
                    fontWeight: 'bold',
                    color: '#fff',
                    marginBottom: '1rem',
                    lineHeight: 1.1
                }}
            >
                Services That<br />Scale With You
            </motion.h2>

            <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ delay: 0.2, duration: 0.5 }}
                style={{ marginBottom: '4rem', paddingLeft: '0.5rem' }}
            >
                {bullets.map((bullet, index) => (
                    <motion.div
                        key={index}
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.3 + (index * 0.1) }}
                        style={{
                            display: 'flex',
                            alignItems: 'center',
                            gap: '1rem',
                            marginBottom: '1rem',
                            color: '#cccccc',
                            fontSize: '1.1rem'
                        }}
                    >
                        <div style={{ width: '6px', height: '6px', background: '#2563eb', borderRadius: '50%' }} />
                        {bullet}
                    </motion.div>
                ))}
            </motion.div>

            <div style={{
                display: 'grid',
                gridTemplateColumns: '1fr 1fr',
                gap: '1.5rem',
                marginTop: 'auto'
            }}>
                {trustIndicators.map((item, index) => (
                    <motion.div
                        key={index}
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.4 + (index * 0.1) }}
                        style={{
                            background: 'rgba(255, 255, 255, 0.03)',
                            border: '1px solid rgba(255, 255, 255, 0.05)',
                            padding: '1.5rem',
                            borderRadius: '16px',
                            backdropFilter: 'blur(10px)'
                        }}
                    >
                        <div style={{ marginBottom: '0.75rem', color: '#2563eb' }}>{item.icon}</div>
                        <h3 style={{ color: '#fff', fontWeight: '600', marginBottom: '0.25rem' }}>{item.title}</h3>
                        <p style={{ color: '#888', fontSize: '0.85rem', lineHeight: 1.4 }}>{item.subtitle}</p>
                    </motion.div>
                ))}
            </div>
        </div>
    );
};

export default ServiceLeftColumn;
