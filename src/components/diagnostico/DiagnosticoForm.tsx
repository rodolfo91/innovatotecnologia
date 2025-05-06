import React, { useState } from 'react';
import FormStep1 from './FormStep1';
import FormStep2 from './FormStep2';
import FormStep3 from './FormStep3';

interface DiagnosticoFormProps {
  onSubmit: () => void;
}

export interface FormData {
  // Step 1
  empresa: string;
  telefone: string;
  responsavel: string;
  // Step 2
  estrategia: number[];
  operacoes: number[];
  financas: number[];
  marketing: number[];
  rh: number[];
  tecnologia: number[];
  // Step 3
  pontosFortes: {
    estrategia: string;
    operacoes: string;
    financas: string;
    marketing: string;
    rh: string;
    tecnologia: string;
  };
  pontosFracos: {
    estrategia: string;
    operacoes: string;
    financas: string;
    marketing: string;
    rh: string;
    tecnologia: string;
  };
  planoAcao: {
    estrategia: string;
    operacoes: string;
    financas: string;
    marketing: string;
    rh: string;
    tecnologia: string;
  };
}

const initialFormData: FormData = {
  empresa: '',
  telefone: '',
  responsavel: '',
  estrategia: Array(6).fill(3),
  operacoes: Array(6).fill(3),
  financas: Array(6).fill(3),
  marketing: Array(6).fill(3),
  rh: Array(6).fill(3),
  tecnologia: Array(6).fill(3),
  pontosFortes: {
    estrategia: '',
    operacoes: '',
    financas: '',
    marketing: '',
    rh: '',
    tecnologia: '',
  },
  pontosFracos: {
    estrategia: '',
    operacoes: '',
    financas: '',
    marketing: '',
    rh: '',
    tecnologia: '',
  },
  planoAcao: {
    estrategia: '',
    operacoes: '',
    financas: '',
    marketing: '',
    rh: '',
    tecnologia: '',
  },
};

const DiagnosticoForm: React.FC<DiagnosticoFormProps> = ({ onSubmit }) => {
  const [currentStep, setCurrentStep] = useState(1);
  const [formData, setFormData] = useState<FormData>(initialFormData);

  const handleNextStep = () => {
    setCurrentStep(currentStep + 1);
    window.scrollTo(0, 0);
  };

  const handlePreviousStep = () => {
    setCurrentStep(currentStep - 1);
    window.scrollTo(0, 0);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSubmit();
  };

  const updateFormData = (data: Partial<FormData>) => {
    setFormData({ ...formData, ...data });
  };

  return (
    <div className="bg-white shadow-md rounded-lg overflow-hidden">
      {/* Progress Bar */}
      <div className="w-full bg-gray-200 h-2">
        <div
          className="bg-blue-medium h-2 transition-all duration-300"
          style={{ width: `${(currentStep / 3) * 100}%` }}
        ></div>
      </div>
      
      {/* Step Indicators */}
      <div className="flex justify-between py-4 px-6 md:px-8 bg-gray-50 border-b">
        <div
          className={`flex flex-col items-center ${
            currentStep >= 1 ? 'text-blue-medium' : 'text-gray-400'
          }`}
        >
          <div
            className={`w-8 h-8 rounded-full flex items-center justify-center mb-1 ${
              currentStep >= 1
                ? 'bg-blue-medium text-white'
                : 'bg-gray-200 text-gray-500'
            }`}
          >
            1
          </div>
          <span className="text-xs md:text-sm hidden md:block">Informações Gerais</span>
        </div>
        
        <div
          className={`flex flex-col items-center ${
            currentStep >= 2 ? 'text-blue-medium' : 'text-gray-400'
          }`}
        >
          <div
            className={`w-8 h-8 rounded-full flex items-center justify-center mb-1 ${
              currentStep >= 2
                ? 'bg-blue-medium text-white'
                : 'bg-gray-200 text-gray-500'
            }`}
          >
            2
          </div>
          <span className="text-xs md:text-sm hidden md:block">Avaliação por Setor</span>
        </div>
        
        <div
          className={`flex flex-col items-center ${
            currentStep >= 3 ? 'text-blue-medium' : 'text-gray-400'
          }`}
        >
          <div
            className={`w-8 h-8 rounded-full flex items-center justify-center mb-1 ${
              currentStep >= 3
                ? 'bg-blue-medium text-white'
                : 'bg-gray-200 text-gray-500'
            }`}
          >
            3
          </div>
          <span className="text-xs md:text-sm hidden md:block">Diagnóstico Detalhado</span>
        </div>
      </div>
      
      <form onSubmit={handleSubmit}>
        <div className="p-6 md:p-8">
          {currentStep === 1 && (
            <FormStep1 
              formData={formData} 
              updateFormData={updateFormData} 
              onNext={handleNextStep} 
            />
          )}
          
          {currentStep === 2 && (
            <FormStep2
              formData={formData}
              updateFormData={updateFormData}
              onNext={handleNextStep}
              onPrevious={handlePreviousStep}
            />
          )}
          
          {currentStep === 3 && (
            <FormStep3
              formData={formData}
              updateFormData={updateFormData}
              onPrevious={handlePreviousStep}
              onSubmit={handleSubmit}
            />
          )}
        </div>
      </form>
    </div>
  );
};

export default DiagnosticoForm;