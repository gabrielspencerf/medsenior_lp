import React from 'react';
import { Button } from './ui/Button';
import { CheckCircle } from 'lucide-react';

export const AboutSection: React.FC = () => {
  return (
    <section className="py-16 bg-white">
      <div className="max-w-5xl mx-auto px-4">
        <div className="bg-white rounded-[3rem] shadow-2xl border border-gray-100 p-10 md:p-16 text-center relative overflow-hidden">
          
          {/* Logo in Card */}
          <div className="flex justify-center mb-8">
             <div className="text-3xl md:text-4xl font-bold text-green-800 flex items-center gap-1">
                <span className="text-green-600">Med</span>Sênior
                <svg className="w-8 h-8 text-green-500 ml-1" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" />
                </svg>
             </div>
          </div>

          <h3 className="text-xl text-gray-500 mb-6 uppercase tracking-widest font-semibold">Sobre MedSênior</h3>

          <p className="text-gray-600 leading-relaxed mb-10 text-lg">
            Diferente dos outros planos, a MedSênior possui abordagem baseada na medicina preventiva, promovendo 
            acompanhamento médico periódico e oficinas de saúde, visando a prevenção de doenças. Vamos além do 
            convencional, proporcionando uma abordagem que transcende o típico cuidado médico. Investimos na sua 
            qualidade de vida e nos tornamos seu parceiro dedicado para uma vida plena.
          </p>

          <div className="flex justify-center">
            <Button variant="primary" className="text-lg px-8">
              <CheckCircle className="w-5 h-5" />
              Solicitar Atendimento MedSênior
            </Button>
          </div>

          {/* Decorative Background Element */}
          <div className="absolute -top-20 -left-20 w-64 h-64 bg-green-100 rounded-full opacity-50 blur-3xl"></div>
          <div className="absolute -bottom-20 -right-20 w-64 h-64 bg-yellow-100 rounded-full opacity-50 blur-3xl"></div>
        </div>
      </div>
    </section>
  );
};