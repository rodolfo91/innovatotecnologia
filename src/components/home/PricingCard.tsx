import React from 'react';
import { Check } from 'lucide-react';

interface PricingProps {
  plan: {
    title: string;
    price: string;
    features: string[];
    isPopular?: boolean;
  };
}

const PricingCard: React.FC<PricingProps> = ({ plan }) => {
  return (
    <div className={`bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow duration-300 border ${plan.isPopular ? 'border-orange-accent' : 'border-gray-200'} relative h-full flex flex-col`}>
      {plan.isPopular && (
        <div className="absolute -top-4 right-4 bg-orange-accent text-white px-4 py-1 rounded-full text-sm font-medium">
          Mais Popular
        </div>
      )}
      <h3 className="text-xl font-bold text-blue-dark mb-2">{plan.title}</h3>
      <div className="mb-6">
        <span className="text-3xl font-bold text-gray-900">{plan.price}</span>
        <span className="text-gray-600">/mês</span>
      </div>
      <ul className="space-y-3 mb-6 flex-grow">
        {plan.features.map((feature, index) => (
          <li key={index} className="flex items-start">
            <Check size={20} className="text-green-500 mr-2 flex-shrink-0 mt-1" />
            <span className="text-gray-600">{feature}</span>
          </li>
        ))}
      </ul>
      <button className={`w-full py-3 px-6 rounded-md font-medium transition-colors ${
        plan.isPopular 
          ? 'bg-orange-accent hover:bg-orange-500 text-white' 
          : 'bg-blue-medium hover:bg-blue-dark text-white'
      }`}>
        Contratar Agora
      </button>
    </div>
  );
};

export default PricingCard;