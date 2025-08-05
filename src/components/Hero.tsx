import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import purpleIcon from '../assets/purple.svg';
import gautam from '../assets/gautam.png';
import helloIcon from '../assets/HelloIcon.svg';

interface TypewriterProps {
  text: string;
  speed?: number;
  pauseDuration?: number;
  className?: string;
}

const InfiniteTypewriter: React.FC<TypewriterProps> = ({
  text,
  speed = 100,
  pauseDuration = 2000,
  className = ""
}) => {
  const [displayText, setDisplayText] = useState<string>('');
  const [currentIndex, setCurrentIndex] = useState<number>(0);
  const [isDeleting, setIsDeleting] = useState<boolean>(false);

  useEffect(() => {
    const timeout = setTimeout(() => {
      if (!isDeleting && currentIndex < text.length) {
        setDisplayText(prev => prev + text[currentIndex]);
        setCurrentIndex(prev => prev + 1);
      } else if (!isDeleting && currentIndex === text.length) {
        setTimeout(() => setIsDeleting(true), pauseDuration);
      } else if (isDeleting && displayText.length > 0) {
        setDisplayText(prev => prev.slice(0, -1));
      } else if (isDeleting && displayText.length === 0) {
        setIsDeleting(false);
        setCurrentIndex(0);
      }
    }, isDeleting ? speed / 2 : speed);

    return () => clearTimeout(timeout);
  }, [currentIndex, isDeleting, displayText, text, speed, pauseDuration]);

  return (
    <span className={`inline-block ${className}`}>
      {displayText}
      <motion.span
        animate={{ opacity: [1, 0, 1] }}
        transition={{ duration: 1.2, repeat: Infinity, ease: "easeInOut" }}
        className="border-r-3 border-orange-500 ml-1 shadow-sm"
      >
        |
      </motion.span>
    </span>
  );
};

// Enhanced Notification Component
const NotificationToast = ({ message, type = 'success', onClose }: { 
  message: string; 
  type?: 'success' | 'error' | 'info'; 
  onClose: () => void 
}) => {
  useEffect(() => {
    const timer = setTimeout(onClose, 4000);
    return () => clearTimeout(timer);
  }, [onClose]);

  const bgColors = {
    success: 'bg-green-500',
    error: 'bg-red-500',
    info: 'bg-blue-500'
  };

  const icons = {
    success: (
      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
      </svg>
    ),
    error: (
      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
      </svg>
    ),
    info: (
      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    )
  };

  return (
    <motion.div
      initial={{ opacity: 0, x: 300, scale: 0.8 }}
      animate={{ opacity: 1, x: 0, scale: 1 }}
      exit={{ opacity: 0, x: 300, scale: 0.8 }}
      className={`fixed top-4 right-4 ${bgColors[type]} text-white px-6 py-4 rounded-lg shadow-2xl flex items-center gap-3 min-w-[300px] z-[9999]`}
    >
      <div className="flex-shrink-0">
        {icons[type]}
      </div>
      <div className="flex-1">
        <p className="font-medium">{message}</p>
      </div>
      <button
        onClick={onClose}
        className="flex-shrink-0 ml-2 hover:bg-white/20 rounded-full p-1 transition-colors"
      >
        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
        </svg>
      </button>
    </motion.div>
  );
};

// Enhanced icons with better styling
const ArrowUpRightIcon = () => (
  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M7 7l10 10M17 7v10H7" />
  </svg>
);

const SparkleIcon = ({ className = "" }) => (
  <svg className={`w-6 h-6 ${className}`} fill="currentColor" viewBox="0 0 24 24">
    <path d="M12 0l2.4 7.2L22 9.6l-7.6 2.4L12 24l-2.4-7.6L2 14l7.6-2.4L12 0z"/>
  </svg>
);

