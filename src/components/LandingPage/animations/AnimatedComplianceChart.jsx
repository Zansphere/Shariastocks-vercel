import React from 'react';
import { motion } from 'framer-motion';

export const AnimatedComplianceChart = () => {
    const ratios = [
      { name: 'Debt / Total Assets', value: 25, threshold: 33, compliant: true },
      { name: 'Interest Income / Revenue', value: 2.1, threshold: 5, compliant: true },
      { name: 'Non-compliant Income / Revenue', value: 1.5, threshold: 5, compliant: true },
      { name: 'Receivables / Market Cap', value: 45, threshold: 33, compliant: false }
    ];
    
    const containerVariants = { 
      hidden: {}, 
      visible: { transition: { staggerChildren: 0.2, delayChildren: 0.3 } } 
    };
    
    const itemVariants = { 
      hidden: { opacity: 0, y: 30 }, 
      visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut' } } 
    };
    
    return (
      <motion.div 
        variants={containerVariants} 
        initial="hidden" 
        whileInView="visible" 
        viewport={{ once: true, amount: 0.5 }} 
        className="bg-white border-2 border-gray-100 p-6 sm:p-8 rounded-3xl shadow-2xl"
      >
        <h3 className="text-xl sm:text-2xl font-bold text-gray-800 mb-2">Live Compliance Analysis</h3>
        <p className="text-gray-600 mb-8 text-sm sm:text-base">Visualizing Sharia-compliance financial ratios in real-time.</p>
        
        <div className="space-y-6">
          {ratios.map((ratio, index) => (
            <motion.div key={index} variants={itemVariants}>
              <div className="flex justify-between items-end mb-2 text-xs sm:text-sm">
                <span className="text-gray-700 font-medium">{ratio.name}</span>
                <span className={`font-bold ${ratio.compliant ? 'text-emerald-600' : 'text-red-500'}`}>
                  {ratio.value}% {ratio.compliant ? '(Compliant)' : '(Not Compliant)'}
                </span>
              </div>
              <div className="relative h-4 sm:h-5 w-full bg-gray-100 rounded-full overflow-hidden border border-gray-200">
                <motion.div 
                  className={`absolute top-0 left-0 h-full rounded-full ${
                    ratio.compliant 
                      ? 'bg-gradient-to-r from-emerald-400 to-teal-500' 
                      : 'bg-gradient-to-r from-red-400 to-orange-500'
                  }`}
                  initial={{ width: '0%' }} 
                  whileInView={{ width: `${ratio.value}%` }} 
                  transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1], delay: 0.5 + index * 0.1 }} 
                  viewport={{ once: true }} 
                />
                <div 
                  className="absolute top-0 h-full border-r-2 border-dashed border-gray-400" 
                  style={{ left: `${ratio.threshold}%` }} 
                  title={`Threshold: ${ratio.threshold}%`} 
                />
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    );
};