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
  NavItems,
} from '@/shared/ui';

const navItems = [
  {
    name: 'L’équipe',
    link: '/qui-somme-nous',
  },
  {
    name: 'Circuit',
    link: '/programme',
  },
  {
    name: 'Galerie',
    link: '/galerie',
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
        <NavItems
          items={navItems}
          itemStart={
            <Link href="/" className="flex items-center gap-2 z-10 text-2xl cursor-pointer">
              <Image src="/logos/logoLight.svg" alt="La Kirghize logo" width={32} height={32} />
              <span className="text-white font-bold font-custom">La Kirghize</span>
            </Link>
          }
        />
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
            <Link
              key={`mobile-link-${idx}`}
              href={item.link}
              onClick={() => setIsMobileMenuOpen(false)}
              className="relative text-neutral-600 dark:text-neutral-300"
            >
              <span className="block">{item.name}</span>
            </Link>
          ))}
        </MobileNavMenu>
      </MobileNav>
    </Navbar>
  );
}

export default Header;
