import React, { useState } from 'react';
import FormStep1 from './FormStep1';
import FormStep2 from './FormStep2';
import FormStep3 from './FormStep3';
import { supabase } from '../../lib/supabase';

interface DiagnosticoFormProps {
  onSubmit: () => void;
}

export interface FormData {
  // Step 1
  empresa: string;
  telefone: string;
  responsavel: string;
  // Step 2
  estrategia: number;
  operacoes: number;
  financas: number;
  marketing: number;
  rh: number;
  tecnologia: number;
  // Step 3
  observacao: string;
}

const initialFormData: FormData = {
  empresa: '',
  telefone: '',
  responsavel: '',
  estrategia: 3,
  operacoes: 3,
  financas: 3,
  marketing: 3,
  rh: 3,
  tecnologia: 3,
  observacao: '',
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

  const sendWhatsAppNotification = async (data: FormData, mediaGeral: number) => {
    const message = `📋 *Novo Diagnóstico Recebido*

👤 *Responsável:* ${data.responsavel}
📱 *Telefone:* ${data.telefone}
🏢 *Empresa:* ${data.empresa}

🔍 *Avaliação por Setor:*
- Estratégia: ${data.estrategia}/5
- Operações: ${data.operacoes}/5
- Finanças: ${data.financas}/5
- Marketing: ${data.marketing}/5
- RH: ${data.rh}/5
- Tecnologia: ${data.tecnologia}/5

📊 *Média Geral:* ${mediaGeral.toFixed(1)}/5

💭 *Observações:*
${data.observacao || 'Nenhuma observação fornecida'}

📅 *Data:* ${new Date().toLocaleDateString('pt-BR')}`;

    const whatsappNumber = '5565993461383';
    const encodedMessage = encodeURIComponent(message);
    window.open(`https://api.whatsapp.com/send?phone=${whatsappNumber}&text=${encodedMessage}`, '_blank');
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    try {
      const mediaGeral = (
        formData.estrategia +
        formData.operacoes +
        formData.financas +
        formData.marketing +
        formData.rh +
        formData.tecnologia
      ) / 6;

      // Save diagnostic data
      const { error: diagnosticoError } = await supabase
        .from('diagnostico')
        .insert({
          estrategia: formData.estrategia,
          operacoes: formData.operacoes,
          financas: formData.financas,
          marketing: formData.marketing,
          rh: formData.rh,
          tecnologia: formData.tecnologia,
          media_geral: mediaGeral,
          observacao: formData.observacao,
        });

      if (diagnosticoError) throw diagnosticoError;

      // Save contact information
      const { error: contatoError } = await supabase
        .from('contatos')
        .insert({
          nome: formData.responsavel,
          email: '', // Since we're not collecting email in this form
          telefone: formData.telefone,
          mensagem: `Empresa: ${formData.empresa}`,
          origem: 'diagnostico'
        });

      if (contatoError) throw contatoError;

      // Send WhatsApp notification
      await sendWhatsAppNotification(formData, mediaGeral);

      onSubmit();
    } catch (error) {
      console.error('Error submitting form:', error);
      alert('Ocorreu um erro ao enviar o formulário. Por favor, tente novamente.');
    }
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
          <span className="text-xs md:text-sm hidden md:block">Observações</span>
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