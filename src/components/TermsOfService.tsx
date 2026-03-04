import React from 'react';
import { FileCheck, AlertCircle, Scale, UserCheck } from 'lucide-react';
import {
  SITE_OPERATOR_LABEL,
  SITE_OPERATOR_DESCRIPTION,
  BRASCARE,
  MEDSENIOR_OPERADORA,
  POLICY_LAST_UPDATED_LONG,
} from '../config/siteIdentity';

export const TermsOfService: React.FC = () => {
  return (
    <div className="prose prose-green max-w-none text-gray-600">
      <p className="text-sm text-gray-500 mb-6 pb-4 border-b border-gray-100">
        <strong>Última atualização:</strong> {POLICY_LAST_UPDATED_LONG}
      </p>
      <section className="mb-10">
        <h2 className="flex items-center gap-2 text-2xl font-bold text-gray-900 mb-4">
          <FileCheck className="w-6 h-6 text-green-600" />
          1. Aceitação dos Termos
        </h2>
        <p className="mb-4">
          Ao acessar e utilizar este site, você concorda com estes Termos de Uso.
        </p>
        <p className="mb-4">
          <strong>Quem opera este site:</strong> {SITE_OPERATOR_DESCRIPTION} A{' '}
          {BRASCARE.name} (CNPJ {BRASCARE.cnpj}) é a corretora da qual somos
          revendedores; a {MEDSENIOR_OPERADORA.name} (
          {MEDSENIOR_OPERADORA.razaoSocial}) é a <strong>operadora</strong> dos
          planos de saúde. Atuamos em conformidade com as normas da ANS (Agência
          Nacional de Saúde Suplementar).
        </p>
      </section>

      <section className="mb-10">
        <h2 className="flex items-center gap-2 text-2xl font-bold text-gray-900 mb-4">
          <UserCheck className="w-6 h-6 text-green-600" />
          2. Serviços Oferecidos
        </h2>
        <p className="mb-4">
          Este site tem como objetivo facilitar a <strong>cotação e intermediação</strong> de
          planos de saúde da operadora MedSênior, por meio de revendedores
          autorizados. As informações apresentadas são de caráter
          informativo e podem sofrer alterações sem aviso prévio.
        </p>
        <ul className="list-disc pl-6 space-y-2 mb-4">
          <li>Cotação de planos de saúde da operadora MedSênior</li>
          <li>Informações sobre cobertura e rede credenciada</li>
          <li>Atendimento para esclarecimento de dúvidas sobre cotação</li>
          <li>Intermediação entre o interessado e a rede de vendas autorizada</li>
        </ul>
      </section>

      <section className="mb-10">
        <h2 className="flex items-center gap-2 text-2xl font-bold text-gray-900 mb-4">
          <AlertCircle className="w-6 h-6 text-green-600" />
          3. Responsabilidades do Usuário
        </h2>
        <p className="mb-4">Ao utilizar este site, você concorda em:</p>
        <ul className="list-disc pl-6 space-y-2 mb-4">
          <li>Fornecer informações verdadeiras e atualizadas na cotação</li>
          <li>Utilizar o site de forma responsável e ética</li>
          <li>Não reproduzir, distribuir ou modificar o conteúdo sem autorização</li>
          <li>Respeitar os direitos de propriedade intelectual das marcas utilizadas</li>
        </ul>
      </section>

      <section className="mb-10">
        <h2 className="flex items-center gap-2 text-2xl font-bold text-gray-900 mb-4">
          <Scale className="w-6 h-6 text-green-600" />
          4. Limitação de Responsabilidade
        </h2>
        <p className="mb-4">
          O operador deste site ({SITE_OPERATOR_LABEL}) atua como intermediário
          na cotação de planos da operadora MedSênior. As condições finais de
          contratação, cobertura, valores e carências estão sujeitas à aprovação
          da           operadora e às normas da ANS. A relação contratual de planos de saúde
          é entre o cliente e a operadora.
        </p>
        <p className="mb-4">
          Não nos responsabilizamos por informações desatualizadas decorrentes
          de mudanças nas políticas da operadora ou na regulamentação da ANS.
        </p>
      </section>

      <section className="mb-10">
        <h2 className="text-2xl font-bold text-gray-900 mb-4">
          5. Propriedade Intelectual
        </h2>
        <p className="mb-4">
          As marcas e logotipos exibidos no site pertencem aos respectivos titulares. Este site utiliza tais marcas no
          âmbito da revenda/autorização. O uso não autorizado pode resultar em
          medidas legais pelos titulares.
        </p>
      </section>

      <section className="mb-10">
        <h2 className="text-2xl font-bold text-gray-900 mb-4">
          6. Modificações nos Termos
        </h2>
        <p className="mb-4">
          Reservamo-nos o direito de modificar estes Termos de Uso a qualquer
          momento. As alterações vigoram após publicação no site. Recomendamos
          a revisão periódica.
        </p>
      </section>

      <section className="mb-10">
        <h2 className="text-2xl font-bold text-gray-900 mb-4">
          7. Lei Aplicável
        </h2>
        <p className="mb-4">
          Estes Termos são regidos pelas leis brasileiras. Qualquer disputa
          será submetida ao foro da comarca de sua residência.
        </p>
      </section>

      <div className="bg-green-50 rounded-2xl p-6 mt-12 border border-green-100">
        <p className="text-sm text-green-800 text-center">
          Termos de Uso atualizados em {POLICY_LAST_UPDATED_LONG}.
        </p>
      </div>
    </div>
  );
};
