import React from 'react';
import { FileCheck, AlertCircle, Scale, UserCheck } from 'lucide-react';

export const TermsOfService: React.FC = () => {
    return (
        <div className="prose prose-green max-w-none text-gray-600">
            <section className="mb-10">
                <h2 className="flex items-center gap-2 text-2xl font-bold text-gray-900 mb-4">
                    <FileCheck className="w-6 h-6 text-green-600" />
                    1. Aceitação dos Termos
                </h2>
                <p className="mb-4">
                    Ao acessar e utilizar este site, você concorda com estes Termos de Uso.
                    A BrasCare é uma corretora autorizada de planos de saúde MedSênior, atuando
                    em conformidade com as normas da ANS (Agência Nacional de Saúde Suplementar).
                </p>
            </section>

            <section className="mb-10">
                <h2 className="flex items-center gap-2 text-2xl font-bold text-gray-900 mb-4">
                    <UserCheck className="w-6 h-6 text-green-600" />
                    2. Serviços Oferecidos
                </h2>
                <p className="mb-4">
                    Este site tem como objetivo facilitar a cotação e contratação de planos de saúde
                    MedSênior. As informações apresentadas são de caráter informativo e podem sofrer
                    alterações sem aviso prévio.
                </p>
                <ul className="list-disc pl-6 space-y-2 mb-4">
                    <li>Cotação de planos de saúde MedSênior</li>
                    <li>Informações sobre cobertura e rede credenciada</li>
                    <li>Atendimento e suporte para esclarecimento de dúvidas</li>
                    <li>Intermediação entre cliente e operadora de saúde</li>
                </ul>
            </section>

            <section className="mb-10">
                <h2 className="flex items-center gap-2 text-2xl font-bold text-gray-900 mb-4">
                    <AlertCircle className="w-6 h-6 text-green-600" />
                    3. Responsabilidades do Usuário
                </h2>
                <p className="mb-4">
                    Ao utilizar nossos serviços, você concorda em:
                </p>
                <ul className="list-disc pl-6 space-y-2 mb-4">
                    <li>Fornecer informações verdadeiras e atualizadas durante a cotação</li>
                    <li>Utilizar o site de forma responsável e ética</li>
                    <li>Não reproduzir, distribuir ou modificar o conteúdo sem autorização</li>
                    <li>Respeitar os direitos de propriedade intelectual</li>
                </ul>
            </section>

            <section className="mb-10">
                <h2 className="flex items-center gap-2 text-2xl font-bold text-gray-900 mb-4">
                    <Scale className="w-6 h-6 text-green-600" />
                    4. Limitação de Responsabilidade
                </h2>
                <p className="mb-4">
                    A BrasCare atua como intermediária entre o cliente e a operadora MedSênior.
                    As condições finais de contratação, cobertura e valores estão sujeitas à
                    aprovação da operadora e às normas da ANS.
                </p>
                <p className="mb-4">
                    Não nos responsabilizamos por informações desatualizadas decorrentes de
                    mudanças nas políticas da operadora ou na regulamentação da ANS.
                </p>
            </section>

            <section className="mb-10">
                <h2 className="text-2xl font-bold text-gray-900 mb-4">5. Propriedade Intelectual</h2>
                <p className="mb-4">
                    Todo o conteúdo deste site, incluindo textos, imagens, logotipos e design,
                    é protegido por direitos autorais e pertence à BrasCare e/ou MedSênior.
                    O uso não autorizado pode resultar em medidas legais.
                </p>
            </section>

            <section className="mb-10">
                <h2 className="text-2xl font-bold text-gray-900 mb-4">6. Modificações nos Termos</h2>
                <p className="mb-4">
                    Reservamo-nos o direito de modificar estes Termos de Uso a qualquer momento.
                    As alterações entrarão em vigor imediatamente após sua publicação no site.
                    Recomendamos a revisão periódica destes termos.
                </p>
            </section>

            <section className="mb-10">
                <h2 className="text-2xl font-bold text-gray-900 mb-4">7. Lei Aplicável</h2>
                <p className="mb-4">
                    Estes Termos de Uso são regidos pelas leis brasileiras. Qualquer disputa
                    decorrente destes termos será submetida ao foro da comarca de sua residência.
                </p>
            </section>

            <div className="bg-green-50 rounded-2xl p-6 mt-12 border border-green-100">
                <p className="text-sm text-green-800 text-center">
                    Termos de Uso atualizados em Novembro de 2025.
                </p>
            </div>
        </div>
    );
};
