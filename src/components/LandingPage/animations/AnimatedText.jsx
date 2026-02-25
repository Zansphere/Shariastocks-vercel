import React from 'react';
import { motion } from 'framer-motion';

export const AnimatedText = ({ text, el: Wrapper = 'p', className }) => {
    const container = { 
      hidden: { opacity: 0 }, 
      visible: (i = 1) => ({ 
        opacity: 1, 
        transition: { staggerChildren: 0.12, delayChildren: 0.3 * i } 
      }) 
    };
    const child = { 
      visible: { opacity: 1, y: 0, transition: { type: 'spring', damping: 12, stiffness: 100 } }, 
      hidden: { opacity: 0, y: 20, transition: { type: 'spring', damping: 12, stiffness: 100 } } 
    };
    
    return (
      <Wrapper className={className}>
        <motion.span 
          variants={container} 
          initial="hidden" 
          whileInView="visible" 
          viewport={{ once: true, amount: 0.6 }} 
          style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center' }}
        >
          {text.split(' ').map((word, index) => (
            <motion.span key={index} variants={child} style={{ marginRight: '0.25em' }}>
              {word}
            </motion.span>
          ))}
        </motion.span>
      </Wrapper>
    );
};