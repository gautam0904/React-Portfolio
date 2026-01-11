import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import Icon from './Icon';

interface ToastProps {
    message: string;
    type?: 'success' | 'error' | 'info';
    onClose: () => void;
}

const Toast: React.FC<ToastProps> = ({
    message,
    type = 'success',
    onClose
}) => {
    useEffect(() => {
        const timer = setTimeout(onClose, 4000);
        return () => clearTimeout(timer);
    }, [onClose]);

    const bgColors = {
        success: 'bg-green-500',
        error: 'bg-red-500',
        info: 'bg-blue-500'
    };

    const iconNames = {
        success: 'check',
        error: 'close',
        info: 'info'
    } as const;

    return (
        <motion.div
            initial={{ opacity: 0, x: 300, scale: 0.8 }}
            animate={{ opacity: 1, x: 0, scale: 1 }}
            exit={{ opacity: 0, x: 300, scale: 0.8 }}
            className={`fixed top-4 right-4 ${bgColors[type]} text-white px-6 py-4 rounded-lg shadow-2xl flex items-center gap-3 min-w-[300px] z-[9999]`}
        >
            <div className="flex-shrink-0">
                <Icon name={iconNames[type]} size={20} className="w-5 h-5" />
            </div>
            <div className="flex-1">
                <p className="font-medium">{message}</p>
            </div>
            <button
                onClick={onClose}
                className="flex-shrink-0 ml-2 hover:bg-white/20 rounded-full p-1 transition-colors"
            >
                <Icon name="close" size={16} className="w-4 h-4" />
            </button>
        </motion.div>
    );
};

export default Toast;
