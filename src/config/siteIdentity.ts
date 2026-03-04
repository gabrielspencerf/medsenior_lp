/**
 * Identidade do site e relações comerciais.
 * Este site é operado por revendedores autorizados da BrasCare.
 * Os planos são da operadora MedSênior.
 *
 * Quando tiverem a própria corretora: preencher VITE_SITE_OPERATOR_NAME e
 * VITE_SITE_OPERATOR_CNPJ no .env (e opcionalmente VITE_CONTACT_EMAIL / VITE_CONTACT_PHONE).
 */

// Parceiro ao qual somos revendedores (BrasCare)
export const BRASCARE = {
  name: 'BrasCare Saúde e Corretora',
  nameSeal: 'BRASCARE LIFE SAÚDE E CORRETORA DE SEGUROS LTDA', // texto do selo MedSênior
  cnpj: '45.949.883/0001-19',
  regNumber: '135399', // Reg. N° do selo
  description: 'Corretora autorizada MedSênior. Somos revendedores autorizados pela BrasCare.',
} as const;

/** Dados do selo MedSênior (header): texto exato do selo para SEO e acessibilidade */
export const MEDSENIOR_SEAL = {
  brand: 'MedSênior',
  concessionariaLabel: 'CONCESSIONÁRIA AUTORIZADA',
  concessionariaName: BRASCARE.nameSeal,
  regNumber: BRASCARE.regNumber,
  /** Texto completo para alt/title da imagem do selo */
  imageAlt: `MedSênior - Concessionária Autorizada ${BRASCARE.nameSeal} Reg. N° ${BRASCARE.regNumber}`,
} as const;

// Operadora dos planos (apenas informamos; não somos a operadora)
export const MEDSENIOR_OPERADORA = {
  name: 'MedSênior',
  razaoSocial: 'Samedil Serv. Med. Hospitalares S.A.',
  ansCodeDefault: '33.561-4',
} as const;

// Operador do site (quem mantém este site e coleta dados)
// Deixar vazio até ter a própria corretora; o texto usará "revendedor autorizado BrasCare"
export const SITE_OPERATOR = {
  name: import.meta.env.VITE_SITE_OPERATOR_NAME || '',
  cnpj: import.meta.env.VITE_SITE_OPERATOR_CNPJ || '',
  contactEmail: import.meta.env.VITE_CONTACT_EMAIL || '',
  contactPhone: import.meta.env.VITE_CONTACT_PHONE || '',
} as const;

export const SITE_OPERATOR_LABEL =
  SITE_OPERATOR.name ||
  'Revendedor autorizado BrasCare';

/** Texto curto para "quem opera o site" em políticas e footer */
export const SITE_OPERATOR_DESCRIPTION =
  SITE_OPERATOR.name
    ? `${SITE_OPERATOR.name} é revendedor autorizado da BrasCare para comercialização de planos de saúde da operadora MedSênior. Este site é operado por ${SITE_OPERATOR.name}.`
    : 'Este site é operado por revendedores autorizados da BrasCare para cotação e intermediação de planos de saúde da operadora MedSênior.';

/** Frase à prova de auditoria: quem opera, papel (sem alegação de parceria verificável), quem presta cobertura */
export const FOOTER_WHO_OPERATES =
  SITE_OPERATOR.cnpj
    ? `Site operado por ${SITE_OPERATOR.name || SITE_OPERATOR_LABEL} (CNPJ ${SITE_OPERATOR.cnpj}). Canal de cotação e intermediação comercial. Cobertura/assistência prestada pela operadora: MedSênior.`
    : `Site operado por ${SITE_OPERATOR_LABEL}. Canal de cotação e intermediação comercial. Cobertura/assistência prestada pela operadora: MedSênior.`;

/**
 * Data da última revisão de identidade, políticas e conformidade.
 * Atualize aqui quando revisar o site para recurso/conformidade Google Ads.
 * Formato: DD/MM/AAAA (exibido no site e útil para contestação).
 */
export const POLICY_LAST_UPDATED = '04/03/2025';

/** Data em formato longo para páginas legais */
export const POLICY_LAST_UPDATED_LONG = '4 de março de 2025';
