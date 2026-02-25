import React, { forwardRef, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const FaqSection = forwardRef((props, ref) => {
  const [openIndex, setOpenIndex] = useState(null);
  const toggleFAQ = (index) => setOpenIndex(openIndex === index ? null : index);

  const fadeIn = { 
    hidden: { opacity: 0, y: 30 }, 
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } } 
  };
  const staggerContainer = { 
    hidden: { opacity: 0 }, 
    visible: { opacity: 1, transition: { staggerChildren: 0.15, delayChildren: 0.2 } } 
  };
  
  const faqs = [
    { question: "What makes a stock halal or Sharia-compliant?", answer: "Sharia-compliant stocks must meet specific criteria related to the company's business activities and financial ratios. Companies involved in prohibited activities like alcohol, gambling, conventional banking, or interest-based financial services are excluded. Additionally, financial ratios related to debt, interest income, and cash/receivables must meet certain thresholds established in Islamic finance." },
    { question: "How often is your Sharia compliance data updated?", answer: "Our Sharia compliance data is updated quarterly, following companies' financial reporting. We also conduct real-time monitoring for significant business changes that might affect compliance status, ensuring you always have the most current information for your halal investment decisions." },
    { question: "Can I use this platform for my retirement investments?", answer: "Yes, many of our users utilize ShariaStocks for retirement planning. We offer guidance on creating Sharia-compliant retirement portfolios and can help you evaluate existing retirement accounts for compliance." },
    { question: "What Islamic financial ratios do you use for screening?", answer: "We analyze several key financial ratios according to Islamic finance principles including: Debt to Total Assets (must be less than 33%), Interest Income to Total Revenue (must be less than 5%), Non-compliant Income to Total Revenue (must be less than 5%), and Cash and Receivables to Market Cap (must be less than 33%)." },
  ];

  return (
    <section ref={ref} id='faq' className="py-24 bg-gradient-to-br from-gray-50 to-blue-50">
      <div className="container mx-auto px-6 max-w-4xl">
        <motion.div variants={staggerContainer} initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.3 }} className="text-center mb-16">
          <motion.h2 variants={fadeIn} className="text-4xl md:text-5xl font-bold mb-4 text-gray-900">
            Frequently Asked <span className="bg-gradient-to-r from-emerald-600 to-blue-600 bg-clip-text text-transparent">Questions</span>
          </motion.h2>
          <motion.p variants={fadeIn} className="text-lg text-gray-600 max-w-3xl mx-auto">
            Find answers to common questions about halal investing and our comprehensive platform.
          </motion.p>
        </motion.div>
        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <motion.div key={index} variants={fadeIn} initial="hidden" whileInView="visible" viewport={{ once: true }} className="bg-white rounded-2xl overflow-hidden border-2 border-gray-100 transition-all hover:shadow-lg">
              <button className="flex justify-between items-center w-full text-left p-6 hover:bg-gray-50 transition-colors" onClick={() => toggleFAQ(index)}>
                <span className="font-semibold text-lg text-gray-900 pr-4">{faq.question}</span>
                <motion.div animate={{ rotate: openIndex === index ? 180 : 0 }} transition={{ duration: 0.3 }} className="text-emerald-500 flex-shrink-0">
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" /></svg>
                </motion.div>
              </button>
              <AnimatePresence>
                {openIndex === index && (
                  <motion.div initial={{ height: 0, opacity: 0 }} animate={{ height: 'auto', opacity: 1 }} exit={{ height: 0, opacity: 0 }} transition={{ duration: 0.3, ease: 'easeInOut' }} className="overflow-hidden">
                    <div className="px-6 pb-6 pt-0"><p className="text-gray-600 leading-relaxed text-lg">{faq.answer}</p></div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
});

export default FaqSection;