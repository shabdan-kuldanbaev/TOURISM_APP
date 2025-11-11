import type { Metadata } from 'next';
import { Noto_Sans_Adlam } from 'next/font/google';
import localFont from 'next/font/local';
import type { ReactNode } from 'react';

import { Footer } from '@/widgets/Footer';
import { Header } from '@/widgets/Header';

import './globals.css';
import { Providers } from '@/app/providers';
import { cn } from '@/shared/lib';

const notoFont = Noto_Sans_Adlam({ subsets: ['latin'] });

const customFont = localFont({
  src: '../public/font.ttf',
  variable: '--font-custom',
});

export const metadata: Metadata = {
  title: 'La Kirghize',
  description: 'A tourism app built with Next.js and Sanity',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={cn('flex flex-col min-h-screen', notoFont.className, customFont.variable)}>
        <Providers attribute="class" defaultTheme="system" enableSystem disableTransitionOnChange>
          <Header />
          <main className="flex-grow">{children}</main>
          <Footer />
        </Providers>
      </body>
    </html>
  );
}
