import React from 'react';
import Button from './Button';
import StatCard from './StatCard';

const InstitutionalSection = () => {
  return (
    <section id="institutional" className="py-24 bg-transparent">
      <div className="container mx-auto px-6">
        <div className="max-w-2xl mx-auto text-center mb-16">
          <div className="text-sm text-gray-500 mb-2">Liquid Staking</div>
          <h2 className="text-4xl font-normal mb-6">Institutional</h2>
          <p className="text-xl text-gray-600 font-light mb-12">
            Earn staking rewards in a decentralized way with stXDC while maintaining liquidity and security.
          </p>
          <div className="flex gap-4 justify-center mb-16">
            <Button>Stake XDC</Button>
            <Button variant="secondary">Infrastructure</Button>
            <Button variant="secondary">Get in Touch</Button>
          </div>
        </div>
        <div className="grid md:grid-cols-3 gap-8">
          <StatCard value="50+" label="DeFi Integrations" />
          <StatCard value="$100M+" label="Weekly Trading Volume" />
          <StatCard value="10,000+" label="Active Wallets" />
        </div>
      </div>
    </section>
  );
};

export default InstitutionalSection;
