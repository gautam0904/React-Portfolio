import React from 'react';
import { motion } from 'framer-motion';
import { ArrowIcon } from './ProjectIcons';

interface EmailSubscriptionProps {
    email: string;
    onEmailChange: (email: string) => void;
    onSubmit: (e: React.FormEvent) => void;
    isSubmitting: boolean;
    submitMessage: string;
}

const EmailSubscription: React.FC<EmailSubscriptionProps> = ({
    email,
    onEmailChange,
    onSubmit,
    isSubmitting,
    submitMessage
}) => {
    return (
        <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            style={{
                background: 'linear-gradient(135deg, #f8f9fa 0%, #ffffff 100%)',
                padding: '10rem 2rem',
                position: 'relative'
            }}
        >
            <motion.div
                animate={{
                    scale: [1, 1.2, 1],
                    opacity: [0.3, 0.5, 0.3],
                }}
                transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
                style={{
                    position: 'absolute',
                    top: '10%',
                    left: '5%',
                    width: '150px',
                    height: '150px',
                    background: 'linear-gradient(135deg, rgba(255, 102, 0, 0.06), rgba(255, 133, 51, 0.03))',
                    borderRadius: '50%',
                    filter: 'blur(30px)',
                    zIndex: 0
                }}
            />
            <motion.div
                animate={{
                    scale: [1, 0.8, 1],
                    opacity: [0.2, 0.4, 0.2],
                }}
                transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
                style={{
                    position: 'absolute',
                    bottom: '20%',
                    right: '10%',
                    width: '200px',
                    height: '200px',
                    background: 'linear-gradient(135deg, rgba(255, 102, 0, 0.04), rgba(255, 133, 51, 0.02))',
                    borderRadius: '50%',
                    filter: 'blur(40px)',
                    zIndex: 0
                }}
            />

            <div style={{
                maxWidth: '800px',
                margin: '0 auto',
                width: '100%',
                textAlign: 'center',
                position: 'relative',
                zIndex: 1
            }}>
                <motion.h2
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                    style={{
                        fontSize: '4rem',
                        fontWeight: '800',
                        color: '#1a2035',
                        marginBottom: '3rem',
                    }}
                >
                    Lets work together
                </motion.h2>

                <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.6, delay: 0.2 }}
                    style={{
                        background: 'white',
                        padding: '1.5rem',
                        borderRadius: '50px',
                        boxShadow: '0 20px 40px rgba(0,0,0,0.06)',
                        display: 'flex',
                        position: 'relative',
                        border: '1px solid rgba(0,0,0,0.05)'
                    }}
                >
                    <form onSubmit={onSubmit} style={{ width: '100%', display: 'flex' }}>
                        <input
                            type="email"
                            placeholder="Enter Your Email Address"
                            value={email}
                            onChange={(e) => onEmailChange(e.target.value)}
                            style={{
                                flex: 1,
                                border: 'none',
                                outline: 'none',
                                fontSize: '1.1rem',
                                paddingLeft: '1.5rem',
                                color: '#1a2035',
                                background: 'transparent'
                            }}
                        />
                        <motion.button
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.98 }}
                            type="submit"
                            disabled={isSubmitting}
                            style={{
                                backgroundColor: '#ff6600',
                                color: 'white',
                                border: 'none',
                                borderRadius: '50px',
                                padding: '1.2rem 3rem',
                                fontSize: '1.1rem',
                                fontWeight: 'bold',
                                cursor: isSubmitting ? 'not-allowed' : 'pointer',
                                boxShadow: '0 10px 20px rgba(255, 102, 0, 0.2)',
                                display: 'flex',
                                alignItems: 'center',
                                gap: '0.5rem',
                                opacity: isSubmitting ? 0.7 : 1
                            }}
                        >
                            {isSubmitting ? 'Sending...' : 'Contact Me'}
                            {!isSubmitting && <ArrowIcon />}
                        </motion.button>
                    </form>
                </motion.div>

                {submitMessage && (
                    <motion.p
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        style={{
                            marginTop: '1rem',
                            color: submitMessage.includes('Thank you') ? '#4caf50' : '#f44336',
                            fontWeight: '500'
                        }}
                    >
                        {submitMessage}
                    </motion.p>
                )}
            </div>
        </motion.div>
    );
};

export default EmailSubscription;
