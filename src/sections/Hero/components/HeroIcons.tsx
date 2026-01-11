import React from 'react';

export const ArrowUpRightIcon = () => (
    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M7 7l10 10M17 7v10H7" />
    </svg>
);

export const SparkleIcon = ({ className = "" }: { className?: string }) => (
    <svg className={`w-6 h-6 ${className}`} fill="currentColor" viewBox="0 0 24 24">
        <path d="M12 0l2.4 7.2L22 9.6l-7.6 2.4L12 24l-2.4-7.6L2 14l7.6-2.4L12 0z" />
    </svg>
);

export const CodeBrackets = ({ className = "" }: { className?: string }) => (
    <svg className={`w-5 h-5 ${className}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <polyline points="16 18 22 12 16 6" />
        <polyline points="8 6 2 12 8 18" />
    </svg>
);
