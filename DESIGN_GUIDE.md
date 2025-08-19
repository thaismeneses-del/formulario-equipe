# 🎨 Guia de Design - Formulário SEBRAE RPA

## 🎯 Visão Geral

Este documento descreve o design system e as especificações visuais do formulário de preferências de presentes do SEBRAE, com foco em RPA (Robotic Process Automation) e automação.

## 🎨 Paleta de Cores

### Cores Principais (SEBRAE)
- **Azul Primário**: `#1e40af` (blue-700)
- **Azul Secundário**: `#1e3a8a` (blue-800)
- **Azul Escuro**: `#1e3a8a` (blue-900)
- **Azul Claro**: `#3b82f6` (blue-500)
- **Azul Muito Claro**: `#dbeafe` (blue-100)

### Cores de Acento
- **Amarelo**: `#fbbf24` (yellow-400) - Para ícones de energia/automação
- **Verde**: `#34d399` (green-400) - Para sucesso e inovação
- **Vermelho**: `#f87171` (red-400) - Para alertas e restrições

### Cores Neutras
- **Cinza Escuro**: `#374151` (gray-700)
- **Cinza Médio**: `#6b7280` (gray-500)
- **Cinza Claro**: `#f3f4f6` (gray-100)
- **Branco**: `#ffffff`

## 🏗️ Estrutura de Layout

### Header
- **Background**: Gradiente linear de azul escuro para azul médio
- **Logo**: Ícone de robô com texto "SEBRAE"
- **Top Bar**: Informações sobre RPA e automação
- **Progress Indicator**: 8 pontos representando as seções

### Seções do Formulário
- **Cards**: Fundo branco com sombra suave
- **Headers**: Gradiente azul claro com ícones
- **Espaçamento**: 2rem (32px) entre seções

### Footer
- **Background**: Gradiente azul escuro
- **3 Colunas**: Sobre, Tecnologias, Valores
- **Copyright**: Informações do SEBRAE

## 🎭 Componentes

### Botões
```css
/* Botão Primário */
.bg-gradient-to-r from-blue-600 to-blue-700
.hover:from-blue-700 hover:to-blue-800
.rounded-xl
.shadow-lg hover:shadow-xl
.transform hover:scale-105
```

### Inputs
```css
/* Campos de Texto */
.border-2 border-gray-200
.rounded-xl
.focus:ring-2 focus:ring-blue-500
.hover:border-blue-300
.transition-all duration-200
```

### Checkboxes
```css
/* Checkboxes */
.w-4 h-4 text-blue-600
.border-gray-300 rounded
.focus:ring-blue-500
```

## 🎨 Ícones e Elementos Visuais

### Ícones Principais
- **Bot**: Robô para representar RPA
- **Zap**: Energia e automação
- **TrendingUp**: Crescimento e inovação
- **Shield**: Segurança e proteção
- **Heart**: Amor e cuidado

### Ícones por Seção
1. **Identificação**: User
2. **Tamanhos**: Shirt
3. **Preferências**: Palette
4. **Presentes**: Gift
5. **Restrições**: AlertTriangle
6. **Wishlist**: Heart
7. **Consentimento**: CheckCircle

### Elementos Decorativos
- **Gradientes**: Transições suaves entre tons de azul
- **Sombras**: Elevação sutil para profundidade
- **Bordas arredondadas**: Design moderno e amigável
- **Animações**: Transições suaves (200ms)

## 📱 Responsividade

### Breakpoints
- **Mobile**: < 768px
- **Tablet**: 768px - 1024px
- **Desktop**: > 1024px

### Grid System
```css
/* Mobile */
.grid-cols-1

/* Tablet */
.md:grid-cols-2
.md:grid-cols-3

/* Desktop */
.lg:grid-cols-4
```

## 🎯 Estados Visuais

### Estados de Input
- **Normal**: Borda cinza, fundo branco
- **Hover**: Borda azul clara
- **Focus**: Anel azul, borda transparente
- **Erro**: Borda vermelha, fundo vermelho claro

### Estados de Botão
- **Normal**: Gradiente azul
- **Hover**: Gradiente azul escuro, escala 105%
- **Active**: Escala 95%
- **Disabled**: Opacidade 50%

### Estados de Checkbox
- **Normal**: Borda cinza
- **Checked**: Fundo azul, ícone branco
- **Focus**: Anel azul

## 🎨 Tipografia

### Hierarquia
- **H1**: 3rem (48px) - Título principal
- **H2**: 2rem (32px) - Seções
- **H3**: 1.5rem (24px) - Subtítulos
- **Body**: 1rem (16px) - Texto normal
- **Small**: 0.875rem (14px) - Labels e ajuda

### Fontes
- **Família**: Inter, system-ui, sans-serif
- **Peso**: 400 (normal), 600 (semibold), 700 (bold)

## 🎭 Animações e Transições

### Durações
- **Rápida**: 150ms
- **Normal**: 200ms
- **Lenta**: 300ms

### Easing
- **Padrão**: ease-in-out
- **Hover**: ease-out
- **Focus**: ease-in

### Transformações
- **Hover Scale**: 1.05 (5% maior)
- **Active Scale**: 0.95 (5% menor)
- **Focus Ring**: 2px de espessura

## 🎨 Acessibilidade

### Contraste
- **Texto sobre fundo claro**: 4.5:1 mínimo
- **Texto sobre fundo escuro**: 7:1 mínimo
- **Elementos interativos**: 3:1 mínimo

### Foco
- **Anel de foco**: 2px azul
- **Offset**: 2px do elemento
- **Visível**: Sempre visível no modo teclado

### Tamanhos
- **Área de toque**: Mínimo 44px
- **Texto**: Mínimo 16px
- **Ícones**: Mínimo 24px

## 🚀 Implementação

### Classes Tailwind Utilizadas
```css
/* Gradientes */
.bg-gradient-to-r from-blue-900 via-blue-800 to-blue-700
.bg-gradient-to-br from-blue-500 to-blue-600

/* Sombras */
.shadow-xl
.shadow-2xl
.hover:shadow-xl

/* Bordas */
.rounded-xl
.rounded-2xl
.rounded-3xl

/* Transições */
.transition-all duration-200
.transform hover:scale-105
```

### Componentes React
- `Header`: Cabeçalho com logo e progresso
- `FormSection`: Seção do formulário com ícone
- `Button`: Botão com animações
- `Footer`: Rodapé com informações

## 📋 Checklist de Design

- [x] Paleta de cores consistente com SEBRAE
- [x] Ícones relacionados a RPA e automação
- [x] Layout responsivo
- [x] Animações suaves
- [x] Estados visuais claros
- [x] Acessibilidade implementada
- [x] Tipografia hierárquica
- [x] Espaçamento consistente
- [x] Sombras e profundidade
- [x] Gradientes modernos

## 🎯 Próximos Passos

1. **Testes de Usabilidade**: Validar com usuários reais
2. **Otimização**: Melhorar performance de animações
3. **Temas**: Implementar modo escuro
4. **Internacionalização**: Suporte a múltiplos idiomas
5. **Analytics**: Rastreamento de interações
