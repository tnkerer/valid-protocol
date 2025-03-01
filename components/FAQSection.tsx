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
        {/* Header area */}
        <div className="max-w-4xl mx-auto px-6 text-left mb-12">
          <p className="text-sm uppercase text-gray-900 tracking-wider mb-2">
            FAQ
          </p>
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-blue-500">
            Common Questions
          </h2>
          <p className="text-gray-600">
            Find clear, detailed, and helpful answers to the most frequently
            asked questions about our platform. Everything you need to know,
            explained simply.
          </p>
        </div>

        {/* FAQ cards container */}
        <div className="max-w-4xl mx-auto px-6 space-y-4">
          <FAQItem
            question="What is the advantage of staking on Valid versus staking privately?"
            answer="Staking on Valid Protocol offers several advantages over private staking. By using Valid, you gain access to liquidity through liquid staking tokens (LST), allowing you to easily swap or trade your staked assets at any time. Additionally, Valid handles the technical aspects, such as node hosting, updates, and protocol maintenance, so you don’t need to worry about running or managing your own node."
          />
          <FAQItem
            question="What is stXDC?"
            answer="stXDC is a rebasing liquid staking token (LST) that represents a user’s share of the total XDC staked via the Valid Protocol."
          />
          <FAQItem
            question="What is an Anchor Staker?"
            answer="An Anchor Staker is a user who operates their own private node. To become an Anchor Staker, you need to stake a minimum of 10 million XDC and will earn the highest APY. Anchor Stakers receive stXDC in a 1:1 ratio, but these tokens are not liquid. However, any rewards earned or unstaked XDC on Valid Protocol can be converted into LST tokens at any time."
          />
          <FAQItem
            question="What is a Native Staker?"
            answer="Native Stakers are community members who pool their XDC tokens with others to create a node. The funds are locked for a predetermined period to ensure the security of the staked tokens. Native Stakers receive stXDC in a 1:1 ratio, but these tokens are not liquid. Similar to Anchor Stakers, any rewards or unstaked XDC on Valid Protocol can be converted into LST tokens at any time. A minimum of 1,000 XDC is required to become a Native Staker, and they earn the second-highest APY."
          />
          <FAQItem
            question="What is an LST Staker?"
            answer="LST Stakers receive stXDC in a 1:1 ratio and are always liquid. Users can switch to Native Staker tokens at any time to lock their funds for a higher APY."
          />
          <FAQItem
            question="What does LST stand for?"
            answer="LST stands for Liquid Staked Token. It represents a tokenized form of staked assets, allowing users to retain liquidity while participating in staking."
          />
          <FAQItem
            question="What do the protocol fees cover on Valid Protocol?"
            answer="The protocol fees on Valid Protocol help cover the costs of third-party node hosting services and the ongoing expenses associated with maintaining and operating the protocol."
          />
          <FAQItem
            question="Does the Valid Protocol Team offer private customized staking solutions outside of the protocol?"
            answer="Yes, the Valid Protocol Team does offer private customized staking solutions outside of the protocol. For more information or to inquire about these services, please reach out by filling out the form at this link, and a team member will get in touch with you."
          />
        </div>
      </div>
    </section>
  );
};

export default FAQSection;
