import React from 'react';
import { Link } from 'react-router-dom';
import { ChevronRight, BarChart2, Database, Code, Globe, Server, Shield, Star } from 'lucide-react';
import HeroSection from '../components/home/HeroSection';
import ServiceCard from '../components/home/ServiceCard';
import TestimonialCarousel from '../components/home/TestimonialCarousel';

const services = [
  {
    id: 1,
    title: 'Consultoria em TI',
    description: 'Orientação e planejamento estratégico para alinhar tecnologia com objetivos de negócio.',
    icon: <BarChart2 size={40} className="text-blue-medium" />,
  },
  {
    id: 2,
    title: 'Infraestrutura Cloud',
    description: 'Modernize sua infraestrutura e reduza custos com soluções em nuvem escaláveis.',
    icon: <Server size={40} className="text-blue-medium" />,
  },
  {
    id: 3,
    title: 'Desenvolvimento Web',
    description: 'Criação de sites e aplicações web modernas, responsivas e otimizadas.',
    icon: <Code size={40} className="text-blue-medium" />,
  },
  {
    id: 4,
    title: 'Transformação Digital',
    description: 'Implementação de processos e tecnologias para impulsionar a inovação nos negócios.',
    icon: <Globe size={40} className="text-blue-medium" />,
  },
  {
    id: 5,
    title: 'Gestão de Dados',
    description: 'Estratégias para coleta, armazenamento e análise de dados corporativos.',
    icon: <Database size={40} className="text-blue-medium" />,
  },
  {
    id: 6,
    title: 'Segurança da Informação',
    description: 'Proteção de ativos digitais contra ameaças com soluções de segurança avançadas.',
    icon: <Shield size={40} className="text-blue-medium" />,
  },
];

const testimonials = [
  {
    id: 1,
    name: 'Maria Silva',
    company: 'Tech Solutions',
    quote: 'A parceria com a Innovato transformou nossos processos internos. A consultoria foi fundamental para identificarmos oportunidades de melhoria.',
    rating: 5,
  },
  {
    id: 2,
    name: 'João Pereira',
    company: 'Nexus Indústria',
    quote: 'A migração para cloud nos trouxe mais agilidade e redução de custos. A equipe da Innovato conduziu o processo com profissionalismo.',
    rating: 5,
  },
  {
    id: 3,
    name: 'Ana Rodrigues',
    company: 'Global Retail',
    quote: 'O diagnóstico empresarial da Innovato nos mostrou exatamente onde precisávamos melhorar. Implementamos as recomendações e os resultados foram surpreendentes.',
    rating: 4,
  },
];

const HomePage = () => {
  return (
    <>
      <HeroSection />
      
      <section id="servicos" className="py-20 bg-gray-50">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="section-title">Nossos Serviços</h2>
            <p className="section-subtitle">Soluções inovadoras para transformar sua empresa</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service) => (
              <ServiceCard key={service.id} service={service} />
            ))}
          </div>
        </div>
      </section>
      
      <section className="py-20 bg-white">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="section-title">O Que Nossos Clientes Dizem</h2>
            <p className="section-subtitle">Empresas que confiam em nosso trabalho</p>
          </div>
          
          <TestimonialCarousel testimonials={testimonials} />
        </div>
      </section>
      
      <section className="py-20 bg-blue-gradient text-white">
        <div className="container-custom">
          <div className="md:flex items-center justify-between">
            <div className="mb-8 md:mb-0 md:w-2/3">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                Pronto para transformar sua empresa?
              </h2>
              <p className="text-xl opacity-90">
                Faça agora mesmo nosso diagnóstico empresarial e descubra como podemos ajudar.
              </p>
            </div>
            <div className="md:w-1/3 text-center md:text-right">
              <Link to="/diagnostico" className="btn-primary inline-flex items-center">
                Fazer Diagnóstico
                <ChevronRight size={20} className="ml-2" />
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default HomePage;