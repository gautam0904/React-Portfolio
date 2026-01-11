import React from 'react';
import { motion } from 'framer-motion';

interface LoadingOverlayProps {
    message?: string;
    subMessage?: string;
}

const LoadingOverlay: React.FC<LoadingOverlayProps> = ({
    message = "Downloading Resume",
    subMessage = "Please wait..."
}) => {
    return (
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/60 backdrop-blur-md flex items-center justify-center z-[9999]"
        >
            <motion.div
                initial={{ scale: 0.8, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0.8, opacity: 0 }}
                className="bg-white/95 backdrop-blur-xl rounded-2xl p-8 shadow-2xl border border-orange-200/50"
            >
                <div className="flex items-center gap-4">
                    <motion.div
                        animate={{ rotate: 360 }}
                        transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
                        className="w-8 h-8 border-3 border-orange-500 border-t-transparent rounded-full"
                    />
                    <div>
                        <h3 className="text-lg font-semibold text-gray-900">{message}</h3>
                        <p className="text-sm text-gray-600">{subMessage}</p>
                    </div>
                </div>
            </motion.div>
        </motion.div>
    );
};

export default LoadingOverlay;
