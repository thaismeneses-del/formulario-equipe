// Script para recriar o Google Form automaticamente
// Execute este script no Google Apps Script

function recriarFormularioPresentes() {
  // Criar novo formulário
  var form = FormApp.create('Formulário para Presente - Respostas');
  
  // Configurar descrição
  form.setDescription('Respostas coletadas do formulário de preferências de presentes');
  
  // 1. Nome e sobrenome
  var nomeItem = form.addTextItem();
  nomeItem.setTitle('Nome e sobrenome')
    .setRequired(true)
    .setHelpText('Digite seu nome completo');
  
  // 2. Dia e mês do aniversário
  var dataItem = form.addTextItem();
  dataItem.setTitle('Dia e mês do aniversário')
    .setRequired(true)
    .setHelpText('Formato: DD/MM');
  
  // 3. Tamanho camiseta
  var camisetaItem = form.addMultipleChoiceItem();
  camisetaItem.setTitle('Tamanho camiseta')
    .setChoiceValues(['PP', 'P', 'M', 'G', 'GG', 'XG'])
    .setRequired(false);
  
  // 4. Tamanho calça
  var calcaItem = form.addMultipleChoiceItem();
  calcaItem.setTitle('Tamanho calça')
    .setChoiceValues(['34', '36', '38', '40', '42', '44', '46', '48', '50', '52', '54'])
    .setRequired(false);
  
  // 5. Tamanho sapato
  var sapatoItem = form.addMultipleChoiceItem();
  sapatoItem.setTitle('Tamanho sapato')
    .setChoiceValues(['33', '34', '35', '36', '37', '38', '39', '40', '41', '42', '43', '44', '45'])
    .setRequired(false);
  
  // 6. Observações tamanhos
  var obsTamanhosItem = form.addParagraphTextItem();
  obsTamanhosItem.setTitle('Observações sobre tamanhos')
    .setHelpText('Informações sobre caimento, marcas preferidas, etc.');
  
  // 7. Estilos pessoais
  var estilosItem = form.addCheckboxItem();
  estilosItem.setTitle('Estilo pessoal')
    .setChoiceValues(['Casual', 'Clássico', 'Esportivo', 'Minimalista', 'Romântico', 'Ousado', 'Social'])
    .setRequired(false);
  
  // 8. Cores favoritas
  var coresFavItem = form.addTextItem();
  coresFavItem.setTitle('Cores favoritas')
    .setHelpText('Ex: azul, verde, rosa');
  
  // 9. Cores a evitar
  var coresEvitarItem = form.addTextItem();
  coresEvitarItem.setTitle('Cores/estampas a evitar')
    .setHelpText('Ex: amarelo, listras');
  
  // 10. Tipos de presentes
  var tiposItem = form.addCheckboxItem();
  tiposItem.setTitle('Tipos de presentes')
    .setChoiceValues(['Roupas', 'Acessórios', 'Livros', 'Papelaria', 'Tech', 'Beleza', 'Gastronomia', 'Experiências', 'Vale-presente'])
    .setRequired(false);
  
  // 11. Gêneros de livros
  var livrosItem = form.addCheckboxItem();
  livrosItem.setTitle('Gêneros de livros preferidos')
    .setChoiceValues(['Ficção', 'Não-ficção', 'Romance', 'Suspense', 'Fantasia', 'Biografia', 'Autoajuda', 'Técnico', 'Poesia'])
    .setRequired(false);
  
  // 12. Preferência gastronomia
  var gastronomiaItem = form.addMultipleChoiceItem();
  gastronomiaItem.setTitle('Preferência gastronomia')
    .setChoiceValues(['Doces', 'Salgados', 'Ambos'])
    .setRequired(false);
  
  // 13. Alergias
  var alergiasItem = form.addCheckboxItem();
  alergiasItem.setTitle('Alergias/intolerâncias')
    .setChoiceValues(['Lactose', 'Glúten', 'Amendoim', 'Fragrâncias', 'Outro'])
    .setRequired(false);
  
  // 14. Preferências alimentares
  var alimentacaoItem = form.addCheckboxItem();
  alimentacaoItem.setTitle('Preferências alimentares')
    .setChoiceValues(['Vegetariano', 'Vegano', 'Sem restrição', 'Outro'])
    .setRequired(false);
  
  // 15. Wishlist
  var wishlistItem = form.addParagraphTextItem();
  wishlistItem.setTitle('Wishlist (links de produtos/lojas)')
    .setHelpText('Até 3 links de produtos ou lojas preferidas');
  
  // 16. Observações adicionais
  var obsItem = form.addParagraphTextItem();
  obsItem.setTitle('Observações adicionais')
    .setHelpText('Qualquer informação adicional que queira compartilhar');
  
  // 17. Consentimento
  var consentimentoItem = form.addCheckboxItem();
  consentimentoItem.setTitle('Consentimento')
    .setChoiceValues(['Autorizo o uso dessas informações apenas internamente para escolha de presentes de aniversário'])
    .setRequired(true);
  
  // Configurar respostas para planilha
  var sheet = SpreadsheetApp.create('Respostas - Formulário Presente');
  form.setDestination(FormApp.DestinationType.SPREADSHEET, sheet.getId());
  
  // Configurar notificações
  form.setCollectEmail(true);
  
  // Retornar informações importantes
  var formUrl = form.getPublishedUrl();
  var editUrl = form.getEditUrl();
  var sheetUrl = sheet.getUrl();
  var formId = form.getId();
  
  Logger.log('=== FORMULÁRIO RECRIADO COM SUCESSO ===');
  Logger.log('URL do formulário: ' + formUrl);
  Logger.log('URL de edição: ' + editUrl);
  Logger.log('URL da planilha: ' + sheetUrl);
  Logger.log('ID do formulário: ' + formId);
  Logger.log('=====================================');
  
  return {
    formUrl: formUrl,
    editUrl: editUrl,
    sheetUrl: sheetUrl,
    formId: formId
  };
}
