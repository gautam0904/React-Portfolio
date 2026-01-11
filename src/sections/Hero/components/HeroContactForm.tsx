import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { LoadingSpinner, Toast } from '../../../components/ui';
import HeroContactFormFields from './HeroContactFormFields';

interface HeroContactFormProps {
    isOpen: boolean;
    onClose: () => void;
}

interface FormData {
    name: string;
    email: string;
    company: string;
    project: string;
    budget: string;
    message: string;
}

const HeroContactForm: React.FC<HeroContactFormProps> = ({ isOpen, onClose }) => {
    const [isLoading, setIsLoading] = useState(false);
    const [notification, setNotification] = useState<{
        message: string;
        type: 'success' | 'error' | 'info';
    } | null>(null);

    const [formData, setFormData] = useState<FormData>({
        name: '',
        email: '',
        company: '',
        project: '',
        budget: '',
        message: ''
    });

    const showNotification = (message: string, type: 'success' | 'error' | 'info' = 'success') => {
        setNotification({ message, type });
    };

    const sendNotificationToAdmin = async (data: FormData) => {
        try {
            console.log('Sending admin notification:', data);

            if ('Notification' in window && Notification.permission === 'granted') {
                new Notification('New Project Inquiry', {
                    body: `New inquiry from ${data.name} - ${data.project}`,
                    icon: '/favicon.ico',
                    badge: '/favicon.ico'
                });
            }
        } catch (error) {
            console.error('Error sending admin notification:', error);
        }
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setIsLoading(true);

        try {
            if (!formData.name.trim() || !formData.email.trim() || !formData.message.trim()) {
                throw new Error('Please fill in all required fields');
            }

            const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
            if (!emailRegex.test(formData.email)) {
                throw new Error('Please enter a valid email address');
            }

            await new Promise(resolve => setTimeout(resolve, 1500));

            console.log('Form submitted:', formData);
            await sendNotificationToAdmin(formData);

            setFormData({
                name: '',
                email: '',
                company: '',
                project: '',
                budget: '',
                message: ''
            });

            onClose();
            showNotification("Thank you! Your inquiry has been sent successfully. I'll get back to you soon!", 'success');

        } catch (error: unknown) {
            console.error('Error submitting form:', error);
            const errorMessage = error instanceof Error ? error.message : 'Something went wrong. Please try again.';
            showNotification(errorMessage, 'error');
        } finally {
            setIsLoading(false);
        }
    };

    const handleInputChange = (field: keyof FormData, value: string) => {
        setFormData(prev => ({ ...prev, [field]: value }));

        if (field === 'email' && value) {
            const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
            const emailInput = document.querySelector(`input[name="email"]`) as HTMLInputElement;
            if (emailInput) {
                emailInput.style.borderColor = emailRegex.test(value) ? '#10b981' : '#ef4444';
            }
        }
    };

    return (
        <>
            {/* Notification Toast */}
            <AnimatePresence>
                {notification && (
                    <Toast
                        message={notification.message}
                        type={notification.type}
                        onClose={() => setNotification(null)}
                    />
                )}
            </AnimatePresence>

            {/* Modal */}
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
                            className="bg-white rounded-3xl p-8 max-w-2xl w-full shadow-2xl relative z-[9999]"
                            style={{
                                maxHeight: 'calc(100vh - 2rem)',
                                overflowY: 'auto',
                                scrollbarWidth: 'thin',
                                scrollbarColor: '#ff6600 #f1f1f1'
                            }}
                        >
                            {/* Close button */}
                            <button
                                onClick={onClose}
                                className="absolute top-6 right-6 w-10 h-10 bg-gray-100 hover:bg-gray-200 rounded-full flex items-center justify-center transition-colors z-[10000]"
                            >
                                <svg className="w-5 h-5 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                                </svg>
                            </button>

                            {/* Header */}
                            <div className="text-center mb-8">
                                <motion.div
                                    animate={{ scale: [1, 1.1, 1] }}
                                    transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                                    className="w-20 h-20 bg-gradient-to-r from-orange-500 to-orange-600 rounded-full flex items-center justify-center mx-auto mb-6 shadow-lg"
                                >
                                    <span className="text-3xl">📝</span>
                                </motion.div>
                                <h3 className="text-4xl font-bold text-gray-900 mb-3">Project Details</h3>
                                <p className="text-gray-600 text-lg">Tell me about your project requirements and I'll get back to you soon!</p>
                            </div>

                            {/* Form */}
                            <form onSubmit={handleSubmit} className="space-y-6">
                                <HeroContactFormFields
                                    formData={formData}
                                    handleInputChange={handleInputChange}
                                />

                                {/* Action Buttons */}
                                <div className="flex gap-4 pt-6">
                                    <motion.button
                                        type="submit"
                                        disabled={isLoading}
                                        whileHover={{ scale: 1.02 }}
                                        whileTap={{ scale: 0.98 }}
                                        className="flex-1 bg-gradient-to-r from-orange-500 to-orange-600 text-white font-bold py-4 px-8 rounded-xl hover:from-orange-600 hover:to-orange-700 transition-all duration-200 shadow-lg hover:shadow-xl text-lg disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-3"
                                    >
                                        {isLoading ? (
                                            <>
                                                <LoadingSpinner />
                                                <span>Sending...</span>
                                            </>
                                        ) : (
                                            <>
                                                <span>🚀 Send Inquiry</span>
                                                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M7 7l10 10M17 7v10H7" />
                                                </svg>
                                            </>
                                        )}
                                    </motion.button>

                                    <button
                                        type="button"
                                        onClick={onClose}
                                        className="px-8 py-4 border-2 border-gray-300 text-gray-700 rounded-xl hover:bg-gray-50 hover:border-gray-400 transition-all duration-200 font-semibold text-lg"
                                    >
                                        Cancel
                                    </button>
                                </div>
                            </form>

                            {/* Trust indicators */}
                            <div className="mt-8 pt-6 border-t border-gray-200">
                                <div className="flex items-center justify-center gap-6 text-sm text-gray-500">
                                    <div className="flex items-center gap-2">
                                        <div className="w-2 h-2 bg-green-400 rounded-full"></div>
                                        <span>Secure & Private</span>
                                    </div>
                                    <div className="flex items-center gap-2">
                                        <div className="w-2 h-2 bg-orange-400 rounded-full"></div>
                                        <span>24h Response Time</span>
                                    </div>
                                    <div className="flex items-center gap-2">
                                        <div className="w-2 h-2 bg-blue-400 rounded-full"></div>
                                        <span>Free Consultation</span>
                                    </div>
                                </div>
                            </div>
                        </motion.div>
                    </motion.div>
                )}
            </AnimatePresence>
        </>
    );
};

export default HeroContactForm;
