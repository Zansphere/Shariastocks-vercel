import React from 'react';

export const FloatingShapes = () => {
  return (
    <div className="fixed inset-0 z-10 h-full w-full pointer-events-none overflow-hidden">
      <div className="absolute top-1/4 left-[10%] h-20 w-20 bg-gradient-to-br from-emerald-400 to-teal-500 rounded-2xl shadow-2xl opacity-50 animate-float-slow" />
      <div className="absolute top-2/3 left-[80%] h-16 w-16 bg-gradient-to-br from-blue-400 to-indigo-500 rounded-full shadow-2xl opacity-50 animate-float-medium" />
      <div className="absolute top-1/2 left-[5%] h-24 w-24 text-purple-500 drop-shadow-2xl opacity-40 animate-float-fast">
        <svg viewBox="0 0 100 100" fill="currentColor"><polygon points="50,10 90,90 10,90" className="opacity-90"/></svg>
      </div>
      <div className="absolute top-1/3 right-[5%] h-32 w-32 bg-gradient-to-br from-yellow-200 to-orange-300 rounded-full opacity-20 animate-float-medium-reverse" />
      <div className="absolute bottom-1/4 left-[20%] h-16 w-16 bg-gradient-to-br from-pink-300 to-rose-400 transform rotate-45 opacity-30 animate-float-slow-reverse" />
      <div className="absolute top-3/4 right-[15%] h-20 w-20 border-4 border-cyan-400 rounded-full opacity-25 animate-float-fast" />
    </div>
  );
};