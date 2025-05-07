import React from 'react';
import { FormData } from './DiagnosticoForm';

interface FormStep2Props {
  formData: FormData;
  updateFormData: (data: Partial<FormData>) => void;
  onNext: () => void;
  onPrevious: () => void;
}

interface Question {
  key: keyof Pick<FormData, 'estrategia' | 'operacoes' | 'financas' | 'marketing' | 'rh' | 'tecnologia'>;
  title: string;
  question: string;
}

const questions: Question[] = [
  {
    key: 'estrategia',
    title: 'Estratégia',
    question: 'A empresa possui uma visão clara e objetivos estratégicos bem definidos?',
  },
  {
    key: 'operacoes',
    title: 'Operações',
    question: 'Os processos operacionais são eficientes e bem documentados?',
  },
  {
    key: 'financas',
    title: 'Finanças',
    question: 'A empresa possui controles financeiros efetivos e gestão adequada do fluxo de caixa?',
  },
  {
    key: 'marketing',
    title: 'Marketing & Vendas',
    question: 'As estratégias de marketing e vendas são eficazes e geram resultados consistentes?',
  },
  {
    key: 'rh',
    title: 'People/RH',
    question: 'A gestão de pessoas é estruturada e promove o desenvolvimento dos colaboradores?',
  },
  {
    key: 'tecnologia',
    title: 'Tecnologia',
    question: 'A infraestrutura tecnológica atende às necessidades do negócio e está atualizada?',
  },
];

const FormStep2: React.FC<FormStep2Props> = ({ formData, updateFormData, onNext, onPrevious }) => {
  const handleRatingChange = (sector: keyof FormData, rating: number) => {
    updateFormData({ [sector]: rating });
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
        Avalie cada área da sua empresa em uma escala de 1 a 5, onde:
        1 = Precisa melhorar muito
        5 = Excelente
      </p>

      <div className="space-y-8">
        {questions.map((q) => (
          <div key={q.key} className="bg-gray-50 rounded-lg p-6">
            <h3 className="text-xl font-bold text-blue-dark mb-4">{q.title}</h3>
            <p className="text-gray-700 mb-4">{q.question}</p>
            
            <div className="grid grid-cols-5 gap-2">
              {[1, 2, 3, 4, 5].map((rating) => (
                <label key={rating} className="relative flex flex-col items-center">
                  <input
                    type="radio"
                    name={q.key}
                    value={rating}
                    checked={formData[q.key] === rating}
                    onChange={() => handleRatingChange(q.key, rating)}
                    className="sr-only"
                  />
                  <div
                    className={`w-full h-10 rounded cursor-pointer transition-colors ${
                      formData[q.key] === rating
                        ? 'bg-blue-medium'
                        : 'bg-gray-200 hover:bg-gray-300'
                    }`}
                  ></div>
                  <span className="text-xs mt-1 text-center">
                    {rating === 1 && 'Precisa melhorar muito'}
                    {rating === 2 && 'Precisa melhorar'}
                    {rating === 3 && 'Regular'}
                    {rating === 4 && 'Bom'}
                    {rating === 5 && 'Excelente'}
                  </span>
                </label>
              ))}
            </div>
          </div>
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