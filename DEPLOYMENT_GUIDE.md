# 🚀 Guia de Deploy por Praça - MedSênior Landing Page

## 📋 Configurações por Cidade

Este guia contém as configurações exatas para fazer deploy de cada praça com o GTM ID e Typebot corretos.

---

## 🔒 Como Funciona o Bloqueio de Praça

Quando você configura `VITE_LOCATION` com o nome de uma cidade:

✅ **O que ACONTECE:**
- Site fica fixado naquela praça específica
- Mapa do Brasil fica **bloqueado** (visual `opacity-60`, `cursor-not-allowed`)
- Botões de cidade ficam **desabilitados** (`disabled`)
- Texto "(Localização fixa)" aparece na lista
- Usuários **NÃO PODEM** clicar em outras cidades
- GTM ID e Typebot ID são os configurados no `.env`

✅ **Testado e Funcionando:**
- Multi-localização (quando `VITE_LOCATION` está vazio)
- Localização bloqueada (quando `VITE_LOCATION` está definido)

---

## 🌍 Configurações Específicas por Praça

### 1️⃣ Vitória

```bash
VITE_LOCATION=Vitória
VITE_GTM_ID=GTM-KKGNVQSD
VITE_TYPEBOT_ID=medsenior-victor-vitoria
```

**URL de Deploy Recomendada:** `vitoria.medsenior.com.br` ou `medsenior-vitoria.vercel.app`

---

### 2️⃣ Curitiba

```bash
VITE_LOCATION=Curitiba
VITE_GTM_ID=GTM-MNV5CVSS
VITE_TYPEBOT_ID=medsenior-victor1
```

**URL de Deploy Recomendada:** `curitiba.medsenior.com.br` ou `medsenior-curitiba.vercel.app`

---

### 3️⃣ São Paulo

```bash
VITE_LOCATION=São Paulo
VITE_GTM_ID=GTM-PCN6THLN
VITE_TYPEBOT_ID=medsenior-victor3
```

**URL de Deploy Recomendada:** `saopaulo.medsenior.com.br` ou `medsenior-sp.vercel.app`

---

### 4️⃣ Rio de Janeiro

```bash
VITE_LOCATION=Rio de Janeiro
VITE_GTM_ID=GTM-WDV6K3NX
VITE_TYPEBOT_ID=medsenior-victor4
```

**URL de Deploy Recomendada:** `riodejaneiro.medsenior.com.br` ou `medsenior-rj.vercel.app`

---

### 5️⃣ Porto Alegre

```bash
VITE_LOCATION=Porto Alegre
VITE_GTM_ID=GTM-WMPRTTXS
VITE_TYPEBOT_ID=medsenior-victor5
```

**URL de Deploy Recomendada:** `portoalegre.medsenior.com.br` ou `medsenior-poa.vercel.app`

---

### 6️⃣ Belo Horizonte

```bash
VITE_LOCATION=Belo Horizonte
VITE_GTM_ID=GTM-N5MQ5F8B
VITE_TYPEBOT_ID=medsenior-victorbh
```

**URL de Deploy Recomendada:** `belohorizonte.medsenior.com.br` ou `medsenior-bh.vercel.app`

---

### 7️⃣ Campinas

```bash
VITE_LOCATION=Campinas
VITE_GTM_ID=GTM-TTQR8TKT
VITE_TYPEBOT_ID=medsenior-victorcampinas
```

**URL de Deploy Recomendada:** `campinas.medsenior.com.br` ou `medsenior-campinas.vercel.app`

---

### 8️⃣ Recife

```bash
VITE_LOCATION=Recife
VITE_GTM_ID=GTM-WRDPK267
VITE_TYPEBOT_ID=medsenior-victorrecife
```

**URL de Deploy Recomendada:** `recife.medsenior.com.br` ou `medsenior-recife.vercel.app`

---

### 9️⃣ Brasília

```bash
VITE_LOCATION=Brasília
VITE_GTM_ID=GTM-KLTLQJT6
VITE_TYPEBOT_ID=medsenior-victorbrasilia
```

**URL de Deploy Recomendada:** `brasilia.medsenior.com.br` ou `medsenior-brasilia.vercel.app`

---

## 🔧 Como Fazer o Deploy

### Opção 1: Vercel (Recomendado)

#### Passo 1: Criar Projeto na Vercel

