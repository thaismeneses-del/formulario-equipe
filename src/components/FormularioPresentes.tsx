import React, { useState } from 'react';
import type { FormData, FormErrors } from '../types/form';
import Header from './Header';
import FormSection from './FormSection';
import Button from './Button';
import Footer from './Footer';
import { 
  User, 
  Shirt, 
  Palette, 
  Gift, 
  AlertTriangle, 
  Heart, 
  CheckCircle,
  Calendar,
  BookOpen,
  Coffee,
  Smartphone,
  Watch,
  Camera,
  Star,
  Link,
  FileText,
  Sparkles
} from 'lucide-react';

const FormularioPresentes: React.FC = () => {
  const [formData, setFormData] = useState<FormData>({
    nome: '',
    dataAniversario: '',
    camiseta: '',
    calca: '',
    sapato: '',
    observacoesTamanhos: '',
    estilos: [],
    coresFavoritas: '',
    coresEvitar: '',
    tiposPresentes: [],
    generosLivros: [],
    preferenciaGastronomia: '',
    alergias: [],
    preferenciasAlimentares: [],
    wishlist: ['', '', ''],
    observacoesAdicionais: '',
    consentimento: false,
  });

  const [errors, setErrors] = useState<FormErrors>({});
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  // Função para atualizar campos de texto
  const handleInputChange = (field: keyof FormData, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
    if (errors[field]) {
      setErrors(prev => ({ ...prev, [field]: '' }));
    }
  };

  // Função para atualizar arrays (checkboxes)
  const handleArrayChange = (field: keyof FormData, value: string, checked: boolean) => {
    setFormData(prev => {
      const currentArray = prev[field] as string[];
      if (checked) {
        return { ...prev, [field]: [...currentArray, value] };
      } else {
        return { ...prev, [field]: currentArray.filter(item => item !== value) };
      }
    });
  };

  // Função para atualizar wishlist
  const handleWishlistChange = (index: number, value: string) => {
    setFormData(prev => {
      const newWishlist = [...prev.wishlist];
      newWishlist[index] = value;
      return { ...prev, wishlist: newWishlist };
    });
  };

  // Função para formatar data de aniversário (DD/MM)
  const handleDataAniversarioChange = (value: string) => {
    // Remove tudo que não é número
    const numbers = value.replace(/\D/g, '');
    
    // Limita a 4 dígitos
    if (numbers.length <= 4) {
      let formatted = numbers;
      
      // Adiciona a barra após 2 dígitos
      if (numbers.length >= 2) {
        formatted = numbers.slice(0, 2) + '/' + numbers.slice(2);
      }
      
      handleInputChange('dataAniversario', formatted);
    }
  };

  // Função para validar o formulário
  const validateForm = (): boolean => {
    const newErrors: FormErrors = {};

    if (!formData.nome.trim()) {
      newErrors.nome = 'Nome é obrigatório';
    }

    if (!formData.dataAniversario) {
      newErrors.dataAniversario = 'Data de aniversário é obrigatória';
    } else {
      // Validar formato DD/MM
      const dateRegex = /^(0[1-9]|[12]\d|3[01])\/(0[1-9]|1[0-2])$/;
      if (!dateRegex.test(formData.dataAniversario)) {
        newErrors.dataAniversario = 'Formato inválido. Use DD/MM (ex: 15/03)';
      }
    }

    if (!formData.consentimento) {
      newErrors.consentimento = 'É necessário autorizar o uso das informações';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  // Função para enviar o formulário
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!validateForm()) {
      return;
    }

    setIsSubmitting(true);

    try {
      // Formspree URL - Solução mais confiável
      const formspreeUrl = 'https://formspree.io/f/xzzvlgde'; // Endpoint real do Formspree
      
      // Preparar dados para Formspree
      const formspreeData = {
        nome: formData.nome,
        dataAniversario: formData.dataAniversario,
        camiseta: formData.camiseta,
        calca: formData.calca,
        sapato: formData.sapato,
        observacoesTamanhos: formData.observacoesTamanhos,
        estilos: formData.estilos.join(', '),
        coresFavoritas: formData.coresFavoritas,
        coresEvitar: formData.coresEvitar,
        tiposPresentes: formData.tiposPresentes.join(', '),
        generosLivros: formData.generosLivros.join(', '),
        preferenciaGastronomia: formData.preferenciaGastronomia,
        alergias: formData.alergias.join(', '),
        preferenciasAlimentares: formData.preferenciasAlimentares.join(', '),
        wishlist: formData.wishlist.join(', '),
        observacoesAdicionais: formData.observacoesAdicionais,
        consentimento: formData.consentimento ? 'Sim' : 'Não',
        timestamp: new Date().toISOString()
      };

      // Enviar para Formspree
      try {
        const response = await fetch(formspreeUrl, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(formspreeData)
        });
        
        // Log para debug
        console.log('Dados enviados para Google Forms:', {
          nome: formData.nome,
          dataAniversario: formData.dataAniversario,
          camiseta: formData.camiseta,
          consentimento: formData.consentimento
        });
        
        setIsSubmitted(true);
      } catch (error) {
        console.error('Erro ao enviar para Google Forms:', error);
        
        // Fallback: salvar no localStorage como backup
        const backupData = {
          ...formData,
          timestamp: new Date().toISOString(),
          id: Date.now()
        };
        
        const existingBackups = JSON.parse(localStorage.getItem('formularioBackups') || '[]');
        existingBackups.push(backupData);
        localStorage.setItem('formularioBackups', JSON.stringify(existingBackups));
        
        console.log('Dados salvos como backup no navegador');
        setIsSubmitted(true);
      }
    } finally {
      setIsSubmitting(false);
    }
  };

  if (isSubmitted) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-blue-50 via-indigo-50 to-blue-100 flex items-center justify-center p-4">
        <div className="bg-white rounded-3xl shadow-2xl p-12 max-w-lg w-full text-center border border-blue-100">
          <div className="bg-gradient-to-br from-blue-500 to-blue-600 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6">
            <CheckCircle className="w-10 h-10 text-white" />
          </div>
          <h2 className="text-3xl font-bold text-gray-800 mb-4">Obrigado!</h2>
          <p className="text-gray-600 leading-relaxed text-lg">
            Suas respostas vão nos ajudar a tornar seu aniversário mais especial 💙
          </p>
          <div className="mt-6 text-blue-500">
            <Sparkles className="w-8 h-8 mx-auto" />
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-indigo-50 to-blue-100">
      <Header />
      
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <form onSubmit={handleSubmit} className="space-y-10">
          
          {/* Seção 1: Identificação */}
          <FormSection title="Identificação" icon={<User className="w-5 h-5" />}>
            <div className="space-y-8">
              <div>
                <label htmlFor="nome" className="block text-sm font-semibold text-gray-700 mb-3">
                  Nome e sobrenome *
                </label>
                <input
                  type="text"
                  id="nome"
                  name="nome"
                  value={formData.nome}
                  onChange={(e) => handleInputChange('nome', e.target.value)}
                  className={`w-full px-4 py-4 border-2 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200 text-base relative z-10 ${
                    errors.nome ? 'border-red-500 bg-red-50' : 'border-gray-200 hover:border-blue-300'
                  }`}
                  placeholder="Digite seu nome e sobrenome"
                  autoComplete="name"
                />
                {errors.nome && <p className="text-red-500 text-sm mt-3 flex items-center">
                  <AlertTriangle className="w-4 h-4 mr-2" />
                  {errors.nome}
                </p>}
              </div>

              <div>
                <label htmlFor="dataAniversario" className="block text-sm font-semibold text-gray-700 mb-3">
                  Dia e mês do aniversário *
                </label>
                <div className="relative">
                  <Calendar className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                  <input
                    type="text"
                    id="dataAniversario"
                    value={formData.dataAniversario}
                    onChange={(e) => handleDataAniversarioChange(e.target.value)}
                    className={`w-full pl-12 pr-4 py-4 border-2 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200 text-base ${
                      errors.dataAniversario ? 'border-red-500 bg-red-50' : 'border-gray-200 hover:border-blue-300'
                    }`}
                    placeholder="DD/MM"
                    maxLength={5}
                  />
                </div>
                {errors.dataAniversario && <p className="text-red-500 text-sm mt-3 flex items-center">
                  <AlertTriangle className="w-4 h-4 mr-2" />
                  {errors.dataAniversario}
                </p>}
              </div>
            </div>
          </FormSection>

          {/* Seção 2: Tamanhos */}
          <FormSection title="Tamanhos" icon={<Shirt className="w-5 h-5" />}>
            <div className="space-y-8">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div>
                  <label htmlFor="camiseta" className="block text-sm font-semibold text-gray-700 mb-3">
                    Camiseta
                  </label>
                  <select
                    id="camiseta"
                    value={formData.camiseta}
                    onChange={(e) => handleInputChange('camiseta', e.target.value)}
                    className="w-full px-4 py-4 border-2 border-gray-200 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200 hover:border-blue-300 text-base"
                  >
                    <option value="">Selecione...</option>
                    <option value="PP">PP</option>
                    <option value="P">P</option>
                    <option value="M">M</option>
                    <option value="G">G</option>
                    <option value="GG">GG</option>
                    <option value="XG">XG</option>
                  </select>
                </div>

                <div>
                  <label htmlFor="calca" className="block text-sm font-semibold text-gray-700 mb-3">
                    Calça
                  </label>
                  <select
                    id="calca"
                    value={formData.calca}
                    onChange={(e) => handleInputChange('calca', e.target.value)}
                    className="w-full px-4 py-4 border-2 border-gray-200 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200 hover:border-blue-300 text-base"
                  >
                    <option value="">Selecione...</option>
                    {Array.from({ length: 21 }, (_, i) => i + 34).map(num => (
                      <option key={num} value={num.toString()}>{num}</option>
                    ))}
                  </select>
                </div>

                <div>
                  <label htmlFor="sapato" className="block text-sm font-semibold text-gray-700 mb-3">
                    Sapato
                  </label>
                  <select
                    id="sapato"
                    value={formData.sapato}
                    onChange={(e) => handleInputChange('sapato', e.target.value)}
                    className="w-full px-4 py-4 border-2 border-gray-200 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200 hover:border-blue-300 text-base"
                  >
                    <option value="">Selecione...</option>
                    {Array.from({ length: 13 }, (_, i) => i + 33).map(num => (
                      <option key={num} value={num.toString()}>{num}</option>
                    ))}
                  </select>
                </div>
              </div>

              <div>
                <label htmlFor="observacoesTamanhos" className="block text-sm font-semibold text-gray-700 mb-3">
                  Observações sobre caimento ou marcas
                </label>
                <textarea
                  id="observacoesTamanhos"
                  value={formData.observacoesTamanhos}
                  onChange={(e) => handleInputChange('observacoesTamanhos', e.target.value)}
                  rows={3}
                  className="w-full px-4 py-4 border-2 border-gray-200 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200 hover:border-blue-300 text-base resize-none"
                  placeholder="Ex: Prefiro camisetas mais largas, calça skinny..."
                />
              </div>
            </div>
          </FormSection>

          {/* Seção 3: Preferências */}
          <FormSection title="Preferências" icon={<Palette className="w-5 h-5" />}>
            <div className="space-y-8">
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-4">
                  Estilo pessoal
                </label>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                  {['Casual', 'Clássico', 'Esportivo', 'Minimalista', 'Romântico', 'Ousado', 'Social'].map(estilo => (
                    <label key={estilo} className="flex items-center space-x-3 cursor-pointer p-3 rounded-xl hover:bg-blue-50 transition-all duration-200 border border-transparent hover:border-blue-200">
                      <input
                        type="checkbox"
                        checked={formData.estilos.includes(estilo)}
                        onChange={(e) => handleArrayChange('estilos', estilo, e.target.checked)}
                        className="w-5 h-5 text-blue-600 border-gray-300 rounded focus:ring-blue-500"
                      />
                      <span className="text-sm font-medium text-gray-700">{estilo}</span>
                    </label>
                  ))}
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div>
                  <label htmlFor="coresFavoritas" className="block text-sm font-semibold text-gray-700 mb-3">
                    Cores favoritas
                  </label>
                  <input
                    type="text"
                    id="coresFavoritas"
                    value={formData.coresFavoritas}
                    onChange={(e) => handleInputChange('coresFavoritas', e.target.value)}
                    className="w-full px-4 py-4 border-2 border-gray-200 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200 hover:border-blue-300 text-base"
                    placeholder="Ex: azul, verde, rosa..."
                  />
                </div>

                <div>
                  <label htmlFor="coresEvitar" className="block text-sm font-semibold text-gray-700 mb-3">
                    Cores/estampas a evitar
                  </label>
                  <input
                    type="text"
                    id="coresEvitar"
                    value={formData.coresEvitar}
                    onChange={(e) => handleInputChange('coresEvitar', e.target.value)}
                    className="w-full px-4 py-4 border-2 border-gray-200 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200 hover:border-blue-300 text-base"
                    placeholder="Ex: amarelo, listras..."
                  />
                </div>
              </div>
            </div>
          </FormSection>

          {/* Seção 4: Tipos de presentes */}
          <FormSection title="Tipos de presentes" icon={<Gift className="w-5 h-5" />}>
            <div className="space-y-8">
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-4">
                  Que tipos de presentes você gosta?
                </label>
                <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                  {[
                    { name: 'Roupas', icon: <Shirt className="w-5 h-5" /> },
                    { name: 'Acessórios', icon: <Watch className="w-5 h-5" /> },
                    { name: 'Livros', icon: <BookOpen className="w-5 h-5" /> },
                    { name: 'Papelaria', icon: <FileText className="w-5 h-5" /> },
                    { name: 'Tech', icon: <Smartphone className="w-5 h-5" /> },
                    { name: 'Beleza', icon: <Camera className="w-5 h-5" /> },
                    { name: 'Gastronomia', icon: <Coffee className="w-5 h-5" /> },
                    { name: 'Experiências', icon: <Star className="w-5 h-5" /> },
                    { name: 'Vale-presente', icon: <Gift className="w-5 h-5" /> }
                  ].map(item => (
                    <label key={item.name} className="flex items-center space-x-3 cursor-pointer p-3 rounded-xl hover:bg-blue-50 transition-all duration-200 border border-transparent hover:border-blue-200">
                      <input
                        type="checkbox"
                        checked={formData.tiposPresentes.includes(item.name)}
                        onChange={(e) => handleArrayChange('tiposPresentes', item.name, e.target.checked)}
                        className="w-5 h-5 text-blue-600 border-gray-300 rounded focus:ring-blue-500"
                      />
                      <span className="text-blue-500">{item.icon}</span>
                      <span className="text-sm font-medium text-gray-700">{item.name}</span>
                    </label>
                  ))}
                </div>
              </div>

              {/* Perguntas condicionais */}
              {formData.tiposPresentes.includes('Livros') && (
                <div className="bg-gradient-to-r from-blue-50 to-indigo-50 rounded-2xl p-6 border border-blue-200">
                  <label className="block text-sm font-semibold text-gray-700 mb-4">
                    Gêneros de livros preferidos
                  </label>
                  <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
                    {['Ficção', 'Não-ficção', 'Romance', 'Mistério', 'Fantasia', 'Biografia', 'Autoajuda', 'Técnico'].map(genero => (
                      <label key={genero} className="flex items-center space-x-2 cursor-pointer p-2 rounded-lg hover:bg-blue-100 transition-colors duration-200">
                        <input
                          type="checkbox"
                          checked={formData.generosLivros.includes(genero)}
                          onChange={(e) => handleArrayChange('generosLivros', genero, e.target.checked)}
                          className="w-4 h-4 text-blue-600 border-gray-300 rounded focus:ring-blue-500"
                        />
                        <span className="text-sm text-gray-700">{genero}</span>
                      </label>
                    ))}
                  </div>
                </div>
              )}

              {formData.tiposPresentes.includes('Gastronomia') && (
                <div className="bg-gradient-to-r from-blue-50 to-indigo-50 rounded-2xl p-6 border border-blue-200">
                  <label htmlFor="preferenciaGastronomia" className="block text-sm font-semibold text-gray-700 mb-3">
                    Prefere doces ou salgados?
                  </label>
                  <select
                    id="preferenciaGastronomia"
                    value={formData.preferenciaGastronomia}
                    onChange={(e) => handleInputChange('preferenciaGastronomia', e.target.value)}
                    className="w-full px-4 py-4 border-2 border-blue-200 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200 text-base"
                  >
                    <option value="">Selecione...</option>
                    <option value="Doces">Doces</option>
                    <option value="Salgados">Salgados</option>
                    <option value="Ambos">Ambos</option>
                  </select>
                </div>
              )}
            </div>
          </FormSection>

          {/* Seção 5: Restrições */}
          <FormSection title="Restrições" icon={<AlertTriangle className="w-5 h-5" />}>
            <div className="space-y-8">
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-4">
                  Alergias ou intolerâncias
                </label>
                <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                  {['Lactose', 'Glúten', 'Amendoim', 'Fragrâncias', 'Outro'].map(alergia => (
                    <label key={alergia} className="flex items-center space-x-3 cursor-pointer p-3 rounded-xl hover:bg-red-50 transition-all duration-200 border border-transparent hover:border-red-200">
                      <input
                        type="checkbox"
                        checked={formData.alergias.includes(alergia)}
                        onChange={(e) => handleArrayChange('alergias', alergia, e.target.checked)}
                        className="w-5 h-5 text-red-600 border-gray-300 rounded focus:ring-red-500"
                      />
                      <span className="text-sm font-medium text-gray-700">{alergia}</span>
                    </label>
                  ))}
                </div>
              </div>

              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-4">
                  Preferências alimentares
                </label>
                <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                  {['Vegetariano', 'Vegano', 'Sem restrição', 'Outro'].map(preferencia => (
                    <label key={preferencia} className="flex items-center space-x-3 cursor-pointer p-3 rounded-xl hover:bg-green-50 transition-all duration-200 border border-transparent hover:border-green-200">
                      <input
                        type="checkbox"
                        checked={formData.preferenciasAlimentares.includes(preferencia)}
                        onChange={(e) => handleArrayChange('preferenciasAlimentares', preferencia, e.target.checked)}
                        className="w-5 h-5 text-green-600 border-gray-300 rounded focus:ring-green-500"
                      />
                      <span className="text-sm font-medium text-gray-700">{preferencia}</span>
                    </label>
                  ))}
                </div>
              </div>
            </div>
          </FormSection>

          {/* Seção 6: Wishlist */}
          <FormSection title="Wishlist" icon={<Heart className="w-5 h-5" />}>
            <div className="space-y-8">
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-4">
                  Links de produtos ou lojas que você gosta (até 3)
                </label>
                {formData.wishlist.map((link, index) => (
                  <div key={index} className="mb-4">
                    <div className="relative">
                      <Link className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                      <input
                        type="url"
                        value={link}
                        onChange={(e) => handleWishlistChange(index, e.target.value)}
                        className="w-full pl-12 pr-4 py-4 border-2 border-gray-200 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200 hover:border-blue-300 text-base"
                        placeholder={`Link ${index + 1} (opcional)`}
                      />
                    </div>
                  </div>
                ))}
              </div>

              <div>
                <label htmlFor="observacoesAdicionais" className="block text-sm font-semibold text-gray-700 mb-3">
                  Observações adicionais
                </label>
                <textarea
                  id="observacoesAdicionais"
                  value={formData.observacoesAdicionais}
                  onChange={(e) => handleInputChange('observacoesAdicionais', e.target.value)}
                  rows={4}
                  className="w-full px-4 py-4 border-2 border-gray-200 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200 hover:border-blue-300 text-base resize-none"
                  placeholder="Alguma observação especial ou dica para escolher seu presente..."
                />
              </div>
            </div>
          </FormSection>

          {/* Seção 7: Consentimento */}
          <FormSection title="Consentimento" icon={<CheckCircle className="w-5 h-5" />}>
            <div className="space-y-6">
              <label className="flex items-start space-x-4 cursor-pointer p-6 rounded-2xl hover:bg-green-50 transition-all duration-200 border border-transparent hover:border-green-200">
                <input
                  type="checkbox"
                  checked={formData.consentimento}
                  onChange={(e) => handleInputChange('consentimento', e.target.checked.toString())}
                  className="w-6 h-6 text-green-600 border-gray-300 rounded focus:ring-green-500 mt-0.5"
                />
                <span className="text-gray-700 leading-relaxed text-base">
                  Autorizo o uso dessas informações apenas internamente para escolha de presentes de aniversário. *
                </span>
              </label>
              {errors.consentimento && <p className="text-red-500 text-sm flex items-center">
                <AlertTriangle className="w-4 h-4 mr-2" />
                {errors.consentimento}
              </p>}
            </div>
          </FormSection>

          {/* Botão de envio */}
          <div className="text-center pt-12">
            <Button type="submit" className="text-lg px-16 py-5" disabled={isSubmitting}>
              {isSubmitting ? 'Enviando...' : 'Enviar Formulário'}
            </Button>
          </div>
        </form>
      </div>
      <Footer />
    </div>
  );
};

export default FormularioPresentes;
