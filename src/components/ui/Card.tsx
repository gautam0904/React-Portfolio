import React from 'react';
import { motion } from 'framer-motion';

interface CardProps {
    children: React.ReactNode;
    variant?: 'default' | 'glass' | 'gradient';
    className?: string;
    hover?: boolean;
    onClick?: () => void;
}

const Card: React.FC<CardProps> = ({
    children,
    variant = 'default',
    className = '',
    hover = false,
    onClick
}) => {
    const baseStyles = 'rounded-2xl transition-all duration-300';

    const variants = {
        default: 'bg-white shadow-lg border border-gray-100',
        glass: 'bg-white/20 backdrop-blur-xl border border-white/30 shadow-xl',
        gradient: 'bg-gradient-to-br from-white/40 to-white/20 backdrop-blur-xl border border-white/40 shadow-2xl'
    };

    const hoverStyles = hover ? 'hover:shadow-2xl hover:scale-[1.02] cursor-pointer' : '';

    const CardWrapper = hover ? motion.div : 'div';

    return (
        <CardWrapper
            {...(hover && {
                whileHover: { y: -4 },
                transition: { duration: 0.2 }
            })}
            onClick={onClick}
            className={`${baseStyles} ${variants[variant]} ${hoverStyles} ${className}`}
        >
            {children}
        </CardWrapper>
    );
};

export default Card;
