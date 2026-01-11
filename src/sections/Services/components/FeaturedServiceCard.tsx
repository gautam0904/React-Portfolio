import React, { useState } from 'react';
import { motion } from 'framer-motion';

interface FeaturedServiceCardProps {
    title: string;
    subtitle?: string;
    bullets: string[];
    tags: string[];
    isPrimary?: boolean;
    extraBadge?: string;
    delay?: number;
}

const FeaturedServiceCard: React.FC<FeaturedServiceCardProps> = ({
    title,
    subtitle,
    bullets,
    tags,
    isPrimary = false,
    extraBadge,
    delay = 0
}) => {
    const [isHovered, setIsHovered] = useState(false);

    return (
        <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay, duration: 0.6 }}
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
            style={{
                background: '#ffffff',
                borderRadius: '12px',
                padding: '24px',
                border: '1px solid #e5e7eb',
                position: 'relative',
                overflow: 'hidden',
                transition: 'all 0.3s ease',
                marginBottom: '1.5rem',
                transform: isHovered ? 'translateY(-2px)' : 'translateY(0)',
                boxShadow: isHovered
                    ? '0 8px 25px rgba(0,0,0,0.12)'
                    : '0 2px 8px rgba(0,0,0,0.08)',
            }}
        >
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '8px' }}>
                <h3 style={{
                    fontSize: '1.25rem',
                    fontWeight: 700,
                    color: '#1f2937',
                    letterSpacing: '0.5px'
                }}>{title}</h3>

                {extraBadge && (
                    <span style={{
                        background: '#f3f4f6',
                        color: '#374151',
                        padding: '6px 12px',
                        borderRadius: '20px',
                        fontSize: '0.8rem',
                        fontWeight: 500
                    }}>
                        {extraBadge}
                    </span>
                )}
            </div>

            {subtitle && (
                <p style={{
                    color: '#6b7280',
                    fontSize: '0.9rem',
                    marginBottom: '16px',
                    fontWeight: 400
                }}>{subtitle}</p>
            )}

            <ul style={{ marginBottom: '20px', padding: 0, listStyle: 'none' }}>
                {bullets.map((bullet, idx) => (
                    <li key={idx} style={{
                        marginBottom: '12px',
                        color: '#374151',
                        fontSize: '1rem',
                        display: 'flex',
                        alignItems: 'center',
                        gap: '12px'
                    }}>
                        <span style={{
                            fontSize: '1.2rem',
                            color: isPrimary ? '#2563eb' : '#6b7280',
                            lineHeight: 1
                        }}>•</span>
                        {bullet}
                    </li>
                ))}
            </ul>

            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px' }}>
                {tags.map((tag, idx) => (
                    <span key={idx} style={{
                        fontFamily: 'inherit',
                        fontSize: '0.8rem',
                        color: '#374151',
                        padding: '6px 12px',
                        background: '#f3f4f6',
                        borderRadius: '20px',
                        fontWeight: 500,
                        border: '1px solid transparent',
                        cursor: 'default',
                        transition: 'background 0.2s ease',
                    }}
                        onMouseEnter={(e) => {
                            e.currentTarget.style.background = '#e5e7eb';
                        }}
                        onMouseLeave={(e) => {
                            e.currentTarget.style.background = '#f3f4f6';
                        }}
                    >
                        {tag}
                    </span>
                ))}
            </div>
        </motion.div>
    );
};

export default FeaturedServiceCard;
