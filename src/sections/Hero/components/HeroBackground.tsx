import React from 'react';
import { motion } from 'framer-motion';

interface HeroBackgroundProps {
    mousePosition: { x: number; y: number };
}

const HeroBackground: React.FC<HeroBackgroundProps> = ({ mousePosition }) => {
    return (
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
            {/* Improved gradient background with subtle animation */}
            <motion.div
                animate={{
                    background: [
                        'linear-gradient(135deg, #f8fafc 0%, #ffffff 50%, #fef3e2 100%)',
                        'linear-gradient(135deg, #f1f5f9 0%, #ffffff 50%, #fff7ed 100%)',
                        'linear-gradient(135deg, #f8fafc 0%, #ffffff 50%, #fef3e2 100%)'
                    ]
                }}
                transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
                className="absolute inset-0"
            />

            {/* Enhanced floating orbs with better movement */}
            <motion.div
                animate={{
                    scale: [1, 1.3, 1.1, 1],
                    opacity: [0.4, 0.7, 0.5, 0.4],
                    x: [0, 30, -20, 0],
                    y: [0, -40, 20, 0],
                }}
                transition={{
                    duration: 12,
                    repeat: Infinity,
                    ease: "easeInOut",
                    times: [0, 0.3, 0.7, 1]
                }}
                className="absolute top-1/3 left-1/5 w-64 h-64 bg-gradient-to-br from-orange-200/30 via-pink-200/20 to-purple-200/25 rounded-full blur-2xl"
            />

            <motion.div
                animate={{
                    scale: [1, 0.8, 1.2, 1],
                    opacity: [0.3, 0.6, 0.4, 0.3],
                    x: [0, -40, 30, 0],
                    y: [0, 30, -25, 0],
                }}
                transition={{
                    duration: 15,
                    repeat: Infinity,
                    ease: "easeInOut",
                    times: [0, 0.4, 0.8, 1]
                }}
                className="absolute bottom-1/3 right-1/4 w-80 h-80 bg-gradient-to-tl from-blue-200/25 via-indigo-200/20 to-cyan-200/30 rounded-full blur-3xl"
            />

            {/* Enhanced geometric patterns */}
            <motion.div
                animate={{ rotate: [0, 360] }}
                transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
                className="absolute top-1/3 right-1/3 w-32 h-32 opacity-5"
            >
                <div className="w-full h-full border-2 border-orange-300 rounded-lg transform rotate-45" />
            </motion.div>

            {/* Improved floating particles */}
            {Array.from({ length: 8 }).map((_, i) => (
                <motion.div
                    key={i}
                    animate={{
                        y: [0, -60, -30, 0],
                        x: [0, Math.sin(i) * 40, Math.cos(i) * 20, 0],
                        opacity: [0.2, 0.8, 0.5, 0.2],
                        scale: [0.5, 1.2, 0.8, 0.5]
                    }}
                    transition={{
                        duration: 6 + i * 0.8,
                        repeat: Infinity,
                        delay: i * 0.5,
                        ease: "easeInOut"
                    }}
                    className="absolute"
                    style={{
                        left: `${15 + (i * 10)}%`,
                        top: `${20 + (i * 8)}%`,
                        width: '8px',
                        height: '8px'
                    }}
                >
                    <div className="w-full h-full bg-gradient-to-r from-orange-400/60 to-pink-400/60 rounded-full shadow-lg" />
                </motion.div>
            ))}

            {/* Enhanced grid with parallax effect */}
            <motion.div
                style={{
                    transform: `translate(${mousePosition.x * 0.1}px, ${mousePosition.y * 0.1}px)`
                }}
                className="absolute inset-0 opacity-[0.03]"
            >
                <div
                    style={{
                        backgroundImage: `
                radial-gradient(circle at 2px 2px, rgba(0,0,0,0.15) 1px, transparent 0)
              `,
                        backgroundSize: '80px 80px'
                    }}
                    className="w-full h-full"
                />
            </motion.div>
        </div>
    );
};

export default HeroBackground;
