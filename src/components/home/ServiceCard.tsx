import React from 'react';

interface ServiceProps {
  service: {
    id: number;
    title: string;
    description: string;
    icon: React.ReactNode;
  };
}

const ServiceCard: React.FC<ServiceProps> = ({ service }) => {
  return (
    <div className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow duration-300 border-t-4 border-blue-medium">
      <div className="mb-4">{service.icon}</div>
      <h3 className="text-xl font-bold text-blue-dark mb-2">{service.title}</h3>
      <p className="text-gray-600">{service.description}</p>
    </div>
  );
};

export default ServiceCard;