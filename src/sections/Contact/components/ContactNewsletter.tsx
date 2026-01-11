import React, { useState } from 'react';
import { motion } from 'framer-motion';

const ContactNewsletter: React.FC = () => {
    const [newsletterEmail, setNewsletterEmail] = useState('');
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [submitMessage, setSubmitMessage] = useState('');

    const handleNewsletterSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        if (!newsletterEmail) {
            setSubmitMessage('Please enter a valid email address');
            return;
        }

        // Validate Gmail domain
        if (!newsletterEmail.endsWith('@gmail.com')) {
            setSubmitMessage('Please use a Gmail address (@gmail.com)');
            return;
        }

        setIsSubmitting(true);
        setSubmitMessage('');

        try {
            const response = await fetch('/api/contact', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    email: newsletterEmail,
                    message: 'Newsletter subscription request',
                    name: 'Newsletter Subscriber'
                }),
            });

            const data = await response.json();

            if (response.ok) {
                setSubmitMessage('Thank you for subscribing!');
                setNewsletterEmail('');
            } else {
                setSubmitMessage(data.message || 'Something went wrong. Please try again.');
            }
        } catch (error) {
            console.error('Newsletter form error:', error);
            setSubmitMessage('Network error. Please try again later.');
        } finally {
            setIsSubmitting(false);
        }
    };

    return (
        <div>
            <h3 style={{
                color: '#ff6600',
                fontSize: '1.2rem',
                fontWeight: 'bold',
                marginBottom: '1rem'
            }}>
                Get the latest information
            </h3>
            <form onSubmit={handleNewsletterSubmit} style={{
                display: 'flex',
                flexDirection: 'column',
                gap: '1rem',
                marginTop: '1rem'
            }}>
                <div style={{
                    display: 'flex',
                    gap: '0.5rem'
                }}>
                    <input
                        type="email"
                        placeholder="Enter Gmail Address (@gmail.com)"
                        value={newsletterEmail}
                        onChange={(e) => setNewsletterEmail(e.target.value)}
                        style={{
                            flex: 1,
                            padding: '0.75rem 1rem',
                            border: '1px solid rgba(255, 255, 255, 0.2)',
                            borderRadius: '8px',
                            backgroundColor: 'rgba(255, 255, 255, 0.05)',
                            color: 'white',
                            fontSize: '1rem',
                            outline: 'none'
                        }}
                        onFocus={(e) => {
                            e.target.style.borderColor = '#ff6600';
                        }}
                        onBlur={(e) => {
                            e.target.style.borderColor = 'rgba(255, 255, 255, 0.2)';
                        }}
                    />
                    <button
                        type="submit"
                        disabled={isSubmitting}
                        style={{
                            backgroundColor: isSubmitting ? '#666' : '#ff6600',
                            color: 'white',
                            border: 'none',
                            borderRadius: '8px',
                            padding: '0.75rem 1rem',
                            cursor: isSubmitting ? 'not-allowed' : 'pointer',
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            transition: 'all 0.3s ease'
                        }}
                        onMouseEnter={(e) => {
                            if (!isSubmitting) {
                                e.currentTarget.style.backgroundColor = '#ff8533';
                            }
                        }}
                        onMouseLeave={(e) => {
                            if (!isSubmitting) {
                                e.currentTarget.style.backgroundColor = '#ff6600';
                            }
                        }}
                    >
                        {isSubmitting ? (
                            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" style={{
                                animation: 'spin 1s linear infinite',
                                transformOrigin: 'center'
                            }}>
                                <path d="M21 12a9 9 0 11-6.219-8.56" />
                            </svg>
                        ) : (
                            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                <path d="M5 12h14M12 5l7 7-7 7" />
                            </svg>
                        )}
                    </button>
                </div>
                {submitMessage && (
                    <motion.div
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        style={{
                            padding: '0.75rem',
                            borderRadius: '8px',
                            backgroundColor: submitMessage.includes('Thank you') ? 'rgba(76, 175, 80, 0.1)' : 'rgba(244, 67, 54, 0.1)',
                            color: submitMessage.includes('Thank you') ? '#4caf50' : '#f44336',
                            fontSize: '0.9rem',
                            fontWeight: '500'
                        }}
                    >
                        {submitMessage}
                    </motion.div>
                )}
            </form>
        </div>
    );
};

export default ContactNewsletter;
