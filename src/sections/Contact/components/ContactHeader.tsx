import React from 'react';
import { motion } from 'framer-motion';

const ContactHeader: React.FC = () => {
    return (
        <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            style={{
                padding: '4rem 2rem',
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center',
                maxWidth: '1200px',
                margin: '0 auto',
                borderBottom: '1px solid rgba(255, 255, 255, 0.1)'
            }}
        >
            <div>
                <h2 style={{
                    fontSize: '3rem',
                    fontWeight: 'bold',
                    color: 'white',
                    margin: 0
                }}>
                    Lets Connect there
                </h2>
            </div>
            <button style={{
                backgroundColor: '#ff6600',
                color: 'white',
                border: 'none',
                borderRadius: '50px',
                padding: '1rem 2rem',
                fontSize: '1.1rem',
                fontWeight: 'bold',
                cursor: 'pointer',
                display: 'flex',
                alignItems: 'center',
                gap: '0.5rem',
                transition: 'all 0.3s ease'
            }}
                onMouseEnter={(e) => {
                    e.currentTarget.style.backgroundColor = '#ff8533';
                }}
                onMouseLeave={(e) => {
                    e.currentTarget.style.backgroundColor = '#ff6600';
                }}
            >
                Hire me
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M7 17L17 7M17 7H7M17 7V17" />
                </svg>
            </button>
        </motion.div>
    );
};

export default ContactHeader;
