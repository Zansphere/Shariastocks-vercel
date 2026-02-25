import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import logo1 from '../../../images/ShariaStocks-logo/ShariaStocks1.png'; // Make sure this is a .webp if possible

export default function Header() {
  const navigate = useNavigate();
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleLoginClick = () => navigate('/login');
  const handleSignupClick = () => navigate('/signup');
  const handleBlogClick = () => navigate('/blogs');
  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  return (
    <header className={`fixed w-full z-50 transition-all duration-300 ${
      isScrolled 
        ? 'py-3 bg-white/90 shadow-lg backdrop-blur-md border-b border-gray-100' 
        : 'py-4 bg-transparent'
    }`}>
      <div className="container mx-auto px-6 flex justify-between items-center">
        <a href="/" className="flex items-center transform transition hover:scale-105">
          <img src={logo1} alt="ShariaStocks Logo" className="w-32 h-auto sm:w-36" />
        </a>
        <nav className="hidden md:flex items-center space-x-6 lg:space-x-8">
          {['Features', 'How It Works', 'Pricing', 'FAQ'].map(item => (
            <a key={item} href={`#${item.toLowerCase().replace(/\s+/g, '-')}`} className="text-gray-700 hover:text-emerald-600 font-medium transition-colors duration-300 relative group">
              {item}
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-emerald-500 transition-all group-hover:w-full"></span>
            </a>
          ))}
          <button onClick={handleBlogClick} className="text-gray-700 hover:text-emerald-600 font-medium transition-colors duration-300 cursor-pointer relative group">
            Blogs
            <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-emerald-500 transition-all group-hover:w-full"></span>
          </button>
        </nav>
        <div className="flex items-center space-x-2 sm:space-x-4">
          <motion.button whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }} onClick={handleLoginClick} className="hidden md:block text-gray-700 font-medium hover:text-emerald-600 px-2 transition-colors">
            Log In
          </motion.button>
          <motion.button whileHover={{ scale: 1.05, boxShadow: "0px 8px 25px rgba(16, 185, 129, 0.3)" }} whileTap={{ scale: 0.95 }} onClick={handleSignupClick} className="bg-gradient-to-r from-emerald-500 to-teal-600 text-white px-4 py-2 sm:px-6 sm:py-3 rounded-full font-semibold shadow-lg hover:shadow-xl transition-all duration-300">
            Sign Up Free
          </motion.button>
          <button onClick={toggleMenu} className="md:hidden text-gray-700 z-50 p-2">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={isMenuOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16m-7 6h7"} />
            </svg>
          </button>
        </div>
      </div>
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="md:hidden absolute top-0 left-0 w-full h-screen bg-white/95 backdrop-blur-xl pt-24 border-b border-gray-100">
            <nav className="flex flex-col items-center space-y-8 text-xl">
              {['Features', 'How It Works', 'Pricing', 'FAQ', 'Blogs'].map(item => (
                <a key={item} href={`#${item.toLowerCase().replace(/\s+/g, '-')}`} onClick={() => setIsMenuOpen(false)} className="text-gray-700 hover:text-emerald-600 font-medium">
                  {item}
                </a>
              ))}
              <div className="pt-8 w-full px-8 flex flex-col space-y-4">
                <button onClick={() => { handleLoginClick(); setIsMenuOpen(false); }} className="w-full text-center py-3 border-2 border-emerald-500 text-emerald-600 rounded-full font-semibold hover:bg-emerald-50">
                  Log In
                </button>
                <button onClick={() => { handleSignupClick(); setIsMenuOpen(false); }} className="w-full text-center py-3 bg-gradient-to-r from-emerald-500 to-teal-600 text-white rounded-full font-semibold">
                  Sign Up Free
                </button>
              </div>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}