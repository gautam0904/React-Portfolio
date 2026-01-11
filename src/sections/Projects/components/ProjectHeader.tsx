import React from 'react';
import { motion } from 'framer-motion';

const ProjectHeader: React.FC = () => {
    return (
        <div style={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            marginBottom: '5rem'
        }}>
            <motion.h2
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, ease: "easeOut" }}
                style={{
                    fontSize: '3.5rem',
                    fontWeight: 'bold',
                    color: '#1a2035'
                }}
            >
                Lets have a look at my <span style={{ color: '#ff6600' }}>Projects</span>
            </motion.h2>
            <motion.button
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
                whileHover={{
                    scale: 1.05,
                    boxShadow: '0 10px 30px rgba(255, 102, 0, 0.4)',
                    transition: { duration: 0.2 }
                }}
                whileTap={{ scale: 0.98 }}
                style={{
                    backgroundColor: '#ff6600',
                    color: 'white',
                    border: 'none',
                    borderRadius: '50px',
                    padding: '1rem 2rem',
                    fontSize: '1.1rem',
                    fontWeight: 'bold',
                    cursor: 'pointer',
                    boxShadow: '0 5px 15px rgba(255, 102, 0, 0.3)',
                    transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)'
                }}
            >
                View All
            </motion.button>
        </div>
    );
};

export default ProjectHeader;
