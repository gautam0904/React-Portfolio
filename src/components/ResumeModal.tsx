import React from 'react';
import { motion } from 'framer-motion';

interface ResumeModalProps {
    isOpen: boolean;
    onClose: () => void;
}

const ResumeModal: React.FC<ResumeModalProps> = ({ isOpen, onClose }) => {
    if (!isOpen) return null;

    return (
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/60 backdrop-blur-md flex items-center justify-center z-50 p-4"
            onClick={onClose}
        >
            <motion.div
                initial={{ opacity: 0, scale: 0.8, y: 20 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.8, y: 20 }}
                onClick={(e) => e.stopPropagation()}
                className="bg-white/95 backdrop-blur-xl rounded-3xl p-8 w-full max-w-md shadow-2xl border border-orange-200/50 relative overflow-hidden"
            >
                {/* Background decoration */}
                <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-bl from-orange-100/50 to-transparent rounded-full" />
                <div className="absolute bottom-0 left-0 w-24 h-24 bg-gradient-to-tr from-orange-50/50 to-transparent rounded-full" />

                {/* Content */}
                <div className="relative z-10 text-center">
                    {/* Success icon */}
                    <motion.div
                        initial={{ scale: 0 }}
                        animate={{ scale: 1 }}
                        transition={{ delay: 0.2, type: "spring", stiffness: 300 }}
                        className="w-16 h-16 bg-gradient-to-r from-green-500 to-green-600 rounded-full flex items-center justify-center mx-auto mb-6 shadow-lg"
                    >
                        <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                    </motion.div>

                    <motion.h2
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.3 }}
                        className="text-2xl font-bold text-gray-900 mb-2"
                    >
                        Resume Downloaded Successfully!
                    </motion.h2>

                    <motion.p
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.4 }}
                        className="text-gray-600 mb-8 leading-relaxed"
                    >
                        My resume has been downloaded to your device. You can also view it online or download it again anytime.
                    </motion.p>

                    {/* Action buttons */}
                    <motion.div
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.5 }}
                        className="flex flex-col sm:flex-row gap-3"
                    >
                        <motion.button
                            whileHover={{ scale: 1.02 }}
                            whileTap={{ scale: 0.98 }}
                            onClick={() => window.open("/Malaviya_gautam_Resume.pdf", "_blank")}
                            className="flex-1 bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 text-white px-6 py-3 rounded-xl font-semibold transition-all duration-200 shadow-lg hover:shadow-xl flex items-center justify-center gap-2"
                        >
                            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                            </svg>
                            View PDF
                        </motion.button>

                        <motion.button
                            whileHover={{ scale: 1.02 }}
                            whileTap={{ scale: 0.98 }}
                            onClick={onClose}
                            className="flex-1 bg-gray-100 hover:bg-gray-200 text-gray-700 px-6 py-3 rounded-xl font-semibold transition-all duration-200 border border-gray-200 hover:border-gray-300"
                        >
                            Close
                        </motion.button>
                    </motion.div>

                    {/* Additional info */}
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.6 }}
                        className="mt-6 pt-6 border-t border-gray-200"
                    >
                        <div className="flex items-center justify-center gap-4 text-sm text-gray-500">
                            <div className="flex items-center gap-1">
                                <div className="w-2 h-2 bg-green-400 rounded-full"></div>
                                <span>PDF Format</span>
                            </div>
                            <div className="flex items-center gap-1">
                                <div className="w-2 h-2 bg-blue-400 rounded-full"></div>
                                <span>Latest Version</span>
                            </div>
                            <div className="flex items-center gap-1">
                                <div className="w-2 h-2 bg-orange-400 rounded-full"></div>
                                <span>Optimized</span>
                            </div>
                        </div>
                    </motion.div>
                </div>
            </motion.div>
        </motion.div>
    );
};

export default ResumeModal;
