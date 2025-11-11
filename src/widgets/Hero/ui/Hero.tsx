'use client';

import { motion, stagger, useAnimate } from 'motion/react';
import Image from 'next/image';
import { useEffect } from 'react';
import { TextGenerateEffect } from '@/shared/ui';

export const Hero = () => {
  const [logoScope, animateLogo] = useAnimate();

  useEffect(() => {
    animateLogo(
      'img',
      {
        opacity: 1,
        filter: 'blur(0px)',
      },
      {
        duration: 1,
        delay: stagger(0.2),
      }
    );
  }, [logoScope.current]);

  return (
    <section className="relative h-screen flex items-center justify-center overflow-hidden">
      <video
        autoPlay
        loop
        muted
        playsInline
        poster="/hero/hero-poster.jpg"
        className="absolute z-10 w-auto min-w-full min-h-full max-w-none"
      >
        <source src="/hero/hero-desktop.mp4" type="video/mp4" media="(min-width: 1024px)" />
        <source
          src="/hero/hero-tablet.mp4"
          type="video/mp4"
          media="(min-width: 768px) and (max-width: 1023px)"
        />
        <source src="/hero/hero-mobile.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      <div className="relative z-20 px-4 mx-auto max-w-screen-xl flex flex-col items-center justify-center text-center gap-3">
        <motion.div ref={logoScope}>
          <Image
            src="/logos/logoLight.svg"
            alt="La Kirghize Logo"
            width={228}
            height={228}
            className="stroke-current fill-current opacity-0"
          />
        </motion.div>
        <TextGenerateEffect words="Découvrez le Kirghizistan avec nous" />
      </div>
    </section>
  );
};
