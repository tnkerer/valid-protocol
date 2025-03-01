import React from 'react';
import XdcNetwork from './icons/XdcNetwork';
import Prime from './icons/Prime';
import YodaPlus from './icons/YodaPlus';
import DefiMoon from './icons/DefiMoon';
import NodeForge from './icons/NodeForge';
import Xswap from './icons/Xswap';
import Xdcs from './icons/Xdcs';
import DataFoundry from './icons/DataFoundry';

// Icon mapping object
const iconMap: Record<string, React.ElementType> = {
  xdc: XdcNetwork,
  prime: Prime,
  yoda: YodaPlus,
  moon: DefiMoon,
  forge: NodeForge,
  xswap: Xswap,
  xdcs: Xdcs,
  data: DataFoundry,
};

const EcosystemCard = ({
  title,
  description,
  type,
  icon,
}: {
  title: string;
  description: string;
  type: string;
  icon: string;
}) => {
  const IconComponent = iconMap[icon] || null;

  return (
    <div className="bg-transparent rounded-2xl p-8 hover:shadow-lg transition-all group">
      {/* Icon Container with SVG Frame */}
      <div className="relative w-[116px] h-[117px] flex items-center justify-center mb-6">
        {/* SVG Frame */}
        <svg
          width="116"
          height="117"
          viewBox="0 0 116 117"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="absolute"
        >
          <path
            d="M0.5 58.1582C0.5 26.4018 26.2436 0.658203 58 0.658203H115.5V115.658H58C26.2436 115.658 0.5 89.9146 0.5 58.1582Z"
            stroke="url(#paint0_linear_0_1107)"
          />
          <defs>
            <linearGradient id="paint0_linear_0_1107" x1="0" y1="58.3291" x2="116" y2="57.9873" gradientUnits="userSpaceOnUse">
              <stop stopColor="#D2D2D2"/>
              <stop offset="1" stopColor="#D2D2D2" stopOpacity="0"/>
            </linearGradient>
          </defs>
        </svg>
        {/* Centered Icon or Logo with Hover Effect */}
        <div className="relative w-14 h-14 rounded-full border border-gray-200 flex items-center justify-center transition-colors group-hover:scale-110 transition-transform duration-300">
          {IconComponent && <IconComponent className="w-8 h-8 text-gray-900 group-hover:text-blue-500 drop-shadow-lg transition-transform duration-300" />}
        </div>
      </div>
      {/* Card Details */}
      <div className="text-sm text-gray-500 mb-2 font-light">{type}</div>
      <h3 className="text-2xl font-normal mb-2 text-gray-900">{title}</h3>
      <p className="text-gray-600 font-light">{description}</p>
    </div>
  );
};

export default EcosystemCard;
