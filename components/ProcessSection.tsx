import React from 'react';
import Xdc from './icons/Xdc';
import Stxdc from './icons/Stxdc';
import Xswap from './icons/Xswap';
import Prime from './icons/Prime';

// Steps array with tooltip text for first two steps,
// and for the third step, an array of icons each with its own tooltip.
const steps = [
  {
    icon: <Xdc />,
    tooltip: "XDC Native Currency",
    label: "Stake XDC",
    title: "Simple and Fast",
    text: "Connect your wallet and start in seconds. No complications.",
  },
  {
    icon: <Stxdc />,
    tooltip: "Liquid Staked XDC",
    label: "Receive stXDC and Rewards",
    title: "Flexible and Liquid",
    text: "Receive liquid tokens and keep using your assets freely.",
  },
  {
    icons: [
      {
        component: <Xswap />,
        tooltip:
          "Xswap",
      },
      {
        component: <Prime />,
        tooltip:
          "Prime Numbers",
      },
    ],
    label: "Use stXDC in DeFi",
    title: "Functional Everywhere",
    text: "Trade, lend, or integrate with major DeFi platforms.",
  },
];

// Inline SVG for the first two steps (449x117)
const WideSvg = () => (
  <svg
    width="449"
    height="117"
    viewBox="0 0 449 117"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className="absolute"
  >
    <path
      d="M0.5 1.15845H58C89.7564 1.15845 115.5 26.9021 115.5 58.6584C115.5 90.4148 89.7564 116.158 58 116.158H0.5V1.15845Z"
      stroke="url(#paint0_linear_0_958)"
    />
    <path
      d="M296.354 59.012C296.549 58.8167 296.549 58.5002 296.354 58.3049L293.172 55.1229C292.976 54.9277 292.66 54.9277 292.464 55.1229C292.269 55.3182 292.269 55.6348 292.464 55.83L295.293 58.6584L292.464 61.4869C292.269 61.6821 292.269 61.9987 292.464 62.194C292.66 62.3892 292.976 62.3892 293.172 62.194L296.354 59.012ZM116 59.1584H296V58.1584H116V59.1584Z"
      fill="#D2D2D2"
    />
    <path
      d="M296.354 59.012C296.549 58.8167 296.549 58.5002 296.354 58.3049L293.172 55.1229C292.976 54.9277 292.66 54.9277 292.464 55.1229C292.269 55.3182 292.269 55.6348 292.464 55.83L295.293 58.6584L292.464 61.4869C292.269 61.6821 292.269 61.9987 292.464 62.194C292.66 62.3892 292.976 62.3892 293.172 62.194L296.354 59.012ZM116 59.1584H296V58.1584H116V59.1584Z"
      fill="url(#paint1_linear_0_958)"
      fillOpacity="0.5"
    />
    <defs>
      <linearGradient
        id="paint0_linear_0_958"
        x1="116"
        y1="58.4875"
        x2="5.92598e-06"
        y2="58.8293"
        gradientUnits="userSpaceOnUse"
      >
        <stop stopColor="#D2D2D2" />
        <stop offset="1" stopColor="#D2D2D2" stopOpacity="0" />
      </linearGradient>
      <linearGradient
        id="paint1_linear_0_958"
        x1="116"
        y1="59.1584"
        x2="296"
        y2="59.1584"
        gradientUnits="userSpaceOnUse"
      >
        <stop stopOpacity="0" />
        <stop offset="1" />
      </linearGradient>
    </defs>
  </svg>
);

// Inline SVG for the third step (116x117)
const CircleSvg = () => (
  <svg
    width="116"
    height="117"
    viewBox="0 0 116 117"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className="absolute"
  >
    <path
      d="M0.5 58.6584C0.5 26.9021 26.2436 1.15845 58 1.15845H115.5V116.158H58C26.2436 116.158 0.5 90.4148 0.5 58.6584Z"
      stroke="url(#paint0_linear_0_980)"
    />
    <defs>
      <linearGradient
        id="paint0_linear_0_980"
        x1="2.47969e-06"
        y1="58.8293"
        x2="116"
        y2="58.4875"
        gradientUnits="userSpaceOnUse"
      >
        <stop stopColor="#D2D2D2" />
        <stop offset="1" stopColor="#D2D2D2" stopOpacity="0" />
      </linearGradient>
    </defs>
  </svg>
);

const ProcessSection = () => {
  return (
    <section className="py-24 bg-transparent">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row items-start justify-between gap-12">
          {steps.map((step, index) => {
            const isLast = index === steps.length - 1;
            return (
              <div key={index} className="relative flex-1">
                {/* SVG background container */}
                <div className="relative w-[449px] h-[117px] md:w-[449px] md:h-[117px]">
                  {isLast ? (
                    <div className="w-[116px] h-[117px]">
                      <CircleSvg />
                    </div>
                  ) : (
                    <WideSvg />
                  )}
                  {/* Icon(s) container with hover tooltip */}
                  <div className="absolute top-1/2 left-8 transform -translate-y-1/2">
                    {isLast ? (
                      <div className="flex items-center space-x-[-2rem]">
                        <div className="relative group w-14 h-14 bg-transparent rounded-full flex items-center justify-center text-white drop-shadow-lg transition-transform duration-300 hover:scale-110">
                          <Prime/>
                          <div className="absolute -top-10 left-1/2 transform -translate-x-1/2 opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-black text-white text-xs px-2 py-1 rounded">
                            Prime Numbers
                          </div>
                        </div>
                        <div className="relative group w-14 h-14 bg-transparent rounded-full flex items-center justify-center text-white drop-shadow-lg transition-transform duration-300 hover:scale-110">
                          <Xswap/>
                          <div className="absolute -top-10 left-1/2 transform -translate-x-1/2 opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-black text-white text-xs px-2 py-1 rounded">
                            Xswap Protocol
                          </div>
                        </div>
                      </div>
                    ) : (
                      <div className="relative group w-14 h-14 bg-transparent rounded-full flex items-center justify-center text-white drop-shadow-lg transition-transform duration-300 hover:scale-110">
                        {step.icon}
                        <div className="absolute -top-10 left-1/2 transform -translate-x-1/2 opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-black text-white text-xs px-2 py-1 rounded">
                          {step.tooltip}
                        </div>
                      </div>
                    )}
                  </div>
                </div>

                {/* Step text content */}
                <div className="mt-6 text-sm text-gray-500 mb-2">{step.label}</div>
                <h3 className="text-2xl font-normal mb-4">{step.title}</h3>
                <p className="text-lg text-gray-600 font-light">{step.text}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default ProcessSection;
