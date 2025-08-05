import React, { useState } from "react";
import { motion } from "framer-motion";

interface ExperienceItem {
  company: string;
  location: string;
  period: string;
  role: string;
  description: string;
}

const experience: ExperienceItem[] = [
  {
    company: "Government Engineering College",
    location: "Dahod",
    period: "Aug 2020 – June 2024",
    role: "Computer Engineering Student",
    description: "Completed Bachelor of Engineering in Computer Engineering with 7.73 CGPA, building strong foundation in programming, algorithms, and software development principles."
  },
  {
    company: "Freelance Projects",
    location: "Surat",
    period: "2023 – 2024",
    role: "Full Stack Developer",
    description: "Developed multiple full-stack applications including Tavili Foodstock management system, Bus Booking System, Content Management System, and Dynamic Quiz Generation System using MEAN stack."
  },
  {
    company: "Current Role",
    location: "Surat",
    period: "2024 – Present",
    role: "MEAN Stack Developer",
    description: "Leading full-stack development projects, crafting responsive web applications with MongoDB, Express.js, Angular, and Node.js. Focusing on optimizing both front-end and back-end functionalities for enhanced user experience."
  }
];

const About: React.FC = () => {
  const [isImageHovered, setIsImageHovered] = useState(false);

  return (
    <section style={{
      fontFamily: '"Poppins", sans-serif',
      minHeight: '100vh'
    }}>
      {/* Work Experience Section - Light Blue Background */}
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        style={{
          background: '#fff',
          padding: '6rem 2rem',
          minHeight: '100vh',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center'
        }}
      >
        {/* Dotted Border Container */}
        <div style={{
          border: '3px dotted #90caf9',
          borderRadius: '20px',
          padding: '4rem 3rem',
          maxWidth: '1200px',
          width: '100%',
          background: 'rgba(255, 255, 255, 0.3)',
          backdropFilter: 'blur(10px)'
        }}>
          {/* Section Title */}
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            style={{
              fontSize: '3.5rem',
              fontWeight: 'bold',
              textAlign: 'center',
              marginBottom: '5rem',
              color: '#1a2035'
            }}
          >
            My <span style={{ color: '#ff6600' }}>Journey</span>
          </motion.h2>

          {/* Timeline */}
          <div style={{
            maxWidth: '1000px',
            margin: '0 auto'
          }}>
            {experience.map((item, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, x: idx % 2 === 0 ? -50 : 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: idx * 0.2 }}
                style={{
                  display: 'grid',
                  gridTemplateColumns: '1fr 80px 1fr',
                  gap: '2rem',
                  alignItems: 'center',
                  marginBottom: '4rem',
                  position: 'relative'
                }}
              >
                {/* Left Column - Company Details */}
                <div style={{
                  textAlign: 'right',
                  paddingRight: '2rem'
                }}>
                  <h3 style={{
                    fontSize: '1.5rem',
                    fontWeight: 'bold',
                    color: '#1a2035',
                    marginBottom: '0.5rem'
                  }}>
                    {item.company}, {item.location}
                  </h3>
                  <p style={{
                    fontSize: '1.1rem',
                    color: '#666',
                    fontWeight: '500'
                  }}>
                    {item.period}
                  </p>
                </div>

                {/* Center Column - Timeline Visual */}
                <div style={{
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'center',
                  position: 'relative'
                }}>
                  {/* Timeline Dot */}
                  <div style={{
                    width: '24px',
                    height: '24px',
                    borderRadius: '50%',
                    backgroundColor: idx === 2 ? '#1a2035' : '#ff6600',
                    border: '4px solid white',
                    boxShadow: '0 0 0 4px #e3f2fd',
                    zIndex: 2,
                    position: 'relative'
                  }} />

                  {/* Timeline Line */}
                  {idx !== experience.length - 1 && (
                    <div style={{
                      width: '4px',
                      height: '100px',
                      background: 'repeating-linear-gradient(to bottom, #ff6600 0px, #ff6600 8px, transparent 8px, transparent 16px)',
                      marginTop: '12px',
                      zIndex: 1
                    }} />
                  )}
                </div>

                {/* Right Column - Role & Description */}
                <div style={{
                  textAlign: 'left',
                  paddingLeft: '2rem'
                }}>
                  <h3 style={{
                    fontSize: '1.5rem',
                    fontWeight: 'bold',
                    color: '#1a2035',
                    marginBottom: '0.5rem'
                  }}>
                    {item.role}
                  </h3>
                  <p style={{
                    fontSize: '1rem',
                    color: '#666',
                    lineHeight: '1.6'
                  }}>
                    {item.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.div>

      {/* Why Hire Me Section - Dark Background */}
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.3 }}
        style={{
          background: 'linear-gradient(135deg, #1a1a1a 0%, #2d2d2d 100%)',
          padding: '6rem 2rem',
          minHeight: '100vh',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center'
        }}
      >
        <div style={{
          maxWidth: '1200px',
          width: '100%',
          display: 'grid',
          gridTemplateColumns: '1fr 1fr',
          gap: '5rem',
          alignItems: 'center'
        }}>
          {/* Left Column - Image with Hover Effect */}
          <motion.div
            style={{
              position: 'relative',
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center'
            }}
            onMouseEnter={() => setIsImageHovered(true)}
            onMouseLeave={() => setIsImageHovered(false)}
          >
            <motion.img
              src={isImageHovered ? "/assets/images/hiremeEclipse.png" : "/assets/images/hireme.png"}
              alt="Gautam Malaviya"
              style={{
                width: '100%',
                maxWidth: '450px',
                height: 'auto',
                borderRadius: '20px',
                transition: 'all 0.3s ease'
              }}
              animate={{
                scale: isImageHovered ? 1.05 : 1,
                rotate: isImageHovered ? 2 : 0
              }}
              transition={{ duration: 0.3 }}
            />
          </motion.div>

          {/* Right Column - Content */}
          <div style={{
            color: 'white',
            paddingLeft: '2rem'
          }}>
            <motion.h2
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              style={{
                fontSize: '3.5rem',
                fontWeight: 'bold',
                marginBottom: '2rem',
                lineHeight: '1.2'
              }}
            >
              Why <span style={{ color: '#ff6600' }}>Hire me?</span>
            </motion.h2>

            <motion.p
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.5 }}
              style={{
                fontSize: '1.2rem',
                lineHeight: '1.8',
                color: '#cccccc',
                marginBottom: '4rem'
              }}
            >
              Certified Full Stack Developer with 6 months of hands-on experience in the MEAN stack.
              I specialize in crafting responsive, high-performance web applications and optimizing
              both front-end and back-end functionalities. Led diverse full-stack projects including
              foodstock management systems, e-commerce platforms, and dynamic quiz applications.
              Recognized for problem-solving capabilities, effective communication, and collaborative
              project management with cross-disciplinary teams.
            </motion.p>


            {/* Statistics */}
            {/* Statistics */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.6 }}
              style={{
                display: 'flex',
                gap: '5rem',
                marginBottom: '4rem'
              }}
            >
              <div style={{
                textAlign: 'center'
              }}>
                <div style={{
                  fontSize: '3.5rem',
                  fontWeight: 'bold',
                  color: 'white',
                  marginBottom: '0.5rem'
                }}>
                  30+
                </div>
                <div style={{
                  fontSize: '1.1rem',
                  color: '#cccccc'
                }}>
                  Projects Completed
                </div>
              </div>
              <div style={{
                textAlign: 'center'
              }}>
                <div style={{
                  fontSize: '2.5rem',
                  fontWeight: 'bold',
                  color: '#ff6600',
                  marginBottom: '0.5rem',
                  lineHeight: '1.2'
                }}>
                  Certified
                </div>
                <div style={{
                  fontSize: '1.1rem',
                  color: '#cccccc'
                }}>
                  Experienced Developer
                </div>
              </div>
            </motion.div>


            {/* Technologies I Work With */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.65 }}
              style={{
                marginBottom: '4rem'
              }}
            >
              <h3 style={{
                fontSize: '1.5rem',
                color: '#ff6600',
                marginBottom: '1rem'
              }}>
                Technologies I Master:
              </h3>
              <div style={{
                display: 'flex',
                flexWrap: 'wrap',
                gap: '1rem'
              }}>
                {['Angular','React','Next', 'Node.js', 'Express.js', 'MongoDB','SQL', 'PostgreSQL', 'JavaScript', 'TypeScript'].map((tech, idx) => (
                  <span
                    key={idx}
                    style={{
                      backgroundColor: 'rgba(255, 102, 0, 0.2)',
                      color: '#ff6600',
                      padding: '0.5rem 1rem',
                      borderRadius: '20px',
                      fontSize: '0.9rem',
                      border: '1px solid #ff6600'
                    }}
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </motion.div>

            {/* Hire Me Button */}
            <motion.button
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.7 }}
              whileHover={{
                scale: 1.05,
                backgroundColor: '#ff6600',
                color: 'white'
              }}
              style={{
                padding: '1.2rem 3.5rem',
                fontSize: '1.2rem',
                fontWeight: 'bold',
                backgroundColor: 'white',
                color: '#1a1a1a',
                border: '2px solid white',
                borderRadius: '50px',
                cursor: 'pointer',
                transition: 'all 0.3s ease',
                display: 'block',
                margin: '0 auto'
              }}
              onClick={() => window.open('mailto:malaviyagautam0942@gmail.com', '_blank')}
            >
              Hire me
            </motion.button>
          </div>
        </div>
      </motion.div>
    </section>
  );
};

export default About;
