import React from 'react';

export const SectionLoader = () => {
  return (
    <div className="flex h-screen w-full items-center justify-center">
      <div className="h-16 w-16 animate-spin rounded-full border-b-2 border-t-2 border-emerald-500"></div>
    </div>
  );
};