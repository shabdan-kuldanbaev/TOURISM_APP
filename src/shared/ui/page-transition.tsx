'use client';
// Stairs Transition

import { motion } from 'framer-motion';
import type { Variants } from 'motion';
import type { ReactNode } from 'react';

export const expand: Variants = {
  initial: {
    top: 0,
  },
  enter: (i) => ({
    top: '100vh',
    transition: {
      duration: 0.4,
      delay: 0.05 * i,
      ease: [0.215, 0.61, 0.355, 1],
    },
    transitionEnd: { height: '0', top: '0' },
  }),
  exit: (i: number) => ({
    height: '100vh',
    transition: {
      duration: 0.4,
      delay: 0.05 * i,
      ease: [0.215, 0.61, 0.355, 1],
    },
  }),
};

export const opacity: Variants = {
  initial: {
    opacity: 0.5,
  },
  enter: {
    opacity: 0,
  },
  exit: {
    opacity: 0.5,
  },
};

export const PageTransition = ({ children }: { children: ReactNode }) => {
  const anim = (variants: Variants, custom: number | null = null) => {
    return {
      initial: 'initial',
      animate: 'enter',
      exit: 'exit',
      custom,
      variants,
    };
  };

  const nbOfColumns = 5;

  return (
    <div className="bg-background">
      <motion.div {...anim(opacity)} className="transition-background" />
      <div className="transition-container">
        {[...Array(nbOfColumns)].map((_, i) => {
          return <motion.div key={i} {...anim(expand, nbOfColumns - i)} />;
        })}
      </div>
      {children}
    </div>
  );
};
