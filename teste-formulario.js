// Script para testar o Formspree
// Execute este código no console do navegador (F12)

console.log('🧪 Iniciando teste do Formspree...');

const testFormspree = async () => {
  const formspreeUrl = 'https://formspree.io/f/xzzvlgde';
  
  const testData = {
    nome: 'Teste Automático - ' + new Date().toLocaleString(),
    dataAniversario: '15/03',
    camiseta: 'M',
    calca: '40',
    sapato: '38',
    observacoesTamanhos: 'Teste de observações',
    estilos: 'Casual, Clássico',
    coresFavoritas: 'Azul, Verde',
    coresEvitar: 'Amarelo',
    tiposPresentes: 'Roupas, Acessórios',
    generosLivros: '',
    preferenciaGastronomia: '',
    alergias: '',
    preferenciasAlimentares: '',
    wishlist: 'https://exemplo.com/produto1, https://exemplo.com/produto2',
    observacoesAdicionais: 'Teste de formulário automático',
    consentimento: 'Sim',
    timestamp: new Date().toISOString()
  };

  try {
    console.log('📤 Enviando dados de teste:', testData);
    
    const response = await fetch(formspreeUrl, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(testData)
    });
    
    console.log('📥 Resposta recebida:', response.status, response.statusText);
    console.log('📋 Headers da resposta:', Object.fromEntries(response.headers.entries()));
    
    if (response.ok) {
      const responseText = await response.text();
      console.log('✅ Sucesso! Resposta completa:', responseText);
      return true;
    } else {
      console.error('❌ Erro HTTP:', response.status, response.statusText);
      const errorText = await response.text();
      console.error('📄 Conteúdo do erro:', errorText);
      return false;
    }
  } catch (error) {
    console.error('💥 Erro de rede:', error);
    return false;
  }
};

// Executar teste
testFormspree().then(success => {
  if (success) {
    console.log('🎉 Teste do Formspree: SUCESSO!');
  } else {
    console.log('💔 Teste do Formspree: FALHOU!');
  }
});

// Testar localStorage também
console.log('💾 Verificando localStorage...');
const backups = JSON.parse(localStorage.getItem('formularioBackups') || '[]');
console.log('📦 Backups salvos:', backups.length);
if (backups.length > 0) {
  console.log('📋 Último backup:', backups[backups.length - 1]);
}
