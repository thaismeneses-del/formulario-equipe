# Formulário de Preferências de Presentes 🎁

Um formulário digital moderno e responsivo para coletar informações sobre preferências de presentes de aniversário da equipe.

## 🚀 Características

- **Interface moderna**: Design limpo e amigável com TailwindCSS
- **Totalmente responsivo**: Funciona perfeitamente em desktop, tablet e mobile
- **Validação inteligente**: Campos obrigatórios e validação em tempo real
- **Lógica condicional**: Perguntas extras aparecem apenas quando relevante
- **Linguagem acolhedora**: Tom de conversa leve entre colegas
- **Estrutura modular**: Cada seção bem organizada e identificada

## 📋 Seções do Formulário

1. **Boas-vindas** - Mensagem inicial acolhedora
2. **Identificação** - Nome e data de aniversário
3. **Tamanhos** - Camiseta, calça, sapato e observações
4. **Preferências** - Estilo pessoal e cores
5. **Tipos de presentes** - Categorias com perguntas condicionais
6. **Restrições** - Alergias e preferências alimentares
7. **Wishlist** - Links de produtos e observações
8. **Consentimento** - Autorização para uso das informações

## 🛠️ Tecnologias Utilizadas

- **React 18** com TypeScript
- **TailwindCSS** para estilização
- **HTML5** semântico
- **CSS3** moderno

## 🚀 Como Executar

1. **Instalar dependências**:
   ```bash
   npm install
   ```

2. **Executar em modo de desenvolvimento**:
   ```bash
   npm start
   ```

3. **Abrir no navegador**:
   O projeto estará disponível em `http://localhost:3000`

## 📦 Scripts Disponíveis

- `npm start` - Executa o projeto em modo de desenvolvimento
- `npm run build` - Cria a versão de produção
- `npm test` - Executa os testes
- `npm run eject` - Ejecta a configuração (irreversível)

## 🎨 Personalização

O formulário foi estruturado de forma modular, permitindo fácil customização:

- **Cores**: Modifique as classes do TailwindCSS no componente
- **Campos**: Adicione ou remova campos editando o tipo `FormData`
- **Validação**: Ajuste as regras na função `validateForm`
- **Layout**: Modifique as classes de grid e espaçamento

## 📱 Responsividade

O formulário é totalmente responsivo e se adapta a diferentes tamanhos de tela:

- **Desktop**: Layout em 3 colunas para tamanhos
- **Tablet**: Layout em 2 colunas para checkboxes
- **Mobile**: Layout em 1 coluna para melhor usabilidade

## 🔒 Privacidade

- Apenas campos essenciais são obrigatórios
- Consentimento explícito para uso das informações
- Dados coletados apenas para fins internos

## 💡 Funcionalidades Especiais

- **Perguntas condicionais**: Seções extras aparecem baseadas nas respostas
- **Validação em tempo real**: Erros são mostrados imediatamente
- **Feedback visual**: Estados de hover, focus e erro bem definidos
- **Mensagem de agradecimento**: Tela final após envio bem-sucedido

## 📄 Licença

Este projeto foi criado para uso interno da equipe.
