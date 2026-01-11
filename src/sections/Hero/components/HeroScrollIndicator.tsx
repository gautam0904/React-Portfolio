import React from 'react';
import { motion } from 'framer-motion';

const HeroScrollIndicator: React.FC = () => {
    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 2.5, duration: 0.6 }}
            className="absolute bottom-16 left-1/2 transform -translate-x-1/2 z-35 hidden md:block"
        >
            <motion.div
                animate={{ y: [0, 10, 0] }}
                transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                className="flex flex-col items-center gap-3 text-slate-400 cursor-pointer group"
            >
                <span className="text-xs font-medium group-hover:text-slate-600 transition-colors duration-300">
                    Scroll to explore
                </span>
                <motion.div
                    whileHover={{ scale: 1.1 }}
                    className="w-6 h-10 border-2 border-slate-300 rounded-full flex justify-center p-1 group-hover:border-orange-400 transition-colors duration-300"
                >
                    <motion.div
                        animate={{ y: [0, 16, 0] }}
                        transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                        className="w-1.5 h-3 bg-gradient-to-b from-orange-400 to-orange-600 rounded-full shadow-sm"
                    />
                </motion.div>
            </motion.div>
        </motion.div>
    );
};

export default HeroScrollIndicator;
