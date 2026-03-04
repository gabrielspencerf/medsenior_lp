import React from 'react';
import { Lock, Eye, FileText, Building2 } from 'lucide-react';
import {
  SITE_OPERATOR_LABEL,
  SITE_OPERATOR_DESCRIPTION,
  SITE_OPERATOR,
  BRASCARE,
  MEDSENIOR_OPERADORA,
  POLICY_LAST_UPDATED_LONG,
} from '../config/siteIdentity';

export const PrivacyPolicy: React.FC = () => {
  const hasContact =
    SITE_OPERATOR.contactEmail || SITE_OPERATOR.contactPhone;

  return (
    <div className="prose prose-green max-w-none text-gray-600">
      <p className="text-sm text-gray-500 mb-6 pb-4 border-b border-gray-100">
        <strong>Última atualização:</strong> {POLICY_LAST_UPDATED_LONG}
      </p>
      <section className="mb-10">
        <h2 className="flex items-center gap-2 text-2xl font-bold text-gray-900 mb-4">
          <Building2 className="w-6 h-6 text-green-600" />
          Responsável pelo tratamento dos dados
        </h2>
        <p className="mb-4">
          O responsável pelo tratamento dos dados pessoais coletados neste site
          é o <strong>operador do site</strong>: <strong>{SITE_OPERATOR_LABEL}</strong>.
          {SITE_OPERATOR.cnpj && (
            <> CNPJ: {SITE_OPERATOR.cnpj}.</>
          )}
        </p>
        <p className="mb-4">
          {SITE_OPERATOR_DESCRIPTION} A BrasCare é a corretora da qual somos
          revendedores; a {MEDSENIOR_OPERADORA.name} ({MEDSENIOR_OPERADORA.razaoSocial}) é
          a operadora responsável pela cobertura e assistência.
        </p>
      </section>

      <section className="mb-10">
        <h2 className="flex items-center gap-2 text-2xl font-bold text-gray-900 mb-4">
          <Lock className="w-6 h-6 text-green-600" />
          1. Coleta de Dados
        </h2>
        <p className="mb-4">
          Coletamos informações necessárias para cotação e intermediação de
          planos de saúde da operadora MedSênior, como nome, telefone (WhatsApp),
          cidade de interesse e idade. Esses dados são utilizados para
          processamento de cotações e atendimento, no âmbito da nossa atuação
          como revendedores autorizados.
        </p>
      </section>

      <section className="mb-10">
        <h2 className="flex items-center gap-2 text-2xl font-bold text-gray-900 mb-4">
          <Eye className="w-6 h-6 text-green-600" />
          2. Uso das Informações
        </h2>
        <p className="mb-4">As informações coletadas são utilizadas para:</p>
        <ul className="list-disc pl-6 space-y-2 mb-4">
          <li>Processar solicitações de cotação de planos MedSênior</li>
          <li>Entrar em contato para esclarecer dúvidas sobre cotação e planos</li>
          <li>Melhorar a experiência de navegação no site</li>
          <li>Análise de uso do site (quando aplicável)</li>
          <li>Publicidade e remarketing (quando você consentir com cookies de marketing)</li>
          <li>Cumprir obrigações legais e regulatórias</li>
        </ul>
      </section>

      <section className="mb-10">
        <h2 className="flex items-center gap-2 text-2xl font-bold text-gray-900 mb-4">
          <FileText className="w-6 h-6 text-green-600" />
          3. Cookies e Tecnologias
        </h2>
        <p className="mb-4">
          Utilizamos cookies e tecnologias semelhantes para:
        </p>
        <ul className="list-disc pl-6 space-y-2 mb-4">
          <li>
            <strong>Essenciais:</strong> funcionamento do site (ex.: preferência de cidade)
          </li>
          <li>
            <strong>Desempenho e análise:</strong> medir acesso e uso do site
          </li>
          <li>
            <strong>Publicidade:</strong> quando você aceitar, podemos usar dados
            para exibição de anúncios (ex.: Google Ads). Detalhes na configuração
            de cookies ou no seu navegador.
          </li>
        </ul>
        <p className="mb-4">
          Você pode gerenciar ou desativar cookies nas configurações do seu
          navegador. O uso do site após aceitar nosso aviso de cookies implica
          consentimento para os fins informados.
        </p>
      </section>

      <section className="mb-10">
        <h2 className="text-2xl font-bold text-gray-900 mb-4">
          4. Seus Direitos (LGPD)
        </h2>
        <p className="mb-4">
          Você tem direito a acessar, corrigir, atualizar, portar e solicitar
          a exclusão dos seus dados pessoais, além de revogar consentimento e
          opor-se a tratamentos, nos termos da Lei Geral de Proteção de Dados
          (LGPD).
        </p>
        <p className="mb-4">
          Para exercer esses direitos, entre em contato conosco pelos canais de
          atendimento disponíveis neste site (ex.: WhatsApp do canal de cotação).
          {hasContact && (
            <>
              {' '}
              {SITE_OPERATOR.contactEmail && (
                <>E-mail: {SITE_OPERATOR.contactEmail}</>
              )}
              {SITE_OPERATOR.contactEmail && SITE_OPERATOR.contactPhone && ' | '}
              {SITE_OPERATOR.contactPhone && (
                <>Telefone: {SITE_OPERATOR.contactPhone}</>
              )}
            </>
          )}
        </p>
      </section>

      <div className="bg-green-50 rounded-2xl p-6 mt-12 border border-green-100">
        <p className="text-sm text-green-800 text-center">
          Política de Privacidade atualizada em {POLICY_LAST_UPDATED_LONG}.
        </p>
      </div>
    </div>
  );
};
