import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

interface SectionProgressIndicatorProps {
    sections: Array<{ key: string; name: string }>;
    activeSection: string;
    onSectionClick: (key: string) => void;
}

const SectionProgressIndicator: React.FC<SectionProgressIndicatorProps> = ({
    sections,
    activeSection,
    onSectionClick
}) => {
    const [hoveredSection, setHoveredSection] = useState<string | null>(null);

    return (
        <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 1 }}
            className="fixed right-6 top-1/2 transform -translate-y-1/2 z-40 hidden lg:flex flex-col gap-4"
        >
            {sections.map(({ key, name }) => (
                <div
                    key={key}
                    className="relative flex items-center justify-end"
                    onMouseEnter={() => setHoveredSection(key)}
                    onMouseLeave={() => setHoveredSection(null)}
                >
                    {/* Label */}
                    <AnimatePresence>
                        {(hoveredSection === key || activeSection === key) && (
                            <motion.span
                                initial={{ opacity: 0, x: 10, scale: 0.8 }}
                                animate={{ opacity: 1, x: -10, scale: 1 }}
                                exit={{ opacity: 0, x: 10, scale: 0.8 }}
                                transition={{ duration: 0.2 }}
                                className={`
                                    absolute right-full mr-2 px-2 py-1 rounded-md text-sm font-medium whitespace-nowrap
                                    ${activeSection === key
                                        ? 'bg-orange-500 text-white'
                                        : 'bg-white/10 text-white backdrop-blur-sm'
                                    }
                                `}
                            >
                                {name.charAt(0).toUpperCase() + name.slice(1)}
                            </motion.span>
                        )}
                    </AnimatePresence>

                    {/* Dot */}
                    <motion.button
                        onClick={() => onSectionClick(key)}
                        whileHover={{ scale: 1.2 }}
                        whileTap={{ scale: 0.9 }}
                        className={`
                            w-3 h-3 rounded-full cursor-pointer transition-all duration-300 border-2
                            ${activeSection === key
                                ? 'bg-orange-500 border-orange-500 shadow-[0_0_10px_rgba(255,102,0,0.5)] scale-110'
                                : 'bg-transparent border-white/30 hover:border-white/80 hover:bg-white/20'
                            }
                        `}
                        aria-label={`Scroll to ${name} section`}
                    />
                </div>
            ))}
        </motion.div>
    );
};

export default SectionProgressIndicator;
