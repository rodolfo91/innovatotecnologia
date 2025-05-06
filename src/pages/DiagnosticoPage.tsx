import React, { useState } from 'react';
import DiagnosticoForm from '../components/diagnostico/DiagnosticoForm';

const DiagnosticoPage = () => {
  const [isCompleted, setIsCompleted] = useState(false);

  const handleSubmitForm = () => {
    setIsCompleted(true);
    window.scrollTo(0, 0);
  };

  return (
    <div className="pt-24 pb-20">
      <div className="container-custom">
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-10">
            <h1 className="text-3xl md:text-4xl font-bold text-blue-dark mb-4">
              Diagnóstico Empresarial
            </h1>
            <p className="text-xl text-gray-600">
              {isCompleted 
                ? 'Obrigado por concluir o diagnóstico!' 
                : 'Descubra como sua empresa pode evoluir com tecnologia'}
            </p>
          </div>

          {isCompleted ? (
            <div className="bg-white shadow-md rounded-lg p-8 text-center">
              <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-10 w-10 text-green-600"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M5 13l4 4L19 7"
                  />
                </svg>
              </div>
              <h2 className="text-2xl font-bold text-gray-800 mb-4">
                Diagnóstico Enviado com Sucesso!
              </h2>
              <p className="text-gray-600 mb-6">
                Agradecemos por completar nosso diagnóstico empresarial. Nossa equipe analisará as informações fornecidas e entrará em contato em breve com um relatório personalizado e recomendações para sua empresa.
              </p>
              <p className="text-gray-700 font-medium">
                Enquanto isso, você pode explorar nossos serviços ou entrar em contato conosco para saber mais sobre como podemos ajudar sua empresa a se transformar digitalmente.
              </p>
            </div>
          ) : (
            <DiagnosticoForm onSubmit={handleSubmitForm} />
          )}
        </div>
      </div>
    </div>
  );
};

export default DiagnosticoPage;