'use client';

import { motion, stagger, useAnimate } from 'motion/react';
import { useEffect } from 'react';
import { cn } from '@/shared/lib';

export const TextGenerateEffect = ({
  words,
  className,
  filter = true,
  duration = 0.5,
}: {
  words: string;
  className?: string;
  filter?: boolean;
  duration?: number;
}) => {
  const [scope, animate] = useAnimate();
  const wordsArray = words.split(' ');

  useEffect(() => {
    animate(
      'span',
      {
        opacity: 1,
        filter: filter ? 'blur(0px)' : 'none',
      },
      {
        duration: duration ? duration : 1,
        delay: stagger(0.2),
      }
    );
  }, [scope.current]);

  return (
    <motion.div
      ref={scope}
      className={cn('flex gap-2 text-5xl font-medium leading-snug tracking-wide', className)}
    >
      {wordsArray.map((word, idx) => {
        return (
          <motion.span
            key={`${word + idx}`}
            className="text-current opacity-0"
            style={{
              filter: filter ? 'blur(10px)' : 'none',
            }}
          >
            {word}{' '}
          </motion.span>
        );
      })}
    </motion.div>
  );
};
