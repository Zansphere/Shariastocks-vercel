import React, { forwardRef } from 'react';
import { motion } from 'framer-motion';

const FeaturesSection = forwardRef((props, ref) => {
  const fadeIn = { 
    hidden: { opacity: 0, y: 30 }, 
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } } 
  };
  const staggerContainer = { 
    hidden: { opacity: 0 }, 
    visible: { opacity: 1, transition: { staggerChildren: 0.15, delayChildren: 0.2 } } 
  };
  const features = [
    { icon: "M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z", title: "Smart Stock Search", desc: "Search thousands of global stocks with comprehensive financial data and real-time metrics.", color: "from-blue-400 to-blue-600" },
    { icon: "M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z", title: "Sharia Compliance Screening", desc: "Comprehensive halal stock screening according to authentic Islamic finance principles.", color: "from-emerald-400 to-emerald-600" },
    { icon: "M15 12a3 3 0 11-6 0 3 3 0 016 0zM2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z", title: "Personalized Watchlist", desc: "Save and monitor your favorite halal-compliant stocks with intelligent alerts and insights.", color: "from-purple-400 to-purple-600" },
    { icon: "M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z", title: "Islamic Financial Analytics", desc: "Access detailed Sharia-compliant financial analysis with advanced performance metrics.", color: "from-teal-400 to-teal-600" },
    { icon: "M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z", title: "Real-time Alerts", desc: "Receive instant notifications when a stock's compliance status changes or market moves.", color: "from-orange-400 to-orange-600" },
    { icon: "M13 7h8m0 0v8m0-8l-8 8-4-4-6 6", title: "Market Insights", desc: "Stay updated with market trends and expert analysis of halal investment opportunities.", color: "from-pink-400 to-pink-600" }
  ];

  return (
    <section ref={ref} id="features" className="py-24 bg-white">
      <div className="container mx-auto px-6">
        <motion.div variants={staggerContainer} initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.3 }} className="text-center mb-16">
          <motion.h2 variants={fadeIn} className="text-4xl md:text-5xl font-bold mb-4 text-gray-900">
            Powerful Features for <span className="bg-gradient-to-r from-emerald-600 to-blue-600 bg-clip-text text-transparent"> Halal Investing</span>
          </motion.h2>
          <motion.p variants={fadeIn} className="text-lg text-gray-600 max-w-3xl mx-auto">
            Everything you need to build and manage a Sharia-compliant investment portfolio with complete confidence and clarity.
          </motion.p>
        </motion.div>
        <motion.div variants={staggerContainer} initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.2 }} className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature) => (
            <motion.div key={feature.title} variants={fadeIn} whileHover={{ y: -8, transition: { duration: 0.3 } }} className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 border-2 border-gray-100 group">
              <div className={`h-16 w-16 rounded-2xl bg-gradient-to-br ${feature.color} flex items-center justify-center text-white mb-6 group-hover:scale-110 transition-transform duration-300`}>
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={feature.icon} />
                </svg>
              </div>
              <h3 className="font-bold text-xl mb-3 text-gray-900">{feature.title}</h3>
              <p className="text-gray-600 leading-relaxed">{feature.desc}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
});

export default FeaturesSection;