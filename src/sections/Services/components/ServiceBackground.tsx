import React from 'react';
import { motion, type Variants } from 'framer-motion';

const backgroundVariants: Variants = {
    animate: {
        x: [0, 30, 0],
        y: [0, -20, 0],
        rotate: [0, 3, 0],
        transition: {
            duration: 25,
            repeat: Infinity,
            ease: "easeInOut"
        }
    }
};

const ServiceBackground: React.FC = () => {
    return (
        <>
            {/* Moving Background Elements */}
            <motion.div
                variants={backgroundVariants}
                animate="animate"
                style={{
                    position: 'absolute',
                    top: '10%',
                    left: '5%',
                    width: '200px',
                    height: '200px',
                    zIndex: 1,
                    opacity: 0.4
                }}
            >
                <img
                    src="/assets/images/light-yellow-abstract-background-3d-illustration-3d-rendering 1.png"
                    alt=""
                    style={{
                        width: '100%',
                        height: '100%',
                        objectFit: 'contain',
                        filter: 'hue-rotate(45deg)'
                    }}
                />
            </motion.div>

            <motion.div
                variants={backgroundVariants}
                animate="animate"
                style={{
                    position: 'absolute',
                    top: '60%',
                    right: '10%',
                    width: '250px',
                    height: '250px',
                    zIndex: 1,
                    opacity: 0.3
                }}
            >
                <img
                    src="/assets/images/light-yellow-abstract-background-3d-illustration-3d-rendering 2.png"
                    alt=""
                    style={{
                        width: '100%',
                        height: '100%',
                        objectFit: 'contain',
                        filter: 'hue-rotate(90deg)'
                    }}
                />
            </motion.div>

            <div
                className="background-image"
                style={{
                    position: 'absolute',
                    top: 0,
                    left: 0,
                    width: '100%',
                    height: '100%',
                    backgroundImage: 'url("/assets/images/serviceBackground.png")',
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                    opacity: 0.2,
                    zIndex: 1
                }}
            />
        </>
    );
};

export default ServiceBackground;
