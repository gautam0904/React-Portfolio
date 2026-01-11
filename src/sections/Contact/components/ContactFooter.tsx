import React from 'react';
import { motion } from 'framer-motion';

const ContactFooter: React.FC = () => {
    return (
        <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            style={{
                padding: '2rem',
                maxWidth: '1200px',
                margin: '0 auto',
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center',
                flexWrap: 'wrap',
                gap: '1rem'
            }}
        >
            <div style={{
                color: '#cccccc',
                fontSize: '0.9rem'
            }}>
                Copyright© 2023 Gautam. All Rights Reserved.
            </div>
            <div style={{
                display: 'flex',
                gap: '1rem',
                alignItems: 'center'
            }}>
                <a href="#" style={{
                    color: '#cccccc',
                    textDecoration: 'none',
                    fontSize: '0.9rem',
                    transition: 'color 0.3s ease'
                }}
                    onMouseEnter={(e) => {
                        e.currentTarget.style.color = '#ff6600';
                    }}
                    onMouseLeave={(e) => {
                        e.currentTarget.style.color = '#cccccc';
                    }}
                >
                    User Terms & Conditions
                </a>
                <span style={{ color: '#cccccc' }}>|</span>
                <a href="#" style={{
                    color: '#cccccc',
                    textDecoration: 'none',
                    fontSize: '0.9rem',
                    transition: 'color 0.3s ease'
                }}
                    onMouseEnter={(e) => {
                        e.currentTarget.style.color = '#ff6600';
                    }}
                    onMouseLeave={(e) => {
                        e.currentTarget.style.color = '#cccccc';
                    }}
                >
                    Privacy Policy
                </a>
            </div>
        </motion.div>
    );
};

export default ContactFooter;
