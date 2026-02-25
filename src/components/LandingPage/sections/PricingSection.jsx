import React, { forwardRef } from 'react';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';

const PricingSection = forwardRef((props, ref) => {
  const navigate = useNavigate();
  const handleSignupClick = () => navigate('/signup');
  
  const fadeIn = { 
    hidden: { opacity: 0, y: 30 }, 
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } } 
  };
  const staggerContainer = { 
    hidden: { opacity: 0 }, 
    visible: { opacity: 1, transition: { staggerChildren: 0.15, delayChildren: 0.2 } } 
  };
  
  const plans = [
    { name: "Free", price: "Free", description: "Perfect for exploring halal investment basics", popular: false, features: [{ name: "Stock search limit (3 stocks)", included: true }, { name: "Sharia compliance Details (3 stocks)", included: true }, { name: "Basic compliance filters", included: false }, { name: "Watchlist access", included: false }, { name: "News Notification", included: false }, { name: "Advanced filtering", included: false }], buttonText: "Start Free", onClick: handleSignupClick, bgColor: "bg-gray-50", borderColor: "border-gray-200", buttonColor: "bg-gray-600 hover:bg-gray-700 text-white" },
    { name: "Basic", price: "₹ 299", period: "/mo", description: "Enhanced features for serious halal investors", popular: true, features: [{ name: "Unlimited Stock search limit", included: true }, { name: "Unlimited Sharia compliance Details", included: true }, { name: "Basic compliance filters", included: true }, { name: "Watchlist access (upto 10 stocks)", included: true }, { name: "News Notification (basic)", included: true }, { name: "Advanced filtering", included: true }], buttonText: "Get Started", onClick: handleSignupClick, bgColor: "bg-gradient-to-br from-emerald-50 to-teal-50", borderColor: "border-emerald-200", buttonColor: "bg-gradient-to-r from-emerald-500 to-teal-600 hover:from-emerald-600 hover:to-teal-700 text-white" },
    { name: "Premium", price: "₹ 499", period: "/mo", description: "Complete solution for professional Islamic investors", popular: false, features: [{ name: "Unlimited Stock search limit", included: true }, { name: "Unlimited Sharia compliance Details", included: true }, { name: "Basic compliance filters", included: true }, { name: "Watchlist access (25 stocks)", included: true }, { name: "News Notification (Priority)", included: true }, { name: "Advanced filtering", included: true }], buttonText: "Go Premium", onClick: handleSignupClick, bgColor: "bg-gradient-to-br from-purple-50 to-indigo-50", borderColor: "border-purple-200", buttonColor: "bg-gradient-to-r from-purple-500 to-indigo-600 hover:from-purple-600 hover:to-indigo-700 text-white" }
  ];

  return (
    <section ref={ref} id='pricing' className="py-24 bg-gradient-to-br from-blue-50 to-indigo-50">
      <div className="container mx-auto px-6">
        <motion.div variants={staggerContainer} initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.3 }} className="text-center mb-16">
          <motion.h2 variants={fadeIn} className="text-4xl md:text-5xl font-bold mb-4 text-gray-900">Simple, Transparent Pricing</motion.h2>
          <motion.p variants={fadeIn} className="text-lg text-gray-600 max-w-3xl mx-auto">Choose the plan that fits your investment journey, from beginner to professional Islamic investor.</motion.p>
        </motion.div>
        <div className="grid lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {plans.map((plan, index) => (
            <motion.div key={plan.name} initial={{ opacity: 0, y: 50 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: index * 0.1 }} whileHover={{ y: -8, transition: { duration: 0.3 } }} className={`rounded-3xl p-8 relative transition-all duration-300 border-2 ${plan.bgColor} ${plan.borderColor} ${plan.popular ? 'scale-105 shadow-2xl' : 'shadow-lg hover:shadow-xl'}`}>
              {plan.popular && (<div className="absolute -top-4 left-1/2 transform -translate-x-1/2 bg-gradient-to-r from-emerald-500 to-teal-600 text-white px-6 py-2 rounded-full text-sm font-semibold shadow-lg">Most Popular</div>)}
              <div className="text-center mb-8">
                <h3 className="text-2xl font-bold mb-2 text-gray-900">{plan.name}</h3>
                <p className="text-gray-600 mb-6 h-12 flex items-center justify-center">{plan.description}</p>
                <div className="text-5xl font-extrabold text-gray-900 mb-2">{plan.price}{plan.period && <span className="text-lg font-medium text-gray-600 ml-1">{plan.period}</span>}</div>
              </div>
              <ul className="space-y-4 mb-8">
                {plan.features.map((feature, i) => (
                  <li key={i} className="flex items-center">
                    <div className={`h-5 w-5 rounded-full mr-3 flex items-center justify-center ${feature.included ? 'bg-emerald-100' : 'bg-gray-100'}`}><svg className={`h-3 w-3 ${feature.included ? 'text-emerald-600' : 'text-gray-400'}`} viewBox="0 0 20 20" fill="currentColor"><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" /></svg></div>
                    <span className={`text-sm ${feature.included ? 'text-gray-700' : 'text-gray-400 line-through'}`}>{feature.name}</span>
                  </li>
                ))}
              </ul>
              <motion.button onClick={plan.onClick} whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }} className={`w-full py-4 rounded-xl font-semibold text-lg transition-all duration-300 ${plan.buttonColor} shadow-lg hover:shadow-xl`}>{plan.buttonText}</motion.button>
            </motion.div>
          ))}
        </div>
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mt-12">
          <p className="text-gray-600 mb-4">All plans include:</p>
          <div className="flex flex-wrap justify-center gap-6 text-sm text-gray-600">
            <span className="flex items-center"><svg className="w-4 h-4 text-emerald-500 mr-2" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" /></svg>24/7 Customer Support</span>
            <span className="flex items-center"><svg className="w-4 h-4 text-emerald-500 mr-2" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" /></svg>Regular Updates</span>
            <span className="flex items-center"><svg className="w-4 h-4 text-emerald-500 mr-2" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" /></svg>Islamic Finance Certified</span>
          </div>
        </motion.div>
      </div>
    </section>
  );
});

export default PricingSection;