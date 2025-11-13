'use client';

import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';
import {
  MobileNav,
  MobileNavHeader,
  MobileNavMenu,
  MobileNavToggle,
  NavBody,
  Navbar,
  NavbarButton,
  NavItems,
} from '@/shared/ui';

const navItems = [
  {
    name: 'Qui somme nous ?',
    link: '#qui-somme-nous',
  },
  {
    name: 'Programme',
    link: '#programme',
  },
  {
    name: 'Galerie',
    link: '#galerie',
  },
  {
    name: 'Articles',
    link: '/articles',
  },
];

function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <Navbar>
      {/* Desktop Navigation */}
      <NavBody>
        <Link
          href="/"
          className="flex items-center gap-2 z-10 text-2xl font-bold font-custom cursor-pointer"
        >
          {/* Light logo - hidden in dark mode */}
          <Image
            src="/logos/logo.svg"
            alt="La Kirghize logo"
            width={32}
            height={32}
            className="block dark:hidden"
          />
          {/* Dark logo - hidden in light mode */}
          <Image
            src="/logos/logoLight.svg"
            alt="La Kirghize logo"
            width={32}
            height={32}
            className="hidden dark:block"
          />
          <span>La Kirghize</span>
        </Link>
        <NavItems items={navItems} />
        <div className="flex items-center gap-4">
          <NavbarButton as={Link} variant="primary" href="/">
            Contact
          </NavbarButton>
        </div>
      </NavBody>

      {/* Mobile Navigation */}
      <MobileNav>
        <MobileNavHeader>
          <Link href="/" className="px-4 text-2xl font-bold font-custom cursor-pointer">
            La Kirghize
          </Link>
          <MobileNavToggle
            isOpen={isMobileMenuOpen}
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          />
        </MobileNavHeader>

        <MobileNavMenu isOpen={isMobileMenuOpen} onClose={() => setIsMobileMenuOpen(false)}>
          {navItems.map((item, idx) => (
            <a
              key={`mobile-link-${idx}`}
              href={item.link}
              onClick={() => setIsMobileMenuOpen(false)}
              className="relative text-neutral-600 dark:text-neutral-300"
            >
              <span className="block">{item.name}</span>
            </a>
          ))}
          <div className="flex w-full flex-col gap-4">
            <NavbarButton
              onClick={() => setIsMobileMenuOpen(false)}
              variant="primary"
              className="w-full"
            >
              Contact
            </NavbarButton>
          </div>
        </MobileNavMenu>
      </MobileNav>
    </Navbar>
  );
}

export default Header;
