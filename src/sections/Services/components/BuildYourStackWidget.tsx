import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Check, Wrench } from 'lucide-react';

const BuildYourStackWidget: React.FC = () => {
    const [selected, setSelected] = useState<string[]>([]);
    const [isHovered, setIsHovered] = useState(false);

    const options = [
        { id: 'angular', label: 'Angular Frontend (UI/UX)' },
        { id: 'node', label: 'Node.js API (Backend Logic)' },
        { id: 'mongo', label: 'MongoDB Database (Data Layer)' }
    ];

    const toggleOption = (id: string) => {
        if (selected.includes(id)) {
            setSelected(selected.filter(item => item !== id));
        } else {
            setSelected([...selected, id]);
        }
    };

    const handleSelectAll = () => {
        if (selected.length === 3) {
            setSelected([]);
        } else {
            setSelected(options.map(o => o.id));
        }
    };

    const isFullStack = selected.length === 3;

    return (
        <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8 }}
            style={{
                marginTop: '32px',
                background: '#ffffff',
                padding: '2rem',
                borderRadius: '12px',
                border: '1px solid #e5e7eb',
                boxShadow: isHovered ? '0 8px 25px rgba(0,0,0,0.12)' : '0 2px 8px rgba(0,0,0,0.08)',
                transition: 'all 0.3s ease'
            }}
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
        >
            <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '1rem' }}>
                <Wrench size={20} color="#6b7280" />
                <h3 style={{
                    color: '#1f2937',
                    fontSize: '1rem',
                    fontWeight: 700,
                    textTransform: 'uppercase',
                    letterSpacing: '1px'
                }}>
                    Builder Your Stack
                </h3>
            </div>

            <p style={{ color: '#6b7280', fontSize: '0.95rem', marginBottom: '1.5rem' }}>
                Which components do you need?
            </p>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '12px', marginBottom: '1.5rem' }}>
                {options.map(opt => (
                    <label
                        key={opt.id}
                        style={{
                            display: 'flex',
                            alignItems: 'center',
                            gap: '12px',
                            cursor: 'pointer',
                            color: '#374151',
                            fontSize: '0.95rem'
                        }}
                    >
                        <div
                            onClick={() => toggleOption(opt.id)}
                            style={{
                                width: '20px',
                                height: '20px',
                                borderRadius: '6px',
                                border: selected.includes(opt.id) ? '2px solid #2563eb' : '2px solid #d1d5db',
                                background: selected.includes(opt.id) ? '#2563eb' : 'transparent',
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'center',
                                transition: 'all 0.2s ease',
                                flexShrink: 0
                            }}
                        >
                            {selected.includes(opt.id) && (
                                <Check size={14} strokeWidth={3} color="white" />
                            )}
                        </div>
                        {opt.label}
                    </label>
                ))}

                <label
                    style={{
                        display: 'flex',
                        alignItems: 'center',
                        gap: '12px',
                        cursor: 'pointer',
                        color: isFullStack ? '#2563eb' : '#6b7280',
                        fontWeight: isFullStack ? 600 : 400,
                        fontSize: '0.95rem',
                        marginTop: '0.5rem'
                    }}
                >
                    <div
                        onClick={handleSelectAll}
                        style={{
                            width: '20px',
                            height: '20px',
                            borderRadius: '6px',
                            border: isFullStack ? '2px solid #2563eb' : '2px solid #d1d5db',
                            background: isFullStack ? '#2563eb' : 'transparent',
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            transition: 'all 0.2s ease',
                            flexShrink: 0
                        }}
                    >
                        {isFullStack && (
                            <Check size={14} strokeWidth={3} color="white" />
                        )}
                    </div>
                    All Three (Full MEAN Stack)
                </label>
            </div>

            <div style={{
                paddingTop: '1.5rem',
                borderTop: '1px solid #e5e7eb',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between'
            }}>
                <span style={{ color: '#1f2937', fontWeight: 600, fontSize: '0.95rem' }}>
                    Let's build it together
                </span>
                <button style={{
                    color: '#2563eb',
                    background: 'none',
                    border: 'none',
                    fontWeight: 600,
                    cursor: 'pointer',
                    fontSize: '1rem',
                    display: 'flex',
                    alignItems: 'center',
                    gap: '4px'
                }}>
                    →
                </button>
            </div>
        </motion.div>
    );
};

export default BuildYourStackWidget;
