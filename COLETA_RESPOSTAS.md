# 📊 Guia de Coleta de Respostas - Formulário para Presente

## 🎯 **OPÇÕES PARA COLETAR AS RESPOSTAS**

### **OPÇÃO 1: Google Forms (RECOMENDADA)**

#### **Passo 1: Criar Google Form**
1. **Acesse**: [forms.google.com](https://forms.google.com)
2. **Clique** em "Criar formulário"
3. **Título**: "Formulário para Presente - Respostas"

#### **Passo 2: Adicionar Campos**
Crie os seguintes campos no Google Form:

1. **Nome e sobrenome** (texto curto)
2. **Dia e mês do aniversário** (texto curto)
3. **Tamanho camiseta** (múltipla escolha: PP, P, M, G, GG, XG)
4. **Tamanho calça** (múltipla escolha: 34-54)
5. **Tamanho sapato** (múltipla escolha: 33-45)
6. **Observações tamanhos** (texto longo)
7. **Estilos pessoais** (caixas de seleção: Casual, Clássico, etc.)
8. **Cores favoritas** (texto curto)
9. **Cores a evitar** (texto curto)
10. **Tipos de presentes** (caixas de seleção)
11. **Gêneros de livros** (caixas de seleção)
12. **Preferência gastronomia** (múltipla escolha)
13. **Alergias** (caixas de seleção)
14. **Preferências alimentares** (caixas de seleção)
15. **Wishlist** (texto longo)
16. **Observações adicionais** (texto longo)
17. **Consentimento** (caixas de seleção)

#### **Passo 3: Obter IDs dos Campos**
1. **Clique** em "Enviar" no Google Form
2. **Copie** a URL do formulário
3. **Substitua** `viewform` por `formResponse` na URL
4. **Anote** os IDs de cada campo (entry.XXXXXXX)

#### **Passo 4: Atualizar o Código**
Substitua no arquivo `src/components/FormularioPresentes.tsx`:

```typescript
// Linha 130: Substitua pela sua URL do Google Forms
const googleFormUrl = 'https://docs.google.com/forms/d/e/SEU_FORM_ID/formResponse';

// Linhas 135-151: Substitua os IDs pelos seus
googleFormData.append('entry.123456789', formData.nome); // ID do campo nome
googleFormData.append('entry.987654321', formData.dataAniversario); // ID do campo data
// ... continue para todos os campos
```

### **OPÇÃO 2: Email (SIMPLES)**

#### **Configurar envio por email:**
1. **Use** um serviço como Formspree ou Netlify Forms
2. **Configure** o endpoint de email
3. **Receba** as respostas diretamente no seu email

### **OPÇÃO 3: Planilha Google Sheets**

#### **Integração automática:**
1. **Google Form** → **Google Sheets** (automático)
2. **Acesse** a planilha criada automaticamente
3. **Visualize** todas as respostas organizadas

## 📋 **COMO ACESSAR AS RESPOSTAS**

### **Via Google Forms:**
1. **Acesse** seu Google Form
2. **Clique** em "Respostas"
3. **Visualize** todas as respostas
4. **Exporte** para Excel/CSV

### **Via Google Sheets:**
1. **Acesse** a planilha vinculada
2. **Veja** todas as respostas em tempo real
3. **Filtre** e organize os dados
4. **Compartilhe** com a equipe

## 🚀 **PRÓXIMOS PASSOS**

1. **Escolha** uma das opções acima
2. **Configure** conforme o guia
3. **Teste** o envio de dados
4. **Compartilhe** o formulário com a equipe
5. **Monitore** as respostas

## ✅ **VANTAGENS DO GOOGLE FORMS**

- ✅ **Gratuito** e fácil de usar
- ✅ **Respostas em tempo real**
- ✅ **Exportação para Excel**
- ✅ **Integração com Google Sheets**
- ✅ **Backup automático**
- ✅ **Acesso de qualquer lugar**

**Qual opção você prefere? Posso te ajudar a configurar!** 🎯
