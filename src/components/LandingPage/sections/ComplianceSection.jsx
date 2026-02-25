import React, { forwardRef } from 'react';
import { motion } from 'framer-motion';
import { AnimatedComplianceChart } from '../animations/AnimatedComplianceChart.jsx';

const ComplianceSection = forwardRef((props, ref) => {
  const fadeIn = { 
    hidden: { opacity: 0, y: 30 }, 
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } } 
  };
  const staggerContainer = { 
    hidden: { opacity: 0 }, 
    visible: { opacity: 1, transition: { staggerChildren: 0.15, delayChildren: 0.2 } } 
  };
  
  return (
    <section ref={ref} className="py-24 bg-white">
      <div className="container mx-auto px-6 grid lg:grid-cols-2 gap-12 lg:gap-24 items-center">
        <motion.div variants={staggerContainer} initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.5 }}>
          <motion.h2 variants={fadeIn} className="text-4xl md:text-5xl font-bold mb-6 leading-tight text-gray-900">
            See Compliance <span className="bg-gradient-to-r from-emerald-600 to-blue-600 bg-clip-text text-transparent"> Come to Life</span>
          </motion.h2>
          <motion.p variants={fadeIn} className="text-lg text-gray-600 mb-8 max-w-xl leading-relaxed">
            Our platform doesn't just give you a "yes" or "no." We provide transparent, dynamic data so you can understand exactly why a stock meets Sharia-compliant criteria.
          </motion.p>
          <motion.div variants={fadeIn} className="flex flex-wrap gap-4">
            <div className="flex items-center space-x-2"><div className="w-3 h-3 bg-emerald-500 rounded-full"></div><span className="text-sm text-gray-600">Real-time Analysis</span></div>
            <div className="flex items-center space-x-2"><div className="w-3 h-3 bg-blue-500 rounded-full"></div><span className="text-sm text-gray-600">Transparent Metrics</span></div>
            <div className="flex items-center space-x-2"><div className="w-3 h-3 bg-purple-500 rounded-full"></div><span className="text-sm text-gray-600">Islamic Principles</span></div>
          </motion.div>
        </motion.div>
        <AnimatedComplianceChart />
      </div>
    </section>
  );
});

export default ComplianceSection;