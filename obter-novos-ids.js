// Script para obter os IDs dos campos do novo Google Form
// Execute este script no Google Apps Script

function obterNovosIds() {
  // ID do novo formulário recriado
  var formId = '1ZKOYORsimFyAzeG9E27S3fYiU7Lc_dS1V71HD6uxI0g';
  var form = FormApp.openById(formId);
  var items = form.getItems();
  
  var ids = {};
  
  for (var i = 0; i < items.length; i++) {
    var item = items[i];
    ids[item.getTitle()] = item.getId();
  }
  
  Logger.log('=== NOVOS IDs DOS CAMPOS ===');
  Logger.log(JSON.stringify(ids, null, 2));
  Logger.log('============================');
  
  return ids;
}

// Função para testar
function testarNovosIds() {
  obterNovosIds();
}
