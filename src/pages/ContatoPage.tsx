import React, { useState } from 'react';
import { Mail, Phone, MapPin, Facebook, Instagram, Linkedin } from 'lucide-react';

const ContatoPage = () => {
  const [formData, setFormData] = useState({
    nome: '',
    email: '',
    mensagem: '',
  });
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitted(true);
  };

  const isFormValid = formData.nome && formData.email && formData.mensagem;

  return (
    <div className="pt-24 pb-20">
      <div className="container-custom">
        <div className="text-center mb-12">
          <h1 className="text-3xl md:text-4xl font-bold text-blue-dark mb-4">
            Entre em Contato
          </h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Estamos prontos para atender sua empresa e transformar sua tecnologia.
            Preencha o formulário ou utilize um de nossos canais de contato.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          <div>
            {isSubmitted ? (
              <div className="bg-green-50 rounded-lg p-8 text-center border border-green-200">
                <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-8 w-8 text-green-600"
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
                <h2 className="text-2xl font-bold text-gray-800 mb-2">
                  Mensagem Enviada!
                </h2>
                <p className="text-gray-600">
                  Obrigado por entrar em contato. Nossa equipe responderá sua mensagem em breve.
                </p>
              </div>
            ) : (
              <div className="bg-white rounded-lg shadow-md p-8">
                <h2 className="text-2xl font-bold text-blue-dark mb-6">
                  Envie uma Mensagem
                </h2>
                <form onSubmit={handleSubmit}>
                  <div className="space-y-6">
                    <div>
                      <label htmlFor="nome" className="form-label">
                        Nome <span className="text-red-500">*</span>
                      </label>
                      <input
                        type="text"
                        id="nome"
                        name="nome"
                        value={formData.nome}
                        onChange={handleChange}
                        className="form-input"
                        placeholder="Seu nome"
                        required
                      />
                    </div>

                    <div>
                      <label htmlFor="email" className="form-label">
                        E-mail <span className="text-red-500">*</span>
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        className="form-input"
                        placeholder="Seu e-mail"
                        required
                      />
                    </div>

                    <div>
                      <label htmlFor="mensagem" className="form-label">
                        Mensagem <span className="text-red-500">*</span>
                      </label>
                      <textarea
                        id="mensagem"
                        name="mensagem"
                        value={formData.mensagem}
                        onChange={handleChange}
                        className="form-input min-h-[150px]"
                        placeholder="Digite sua mensagem..."
                        required
                      />
                    </div>

                    <div>
                      <button
                        type="submit"
                        disabled={!isFormValid}
                        className={`btn-primary w-full ${
                          !isFormValid ? 'opacity-50 cursor-not-allowed' : ''
                        }`}
                      >
                        Enviar Mensagem
                      </button>
                    </div>
                  </div>
                </form>
              </div>
            )}
          </div>

          <div>
            <div className="bg-white rounded-lg shadow-md p-8 mb-8">
              <h2 className="text-2xl font-bold text-blue-dark mb-6">
                Informações de Contato
              </h2>
              <div className="space-y-6">
                <div className="flex items-start">
                  <div className="bg-blue-50 p-3 rounded-full mr-4">
                    <MapPin className="text-blue-medium h-6 w-6" />
                  </div>
                  <div>
                    <h3 className="font-bold text-gray-800">Endereço</h3>
                    <p className="text-gray-600">
                      Av. Rio Grande do Norte, S/N<br />
                      Centro Sul, Várzea Grande, MT<br />
                      CEP 78135-902
                    </p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="bg-blue-50 p-3 rounded-full mr-4">
                    <Phone className="text-blue-medium h-6 w-6" />
                  </div>
                  <div>
                    <h3 className="font-bold text-gray-800">Telefone</h3>
                    <p className="text-gray-600">(65) 99346-1383</p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="bg-blue-50 p-3 rounded-full mr-4">
                    <Mail className="text-blue-medium h-6 w-6" />
                  </div>
                  <div>
                    <h3 className="font-bold text-gray-800">E-mail</h3>
                    <p className="text-gray-600">contato@innovatotecnologia.com.br</p>
                  </div>
                </div>
              </div>

              <div className="mt-8">
                <h3 className="font-bold text-gray-800 mb-4">Redes Sociais</h3>
                <div className="flex space-x-4">
                  <a
                    href="https://facebook.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-blue-medium hover:bg-blue-light p-3 rounded-full transition-colors text-white"
                    aria-label="Facebook"
                  >
                    <Facebook size={20} />
                  </a>
                  <a
                    href="https://instagram.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-blue-medium hover:bg-blue-light p-3 rounded-full transition-colors text-white"
                    aria-label="Instagram"
                  >
                    <Instagram size={20} />
                  </a>
                  <a
                    href="https://linkedin.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-blue-medium hover:bg-blue-light p-3 rounded-full transition-colors text-white"
                    aria-label="LinkedIn"
                  >
                    <Linkedin size={20} />
                  </a>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-lg shadow-md overflow-hidden h-80">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3842.8076171562347!2d-56.13249699999999!3d-15.647499999999999!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x939db1e179e0b6ef%3A0x3cb9b3d169c6b031!2sAv.%20Rio%20Grande%20do%20Norte%2C%20V%C3%A1rzea%20Grande%20-%20MT!5e0!3m2!1spt-BR!2sbr!4v1660922624446!5m2!1spt-BR!2sbr"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Localização da Innovato Tecnologia"
              ></iframe>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContatoPage;