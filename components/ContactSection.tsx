import React from 'react';
import Link from 'next/link';
import Button from './Button';

const ContactSection = () => {
  return (
    <section
      id="contact"
      className="py-24 flex justify-center items-center overflow-hidden relative"
    >
      <div className="relative w-full max-w-[972px] h-[305px] rounded-2xl overflow-hidden shadow-lg shadow-blue-100/50 contact-container">
        
        {/* Gradient overlay */}
        <div
          className="absolute inset-0"
          style={{
            background:
              'linear-gradient(90deg, #0052FF 0%,#4c82f7 100%)',
            opacity: 0.9,
          }}
        />
        {/* Background image, hidden on small screens */}
        <div
          className="absolute inset-0 bg-no-repeat bg-center bg-contain hide-contact-bg"
          style={{ backgroundImage: 'url("/assets/contact-bg.png")' }}
        />

        {/* Actual content on top */}
        <div className="relative z-10 flex flex-col items-center justify-center h-full text-center px-8 text-white">
          <h2 className="text-3xl md:text-4xl font-normal mb-4">
            Have Questions? Get in Touch!
          </h2>
          <p className="text-xl md:text-4x3 font-light mb-8">
            Our team is here to help you with any questions about stXDC and liquid staking.
          </p>
          <Link href="/contact">
            <Button variant="whiteBg">Contact Us</Button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
