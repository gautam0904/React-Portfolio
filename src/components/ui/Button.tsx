import React from 'react';
import { motion } from 'framer-motion';

interface ButtonProps {
    children: React.ReactNode;
    variant?: 'primary' | 'secondary' | 'outline' | 'ghost';
    size?: 'sm' | 'md' | 'lg';
    onClick?: () => void;
    disabled?: boolean;
    loading?: boolean;
    className?: string;
    type?: 'button' | 'submit' | 'reset';
}

const Button: React.FC<ButtonProps> = ({
    children,
    variant = 'primary',
    size = 'md',
    onClick,
    disabled = false,
    loading = false,
    className = '',
    type = 'button'
}) => {
    const baseStyles = 'inline-flex items-center justify-center font-semibold rounded-full transition-all duration-300 relative overflow-hidden';

    const variants = {
        primary: 'bg-gradient-to-r from-orange-500 via-orange-600 to-orange-500 text-white shadow-lg hover:shadow-xl',
        secondary: 'bg-slate-700 text-white hover:bg-slate-800',
        outline: 'border-2 border-orange-500 text-orange-500 hover:bg-orange-500 hover:text-white',
        ghost: 'text-slate-700 hover:bg-slate-100'
    };

    const sizes = {
        sm: 'px-4 py-2 text-sm',
        md: 'px-6 py-3 text-base',
        lg: 'px-8 py-4 text-lg'
    };

    return (
        <motion.button
            type={type}
            whileHover={{ scale: disabled ? 1 : 1.05 }}
            whileTap={{ scale: disabled ? 1 : 0.98 }}
            onClick={onClick}
            disabled={disabled || loading}
            className={`${baseStyles} ${variants[variant]} ${sizes[size]} ${disabled ? 'opacity-50 cursor-not-allowed' : ''} ${className}`}
        >
            {loading && (
                <motion.div
                    animate={{ rotate: 360 }}
                    transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
                    className="w-4 h-4 border-2 border-current border-t-transparent rounded-full mr-2"
                />
            )}
            {children}
        </motion.button>
    );
};

export default Button;
