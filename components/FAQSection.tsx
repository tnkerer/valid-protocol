import React, { useState } from 'react';
import { ChevronDown } from 'lucide-react';

type FAQItemProps = {
  question: string;
  answer: string;
};

const FAQItem = ({ question, answer }: FAQItemProps) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div
      className="relative overflow-hidden shadow-md rounded-2xl p-6"
      style={{
        // Fading effect on the left edge
        background: 'linear-gradient(to right, rgba(255,255,255,0.8), #ffffff)',
      }}
    >
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full flex justify-between items-center text-left group"
      >
        <h3 className="text-lg md:text-xl font-medium text-gray-900 group-hover:text-blue-500 transition-colors">
          {question}
        </h3>
        <div className="rounded-full bg-gray-100 p-1 ml-4">
          <ChevronDown
            className={`transform transition-transform ${
              isOpen ? 'rotate-180' : ''
            } text-blue-500 w-5 h-5`}
          />
        </div>
      </button>
      {isOpen && (
        <div className="mt-4 border-t border-gray-100 pt-4">
          <p className="text-gray-600 leading-relaxed">{answer}</p>
        </div>
      )}
    </div>
  );
};

const FAQSection = () => {
  return (
    <section id="faq" className="py-24 bg-transparent">
      <div className="container mx-auto">
        {/* Header area: centered container with left-aligned text */}
        <div className="max-w-4xl mx-auto px-6 text-left mb-12">
          <p className="text-sm uppercase text-blue-500 tracking-wider mb-2">FAQ</p>
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-900">
            Common Questions
          </h2>
          <p className="text-gray-600">
            Find clear, detailed, and helpful answers to the most frequently asked
            questions about our platform. Everything you need to know, explained simply.
          </p>
        </div>

        {/* FAQ cards container: centered and with the same padding */}
        <div className="max-w-4xl mx-auto px-6 space-y-4">
          <FAQItem
            question="What is XDC Network and how does it work?"
            answer="XDC Network is a hybrid blockchain designed for enterprise-grade use, combining public and private blockchain features. It offers high-speed transactions, low fees, and smart contract capabilities—ideal for trade finance and decentralized applications (dApps)."
          />
          <FAQItem
            question="How can I stake XDC and earn rewards?"
            answer="By staking XDC, you can earn rewards while contributing to network security. The process is simple and efficient—connect your wallet, select the amount, and start earning."
          />
          <FAQItem
            question="What is stXDC and how does it benefit me?"
            answer="stXDC is a liquid staking token that represents your staked XDC. It allows you to earn staking rewards while maintaining liquidity and participating in DeFi activities."
          />
          <FAQItem
            question="Where can I store my XDC securely?"
            answer="You can store XDC in secure wallets like MetaMask or use institutional-grade custodians such as Fireblocks or Copper."
          />
          <FAQItem
            question="Which platforms support XDC for trading and DeFi?"
            answer="XDC is supported on major exchanges like Binance, Coinbase, and Kraken, and integrated with popular DeFi protocols like Uniswap."
          />
          <FAQItem
            question="How is XDC different from Ethereum or other blockchains?"
            answer="XDC combines public and private blockchain features, offering high-speed transactions, lower fees, and enterprise-focused smart contract capabilities."
          />
        </div>
      </div>
    </section>
  );
};

export default FAQSection;
