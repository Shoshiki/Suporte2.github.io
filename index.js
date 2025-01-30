

document.addEventListener('DOMContentLoaded', function () {
  const options = ['Selecione uma opção','O.S FTTX', 'O.S FTTH', 'O.S POTÊNCIA', 'O.S TITULARIDADE', 'Script Titularidade', 'Script Ppoe', 'Script Plantão', 'Script Falha','Tentativa Contato', 'Desconto Não-Concedido']; //Opções da barra de seleção
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
      textarea.value = 'LED DA FONTE POE:\nNOME DO WIFI CONTINUA O MESMO:\nFEITO REBOOT:\nCABOS VERIFICADOS:\n\nTELEFONE DE CONTATO E ENDEREÇO CONFIRMADO\nCLIENTE CIENTE DAS INFORMAÇÕES:\nPRAZO DE [24/48] HORAS\nPOSSÍVEL TAXA DE VISITA IMPRODUTIVA NO VALOR DE R$50,00\nRETORNO CASO ACESSO RETORNE';
    } 
    else if (dropdown.value === 'o.s-ftth') {
      textarea.value = 'LUZES DA ONU:\nSTATUS DA ONU:\nFEITO TROCA DE TOMADA:\nFEITO REBOOT:\nCABOS VERIFICADOS:\nONU REAPROVISIONADA:\nCOMO FINALIZOU ESSE CHECK LIST:\n\nTELEFONE DE CONTATO E ENDEREÇO CONFIRMADO\nCLIENTE CIENTE DAS INFORMAÇÕES:\nPRAZO DE [24/48] HORAS\nPOSSÍVEL TAXA DE VISITA IMPRODUTIVA NO VALOR DE R$50,00\nRETORNO CASO ACESSO RETORNE';
    } 
    else if (dropdown.value === 'o.s-potência') {
      textarea.value = '| IDENTIFICADO CLEINTE COM TX/RX  ALTERADO.\n\n> TX OU RX: -29 - ABRIR O.S DIRETO\n\nCLIENTE COM LENTIDÃO/OSCILAÇÕES:\n\nVERIFICADO TX :\nVERIFICADO RX:\n\nTESTE DE UPLOAD:\nCLIENTE COM QUEDAS: \nONU:\n\nTELEFONE DE CONTATO E ENDEREÇO CONFIRMADO\nCLIENTE CIENTE DAS INFORMAÇÕES:\nPRAZO DE [72] HORAS\nPOSSÍVEL TAXA DE VISITA IMPRODUTIVA NO VALOR DE R$50,00\nRETORNO CASO ACESSO RETORNE';
    } 

    else if (dropdown.value === 'o.s-titularidade') {
      textarea.value = '> FAVOR TROCA LOGIN PPPOE DO CLIENTE\n\n/////RESETAR O ROTEADOR DO CLIENTE PARA COLOCAR UM NOVO LOGIN E SENHA DO PPPE, AO RESETAR  ENTRAR EM CONTATO COM A EQUIPE DE SUPORTE TÉCNICO PARA ALTERAR O LOGIN E SENHA DE AUTENTICAÇÃO/////\n\nTELEFONE DE CONTATO E ENDEREÇO CONFIRMADO\nCLIENTE CIENTE DO PRAZO DE 2 DIAS ÚTEIS \nCLIENTE CIENTE DE RETORNO CASO NORMALIZE';
    } 

    else if (dropdown.value === 'script-titularidade') {
      textarea.value = `TROCA DE TITULARIDADE\n\nXXXNOMEXXXXX\n\n>ANTIGO<\nLOGIN AUTENTICAÇÃO: xxxx\nSENHA AUTENTICAÇÃO: xxxx\n\n>NOVO<\nLOGIN AUTENTICAÇÃO: xxxx\nSENHA AUTENTICAÇÃO: xxxx\n\n//LOGIN ALTERADO, ATENDIMENTO ENCERADO//`;
    } 

    //else if (dropdown.value === 'script-lentidão') {
      //textarea.value = `REALIZADO REINCIO DE CPE\nREALIZADO REINCIO DE ONU\nREALIZADO DESCONEXÃO PELO SISTEMA\nREALIZADO REBOOT DOS EQUIPAMENTOS\n\nALTERADA LARGURA DE BANDA DA REDE 2.4 E 5G\n2.4 >> 20Mhz\n5G >> 80Mhz\n`;
    //} 
  
    else if (dropdown.value === 'script-ppoe') {
      textarea.value = `O procedimento vai ser o seguinte:\n\n1º Irá retirar o cabo de rede conectado ao seu roteador e conectar direto ao computador.\n\n2º Após conectar irá abrir o menu iniciar e pesquisar por painel de controle.\n\n3º Irá clicar em rede e internet > central de rede e compartilhamento > configurar uma nova rede ou conexão > conectar-se à internet > banda larga pppoe.\n\n4º Irá digitar o usuário: xxxxxx e senha: xxxxxx e irá clicar em conectar\n\n5º Após conectar irá nos mandar uma foto do que apareceu.`;
    } 

    else if (dropdown.value === 'script-falha') {
      textarea.value = 'FALHA DE REDE LOCAL - RUA, BAIRRO OU CIDADE AFETADO - (SLOT XX PON XX)\n\nID XXX\n\nCLIENTES QUE RESIDEM NA RUA XX, BAIRRO XX, CIDADE XX, IRÃO SENTIR FALTA DE ACESSO DEVIDO À UM (A) (ROMPIMENTO DE FIBRA QUE ATENDE A LOCALIDADE OU FALHA NO EQUIPAMENTO QUE ATENDE A LOCALIDADE)\n\nNOSSA EQUIPE JÁ ESTÁ CIENTE E FAZENDO O POSSÍVEL PARA NORMALIZAR O QUANTO ANTES.\n\nPRAZO PARA NORMALIZAÇÃO ATÉ ÀS XX:XX HORAS\n\nINICIO DA FALHA: XX/XX/XXXX  XX:XX';
    } 

    else if (dropdown.value === 'script-plantão') {
      textarea.value = 'IDENTIFICADO CLIENTES DOWN EM XXXX(CIDADE) \n\nRUAS AFETADOS:\nXXX\nREFERÊNCIA:\nXXX\nINTERFACE DE CONEXÃO:\nXXX\n\nConfirmado XXXX (LOS ACESA, POE PISCANDO) com XX clientes \nEM MÉDIA XX CLIENTES (LISTA DOS NOMES ABAIXO DE 10)\n\nPRAZO INICIAL PARA NORMALIZAÇÃO ATÉ XX';
    } 

    else if (dropdown.value === 'tentativa-contato') {
      textarea.value = 'XXXXXXX DIA DE TENTATIVA DE CONTATO FEITA VIA TELEFONE\n\nXXXXXXXX >> SEM SUCESSO, MOTIVO > ANEXADO<\n\nTEMPLATE ENVIADO AS XXXX';
    }

else if (dropdown.value === 'desconto-não-concedido') {
      textarea.value = `APÓS ANALISE, NÃO SERÁ CONCEDIDO DESCONTO CONFORME SOLICITADO NESSE PROTOCOLO\n\nMOTIVO DO DESCONTO NEGADO:\n\nENVIADO TEMPLATE DE DESCONTO NÃO CONCEDIDO`;
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



