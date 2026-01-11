import React, { useState } from 'react';
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
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const navItems: { label: string; key: keyof ScrollHandlers }[] = [
    { label: 'Home', key: 'home' },
    { label: 'About', key: 'about' },
    { label: 'Service', key: 'service' },
    { label: 'Resume', key: 'resume' },
    { label: 'Project', key: 'project' },
    { label: 'Contact', key: 'contact' },
  ];

  const handleNavClick = (key: keyof ScrollHandlers) => {
    onScrollTo[key]();
    setIsMobileMenuOpen(false);
  };

  return (
    <motion.header
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className="fixed top-4 w-full flex justify-center z-50 px-4"
    >
      <motion.nav
        initial={{ scale: 0.9 }}
        animate={{ scale: 1 }}
        transition={{ duration: 0.5, delay: 0.1 }}
        className="flex items-center px-4 py-3 bg-black/90 backdrop-blur-md rounded-full shadow-2xl text-white gap-2 relative border border-white/10"
      >
        {/* Mobile Hamburger Menu Button */}
        <motion.button
          whileTap={{ scale: 0.95 }}
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          className="md:hidden flex flex-col justify-center items-center w-8 h-8 gap-1.5 relative z-50"
          aria-label="Toggle menu"
        >
          <motion.span
            animate={isMobileMenuOpen ? { rotate: 45, y: 6 } : { rotate: 0, y: 0 }}
            className="w-5 h-0.5 bg-white rounded-full transition-all"
          />
          <motion.span
            animate={isMobileMenuOpen ? { opacity: 0 } : { opacity: 1 }}
            className="w-5 h-0.5 bg-white rounded-full transition-all"
          />
          <motion.span
            animate={isMobileMenuOpen ? { rotate: -45, y: -6 } : { rotate: 0, y: 0 }}
            className="w-5 h-0.5 bg-white rounded-full transition-all"
          />
        </motion.button>

        {/* Left nav items - Hidden on mobile */}
        <div className="hidden md:flex items-center gap-1">
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
                  layoutId="activeNavBackground"
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
                onClick={() => handleNavClick(item.key)}
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
          className="flex items-center px-4 md:px-6 py-1 mx-2 relative"
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

          {/* Decorative dots - Hidden on mobile */}
          <div className="absolute -left-2 top-1/2 transform -translate-y-1/2 w-1 h-1 bg-orange-400 rounded-full hidden md:block"></div>
          <div className="absolute -right-2 top-1/2 transform -translate-y-1/2 w-1 h-1 bg-orange-400 rounded-full hidden md:block"></div>
        </motion.div>

        {/* Right nav items - Hidden on mobile */}
        <div className="hidden md:flex items-center gap-1">
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
                  layoutId="activeNavBackground"
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
                onClick={() => handleNavClick(item.key)}
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

      {/* Mobile Dropdown Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -20, scale: 0.95 }}
            transition={{ duration: 0.2 }}
            className="md:hidden absolute top-20 left-4 right-4 bg-black/95 backdrop-blur-xl rounded-2xl shadow-2xl border border-white/10 overflow-hidden z-40"
          >
            <div className="py-4">
              {navItems.map((item, index) => (
                <motion.button
                  key={item.key}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.05 }}
                  onClick={() => handleNavClick(item.key)}
                  className={`
                    w-full px-6 py-4 text-left font-medium text-base transition-all duration-200 flex items-center gap-3
                    ${activeSection === item.key
                      ? 'text-orange-500 bg-orange-500/10'
                      : 'text-gray-300 hover:text-white hover:bg-white/5'
                    }
                  `}
                >
                  {activeSection === item.key && (
                    <motion.div
                      layoutId="mobileActiveIndicator"
                      className="w-1 h-6 bg-orange-500 rounded-full"
                    />
                  )}
                  <span className={activeSection === item.key ? '' : 'ml-4'}>{item.label}</span>
                </motion.button>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
};

export default Header;

