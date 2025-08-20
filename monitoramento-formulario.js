// Script de monitoramento do formulário
// Execute este código no console do navegador para verificar o status

console.log('🔍 Iniciando monitoramento do formulário...');

const monitorarFormulario = () => {
  // Verificar dados salvos
  const enviados = JSON.parse(localStorage.getItem('formularioEnviados') || '[]');
  const backups = JSON.parse(localStorage.getItem('formularioBackups') || '[]');
  const emergencia = JSON.parse(localStorage.getItem('formularioEmergencia') || '[]');
  
  console.log('📊 STATUS DO FORMULÁRIO:');
  console.log('✅ Enviados com sucesso:', enviados.length);
  console.log('💾 Em backup local:', backups.length);
  console.log('🚨 Em emergência:', emergencia.length);
  
  // Verificar última atividade
  const todasRespostas = [...enviados, ...backups, ...emergencia];
  if (todasRespostas.length > 0) {
    const ultima = todasRespostas.sort((a, b) => new Date(b.timestamp) - new Date(a.timestamp))[0];
    console.log('🕐 Última resposta:', new Date(ultima.timestamp).toLocaleString());
    console.log('👤 Último usuário:', ultima.nome);
    console.log('📋 Status:', ultima.status);
  }
  
  // Verificar conectividade com Formspree
  testarFormspree();
};

const testarFormspree = async () => {
  console.log('🌐 Testando conectividade com Formspree...');
  
  try {
    const response = await fetch('https://formspree.io/f/xzzvlgde', {
      method: 'OPTIONS'
    });
    
    if (response.ok) {
      console.log('✅ Formspree está acessível');
    } else {
      console.log('❌ Formspree pode estar com problemas');
    }
  } catch (error) {
    console.log('❌ Erro ao conectar com Formspree:', error.message);
  }
};

// Executar monitoramento
monitorarFormulario();

// Monitoramento automático a cada 5 minutos
setInterval(() => {
  console.log('🔄 Verificação automática...');
  monitorarFormulario();
}, 5 * 60 * 1000);

console.log('📡 Monitoramento ativo - verificações a cada 5 minutos');
