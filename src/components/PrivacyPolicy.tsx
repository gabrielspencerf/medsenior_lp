import React from 'react';
import { Lock, Eye, FileText } from 'lucide-react';

export const PrivacyPolicy: React.FC = () => {
    return (
        <div className="prose prose-green max-w-none text-gray-600">
            <section className="mb-10">
                <h2 className="flex items-center gap-2 text-2xl font-bold text-gray-900 mb-4">
                    <Lock className="w-6 h-6 text-green-600" />
                    1. Coleta de Dados
                </h2>
                <p className="mb-4">
                    Coletamos informações essenciais para oferecer nossos serviços de planos de saúde, incluindo nome, contato e cidade de interesse.
                    Esses dados são utilizados exclusivamente para fins de cotação e atendimento personalizado.
                </p>
            </section>

            <section className="mb-10">
                <h2 className="flex items-center gap-2 text-2xl font-bold text-gray-900 mb-4">
                    <Eye className="w-6 h-6 text-green-600" />
                    2. Uso das Informações
                </h2>
                <p className="mb-4">
                    As informações coletadas são utilizadas para:
                </p>
                <ul className="list-disc pl-6 space-y-2 mb-4">
                    <li>Processar solicitações de cotação de planos.</li>
                    <li>Entrar em contato para esclarecer dúvidas sobre nossos serviços.</li>
                    <li>Melhorar a experiência de navegação em nosso site.</li>
                    <li>Cumprir obrigações legais e regulatórias.</li>
                </ul>
            </section>

            <section className="mb-10">
                <h2 className="flex items-center gap-2 text-2xl font-bold text-gray-900 mb-4">
                    <FileText className="w-6 h-6 text-green-600" />
                    3. Cookies e Tecnologias
                </h2>
                <p className="mb-4">
                    Utilizamos cookies para melhorar o desempenho do site e personalizar sua experiência.
                    Você pode gerenciar suas preferências de cookies através das configurações do seu navegador.
                </p>
            </section>

            <section className="mb-10">
                <h2 className="text-2xl font-bold text-gray-900 mb-4">4. Seus Direitos</h2>
                <p className="mb-4">
                    Você tem direito a acessar, corrigir ou solicitar a exclusão de seus dados pessoais a qualquer momento.
                    Para exercer esses direitos, entre em contato conosco através dos canais oficiais de atendimento.
                </p>
            </section>

            <div className="bg-green-50 rounded-2xl p-6 mt-12 border border-green-100">
                <p className="text-sm text-green-800 text-center">
                    Esta política foi atualizada pela última vez em Novembro de 2025.
                </p>
            </div>
        </div>
    );
};
