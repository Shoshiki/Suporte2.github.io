

document.addEventListener('DOMContentLoaded', function () {
  const options = ['Selecione uma opção','O.S FTTX', 'O.S FTTH', 'Envio SMS','Script Lentidão' , 'Conexão PPOE' , 'Desconto Não-Concedido'];
  const dropdown = document.getElementById('dropdown');
  const infoContainer = document.getElementById('infoContainer');
  const infoMessage = document.getElementById('infoMessage');

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
    infoContainer.classList.add('hidden'); // Ocultar a div por padrão

    if (dropdown.value === 'o.s-fttx') {
      infoMessage.innerHTML = 'LED DA FONTE POE:<br>NOME DO WIFI CONTINUA O MESMO:<br>FEITO REBOOT:<br>CABOS VERIFICADOS:<br>TESTE COM CABO DIRETO NO COMPUTADOR PPOE:<br>COMO FINALIZOU ESSE CHECK LIST:<br><br>TELEFONES CONFIRMADOS<br>CLIENTE CIENTE DO PRAZO DE [24/48] HORAS<br>CLIENTE CIENTE DA POSSIVEL TAXA DE VISITA IMPRODUTIVA R$50,00<br>CLIENTE CIENTE DE RETORNO CASO NORMALIZE<br>';
  
    } 
    else if (dropdown.value === 'envio-sms') {
      let pnumero = prompt("Número de TELEFONE do cliente:");
      let phora = prompt("Horário do contato:");
      infoMessage.innerHTML = `TENTATIVA DE CONTATO VIA LIGAÇÃO<br><br>${pnumero} XXXXXXX AS ${phora} (ANEXO)<br>ENVIADO TEMPLATE VIA WHATSAPP AS XXX (ANEXO)`;
    } 
    else if (dropdown.value === 'o.s-ftth') {
      infoMessage.innerHTML = `LUZES DA ONU:<br>STATUS DA ONU:<br>FEITO TROCA DE TOMADA:<br> 
      NOME DO WIFI CONTINUA O MESMO:<br>  
      FEITO REBOOT:<br> 
      CABOS VERIFICADOS:<br> 
      ONU ANALISADA E REAPROVISIONADA:<br> 
      COMO FINALIZOU ESSE CHECK LIST:<br> 
      <br>
      TELEFONES CONFIRMADOS<br>
      CLIENTE CIENTE DO PRAZO DE [24/48] HORAS<br>
      CLIENTE CIENTE DA POSSIVEL TAXA DE VISITA IMPRODUTIVA R$50,00<br>
      CLIENTE CIENTE DE RETORNO CASO NORMALIZE<br>`;

    } 
    else if (dropdown.value === 'script-lentidão') {
      infoMessage.innerHTML = `REALIZADO REINCIO DE CPE<br>REALIZADO REINCIO DE ONU<br>REALIZADO DESCONEXÃO PELO SISTEMA<br>REALIZADO REBOOT DOS EQUIPAMENTOS<br><br>ALTERADA LARGURA DE BANDA DA REDE 2.4 E 5G<br>2.4 >> 20Mhz<br>5G >> 80Mhz<br>`;
    } 
    else if (dropdown.value === 'conexão-ppoe') {
      infoMessage.innerHTML = `O procedimento vai ser o seguinte:<br><br>1º Irá retirar o cabo de rede conectado ao seu roteador e conectar direto ao computador.<br><br>2º Após conectar irá abrir o menu iniciar e pesquisar por painel de controle.<br><br>3º Irá clicar em rede e internet > central de rede e compartilhamento > configurar uma nova rede ou conexão > conectar-se à internet > banda larga pppoe.<br><br>4º Irá digitar o usuário: xxxxxx e senha: xxxxxx e irá clicar em conectar<br><br>5º Após conectar irá nos mandar uma foto do que apareceu.`;
    } 
    else if (dropdown.value === 'desconto-não-concedido') {
      infoMessage.innerHTML = `APÓS ANALISE, NÃO SERÁ CONCEDIDO DESCONTO CONFORME SOLICITADO NESSE PROTOCOLO<br><br>MOTIVO DO DESCONTO NEGADO (DETALHADO)<br><br>SMS ENVIADO AS XX:XX`;
    } 
    else if (dropdown.value === '------') {
      infoMessage.innerHTML = ``;
    }

    if (dropdown.value !== 'default') {
      // Se uma opção válida for selecionada, exibir a div
      infoContainer.classList.remove('hidden');
    }
  });
});
