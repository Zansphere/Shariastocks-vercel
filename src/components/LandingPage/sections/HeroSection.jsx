import React, { forwardRef, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { AnimatedText } from '../animations/AnimatedText.jsx';

const HeroSection = forwardRef((props, ref) => {
  const navigate = useNavigate();
  
  useEffect(() => { 
    if (localStorage.getItem('userEmail')) { 
      navigate('/Dashboard'); 
    } 
  }, [navigate]);

  const handleLoginClick = () => navigate('/login');
  const handleSignupClick = () => navigate('/signup');
  
  const fadeIn = { 
    hidden: { opacity: 0, y: 30 }, 
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } } 
  };

  return (
    <section ref={ref} className="relative min-h-screen w-full flex items-center justify-center overflow-hidden pt-20">
      <div className="relative z-10 container mx-auto px-6 text-center">
        <motion.div initial={{ opacity: 0, y: 50 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, ease: "easeOut" }} className="mb-8">
          <div className="inline-flex items-center px-4 py-2 bg-emerald-100 rounded-full text-emerald-700 font-medium mb-6">
            <span className="w-2 h-2 bg-emerald-500 rounded-full mr-2 animate-pulse"></span>
            Trusted by 10,000+ Muslim investors
          </div>
        </motion.div>
        <motion.h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-6 text-gray-900 leading-tight text-center">
          <AnimatedText text="Invest with Faith." el="span" className="bg-gradient-to-r from-emerald-600 to-teal-600 bg-clip-text text-transparent block" />
          <AnimatedText text="Build Halal Wealth." el="span" />
        </motion.h1>
        <motion.p variants={fadeIn} initial="hidden" animate="visible" transition={{ delay: 1.2 }} className="text-lg md:text-xl text-gray-600 mb-10 max-w-2xl mx-auto leading-relaxed">
          Discover Sharia-compliant stocks and build your ethical investment portfolio with India's most trusted halal stock screening platform.
        </motion.p>
        <motion.div variants={fadeIn} initial="hidden" animate="visible" transition={{ delay: 1.4 }} className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <motion.button onClick={handleSignupClick} whileHover={{ scale: 1.05, boxShadow: "0px 12px 35px rgba(16, 185, 129, 0.4)" }} whileTap={{ scale: 0.95 }} className="bg-gradient-to-r from-emerald-500 via-teal-500 to-cyan-600 text-white px-8 py-4 rounded-full font-bold text-lg shadow-xl hover:shadow-2xl transition-all duration-300">
            Start Free Analysis
          </motion.button>
          <motion.button onClick={handleLoginClick} whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }} className="border-2 border-gray-300 text-gray-700 px-8 py-4 rounded-full font-semibold text-lg hover:border-emerald-500 hover:text-emerald-600 transition-all duration-300">
            Watch Demo
          </motion.button>
        </motion.div>
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 1.8 }} className="mt-12 text-sm text-gray-500">
          ✓ Free forever plan ✓ No credit card required ✓ Islamic finance compliant
        </motion.div>
      </div>
      <div className="absolute top-1/4 left-10 w-16 h-16 bg-gradient-to-br from-blue-400 to-purple-500 rounded-full opacity-20 animate-bounce"></div>
      <div className="absolute bottom-1/4 right-16 w-12 h-12 bg-gradient-to-br from-emerald-400 to-teal-500 transform rotate-45 opacity-30 animate-pulse"></div>
    </section>
  );
});

export default HeroSection;