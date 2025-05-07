import React from 'react';
import { FormData } from './DiagnosticoForm';

interface FormStep3Props {
  formData: FormData;
  updateFormData: (data: Partial<FormData>) => void;
  onPrevious: () => void;
  onSubmit: (e: React.FormEvent) => void;
}

const FormStep3: React.FC<FormStep3Props> = ({ formData, updateFormData, onPrevious, onSubmit }) => {
  const mediaGeral = (
    formData.estrategia +
    formData.operacoes +
    formData.financas +
    formData.marketing +
    formData.rh +
    formData.tecnologia
  ) / 6;

  const handleChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    updateFormData({ observacao: e.target.value });
  };

  return (
    <div>
      <h2 className="text-2xl font-bold text-blue-dark mb-6">
        Etapa 3 - Observações
      </h2>
      
      <div className="bg-blue-50 p-6 rounded-lg mb-8">
        <h3 className="text-lg font-bold text-blue-dark mb-2">Média Geral: {mediaGeral.toFixed(1)}</h3>
        <p className="text-gray-600">
          Esta é a média das suas avaliações em todos os setores. Use o campo abaixo para adicionar observações ou comentários específicos sobre sua empresa.
        </p>
      </div>

      <div className="space-y-6">
        <div>
          <label htmlFor="observacao" className="form-label">
            Observações Gerais
          </label>
          <textarea
            id="observacao"
            name="observacao"
            value={formData.observacao}
            onChange={handleChange}
            className="form-input min-h-[200px]"
            placeholder="Compartilhe suas observações, desafios específicos ou áreas que gostaria de priorizar..."
          />
        </div>
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
          onClick={onSubmit}
          className="btn-primary"
        >
          Enviar Diagnóstico
        </button>
      </div>
    </div>
  );
};

export default FormStep3;