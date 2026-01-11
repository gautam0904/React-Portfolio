import React from 'react';
import { motion } from 'framer-motion';

const ServiceHeader: React.FC = () => {
    return (
        <motion.div
            initial={{ opacity: 0, y: 60 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.6, -0.05, 0.01, 0.99] }}
            style={{
                textAlign: 'center',
                marginBottom: '5rem'
            }}
        >
            <motion.h2
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                style={{
                    fontSize: '4rem',
                    fontWeight: 'bold',
                    marginBottom: '2rem',
                    color: 'white',
                    position: 'relative',
                    display: 'inline-block'
                }}
            >
                My <span style={{ color: '#ff6600' }}>Services</span>
                <motion.span
                    initial={{ width: 0 }}
                    whileInView={{ width: '80px' }}
                    transition={{ duration: 0.8, delay: 0.5 }}
                    style={{
                        position: 'absolute',
                        bottom: '-15px',
                        left: '50%',
                        transform: 'translateX(-50%)',
                        height: '4px',
                        backgroundColor: '#ff6600',
                        borderRadius: '2px',
                        display: 'block'
                    }}
                />
            </motion.h2>

            <motion.p
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.3 }}
                style={{
                    fontSize: '1.3rem',
                    color: '#cccccc',
                    maxWidth: '800px',
                    lineHeight: '1.8',
                    margin: '2rem auto 0'
                }}
            >
                Comprehensive JavaScript-based development services covering everything from frontend to backend,
                mobile to desktop, and AI integration to create innovative digital solutions.
            </motion.p>

            <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.6 }}
                style={{
                    display: 'flex',
                    justifyContent: 'center',
                    gap: '4rem',
                    marginTop: '3rem'
                }}
            >
                <div style={{ textAlign: 'center' }}>
                    <div style={{
                        fontSize: '2.5rem',
                        fontWeight: 'bold',
                        color: '#ff6600',
                        marginBottom: '0.5rem'
                    }}>
                        12+
                    </div>
                    <div style={{
                        fontSize: '1rem',
                        color: '#cccccc'
                    }}>
                        Service Areas
                    </div>
                </div>
                <div style={{ textAlign: 'center' }}>
                    <div style={{
                        fontSize: '2.5rem',
                        fontWeight: 'bold',
                        color: '#ff6600',
                        marginBottom: '0.5rem'
                    }}>
                        6+
                    </div>
                    <div style={{
                        fontSize: '1rem',
                        color: '#cccccc'
                    }}>
                        Projects Delivered
                    </div>
                </div>
                <div style={{ textAlign: 'center' }}>
                    <div style={{
                        fontSize: '2rem',
                        fontWeight: 'bold',
                        color: '#ff6600',
                        marginBottom: '0.5rem',
                        lineHeight: '1.2'
                    }}>
                        Certified
                    </div>
                    <div style={{
                        fontSize: '1rem',
                        color: '#cccccc'
                    }}>
                        Developer
                    </div>
                </div>
            </motion.div>
        </motion.div>
    );
};

export default ServiceHeader;
