import React from 'react';
import { motion } from 'framer-motion';

const HeroExperience: React.FC = () => {
    return (
        <motion.div
            initial={{ opacity: 0, x: 60, rotateY: 15 }}
            animate={{ opacity: 1, x: 0, rotateY: 0 }}
            transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
            className="w-full text-center lg:text-right"
        >
            <motion.div
                whileHover={{
                    scale: 1.02,
                    rotateY: -5,
                    transition: { duration: 0.3 }
                }}
                className="bg-white/80 backdrop-blur-xl border border-white/60 rounded-2xl p-8 shadow-2xl relative overflow-hidden group hover:shadow-3xl transition-all duration-300 z-15"
            >
                {/* Enhanced background pattern */}
                <motion.div
                    animate={{
                        background: [
                            'radial-gradient(circle at 80% 20%, rgba(255, 102, 0, 0.03) 0%, transparent 50%)',
                            'radial-gradient(circle at 20% 80%, rgba(255, 102, 0, 0.03) 0%, transparent 50%)',
                            'radial-gradient(circle at 80% 20%, rgba(255, 102, 0, 0.03) 0%, transparent 50%)'
                        ]
                    }}
                    transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
                    className="absolute inset-0 rounded-2xl"
                />

                <div className="relative z-10">
                    <motion.div
                        initial={{ scale: 0, rotate: -180 }}
                        animate={{ scale: 1, rotate: 0 }}
                        transition={{ delay: 1.2, type: "spring", stiffness: 300 }}
                        className="flex justify-center lg:justify-end mb-6"
                    >
                        {Array(5).fill(0).map((_, i) => (
                            <motion.span
                                key={i}
                                initial={{ opacity: 0, y: -30, rotate: Math.random() * 360 }}
                                animate={{ opacity: 1, y: 0, rotate: 0 }}
                                transition={{
                                    delay: 1.4 + i * 0.1,
                                    type: "spring",
                                    stiffness: 400,
                                    damping: 15
                                }}
                                whileHover={{
                                    scale: 1.3,
                                    rotate: 360,
                                    transition: { duration: 0.5 }
                                }}
                                className="text-orange-400 text-2xl drop-shadow-md cursor-pointer"
                            >
                                ★
                            </motion.span>
                        ))}
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 1.8, duration: 0.6 }}
                        className="space-y-3"
                    >
                        <motion.p
                            animate={{
                                backgroundPosition: ['0% 50%', '100% 50%', '0% 50%']
                            }}
                            transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                            className="text-4xl font-bold bg-gradient-to-r from-slate-800 via-slate-600 to-slate-800 bg-clip-text text-transparent"
                            style={{ backgroundSize: '200% 200%' }}
                        >
                            3+ Years
                        </motion.p>
                        <p className="text-slate-600 font-medium text-lg">Professional Experience</p>
                        <motion.div
                            initial={{ opacity: 0, scale: 0.8 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ delay: 2, duration: 0.5 }}
                            className="flex items-center justify-center lg:justify-end gap-3 mt-4"
                        >
                            <motion.div
                                animate={{
                                    scale: [1, 1.5, 1],
                                    boxShadow: [
                                        '0 0 5px rgba(34, 197, 94, 0.5)',
                                        '0 0 20px rgba(34, 197, 94, 0.8)',
                                        '0 0 5px rgba(34, 197, 94, 0.5)'
                                    ]
                                }}
                                transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                                className="w-3 h-3 bg-green-400 rounded-full"
                            />
                            <span className="text-sm text-slate-500 font-medium">Active & Available</span>
                        </motion.div>
                    </motion.div>
                </div>
            </motion.div>
        </motion.div>
    );
};

export default HeroExperience;
