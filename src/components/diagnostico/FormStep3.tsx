import React from 'react';
import { FormData } from './DiagnosticoForm';

interface FormStep3Props {
  formData: FormData;
  updateFormData: (data: Partial<FormData>) => void;
  onPrevious: () => void;
  onSubmit: (e: React.FormEvent) => void;
}

interface Sector {
  key: keyof FormData['pontosFortes'];
  title: string;
  rating: number;
}

const FormStep3: React.FC<FormStep3Props> = ({ formData, updateFormData, onPrevious, onSubmit }) => {
  const calculateAverageRating = (ratings: number[]) => {
    return ratings.reduce((sum, rating) => sum + rating, 0) / ratings.length;
  };

  const sectors: Sector[] = [
    {
      key: 'estrategia',
      title: 'Estratégia',
      rating: calculateAverageRating(formData.estrategia),
    },
    {
      key: 'operacoes',
      title: 'Operações',
      rating: calculateAverageRating(formData.operacoes),
    },
    {
      key: 'financas',
      title: 'Finanças',
      rating: calculateAverageRating(formData.financas),
    },
    {
      key: 'marketing',
      title: 'Marketing & Vendas',
      rating: calculateAverageRating(formData.marketing),
    },
    {
      key: 'rh',
      title: 'People/RH',
      rating: calculateAverageRating(formData.rh),
    },
    {
      key: 'tecnologia',
      title: 'Tecnologia',
      rating: calculateAverageRating(formData.tecnologia),
    },
  ];

  const handleChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    const [type, sector] = name.split('-');

    const typedType = type as 'pontosFortes' | 'pontosFracos' | 'planoAcao';
    const typedSector = sector as keyof FormData['pontosFortes'];

    updateFormData({
      [typedType]: {
        ...formData[typedType],
        [typedSector]: value,
      },
    });
  };

  const getRatingColor = (rating: number) => {
    if (rating < 2) return 'bg-red-500';
    if (rating < 3) return 'bg-orange-500';
    if (rating < 4) return 'bg-yellow-500';
    if (rating < 4.5) return 'bg-green-500';
    return 'bg-green-600';
  };

  const isFormValid = () => {
    // Check if at least one sector has entries in all three fields
    return sectors.some(sector => {
      return (
        formData.pontosFortes[sector.key] &&
        formData.pontosFracos[sector.key] &&
        formData.planoAcao[sector.key]
      );
    });
  };

  return (
    <div>
      <h2 className="text-2xl font-bold text-blue-dark mb-6">
        Etapa 3 - Diagnóstico Detalhado
      </h2>
      <p className="text-gray-600 mb-8">
        Para finalizar, descreva os pontos fortes, pontos fracos e um plano de ação para cada área da sua empresa. É recomendado preencher pelo menos as áreas com menor pontuação.
      </p>

      <div className="space-y-12">
        {sectors.map((sector) => (
          <div key={sector.key} className="bg-gray-50 rounded-lg p-6">
            <div className="flex justify-between items-center mb-6">
              <h3 className="text-xl font-bold text-blue-dark">{sector.title}</h3>
              <div className="flex items-center">
                <span className="mr-2 text-gray-600 font-medium">Nota média:</span>
                <span className={`px-3 py-1 rounded-full text-white font-medium ${getRatingColor(sector.rating)}`}>
                  {sector.rating.toFixed(1)}
                </span>
              </div>
            </div>

            <div className="space-y-6">
              <div>
                <label htmlFor={`pontosFortes-${sector.key}`} className="form-label">
                  Pontos Fortes
                </label>
                <textarea
                  id={`pontosFortes-${sector.key}`}
                  name={`pontosFortes-${sector.key}`}
                  value={formData.pontosFortes[sector.key]}
                  onChange={handleChange}
                  className="form-input min-h-[100px]"
                  placeholder={`Descreva os pontos fortes da sua empresa em ${sector.title.toLowerCase()}`}
                />
              </div>

              <div>
                <label htmlFor={`pontosFracos-${sector.key}`} className="form-label">
                  Pontos Fracos
                </label>
                <textarea
                  id={`pontosFracos-${sector.key}`}
                  name={`pontosFracos-${sector.key}`}
                  value={formData.pontosFracos[sector.key]}
                  onChange={handleChange}
                  className="form-input min-h-[100px]"
                  placeholder={`Descreva os pontos fracos da sua empresa em ${sector.title.toLowerCase()}`}
                />
              </div>

              <div>
                <label htmlFor={`planoAcao-${sector.key}`} className="form-label">
                  Plano de Ação
                </label>
                <textarea
                  id={`planoAcao-${sector.key}`}
                  name={`planoAcao-${sector.key}`}
                  value={formData.planoAcao[sector.key]}
                  onChange={handleChange}
                  className="form-input min-h-[100px]"
                  placeholder={`Descreva um plano de ação para melhorar em ${sector.title.toLowerCase()}`}
                />
              </div>
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
          type="submit"
          disabled={!isFormValid()}
          onClick={onSubmit}
          className={`btn-primary ${
            !isFormValid() ? 'opacity-50 cursor-not-allowed' : ''
          }`}
        >
          Enviar
        </button>
      </div>
    </div>
  );
};

export default FormStep3;