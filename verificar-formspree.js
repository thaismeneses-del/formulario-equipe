// Script para verificar o endpoint do Formspree
// Execute este código no console do navegador (F12)

console.log('🔍 Verificando endpoint do Formspree...');

const verificarFormspree = async () => {
  const formspreeUrl = 'https://formspree.io/f/xzzvlgde';
  
  // Teste 1: Verificar se o endpoint responde
  try {
    console.log('📡 Testando conectividade com Formspree...');
    
    const response = await fetch(formspreeUrl, {
      method: 'OPTIONS',
      headers: {
        'Accept': 'application/json',
      }
    });
    
    console.log('📥 Resposta OPTIONS:', response.status, response.statusText);
    console.log('📋 Headers permitidos:', response.headers.get('Access-Control-Allow-Headers'));
    console.log('🔄 Métodos permitidos:', response.headers.get('Access-Control-Allow-Methods'));
    
  } catch (error) {
    console.error('❌ Erro na verificação OPTIONS:', error);
  }
  
  // Teste 2: Enviar dados de teste
  const testData = {
    nome: 'Teste de Verificação - ' + new Date().toLocaleString(),
    dataAniversario: '15/03',
    camiseta: 'M',
    consentimento: 'Sim',
    timestamp: new Date().toISOString()
  };
  
  try {
    console.log('📤 Enviando dados de teste...');
    
    const response = await fetch(formspreeUrl, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json',
      },
      body: JSON.stringify(testData)
    });
    
    console.log('📥 Status da resposta:', response.status);
    console.log('📋 Status Text:', response.statusText);
    console.log('📋 Headers:', Object.fromEntries(response.headers.entries()));
    
    const responseText = await response.text();
    console.log('📄 Conteúdo da resposta:', responseText);
    
    if (response.ok) {
      console.log('✅ Formspree está funcionando corretamente!');
      return true;
    } else {
      console.log('❌ Formspree retornou erro:', response.status);
      return false;
    }
    
  } catch (error) {
    console.error('💥 Erro ao testar Formspree:', error);
    return false;
  }
};

// Executar verificação
verificarFormspree().then(funcionando => {
  if (funcionando) {
    console.log('🎉 Formspree está OK!');
  } else {
    console.log('💔 Formspree não está funcionando!');
    console.log('💡 Sugestão: Verificar se o endpoint está correto ou criar um novo no Formspree');
  }
});

// Verificar dados salvos localmente
console.log('💾 Verificando dados salvos localmente...');
const enviados = JSON.parse(localStorage.getItem('formularioEnviados') || '[]');
const backups = JSON.parse(localStorage.getItem('formularioBackups') || '[]');
const emergencia = JSON.parse(localStorage.getItem('formularioEmergencia') || '[]');

console.log('📦 Formulários enviados com sucesso:', enviados.length);
console.log('📦 Formulários em backup:', backups.length);
console.log('📦 Formulários em emergência:', emergencia.length);

if (enviados.length > 0) {
  console.log('📋 Último enviado:', enviados[enviados.length - 1]);
}
if (backups.length > 0) {
  console.log('📋 Último backup:', backups[backups.length - 1]);
}
