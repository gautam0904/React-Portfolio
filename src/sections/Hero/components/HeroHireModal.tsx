import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';

interface HeroHireModalProps {
    isOpen: boolean;
    onClose: () => void;
    onOpenContactForm: () => void;
}

// Arrow icon component
const ArrowUpRightIcon = () => (
    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M7 7l10 10M17 7v10H7" />
    </svg>
);

const HeroHireModal: React.FC<HeroHireModalProps> = ({ isOpen, onClose, onOpenContactForm }) => {
    const handleOpenContactForm = () => {
        onClose();
        onOpenContactForm();
    };

    return (
        <AnimatePresence>
            {isOpen && (
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    className="fixed inset-0 bg-black/60 backdrop-blur-md z-[9998] flex items-center justify-center p-4"
                    style={{ position: 'fixed', top: 0, left: 0, right: 0, bottom: 0 }}
                    onClick={onClose}
                >
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9, y: 20 }}
                        animate={{ opacity: 1, scale: 1, y: 0 }}
                        exit={{ opacity: 0, scale: 0.9, y: 20 }}
                        onClick={(e) => e.stopPropagation()}
                        className="bg-white rounded-3xl p-8 max-w-md w-full shadow-2xl relative z-[9999] max-h-[90vh] overflow-y-auto"
                        style={{
                            maxHeight: 'calc(100vh - 2rem)',
                            overflowY: 'auto',
                            scrollbarWidth: 'thin'
                        }}
                    >
                        {/* Close button */}
                        <button
                            onClick={onClose}
                            className="absolute top-4 right-4 w-8 h-8 bg-gray-100 hover:bg-gray-200 rounded-full flex items-center justify-center transition-colors z-[10000]"
                        >
                            <svg className="w-4 h-4 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                            </svg>
                        </button>

                        <div className="text-center mb-8">
                            <motion.div
                                animate={{ rotate: [0, 10, -10, 0] }}
                                transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                                className="w-16 h-16 bg-gradient-to-r from-orange-500 to-orange-600 rounded-full flex items-center justify-center mx-auto mb-4"
                            >
                                <span className="text-2xl">🚀</span>
                            </motion.div>
                            <h3 className="text-3xl font-bold text-gray-900 mb-2">Let's Work Together!</h3>
                            <p className="text-gray-600 text-lg">How would you like to get in touch?</p>
                        </div>

                        <div className="space-y-4">
                            {/* Quick Contact Options */}
                            <motion.button
                                whileHover={{ scale: 1.02, y: -2 }}
                                whileTap={{ scale: 0.98 }}
                                onClick={() => window.open('mailto:gautam@example.com?subject=Project Inquiry')}
                                className="w-full flex items-center gap-4 p-4 bg-gradient-to-r from-orange-50 to-orange-100 border-2 border-orange-200 rounded-2xl hover:from-orange-100 hover:to-orange-200 hover:border-orange-300 transition-all duration-300 group"
                            >
                                <div className="w-12 h-12 bg-gradient-to-r from-orange-500 to-orange-600 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform">
                                    <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                                    </svg>
                                </div>
                                <div className="text-left flex-1">
                                    <div className="font-bold text-gray-900 text-lg">Send Email</div>
                                    <div className="text-sm text-gray-600">Quick email inquiry - I'll respond within 24h</div>
                                </div>
                                <ArrowUpRightIcon />
                            </motion.button>

                            <motion.button
                                whileHover={{ scale: 1.02, y: -2 }}
                                whileTap={{ scale: 0.98 }}
                                onClick={handleOpenContactForm}
                                className="w-full flex items-center gap-4 p-4 bg-gradient-to-r from-blue-50 to-blue-100 border-2 border-blue-200 rounded-2xl hover:from-blue-100 hover:to-blue-200 hover:border-blue-300 transition-all duration-300 group"
                            >
                                <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-blue-600 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform">
                                    <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                                    </svg>
                                </div>
                                <div className="text-left flex-1">
                                    <div className="font-bold text-gray-900 text-lg">Project Details Form</div>
                                    <div className="text-sm text-gray-600">Detailed form for project requirements</div>
                                </div>
                                <ArrowUpRightIcon />
                            </motion.button>

                            <motion.button
                                whileHover={{ scale: 1.02, y: -2 }}
                                whileTap={{ scale: 0.98 }}
                                onClick={() => window.open('https://wa.me/919904038740?text=Hi Gautam, I would like to discuss a project with you!', '_blank')}
                                className="w-full flex items-center gap-4 p-4 bg-gradient-to-r from-green-50 to-green-100 border-2 border-green-200 rounded-2xl hover:from-green-100 hover:to-green-200 hover:border-green-300 transition-all duration-300 group"
                            >
                                <div className="w-12 h-12 bg-gradient-to-r from-green-500 to-green-600 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform">
                                    <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 24 24">
                                        <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.890-5.335 11.893-11.893A11.821 11.821 0 0020.885 3.488" />
                                    </svg>
                                </div>
                                <div className="text-left flex-1">
                                    <div className="font-bold text-gray-900 text-lg">WhatsApp Chat</div>
                                    <div className="text-sm text-gray-600">Instant messaging for quick discussions</div>
                                </div>
                                <ArrowUpRightIcon />
                            </motion.button>

                            <motion.button
                                whileHover={{ scale: 1.02, y: -2 }}
                                whileTap={{ scale: 0.98 }}
                                onClick={() => window.open('https://calendly.com/gautam', '_blank')}
                                className="w-full flex items-center gap-4 p-4 bg-gradient-to-r from-purple-50 to-purple-100 border-2 border-purple-200 rounded-2xl hover:from-purple-100 hover:to-purple-200 hover:border-purple-300 transition-all duration-300 group"
                            >
                                <div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-purple-600 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform">
                                    <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                                    </svg>
                                </div>
                                <div className="text-left flex-1">
                                    <div className="font-bold text-gray-900 text-lg">Schedule Call</div>
                                    <div className="text-sm text-gray-600">Book a free 30-min consultation call</div>
                                </div>
                                <ArrowUpRightIcon />
                            </motion.button>
                        </div>
                    </motion.div>
                </motion.div>
            )}
        </AnimatePresence>
    );
};

export default HeroHireModal;
