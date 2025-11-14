'use client';

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
      duration: 0.5,
      delay: 0.05 * i,
      ease: [0.215, 0.61, 0.355, 1],
    },
  }),
};

export const PageTransition = ({ children }: { children: ReactNode }) => {
  const anim = (variants: Variants, custom: number | null = null) => {
    return {
      initial: 'initial',
      animate: 'enter',
      custom,
      variants,
    };
  };

  const nbOfColumns = 5;

  return (
    <>
      <div className="fixed top-0 left-0 w-screen h-screen flex pointer-events-none z-50">
        {[...Array(nbOfColumns)].map((_, i) => {
          return (
            <motion.div
              key={i}
              {...anim(expand, nbOfColumns - i)}
              className="relative w-full h-full bg-background"
            />
          );
        })}
      </div>
      {children}
    </>
  );
};