```bash
# Faça login na Vercel
vercel login

# Faça o deploy inicial
vercel
```

#### Passo 2: Configurar Variáveis de Ambiente na Vercel

1. Acesse o projeto na Vercel Dashboard
2. Vá em **Settings** → **Environment Variables**
3. Adicione as 3 variáveis para a praça desejada:

```
VITE_LOCATION = [Nome da Cidade]
VITE_GTM_ID = [GTM-XXXXXXX]
VITE_TYPEBOT_ID = [id-do-typebot]
```

4. Clique em **Save**
5. Faça **Redeploy** do projeto

#### Passo 3: Configurar Domínio Customizado (Opcional)

1. Vá em **Settings** → **Domains**
2. Adicione seu domínio (ex: `vitoria.medsenior.com.br`)
3. Configure os DNS conforme instruções da Vercel

---

### Opção 2: Deploy Local para Teste

#### Testar Vitória Localmente

1. Crie um arquivo `.env` na raiz do projeto:

```bash
VITE_LOCATION=Vitória
VITE_GTM_ID=GTM-KKGNVQSD
VITE_TYPEBOT_ID=medsenior-victor-vitoria
```

2. Reinicie o servidor de desenvolvimento:

```bash
npm run dev
```

3. Acesse `http://localhost:3000`
4. **VERIFIQUE:**
   - ✅ Conteúdo está fixado em Vitória
   - ✅ Mapa está bloqueado (opaco, cursor proibido)
   - ✅ Botões de cidade estão desabilitados
   - ✅ Texto "(Localização fixa)" aparece
   - ✅ GTM está carregando corretamente
   - ✅ Chat abre com o Typebot correto

---

## ✅ Checklist de Verificação Pré-Deploy

Antes de fazer deploy de qualquer praça, verifique:

- [ ] `.env` ou variáveis de ambiente configuradas corretamente
- [ ] `VITE_LOCATION` com nome EXATO da cidade (com acentos!)
- [ ] `VITE_GTM_ID` com o GTM correto da praça
- [ ] `VITE_TYPEBOT_ID` com o ID correto do Typebot
- [ ] Build funciona: `npm run build`
- [ ] Preview funciona: `npm run preview`
- [ ] Testar localmente antes de subir

### Testar Localmente

```bash
# 1. Configure o .env para a praça desejada
# 2. Faça o build
npm run build

# 3. Teste o build
npm run preview

# 4. Acesse http://localhost:4173 e verifique:
```

**Checklist de Teste:**
- [ ] Conteúdo correto da cidade aparece
- [ ] Mapa está bloqueado (não clicável)
- [ ] Botões de cidade desabilitados
- [ ] GTM carregou (verifique no console do navegador)
- [ ] Typebot abre corretamente ao clicar nos CTAs
- [ ] Hero mostra a cidade correta
- [ ] Planos são os da cidade
- [ ] Rede credenciada está correta

---

## 🎯 Deploy Múltiplas Praças na Vercel

### Estratégia Recomendada: 1 Projeto por Praça

#### Vantagens:
- ✅ Variáveis de ambiente isoladas
- ✅ GTM específico por praça
- ✅ Analytics separados
- ✅ Fácil de gerenciar
- ✅ Domínios customizados por praça

#### Como Fazer:

1. **Criar 9 projetos na Vercel**, um para cada praça
2. **Configurar variáveis de ambiente** específicas em cada projeto
3. **Configurar domínios** para cada praça:
   - `vitoria.medsenior.com.br`
   - `curitiba.medsenior.com.br`
   - `saopaulo.medsenior.com.br`
   - etc.

#### Comandos:

```bash
# Deploy Vitória
VITE_LOCATION=Vitória VITE_GTM_ID=GTM-KKGNVQSD VITE_TYPEBOT_ID=medsenior-victor-vitoria vercel --prod

# Deploy Curitiba
VITE_LOCATION=Curitiba VITE_GTM_ID=GTM-MNV5CVSS VITE_TYPEBOT_ID=medsenior-victor1 vercel --prod

# ... etc para cada praça
```

---

## 🔍 Troubleshooting

### Problema: Mapa ainda está clicável

**Causa:** `VITE_LOCATION` não está definido ou está com nome incorreto

**Solução:**
- Verifique que o nome da cidade está EXATAMENTE como no código (com acentos)
- Nomes válidos: `Vitória`, `São Paulo`, `Rio de Janeiro`, `Belo Horizonte`, `Brasília`, `Campinas`, `Curitiba`, `Porto Alegre`, `Recife`

