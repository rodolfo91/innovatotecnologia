import React from 'react';
import { Link } from 'react-router-dom';
import { Cpu, Mail, Phone, MapPin, Facebook, Instagram, Linkedin } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-blue-dark text-white py-12">
      <div className="container-custom">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div>
            <Link to="/" className="flex items-center mb-4">
              <Cpu size={24} className="text-white mr-2" />
              <span className="font-poppins font-bold text-xl">
                <span className="text-white">Innovato</span>
                <span className="text-orange-accent">Tecnologia</span>
              </span>
            </Link>
            <p className="text-gray-300 mb-4">
              Inovação que conecta, tecnologia que transforma. Soluções tecnológicas para empresas
              que querem alcançar o futuro.
            </p>
          </div>

          <div>
            <h3 className="text-lg font-bold mb-4">Links Rápidos</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="text-gray-300 hover:text-white transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <a href="/#servicos" className="text-gray-300 hover:text-white transition-colors">
                  Serviços
                </a>
              </li>
              <li>
                <Link to="/diagnostico" className="text-gray-300 hover:text-white transition-colors">
                  Diagnóstico Empresarial
                </Link>
              </li>
              <li>
                <Link to="/contato" className="text-gray-300 hover:text-white transition-colors">
                  Contato
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-bold mb-4">Contato</h3>
            <ul className="space-y-3">
              <li className="flex items-start">
                <MapPin size={20} className="mr-2 mt-1 flex-shrink-0" />
                <span>Av. Tecnologia, 1000, São Paulo - SP</span>
              </li>
              <li className="flex items-center">
                <Phone size={20} className="mr-2 flex-shrink-0" />
                <span>(11) 5555-5555</span>
              </li>
              <li className="flex items-center">
                <Mail size={20} className="mr-2 flex-shrink-0" />
                <span>contato@innovato.com.br</span>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-bold mb-4">Redes Sociais</h3>
            <div className="flex space-x-4">
              <a 
                href="https://facebook.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="bg-blue-medium hover:bg-blue-light p-2 rounded-full transition-colors"
                aria-label="Facebook"
              >
                <Facebook size={20} />
              </a>
              <a 
                href="https://instagram.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="bg-blue-medium hover:bg-blue-light p-2 rounded-full transition-colors"
                aria-label="Instagram"
              >
                <Instagram size={20} />
              </a>
              <a 
                href="https://linkedin.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="bg-blue-medium hover:bg-blue-light p-2 rounded-full transition-colors"
                aria-label="LinkedIn"
              >
                <Linkedin size={20} />
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-blue-medium mt-8 pt-8 text-center">
          <p>&copy; {new Date().getFullYear()} Innovato Tecnologia. Todos os direitos reservados.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;