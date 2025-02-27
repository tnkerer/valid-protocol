import React from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';
import Logo from './Logo';

const Footer = () => {
  const router = useRouter();
  const isOnContactPage = router.pathname === '/contact';

  // For the “in-page” links, if we’re on the contact page, prefix them with “/”
  // so they navigate back to the main page sections (/#staking, etc.).
  // Otherwise, just “#staking” for normal in-page scrolling.
  const stakingLink = isOnContactPage ? '/#staking' : '#staking';
  const institutionalLink = isOnContactPage ? '/#institutional' : '#institutional';
  const ecosystemLink = isOnContactPage ? '/#ecosystem' : '#ecosystem';
  const faqLink = isOnContactPage ? '/#faq' : '#faq';

  return (
    <footer className="py-24 bg-transparent">
      <div className="container mx-auto px-6">
        <div className="grid gap-8 md:grid-cols-2">
          {/* Left Column: Logo + Text */}
          <div>
            <Logo />
            <p className="text-gray-500 mt-4 max-w-md">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi volutpat ut sem vitae maximus.
              Fusce laoreet et elit sit amet pellentesque. Etiam purus turpis, molestie et iaculis nec, volutpat vitae velit.
            </p>
          </div>

          {/* Right Column: Links */}
          <div className="flex flex-col md:flex-row justify-end gap-16">
            <div className="flex flex-col space-y-2">
              <Link href="/#staking" className="text-gray-600 hover:text-blue-500 transition-colors">
                Staking
              </Link>
              <Link href="/#institutional" className="text-gray-600 hover:text-blue-500 transition-colors">
                Institutional
              </Link>
              <Link href="/#ecosystem" className="text-gray-600 hover:text-blue-500 transition-colors">
                Ecosystem
              </Link>
              <Link href="/#faq" className="text-gray-600 hover:text-blue-500 transition-colors">
                FAQ
              </Link>
              <Link href="/contact" className="text-gray-600 hover:text-blue-500 transition-colors">
                Contact Us
              </Link>
            </div>
            <div className="flex flex-col space-y-2">
              <a
                href="https://t.me/YourTelegramChannel"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-600 hover:text-blue-500 transition-colors"
              >
                Telegram
              </a>
            </div>
            <div className="flex flex-col space-y-2">
              <a href="#" className="text-gray-600 hover:text-blue-500 transition-colors">
                Terms &amp; Conditions
              </a>
              <a href="#" className="text-gray-600 hover:text-blue-500 transition-colors">
                Privacy Policy
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>

  );
};

export default Footer;