const CodeBrackets = ({ className = "" }) => (
  <svg className={`w-5 h-5 ${className}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <polyline points="16 18 22 12 16 6" />
    <polyline points="8 6 2 12 8 18" />
  </svg>
);

// Loading Spinner Component
const LoadingSpinner = () => (
  <motion.div
    animate={{ rotate: 360 }}
    transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
    className="w-5 h-5 border-2 border-white border-t-transparent rounded-full"
  />
);

const Hero = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isHireModalOpen, setIsHireModalOpen] = useState(false);
  const [isContactFormOpen, setIsContactFormOpen] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [notification, setNotification] = useState<{
    message: string;
    type: 'success' | 'error' | 'info';
  } | null>(null);
  
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    project: '',
    budget: '',
    message: ''
  });

  // Enhanced notification system
  const showNotification = (message: string, type: 'success' | 'error' | 'info' = 'success') => {
    setNotification({ message, type });
  };

  // Send notification to admin (you can customize this)
  const sendNotificationToAdmin = async (formData: any) => {
    // Option 1: Email notification via EmailJS
    try {
      // Example with EmailJS
      const emailjsConfig = {
        serviceID: 'your_service_id',
        templateID: 'admin_notification_template',
        userID: 'your_user_id'
      };
      
      // You can implement EmailJS here
      console.log('Sending admin notification:', formData);
      
      // Option 2: Browser notification (if user granted permission)
      if ('Notification' in window && Notification.permission === 'granted') {
        new Notification('New Project Inquiry', {
          body: `New inquiry from ${formData.name} - ${formData.project}`,
          icon: '/favicon.ico',
          badge: '/favicon.ico'
        });
      }
      
      // Option 3: Send to backend API
      // await fetch('/api/notifications', {
      //   method: 'POST',
      //   headers: { 'Content-Type': 'application/json' },
      //   body: JSON.stringify({ type: 'new_inquiry', data: formData })
      // });
      
    } catch (error) {
      console.error('Error sending admin notification:', error);
    }
  };

  // Request notification permission on component mount
  useEffect(() => {
    if ('Notification' in window && Notification.permission === 'default') {
      Notification.requestPermission();
    }
  }, []);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ 
        x: (e.clientX / window.innerWidth) * 100,
        y: (e.clientY / window.innerHeight) * 100 
      });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  // Handle hire me button actions
  const handleHireMe = () => {
    setIsHireModalOpen(true);
    // Prevent body scroll when modal is open
    document.body.style.overflow = 'hidden';
  };

  // Handle portfolio button actions
  const handlePortfolio = () => {
    const projectsSection = document.getElementById('projects');
    if (projectsSection) {
      projectsSection.scrollIntoView({ behavior: 'smooth' });
    } else {
      showNotification('Projects section coming soon!', 'info');
    }
  };

  // Close modals and restore scrolling
  const closeModals = () => {
    setIsHireModalOpen(false);
    setIsContactFormOpen(false);
    document.body.style.overflow = 'unset';
  };

  // Enhanced form submission with validation and notifications
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    
    try {
      // Validate form data
      if (!formData.name.trim() || !formData.email.trim() || !formData.message.trim()) {
        throw new Error('Please fill in all required fields');
      }

      // Email validation
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailRegex.test(formData.email)) {
        throw new Error('Please enter a valid email address');
      }

      // Simulate API call delay
      await new Promise(resolve => setTimeout(resolve, 1500));

      // Here you can implement different submission methods:
      
      // Method 1: EmailJS
      // await emailjs.send('service_id', 'template_id', formData, 'user_id');
      
      // Method 2: Your backend API
      // await fetch('/api/contact', {
      //   method: 'POST',
      //   headers: { 'Content-Type': 'application/json' },
      //   body: JSON.stringify(formData)
      // });
      
      // Method 3: Direct mailto (fallback)
      const mailtoLink = `mailto:gautam@example.com?subject=Project Inquiry from ${formData.name}&body=${encodeURIComponent(`
Name: ${formData.name}
Email: ${formData.email}
Company: ${formData.company}
Project Type: ${formData.project}
Budget: ${formData.budget}
Message: ${formData.message}
      `)}`;
      
      console.log('Form submitted:', formData);
      
      // Send notification to admin
      await sendNotificationToAdmin(formData);
      
      // Reset form and close modal
      setFormData({
        name: '',
        email: '',
        company: '',
        project: '',
        budget: '',
        message: ''
      });
      
      closeModals();
      showNotification('Thank you! Your inquiry has been sent successfully. I\'ll get back to you soon!', 'success');
      
    } catch (error: any) {
      console.error('Error submitting form:', error);
      showNotification(error.message || 'Something went wrong. Please try again.', 'error');
    } finally {
      setIsLoading(false);
    }
  };

  // Enhanced input handler with real-time validation
  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
    
    // Real-time email validation
    if (field === 'email' && value) {
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      const emailInput = document.querySelector(`input[name="email"]`) as HTMLInputElement;
      if (emailInput) {
        emailInput.style.borderColor = emailRegex.test(value) ? '#10b981' : '#ef4444';
      }
    }
  };

  return (
    <section className="w-full min-h-screen relative overflow-hidden">
      {/* Notification Toast */}
      <AnimatePresence>
        {notification && (
          <NotificationToast
            message={notification.message}
            type={notification.type}
            onClose={() => setNotification(null)}
          />
        )}
      </AnimatePresence>

      {/* Enhanced Dynamic Background */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {/* Improved gradient background with subtle animation */}
        <motion.div
          animate={{
            background: [
              'linear-gradient(135deg, #f8fafc 0%, #ffffff 50%, #fef3e2 100%)',
              'linear-gradient(135deg, #f1f5f9 0%, #ffffff 50%, #fff7ed 100%)',
              'linear-gradient(135deg, #f8fafc 0%, #ffffff 50%, #fef3e2 100%)'
            ]
          }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
          className="absolute inset-0"
        />
        
        {/* Enhanced floating orbs with better movement */}
        <motion.div
          animate={{
            scale: [1, 1.3, 1.1, 1],
            opacity: [0.4, 0.7, 0.5, 0.4],
            x: [0, 30, -20, 0],
            y: [0, -40, 20, 0],
          }}
          transition={{ 
            duration: 12, 
            repeat: Infinity, 
            ease: "easeInOut",
            times: [0, 0.3, 0.7, 1]
          }}
          className="absolute top-1/4 left-1/4 w-72 h-72 bg-gradient-to-br from-orange-200/30 via-pink-200/20 to-purple-200/25 rounded-full blur-2xl"
        />
        
        <motion.div
          animate={{
            scale: [1, 0.8, 1.2, 1],
            opacity: [0.3, 0.6, 0.4, 0.3],
            x: [0, -40, 30, 0],
            y: [0, 30, -25, 0],
          }}
          transition={{ 
            duration: 15, 
            repeat: Infinity, 
            ease: "easeInOut",
            times: [0, 0.4, 0.8, 1]
          }}
          className="absolute bottom-1/3 right-1/4 w-80 h-80 bg-gradient-to-tl from-blue-200/25 via-indigo-200/20 to-cyan-200/30 rounded-full blur-3xl"
        />

        {/* Enhanced geometric patterns */}
        <motion.div
          animate={{ rotate: [0, 360] }}
          transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
          className="absolute top-1/3 right-1/3 w-32 h-32 opacity-5"
        >
          <div className="w-full h-full border-2 border-orange-300 rounded-lg transform rotate-45" />
        </motion.div>

        {/* Improved floating particles */}
        {Array.from({ length: 8 }).map((_, i) => (
          <motion.div
            key={i}
            animate={{
              y: [0, -60, -30, 0],
              x: [0, Math.sin(i) * 40, Math.cos(i) * 20, 0],
              opacity: [0.2, 0.8, 0.5, 0.2],
              scale: [0.5, 1.2, 0.8, 0.5]
            }}
            transition={{
              duration: 6 + i * 0.8,
              repeat: Infinity,
              delay: i * 0.5,
              ease: "easeInOut"
            }}
            className="absolute"
            style={{
              left: `${15 + (i * 10)}%`,
              top: `${20 + (i * 8)}%`,
              width: '8px',
              height: '8px'
            }}
          >
            <div className="w-full h-full bg-gradient-to-r from-orange-400/60 to-pink-400/60 rounded-full shadow-lg" />
          </motion.div>
        ))}

        {/* Enhanced grid with parallax effect */}
        <motion.div 
          style={{
            transform: `translate(${mousePosition.x * 0.1}px, ${mousePosition.y * 0.1}px)`
          }}
          className="absolute inset-0 opacity-[0.03]"
        >
          <div 
            style={{
              backgroundImage: `
                radial-gradient(circle at 2px 2px, rgba(0,0,0,0.15) 1px, transparent 0)
              `,
              backgroundSize: '80px 80px'
            }}
            className="w-full h-full"
          />
        </motion.div>
      </div>

      <div className="flex flex-col lg:flex-row items-center justify-between min-h-screen px-6 lg:px-16 py-12 relative z-10 max-w-7xl mx-auto">
        
        {/* LEFT TESTIMONIAL - Enhanced with better effects */}
        <motion.div
          initial={{ opacity: 0, x: -60, rotateY: -15 }}
          animate={{ opacity: 1, x: 0, rotateY: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="w-full lg:w-1/3 mb-12 lg:mb-0"
        >
          <motion.div
            whileHover={{ 
              scale: 1.02,
              rotateY: 5,
              transition: { duration: 0.3 }
            }}
            className="relative group"
          >
            {/* Enhanced quote decoration with glow */}
            <motion.div
              animate={{ 
                boxShadow: [
                  '0 0 20px rgba(255, 102, 0, 0.3)',
                  '0 0 40px rgba(255, 102, 0, 0.5)',
                  '0 0 20px rgba(255, 102, 0, 0.3)'
                ]
              }}
              transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
              className="absolute -top-6 -left-6 w-16 h-16 bg-gradient-to-br from-orange-400 via-orange-500 to-orange-600 rounded-2xl flex items-center justify-center shadow-xl transform rotate-12 group-hover:rotate-0 transition-transform duration-300"
            >
              <span className="text-white text-2xl font-bold">"</span>
            </motion.div>
            
            <div className="bg-white/80 backdrop-blur-xl border border-white/60 rounded-2xl p-8 shadow-2xl relative overflow-hidden group-hover:shadow-3xl transition-all duration-300">
              {/* Animated background gradient */}
              <motion.div
                animate={{
                  background: [
                    'linear-gradient(135deg, transparent 0%, rgba(255, 102, 0, 0.02) 50%, transparent 100%)',
                    'linear-gradient(135deg, rgba(255, 102, 0, 0.02) 0%, transparent 50%, rgba(255, 102, 0, 0.02) 100%)',
                    'linear-gradient(135deg, transparent 0%, rgba(255, 102, 0, 0.02) 50%, transparent 100%)'
                  ]
                }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                className="absolute inset-0 rounded-2xl"
              />
              
              <div className="relative z-10">
                <p className="text-lg lg:text-xl font-medium text-slate-800 leading-relaxed mb-4">
                  Gautam's software development skills transformed our vision into a 
                  <span className="text-orange-600 font-semibold bg-orange-50 px-1 rounded"> fast, modern, and reliable </span>
                  web application.
                </p>
                <div className="flex items-center gap-3">
                  <div className="flex">
                    {Array(5).fill(0).map((_, i) => (
                      <motion.span
                        key={i}
                        initial={{ opacity: 0, scale: 0, rotate: -180 }}
                        animate={{ opacity: 1, scale: 1, rotate: 0 }}
                        transition={{ 
                          delay: i * 0.1, 
                          type: "spring", 
                          stiffness: 300,
                          damping: 15
                        }}
                        className="text-orange-400 text-lg drop-shadow-sm"
                      >
                        ★
                      </motion.span>
                    ))}
                  </div>
                  <motion.span
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.8, duration: 0.5 }}
                    className="text-orange-600 font-bold text-sm bg-gradient-to-r from-orange-50 to-orange-100 px-3 py-1 rounded-full border border-orange-200"
                  >
                    Highly Recommended
                  </motion.span>
                </div>
              </div>
            </div>
          </motion.div>
        </motion.div>

        {/* CENTER MAIN CONTENT - Enhanced with sophisticated effects */}
        <motion.div
          initial={{ opacity: 0, y: 40, scale: 0.95 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
          className="w-full lg:w-1/3 text-center relative"
        >
          {/* Enhanced Hello badge with morphing effect */}
          <motion.div
            initial={{ opacity: 0, scale: 0.5, rotateX: -90 }}
            animate={{ opacity: 1, scale: 1, rotateX: 0 }}
            transition={{ delay: 0.4, type: "spring", stiffness: 300 }}
            className="relative inline-flex items-center gap-2 mb-8"
          >
            <motion.div
              whileHover={{ scale: 1.05, rotateZ: 5 }}
              className="flex items-center gap-3 px-5 py-3 bg-white/90 backdrop-blur-xl border-2 border-gray-200/80 text-slate-800 rounded-full text-sm font-medium shadow-xl hover:shadow-2xl transition-all duration-300 relative overflow-hidden group"
            >
              {/* Animated background on hover */}
              <div className="absolute inset-0 bg-gradient-to-r from-orange-400/10 via-pink-400/10 to-purple-400/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              
              <motion.span
                animate={{ 
                  rotate: [0, 20, -20, 0],
                  scale: [1, 1.2, 1]
                }}
                transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                className="text-lg"
              >
                👋
              </motion.span>
              <span className="relative z-10">Hello!</span>
              
              {/* Sparkle decorations */}
              <motion.div
                animate={{ 
                  rotate: [0, 360],
                  scale: [0.8, 1.2, 0.8]
                }}
                transition={{ 
                  duration: 4, 
                  repeat: Infinity, 
                  ease: "easeInOut"
                }}
                className="absolute -top-2 -right-2 text-orange-400"
              >
                <SparkleIcon className="w-4 h-4" />
              </motion.div>
            </motion.div>
          </motion.div>

          {/* Enhanced Title with advanced text effects */}
          <div className="relative mb-10">
            <motion.h1
              initial={{ opacity: 0, y: 30, letterSpacing: '0.1em' }}
              animate={{ opacity: 1, y: 0, letterSpacing: '0em' }}
              transition={{ delay: 0.6, duration: 0.8, ease: "easeOut" }}
              className="text-5xl lg:text-6xl font-bold mb-3 relative"
            >
              <span className="bg-gradient-to-r from-slate-800 via-slate-700 to-slate-800 bg-clip-text text-transparent">
                I'm 
              </span>
              <motion.span
                animate={{
                  backgroundPosition: ['0% 50%', '100% 50%', '0% 50%']
                }}
                transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
                className="bg-gradient-to-r from-orange-500 via-orange-600 to-orange-500 bg-clip-text text-transparent ml-3"
                style={{ backgroundSize: '200% 200%' }}
              >
                Gautam
              </motion.span>
              <span className="text-slate-800">,</span>
            </motion.h1>
            
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8, duration: 0.8 }}
              className="relative"
            >
              <InfiniteTypewriter
                text="Software Developer"
                speed={120}
                pauseDuration={3000}
                className="text-4xl lg:text-5xl font-bold bg-gradient-to-r from-slate-700 via-slate-600 to-slate-700 bg-clip-text text-transparent"
              />
              
              {/* Animated code brackets */}
              <motion.div
                animate={{ 
                  x: [0, 5, -5, 0],
                  opacity: [0.5, 1, 0.5]
                }}
                transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
                className="absolute -right-10 top-2 text-orange-400/70"
              >
                <CodeBrackets />
              </motion.div>
            </motion.div>

            {/* Enhanced accent line with wave animation */}
            <motion.div
              initial={{ scaleX: 0, originX: 0.5 }}
              animate={{ scaleX: 1 }}
              transition={{ delay: 1.2, duration: 1, ease: "easeOut" }}
              className="absolute -bottom-3 left-1/2 transform -translate-x-1/2 h-1 bg-gradient-to-r from-transparent via-orange-500 to-transparent rounded-full overflow-hidden"
              style={{ width: '120px' }}
            >
              <motion.div
                animate={{ x: ['-100%', '100%'] }}
                transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                className="w-full h-full bg-gradient-to-r from-transparent via-white/80 to-transparent"
              />
            </motion.div>
          </div>

          {/* Enhanced Person Image Container with advanced effects */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8, rotateY: -20 }}
            animate={{ opacity: 1, scale: 1, rotateY: 0 }}
            transition={{ delay: 1, duration: 0.8, ease: "easeOut" }}
            className="relative w-80 mx-auto group"
          >
            {/* Multi-layered background with animation */}
            <motion.div
              animate={{
                scale: [1, 1.1, 1],
                rotate: [0, 5, -5, 0]
              }}
              transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
              className="absolute inset-0 bg-gradient-to-br from-orange-200/40 via-pink-200/30 to-purple-200/40 rounded-full blur-xl transform scale-110"
            />
            
            <motion.div
              animate={{
                scale: [1, 0.9, 1.1, 1],
                opacity: [0.3, 0.6, 0.3]
              }}
              transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
              className="absolute inset-0 bg-gradient-to-tl from-blue-200/30 via-indigo-200/25 to-cyan-200/35 rounded-full blur-2xl transform scale-105"
            />
            
            {/* Enhanced Person Image with hover effects */}
            <motion.div
              whileHover={{ 
                scale: 1.05,
                rotateY: 10,
                transition: { duration: 0.3 }
              }}
              className="relative z-10 group"
            >
              <img
                src={gautam}
                alt="Gautam"
                className="w-full h-auto object-cover rounded-full shadow-2xl border-4 border-white/80 group-hover:border-orange-200/80 transition-all duration-300"
              />
              
              {/* Glowing ring effect on hover */}
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                whileHover={{ opacity: 1, scale: 1.1 }}
                className="absolute inset-0 rounded-full border-2 border-orange-400/50 shadow-lg shadow-orange-400/25"
              />
            </motion.div>

            {/* Enhanced Glassmorphism Buttons with advanced effects */}
            <motion.div
              initial={{ opacity: 0, y: 30, scale: 0.8 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              transition={{ delay: 1.4, duration: 0.6, ease: "easeOut" }}
              className="absolute -bottom-8 left-1/2 transform -translate-x-1/2 z-20"
            >
              <motion.div
                whileHover={{ scale: 1.02, y: -2 }}
                className="flex bg-white/25 backdrop-blur-2xl border border-white/40 rounded-full shadow-2xl p-1 hover:shadow-3xl transition-all duration-300 relative overflow-hidden"
              >
                {/* Portfolio Button with Navigation */}
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.98 }}
                  onClick={handlePortfolio}
                  className="flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-orange-500 via-orange-600 to-orange-500 text-white font-semibold rounded-full transition-all duration-300 shadow-lg hover:shadow-xl relative overflow-hidden group"
                >
                  <span className="relative z-10">Portfolio</span>
                  <motion.div
                    whileHover={{ rotate: 45, scale: 1.1 }}
                    transition={{ duration: 0.3 }}
                    className="relative z-10"
                  >
                    <ArrowUpRightIcon />
                  </motion.div>
                  
                  {/* Shimmer effect */}
                  <motion.div
                    animate={{ x: ['-100%', '100%'] }}
                    transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                    className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent transform skew-x-12"
                  />
                </motion.button>

                {/* Hire Me Button with Multiple Action Options */}
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.98 }}
                  onClick={handleHireMe}
                  className="px-6 py-3 text-slate-700 font-semibold transition-all duration-300 rounded-full relative overflow-hidden group hover:text-white"
                >
                  <span className="relative z-10 transition-colors duration-300">
                    Hire me
                  </span>
                  <motion.div
                    initial={{ scale: 0, opacity: 0 }}
                    whileHover={{ scale: 1, opacity: 1 }}
                    transition={{ type: "spring", stiffness: 300, damping: 20 }}
                    className="absolute inset-0 bg-gradient-to-r from-slate-700 via-slate-800 to-slate-700 rounded-full"
                  />
                </motion.button>
              </motion.div>
            </motion.div>

            {/* Enhanced floating skill badges with better physics */}
            <motion.div
              animate={{ 
                y: [0, -15, 0],
                rotate: [0, 3, -3, 0]
              }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
              className="absolute -top-6 -left-12 bg-white/90 backdrop-blur-sm border border-orange-200/50 rounded-xl px-4 py-2 text-sm font-semibold text-slate-700 shadow-lg hover:shadow-xl transition-all duration-300 cursor-default"
            >
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 bg-orange-400 rounded-full animate-pulse" />
                React
              </div>
            </motion.div>
            
            <motion.div
              animate={{ 
                y: [0, -12, 0],
                rotate: [0, -2, 2, 0]
              }}
              transition={{ duration: 3.5, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
              className="absolute top-32 -right-32 bg-white/90 backdrop-blur-sm border border-blue-200/50 rounded-xl px-4 py-2 text-sm font-semibold text-slate-700 shadow-lg hover:shadow-xl transition-all duration-300 cursor-default"
            >
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 bg-blue-400 rounded-full animate-pulse" />
                Node.js
              </div>
            </motion.div>

            <motion.div
              animate={{ 
                y: [0, -21, 0],
                rotate: [0, -22, 22, 0]
              }}
              transition={{ duration: 3.5, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
              className="absolute top-70 -right-100 bg-white/90 backdrop-blur-sm border border-blue-200/50 rounded-xl px-4 py-2 text-sm font-semibold text-slate-700 shadow-lg hover:shadow-xl transition-all duration-300 cursor-default"
            >
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 bg-blue-400 rounded-full animate-pulse" />
                Angular
              </div>
            </motion.div>
            
            <motion.div
              animate={{ 
                y: [0, -18, 0],
                rotate: [0, 4, -4, 0]
              }}
              transition={{ duration: 4.5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
              className="absolute -bottom-24 -right-12 bg-white/90 backdrop-blur-sm border border-purple-200/50 rounded-xl px-4 py-2 text-sm font-semibold text-slate-700 shadow-lg hover:shadow-xl transition-all duration-300 cursor-default"
            >
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 bg-purple-400 rounded-full animate-pulse" />
                Full Stack
              </div>
            </motion.div>
          </motion.div>
        </motion.div>

        {/* RIGHT EXPERIENCE - Enhanced with premium effects */}
        <motion.div
          initial={{ opacity: 0, x: 60, rotateY: 15 }}
          animate={{ opacity: 1, x: 0, rotateY: 0 }}
          transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
          className="w-full lg:w-1/3 text-center lg:text-right mt-12 lg:mt-0"
        >
          <motion.div
            whileHover={{ 
              scale: 1.02,
              rotateY: -5,
              transition: { duration: 0.3 }
            }}
            className="bg-white/80 backdrop-blur-xl border border-white/60 rounded-2xl p-8 shadow-2xl relative overflow-hidden group hover:shadow-3xl transition-all duration-300"
          >
            {/* Enhanced background pattern */}
            <motion.div
              animate={{
                background: [
                  'radial-gradient(circle at 80% 20%, rgba(255, 102, 0, 0.03) 0%, transparent 50%)',
                  'radial-gradient(circle at 20% 80%, rgba(255, 102, 0, 0.03) 0%, transparent 50%)',
                  'radial-gradient(circle at 80% 20%, rgba(255, 102, 0, 0.03) 0%, transparent 50%)'
                ]
              }}
              transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
              className="absolute inset-0 rounded-2xl"
            />
            
            <div className="relative z-10">
              <motion.div
                initial={{ scale: 0, rotate: -180 }}
                animate={{ scale: 1, rotate: 0 }}
                transition={{ delay: 1.2, type: "spring", stiffness: 300 }}
                className="flex justify-center lg:justify-end mb-6"
              >
                {Array(5).fill(0).map((_, i) => (
                  <motion.span
                    key={i}
                    initial={{ opacity: 0, y: -30, rotate: Math.random() * 360 }}
                    animate={{ opacity: 1, y: 0, rotate: 0 }}
                    transition={{ 
                      delay: 1.4 + i * 0.1, 
                      type: "spring", 
                      stiffness: 400,
                      damping: 15
                    }}
                    whileHover={{ 
                      scale: 1.3,
                      rotate: 360,
                      transition: { duration: 0.5 }
                    }}
                    className="text-orange-400 text-2xl drop-shadow-md cursor-pointer"
                  >
                    ★
                  </motion.span>
                ))}
              </motion.div>
              
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1.8, duration: 0.6 }}
                className="space-y-3"
              >
                <motion.p
                  animate={{
                    backgroundPosition: ['0% 50%', '100% 50%', '0% 50%']
                  }}
                  transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                  className="text-4xl font-bold bg-gradient-to-r from-slate-800 via-slate-600 to-slate-800 bg-clip-text text-transparent"
                  style={{ backgroundSize: '200% 200%' }}
                >
                  3+ Years
                </motion.p>
                <p className="text-slate-600 font-medium text-lg">Professional Experience</p>
                <motion.div
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 2, duration: 0.5 }}
                  className="flex items-center justify-center lg:justify-end gap-3 mt-4"
                >
                  <motion.div
                    animate={{ 
                      scale: [1, 1.5, 1],
                      boxShadow: [
                        '0 0 5px rgba(34, 197, 94, 0.5)',
                        '0 0 20px rgba(34, 197, 94, 0.8)',
                        '0 0 5px rgba(34, 197, 94, 0.5)'
                      ]
                    }}
                    transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                    className="w-3 h-3 bg-green-400 rounded-full"
                  />
                  <span className="text-sm text-slate-500 font-medium">Active & Available</span>
                </motion.div>
              </motion.div>
            </div>
          </motion.div>
        </motion.div>
      </div>

      {/* FIXED Z-INDEX MODALS */}
      
      {/* Hire Me Modal with Multiple Options - FIXED Z-INDEX */}
      <AnimatePresence>
        {isHireModalOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/60 backdrop-blur-md z-[9998] flex items-center justify-center p-4"
            style={{ position: 'fixed', top: 0, left: 0, right: 0, bottom: 0 }}
            onClick={closeModals}
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.9, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.9, y: 20 }}
              onClick={(e) => e.stopPropagation()}
              className="bg-white rounded-3xl p-8 max-w-md w-full shadow-2xl relative z-[9999] max-h-[90vh] overflow-y-auto"
              style={{ 
                maxHeight: 'calc(100vh - 2rem)',
                overflowY: 'auto',
                scrollbarWidth: 'thin'
              }}
            >
              {/* Close button */}
              <button
                onClick={closeModals}
                className="absolute top-4 right-4 w-8 h-8 bg-gray-100 hover:bg-gray-200 rounded-full flex items-center justify-center transition-colors z-[10000]"
              >
                <svg className="w-4 h-4 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>

              <div className="text-center mb-8">
                <motion.div
                  animate={{ rotate: [0, 10, -10, 0] }}
                  transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                  className="w-16 h-16 bg-gradient-to-r from-orange-500 to-orange-600 rounded-full flex items-center justify-center mx-auto mb-4"
                >
                  <span className="text-2xl">🚀</span>
                </motion.div>
                <h3 className="text-3xl font-bold text-gray-900 mb-2">Let's Work Together!</h3>
                <p className="text-gray-600 text-lg">How would you like to get in touch?</p>
              </div>

              <div className="space-y-4">
                {/* Quick Contact Options */}
                <motion.button
                  whileHover={{ scale: 1.02, y: -2 }}
                  whileTap={{ scale: 0.98 }}
                  onClick={() => window.open('mailto:gautam@example.com?subject=Project Inquiry')}
                  className="w-full flex items-center gap-4 p-4 bg-gradient-to-r from-orange-50 to-orange-100 border-2 border-orange-200 rounded-2xl hover:from-orange-100 hover:to-orange-200 hover:border-orange-300 transition-all duration-300 group"
                >
                  <div className="w-12 h-12 bg-gradient-to-r from-orange-500 to-orange-600 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform">
                    <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                  </div>
                  <div className="text-left flex-1">
                    <div className="font-bold text-gray-900 text-lg">Send Email</div>
                    <div className="text-sm text-gray-600">Quick email inquiry - I'll respond within 24h</div>
                  </div>
                  <ArrowUpRightIcon />
                </motion.button>

                <motion.button
                  whileHover={{ scale: 1.02, y: -2 }}
                  whileTap={{ scale: 0.98 }}
                  onClick={() => {
                    setIsHireModalOpen(false);
                    setIsContactFormOpen(true);
                  }}
                  className="w-full flex items-center gap-4 p-4 bg-gradient-to-r from-blue-50 to-blue-100 border-2 border-blue-200 rounded-2xl hover:from-blue-100 hover:to-blue-200 hover:border-blue-300 transition-all duration-300 group"
                >
                  <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-blue-600 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform">
                    <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                    </svg>
                  </div>
                  <div className="text-left flex-1">
                    <div className="font-bold text-gray-900 text-lg">Project Details Form</div>
                    <div className="text-sm text-gray-600">Detailed form for project requirements</div>
                  </div>
                  <ArrowUpRightIcon />
                </motion.button>

                <motion.button
                  whileHover={{ scale: 1.02, y: -2 }}
                  whileTap={{ scale: 0.98 }}
                  onClick={() => window.open('https://wa.me/919904038740?text=Hi Gautam, I would like to discuss a project with you!', '_blank')}
                  className="w-full flex items-center gap-4 p-4 bg-gradient-to-r from-green-50 to-green-100 border-2 border-green-200 rounded-2xl hover:from-green-100 hover:to-green-200 hover:border-green-300 transition-all duration-300 group"
                >
                  <div className="w-12 h-12 bg-gradient-to-r from-green-500 to-green-600 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform">
                    <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.890-5.335 11.893-11.893A11.821 11.821 0 0020.885 3.488"/>
                    </svg>
                  </div>
                  <div className="text-left flex-1">
                    <div className="font-bold text-gray-900 text-lg">WhatsApp Chat</div>
                    <div className="text-sm text-gray-600">Instant messaging for quick discussions</div>
                  </div>
                  <ArrowUpRightIcon />
                </motion.button>

                <motion.button
                  whileHover={{ scale: 1.02, y: -2 }}
                  whileTap={{ scale: 0.98 }}
                  onClick={() => window.open('https://calendly.com/gautam', '_blank')}
                  className="w-full flex items-center gap-4 p-4 bg-gradient-to-r from-purple-50 to-purple-100 border-2 border-purple-200 rounded-2xl hover:from-purple-100 hover:to-purple-200 hover:border-purple-300 transition-all duration-300 group"
                >
                  <div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-purple-600 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform">
                    <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                    </svg>
                  </div>
                  <div className="text-left flex-1">
                    <div className="font-bold text-gray-900 text-lg">Schedule Call</div>
                    <div className="text-sm text-gray-600">Book a free 30-min consultation call</div>
                  </div>
                  <ArrowUpRightIcon />
                </motion.button>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Enhanced Contact Form Modal - FIXED Z-INDEX & IMPROVED UX */}
      <AnimatePresence>
        {isContactFormOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/60 backdrop-blur-md z-[9998] flex items-center justify-center p-4"
            style={{ position: 'fixed', top: 0, left: 0, right: 0, bottom: 0 }}
            onClick={closeModals}
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.9, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.9, y: 20 }}
              onClick={(e) => e.stopPropagation()}
              className="bg-white rounded-3xl p-8 max-w-2xl w-full shadow-2xl relative z-[9999]"
              style={{ 
                maxHeight: 'calc(100vh - 2rem)',
                overflowY: 'auto',
                scrollbarWidth: 'thin',
                scrollbarColor: '#ff6600 #f1f1f1'
              }}
            >
              {/* Close button */}
              <button
                onClick={closeModals}
                className="absolute top-6 right-6 w-10 h-10 bg-gray-100 hover:bg-gray-200 rounded-full flex items-center justify-center transition-colors z-[10000]"
              >
                <svg className="w-5 h-5 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>

              {/* Header */}
              <div className="text-center mb-8">
                <motion.div
                  animate={{ scale: [1, 1.1, 1] }}
                  transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                  className="w-20 h-20 bg-gradient-to-r from-orange-500 to-orange-600 rounded-full flex items-center justify-center mx-auto mb-6 shadow-lg"
                >
                  <span className="text-3xl">📝</span>
                </motion.div>
                <h3 className="text-4xl font-bold text-gray-900 mb-3">Project Details</h3>
                <p className="text-gray-600 text-lg">Tell me about your project requirements and I'll get back to you soon!</p>
              </div>

              {/* Enhanced Form */}
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <motion.div
                    whileFocus={{ scale: 1.02 }}
                    className="space-y-2"
                  >
                    <label className="block text-sm font-bold text-gray-700">Name *</label>
                    <input
                      type="text"
                      name="name"
                      required
                      value={formData.name}
                      onChange={(e) => handleInputChange('name', e.target.value)}
                      className="w-full p-4 border-2 border-gray-200 rounded-xl focus:ring-2 focus:ring-orange-500 focus:border-orange-500 transition-all duration-200 text-lg placeholder-gray-400"
                      placeholder="Your full name"
                    />
                  </motion.div>
                  
                  <motion.div
                    whileFocus={{ scale: 1.02 }}
                    className="space-y-2"
                  >
                    <label className="block text-sm font-bold text-gray-700">Email *</label>
                    <input
                      type="email"
                      name="email"
                      required
                      value={formData.email}
                      onChange={(e) => handleInputChange('email', e.target.value)}
                      className="w-full p-4 border-2 border-gray-200 rounded-xl focus:ring-2 focus:ring-orange-500 focus:border-orange-500 transition-all duration-200 text-lg placeholder-gray-400"
                      placeholder="your.email@example.com"
                    />
                  </motion.div>
                </div>

                <motion.div
                  whileFocus={{ scale: 1.02 }}
                  className="space-y-2"
                >
                  <label className="block text-sm font-bold text-gray-700">Company/Organization</label>
                  <input
                    type="text"
                    value={formData.company}
                    onChange={(e) => handleInputChange('company', e.target.value)}
                    className="w-full p-4 border-2 border-gray-200 rounded-xl focus:ring-2 focus:ring-orange-500 focus:border-orange-500 transition-all duration-200 text-lg placeholder-gray-400"
                    placeholder="Company name (optional)"
                  />
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <motion.div
                    whileFocus={{ scale: 1.02 }}
                    className="space-y-2"
                  >
                    <label className="block text-sm font-bold text-gray-700">Project Type *</label>
                    <select
                      required
                      value={formData.project}
                      onChange={(e) => handleInputChange('project', e.target.value)}
                      className="w-full p-4 border-2 border-gray-200 rounded-xl focus:ring-2 focus:ring-orange-500 focus:border-orange-500 transition-all duration-200 text-lg bg-white"
                    >
                      <option value="">Select project type</option>
                      <option value="web-development">🌐 Web Development</option>
                      <option value="mobile-app">📱 Mobile App</option>
                      <option value="full-stack">⚡ Full Stack Application</option>
                      <option value="ecommerce">🛒 E-commerce Platform</option>
                      <option value="api-development">🔗 API Development</option>
                      <option value="consultation">💡 Consultation</option>
                      <option value="other">🔧 Other</option>
                    </select>
                  </motion.div>

                  <motion.div
                    whileFocus={{ scale: 1.02 }}
                    className="space-y-2"
                  >
                    <label className="block text-sm font-bold text-gray-700">Budget Range</label>
                    <select
                      value={formData.budget}
                      onChange={(e) => handleInputChange('budget', e.target.value)}
                      className="w-full p-4 border-2 border-gray-200 rounded-xl focus:ring-2 focus:ring-orange-500 focus:border-orange-500 transition-all duration-200 text-lg bg-white"
                    >
                      <option value="">Select budget range</option>
                      <option value="under-5k">💰 Under $5,000</option>
                      <option value="5k-10k">💰💰 $5,000 - $10,000</option>
                      <option value="10k-25k">💰💰💰 $10,000 - $25,000</option>
                      <option value="25k-50k">💰💰💰💰 $25,000 - $50,000</option>
                      <option value="50k-plus">💰💰💰💰💰 $50,000+</option>
                      <option value="discuss">🤝 Let's discuss</option>
                    </select>
                  </motion.div>
                </div>

                <motion.div
                  whileFocus={{ scale: 1.02 }}
                  className="space-y-2"
                >
                  <label className="block text-sm font-bold text-gray-700">Project Description *</label>
                  <textarea
                    required
                    rows={5}
                    value={formData.message}
                    onChange={(e) => handleInputChange('message', e.target.value)}
                    className="w-full p-4 border-2 border-gray-200 rounded-xl focus:ring-2 focus:ring-orange-500 focus:border-orange-500 transition-all duration-200 text-lg placeholder-gray-400 resize-none"
                    placeholder="Describe your project requirements, timeline, specific technologies needed, and any other important details..."
                  />
                  <div className="text-right text-sm text-gray-500">
                    {formData.message.length}/500 characters
                  </div>
                </motion.div>

                {/* Action Buttons */}
                <div className="flex gap-4 pt-6">
                  <motion.button
                    type="submit"
                    disabled={isLoading}
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    className="flex-1 bg-gradient-to-r from-orange-500 to-orange-600 text-white font-bold py-4 px-8 rounded-xl hover:from-orange-600 hover:to-orange-700 transition-all duration-200 shadow-lg hover:shadow-xl text-lg disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-3"
                  >
                    {isLoading ? (
                      <>
                        <LoadingSpinner />
                        <span>Sending...</span>
                      </>
                    ) : (
                      <>
                        <span>🚀 Send Inquiry</span>
                        <ArrowUpRightIcon />
                      </>
                    )}
                  </motion.button>
                  
                  <button
                    type="button"
                    onClick={closeModals}
                    className="px-8 py-4 border-2 border-gray-300 text-gray-700 rounded-xl hover:bg-gray-50 hover:border-gray-400 transition-all duration-200 font-semibold text-lg"
                  >
                    Cancel
                  </button>
                </div>
              </form>

              {/* Trust indicators */}
              <div className="mt-8 pt-6 border-t border-gray-200">
                <div className="flex items-center justify-center gap-6 text-sm text-gray-500">
                  <div className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-green-400 rounded-full"></div>
                    <span>Secure & Private</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-orange-400 rounded-full"></div>
                    <span>24h Response Time</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-blue-400 rounded-full"></div>
                    <span>Free Consultation</span>
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Enhanced scroll indicator with better animation */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 2.5, duration: 0.6 }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-20"
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
          className="flex flex-col items-center gap-3 text-slate-400 cursor-pointer group"
        >
          <span className="text-xs font-medium group-hover:text-slate-600 transition-colors duration-300">
            Scroll to explore
          </span>
          <motion.div
            whileHover={{ scale: 1.1 }}
            className="w-6 h-10 border-2 border-slate-300 rounded-full flex justify-center p-1 group-hover:border-orange-400 transition-colors duration-300"
          >
            <motion.div
              animate={{ y: [0, 16, 0] }}
              transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
              className="w-1.5 h-3 bg-gradient-to-b from-orange-400 to-orange-600 rounded-full shadow-sm"
            />
          </motion.div>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Hero;
