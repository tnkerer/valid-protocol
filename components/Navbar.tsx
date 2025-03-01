// Navbar.tsx
import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { Menu } from 'lucide-react'; // hamburger icon
import Logo from './Logo';
import Button from './Button';
import MobileMenu from './MobileMenu'; // new overlay component

type NavbarProps = {
  activeSection?: string; // If you're highlighting sections on the main page
};

const Navbar = ({ activeSection = '' }: NavbarProps) => {
  const router = useRouter();
  // Check if user is on contact or policy page
  const isOnSpecialPage =
    router.pathname === '/contact' || router.pathname === '/policy';

  // Local state for controlling the mobile menu
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  // Local state for controlling navbar visibility based on scroll position
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      // Use half the viewport height as the threshold
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

  // Navigation links
  const navLinks = [
    {
      href: isOnSpecialPage ? '/#staking' : '#staking',
      label: 'Staking',
    },
    {
      href: isOnSpecialPage ? '/#institutional' : '#institutional',
      label: 'Institutional',
    },
    {
      href: isOnSpecialPage ? '/#ecosystem' : '#ecosystem',
      label: 'Ecosystem',
    },
    {
      href: isOnSpecialPage ? '/#faq' : '#faq',
      label: 'FAQ',
    },
    {
      href: '/contact',
      label: 'Contact',
    },
  ];

  // We'll hide the normal nav links below 770px, show a hamburger icon instead
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 770);
    };
    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  // Function to open/close the mobile menu
  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  return (
    <>
      <nav
        className={`fixed top-0 w-full z-50 bg-white/60 backdrop-blur-xl border-b border-gray-100 transition-opacity duration-500 ${
          visible ? 'opacity-100' : 'opacity-0 pointer-events-none'
        }`}
      >
        <div className="container mx-auto px-6 py-4">
          <div className="flex flex-row justify-between items-center gap-4">
            <Link href="/">
              <Logo />
            </Link>
            {/* Mobile view: show hamburger icon */}
            {isMobile ? (
              <button
                onClick={toggleMobileMenu}
                aria-label="Open mobile menu"
                className="text-gray-600 hover:text-blue-500 transition-colors"
              >
                <Menu className="w-6 h-6" />
              </button>
            ) : (
              <div className="flex items-center gap-8">
                {navLinks.map(({ href, label }) => {
                  const isActive =
                    !isOnSpecialPage && href.replace('#', '') === `#${activeSection}`;
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
            )}
          </div>
        </div>
      </nav>

      {/* Mobile Menu Overlay */}
      {mobileMenuOpen && (
        <MobileMenu navLinks={navLinks} onClose={toggleMobileMenu} />
      )}
    </>
  );
};

export default Navbar;
