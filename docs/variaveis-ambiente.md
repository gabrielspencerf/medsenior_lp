# Variáveis de ambiente para deploy

Preencha no `.env` (ou no painel do provedor de hospedagem) conforme o ambiente. Todas são **opcionais**; o app tem fallbacks.

| Variável | Obrigatória | Descrição | Exemplo |
|----------|-------------|-----------|---------|
| **VITE_LOCATION** | Não | Trava o site em uma praça. Vazio = multi-cidade (modal de seleção). | `Curitiba` ou `` |
| **VITE_TYPEBOT_ID** | Não | ID do Typebot (bubble/chat). Padrão: `medseniorbrasil`. Ao selecionar uma praça, `utm_brasil` é enviado com o nome da cidade. | `medseniorbrasil` |
| **VITE_GTM_ID** | Não | Container Google Tag Manager. Vazio = GTM não carrega. | `GTM-XXXXXX` |
| **VITE_SITE_OPERATOR_NAME** | Não | Razão social de quem opera o site (footer/políticas). | `Minha Corretora Ltda` |
| **VITE_SITE_OPERATOR_CNPJ** | Não | CNPJ do operador. Aparece no footer e na frase de transparência. | `00.000.000/0001-00` |
| **VITE_CONTACT_EMAIL** | Não | E-mail de contato (LGPD/políticas). | `contato@exemplo.com.br` |
| **VITE_CONTACT_PHONE** | Não | Telefone de contato. | `(41) 3000-0000` |

## Resumo por tipo de deploy

- **Multi-cidade (todas as praças):** `VITE_LOCATION` vazio, `VITE_TYPEBOT_ID=medseniorbrasil` (ou outro ID). Usuário escolhe a cidade no modal; ao clicar em uma praça, o Typebot recebe `utm_brasil` com o nome da cidade.
- **Single-praça (uma cidade só):** Defina `VITE_LOCATION=Curitiba` (ou a praça desejada). O Typebot recebe `utm_brasil` com essa praça.
- **Identidade no footer:** Preencha `VITE_SITE_OPERATOR_NAME` e `VITE_SITE_OPERATOR_CNPJ` quando tiver a própria corretora.

## Variável para ativar cada praça (site single-cidade)

Para travar o site em **uma única cidade**, use a variável **`VITE_LOCATION`** com o valor **exato** do nome da praça (como está em `src/data/locations.ts`). O nome é case-sensitive e deve incluir acentos.

| Praça | Nome da variável | Valor para ativar |
|-------|------------------|-------------------|
| Curitiba | `VITE_LOCATION` | `Curitiba` |
| São Paulo | `VITE_LOCATION` | `São Paulo` |
| Belo Horizonte | `VITE_LOCATION` | `Belo Horizonte` |
| Brasília | `VITE_LOCATION` | `Brasília` |
| Vitória | `VITE_LOCATION` | `Vitória` |
| Rio de Janeiro | `VITE_LOCATION` | `Rio de Janeiro` |
| Porto Alegre | `VITE_LOCATION` | `Porto Alegre` |
| Recife | `VITE_LOCATION` | `Recife` |
| Campinas | `VITE_LOCATION` | `Campinas` |

**Exemplos no `.env`:**
- Site só Curitiba: `VITE_LOCATION=Curitiba`
- Site só Vitória: `VITE_LOCATION=Vitória`
- Site multi-cidade (todas as praças): deixe `VITE_LOCATION=` vazio.

---

## Typebot e `utm_brasil`

- O app envia **sempre** a variável `utm_brasil` para o Typebot com o nome da praça atual (ex.: `Curitiba`, `Vitória`).
- Quando nenhuma praça está “setada” (multi-cidade), o ID usado é `medseniorbrasil` (ou o de `VITE_TYPEBOT_ID`).
- Se no futuro uma praça tiver `typebotId` em `locations.ts`, esse ID será usado para essa praça; caso contrário, usa-se o ID do ambiente ou `medseniorbrasil`.
