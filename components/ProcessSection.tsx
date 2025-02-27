import React from 'react';
import { Wallet, Shield, ArrowRight } from 'lucide-react';

const ProcessSection = () => {
  return (
    <section className="py-24 bg-transparent">
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-3 gap-12">
          <div>
            <div className="w-14 h-14 rounded-full border border-gray-200 flex items-center justify-center mb-6">
              <Wallet className="w-8 h-8 text-gray-900" />
            </div>
            <div className="text-sm text-gray-500 mb-2">Connect Wallet</div>
            <h3 className="text-2xl font-normal mb-4">Simple and Fast</h3>
            <p className="text-lg text-gray-600 font-light">
              Connect your wallet and start in seconds. No complications.
            </p>
          </div>
          <div>
            <div className="w-14 h-14 rounded-full border border-gray-200 flex items-center justify-center mb-6">
              <Shield className="w-8 h-8 text-gray-900" />
            </div>
            <div className="text-sm text-gray-500 mb-2">Receive Tokens</div>
            <h3 className="text-2xl font-normal mb-4">Flexible and Liquid</h3>
            <p className="text-lg text-gray-600 font-light">
              Receive liquid tokens and keep using your assets freely.
            </p>
          </div>
          <div>
            <div className="w-14 h-14 rounded-full border border-gray-200 flex items-center justify-center mb-6">
              <ArrowRight className="w-8 h-8 text-gray-900" />
            </div>
            <div className="text-sm text-gray-500 mb-2">Use in DeFi</div>
            <h3 className="text-2xl font-normal mb-4">Functional Everywhere</h3>
            <p className="text-lg text-gray-600 font-light">
              Trade, lend, or integrate with major DeFi platforms.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProcessSection;
