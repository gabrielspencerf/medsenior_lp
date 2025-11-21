import React, { useState } from 'react';
import { Button } from './ui/Button';
import { Plus, Minus, MessageSquare } from 'lucide-react';

interface FAQProps {
  onCtaClick: () => void;
}

const FAQS = [
  { 
    q: "Qual a idade mínima para contratar?", 
    a: "O plano MedSênior é exclusivo para pessoas a partir de 44 anos de idade. Somos especialistas na terceira idade e no envelhecimento saudável." 
  },
  { 
    q: "Como funciona a Carência Zero?", 
    a: "Para quem já possui um plano de saúde regulamentado pela ANS há um determinado período (mínimo 6 a 12 meses dependendo do caso), compramos a carência integral para consultas e exames (exceto doenças preexistentes)." 
  },
  { 
    q: "O plano tem coparticipação?", 
    a: "Não! A MedSênior trabalha com o modelo SEM COPARTICIPAÇÃO. Você paga um valor fixo mensal e utiliza consultas e exames sem surpresas na fatura." 
  },
  { 
    q: "Onde fica a unidade da MedSênior em Curitiba?", 
    a: "Temos unidades próprias com atendimento multidisciplinar. Fale com nossos consultores para saber o endereço mais próximo de você." 
  },
  { 
    q: "Quais hospitais atendem em Curitiba?", 
    a: "Contamos com a melhor rede da região, incluindo Hospital Marcelino Champagnat, Hospital Santa Cruz, Hospital Pilar, entre outros de referência." 
  },
];

export const FAQSection: React.FC<FAQProps> = ({ onCtaClick }) => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section className="py-24 bg-white">
      <div className="max-w-3xl mx-auto px-4">
        
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-brand-dark mb-4">Dúvidas Frequentes</h2>
          <p className="text-gray-600">Informações importantes sobre a contratação.</p>
        </div>

        <div className="space-y-4">
          {FAQS.map((faq, index) => (
            <div 
              key={index} 
              className={`bg-white rounded-2xl overflow-hidden transition-all duration-300 border ${
                openIndex === index ? 'border-brand-primary shadow-md' : 'border-gray-100 hover:border-brand-primary/30'
              }`}
            >
              <button
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                className="w-full px-6 py-5 flex justify-between items-center text-left focus:outline-none"
              >
                <span className={`font-bold text-lg ${openIndex === index ? 'text-brand-primary' : 'text-gray-800'}`}>
                  {faq.q}
                </span>
                <span className={`flex items-center justify-center w-8 h-8 rounded-full transition-colors flex-shrink-0 ml-4 ${openIndex === index ? 'bg-brand-primary text-white' : 'bg-gray-100 text-gray-500'}`}>
                   {openIndex === index ? <Minus className="w-4 h-4" /> : <Plus className="w-4 h-4" />}
                </span>
              </button>
              
              <div 
                className={`px-6 text-gray-600 overflow-hidden transition-all duration-300 ease-in-out ${
                  openIndex === index ? 'max-h-40 pb-6 opacity-100' : 'max-h-0 opacity-0'
                }`}
              >
                <p className="leading-relaxed text-base border-t border-gray-100 pt-4">{faq.a}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 text-center">
          <div className="inline-flex flex-col items-center p-8 bg-[#f8fafc] rounded-3xl border border-gray-200 w-full">
            <div className="w-12 h-12 bg-brand-primary rounded-full flex items-center justify-center text-white mb-4 shadow-lg shadow-brand-primary/30">
              <MessageSquare className="w-6 h-6" />
            </div>
            <h3 className="font-bold text-xl text-brand-dark mb-2">Ainda tem dúvidas sobre o plano?</h3>
            <p className="text-gray-500 mb-6 text-sm">Nossa equipe comercial está pronta para te atender.</p>
            <Button onClick={onCtaClick} variant="primary" className="w-full sm:w-auto px-12">
              Simular Agora
            </Button>
          </div>
        </div>

      </div>
    </section>
  );
};