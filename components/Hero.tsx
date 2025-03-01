import React from 'react';
import Button from './Button';
import RotatingText from './RotatingText';

const Hero = () => {
  return (
    <section
      id="staking"
      className="relative w-full min-h-[80vh] md:min-h-[80vh] flex items-center overflow-hidden bg-transparent min-w-[470px]"
    >
      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-3xl">
          <h1 className="flex flex-col md:flex-row items-baseline text-5xl md:text-5xl font-light mb-4 text-gray-900">
            <span>Keep your</span>
            <span className="mt-1 md:mt-0 md:ml-2 inline-flex items-baseline">
              <RotatingText
                texts={['Liquidity', 'Security', 'Ownership']}
                mainClassName="px-2 sm:px-2 md:px-3 bg-transparent text-black overflow-hidden py-0.5 sm:py-1 md:py-2 rounded-lg"
                staggerFrom="last"
                initial={{ y: '100%' }}
                animate={{ y: 0 }}
                exit={{ y: '-120%' }}
                staggerDuration={0.025}
                splitLevelClassName="overflow-hidden pb-0.5 sm:pb-1 md:pb-1"
                transition={{ type: 'spring', damping: 30, stiffness: 400 }}
                rotationInterval={3000}
              />
            </span>
          </h1>

          <h2 className="text-7xl md:text-8xl font-normal mb-4 text-blue-500">
            stXDC
          </h2>

          <p className="text-xl md:text-2xl text-gray-600 font-light mb-8">
            Liquid XDC staking with no lock-ups
          </p>
          <Button className="hidden xs:block">Stake XDC</Button>
        </div>
      </div>
    </section>
  );
};

export default Hero;
