import React from 'react';
import FeaturedServiceCard from './FeaturedServiceCard';
import BuildYourStackWidget from './BuildYourStackWidget';

const ServiceRightColumn: React.FC = () => {
    return (
        <div style={{ display: 'flex', flexDirection: 'column' }}>
            <h3 style={{
                color: '#888',
                fontSize: '0.9rem',
                textTransform: 'uppercase',
                letterSpacing: '2px',
                marginBottom: '2rem',
                paddingLeft: '0.5rem'
            }}>
                Featured MEAN Stack Specializations
            </h3>

            <FeaturedServiceCard
                title="Full-Stack Applications"
                isPrimary={true}
                bullets={[
                    "Complete solutions from database to UI",
                    "Admin dashboards",
                    "Real-time data visualization",
                    "User authentication systems"
                ]}
                tags={["Angular", "Node", "Express", "MongoDB"]}
                delay={0.2}
            />

            <FeaturedServiceCard
                title="Dashboard & Analytics Systems"
                subtitle="Turn data into decisions"
                bullets={[
                    "Interactive charts & graphs",
                    "Role-based access control",
                    "Automated reporting"
                ]}
                tags={["+1 month optimization"]}
                extraBadge="Analytics"
                delay={0.3}
            />

            <FeaturedServiceCard
                title="Deployment & DevOps"
                subtitle="From development to production-ready infrastructure"
                bullets={[
                    "CI/CD pipeline implementation",
                    "Performance monitoring & optimization",
                    "Scalable cloud architecture",
                    "Security hardening & configuration"
                ]}
                tags={["AWS", "Docker", "CI/CD"]}
                extraBadge="DevOps"
                delay={0.4}
            />

            <BuildYourStackWidget />
        </div>
    );
};

export default ServiceRightColumn;
