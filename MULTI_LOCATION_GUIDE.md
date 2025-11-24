# Sistema Multi-Localização - MedSênior LP

## 📋 Visão Geral

Este projeto suporta **duas modalidades de deployment**:

### 1️⃣ **Multi-Localização (Padrão)**
- Landing page com **múltiplas cidades** disponíveis
- Usuário pode **navegar entre localidades** usando o mapa ou lista
- Conteúdo dinâmico baseado na cidade selecionada
- Ideal para: **ambiente de desenvolvimento** ou **site principal**

### 2️⃣ **Localização Bloqueada**
- Landing page **dedicada a uma única cidade**
- Navegação entre cidades **desabilitada**
- Tracking e chat **específicos da localização**
- Ideal para: **campanhas regionais** ou **subdomínios dedicados**

---

## 🚀 Como Configurar

### Passo 1: Criar arquivo `.env`

Copie o arquivo de exemplo:
```bash
cp .env.example .env
```

### Passo 2: Definir as variáveis

Edite o arquivo `.env` com as configurações desejadas:

#### **Opção A: Multi-Localização** (padrão)
```env
VITE_LOCATION=
VITE_GTM_ID=
VITE_TYPEBOT_ID=medseniorteste
```

#### **Opção B: Localização Bloqueada** (ex: Recife)
```env
VITE_LOCATION=Recife
VITE_GTM_ID=GTM-RECIFE01
VITE_TYPEBOT_ID=medsenior-recife
```

---

## 🔧 Variáveis de Ambiente

### `VITE_LOCATION`
**Tipo:** String (opcional)  
**Opções:** `Recife`, `São Paulo`, `Rio de Janeiro`, `Belo Horizonte`, `Vitória`, `Brasília`, `Campinas`, `Curitiba`, `Porto Alegre`

**Comportamento:**
- ✅ **Vazia**: Modo multi-localização (padrão: Curitiba)
- 🔒 **Definida**: Bloqueia para a cidade especificada

### `VITE_GTM_ID`
**Tipo:** String (opcional)  
**Formato:** `GTM-XXXXXXX`

Injeta o Google Tag Manager para tracking e analytics.

### `VITE_TYPEBOT_ID`
**Tipo:** String  
**Default:** `medseniorteste`

Define qual bot do Typebot será usado nos CTAs da página.

---

## 📍 Cidades Disponíveis

O sistema suporta as seguintes localidades:

| Cidade | Praça | UF |
|--------|-------|------|
| **Recife** | Recife | PE |
| **São Paulo** | São Paulo | SP |
| **Rio de Janeiro** | Rio de Janeiro | RJ |
| **Belo Horizonte** | Belo Horizonte | MG |
| **Vitória** | Vitória | ES |
| **Brasília** | Brasília | DF |
| **Campinas** | Campinas | SP |
| **Curitiba** | Curitiba | PR |
| **Porto Alegre** | Porto Alegre | RS |

Dados de cada localização são gerenciados em: **`src/data/locations.ts`**

---

## 🎨 Comportamento Visual

### Modo Multi-Localização
- ✅ **Mapa interativo** com marcadores clicáveis
- ✅ **Lista de cidades** com botões habilitados
- ✅ Transição suave de conteúdo ao trocar de cidade

### Modo Bloqueado
- 🔒 **Mapa desabilitado** (opacidade reduzida, sem hover)
- 🔒 **Botões de cidade desabilitados** com indicador "(Localização fixa)"
- 🔒 Cliques **não têm efeito** no mapa ou lista

---

## 🧩 Arquivos Principais

### **Configuração**
- `.env` - Variáveis de ambiente (não commitado)
- `.env.example` - Template com documentação

### **Componentes**
- `src/App.tsx` - Lógica principal e leitura de env vars
- `src/components/LocationsGrid.tsx` - Lista de cidades + mapa
- `src/components/BrazilMap.tsx` - Mapa SVG do Brasil com marcadores
- `src/components/GoogleTagManager.tsx` - Injeção do GTM

### **Dados**
- `src/data/locations.ts` - Configuração de cada cidade (planos, redes, hero)

---

## 🌐 Exemplos de Deployment

### Vercel - Múltiplos Ambientes

#### **Produção Principal** (multi-localização)
```bash
# Environment: Production
VITE_LOCATION=
VITE_GTM_ID=GTM-MAIN
VITE_TYPEBOT_ID=medseniorteste
```

#### **Recife** (subdomínio: recife.medsenior.com.br)
```bash
# Environment: recife
VITE_LOCATION=Recife
VITE_GTM_ID=GTM-RECIFE
VITE_TYPEBOT_ID=medsenior-recife
```

#### **São Paulo** (subdomínio: sp.medsenior.com.br)
```bash
# Environment: sao-paulo
VITE_LOCATION=São Paulo
VITE_GTM_ID=GTM-SP
VITE_TYPEBOT_ID=medsenior-sp
```

---

## 🧪 Testando Localmente

### Testar Multi-Localização
```bash
# Criar .env vazio ou com VITE_LOCATION=
npm run dev
```

### Testar Localização Bloqueada
```bash
# Editar .env
echo "VITE_LOCATION=Recife" > .env
echo "VITE_GTM_ID=" >> .env
echo "VITE_TYPEBOT_ID=medseniorteste" >> .env

npm run dev
```

Acesse: http://localhost:5173

---

## ✅ Checklist de Verificação

Ao configurar um novo ambiente, verifique:

- [ ] Arquivo `.env` existe e não está commitado (.gitignore)
- [ ] `VITE_LOCATION` está correta (ou vazia para multi-localização)
- [ ] `VITE_GTM_ID` configurado (se necessário tracking)
- [ ] `VITE_TYPEBOT_ID` aponta para o bot correto
- [ ] Build está funcionando: `npm run build`
- [ ] Preview está correto: `npm run preview`
- [ ] Comportamento do mapa está adequado (bloqueado/desbloqueado)
- [ ] CTAs abrem o Typebot correto

---

## 🔍 Troubleshooting

### Mapa não está bloqueando
✅ Verificar se `VITE_LOCATION` está definida corretamente no `.env`  
✅ Reiniciar o dev server: `npm run dev`

### Typebot abrindo o bot errado
✅ Verificar `VITE_TYPEBOT_ID` no `.env`  
✅ Limpar cache do browser (Ctrl+Shift+R)

### GTM não está carregando
✅ Verificar formato: `GTM-XXXXXXX`  
✅ Inspecionar source HTML para verificar injeção do script

---

## 📞 Suporte

Para dúvidas ou problemas, contate o time de desenvolvimento.
