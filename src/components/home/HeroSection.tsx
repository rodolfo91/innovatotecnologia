import React from 'react';
import { Link } from 'react-router-dom';
import { ChevronRight } from 'lucide-react';

const HeroSection = () => {
  return (
    <section className="pt-32 pb-20 md:pt-40 md:pb-32 bg-blue-gradient text-white relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 left-0 w-full h-full" 
          style={{
            backgroundImage: 'url("data:image/svg+xml,%3Csvg width="60" height="60" viewBox="0 0 60 60" xmlns="http://www.w3.org/2000/svg"%3E%3Cg fill="none" fill-rule="evenodd"%3E%3Cg fill="%23ffffff" fill-opacity="1"%3E%3Cpath d="M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z"/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")',
            backgroundSize: '60px 60px',
          }}
        ></div>
      </div>
      
      <div className="container-custom relative z-10">
        <div className="md:max-w-3xl">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
            Inovação que conecta, tecnologia que transforma.
          </h1>
          <p className="text-xl md:text-2xl opacity-90 mb-8 font-light">
            Soluções tecnológicas personalizadas para empresas que desejam se destacar no mercado digital.
          </p>
          <div className="flex flex-wrap gap-4">
            <Link to="/diagnostico" className="btn-primary inline-flex items-center">
              Faça o Diagnóstico
              <ChevronRight size={20} className="ml-2" />
            </Link>
            <a href="#servicos" className="bg-white text-blue-dark font-medium py-3 px-6 rounded-md hover:bg-gray-100 transition-all duration-300 inline-flex items-center">
              Conheça Nossos Serviços
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;