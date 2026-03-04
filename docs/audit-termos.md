# Checklist de auditoria – termos sensíveis (Google Ads / conformidade)

Use **Ctrl+Shift+F** (busca no projeto) para varrer estes termos antes de publicar ou enviar recurso. Qualquer um em contexto absoluto ou que sugira “oficial/central/garantido” pode reabrir problema de política.

## Termos a buscar (variações)

| Termo / padrão | Motivo |
|----------------|--------|
| `carência zero` | Claim absoluto; usar versão condicional. |
| `oficial` | Sugere site/central oficial. |
| `central` (em “central de vendas” etc.) | Soa “central oficial”. |
| `autorizad` | “Autorizada” sem mecanismo verificável = alegação. |
| `concession` | “Concessionária” no nosso texto (selo pode manter). |
| `garantid` | “Garantido” absoluto. |
| `sem carência` | Mesmo risco que “carência zero”. |
| `aprovado` | Pode soar endosso. |
| `parceria com BrasCare` | Só usar se houver documento verificável; preferir “canal de cotação e intermediação”. |

## Onde verificar

- `index.html` – title, meta description, og, twitter, **schema.org JSON-LD**
- `src/components/**` – Hero, BenefitsSection, PlanosSection, Footer, Header, SEO
- `src/data/locations.ts` (e qualquer `**/data/*.json`) – `hero.description`, `carenciaText`, títulos por cidade
- **SEO.tsx** – meta description por cidade (já condicionada no fallback)
- **Alt text de imagens** – não usar “carência zero” ou “oficial”
- **FAQ / snippets estruturados** – se existirem
- **Typebot** – mensagens hardcoded (carência zero, central, autorizada, etc.)
- **`/public`** – qualquer HTML/JSON estático

## Frase “à prova de auditoria” (footer / Quem somos)

- **Quem opera:** “Site operado por [NOME] (CNPJ …). Canal de cotação e intermediação comercial.”
- **Cobertura:** “Cobertura/assistência prestada pela operadora: MedSênior.” (evita “operadora dos planos” ambíguo)
- **Consultor:** “Atendimento por consultor de vendas” ou “credenciado para intermediação” (evita “credenciado” solto)

## Data da última revisão deste checklist

- 04/03/2025
