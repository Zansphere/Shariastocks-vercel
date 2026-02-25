import React from 'react';
import { motion } from 'framer-motion';
import { AnimatedText } from '../animations/AnimatedText';
import { AnimatedStockChart } from '../animations/AnimatedStockChart.jsx';

export default function HowItWorksSection() {
  const steps = [
    { title: "Search & Discover", desc: "Enter company names or ticker symbols to begin your halal investment journey with our comprehensive database.", icon: "🔍" },
    { title: "Screen & Analyze", desc: "View detailed compliance reports, financial metrics, and Sharia-compliance scores for each stock.", icon: "📊" },
    { title: "Monitor & Invest", desc: "Add compliant stocks to watchlists, receive real-time alerts, and make informed investment decisions.", icon: "📈" }
  ];

  return (
    <section id="how-it-works" className="py-24 bg-gradient-to-br from-gray-50 to-blue-50 overflow-hidden">
      <div className="container mx-auto px-6">
        <div className="text-center mb-20">
          <AnimatedText text="From Data to Decision" el="h2" className="text-4xl md:text-5xl font-bold text-gray-900 mb-4" />
          <AnimatedText text="in Three Simple Steps" el="p" className="text-lg text-gray-600 max-w-2xl mx-auto" />
        </div>
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div className="lg:order-2">
            <AnimatedStockChart />
          </div>
          <div className="lg:order-1 space-y-12">
            {steps.map((step, index) => (
              <motion.div key={step.title} initial={{ opacity: 0, x: -50 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: index * 0.2 }} className="flex items-start space-x-6">
                <div className="flex-shrink-0 h-16 w-16 rounded-full bg-gradient-to-br from-emerald-400 to-teal-500 flex items-center justify-center text-white text-2xl font-bold shadow-lg">
                  {index + 1}
                </div>
                <div>
                  <div className="flex items-center mb-2">
                    <span className="text-2xl mr-3">{step.icon}</span>
                    <h3 className="text-2xl font-bold text-gray-900">{step.title}</h3>
                  </div>
                  <p className="text-gray-600 text-lg leading-relaxed">{step.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}