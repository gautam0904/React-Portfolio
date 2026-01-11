import React from 'react';
import { motion } from 'framer-motion';
import {
  ContactHeader,
  ContactBrand,
  ContactNavigation,
  ContactNewsletter,
  ContactFooter
} from './components';

function Contact() {
  return (
    <footer style={{
      backgroundColor: '#1a1a1a',
      color: 'white',
      minHeight: '100vh',
      position: 'relative'
    }}>
      {/* Top Section - Call to Action */}
      <ContactHeader />

      {/* Middle Section - Main Footer Content */}
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.2 }}
        style={{
          padding: '4rem 2rem',
          maxWidth: '1200px',
          margin: '0 auto',
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
          gap: '3rem',
          borderBottom: '1px solid rgba(255, 255, 255, 0.1)'
        }}
      >
        {/* Left Column - Brand & About */}
        <ContactBrand />

        {/* Middle Column - Navigation & Contact */}
        <ContactNavigation />

        {/* Right Column - Newsletter Signup */}
        <ContactNewsletter />
      </motion.div>

      {/* Bottom Section - Copyright & Legal */}
      <ContactFooter />
    </footer>
  );
}

export default Contact;