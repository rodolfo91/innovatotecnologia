import React from 'react';
import { FormData } from './DiagnosticoForm';
import SectorRating from './SectorRating';

interface FormStep2Props {
  formData: FormData;
  updateFormData: (data: Partial<FormData>) => void;
  onNext: () => void;
  onPrevious: () => void;
}

interface Question {
  id: number;
  text: string;
}

interface SectorQuestions {
  [key: string]: {
    title: string;
    questions: Question[];
  };
}

const sectorQuestions: SectorQuestions = {
  estrategia: {
    title: 'Estratégia',
    questions: [
      { id: 1, text: 'A empresa possui uma visão clara e objetivos de longo prazo definidos?' },
      { id: 2, text: 'Existe um planejamento estratégico formal e documentado?' },
      { id: 3, text: 'A empresa monitora regularmente o mercado e a concorrência?' },
      { id: 4, text: 'Os objetivos estratégicos são comunicados a todos os colaboradores?' },
      { id: 5, text: 'Existem indicadores para acompanhar o desempenho dos objetivos estratégicos?' },
      { id: 6, text: 'A empresa revisa e atualiza sua estratégia periodicamente?' },
    ],
  },
  operacoes: {
    title: 'Operações',
    questions: [
      { id: 1, text: 'Os processos operacionais são documentados e padronizados?' },
      { id: 2, text: 'A empresa possui indicadores de desempenho operacional?' },
      { id: 3, text: 'A empresa utiliza metodologias de melhoria contínua?' },
      { id: 4, text: 'A infraestrutura é adequada às necessidades operacionais?' },
      { id: 5, text: 'A empresa possui planos de contingência para interrupções operacionais?' },
      { id: 6, text: 'Existe um sistema para gestão da qualidade implementado?' },
    ],
  },
  financas: {
    title: 'Finanças',
    questions: [
      { id: 1, text: 'A empresa possui controles financeiros efetivos?' },
      { id: 2, text: 'Existe um processo formal de orçamento e planejamento financeiro?' },
      { id: 3, text: 'A empresa monitora sua lucratividade por produto/serviço?' },
      { id: 4, text: 'A gestão de fluxo de caixa é realizada de forma eficiente?' },
      { id: 5, text: 'A empresa utiliza indicadores financeiros para tomada de decisão?' },
      { id: 6, text: 'Existe um processo estruturado para análise de investimentos?' },
    ],
  },
  marketing: {
    title: 'Marketing & Vendas',
    questions: [
      { id: 1, text: 'A empresa possui uma estratégia de marketing definida?' },
      { id: 2, text: 'Existe um processo estruturado de gestão de vendas?' },
      { id: 3, text: 'A empresa monitora a satisfação dos clientes regularmente?' },
      { id: 4, text: 'O posicionamento de marca é claro e consistente?' },
      { id: 5, text: 'A empresa utiliza marketing digital de forma efetiva?' },
      { id: 6, text: 'Existe uma estratégia definida para gestão do relacionamento com clientes?' },
    ],
  },
  rh: {
    title: 'People/RH',
    questions: [
      { id: 1, text: 'A empresa possui processos estruturados de recrutamento e seleção?' },
      { id: 2, text: 'Existe um plano de desenvolvimento para os colaboradores?' },
      { id: 3, text: 'A empresa realiza avaliações de desempenho periodicamente?' },
      { id: 4, text: 'O clima organizacional é monitorado regularmente?' },
      { id: 5, text: 'Existe uma política de remuneração e benefícios estruturada?' },
      { id: 6, text: 'A cultura organizacional é claramente definida e comunicada?' },
    ],
  },
  tecnologia: {
    title: 'Tecnologia',
    questions: [
      { id: 1, text: 'A infraestrutura tecnológica atende às necessidades do negócio?' },
      { id: 2, text: 'A empresa possui uma estratégia digital definida?' },
      { id: 3, text: 'Os sistemas de informação são integrados e eficientes?' },
      { id: 4, text: 'Existe uma política de segurança da informação implementada?' },
      { id: 5, text: 'A empresa investe regularmente em inovação tecnológica?' },
      { id: 6, text: 'A tecnologia é utilizada para gerar vantagem competitiva?' },
    ],
  },
};

const FormStep2: React.FC<FormStep2Props> = ({ formData, updateFormData, onNext, onPrevious }) => {
  const handleRatingChange = (sector: string, questionIndex: number, rating: number) => {
    const newRatings = [...formData[sector as keyof typeof formData] as number[]];
    newRatings[questionIndex] = rating;
    
    updateFormData({
      [sector]: newRatings,
    });
  };

  const calculateAverageRating = (ratings: number[]) => {
    return ratings.reduce((sum, rating) => sum + rating, 0) / ratings.length;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onNext();
  };

  return (
    <div>
      <h2 className="text-2xl font-bold text-blue-dark mb-6">
        Etapa 2 - Avaliação por Setor
      </h2>
      <p className="text-gray-600 mb-8">
        Avalie cada área da sua empresa em uma escala de 1 a 5, onde 1 representa "Discordo Totalmente" e 5 representa "Concordo Totalmente".
      </p>

      <div className="space-y-12">
        {Object.entries(sectorQuestions).map(([sectorKey, sector]) => (
          <SectorRating
            key={sectorKey}
            title={sector.title}
            questions={sector.questions}
            ratings={formData[sectorKey as keyof typeof formData] as number[]}
            onRatingChange={(questionIndex, rating) =>
              handleRatingChange(sectorKey, questionIndex, rating)
            }
            averageRating={calculateAverageRating(
              formData[sectorKey as keyof typeof formData] as number[]
            )}
          />
        ))}
      </div>

      <div className="mt-10 flex justify-between">
        <button
          type="button"
          onClick={onPrevious}
          className="px-6 py-3 bg-gray-200 text-gray-700 rounded-md hover:bg-gray-300 transition-colors"
        >
          Voltar
        </button>
        <button
          type="button"
          onClick={handleSubmit}
          className="btn-primary"
        >
          Próxima Etapa
        </button>
      </div>
    </div>
  );
};

export default FormStep2;