import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';
import Logo from './Logo';
import Button from './Button';

type NavbarProps = {
  activeSection?: string; // If you're highlighting sections on the main page
};

const Navbar = ({ activeSection = '' }: NavbarProps) => {
  const router = useRouter();
  const isOnContactPage = router.pathname === '/contact';

  const [visible, setVisible] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      const threshold = window.innerHeight / 2;
      if (window.scrollY > threshold) {
        setVisible(false);
      } else {
        setVisible(true);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Define navigation links with conditional prefixes for in-page anchors
  const navLinks = [
    {
      href: isOnContactPage ? '/#staking' : '#staking',
      label: 'Staking',
    },
    {
      href: isOnContactPage ? '/#institutional' : '#institutional',
      label: 'Institutional',
    },
    {
      href: isOnContactPage ? '/#ecosystem' : '#ecosystem',
      label: 'Ecosystem',
    },
    {
      href: isOnContactPage ? '/#faq' : '#faq',
      label: 'FAQ',
    },
    // Always link to /contact for the dedicated page
    {
      href: '/contact',
      label: 'Contact',
    },
  ];

  return (
    <nav
      className={`fixed top-0 w-full z-50 bg-white/60 backdrop-blur-xl border-b border-gray-100 transition-opacity duration-500 ${
        visible ? 'opacity-100' : 'opacity-0 pointer-events-none'
      }`}
    >
      <div className="container mx-auto px-6 py-4">
        <div className="flex flex-row justify-between items-center gap-4">
          <Logo />
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map(({ href, label }) => {
              // Optionally highlight the link if on main page & matching activeSection
              const isActive =
                !isOnContactPage && href.replace('#', '') === `#${activeSection}`;
              return (
                <Link
                  key={label}
                  href={href}
                  className={`text-gray-600 hover:text-blue-500 transition-colors ${
                    isActive ? 'text-blue-500' : ''
                  }`}
                >
                  {label}
                </Link>
              );
            })}
            <Button variant="blue">Stake XDC</Button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
