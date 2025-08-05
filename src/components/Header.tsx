import React from 'react';
import { motion } from 'framer-motion'; // 👈 Framer Motion

type ScrollHandlers = {
  home: () => void;
  about: () => void;
  resume: () => void;
  project: () => void;
  contact: () => void;
  service: () => void;
};

type Props = {
  onScrollTo: ScrollHandlers;
  activeSection: keyof ScrollHandlers;
};

const Header: React.FC<Props> = ({ onScrollTo, activeSection }) => {
  const navItems: { label: string; key: keyof ScrollHandlers }[] = [
    { label: 'Home', key: 'home' },
    { label: 'About', key: 'about' },
    { label: 'Service', key: 'service' },
    { label: 'Resume', key: 'resume' },
    { label: 'Project', key: 'project' },
    { label: 'Contact', key: 'contact' },
  ];

  return (
    <header className="fixed top-4 w-full flex justify-center z-50">
      <nav className="flex items-center px-6 py-2 bg-black rounded-full shadow-lg text-white gap-6 relative">
        {/* Left nav items */}
        {navItems.slice(0, 3).map((item) => (
          <div key={item.key} className="relative">
            {activeSection === item.key && (
              <motion.div
                layoutId="active-bg" // 👈 shared ID for smooth transition
                className="absolute inset-0 bg-orange-500 rounded-full z-0"
                transition={{ type: 'spring', stiffness: 500, damping: 30 }}
              />
            )}
            <button
              onClick={onScrollTo[item.key]}
              className="relative z-10 px-6 py-2 rounded-full font-medium"
            >
              {item.label}
            </button>
          </div>
        ))}

        {/* Center logo */}
        <div className="flex items-center px-4">
          <div className="w-8 h-8 bg-orange-500 text-white font-bold rounded-full flex items-center justify-center mr-2">
            GM
          </div>
          <span className="text-lg font-semibold">Gautam</span>
        </div>

        {/* Right nav items */}
        {navItems.slice(3).map((item) => (
          <div key={item.key} className="relative">
            {activeSection === item.key && (
              <motion.div
                layoutId="active-bg" // 👈 same ID for shared animation
                className="absolute inset-0 bg-orange-500 rounded-full z-0"
                transition={{ type: 'spring', stiffness: 500, damping: 30 }}
              />
            )}
            <button
              onClick={onScrollTo[item.key]}
              className="relative z-10 px-6 py-2 rounded-full font-medium"
            >
              {item.label}
            </button>
          </div>
        ))}
      </nav>
    </header>
  );
};

export default Header;
