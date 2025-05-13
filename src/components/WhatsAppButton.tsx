import React from 'react';
import { MessageCircle } from 'lucide-react';

const WhatsAppButton = () => {
  return (
    <a
      href="https://wa.me/5565993461383?text=Olá,%20gostaria%20de%20receber%20um%20atendimento"
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 bg-green-500 text-white rounded-full p-4 shadow-lg hover:bg-green-600 transition-colors z-50 flex items-center gap-2"
      aria-label="Fale com a gente no WhatsApp"
    >
      <MessageCircle size={24} />
      <span className="font-medium">Fale com a gente!</span>
    </a>
  );
};

export default WhatsAppButton;