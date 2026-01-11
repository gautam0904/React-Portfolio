import React from 'react';
import { motion } from 'framer-motion';

interface ScrollToTopButtonProps {
    isVisible: boolean;
    onClick: () => void;
}

const ScrollToTopButton: React.FC<ScrollToTopButtonProps> = ({ isVisible, onClick }) => {
    return (
        <motion.button
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{
                opacity: isVisible ? 1 : 0,
                scale: isVisible ? 1 : 0.8
            }}
            transition={{ duration: 0.3 }}
            onClick={onClick}
            className={`
                fixed bottom-8 right-8 w-12 h-12 bg-gradient-to-r from-orange-500 to-orange-600 
                text-white rounded-full shadow-lg hover:shadow-xl transition-all duration-300 
                flex items-center justify-center z-40 hover:scale-110
                ${isVisible ? 'pointer-events-auto' : 'pointer-events-none'}
            `}
        >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 10l7-7m0 0l7 7m-7-7v18" />
            </svg>
        </motion.button>
    );
};

export default ScrollToTopButton;
