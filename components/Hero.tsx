import React from 'react';
import Button from './Button';

const Hero = () => {
  return (
    <section
      id="staking"
      className="relative w-full min-h-[80vh] flex items-center overflow-hidden bg-transparent"
    >

      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-3xl">
          <h1 className="text-5xl md:text-5xl font-light mb-4 text-gray-900">
            Keep Your Liquidity
          </h1>
          <h2 className="text-7xl md:text-8xl font-normal mb-4 text-blue-500">
            stXDC
          </h2>

          <p className="text-xl md:text-2xl text-gray-600 font-light mb-8">
            Liquid XDC staking with no lock-ups
          </p>
          <Button>Stake XDC</Button>
        </div>
      </div>
    </section>
  );
};

export default Hero;
