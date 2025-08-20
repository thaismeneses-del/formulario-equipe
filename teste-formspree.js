// Script para testar o endpoint do Formspree
// Execute este script no navegador (F12 -> Console)

async function testarFormspree() {
  const formspreeUrl = 'https://formspree.io/f/xzzvlgde';
  
  const dadosTeste = {
    nome: 'Teste Automático',
    dataAniversario: '15/03',
    camiseta: 'M',
    calca: '40',
    sapato: '39',
    observacoesTamanhos: 'Teste de observações',
    estilos: 'Casual, Clássico',
    coresFavoritas: 'Azul, Verde',
    coresEvitar: 'Amarelo',
    tiposPresentes: 'Roupas, Tech',
    generosLivros: 'Ficção, Romance',
    preferenciaGastronomia: 'Doces',
    alergias: 'Lactose',
    preferenciasAlimentares: 'Sem restrição',
    wishlist: 'https://exemplo.com/produto1',
    observacoesAdicionais: 'Teste de envio automático',
    consentimento: 'Sim',
    timestamp: new Date().toISOString()
  };

  try {
    console.log('🚀 Enviando teste para Formspree...');
    console.log('Dados:', dadosTeste);
    
    const response = await fetch(formspreeUrl, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(dadosTeste)
    });

    console.log('📊 Resposta do Formspree:');
    console.log('Status:', response.status);
    console.log('Status Text:', response.statusText);
    console.log('Headers:', response.headers);
    
    if (response.ok) {
      console.log('✅ SUCESSO! Formulário enviado com sucesso!');
      console.log('📧 Verifique seu email e o dashboard do Formspree');
    } else {
      console.log('❌ ERRO! Status:', response.status);
      const errorText = await response.text();
      console.log('Erro detalhado:', errorText);
    }
    
  } catch (error) {
    console.error('❌ Erro na requisição:', error);
  }
}

// Função para testar com dados mínimos
async function testarFormspreeMinimo() {
  const formspreeUrl = 'https://formspree.io/f/xzzvlgde';
  
  const dadosMinimos = {
    nome: 'Teste Mínimo',
    dataAniversario: '01/01',
    consentimento: 'Sim'
  };

  try {
    console.log('🚀 Enviando teste mínimo...');
    
    const response = await fetch(formspreeUrl, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(dadosMinimos)
    });

    console.log('Status:', response.status);
    
    if (response.ok) {
      console.log('✅ Teste mínimo enviado com sucesso!');
    } else {
      console.log('❌ Erro no teste mínimo');
    }
    
  } catch (error) {
    console.error('❌ Erro:', error);
  }
}

// Executar testes
console.log('🧪 Iniciando testes do Formspree...');
testarFormspree();
// testarFormspreeMinimo(); // Descomente para testar dados mínimos
