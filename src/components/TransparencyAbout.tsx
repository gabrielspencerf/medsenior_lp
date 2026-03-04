import React from 'react';
import {
  Building2,
  ShieldCheck,
  FileText,
  Calendar,
} from 'lucide-react';
import {
  SITE_OPERATOR_LABEL,
  SITE_OPERATOR,
  BRASCARE,
  MEDSENIOR_OPERADORA,
  POLICY_LAST_UPDATED,
  POLICY_LAST_UPDATED_LONG,
  FOOTER_WHO_OPERATES,
} from '../config/siteIdentity';

/**
 * Conteúdo "Quem somos / Transparência" para conformidade e recurso Google Ads.
 * Deixa explícito: quem opera o site, relação com BrasCare/MedSênior, datas de revisão.
 */
export const TransparencyAbout: React.FC = () => {
  return (
    <div className="prose prose-green max-w-none text-gray-600">
      <div className="bg-brand-light/50 border border-brand-primary/20 rounded-2xl p-4 mb-6">
        <p className="text-sm text-brand-dark font-medium flex items-center gap-2">
          <Calendar className="w-4 h-4 flex-shrink-0" />
          <span>
            Identidade, políticas e avisos revisados e atualizados em{' '}
            <strong>{POLICY_LAST_UPDATED_LONG}</strong> (conformidade com
            políticas de publicidade e transparência).
          </span>
        </p>
      </div>

      <section className="mb-8">
        <h2 className="flex items-center gap-2 text-xl font-bold text-gray-900 mb-3">
          <Building2 className="w-5 h-5 text-green-600" />
          Quem opera este site
        </h2>
        <p className="text-sm leading-relaxed">{FOOTER_WHO_OPERATES}</p>
      </section>

      <section className="mb-8">
        <h2 className="flex items-center gap-2 text-xl font-bold text-gray-900 mb-3">
          <ShieldCheck className="w-5 h-5 text-green-600" />
          Nossa relação com as marcas
        </h2>
        <ul className="list-disc pl-6 space-y-2 text-sm">
          <li>
            Nossa parceria: {BRASCARE.nameSeal}. Reg. N° {BRASCARE.regNumber}.
            CNPJ: {BRASCARE.cnpj}.
          </li>
          <li>
            <strong>MedSênior:</strong> operadora responsável pela cobertura e assistência (
            {MEDSENIOR_OPERADORA.razaoSocial}). Este site intermedia a cotação.
          </li>
          <li>
            Comercialização em conformidade com a Agência Nacional de Saúde
            Suplementar (ANS).
          </li>
        </ul>
      </section>

      <section className="mb-8">
        <h2 className="flex items-center gap-2 text-xl font-bold text-gray-900 mb-3">
          <FileText className="w-5 h-5 text-green-600" />
          Documentos e políticas
        </h2>
        <p className="text-sm mb-2">
          Política de Privacidade e Termos de Uso estão disponíveis no rodapé
          do site, com datas de atualização visíveis. Tratamos dados com
          responsabilidade e em conformidade com a LGPD.
        </p>
        <p className="text-sm text-gray-500">
          Última revisão geral de identidade e políticas:{' '}
          <strong>{POLICY_LAST_UPDATED}</strong>.
        </p>
      </section>

      <div className="bg-gray-50 rounded-xl p-4 border border-gray-100 text-xs text-gray-600">
        <p className="font-medium text-gray-700 mb-1">
          Transparência para usuários e plataformas
        </p>
        <p>
          Este conteúdo existe para deixar claro quem opera o site, qual a
          relação com nossa parceria e a operadora MedSênior, e que todas as
          informações e políticas estão revisadas e datadas. Atuamos como
          revendedores autorizados.
        </p>
      </div>
    </div>
  );
};
