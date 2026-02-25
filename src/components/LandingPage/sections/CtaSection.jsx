import React from 'react';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';

export default function CtaSection() {
  const navigate = useNavigate();
  const handleSignupClick = () => navigate('/signup');
  const handleBlogClick = () => navigate('/blogs');

  return (
    <section className="py-24 bg-gradient-to-r from-emerald-500 via-teal-500 to-blue-600">
      <div className="container mx-auto px-6 text-center">
        <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }}>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">Ready to Start Your Halal Investment Journey?</h2>
          <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">Join thousands of Muslim investors who trust ShariaStocks for their ethical investment decisions.</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <motion.button onClick={handleSignupClick} whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }} className="bg-white text-emerald-600 px-8 py-4 rounded-full font-bold text-lg hover:bg-gray-100 transition-colors shadow-xl">
              Get Started Free
            </motion.button>
            <motion.button onClick={handleBlogClick} whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }} className="border-2 border-white text-white px-8 py-4 rounded-full font-semibold text-lg hover:bg-white hover:text-emerald-600 transition-all">
              Learn More
            </motion.button>
          </div>
          <p className="text-white/80 mt-6 text-sm">✓ No credit card required ✓ Free forever plan ✓ Start in under 2 minutes</p>
        </motion.div>
      </div>
    </section>
  );
}