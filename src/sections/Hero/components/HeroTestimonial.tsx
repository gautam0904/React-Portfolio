import React from 'react';
import { motion } from 'framer-motion';

const HeroTestimonial: React.FC = () => {
    return (
        <motion.div
            initial={{ opacity: 0, x: -60, rotateY: -15 }}
            animate={{ opacity: 1, x: 0, rotateY: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="w-full"
        >
            <motion.div
                whileHover={{
                    scale: 1.02,
                    rotateY: 5,
                    transition: { duration: 0.3 }
                }}
                className="relative group z-15"
            >
                {/* Enhanced quote decoration with glow */}
                <motion.div
                    animate={{
                        boxShadow: [
                            '0 0 20px rgba(255, 102, 0, 0.3)',
                            '0 0 40px rgba(255, 102, 0, 0.5)',
                            '0 0 20px rgba(255, 102, 0, 0.3)'
                        ]
                    }}
                    transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
                    className="absolute -top-6 -left-6 w-16 h-16 bg-gradient-to-br from-orange-400 via-orange-500 to-orange-600 rounded-2xl flex items-center justify-center shadow-xl transform rotate-12 group-hover:rotate-0 transition-transform duration-300"
                >
                    <span className="text-white text-2xl font-bold">"</span>
                </motion.div>

                <div className="bg-white/80 backdrop-blur-xl border border-white/60 rounded-2xl p-8 shadow-2xl relative overflow-hidden group-hover:shadow-3xl transition-all duration-300">
                    {/* Animated background gradient */}
                    <motion.div
                        animate={{
                            background: [
                                'linear-gradient(135deg, transparent 0%, rgba(255, 102, 0, 0.02) 50%, transparent 100%)',
                                'linear-gradient(135deg, rgba(255, 102, 0, 0.02) 0%, transparent 50%, rgba(255, 102, 0, 0.02) 100%)',
                                'linear-gradient(135deg, transparent 0%, rgba(255, 102, 0, 0.02) 50%, transparent 100%)'
                            ]
                        }}
                        transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                        className="absolute inset-0 rounded-2xl"
                    />

                    <div className="relative z-10">
                        <p className="text-lg lg:text-xl font-medium text-slate-800 leading-relaxed mb-4">
                            Gautam's software development skills transformed our vision into a
                            <span className="text-orange-600 font-semibold bg-orange-50 px-1 rounded"> fast, modern, and reliable </span>
                            web application.
                        </p>
                        <div className="flex items-center gap-3">
                            <div className="flex">
                                {Array(5).fill(0).map((_, i) => (
                                    <motion.span
                                        key={i}
                                        initial={{ opacity: 0, scale: 0, rotate: -180 }}
                                        animate={{ opacity: 1, scale: 1, rotate: 0 }}
                                        transition={{
                                            delay: i * 0.1,
                                            type: "spring",
                                            stiffness: 300,
                                            damping: 15
                                        }}
                                        className="text-orange-400 text-lg drop-shadow-sm"
                                    >
                                        ★
                                    </motion.span>
                                ))}
                            </div>
                            <motion.span
                                initial={{ opacity: 0, x: -20 }}
                                animate={{ opacity: 1, x: 0 }}
                                transition={{ delay: 0.8, duration: 0.5 }}
                                className="text-orange-600 font-bold text-sm bg-gradient-to-r from-orange-50 to-orange-100 px-3 py-1 rounded-full border border-orange-200"
                            >
                                Highly Recommended
                            </motion.span>
                        </div>
                    </div>
                </div>
            </motion.div>
        </motion.div>
    );
};

export default HeroTestimonial;
