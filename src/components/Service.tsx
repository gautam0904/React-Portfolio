import React, { useEffect, useRef, useState } from 'react';
import { motion, useInView, useAnimation, type Variants } from 'framer-motion';

interface ServiceProps {
  className?: string;
}

const Service: React.FC<ServiceProps> = ({ className }) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const controls = useAnimation();
  const isInView = useInView(containerRef, { once: true, margin: "-100px" });
  const [hoveredButton, setHoveredButton] = useState<number | null>(null);
  const [hoveredCard, setHoveredCard] = useState<number | null>(null);
  const [currentPage, setCurrentPage] = useState(0);

  useEffect(() => {
    if (isInView) {
      controls.start("visible");
    }
  }, [isInView, controls]);

  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        duration: 0.8,
        staggerChildren: 0.3
      }
    }
  };

  const itemVariants: Variants = {
    hidden: { y: 60, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.8,
        ease: [0.6, -0.05, 0.01, 0.99]
      }
    }
  };

  const cardVariants: Variants = {
    hidden: { y: 120, opacity: 0, scale: 0.7 },
    visible: {
      y: 0,
      opacity: 1,
      scale: 1,
      transition: {
        duration: 1,
        ease: [0.68, -0.55, 0.265, 1.55]
      }
    }
  };

  const backgroundVariants: Variants = {
    animate: {
      x: [0, 30, 0],
      y: [0, -20, 0],
      rotate: [0, 3, 0],
      transition: {
        duration: 25,
        repeat: Infinity,
        ease: "easeInOut"
      }
    }
  };

  const allServices = [
    // Page 1 (4 cards)
    {
      title: "Frontend Development",
      image: "/assets/images/frontend.png",
      description: "Modern, responsive user interfaces with React, Angular, and Vue.js delivering exceptional user experiences",
      technologies: ["React", "Angular", "Vue.js", "TypeScript"]
    },
    {
      title: "Full Stack MERN",
      image: "/assets/images/mern.png",
      description: "Complete web applications using MongoDB, Express.js, React, and Node.js for scalable solutions",
      technologies: ["MongoDB", "Express.js", "React", "Node.js"]
    },
    {
      title: "Full Stack MEAN",
      image: "/assets/images/mean.png",
      description: "End-to-end web development with MongoDB, Express.js, Angular, and Node.js technology stack",
      technologies: ["MongoDB", "Express.js", "Angular", "Node.js"]
    },
    {
      title: "Backend Development",
      image: "/assets/images/backend.png",
      description: "Robust server-side architecture, RESTful APIs, and database optimization for high-performance applications",
      technologies: ["Node.js", "Express.js", "MongoDB", "REST APIs"]
    },
    // Page 2 (4 cards)
    {
      title: "AI Integration",
      image: "/assets/images/ai.png",
      description: "Smart application features with machine learning APIs, natural language processing, and intelligent automation",
      technologies: ["TensorFlow.js", "OpenAI API", "ML Models", "NLP"]
    },
    {
      title: "Mobile App Development",
      image: "/assets/images/mobile.png",
      description: "Cross-platform mobile applications using React Native and Ionic for iOS and Android platforms",
      technologies: ["React Native", "Ionic", "Cordova", "PWA"]
    },
    {
      title: "Desktop App Development",
      image: "/assets/images/desktop.png",
      description: "Desktop applications using Electron and modern web technologies for Windows, macOS, and Linux",
      technologies: ["Electron", "Node.js", "JavaScript", "HTML/CSS"]
    },
    {
      title: "JavaScript Ecosystem",
      image: "/assets/images/js-ecosystem.png",
      description: "Advanced JavaScript development with modern ES6+, TypeScript, and comprehensive tooling solutions",
      technologies: ["ES6+", "TypeScript", "Webpack", "Babel"]
    },
    // Page 3 (4 cards)
    {
      title: "UI/UX Design",
      image: "/assets/images/uiux.png",
      description: "User-centered design approach with wireframing, prototyping, and interactive design using modern tools",
      technologies: ["Figma", "Adobe XD", "Sketch", "Prototyping"]
    },
    {
      title: "API Development",
      image: "/assets/images/api.png",
      description: "RESTful and GraphQL API development with proper documentation, authentication, and security measures",
      technologies: ["REST APIs", "GraphQL", "JWT", "Swagger"]
    },
    {
      title: "Real-time Applications",
      image: "/assets/images/realtime.png",
      description: "Live chat systems, real-time notifications, and collaborative applications using WebSocket technology",
      technologies: ["Socket.io", "WebRTC", "WebSocket", "Redis"]
    },
    {
      title: "Testing & Debugging",
      image: "/assets/images/testing.png",
      description: "Comprehensive testing strategies including unit testing, integration testing, and automated testing pipelines",
      technologies: ["Jest", "Cypress", "Mocha", "Testing Library"]
    }
  ];

  // Get current page services (4 cards per page)
  const getCurrentPageServices = () => {
    const startIndex = currentPage * 4;
    return allServices.slice(startIndex, startIndex + 4);
  };

  const nextPage = () => {
    setCurrentPage((prev) => (prev + 1) % 3);
  };

  const prevPage = () => {
    setCurrentPage((prev) => (prev - 1 + 3) % 3);
  };

  const goToPage = (page: number) => {
    setCurrentPage(page);
  };

  return (
    <motion.section
      ref={containerRef}
      className={`service-section ${className || ''}`}
      initial="hidden"
      animate={controls}
      variants={containerVariants}
      style={{
        minHeight: '100vh',
        position: 'relative',
        background: 'linear-gradient(135deg, #000000 0%, #1a1a1a 100%)',
        overflow: 'hidden',
        padding: '6rem 2rem'
      }}
    >
      {/* Moving Background Elements */}
      <motion.div
        variants={backgroundVariants}
        animate="animate"
        style={{
          position: 'absolute',
          top: '10%',
          left: '5%',
          width: '200px',
          height: '200px',
          zIndex: 1,
          opacity: 0.4
        }}
      >
        <img
          src="/assets/images/light-yellow-abstract-background-3d-illustration-3d-rendering 1.png"
          alt=""
          style={{
            width: '100%',
            height: '100%',
            objectFit: 'contain',
            filter: 'hue-rotate(45deg)'
          }}
        />
      </motion.div>

      <motion.div
        variants={backgroundVariants}
        animate="animate"
        style={{
          position: 'absolute',
          top: '60%',
          right: '10%',
          width: '250px',
          height: '250px',
          zIndex: 1,
          opacity: 0.3
        }}
      >
        <img
          src="/assets/images/light-yellow-abstract-background-3d-illustration-3d-rendering 2.png"
          alt=""
          style={{
            width: '100%',
            height: '100%',
            objectFit: 'contain',
            filter: 'hue-rotate(90deg)'
          }}
        />
      </motion.div>

      {/* Background Image */}
      <div
        className="background-image"
        style={{
          position: 'absolute',
          top: 0,
          left: 0,
          width: '100%',
          height: '100%',
          backgroundImage: 'url("/assets/images/serviceBackground.png")',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          opacity: 0.2,
          zIndex: 1
        }}
      />

      {/* Content Container */}
      <div
        style={{
          position: 'relative',
          zIndex: 2,
          maxWidth: '1400px',
          margin: '0 auto'
        }}
      >
        {/* Header Section */}
        <motion.div
          variants={itemVariants}
          style={{
            textAlign: 'center',
            marginBottom: '5rem'
          }}
        >
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            style={{
              fontSize: '4rem',
              fontWeight: 'bold',
              marginBottom: '2rem',
              color: 'white',
              position: 'relative',
              display: 'inline-block'
            }}
          >
            My <span style={{ color: '#ff6600' }}>Services</span>
            <motion.span
              initial={{ width: 0 }}
              whileInView={{ width: '80px' }}
              transition={{ duration: 0.8, delay: 0.5 }}
              style={{
                position: 'absolute',
                bottom: '-15px',
                left: '50%',
                transform: 'translateX(-50%)',
                height: '4px',
                backgroundColor: '#ff6600',
                borderRadius: '2px',
                display: 'block'
              }}
            />
          </motion.h2>
          
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            style={{
              fontSize: '1.3rem',
              color: '#cccccc',
              maxWidth: '800px',
              lineHeight: '1.8',
              margin: '2rem auto 0'
            }}
          >
            Comprehensive JavaScript-based development services covering everything from frontend to backend, 
            mobile to desktop, and AI integration to create innovative digital solutions.
          </motion.p>

          {/* Service Statistics */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            style={{
              display: 'flex',
              justifyContent: 'center',
              gap: '4rem',
              marginTop: '3rem'
            }}
          >
            <div style={{ textAlign: 'center' }}>
              <div style={{
                fontSize: '2.5rem',
                fontWeight: 'bold',
                color: '#ff6600',
                marginBottom: '0.5rem'
              }}>
                12+
              </div>
              <div style={{
                fontSize: '1rem',
                color: '#cccccc'
              }}>
                Service Areas
              </div>
            </div>
            <div style={{ textAlign: 'center' }}>
              <div style={{
                fontSize: '2.5rem',
                fontWeight: 'bold',
                color: '#ff6600',
                marginBottom: '0.5rem'
              }}>
                6+
              </div>
              <div style={{
                fontSize: '1rem',
                color: '#cccccc'
              }}>
                Projects Delivered
              </div>
            </div>
            <div style={{ textAlign: 'center' }}>
              <div style={{
                fontSize: '2rem',
                fontWeight: 'bold',
                color: '#ff6600',
                marginBottom: '0.5rem',
                lineHeight: '1.2'
              }}>
                Certified
              </div>
              <div style={{
                fontSize: '1rem',
                color: '#cccccc'
              }}>
                Developer
              </div>
            </div>
          </motion.div>
        </motion.div>

        {/* Services Cards Grid - 4 cards per page */}
        <motion.div
          key={currentPage}
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: -50 }}
          transition={{ duration: 0.5 }}
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
            gap: '2.5rem',
            marginTop: '4rem'
          }}
        >
          {getCurrentPageServices().map((service, index) => (
            <motion.div
              key={`${currentPage}-${index}`}
              variants={cardVariants}
              initial="hidden"
              animate="visible"
              whileHover={{
                y: -15,
                scale: 1.02,
                transition: { duration: 0.4, ease: "easeOut" }
              }}
              onMouseEnter={() => setHoveredCard(index)}
              onMouseLeave={() => setHoveredCard(null)}
              style={{
                background: hoveredCard === index 
                  ? 'rgba(255, 102, 0, 0.1)' 
                  : 'rgba(255, 255, 255, 0.05)',
                borderRadius: '25px',
                padding: '2rem',
                backdropFilter: 'blur(15px)',
                border: hoveredCard === index 
                  ? '1px solid rgba(255, 102, 0, 0.3)' 
                  : '1px solid rgba(255, 255, 255, 0.1)',
                position: 'relative',
                overflow: 'hidden',
                boxShadow: hoveredCard === index 
                  ? '0 20px 40px rgba(255, 102, 0, 0.2)' 
                  : '0 10px 30px rgba(0, 0, 0, 0.3)',
                transition: 'all 0.4s ease',
                minHeight: '400px'
              }}
            >
              {/* Service Title */}
              <motion.h3
                animate={{
                  color: hoveredCard === index ? '#ff6600' : 'white'
                }}
                transition={{ duration: 0.3 }}
                style={{
                  fontSize: '1.5rem',
                  fontWeight: 'bold',
                  marginBottom: '1.5rem',
                  position: 'relative',
                  zIndex: 3
                }}
              >
                {service.title}
              </motion.h3>

              {/* Service Image */}
              <div
                style={{
                  width: '100%',
                  height: '180px',
                  borderRadius: '20px',
                  overflow: 'hidden',
                  marginBottom: '1.5rem',
                  position: 'relative',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  backgroundColor: 'rgba(255, 255, 255, 0.05)'
                }}
              >
                <motion.img
                  src={service.image}
                  alt={service.title}
                  whileHover={{ scale: 1.1 }}
                  transition={{ duration: 0.4 }}
                  style={{
                    maxWidth: '80%',
                    maxHeight: '80%',
                    width: 'auto',
                    height: 'auto',
                    objectFit: 'contain'
                  }}
                />
              </div>

              {/* Service Description */}
              <p style={{
                fontSize: '0.9rem',
                color: '#cccccc',
                lineHeight: '1.6',
                marginBottom: '1.5rem'
              }}>
                {service.description}
              </p>

              {/* Technologies */}
              <div style={{
                display: 'flex',
                flexWrap: 'wrap',
                gap: '0.5rem',
                marginBottom: '1.5rem'
              }}>
                {service.technologies.map((tech, techIndex) => (
                  <span
                    key={techIndex}
                    style={{
                      backgroundColor: 'rgba(255, 102, 0, 0.2)',
                      color: '#ff6600',
                      padding: '0.3rem 0.8rem',
                      borderRadius: '15px',
                      fontSize: '0.75rem',
                      border: '1px solid rgba(255, 102, 0, 0.3)'
                    }}
                  >
                    {tech}
                  </span>
                ))}
              </div>

              {/* Arrow Button */}
              <motion.button
                onMouseEnter={() => setHoveredButton(index)}
                onMouseLeave={() => setHoveredButton(null)}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
                style={{
                  position: 'absolute',
                  bottom: '1.5rem',
                  right: '1.5rem',
                  width: '50px',
                  height: '50px',
                  borderRadius: '50%',
                  backgroundColor: hoveredButton === index ? '#ff6600' : '#2a2a2a',
                  border: 'none',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  cursor: 'pointer',
                  transition: 'all 0.3s ease',
                  zIndex: 3,
                  boxShadow: hoveredButton === index 
                    ? '0 8px 20px rgba(255, 102, 0, 0.4)' 
                    : '0 4px 10px rgba(0, 0, 0, 0.3)'
                }}
              >
                <motion.svg
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="white"
                  strokeWidth="2"
                  animate={{
                    x: hoveredButton === index ? 2 : 0,
                    y: hoveredButton === index ? -2 : 0
                  }}
                  transition={{ duration: 0.2 }}
                >
                  <path d="M7 17L17 7M17 7H7M17 7V17" />
                </motion.svg>
              </motion.button>
            </motion.div>
          ))}
        </motion.div>

        {/* Navigation Controls */}
        <motion.div
          variants={itemVariants}
          style={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            gap: '2rem',
            marginTop: '4rem'
          }}
        >
          {/* Previous Button */}
          <button
            onClick={prevPage}
            style={{
              padding: '0.8rem 1.5rem',
              backgroundColor: 'rgba(255, 255, 255, 0.1)',
              border: '1px solid rgba(255, 255, 255, 0.2)',
              borderRadius: '50px',
              color: 'white',
              cursor: 'pointer',
              transition: 'all 0.3s ease'
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.backgroundColor = 'rgba(255, 102, 0, 0.2)';
              e.currentTarget.style.borderColor = '#ff6600';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.backgroundColor = 'rgba(255, 255, 255, 0.1)';
              e.currentTarget.style.borderColor = 'rgba(255, 255, 255, 0.2)';
            }}
          >
            Previous
          </button>

          {/* Pagination Dots */}
          <div style={{
            display: 'flex',
            gap: '1rem'
          }}>
            {[0, 1, 2].map((page) => (
              <motion.div
                key={page}
                onClick={() => goToPage(page)}
                whileHover={{ scale: 1.2 }}
                whileTap={{ scale: 0.9 }}
                style={{
                  width: currentPage === page ? '16px' : '12px',
                  height: '12px',
                  borderRadius: '50%',
                  backgroundColor: currentPage === page ? '#ff6600' : 'rgba(255, 255, 255, 0.3)',
                  cursor: 'pointer',
                  transition: 'all 0.3s ease'
                }}
              />
            ))}
          </div>

          {/* Next Button */}
          <button
            onClick={nextPage}
            style={{
              padding: '0.8rem 1.5rem',
              backgroundColor: 'rgba(255, 255, 255, 0.1)',
              border: '1px solid rgba(255, 255, 255, 0.2)',
              borderRadius: '50px',
              color: 'white',
              cursor: 'pointer',
              transition: 'all 0.3s ease'
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.backgroundColor = 'rgba(255, 102, 0, 0.2)';
              e.currentTarget.style.borderColor = '#ff6600';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.backgroundColor = 'rgba(255, 255, 255, 0.1)';
              e.currentTarget.style.borderColor = 'rgba(255, 255, 255, 0.2)';
            }}
          >
            Next
          </button>
        </motion.div>

        {/* Page Indicator */}
        <motion.div
          variants={itemVariants}
          style={{
            textAlign: 'center',
            marginTop: '2rem',
            color: '#cccccc',
            fontSize: '1rem'
          }}
        >
          Page {currentPage + 1} of 3 • Showing {getCurrentPageServices().length} services
        </motion.div>
      </div>
    </motion.section>
  );
};

export default Service;
