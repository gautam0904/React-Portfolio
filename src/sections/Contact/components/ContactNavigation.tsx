import React from 'react';

const ContactNavigation: React.FC = () => {
    return (
        <div style={{
            display: 'flex',
            flexDirection: 'column',
            gap: '2rem'
        }}>
            {/* Navigation */}
            <div>
                <h3 style={{
                    color: '#ff6600',
                    fontSize: '1.2rem',
                    fontWeight: 'bold',
                    marginBottom: '1rem'
                }}>
                    Navigation
                </h3>
                <ul style={{
                    listStyle: 'none',
                    padding: 0,
                    margin: 0
                }}>
                    {['Home', 'About Us', 'Service', 'Resume', 'Project'].map((item, index) => (
                        <li key={index} style={{
                            marginBottom: '0.5rem'
                        }}>
                            <a href="#" style={{
                                color: '#cccccc',
                                textDecoration: 'none',
                                transition: 'color 0.3s ease',
                                cursor: 'pointer'
                            }}
                                onMouseEnter={(e) => {
                                    e.currentTarget.style.color = '#ff6600';
                                }}
                                onMouseLeave={(e) => {
                                    e.currentTarget.style.color = '#cccccc';
                                }}
                            >
                                {item}
                            </a>
                        </li>
                    ))}
                </ul>
            </div>

            {/* Contact */}
            <div>
                <h3 style={{
                    color: '#ff6600',
                    fontSize: '1.2rem',
                    fontWeight: 'bold',
                    marginBottom: '1rem'
                }}>
                    Contact
                </h3>
                <div style={{
                    color: '#cccccc',
                    lineHeight: '1.8'
                }}>
                    <div>+91 9904038740</div>
                    <div>malaviyagautam0942@gmail.com</div>
                    <div>Portfolio-gautam.com</div>
                </div>
            </div>
        </div>
    );
};

export default ContactNavigation;
