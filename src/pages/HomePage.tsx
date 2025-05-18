import React from 'react';
import { Link } from 'react-router-dom';
import { ChevronRight, Database, Code, Globe, Server, Shield, Laptop, FileSpreadsheet, CreditCard, FolderGit, MonitorSmartphone } from 'lucide-react';
import HeroSection from '../components/home/HeroSection';
import ServiceCard from '../components/home/ServiceCard';
import PricingCard from '../components/home/PricingCard';
import TestimonialCarousel from '../components/home/TestimonialCarousel';

const services = [
  {
    id: 1,
    title: 'Consultoria e Suporte ERP Sankhya',
    description: 'Mapeamento de processos, suporte especializado em módulos (Compras, Vendas, Financeiro, Fiscal, Estoque, Serviços, Projetos, WMS e Produção), atendimento remoto com SLA e acompanhamento funcional contínuo.',
    icon: <Laptop size={40} className="text-blue-medium" />,
  },
  {
    id: 2,
    title: 'Desenvolvimento Sankhya',
    description: 'Criação e ajuste de rotinas (Java, JavaScript, SQL), campos e telas personalizadas, integrações com APIs externas e automação de processos.',
    icon: <Code size={40} className="text-blue-medium" />,
  },
  {
    id: 3,
    title: 'Relatórios e Dashboards',
    description: 'Relatórios personalizados, visões gerenciais estratégicas, dashboards em Power BI integrados ao Sankhya e indicadores de desempenho por área.',
    icon: <FileSpreadsheet size={40} className="text-blue-medium" />,
  },
  {
    id: 4,
    title: 'Integrações e TEF',
    description: 'Implantação de TEF, integração com ERP e adquirentes, redução de custos operacionais e suporte especializado em transações eletrônicas.',
    icon: <CreditCard size={40} className="text-blue-medium" />,
  },
  {
    id: 5,
    title: 'Banco de Dados e Infraestrutura',
    description: 'Otimização de performance, backup e migração, instalação Sankhya OM e monitoramento de segurança de dados.',
    icon: <Database size={40} className="text-blue-medium" />,
  },
  {
    id: 6,
    title: 'Migração de Dados',
    description: 'Tratamento e unificação de cadastros, remoção de duplicidades, correções estruturais e apoio na transição de sistemas legados.',
    icon: <FolderGit size={40} className="text-blue-medium" />,
  },
  {
    id: 7,
    title: 'Sites e Identidade Digital',
    description: 'Criação de sites profissionais, edição visual corporativa e integração com sistemas de atendimento e automação.',
    icon: <MonitorSmartphone size={40} className="text-blue-medium" />,
  },
];

const plans = [
  {
    title: 'Essencial',
    price: 'R$ 997',
    features: [
      'Até 8 horas mensais de atendimento',
      'Suporte via chat e e-mail',
      'SLA de 24 horas úteis',
      'Acesso a base de conhecimento',
    ],
  },
  {
    title: 'Profissional',
    price: 'R$ 1.997',
    features: [
      'Até 20 horas mensais de atendimento',
      'Suporte via chat, e-mail e telefone',
      'SLA de 8 horas úteis',
      'Acesso a base de conhecimento',
      'Consultoria mensal preventiva',
      'Relatórios de utilização',
    ],
    isPopular: true,
  },
  {
    title: 'Corporativo',
    price: 'R$ 3.997',
    features: [
      'Até 40 horas mensais de atendimento',
      'Suporte prioritário multicanal',
      'SLA de 4 horas úteis',
      'Acesso a base de conhecimento',
      'Consultoria semanal preventiva',
      'Relatórios de utilização',
      'Gestor de conta dedicado',
    ],
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
            <p className="section-subtitle">Soluções especializadas em ERP Sankhya e tecnologia empresarial</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {services.map((service) => (
              <ServiceCard key={service.id} service={service} />
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="section-title">Planos de Atendimento</h2>
            <p className="section-subtitle">Escolha o plano ideal para sua empresa</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {plans.map((plan, index) => (
              <PricingCard key={index} plan={plan} />
            ))}
          </div>
        </div>
      </section>
      
      <section className="py-20 bg-gray-50">
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