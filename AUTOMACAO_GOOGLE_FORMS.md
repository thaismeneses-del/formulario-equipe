# 🤖 Automação Completa do Google Forms

## 🎯 **CRIAÇÃO AUTOMÁTICA DO FORMULÁRIO**

### **PASSO 1: Acessar Google Apps Script**

1. **Abra**: [script.google.com](https://script.google.com)
2. **Faça login** com sua conta Google
3. **Clique** em "Novo projeto"
4. **Renomeie** o projeto para "Formulário Presente"

### **PASSO 2: Colar o Script**

1. **Apague** todo o código padrão
2. **Cole** o conteúdo do arquivo `criar-google-form.js`
3. **Salve** o projeto (Ctrl+S ou Cmd+S)

### **PASSO 3: Executar a Automação**

1. **Selecione** a função `criarFormularioPresentes` no dropdown
2. **Clique** no botão ▶️ "Executar"
3. **Autorize** o acesso (primeira vez)
4. **Aguarde** a execução

### **PASSO 4: Obter as Informações**

Após a execução, você verá no log:
- ✅ **URL do formulário** (para compartilhar)
- ✅ **URL de edição** (para modificar)
- ✅ **URL da planilha** (para ver respostas)
- ✅ **ID do formulário** (para o código)

### **PASSO 5: Obter IDs dos Campos**

1. **Substitua** `'SEU_FORM_ID'` pelo ID retornado
2. **Execute** a função `obterIdsCampos()`
3. **Copie** os IDs dos campos

## 🔧 **CONFIGURAÇÃO NO CÓDIGO**

### **Atualizar o Formulário React:**

Substitua no arquivo `src/components/FormularioPresentes.tsx`:

```typescript
// Linha 130: URL do seu Google Form
const googleFormUrl = 'https://docs.google.com/forms/d/e/SEU_FORM_ID/formResponse';

// Linhas 135-151: IDs dos campos (substitua pelos seus)
googleFormData.append('entry.123456789', formData.nome); // Nome e sobrenome
googleFormData.append('entry.987654321', formData.dataAniversario); // Data
googleFormData.append('entry.111111111', formData.camiseta); // Camiseta
googleFormData.append('entry.222222222', formData.calca); // Calça
googleFormData.append('entry.333333333', formData.sapato); // Sapato
googleFormData.append('entry.444444444', formData.observacoesTamanhos); // Obs tamanhos
googleFormData.append('entry.555555555', formData.estilos.join(', ')); // Estilos
googleFormData.append('entry.666666666', formData.coresFavoritas); // Cores favoritas
googleFormData.append('entry.777777777', formData.coresEvitar); // Cores a evitar
googleFormData.append('entry.888888888', formData.tiposPresentes.join(', ')); // Tipos
googleFormData.append('entry.999999999', formData.generosLivros.join(', ')); // Livros
googleFormData.append('entry.101010101', formData.preferenciaGastronomia); // Gastronomia
googleFormData.append('entry.121212121', formData.alergias.join(', ')); // Alergias
googleFormData.append('entry.131313131', formData.preferenciasAlimentares.join(', ')); // Alimentação
googleFormData.append('entry.141414141', formData.wishlist.join(', ')); // Wishlist
googleFormData.append('entry.151515151', formData.observacoesAdicionais); // Obs adicionais
googleFormData.append('entry.161616161', formData.consentimento ? 'Sim' : 'Não'); // Consentimento
```

## 📊 **RESULTADO FINAL**

### **O que você terá:**

1. **✅ Google Form criado** automaticamente com 17 campos
2. **✅ Planilha Google Sheets** vinculada automaticamente
3. **✅ URLs prontas** para compartilhar
4. **✅ IDs dos campos** para integrar com o React
5. **✅ Sistema completo** funcionando

### **Como acessar as respostas:**

1. **Via Google Forms**: Acesse a URL do formulário → "Respostas"
2. **Via Google Sheets**: Acesse a URL da planilha
3. **Via Email**: Configure notificações no Google Forms

## 🚀 **PRÓXIMOS PASSOS**

1. **Execute** o script no Google Apps Script
2. **Me envie** as URLs e IDs retornados
3. **Eu atualizo** o código React automaticamente
4. **Fazemos** o deploy final
5. **Testamos** o envio de dados

## ✅ **VANTAGENS DA AUTOMAÇÃO**

- ✅ **Criação em 2 minutos** (vs 30 minutos manual)
- ✅ **Campos perfeitos** (sem erros de digitação)
- ✅ **Configuração automática** da planilha
- ✅ **IDs corretos** para integração
- ✅ **Zero trabalho manual**

**Pronto para executar? Me avise quando estiver no Google Apps Script!** 🎯
