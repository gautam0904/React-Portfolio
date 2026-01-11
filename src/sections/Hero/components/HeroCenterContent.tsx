import React from 'react';
import { motion } from 'framer-motion';
import gautam from '../../../assets/gautam.png';
import { Typewriter } from '../../../components/ui';
import { ArrowUpRightIcon, SparkleIcon } from './HeroIcons';

interface HeroCenterContentProps {
    handleHireMe: () => void;
    handlePortfolio: () => void;
}

const HeroCenterContent: React.FC<HeroCenterContentProps> = ({ handleHireMe, handlePortfolio }) => {
    return (
        <motion.div
            initial={{ opacity: 0, y: 40, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
            className="w-full text-center relative flex flex-col items-center gap-6"
        >
            {/* Enhanced Hello badge */}
            <motion.div
                initial={{ opacity: 0, scale: 0.5, rotateX: -90 }}
                animate={{ opacity: 1, scale: 1, rotateX: 0 }}
                transition={{ delay: 0.4, type: "spring", stiffness: 300 }}
                className="relative inline-flex items-center gap-2 mb-8"
            >
                <motion.div
                    whileHover={{ scale: 1.05, rotateZ: 5 }}
                    className="flex items-center gap-3 px-5 py-3 bg-white/90 backdrop-blur-xl border-2 border-gray-200/80 text-slate-800 rounded-full text-sm font-medium shadow-xl hover:shadow-2xl transition-all duration-300 relative overflow-hidden group"
                >
                    <div className="absolute inset-0 bg-gradient-to-r from-orange-400/10 via-pink-400/10 to-purple-400/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                    <motion.span
                        animate={{ rotate: [0, 20, -20, 0], scale: [1, 1.2, 1] }}
                        transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                        className="text-lg"
                    >
                        👋
                    </motion.span>
                    <span className="relative z-10">Hello!</span>
                    <motion.div
                        animate={{ rotate: [0, 360], scale: [0.8, 1.2, 0.8] }}
                        transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                        className="absolute -top-2 -right-2 text-orange-400"
                    >
                        <SparkleIcon className="w-4 h-4" />
                    </motion.div>
                </motion.div>
            </motion.div>

            {/* Title */}
            <div className="relative mb-10">
                <motion.h1
                    initial={{ opacity: 0, y: 30, letterSpacing: '0.1em' }}
                    animate={{ opacity: 1, y: 0, letterSpacing: '0em' }}
                    transition={{ delay: 0.6, duration: 0.8, ease: "easeOut" }}
                    className="text-5xl lg:text-6xl font-bold mb-3 relative"
                >
                    <span className="bg-gradient-to-r from-slate-800 via-slate-700 to-slate-800 bg-clip-text text-transparent">
                        I'm
                    </span>
                    <motion.span
                        animate={{ backgroundPosition: ['0% 50%', '100% 50%', '0% 50%'] }}
                        transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
                        className="bg-gradient-to-r from-orange-500 via-orange-600 to-orange-500 bg-clip-text text-transparent ml-3"
                        style={{ backgroundSize: '200% 200%' }}
                    >
                        Gautam
                    </motion.span>
                    <span className="text-slate-800">,</span>
                </motion.h1>

                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.8, duration: 0.8 }}
                    className="relative"
                >
                    <Typewriter
                        text="Software Developer"
                        speed={120}
                        pauseDuration={3000}
                        className="text-4xl lg:text-5xl font-bold bg-gradient-to-r from-slate-700 via-slate-600 to-slate-700 bg-clip-text text-transparent"
                    />
                </motion.div>

                <motion.div
                    initial={{ scaleX: 0, originX: 0.5 }}
                    animate={{ scaleX: 1 }}
                    transition={{ delay: 1.2, duration: 1, ease: "easeOut" }}
                    className="absolute -bottom-3 left-1/2 transform -translate-x-1/2 h-1 bg-gradient-to-r from-transparent via-orange-500 to-transparent rounded-full overflow-hidden"
                    style={{ width: '120px' }}
                >
                    <motion.div
                        animate={{ x: ['-100%', '100%'] }}
                        transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                        className="w-full h-full bg-gradient-to-r from-transparent via-white/80 to-transparent"
                    />
                </motion.div>
            </div>

            {/* Person Image with chips wrapper */}
            <div className="relative inline-block">
                <motion.div
                    initial={{ opacity: 0, scale: 0.8, rotateY: -20 }}
                    animate={{ opacity: 1, scale: 1, rotateY: 0 }}
                    transition={{ delay: 1, duration: 0.8, ease: "easeOut" }}
                    className="relative w-80 mx-auto group z-10"
                >
                    <motion.div
                        animate={{ scale: [1, 1.1, 1], rotate: [0, 5, -5, 0] }}
                        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
                        className="absolute inset-0 bg-gradient-to-br from-orange-200/40 via-pink-200/30 to-purple-200/40 rounded-full blur-xl transform scale-110"
                    />
                    <motion.div
                        animate={{ scale: [1, 0.9, 1.1, 1], opacity: [0.3, 0.6, 0.3] }}
                        transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
                        className="absolute inset-0 bg-gradient-to-tl from-blue-200/30 via-indigo-200/25 to-cyan-200/35 rounded-full blur-2xl transform scale-105"
                    />

                    <motion.div
                        whileHover={{ scale: 1.05, rotateY: 10, transition: { duration: 0.3 } }}
                        className="relative z-10 group"
                    >
                        <img
                            src={gautam}
                            alt="Gautam"
                            className="w-full h-auto object-cover rounded-full shadow-2xl border-4 border-white/80 group-hover:border-orange-200/80 transition-all duration-300"
                        />
                        <motion.div
                            initial={{ opacity: 0, scale: 0.8 }}
                            whileHover={{ opacity: 1, scale: 1.1 }}
                            className="absolute inset-0 rounded-full border-2 border-orange-400/50 shadow-lg shadow-orange-400/25"
                        />
                    </motion.div>

                </motion.div>

                {/* Skill chips in orbit - only 2 */}
                <motion.div
                    animate={{ y: [0, -10, 0], rotate: [0, 2, -2, 0] }}
                    transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                    className="absolute -top-4 left-1/2 -translate-x-32 bg-white/90 backdrop-blur-sm border border-orange-200/50 rounded-xl px-4 py-2 text-sm font-semibold text-slate-700 shadow-lg hover:shadow-xl transition-all duration-300 cursor-default hidden lg:block z-10"
                >
                    <div className="flex items-center gap-2">
                        <div className="w-2 h-2 bg-orange-400 rounded-full animate-pulse" />
                        React
                    </div>
                </motion.div>

                <motion.div
                    animate={{ y: [0, -10, 0], rotate: [0, -2, 2, 0] }}
                    transition={{ duration: 3.5, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
                    className="absolute -top-4 left-1/2 translate-x-12 bg-white/90 backdrop-blur-sm border border-blue-200/50 rounded-xl px-4 py-2 text-sm font-semibold text-slate-700 shadow-lg hover:shadow-xl transition-all duration-300 cursor-default hidden lg:block z-10"
                >
                    <div className="flex items-center gap-2">
                        <div className="w-2 h-2 bg-blue-400 rounded-full animate-pulse" />
                        Node.js
                    </div>
                </motion.div>
            </div>

            {/* Buttons - natural flow instead of absolute */}
            <motion.div
                initial={{ opacity: 0, y: 30, scale: 0.8 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                transition={{ delay: 1.4, duration: 0.6, ease: "easeOut" }}
                className="mt-8 w-full flex justify-center z-20"
            >
                <motion.div
                    whileHover={{ scale: 1.02, y: -2 }}
                    className="flex bg-white/25 backdrop-blur-2xl border border-white/40 rounded-full shadow-2xl p-1 hover:shadow-3xl transition-all duration-300 relative overflow-hidden"
                >
                    <motion.button
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.98 }}
                        onClick={handlePortfolio}
                        className="flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-orange-500 via-orange-600 to-orange-500 text-white font-semibold rounded-full transition-all duration-300 shadow-lg hover:shadow-xl relative overflow-hidden group"
                    >
                        <span className="relative z-10">Portfolio</span>
                        <motion.div
                            whileHover={{ rotate: 45, scale: 1.1 }}
                            transition={{ duration: 0.3 }}
                            className="relative z-10"
                        >
                            <ArrowUpRightIcon />
                        </motion.div>
                        <motion.div
                            animate={{ x: ['-100%', '100%'] }}
                            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                            className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent transform skew-x-12"
                        />
                    </motion.button>

                    <motion.button
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.98 }}
                        onClick={handleHireMe}
                        className="px-8 py-3 text-slate-700 font-semibold transition-all duration-300 rounded-full relative overflow-hidden group hover:text-white whitespace-nowrap"
                    >
                        <span className="relative z-10 transition-colors duration-300">Hire me</span>
                        <motion.div
                            initial={{ scale: 0, opacity: 0 }}
                            whileHover={{ scale: 1, opacity: 1 }}
                            transition={{ type: "spring", stiffness: 300, damping: 20 }}
                            className="absolute inset-0 bg-gradient-to-r from-slate-700 via-slate-800 to-slate-700 rounded-full"
                        />
                    </motion.button>
                </motion.div>
            </motion.div>


        </motion.div>
    );
};

export default HeroCenterContent;
