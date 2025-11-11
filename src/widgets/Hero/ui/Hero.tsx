'use client';

import { ArrowRight } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import { Button } from '@/shared/ui/button';

export const Hero = () => {
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
      <div className="relative z-20 px-4 mx-auto max-w-screen-xl flex flex-col items-center justify-center text-center gap-2">
        <div className="text-white">
          <Image
            src="/logos/logoLight.svg"
            alt="La Kirghize Logo"
            width={96}
            height={96}
            className="stroke-current fill-current"
          />
        </div>
        <h1 className="mb-4 text-4xl font-extrabold tracking-tight leading-none text-white md:text-5xl lg:text-6xl">
          Discover the World with Us
        </h1>
        <p className="mb-8 text-lg font-normal text-gray-300 lg:text-xl sm:px-16 lg:px-48">
          Your journey begins here. Explore breathtaking destinations and create unforgettable
          memories.
        </p>
        <div className="flex flex-col space-y-4 sm:flex-row sm:justify-center sm:space-y-0">
          <Link href="/">
            <Button className="inline-flex justify-center items-center py-3 px-5 text-base font-medium text-center text-white rounded-lg bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 dark:focus:ring-blue-900">
              Get started
              <ArrowRight className="w-3.5 h-3.5 ms-2 rtl:rotate-180" />
            </Button>
          </Link>
          <Link href="/">
            <Button
              variant="outline"
              className="inline-flex justify-center hover:text-gray-900 items-center py-3 px-5 sm:ms-4 text-base font-medium text-center text-white rounded-lg border border-white hover:bg-gray-100 focus:ring-4 focus:ring-gray-400"
            >
              Learn more
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
};
