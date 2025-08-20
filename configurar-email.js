// Script para configurar notificações por email no Google Forms
// Execute este script no Google Apps Script

function configurarNotificacoesEmail() {
  // ID do formulário criado
  var formId = '1qGeuXtDGiRcI0ZG-4i2a4_Fwf3IQId5PjPPoVOKSfHM';
  var form = FormApp.openById(formId);
  
  // Configurar notificação por email
  form.setCollectEmail(true); // Coletar email do respondente (opcional)
  
  // Configurar notificação para você
  var email = Session.getActiveUser().getEmail(); // Seu email
  form.setRequireLogin(false); // Não requer login do Google
  
  Logger.log('Notificações configuradas para: ' + email);
  Logger.log('Formulário configurado para coletar emails: ' + form.isCollectingEmails());
  
  return {
    email: email,
    coletandoEmails: form.isCollectingEmails(),
    formUrl: form.getPublishedUrl()
  };
}

// Função para testar envio manual
function testarEnvioManual() {
  var formId = '1qGeuXtDGiRcI0ZG-4i2a4_Fwf3IQId5PjPPoVOKSfHM';
  var form = FormApp.openById(formId);
  
  // Criar uma resposta de teste
  var formResponse = form.createResponse();
  
  // Adicionar respostas de teste
  formResponse.withItemResponse(form.getItemById(1966063435).asTextItem().createResponse('Teste Nome'));
  formResponse.withItemResponse(form.getItemById(778570144).asTextItem().createResponse('15/03'));
  formResponse.withItemResponse(form.getItemById(1425101511).asMultipleChoiceItem().createResponse('M'));
  formResponse.withItemResponse(form.getItemById(330769115).asCheckboxItem().createResponse(['Sim']));
  
  // Enviar resposta
  formResponse.submit();
  
  Logger.log('Resposta de teste enviada com sucesso!');
}

// Função para verificar respostas
function verificarRespostas() {
  var formId = '1qGeuXtDGiRcI0ZG-4i2a4_Fwf3IQId5PjPPoVOKSfHM';
  var form = FormApp.openById(formId);
  
  var responses = form.getResponses();
  Logger.log('Total de respostas: ' + responses.length);
  
  for (var i = 0; i < responses.length; i++) {
    var response = responses[i];
    Logger.log('Resposta ' + (i+1) + ': ' + response.getTimestamp());
  }
  
  return responses.length;
}
