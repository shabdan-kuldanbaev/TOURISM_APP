import Image from 'next/image';
import { TextGenerateEffect } from '@/shared/ui';

export const ArticlesSection = () => {
  return (
    <section className="sticky z-10 top-0 h-[50vh]">
      <div className="relative w-full h-full flex justify-center items-center">
        <Image
          src="https://cdn.sanity.io/images/r0p5o66x/production/ccb77f94f0339891735c8f806f95e6ac290d6928-4885x3257.webp"
          alt="Kyrgyzstan"
          fill
          objectFit="cover"
          className="blur-xs"
          preload
        />

        <h1>
          <TextGenerateEffect
            words="Mon blog des lieux et des moments"
            className="text-white uppercase mx-auto gap-4 items-center justify-center flex-wrap max-w-3xl font-bold text-5xl md:text-7xl"
          />
        </h1>
      </div>
    </section>
  );
};
