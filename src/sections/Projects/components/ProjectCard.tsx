import React from 'react';
import { motion } from 'framer-motion';
import { ArrowIcon } from './ProjectIcons';

interface ProjectCardProps {
    item: {
        title: string;
        subtitle: string;
        description: string;
        image: string;
        category: string;
    };
    index: number;
    activeFilter: string;
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

const ProjectCard: React.FC<ProjectCardProps> = ({ item, index, activeFilter }) => {
    return (
        <motion.div
            key={`${activeFilter}-${index}`}
            variants={itemVariants}
            whileHover={{
                y: -12,
                scale: 1.02,
                transition: { duration: 0.3, ease: "easeOut" }
            }}
            style={{
                position: 'relative',
                borderRadius: '25px',
                overflow: 'hidden',
                boxShadow: '0 15px 50px rgba(0,0,0,0.08)',
                cursor: 'pointer',
                background: 'white'
            }}
        >
            <div style={{ position: 'relative', overflow: 'hidden' }}>
                <motion.img
                    src={item.image}
                    alt={item.title}
                    whileHover={{ scale: 1.05 }}
                    transition={{ duration: 0.3 }}
                    style={{
                        width: '100%',
                        height: '300px',
                        objectFit: 'cover'
                    }}
                />
                <motion.div
                    initial={{ opacity: 0 }}
                    whileHover={{ opacity: 1 }}
                    transition={{ duration: 0.3 }}
                    style={{
                        position: 'absolute',
                        inset: 0,
                        background: 'rgba(255, 102, 0, 0.1)',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center'
                    }}
                >
                    <motion.div
                        initial={{ scale: 0 }}
                        whileHover={{ scale: 1 }}
                        transition={{ delay: 0.1, type: "spring", stiffness: 300 }}
                        style={{
                            backgroundColor: 'rgba(255, 255, 255, 0.9)',
                            borderRadius: '50%',
                            padding: '1rem',
                            backdropFilter: 'blur(10px)'
                        }}
                    >
                        <ArrowIcon />
                    </motion.div>
                </motion.div>
            </div>

            <div style={{
                position: 'absolute',
                bottom: 0,
                left: 0,
                right: 0,
                background: 'linear-gradient(transparent, rgba(0,0,0,0.9))',
                padding: '2.5rem 2rem 2rem',
                color: 'white'
            }}>
                <div style={{
                    display: 'flex',
                    justifyContent: 'space-between',
                    alignItems: 'flex-start',
                    marginBottom: '0.5rem'
                }}>
                    <h3 style={{
                        fontSize: '2rem',
                        fontWeight: 'bold',
                        margin: 0
                    }}>
                        {item.title}
                    </h3>
                    <motion.span
                        whileHover={{ scale: 1.05 }}
                        style={{
                            backgroundColor: '#ff6600',
                            color: 'white',
                            padding: '0.5rem 1rem',
                            borderRadius: '20px',
                            fontSize: '0.8rem',
                            fontWeight: 'bold'
                        }}
                    >
                        {item.category}
                    </motion.span>
                </div>
                <p style={{
                    fontSize: '1.1rem',
                    color: '#cccccc',
                    margin: '0 0 1rem 0'
                }}>
                    {item.subtitle}
                </p>
                <p style={{
                    fontSize: '0.9rem',
                    color: '#aaaaaa',
                    lineHeight: '1.4'
                }}>
                    {item.description}
                </p>
            </div>
        </motion.div>
    );
};

export default ProjectCard;
