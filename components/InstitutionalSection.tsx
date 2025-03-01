import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Button from './Button';
import StatCard from './StatCard';

const statData = {
  liquid: [
    { value: "Maintain Liquidity While Earning", label: "Stake your assets without locking them up—earn rewards and keep your funds accessible with stXDC." },
    { value: "Flexible Staking Solutions", label: "Enjoy the benefits of staking with the freedom to trade or utilize your assets anytime." },
    { value: "Maximize Asset Utility", label: "Leverage liquid staking to participate in DeFi opportunities while earning staking rewards." },
  ],
  anchor: [
    { value: "Become a Core Contributor", label: "Lock in premium rewards by operating a private node with 10 million XDC at 8.5% APY." },
    { value: "Foundation of the Protocol", label: "Anchor stakers are essential to our community, sharing in rewards from liquid stakers." },
    { value: "Restake and Swap Rewards", label: "Benefit from non-liquid staking with the ability to restake and convert unlocked rewards into Liquid Staking Derivatives (LSD)." },
  ],
  native: [
    { value: "Start Staking with Low Minimums", label: "Begin staking with as little as 10,000 XDC and enjoy a 7% APY." },
    { value: "Secure and Steady Rewards", label: "Experience the same security and consistent rewards with native staking." },
    { value: "One-Year Commitment​", label: "Engage in non-liquid staking with a one-year lockup period, with options to restake and swap unlocked rewards into LSD." },
  ],
};

const InstitutionalSection = () => {
  const [activeStaking, setActiveStaking] = useState("liquid");

  return (
    <section id="institutional" className="py-24 bg-transparent min-w-[470px]">
      <div className="container mx-auto px-6">
        <div className="max-w-2xl mx-auto text-center mb-16">
          <p className="text-2xl text-gray-600 mb-2">Our Services</p>
          <h2 className="text-6xl font-normal mb-6">Institutional</h2>
          <p className="text-xl text-gray-600 font-light mb-12">
            Earn staking rewards in a decentralized way with stXDC while maintaining liquidity and security.
          </p>
          <div className="flex gap-4 justify-center mb-16">
            <Button
              onClick={() => setActiveStaking('liquid')}
              {...(activeStaking !== 'liquid' && { variant: 'secondary' })}
            >
              Liquid Staking
            </Button>
            <Button
              onClick={() => setActiveStaking('anchor')}
              {...(activeStaking !== 'anchor' && { variant: 'secondary' })}
            >
              Anchor Staking
            </Button>
            <Button
              onClick={() => setActiveStaking('native')}
              {...(activeStaking !== 'native' && { variant: 'secondary' })}
            >
              Native Staking
            </Button>
          </div>
        </div>
        <div className="relative">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeStaking}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.3 }}
              className="grid md:grid-cols-3 gap-8"
            >
              {statData[activeStaking].map((stat, index) => (
                <StatCard key={index} value={stat.value} label={stat.label} />
              ))}
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
};

export default InstitutionalSection;
