import React from 'react';
import { motion } from 'framer-motion';

interface ProjectFiltersProps {
    activeFilter: string;
    onFilterChange: (filter: string) => void;
    filters: string[];
}

const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: {
            staggerChildren: 0.1,
            delayChildren: 0.2
        }
    }
};

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

const ProjectFilters: React.FC<ProjectFiltersProps> = ({ activeFilter, onFilterChange, filters }) => {
    return (
        <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            style={{
                display: 'flex',
                justifyContent: 'center',
                gap: '1.5rem',
                marginBottom: '4rem',
                flexWrap: 'wrap'
            }}
        >
            {filters.map((filter) => (
                <motion.button
                    key={filter}
                    variants={itemVariants}
                    whileHover={{
                        scale: 1.05,
                        y: -2,
                        transition: { duration: 0.2 }
                    }}
                    whileTap={{ scale: 0.98 }}
                    onClick={() => onFilterChange(filter)}
                    style={{
                        backgroundColor: activeFilter === filter ? '#ff6600' : '#f8f9fa',
                        color: activeFilter === filter ? 'white' : '#666',
                        border: activeFilter === filter ? 'none' : '2px solid #e9ecef',
                        borderRadius: '30px',
                        padding: '1rem 2rem',
                        fontSize: '1rem',
                        fontWeight: '600',
                        cursor: 'pointer',
                        boxShadow: activeFilter === filter
                            ? '0 8px 25px rgba(255, 102, 0, 0.3)'
                            : '0 2px 10px rgba(0,0,0,0.05)',
                        transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
                        position: 'relative',
                        overflow: 'hidden'
                    }}
                >
                    {activeFilter === filter && (
                        <motion.div
                            layoutId="activeFilter"
                            style={{
                                position: 'absolute',
                                inset: 0,
                                background: 'linear-gradient(135deg, #ff6600, #ff8533)',
                                borderRadius: '30px',
                                zIndex: -1
                            }}
                            transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
                        />
                    )}
                    {filter}
                </motion.button>
            ))}
        </motion.div>
    );
};

export default ProjectFilters;
