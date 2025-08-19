// Script para obter os IDs dos campos do Google Form
// Execute este script no Google Apps Script

function obterIdsCampos() {
  // ID do formulário criado
  var formId = '1qGeuXtDGiRcI0ZG-4i2a4_Fwf3IQId5PjPPoVOKSfHM';
  var form = FormApp.openById(formId);
  var items = form.getItems();
  
  var ids = {};
  
  for (var i = 0; i < items.length; i++) {
    var item = items[i];
    ids[item.getTitle()] = item.getId();
  }
  
  Logger.log('IDs dos campos:');
  Logger.log(JSON.stringify(ids, null, 2));
  
  return ids;
}

// Função para testar
function testar() {
  obterIdsCampos();
}
