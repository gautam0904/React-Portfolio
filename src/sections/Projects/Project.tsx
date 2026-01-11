import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { portfolioItems, testimonials, filters } from './data/projectData';
import { ProjectHeader, ProjectFilters, ProjectCard, TestimonialCard, EmailSubscription } from './components';

const Project: React.FC = () => {
    const [activeFilter, setActiveFilter] = useState('Full Stack');
    const [currentPortfolioIndex, setCurrentPortfolioIndex] = useState(0);
    const [email, setEmail] = useState('');
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [submitMessage, setSubmitMessage] = useState('');

    const handleEmailChange = (newEmail: string) => {
        setEmail(newEmail);
        setSubmitMessage(''); // Clear any previous messages
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();

        if (!email) {
            setSubmitMessage('Please enter a valid email address');
            return;
        }

        setIsSubmitting(true);
        setSubmitMessage('');

        try {
            // TODO: Replace with your actual API endpoint
            // const response = await fetch('/api/subscribe', {
            //     method: 'POST',
            //     headers: { 'Content-Type': 'application/json' },
            //     body: JSON.stringify({ email })
            // });

            // Simulate API call for now
            await new Promise(resolve => setTimeout(resolve, 1500));

            setSubmitMessage('Thank you! We\'ll get in touch soon.');
            setEmail('');
        } catch (error) {
            setSubmitMessage('Something went wrong. Please try again.');
        } finally {
            setIsSubmitting(false);
        }
    };

    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.1,
                delayChildren: 0.2
            }
        }
    };

    // Filter projects based on active filter
    const filteredProjects = activeFilter === 'Full Stack'
        ? portfolioItems
        : portfolioItems.filter(item => item.category === activeFilter);

    return (
        <section style={{
            fontFamily: '"Poppins", sans-serif',
            overflow: 'hidden'
        }}>
            {/* Portfolio Section */}
            <motion.div
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, ease: "easeOut" }}
                style={{
                    background: '#fff',
                    padding: '8rem 2rem 6rem',
                    position: 'relative'
                }}
            >
                {/* Background Shapes */}
                <motion.div
                    animate={{
                        scale: [1, 1.1, 1],
                        rotate: [0, 180, 360],
                    }}
                    transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                    style={{
                        position: 'absolute',
                        top: '10%',
                        left: '5%',
                        width: '200px',
                        height: '200px',
                        background: 'linear-gradient(135deg, rgba(255, 102, 0, 0.08), rgba(255, 133, 51, 0.03))',
                        borderRadius: '50%',
                        filter: 'blur(40px)',
                        zIndex: 0
                    }}
                />
                <motion.div
                    animate={{
                        scale: [1, 0.8, 1],
                        rotate: [360, 180, 0],
                    }}
                    transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
                    style={{
                        position: 'absolute',
                        top: '60%',
                        right: '10%',
                        width: '300px',
                        height: '300px',
                        background: 'linear-gradient(135deg, rgba(255, 102, 0, 0.05), rgba(255, 133, 51, 0.02))',
                        borderRadius: '50%',
                        filter: 'blur(50px)',
                        zIndex: 0
                    }}
                />

                <div style={{
                    maxWidth: '1200px',
                    margin: '0 auto',
                    position: 'relative',
                    zIndex: 1
                }}>
                    <ProjectHeader />
                    <ProjectFilters
                        activeFilter={activeFilter}
                        onFilterChange={setActiveFilter}
                        filters={filters}
                    />

                    {/* Portfolio Items */}
                    <AnimatePresence mode="wait">
                        <motion.div
                            key={activeFilter}
                            variants={containerVariants}
                            initial="hidden"
                            animate="visible"
                            exit="hidden"
                            style={{
                                display: 'grid',
                                gridTemplateColumns: 'repeat(auto-fit, minmax(400px, 1fr))',
                                gap: '2.5rem',
                                marginBottom: '4rem'
                            }}
                        >
                            {filteredProjects.map((item, index) => (
                                <ProjectCard
                                    key={`${activeFilter}-${index}`}
                                    item={item}
                                    index={index}
                                    activeFilter={activeFilter}
                                />
                            ))}
                        </motion.div>
                    </AnimatePresence>

                    {/* Navigation Dots */}
                    <motion.div
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        transition={{ duration: 0.6, delay: 0.5 }}
                        style={{
                            display: 'flex',
                            justifyContent: 'center',
                            gap: '0.75rem',
                            marginBottom: '4rem'
                        }}
                    >
                        {[0, 1, 2].map((dot, index) => (
                            <motion.div
                                key={index}
                                whileHover={{ scale: 1.2 }}
                                whileTap={{ scale: 0.9 }}
                                style={{
                                    width: '14px',
                                    height: '14px',
                                    borderRadius: '50%',
                                    backgroundColor: index === currentPortfolioIndex ? '#ff6600' : '#ddd',
                                    cursor: 'pointer',
                                    transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)'
                                }}
                                onClick={() => setCurrentPortfolioIndex(index)}
                            />
                        ))}
                    </motion.div>
                </div>
            </motion.div>

            {/* Testimonials Section */}
            <motion.div
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                style={{
                    background: 'linear-gradient(135deg, #1a1a1a 0%, #2d2d2d 100%)',
                    padding: '8rem 2rem',
                    position: 'relative'
                }}
            >
                <div style={{
                    maxWidth: '1200px',
                    margin: '0 auto',
                    width: '100%'
                }}>
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                        style={{
                            textAlign: 'center',
                            marginBottom: '5rem'
                        }}
                    >
                        <h2 style={{
                            fontSize: '3.5rem',
                            fontWeight: 'bold',
                            color: 'white',
                            marginBottom: '1rem',
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            gap: '1rem'
                        }}>
                            Experience & <span style={{ color: '#ff6600' }}>Testimonials</span>
                            <motion.span
                                animate={{ rotate: [0, 10, -10, 0] }}
                                transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                                style={{ color: '#ff6600', fontSize: '2rem' }}
                            >
                                💼
                            </motion.span>
                        </h2>
                    </motion.div>

                    <motion.div
                        variants={containerVariants}
                        initial="hidden"
                        whileInView="visible"
                        style={{
                            display: 'grid',
                            gridTemplateColumns: 'repeat(auto-fit, minmax(450px, 1fr))',
                            gap: '3rem'
                        }}
                    >
                        {testimonials.map((testimonial, index) => (
                            <TestimonialCard key={index} testimonial={testimonial} index={index} />
                        ))}
                    </motion.div>
                </div>
            </motion.div>

            {/* Call to Action Section */}
            <EmailSubscription
                email={email}
                onEmailChange={handleEmailChange}
                onSubmit={handleSubmit}
                isSubmitting={isSubmitting}
                submitMessage={submitMessage}
            />
        </section>
    );
};

export default Project;
