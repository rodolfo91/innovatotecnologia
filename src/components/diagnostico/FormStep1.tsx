import React from 'react';
import { FormData } from './DiagnosticoForm';

interface FormStep1Props {
  formData: FormData;
  updateFormData: (data: Partial<FormData>) => void;
  onNext: () => void;
}

const FormStep1: React.FC<FormStep1Props> = ({ formData, updateFormData, onNext }) => {
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    updateFormData({ [name]: value });
  };

  const formatPhoneNumber = (value: string) => {
    // Remove all non-digit characters
    const digits = value.replace(/\D/g, '');
    
    // Format the phone number based on length
    let formattedValue = '';
    if (digits.length <= 2) {
      formattedValue = digits;
    } else if (digits.length <= 6) {
      formattedValue = `(${digits.slice(0, 2)}) ${digits.slice(2)}`;
    } else if (digits.length <= 10) {
      formattedValue = `(${digits.slice(0, 2)}) ${digits.slice(2, 6)}-${digits.slice(6)}`;
    } else {
      formattedValue = `(${digits.slice(0, 2)}) ${digits.slice(2, 7)}-${digits.slice(7, 11)}`;
    }
    
    return formattedValue;
  };

  const handlePhoneChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    const formattedValue = formatPhoneNumber(value);
    updateFormData({ [name]: formattedValue });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onNext();
  };

  const isFormValid = formData.empresa && formData.telefone && formData.responsavel;

  return (
    <div>
      <h2 className="text-2xl font-bold text-blue-dark mb-6">
        Etapa 1 - Informações Gerais
      </h2>
      <p className="text-gray-600 mb-8">
        Preencha os dados básicos da sua empresa para começarmos o diagnóstico.
      </p>

      <div className="space-y-6">
        <div>
          <label htmlFor="empresa" className="form-label">
            Nome da Empresa <span className="text-red-500">*</span>
          </label>
          <input
            type="text"
            id="empresa"
            name="empresa"
            value={formData.empresa}
            onChange={handleChange}
            className="form-input"
            placeholder="Informe o nome da sua empresa"
            required
          />
        </div>

        <div>
          <label htmlFor="telefone" className="form-label">
            Telefone para Contato <span className="text-red-500">*</span>
          </label>
          <input
            type="text"
            id="telefone"
            name="telefone"
            value={formData.telefone}
            onChange={handlePhoneChange}
            className="form-input"
            placeholder="(00) 00000-0000"
            required
            maxLength={15}
          />
        </div>

        <div>
          <label htmlFor="responsavel" className="form-label">
            Responsável pelo Preenchimento <span className="text-red-500">*</span>
          </label>
          <input
            type="text"
            id="responsavel"
            name="responsavel"
            value={formData.responsavel}
            onChange={handleChange}
            className="form-input"
            placeholder="Nome do responsável"
            required
          />
        </div>
      </div>

      <div className="mt-8 flex justify-end">
        <button
          type="button"
          onClick={handleSubmit}
          disabled={!isFormValid}
          className={`btn-primary ${
            !isFormValid ? 'opacity-50 cursor-not-allowed' : ''
          }`}
        >
          Próxima Etapa
        </button>
      </div>
    </div>
  );
};

export default FormStep1;