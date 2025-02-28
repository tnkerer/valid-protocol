import React from 'react';
import Link from 'next/link';
import Logo from './Logo';

const Footer = () => {

  return (
    <footer className="py-24 bg-transparent">
      <div className="container mx-auto px-6">
        <div className="grid gap-8 md:grid-cols-2">
          {/* Left Column: Logo + Text */}
          <div>
            <Logo />
            <p className="text-gray-500 mt-4 max-w-md">
              Valid Protocol revolutionizes XDC staking with stXDC – a liquid staking token offering robust security, high liquidity, and flexible rewards. Our platform simplifies node hosting and protocol management, delivering competitive DeFi benefits for both private and community stakers.
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
