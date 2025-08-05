import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';

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

  // Debug: Add console.log to check activeSection
  console.log('Current active section:', activeSection);

  return (
    <motion.header
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className="fixed top-4 w-full flex justify-center z-50"
    >
      <motion.nav
        initial={{ scale: 0.9 }}
        animate={{ scale: 1 }}
        transition={{ duration: 0.5, delay: 0.1 }}
        className="flex items-center px-4 py-3 bg-black/90 backdrop-blur-md rounded-full shadow-2xl text-white gap-2 relative border border-white/10"
      >
        {/* Left nav items */}
        <div className="flex items-center gap-1">
          {navItems.slice(0, 3).map((item, index) => (
            <motion.div
              key={item.key}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              className="relative"
            >
              {/* Active background - Fixed with unique layoutId per section */}
              {activeSection === item.key && (
                <motion.div
                  layoutId="activeNavBackground" // Single layoutId for smooth transition
                  className="absolute inset-0 bg-gradient-to-r from-orange-500 to-orange-600 rounded-full shadow-lg"
                  initial={false}
                  transition={{
                    type: "spring",
                    stiffness: 500,
                    damping: 30
                  }}
                />
              )}

              <motion.button
                onClick={() => {
                  console.log('Clicked:', item.key); // Debug log
                  onScrollTo[item.key]();
                }}
                whileHover={{ 
                  scale: activeSection === item.key ? 1 : 1.05,
                  transition: { duration: 0.2 }
                }}
                whileTap={{ scale: 0.98 }}
                className={`
                  relative z-10 px-4 py-2 rounded-full font-medium text-sm transition-all duration-200
                  ${activeSection === item.key 
                    ? 'text-white shadow-lg' 
                    : 'text-gray-300 hover:text-white hover:bg-white/10'
                  }
                `}
              >
                {item.label}
              </motion.button>
            </motion.div>
          ))}
        </div>

        {/* Center logo */}
        <motion.div
          initial={{ opacity: 0, scale: 0 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, delay: 0.3, type: "spring", stiffness: 300 }}
          className="flex items-center px-6 py-1 mx-2 relative"
        >
          <motion.div
            whileHover={{ rotate: 360, scale: 1.1 }}
            transition={{ duration: 0.6 }}
            className="w-10 h-10 bg-gradient-to-r from-orange-500 to-orange-600 text-white font-bold rounded-full flex items-center justify-center mr-3 shadow-lg"
          >
            GM
          </motion.div>
          <div className="flex flex-col">
            <span className="text-lg font-bold">Gautam</span>
            <span className="text-xs text-gray-400">Developer</span>
          </div>
          
          {/* Decorative dots */}
          <div className="absolute -left-2 top-1/2 transform -translate-y-1/2 w-1 h-1 bg-orange-400 rounded-full"></div>
          <div className="absolute -right-2 top-1/2 transform -translate-y-1/2 w-1 h-1 bg-orange-400 rounded-full"></div>
        </motion.div>

        {/* Right nav items */}
        <div className="flex items-center gap-1">
          {navItems.slice(3).map((item, index) => (
            <motion.div
              key={item.key}
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.4, delay: (index + 3) * 0.1 }}
              className="relative"
            >
              {/* Active background - Same layoutId for smooth transition */}
              {activeSection === item.key && (
                <motion.div
                  layoutId="activeNavBackground" // Same layoutId as left items
                  className="absolute inset-0 bg-gradient-to-r from-orange-500 to-orange-600 rounded-full shadow-lg"
                  initial={false}
                  transition={{
                    type: "spring",
                    stiffness: 500,
                    damping: 30
                  }}
                />
              )}

              <motion.button
                onClick={() => {
                  console.log('Clicked:', item.key); // Debug log
                  onScrollTo[item.key]();
                }}
                whileHover={{ 
                  scale: activeSection === item.key ? 1 : 1.05,
                  transition: { duration: 0.2 }
                }}
                whileTap={{ scale: 0.98 }}
                className={`
                  relative z-10 px-4 py-2 rounded-full font-medium text-sm transition-all duration-200
                  ${activeSection === item.key 
                    ? 'text-white shadow-lg' 
                    : 'text-gray-300 hover:text-white hover:bg-white/10'
                  }
                `}
              >
                {item.label}
              </motion.button>
            </motion.div>
          ))}
        </div>

        {/* Background glow effect */}
        <motion.div
          animate={{
            boxShadow: [
              '0 0 20px rgba(255, 102, 0, 0.3)',
              '0 0 30px rgba(255, 102, 0, 0.5)',
              '0 0 20px rgba(255, 102, 0, 0.3)'
            ]
          }}
          transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
          className="absolute inset-0 rounded-full pointer-events-none"
        />
      </motion.nav>
    </motion.header>
  );
};

export default Header;
