import React from 'react';
import { motion } from 'framer-motion';

export default function TestimonialsSection() {
  const fadeIn = { 
    hidden: { opacity: 0, y: 30 }, 
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } } 
  };
  const staggerContainer = { 
    hidden: { opacity: 0 }, 
    visible: { opacity: 1, transition: { staggerChildren: 0.15, delayChildren: 0.2 } } 
  };
  const testimonials = [
    { name: "Ahmed S.", role: "Long-term Investor", avatar: "A", text: "ShariaStocks has transformed my approach to halal investing. The detailed compliance reports give me complete confidence that my portfolio truly adheres to Islamic principles.", color: "bg-gradient-to-br from-blue-400 to-blue-600" },
    { name: "Fatima R.", role: "New Investor", avatar: "F", text: "As someone new to investing, finding truly halal stocks was overwhelming until I discovered ShariaStocks. Now I can build my investment portfolio with complete peace of mind.", color: "bg-gradient-to-br from-emerald-400 to-emerald-600" },
    { name: "Mohammed K.", role: "Financial Advisor", avatar: "M", text: "I recommend ShariaStocks to all my Muslim clients. The comprehensive screening methodology aligns perfectly with Islamic finance principles and makes my job much easier.", color: "bg-gradient-to-br from-purple-400 to-purple-600" }
  ];

  return (
    <section className="py-24 bg-white">
      <div className="container mx-auto px-6">
        <motion.div variants={staggerContainer} initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.3 }} className="text-center mb-16">
          <motion.h2 variants={fadeIn} className="text-4xl md:text-5xl font-bold mb-4 text-gray-900">
            What <span className="bg-gradient-to-r from-emerald-600 to-blue-600 bg-clip-text text-transparent">Muslim Investors</span> Say
          </motion.h2>
          <motion.p variants={fadeIn} className="text-lg text-gray-600 max-w-3xl mx-auto">
            Join thousands of satisfied users building their halal investment portfolios with complete confidence.
          </motion.p>
        </motion.div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, i) => (
            <motion.div key={testimonial.name} initial={{ opacity: 0, y: 50 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: i * 0.15 }} whileHover={{ y: -5, transition: { duration: 0.3 } }} className="bg-white p-8 rounded-2xl shadow-lg border-2 border-gray-100 flex flex-col hover:shadow-xl transition-all duration-300">
              <div className="flex mb-4">
                {[...Array(5)].map((_, index) => (<svg key={index} className="w-5 h-5 text-yellow-400 fill-current" viewBox="0 0 20 20"><path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z"/></svg>))}
              </div>
              <div className="flex-grow mb-6"><p className="text-gray-700 italic leading-relaxed text-lg">"{testimonial.text}"</p></div>
              <div className="flex items-center">
                <div className={`h-14 w-14 rounded-full ${testimonial.color} flex items-center justify-center font-bold text-xl text-white shadow-lg`}>{testimonial.avatar}</div>
                <div className="ml-4"><h4 className="font-bold text-gray-900 text-lg">{testimonial.name}</h4><p className="text-sm text-gray-600">{testimonial.role}</p></div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}