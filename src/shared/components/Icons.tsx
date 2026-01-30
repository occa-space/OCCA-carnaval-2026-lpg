
import React from 'react';

export const DomeLogo: React.FC<{ className?: string }> = ({ className = "w-10 h-10" }) => (
  <svg viewBox="0 0 100 80" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
    <path d="M50 5L90 30V70H10V30L50 5Z" stroke="currentColor" strokeWidth="4" />
    <path d="M50 5V70" stroke="currentColor" strokeWidth="2" />
    <path d="M10 30L90 30" stroke="currentColor" strokeWidth="2" />
    <path d="M10 70L50 30L90 70" stroke="currentColor" strokeWidth="2" />
    <path d="M10 30L50 5L90 30" stroke="currentColor" strokeWidth="2" />
  </svg>
);

export const MenuIcon: React.FC<{ className?: string }> = ({ className = "w-6 h-6" }) => (
  <svg fill="none" stroke="currentColor" viewBox="0 0 24 24" className={className}>
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16m-7 6h7" />
  </svg>
);
