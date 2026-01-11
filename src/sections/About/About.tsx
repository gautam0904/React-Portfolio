import React from "react";
import { motion } from "framer-motion";
import { experience } from "./data/aboutData";
import ExperienceTimeline from "./components/ExperienceTimeline";
import WhyHireMe from "./components/WhyHireMe";

const About: React.FC = () => {

    return (
        <section style={{
            fontFamily: '"Poppins", sans-serif',
            minHeight: '100vh'
        }}>
            {/* Work Experience Section */}
            <motion.div
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                style={{
                    background: 'linear-gradient(180deg, #fafbfc 0%, #f5f7fa 100%)',
                    padding: '6rem 2rem',
                    minHeight: '100vh',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center'
                }}
            >
                <div style={{
                    maxWidth: '900px',
                    width: '100%',
                    padding: '0 1rem'
                }}>
                    {/* Section Title */}
                    <motion.h2
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                        style={{
                            fontSize: '3rem',
                            fontWeight: 'bold',
                            textAlign: 'center',
                            marginBottom: '1rem',
                            color: '#1a2035'
                        }}
                    >
                        My <span style={{ color: '#ff6600' }}>Journey</span>
                    </motion.h2>

                    {/* Subtitle */}
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.3 }}
                        style={{
                            fontSize: '1.1rem',
                            color: '#666',
                            textAlign: 'center',
                            marginBottom: '4rem',
                            maxWidth: '600px',
                            margin: '0 auto 4rem auto'
                        }}
                    >
                        A timeline of my professional experience and growth
                    </motion.p>

                    {/* Timeline */}
                    <ExperienceTimeline experience={experience} />
                </div>
            </motion.div>

            <WhyHireMe />
        </section>
    );
};

export default About;
