'use client';

import { format } from 'date-fns';
import { fr } from 'date-fns/locale';
import { AnimatePresence, motion } from 'motion/react';
import Image from 'next/image';
import { useState } from 'react';
import { cn } from '@/shared/lib';

export const HoverEffect = ({
  items,
  className,
}: {
  items: {
    title: string;
    description: string;
    link: string;
    previewImage: string;
    date: string;
  }[];
  className?: string;
}) => {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  return (
    <div className={cn('grid grid-cols-1 lg:grid-cols-4 lg:grid-rows-2', className)}>
      {items.map((item, idx) => (
        <a
          href={item?.link}
          key={item?.link}
          className={cn(
            'relative group block p-2 h-full w-full',
            idx === 0 && 'lg:row-span-2 lg:col-span-2' // First item spans 2 rows
          )}
          onMouseEnter={() => setHoveredIndex(idx)}
          onMouseLeave={() => setHoveredIndex(null)}
        >
          <AnimatePresence>
            {hoveredIndex === idx && (
              <motion.span
                className="absolute inset-0 h-full w-full bg-neutral-200 dark:bg-slate-800/[0.8] block  rounded-3xl"
                layoutId="hovered"
                initial={{ opacity: 0 }}
                animate={{
                  opacity: 1,
                  transition: { duration: 0.5 },
                }}
                exit={{
                  opacity: 0,
                  transition: { duration: 0.5, delay: 0.2 },
                }}
              />
            )}
          </AnimatePresence>
          <Card>
            <div className={cn('relative w-full h-40', idx === 0 && 'lg:h-[584px]')}>
              <Image
                fill
                src={item.previewImage}
                alt={item.title}
                className="w-full h-full"
                objectFit="cover"
              />
            </div>
            <div className="flex-1 flex flex-col gap-3 p-4">
              <time className="text-right text-xs text-muted-foreground dark:text-muted-foreground font-mono tracking-wider uppercase">
                {format(new Date(item.date), 'MMMM d, yyyy', { locale: fr })}
              </time>

              <div className="h-px bg-border dark:bg-border/50" />

              <div className="flex flex-col gap-3 flex-1">
                <h3
                  className={cn(
                    'text-base font-medium text-foreground dark:text-card-foreground group-hover:text-primary dark:group-hover:text-primary transition-colors duration-300 text-balance',
                    idx === 0 && 'lg:text-3xl'
                  )}
                >
                  {item.title}
                </h3>
                <p
                  className={cn(
                    'text-sm text-muted-foreground dark:text-muted-foreground leading-relaxed text-balance',
                    idx === 0 && 'lg:text-xl'
                  )}
                >
                  {item.description}
                </p>
              </div>
            </div>
          </Card>
        </a>
      ))}
    </div>
  );
};

export const Card = ({
  className,
  children,
}: {
  className?: string;
  children: React.ReactNode;
}) => {
  return (
    <div
      className={cn(
        'relative z-10 flex flex-col gap-0 rounded-2xl h-full w-full overflow-hidden bg-background shadow-sm dark:shadow-slate-800/[0.8]',
        className
      )}
    >
      {children}
    </div>
  );
};
