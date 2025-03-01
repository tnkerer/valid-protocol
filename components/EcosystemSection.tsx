import React from 'react';
import EcosystemCard from './EcosystemCard';

const EcosystemSection = () => {
  const platforms = [
    {
      title: "XDC Network",
      description: "The XDC Network sets a benchmark for digitizing trade finance by enabling the tokenization of diverse trade finance instruments and assets.",
      type: "Network",
      icon: "xdc",
    },
    {
      title: "Prime Numbers",
      description: "Prime Numbers Labs is a revolutionary DeFi ecosystem that seamlessly integrates lending, borrowing, staking, and NFT markets into an all-in-one platform.",
      type: "DeFi",
      icon: "prime",
    },
    {
      title: "YodaPlus",
      description: "Yodaplus delivers AI-driven, secure, and scalable solutions for Finance, Retail, Supply Chain, and Blockchain, empowering businesses for the future.",
      type: "Development",
      icon: "yoda",
    },
    {
      title: "DefiMoon",
      description: "Transformative Web3 development for startups and enterprises. A Vanguard in DeFi Development.",
      type: "Development",
      icon: "moon",
    },
    {
      title: "Node Forge",
      description: "Node Forge is a multi-cloud blockchain infrastructure and masternode hosting platform. Making deploying and scaling node-based systems effortless.",
      type: "Infrastructure",
      icon: "forge",
    },
    {
      title: "X Swap Protocol",
      description: "XSwap is a decentralized exchange for XRC20 tokens and is built on the XDC Network. It allows all customers to Swap & Earn inside secured pools.",
      type: "DeFi",
      icon: "xswap",
    },
    {
      title: "XDCS",
      description: "Focused on cutting-edge technology, X Digital Capital Solutions uses the best technologies and practices to create innovative blockchain solutions.",
      type: "Infrastructure",
      icon: "xdcs",
    },
    {
      title: "Data Foundry",
      description: "Expert full-stack development, smart contract solutions, CI/CD automation, DevOps, and agile training. Delivering scalable, secure, and efficient software solutions from start to finish.",
      type: "Development",
      icon: "data",
    },
  ];

  return (
    <section id="ecosystem" className="relative py-24 bg-transparent min-w-[470px] mt-32">

      <div className="container max-w-[1200px] mx-auto px-6">

        <div className="max-w-[1200px] mx-auto px-6 text-left mb-12">

          <p className="text-sm uppercase text-gray-900 tracking-wider mb-2">
            Ecosystem Partners
          </p>
          <h2 className="text-6xl md:text-6xl mb-4 text-blue-500">
            stXDC
          </h2>
          <p className="max-w-[600px] text-gray-600">
            Network of interconnected partners that work together to support the creation, management, and use of digital currencies.
          </p>
        </div>
        <div className="grid md:grid-cols-2 gap-8">
          {platforms.map((platform, i) => (
            <EcosystemCard
              key={i}
              title={platform.title}
              description={platform.description}
              type={platform.type}
              icon={platform.icon}
            />
          ))}
        </div>
      </div>
    </section>

  );
};

export default EcosystemSection;
