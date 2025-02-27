import React from 'react';

const EcosystemCard = ({
  title,
  description,
  type,
  icon: Icon,
  logoUrl
}: {
  title: string;
  description: string;
  type: string;
  icon: React.ElementType;
  logoUrl?: string;
}) => (
  <div className="bg-white rounded-2xl p-8 hover:shadow-lg transition-all group">
    <div className="w-14 h-14 rounded-full border border-gray-200 flex items-center justify-center mb-6 group-hover:border-blue-500 transition-colors">
      {logoUrl ? (
        <img src={logoUrl} alt={title} className="w-8 h-8" />
      ) : (
        <Icon className="w-8 h-8 text-gray-900 group-hover:text-blue-500 transition-colors" />
      )}
    </div>
    <div className="text-sm text-gray-500 mb-2 font-light">{type}</div>
    <h3 className="text-2xl font-normal mb-2 text-gray-900">{title}</h3>
    <p className="text-gray-600 font-light">{description}</p>
  </div>
);

export default EcosystemCard;
