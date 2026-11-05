import React from 'react';

export type MascotMood = 'waving' | 'genius' | 'celebrating' | 'studying' | 'proud' | 'puzzled' | 'explaining';

export interface CartoonMascotProps {
  mood?: MascotMood;
  size?: 'xs' | 'sm' | 'md' | 'lg' | 'hero';
  speechText?: string;
  speechSubtitle?: string;
  showSpeech?: boolean;
  interactive?: boolean;
  className?: string;
  onClick?: () => void;
}

// CartoonMascot disabled/cancelled by user request
export const CartoonMascot: React.FC<CartoonMascotProps> = () => {
  return null;
};
