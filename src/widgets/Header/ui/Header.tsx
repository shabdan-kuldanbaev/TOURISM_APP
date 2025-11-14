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
    name: 'L’équipe',
    link: '#qui-somme-nous',
  },
  {
    name: 'Circuit',
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
      <NavBody>
        <Link href="/" className="flex items-center gap-2 z-10 text-2xl cursor-pointer">
          <Image src="/logos/logoLight.svg" alt="La Kirghize logo" width={32} height={32} />
          <span className="text-white font-bold font-custom">La Kirghize</span>
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
          <Link href="/" className="flex items-center gap-2 z-10 text-2xl cursor-pointer">
            <Image src="/logos/logoLight.svg" alt="La Kirghize logo" width={32} height={32} />
            <span className="text-white font-bold font-custom">La Kirghize</span>
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
