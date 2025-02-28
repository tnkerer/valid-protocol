import React from 'react';
import { Wallet, Building2, Lock, Landmark, CreditCard, Shield, ArrowRight } from 'lucide-react';
import EcosystemCard from './EcosystemCard';

const EcosystemSection = () => {
  const platforms = [
    {
      title: "MetaMask",
      description: "A crypto wallet & gateway to blockchain apps.",
      type: "Wallet",
      icon: Wallet,
      logoUrl: "https://raw.githubusercontent.com/MetaMask/brand-resources/master/SVG/metamask-fox.svg"
    },
    {
      title: "Binance",
      description: "A crypto exchange & platform for digital asset trading.",
      type: "Exchange",
      icon: Building2,
    },
    {
      title: "Fireblocks",
      description: "Enterprise-grade security for digital assets.",
      type: "Security",
      icon: Lock,
    },
    {
      title: "Kraken",
      description: "Professional trading platform and custody solutions.",
      type: "Exchange",
      icon: Landmark,
    },
    {
      title: "Coinbase",
      description: "Leading cryptocurrency exchange platform.",
      type: "Exchange",
      icon: CreditCard,
    },
    {
      title: "Copper",
      description: "Institutional digital asset custody and trading.",
      type: "Custody",
      icon: Shield,
    },
    {
      title: "Uniswap",
      description: "Decentralized trading protocol for tokens.",
      type: "DeFi",
      icon: ArrowRight,
    },
  ];

  return (
    <section id="ecosystem" className="py-24 bg-transparent">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl font-normal mb-16 text-center">stXDC Ecosystem</h2>
        <div className="grid md:grid-cols-4 gap-8">
          {platforms.map((platform, i) => (
            <EcosystemCard
              key={i}
              title={platform.title}
              description={platform.description}
              type={platform.type}
              icon={platform.icon}
              logoUrl={platform.logoUrl}
            />
          ))}
          <div className="bg-gradient-to-br from-blue-500 to-blue-600 rounded-2xl p-8 text-white flex flex-col justify-between hover:shadow-lg transition-all group">
            <div>
              <h3 className="text-3xl font-normal mb-2">102+</h3>
              <p className="text-blue-100 font-light">More Apps</p>
            </div>
            <button className="mt-8 bg-white/10 rounded-full py-2 px-4 text-sm backdrop-blur-sm group-hover:bg-white/20 transition-colors font-light">
              Explore Ecosystem
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default EcosystemSection;
