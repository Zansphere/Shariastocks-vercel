import React, { useEffect, useState, useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

export const AnimatedStockChart = () => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start 75%", "end 25%"]
  });

  const pathLength = useTransform(scrollYProgress, [0, 1], [0, 1]);
  const dotOpacity = useTransform(scrollYProgress, [0, 0.05, 0.95, 1], [0, 1, 1, 0]);
  const svgRef = useRef(null);
  const [dotPosition, setDotPosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const path = svgRef.current?.querySelector('path');
    if (!path) return;

    const unsubscribe = pathLength.onChange(latest => {
      if (path.getTotalLength() > 0) {
        const point = path.getPointAtLength(latest * path.getTotalLength());
        setDotPosition({ x: point.x, y: point.y });
      }
    });

    return () => unsubscribe();
  }, [pathLength]);
  
  return (
    <div ref={ref} className="relative w-full aspect-w-2 aspect-h-1 bg-white rounded-2xl shadow-xl p-6 border-2 border-gray-100">
      <svg ref={svgRef} className="w-full h-full" viewBox="0 0 500 250" fill="none" xmlns="http://www.w3.org/2000/svg">
        {[1, 2, 3, 4].map(i => (
           <line key={i} x1="0" y1={i*50} x2="500" y2={i*50} stroke="rgba(0, 0, 0, 0.1)" strokeWidth="1" strokeDasharray="5 5" />
        ))}
        <motion.path
          d="M2 200 C 50 180, 80 120, 120 130 S 180 190, 220 150 S 280 50, 320 80 S 380 150, 420 120 S 480 60, 498 70"
          stroke="url(#line-gradient-light)"
          strokeWidth="5"
          strokeLinecap="round"
          style={{ pathLength, willChange: 'pathLength' }}
        />
        <motion.circle
          cx={dotPosition.x}
          cy={dotPosition.y}
          r="10"
          fill="#059669"
          style={{ opacity: dotOpacity, willChange: 'transform' }}
        />
        <motion.circle
          cx={dotPosition.x}
          cy={dotPosition.y}
          r="20"
          fill="#10B981"
          style={{ opacity: useTransform(dotOpacity, v => v*0.3), willChange: 'transform' }}
        />
        <defs>
          <linearGradient id="line-gradient-light" x1="0" y1="125" x2="500" y2="125" gradientUnits="userSpaceOnUse">
            <stop stopColor="#059669" />
            <stop offset="0.5" stopColor="#0891b2" />
            <stop offset="1" stopColor="#7c3aed" />
          </linearGradient>
        </defs>
      </svg>
    </div>
  );
};