import React, { useEffect, useRef, useState } from 'react';
import { motion, useInView, useAnimation, type Variants } from 'framer-motion';
import {  AnimatePresence } from 'framer-motion';

const Project: React.FC = () => {
  const [activeFilter, setActiveFilter] = useState('Full Stack');
  const [currentPortfolioIndex, setCurrentPortfolioIndex] = useState(0);
  const [email, setEmail] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitMessage, setSubmitMessage] = useState('');

  const handleEmailSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) {
      setSubmitMessage('Please enter a valid email address');
      return;
    }

    // Validate Gmail domain
    if (!email.endsWith('@gmail.com')) {
      setSubmitMessage('Please use a Gmail address (@gmail.com)');
      return;
    }

    setIsSubmitting(true);
    setSubmitMessage('');

    try {
      console.log('Sending contact request:', { email, message: 'Contact request from portfolio website' });
      
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          email,
          message: 'Contact request from portfolio website',
          name: 'Portfolio Visitor'
        }),
      });

      console.log('Response status:', response.status);
      const data = await response.json();
      console.log('Response data:', data);

      if (response.ok) {
        setSubmitMessage('Thank you! I\'ll get back to you soon.');
        setEmail('');
      } else {
        setSubmitMessage(data.message || 'Something went wrong. Please try again.');
      }
    } catch (error) {
      console.error('Contact form error:', error);
      setSubmitMessage('Network error. Please try again later.');
    } finally {
      setIsSubmitting(false);
    }
  };

  const filters = ['Full Stack', 'Frontend', 'Backend', 'Database', 'CMS'];
  
  const portfolioItems = [
    {
      title: 'Tavili Foodstock',
      subtitle: 'Food Management System',
      image: '/assets/images/fronted.png',
      category: 'Full Stack',
      description: 'Live foodstock management system with inventory tracking and order processing using MongoDB and Express.js'
    },
    {
      title: 'Bus Booking System',
      subtitle: 'Advanced Booking Platform',
      image: '/assets/images/backend.png',
      category: 'Full Stack',
      description: 'RedBus-inspired bus booking system with cutting-edge technologies for enhanced user experience'
    },
    {
      title: 'Quiz Generation System',
      subtitle: 'Dynamic Quiz Platform',
      image: '/assets/images/ai.png',
      category: 'Full Stack',
      description: 'RBSC standards-based quiz platform with adaptive difficulty levels and admin management'
    },
    {
      title: 'Content Management System',
      subtitle: 'Social Media Integration',
      image: '/assets/images/fronted.png',
      category: 'CMS',
      description: 'Dynamic CMS with social media-like posting capabilities for enhanced user interaction'
    },
    {
      title: 'Book Management System',
      subtitle: 'Inventory Optimization',
      image: '/assets/images/backend.png',
      category: 'Database',
      description: 'Robust book management system for efficient organization and tracking of book inventories'
    },
    {
      title: 'Product Catalog',
      subtitle: 'E-commerce Platform',
      image: '/assets/images/ai.png',
      category: 'Frontend',
      description: 'Specialized e-commerce site with detailed product information and enhanced shopping experience'
    }
  ];

  const testimonials = [
    {
      name: 'Shaligram Infotech',
      role: 'Full Stack Developer Intern',
      rating: 5.0,
      text: 'Gautam demonstrated exceptional problem-solving capabilities and effective communication while contributing to multiple projects including Tavili Foodstock and Bus Booking System.',
      avatar: '/assets/images/shaligram_infotech_logo.jpeg'
    },
    {
      name: 'Amichi Infotech',
      role: 'Web Developer Intern',
      rating: 5.0,
      text: 'Worked closely with cross-disciplinary teams to produce top-notch software solutions on schedule, using effective communication to maintain alignment.',
      avatar: '/assets/images/amici_logo.png'
    }
  ];

  const blogPosts = [
    {
      category: 'MEAN Stack',
      title: 'Building Scalable Web Applications with MongoDB & Express.js',
      author: 'Gautam Malaviya',
      date: '15 Dec, 2024',
      image: '/assets/images/ai.png'
    },
    {
      category: 'Full Stack',
      title: 'Dynamic Quiz Generation System: RBSC Standards Implementation',
      author: 'Gautam Malaviya',
      date: '10 Nov, 2024',
      image: '/assets/images/backend.png'
    },
    {
      category: 'CMS',
      title: 'Content Management System with Social Media Integration',
      author: 'Gautam Malaviya',
      date: '05 Oct, 2024',
      image: '/assets/images/fronted.png'
    }
  ];

  // Enhanced icons as components
  const CodeIcon = () => (
    <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
      <polyline points="16 18 22 12 16 6" />
      <polyline points="8 6 2 12 8 18" />
    </svg>
  );

  const RocketIcon = () => (
    <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
      <path d="M4.5 16.5c-1.5 1.26-2 5-2 5s3.74-.5 5-2c.71-.84.7-2.13-.09-2.91a2.18 2.18 0 0 0-2.91-.09z" />
      <path d="m12 15-3-3a22 22 0 0 1 2-3.95A12.88 12.88 0 0 1 22 2c0 2.72-.78 7.5-6 11a22.35 22.35 0 0 1-4 2z" />
      <path d="M9 12H4s.55-3.03 2-4c1.62-1.08 5 0 5 0" />
      <path d="M12 15v5s3.03-.55 4-2c1.08-1.62 0-5 0-5" />
    </svg>
  );

  const DesktopIcon = () => (
    <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
      <rect x="2" y="3" width="20" height="14" rx="2" ry="2" />
      <line x1="8" y1="21" x2="16" y2="21" />
      <line x1="12" y1="17" x2="12" y2="21" />
    </svg>
  );

  const MobileIcon = () => (
    <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
      <rect x="5" y="2" width="14" height="20" rx="2" ry="2" />
      <line x1="12" y1="18" x2="12.01" y2="18" />
    </svg>
  );

  const DatabaseIcon = () => (
    <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
      <ellipse cx="12" cy="5" rx="9" ry="3" />
      <path d="M3 5v14c0 1.66 4.03 3 9 3s9-1.34 9-3V5" />
      <path d="M3 12c0 1.66 4.03 3 9 3s9-1.34 9-3" />
    </svg>
  );

  const TrophyIcon = () => (
    <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
      <path d="M6 9H4.5a2.5 2.5 0 0 1 0-5H6" />
      <path d="M18 9h1.5a2.5 2.5 0 0 0 0-5H18" />
      <path d="M4 22h16" />
      <path d="M10 14.66V17c0 .55-.47.98-.97 1.21C7.85 18.75 7 20.24 7 22" />
      <path d="M14 14.66V17c0 .55.47.98.97 1.21C16.15 18.75 17 20.24 17 22" />
      <path d="M18 2H6v7a6 6 0 0 0 12 0V2Z" />
    </svg>
  );

  const EmailIcon = () => (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
      <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
      <polyline points="22,6 12,13 2,6" />
    </svg>
  );

  const ArrowIcon = () => (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
      <path d="m9 18 6-6-6-6" />
    </svg>
  );

  // Enhanced animation variants
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

  const itemVariants = {
    hidden: { opacity: 0, y: 30, scale: 0.95 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        type: "spring" as const,
        damping: 20,
        stiffness: 300
      }
    }
  };

  const hoverVariants = {
    hover: {
      y: -8,
      scale: 1.02,
      transition: {
        type: "spring" as const,
        damping: 15,
        stiffness: 400
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
        {/* Enhanced Background Shapes */}
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
          {/* Header */}
          <div style={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            marginBottom: '5rem'
          }}>
            <motion.h2
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              style={{
                fontSize: '3.5rem',
                fontWeight: 'bold',
                color: '#1a2035'
              }}
            >
              Lets have a look at my <span style={{ color: '#ff6600' }}>Projects</span>
            </motion.h2>
            <motion.button
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
              whileHover={{ 
                scale: 1.05,
                boxShadow: '0 10px 30px rgba(255, 102, 0, 0.4)',
                transition: { duration: 0.2 }
              }}
              whileTap={{ scale: 0.98 }}
              style={{
                backgroundColor: '#ff6600',
                color: 'white',
                border: 'none',
                borderRadius: '50px',
                padding: '1rem 2rem',
                fontSize: '1.1rem',
                fontWeight: 'bold',
                cursor: 'pointer',
                boxShadow: '0 5px 15px rgba(255, 102, 0, 0.3)',
                transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)'
              }}
            >
              View All
            </motion.button>
          </div>

          {/* Enhanced Filter Buttons */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            style={{
              display: 'flex',
              justifyContent: 'center',
              gap: '1.5rem',
              marginBottom: '4rem',
              flexWrap: 'wrap'
            }}
          >
            {filters.map((filter) => (
              <motion.button
                key={filter}
                variants={itemVariants}
                whileHover={{ 
                  scale: 1.05,
                  y: -2,
                  transition: { duration: 0.2 }
                }}
                whileTap={{ scale: 0.98 }}
                onClick={() => setActiveFilter(filter)}
                style={{
                  backgroundColor: activeFilter === filter ? '#ff6600' : '#f8f9fa',
                  color: activeFilter === filter ? 'white' : '#666',
                  border: activeFilter === filter ? 'none' : '2px solid #e9ecef',
                  borderRadius: '30px',
                  padding: '1rem 2rem',
                  fontSize: '1rem',
                  fontWeight: '600',
                  cursor: 'pointer',
                  boxShadow: activeFilter === filter 
                    ? '0 8px 25px rgba(255, 102, 0, 0.3)' 
                    : '0 2px 10px rgba(0,0,0,0.05)',
                  transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
                  position: 'relative',
                  overflow: 'hidden'
                }}
              >
                {activeFilter === filter && (
                  <motion.div
                    layoutId="activeFilter"
                    style={{
                      position: 'absolute',
                      inset: 0,
                      background: 'linear-gradient(135deg, #ff6600, #ff8533)',
                      borderRadius: '30px',
                      zIndex: -1
                    }}
                    transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
                  />
                )}
                {filter}
              </motion.button>
            ))}
          </motion.div>

          {/* Enhanced Portfolio Items */}
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
                <motion.div
                  key={`${activeFilter}-${index}`}
                  variants={itemVariants}
                  whileHover={{
                    y: -12,
                    scale: 1.02,
                    transition: { duration: 0.3, ease: "easeOut" }
                  }}
                  style={{
                    position: 'relative',
                    borderRadius: '25px',
                    overflow: 'hidden',
                    boxShadow: '0 15px 50px rgba(0,0,0,0.08)',
                    cursor: 'pointer',
                    background: 'white'
                  }}
                >
                  <div style={{ position: 'relative', overflow: 'hidden' }}>
                    <motion.img
                      src={item.image}
                      alt={item.title}
                      whileHover={{ scale: 1.05 }}
                      transition={{ duration: 0.3 }}
                      style={{
                        width: '100%',
                        height: '300px',
                        objectFit: 'cover'
                      }}
                    />
                    <motion.div
                      initial={{ opacity: 0 }}
                      whileHover={{ opacity: 1 }}
                      transition={{ duration: 0.3 }}
                      style={{
                        position: 'absolute',
                        inset: 0,
                        background: 'rgba(255, 102, 0, 0.1)',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center'
                      }}
                    >
                      <motion.div
                        initial={{ scale: 0 }}
                        whileHover={{ scale: 1 }}
                        transition={{ delay: 0.1, type: "spring", stiffness: 300 }}
                        style={{
                          backgroundColor: 'rgba(255, 255, 255, 0.9)',
                          borderRadius: '50%',
                          padding: '1rem',
                          backdropFilter: 'blur(10px)'
                        }}
                      >
                        <ArrowIcon />
                      </motion.div>
                    </motion.div>
                  </div>
                  
                  <div style={{
                    position: 'absolute',
                    bottom: 0,
                    left: 0,
                    right: 0,
                    background: 'linear-gradient(transparent, rgba(0,0,0,0.9))',
                    padding: '2.5rem 2rem 2rem',
                    color: 'white'
                  }}>
                    <div style={{
                      display: 'flex',
                      justifyContent: 'space-between',
                      alignItems: 'flex-start',
                      marginBottom: '0.5rem'
                    }}>
                      <h3 style={{
                        fontSize: '2rem',
                        fontWeight: 'bold',
                        margin: 0
                      }}>
                        {item.title}
                      </h3>
                      <motion.span
                        whileHover={{ scale: 1.05 }}
                        style={{
                          backgroundColor: '#ff6600',
                          color: 'white',
                          padding: '0.5rem 1rem',
                          borderRadius: '20px',
                          fontSize: '0.8rem',
                          fontWeight: 'bold'
                        }}
                      >
                        {item.category}
                      </motion.span>
                    </div>
                    <p style={{
                      fontSize: '1.1rem',
                      color: '#cccccc',
                      margin: '0 0 1rem 0'
                    }}>
                      {item.subtitle}
                    </p>
                    <p style={{
                      fontSize: '0.9rem',
                      color: '#aaaaaa',
                      lineHeight: '1.4'
                    }}>
                      {item.description}
                    </p>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </AnimatePresence>

          {/* Enhanced Navigation Dots */}
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

      {/* Enhanced Testimonials Section */}
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
          {/* Header */}
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

          {/* Enhanced Testimonial Cards */}
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
              <motion.div
                key={index}
                variants={itemVariants}
                whileHover={{
                  y: -10,
                  scale: 1.02,
                  transition: { duration: 0.3 }
                }}
                style={{
                  background: 'rgba(255, 255, 255, 0.08)',
                  borderRadius: '25px',
                  padding: '3rem',
                  backdropFilter: 'blur(20px)',
                  border: '1px solid rgba(255, 255, 255, 0.15)',
                  position: 'relative',
                  boxShadow: '0 25px 50px rgba(0,0,0,0.2)'
                }}
              >
                {/* Avatar and Info */}
                <div style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '1.5rem',
                  marginBottom: '2rem'
                }}>
                  <motion.img
                    whileHover={{ scale: 1.1 }}
                    src={testimonial.avatar}
                    alt={testimonial.name}
                    style={{
                      width: '70px',
                      height: '70px',
                      borderRadius: '50%',
                      objectFit: 'cover',
                      border: '3px solid #ff6600'
                    }}
                  />
                  <div>
                    <h4 style={{
                      color: 'white',
                      fontSize: '1.3rem',
                      fontWeight: 'bold',
                      margin: '0 0 0.5rem 0'
                    }}>
                      {testimonial.name}
                    </h4>
                    <p style={{
                      color: '#cccccc',
                      fontSize: '1.1rem',
                      margin: 0
                    }}>
                      {testimonial.role}
                    </p>
                  </div>
                </div>

                {/* Enhanced Rating */}
                <div style={{
                  display: 'flex',
                  gap: '0.25rem',
                  marginBottom: '2rem'
                }}>
                  {Array(5).fill(0).map((_, i) => (
                    <motion.span
                      key={i}
                      initial={{ opacity: 0, scale: 0 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      transition={{ delay: i * 0.1, type: "spring", stiffness: 300 }}
                      style={{ color: '#ff6600', fontSize: '1.3rem' }}
                    >
                      ★
                    </motion.span>
                  ))}
                  <span style={{ color: 'white', marginLeft: '0.75rem', fontSize: '1.1rem' }}>
                    {testimonial.rating}
                  </span>
                </div>

                {/* Testimonial Text */}
                <p style={{
                  color: '#cccccc',
                  fontSize: '1.2rem',
                  lineHeight: '1.7',
                  margin: 0
                }}>
                  {testimonial.text}
                </p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </motion.div>

      {/* Enhanced Call to Action Section */}
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
        {/* Enhanced background decorative elements */}
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
              lineHeight: '1.2',
              letterSpacing: '-0.02em'
            }}
          >
            Ready to Build Something <span style={{ 
              color: '#ff6600',
              background: 'linear-gradient(135deg, #ff6600, #ff8533)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              backgroundClip: 'text'
            }}>Amazing?</span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1, ease: "easeOut" }}
            style={{
              fontSize: '1.3rem',
              color: '#666',
              marginBottom: '4rem',
              lineHeight: '1.6',
              maxWidth: '600px',
              marginLeft: 'auto',
              marginRight: 'auto'
            }}
          >
            Let's collaborate on your next project and bring your ideas to life with cutting-edge technology.
          </motion.p>

          {/* Enhanced Services Offered */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            style={{
              display: 'flex',
              justifyContent: 'center',
              gap: '2rem',
              marginBottom: '4rem',
              flexWrap: 'wrap'
            }}
          >
            {[
              { name: 'MEAN Stack', icon: <CodeIcon /> },
              { name: 'MERN Stack', icon: <RocketIcon /> },
              { name: 'Desktop App', icon: <DesktopIcon /> },
              { name: 'Mobile App', icon: <MobileIcon /> }
            ].map((service, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                whileHover={{ 
                  scale: 1.05,
                  y: -3,
                  transition: { duration: 0.2 }
                }}
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '0.75rem',
                  padding: '1rem 1.5rem',
                  borderRadius: '25px',
                  background: 'white',
                  boxShadow: '0 8px 25px rgba(0,0,0,0.1)',
                  border: '1px solid rgba(255, 102, 0, 0.15)',
                  cursor: 'pointer'
                }}
              >
                <motion.div
                  whileHover={{ rotate: 360 }}
                  transition={{ duration: 0.5 }}
                  style={{ 
                    color: '#ff6600',
                    display: 'flex',
                    alignItems: 'center'
                  }}
                >
                  {service.icon}
                </motion.div>
                <span style={{ 
                  color: '#1a2035', 
                  fontSize: '1rem',
                  fontWeight: '600'
                }}>
                  {service.name}
                </span>
              </motion.div>
            ))}
          </motion.div>

          {/* Enhanced Email Input */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
            style={{
              display: 'flex',
              flexDirection: 'column',
              maxWidth: '500px',
              margin: '0 auto 6rem',
              gap: '1rem'
            }}
          >
            <form onSubmit={handleEmailSubmit} style={{
              display: 'flex',
              gap: '1rem',
              background: 'white',
              borderRadius: '60px',
              padding: '0.5rem',
              boxShadow: '0 15px 50px rgba(0,0,0,0.12)',
              border: '1px solid rgba(255, 102, 0, 0.2)'
            }}>
              <div style={{
                flex: 1,
                position: 'relative'
              }}>
                <motion.div
                  style={{
                    position: 'absolute',
                    left: '1.5rem',
                    top: '50%',
                    transform: 'translateY(-50%)',
                    color: '#999'
                  }}
                >
                  <EmailIcon />
                </motion.div>
                <input
                  type="email"
                  placeholder="Enter Gmail Address (@gmail.com)"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  style={{
                    width: '100%',
                    padding: '1.5rem 1.5rem 1.5rem 3.5rem',
                    border: 'none',
                    borderRadius: '50px',
                    fontSize: '1.1rem',
                    outline: 'none',
                    transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
                    background: 'transparent'
                  }}
                  onFocus={(e) => {
                    e.target.style.background = 'rgba(255, 102, 0, 0.05)';
                  }}
                  onBlur={(e) => {
                    e.target.style.background = 'transparent';
                  }}
                />
              </div>
              <motion.button 
                type="submit"
                disabled={isSubmitting}
                whileHover={{
                  scale: isSubmitting ? 1 : 1.02,
                  boxShadow: isSubmitting ? '0 5px 20px rgba(255, 102, 0, 0.3)' : '0 8px 30px rgba(255, 102, 0, 0.4)',
                  transition: { duration: 0.2 }
                }}
                whileTap={{ scale: isSubmitting ? 1 : 0.98 }}
                style={{
                  backgroundColor: isSubmitting ? '#ccc' : '#ff6600',
                  color: 'white',
                  border: 'none',
                  borderRadius: '50px',
                  padding: '1.5rem 2.5rem',
                  fontSize: '1.1rem',
                  fontWeight: '600',
                  cursor: isSubmitting ? 'not-allowed' : 'pointer',
                  boxShadow: '0 5px 20px rgba(255, 102, 0, 0.3)',
                  whiteSpace: 'nowrap',
                  transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)'
                }}
              >
                {isSubmitting ? 'Sending...' : 'Send Message'}
              </motion.button>
            </form>
            
            {submitMessage && (
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                style={{
                  textAlign: 'center',
                  padding: '1rem',
                  borderRadius: '8px',
                  backgroundColor: submitMessage.includes('Thank you') ? 'rgba(76, 175, 80, 0.1)' : 'rgba(244, 67, 54, 0.1)',
                  color: submitMessage.includes('Thank you') ? '#4caf50' : '#f44336',
                  fontSize: '1rem',
                  fontWeight: '500'
                }}
              >
                {submitMessage}
              </motion.div>
            )}
          </motion.div>

          {/* Enhanced Statistics */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            style={{
              display: 'flex',
              justifyContent: 'center',
              gap: '6rem',
              flexWrap: 'wrap'
            }}
          >
            {[
              { icon: <DatabaseIcon />, text: '3+ Years Experience' },
              { icon: <TrophyIcon />, text: '6+ Projects Completed' },
              { icon: <CodeIcon />, text: 'Full Stack Expert' }
            ].map((stat, index) => (
              <motion.div 
                key={index}
                variants={itemVariants}
                whileHover={{ 
                  scale: 1.05,
                  y: -5,
                  transition: { duration: 0.2 }
                }}
                style={{
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'center',
                  gap: '1rem',
                  padding: '2rem',
                  borderRadius: '20px',
                  background: 'white',
                  boxShadow: '0 10px 30px rgba(0,0,0,0.08)',
                  border: '1px solid rgba(255, 102, 0, 0.15)',
                  minWidth: '180px',
                  cursor: 'pointer'
                }}
              >
                <motion.div
                  whileHover={{ 
                    rotate: 360,
                    scale: 1.1 
                  }}
                  transition={{ duration: 0.5 }}
                  style={{
                    width: '60px',
                    height: '60px',
                    borderRadius: '50%',
                    background: 'linear-gradient(135deg, #ff6600, #ff8533)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    color: 'white',
                    boxShadow: '0 8px 20px rgba(255, 102, 0, 0.3)'
                  }}
                >
                  {stat.icon}
                </motion.div>
                <span style={{ 
                  color: '#1a2035', 
                  fontSize: '1.2rem',
                  fontWeight: '600',
                  textAlign: 'center'
                }}>
                  {stat.text}
                </span>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </motion.div>

      {/* Enhanced Blog Section */}
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        style={{
          background: '#fff',
          padding: '8rem 2rem',
          position: 'relative'
        }}
      >
        <div style={{
          maxWidth: '1200px',
          margin: '0 auto'
        }}>
          {/* Header */}
          <div style={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            marginBottom: '5rem'
          }}>
            <motion.h2
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              style={{
                fontSize: '3.5rem',
                fontWeight: 'bold',
                color: '#1a2035'
              }}
            >
              Technical <span style={{ color: '#ff6600' }}>Insights</span>
            </motion.h2>
            <motion.button
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
              whileHover={{ 
                scale: 1.05,
                boxShadow: '0 10px 30px rgba(255, 102, 0, 0.4)',
                transition: { duration: 0.2 }
              }}
              whileTap={{ scale: 0.98 }}
              style={{
                backgroundColor: '#ff6600',
                color: 'white',
                border: 'none',
                borderRadius: '50px',
                padding: '1rem 2rem',
                fontSize: '1.1rem',
                fontWeight: 'bold',
                cursor: 'pointer',
                boxShadow: '0 5px 15px rgba(255, 102, 0, 0.3)',
                transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)'
              }}
            >
              View All
            </motion.button>
          </div>

          {/* Enhanced Blog Cards */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(380px, 1fr))',
              gap: '2.5rem'
            }}
          >
            {blogPosts.map((post, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                whileHover={hoverVariants.hover}
                style={{
                  background: 'white',
                  borderRadius: '25px',
                  overflow: 'hidden',
                  boxShadow: '0 15px 50px rgba(0,0,0,0.1)',
                  cursor: 'pointer',
                  position: 'relative'
                }}
              >
                <div style={{ position: 'relative', overflow: 'hidden' }}>
                  <motion.img
                    whileHover={{ scale: 1.05 }}
                    transition={{ duration: 0.3 }}
                    src={post.image}
                    alt={post.title}
                    style={{
                      width: '100%',
                      height: '220px',
                      objectFit: 'cover'
                    }}
                  />
                  <motion.div
                    initial={{ opacity: 0 }}
                    whileHover={{ opacity: 1 }}
                    transition={{ duration: 0.3 }}
                    style={{
                      position: 'absolute',
                      inset: 0,
                      background: 'rgba(255, 102, 0, 0.1)',
                    }}
                  />
                </div>
                
                <div style={{
                  padding: '2.5rem'
                }}>
                  <div style={{
                    display: 'flex',
                    justifyContent: 'space-between',
                    alignItems: 'center',
                    marginBottom: '1.5rem'
                  }}>
                    <motion.span
                      whileHover={{ scale: 1.05 }}
                      style={{
                        backgroundColor: '#ff6600',
                        color: 'white',
                        padding: '0.75rem 1.5rem',
                        borderRadius: '25px',
                        fontSize: '1rem',
                        fontWeight: 'bold'
                      }}
                    >
                      {post.category}
                    </motion.span>
                    <span style={{
                      color: '#666',
                      fontSize: '1rem'
                    }}>
                      {post.author} • {post.date}
                    </span>
                  </div>
                  <h3 style={{
                    fontSize: '1.4rem',
                    fontWeight: 'bold',
                    color: '#1a2035',
                    marginBottom: '1rem',
                    lineHeight: '1.4'
                  }}>
                    {post.title}
                  </h3>
                </div>
                
                {/* Enhanced Arrow Icon */}
                <motion.div
                  whileHover={{ 
                    scale: 1.1,
                    rotate: 45,
                    transition: { duration: 0.2 }
                  }}
                  style={{
                    position: 'absolute',
                    bottom: '2rem',
                    right: '2rem',
                    width: '45px',
                    height: '45px',
                    backgroundColor: '#ff6600',
                    borderRadius: '50%',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    color: 'white',
                    boxShadow: '0 5px 15px rgba(255, 102, 0, 0.3)',
                    cursor: 'pointer'
                  }}
                >
                  <ArrowIcon />
                </motion.div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
};

export default Project;
