# Exemplos de Personalização do Formulário 🎨

Este arquivo contém exemplos práticos de como personalizar o formulário de acordo com suas necessidades.

## 🎯 Modificando Cores e Tema

### Alterar Cores Principais
```tsx
// No componente FormularioPresentes.tsx, substitua as classes de cor:

// De: bg-blue-600 hover:bg-blue-700
// Para: bg-purple-600 hover:bg-purple-700

// De: focus:ring-blue-500
// Para: focus:ring-purple-500

// De: from-blue-50 to-indigo-100
// Para: from-purple-50 to-pink-100
```

### Exemplo de Tema Rosa/Roxo
```tsx
// Botão principal
className="bg-purple-600 hover:bg-purple-700 text-white font-bold py-4 px-8 rounded-xl"

// Background
className="min-h-screen bg-gradient-to-br from-purple-50 to-pink-100"

// Focus dos inputs
className="focus:ring-2 focus:ring-purple-500 focus:border-transparent"
```

## 📝 Adicionando Novos Campos

### 1. Adicionar Campo no Tipo
```typescript
// Em src/types/form.ts
export interface FormData {
  // ... campos existentes ...
  novoCampo: string;
  novoArray: string[];
}
```

### 2. Adicionar no Estado Inicial
```tsx
// No componente FormularioPresentes.tsx
const [formData, setFormData] = useState<FormData>({
  // ... campos existentes ...
  novoCampo: '',
  novoArray: [],
});
```

### 3. Criar a Interface
```tsx
// Nova seção no formulário
<div className="bg-white rounded-2xl shadow-lg p-8">
  <h2 className="text-2xl font-bold text-gray-800 mb-6">🆕 Nova Seção</h2>
  
  <div>
    <label htmlFor="novoCampo" className="block text-sm font-medium text-gray-700 mb-2">
      Novo Campo
    </label>
    <input
      type="text"
      id="novoCampo"
      value={formData.novoCampo}
      onChange={(e) => handleInputChange('novoCampo', e.target.value)}
      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
      placeholder="Digite aqui..."
    />
  </div>
</div>
```

## 🔧 Modificando Validação

### Adicionar Nova Regra de Validação
```tsx
// Na função validateForm()
const validateForm = (): boolean => {
  const newErrors: FormErrors = {};

  // Validações existentes...
  
  // Nova validação
  if (formData.novoCampo && formData.novoCampo.length < 3) {
    newErrors.novoCampo = 'Campo deve ter pelo menos 3 caracteres';
  }

  setErrors(newErrors);
  return Object.keys(newErrors).length === 0;
};
```

## 🎨 Personalizando Layout

### Alterar Grid de Checkboxes
```tsx
// De: grid-cols-2 md:grid-cols-4
// Para: grid-cols-1 md:grid-cols-3 lg:grid-cols-5

<div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-3">
  {/* checkboxes */}
</div>
```

### Alterar Espaçamento entre Seções
```tsx
// De: space-y-8
// Para: space-y-6 ou space-y-12

<form onSubmit={handleSubmit} className="space-y-6">
```

## 📱 Ajustando Responsividade

### Layout Mobile-First
```tsx
// Exemplo de grid responsivo
<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
  {/* conteúdo */}
</div>
```

### Texto Responsivo
```tsx
// Títulos responsivos
<h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold">
  Título Responsivo
</h1>
```

## 🎯 Exemplos de Temas Prontos

### Tema Verde (Natureza)
```tsx
// Cores principais
bg-green-600 hover:bg-green-700
from-green-50 to-emerald-100
focus:ring-green-500
```

### Tema Laranja (Energia)
```tsx
// Cores principais
bg-orange-600 hover:bg-orange-700
from-orange-50 to-red-100
focus:ring-orange-500
```

### Tema Azul Escuro (Profissional)
```tsx
// Cores principais
bg-slate-700 hover:bg-slate-800
from-slate-50 to-gray-100
focus:ring-slate-500
```

## 🔄 Adicionando Novas Perguntas Condicionais

### Exemplo: Se escolher "Tech"
```tsx
{formData.tiposPresentes.includes('Tech') && (
  <div>
    <label className="block text-sm font-medium text-gray-700 mb-3">
      Que tipo de tecnologia você prefere?
    </label>
    <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
      {['Smartphone', 'Notebook', 'Tablet', 'Smartwatch', 'Fones', 'Outros'].map(item => (
        <label key={item} className="flex items-center space-x-2 cursor-pointer">
          <input
            type="checkbox"
            checked={formData.techPreferencias?.includes(item) || false}
            onChange={(e) => handleArrayChange('techPreferencias', item, e.target.checked)}
            className="w-4 h-4 text-blue-600 border-gray-300 rounded focus:ring-blue-500"
          />
          <span className="text-sm text-gray-700">{item}</span>
        </label>
      ))}
    </div>
  </div>
)}
```

## 📊 Salvando Dados

### Exemplo com localStorage
```tsx
// Salvar dados
const handleSubmit = (e: React.FormEvent) => {
  e.preventDefault();
  
  if (validateForm()) {
    // Salvar no localStorage
    localStorage.setItem('formularioPresentes', JSON.stringify(formData));
    
    // Ou enviar para API
    // fetch('/api/formulario', {
    //   method: 'POST',
    //   headers: { 'Content-Type': 'application/json' },
    //   body: JSON.stringify(formData)
    // });
    
    setIsSubmitted(true);
  }
};
```

## 🎉 Dicas de UX

1. **Mantenha a consistência**: Use as mesmas cores e estilos em todo o formulário
2. **Feedback visual**: Sempre mostre quando um campo é obrigatório
3. **Progresso**: Considere adicionar um indicador de progresso
4. **Acessibilidade**: Use labels apropriados e contraste adequado
5. **Mobile-first**: Teste sempre em dispositivos móveis primeiro

## 🚀 Próximos Passos

- Adicione animações com Framer Motion
- Implemente um sistema de progresso
- Adicione validação de email/telefone
- Crie um dashboard para visualizar as respostas
- Implemente upload de imagens para wishlist
