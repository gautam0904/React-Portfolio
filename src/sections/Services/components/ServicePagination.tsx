import React from 'react';
import { motion } from 'framer-motion';

interface ServicePaginationProps {
    currentPage: number;
    totalPages: number;
    onPrevPage: () => void;
    onNextPage: () => void;
    onGoToPage: (page: number) => void;
    servicesCount: number;
}

const ServicePagination: React.FC<ServicePaginationProps> = ({
    currentPage,
    totalPages,
    onPrevPage,
    onNextPage,
    onGoToPage,
    servicesCount
}) => {
    return (
        <>
            <motion.div
                style={{
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                    gap: '2rem',
                    marginTop: '4rem'
                }}
            >
                <button
                    onClick={onPrevPage}
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

                <div style={{
                    display: 'flex',
                    gap: '1rem'
                }}>
                    {Array.from({ length: totalPages }, (_, i) => i).map((page) => (
                        <motion.div
                            key={page}
                            onClick={() => onGoToPage(page)}
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

                <button
                    onClick={onNextPage}
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

            <motion.div
                style={{
                    textAlign: 'center',
                    marginTop: '2rem',
                    color: '#cccccc',
                    fontSize: '1rem'
                }}
            >
                Page {currentPage + 1} of {totalPages} • Showing {servicesCount} services
            </motion.div>
        </>
    );
};

export default ServicePagination;
