// Cria um evento com a função de barra de seleção

document.addEventListener('DOMContentLoaded', function () {
  const options = ['Selecione uma opção','O.S FTTX', 'O.S FTTH', 'Envio SMS','Script Lentidão' , 'Conexão PPOE' , 'Desconto Não-Concedido']; //Opções da barra de seleção
  const dropdown = document.getElementById('dropdown'); //Puxa as informações da div dropdown
  const textarea = document.getElementById('myTextarea'); // Puxa as informações do textarea

  //Cria uma função de opções da barra
  options.forEach(function (option, index) {
    const optionElement = document.createElement('option');
    optionElement.value = option.toLowerCase().replace(' ', '-');
    optionElement.text = option;

    // Desativa a primeira opção (índice 0)
    if (index === 0) {
      optionElement.disabled = true;
      optionElement.selected = true;
    }

    dropdown.add(optionElement);
  });

  dropdown.addEventListener('change', function () {
    textarea.classList.add('hidden'); // Ocultar o textarea por padrão

    // opções da barra 
    if (dropdown.value === 'o.s-fttx') {
      textarea.value = 'LED DA FONTE POE:\nNOME DO WIFI CONTINUA O MESMO:\nFEITO REBOOT:\nCABOS VERIFICADOS:\nTESTE COM CABO DIRETO NO COMPUTADOR PPOE:\nCOMO FINALIZOU ESSE CHECK LIST:\n\nTELEFONES CONFIRMADOS\nENDEREÇOS CONFIRMADOS\nCLIENTE CIENTE DO PRAZO DE [24/48] HORAS\nCLIENTE CIENTE DA POSSIVEL TAXA DE VISITA IMPRODUTIVA OU MATERIAL USADO\nCLIENTE CIENTE DE RETORNO CASO NORMALIZE\n';
    } 
    else if (dropdown.value === 'envio-sms') {
      let pnumero = prompt("Número de TELEFONE do cliente:");
      let phora = prompt("Horário do contato:");
      textarea.value = `TENTATIVA DE CONTATO VIA LIGAÇÃO\n\n${pnumero} XXXXXXX AS ${phora} (ANEXO)\nENVIADO TEMPLATE VIA WHATSAPP AS XXX (ANEXO)`;
    } 
    else if (dropdown.value === 'o.s-ftth') {
      textarea.value = `LUZES DA ONU:\nSTATUS DA ONU:\nFEITO TROCA DE TOMADA:\nNOME DO WIFI CONTINUA O MESMO:\nFEITO REBOOT:\nCABOS VERIFICADOS:\nONU ANALISADA E REAPROVISIONADA:\nCOMO FINALIZOU ESSE CHECK LIST:\n\nTELEFONES CONFIRMADOS\nENDEREÇOS CONFIRMADOS\nCLIENTE CIENTE DO PRAZO DE [24/48] HORAS\nCLIENTE CIENTE DA POSSIVEL TAXA DE VISITA IMPRODUTIVA OU MATERIAL USADO\nCLIENTE CIENTE DE RETORNO CASO NORMALIZE\n`;
    } 
    else if (dropdown.value === 'script-lentidão') {
      textarea.value = `REALIZADO REINCIO DE CPE\nREALIZADO REINCIO DE ONU\nREALIZADO DESCONEXÃO PELO SISTEMA\nREALIZADO REBOOT DOS EQUIPAMENTOS\n\nALTERADA LARGURA DE BANDA DA REDE 2.4 E 5G\n2.4 >> 20Mhz\n5G >> 80Mhz\n`;
    } 
    else if (dropdown.value === 'conexão-ppoe') {
      textarea.value = `O procedimento vai ser o seguinte:\n\n1º Irá retirar o cabo de rede conectado ao seu roteador e conectar direto ao computador.\n\n2º Após conectar irá abrir o menu iniciar e pesquisar por painel de controle.\n\n3º Irá clicar em rede e internet > central de rede e compartilhamento > configurar uma nova rede ou conexão > conectar-se à internet > banda larga pppoe.\n\n4º Irá digitar o usuário: xxxxxx e senha: xxxxxx e irá clicar em conectar\n\n5º Após conectar irá nos mandar uma foto do que apareceu.`;
    } 
    else if (dropdown.value === 'desconto-não-concedido') {
      textarea.value = `APÓS ANALISE, NÃO SERÁ CONCEDIDO DESCONTO CONFORME SOLICITADO NESSE PROTOCOLO\n\nMOTIVO DO DESCONTO NEGADO (DETALHADO)\n\nSMS ENVIADO AS XX:XX`;
    } 
    else if (dropdown.value === '------') {
      textarea.value = ``;
    }

    if (dropdown.value !== 'default') {
      // Se uma opção válida for selecionada, exibir o textarea
      textarea.classList.remove('hidden');
    }
  });
});
