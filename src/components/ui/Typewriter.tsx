import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

interface TypewriterProps {
    text: string;
    speed?: number;
    pauseDuration?: number;
    className?: string;
}

const InfiniteTypewriter: React.FC<TypewriterProps> = ({
    text,
    speed = 100,
    pauseDuration = 2000,
    className = ""
}) => {
    const [displayText, setDisplayText] = useState<string>('');
    const [currentIndex, setCurrentIndex] = useState<number>(0);
    const [isDeleting, setIsDeleting] = useState<boolean>(false);

    useEffect(() => {
        const timeout = setTimeout(() => {
            if (!isDeleting && currentIndex < text.length) {
                setDisplayText(prev => prev + text[currentIndex]);
                setCurrentIndex(prev => prev + 1);
            } else if (!isDeleting && currentIndex === text.length) {
                setTimeout(() => setIsDeleting(true), pauseDuration);
            } else if (isDeleting && displayText.length > 0) {
                setDisplayText(prev => prev.slice(0, -1));
            } else if (isDeleting && displayText.length === 0) {
                setIsDeleting(false);
                setCurrentIndex(0);
            }
        }, isDeleting ? speed / 2 : speed);

        return () => clearTimeout(timeout);
    }, [currentIndex, isDeleting, displayText, text, speed, pauseDuration]);

    return (
        <span className={`inline-block ${className}`}>
            {displayText}
            <motion.span
                animate={{ opacity: [1, 0, 1] }}
                transition={{ duration: 1.2, repeat: Infinity, ease: "easeInOut" }}
                className="border-r-3 border-orange-500 ml-1 shadow-sm"
            >
                |
            </motion.span>
        </span>
    );
};

export default InfiniteTypewriter;