### Problema: GTM não está carregando

**Causa:** `VITE_GTM_ID` vazio ou formato incorreto

**Solução:**
- Formato correto: `GTM-XXXXXXX`
- Verifique no console do navegador se há erros
- Inspecione o `<head>` do HTML para ver se o script GTM foi injetado

### Problema: Typebot não abre

**Causa:** `VITE_TYPEBOT_ID` incorreto

**Solução:**
- Verifique se o ID está correto (sem `https://flow.creativelane.com.br/`)
- Exemplos corretos: `medsenior-victor-vitoria`, `medsenior-victor1`
- Verifique no console se há erros do Typebot

### Problema: Conteúdo não atualiza após mudar variáveis

**Causa:** Cache do build

**Solução:**
```bash
# Limpe e reconstrua
rm -rf dist
npm run build
npm run preview
```

---

## 📊 Tabela Resumo de Configurações

| Cidade | GTM ID | Typebot ID | URL Sugerida |
|--------|--------|------------|--------------|
| Vitória | `GTM-KKGNVQSD` | `medsenior-victor-vitoria` | `vitoria.medsenior.com.br` |
| Curitiba | `GTM-MNV5CVSS` | `medsenior-victor1` | `curitiba.medsenior.com.br` |
| São Paulo | `GTM-PCN6THLN` | `medsenior-victor3` | `saopaulo.medsenior.com.br` |
| Rio de Janeiro | `GTM-WDV6K3NX` | `medsenior-victor4` | `riodejaneiro.medsenior.com.br` |
| Porto Alegre | `GTM-WMPRTTXS` | `medsenior-victor5` | `portoalegre.medsenior.com.br` |
| Belo Horizonte | `GTM-N5MQ5F8B` | `medsenior-victorbh` | `belohorizonte.medsenior.com.br` |
| Campinas | `GTM-TTQR8TKT` | `medsenior-victorcampinas` | `campinas.medsenior.com.br` |
| Recife | `GTM-WRDPK267` | `medsenior-victorrecife` | `recife.medsenior.com.br` |
| Brasília | `GTM-KLTLQJT6` | `medsenior-victorbrasilia` | `brasilia.medsenior.com.br` |

---

## 🎓 Exemplo Completo de Deploy

### Cenário: Deploy da Praça de Recife

#### 1. Criar `.env` local para teste

```bash
VITE_LOCATION=Recife
VITE_GTM_ID=GTM-WRDPK267
VITE_TYPEBOT_ID=medsenior-victorrecife
```

#### 2. Testar localmente

```bash
npm run dev
# Abrir http://localhost:3000
# Verificar que:
# - Hero mostra "Recife"
# - Mapa está bloqueado
# - Botões desabilitados
```

#### 3. Build de produção

```bash
npm run build
npm run preview
# Testar em http://localhost:4173
```

#### 4. Deploy na Vercel

```bash
# Login
vercel login

# Deploy
vercel --prod
```

#### 5. Configurar na Vercel Dashboard

1. Acessar projeto em vercel.com
2. Settings → Environment Variables
3. Adicionar:
   - `VITE_LOCATION` = `Recife`
   - `VITE_GTM_ID` = `GTM-WRDPK267`
   - `VITE_TYPEBOT_ID` = `medsenior-victorrecife`
4. Redeploy do projeto

#### 6. Configurar domínio (opcional)

1. Settings → Domains
2. Adicionar `recife.medsenior.com.br`
3. Configurar DNS

✅ **Pronto! A praça de Recife está no ar, bloqueada e com tracking correto!**

---

## 💡 Dicas Importantes

1. **Sempre teste localmente primeiro** com `.env` antes de fazer deploy
2. **Use nomes EXATOS** das cidades (com acentos como `São Paulo`, `Brasília`)
3. **Verifique o GTM** no console do navegador após deploy
4. **Teste o Typebot** clicando nos CTAs
5. **Use domínios separados** para cada praça para facilitar analytics
6. **Documente** qual URL está com qual configuração

---

## 📞 Suporte

Se tiver dúvidas:
1. Verifique este guia primeiro
2. Teste localmente com `.env`
3. Verifique o console do navegador para erros
4. Confirme os nomes das cidades estão exatos
