function executar() {
  let atednimento, valorAtendimento, divres, pnumero, phora, alerta;
  atednimento = document.querySelector("input#tipoatendimento");
  valorAtendimento = Number(atednimento.value);
  if (valorAtendimento == 1) {
    divres = document.querySelector("div#res");
    divres.innerHTML = `
    LED DA FONTE POE:<br>
    NOME DO WIFI CONTINUA O MESMO:<br>
    FEITO REBOOT:<br>
    CABOS VERIFICADOS:<br>
    TESTE COM CABO DIRETO NO COMPUTADOR PPOE:<br>
    COMO FINALIZOU ESSE CHECK LIST:<br>
    <br>
    CLIENTE CIENTE DO PRAZO DE [24/48] HORAS<br>
    CLIENTE CIENTE DA POSSIVEL TAXA R$50,00<br>
    CLIENTE CIENTE DE RETORNO CASO NORMALIZE<br>`;
  } 
  else if (valorAtendimento == 2) {
    divres = document.querySelector("div#res");

    divres.innerHTML = `LUZES DA ONU:<br>
    STATUS DA ONU:<br> 
    FEITO TROCA DE TOMADA:<br> 
    NOME DO WIFI CONTINUA O MESMO:<br>  
    FEITO REBOOT:<br> 
    CABOS VERIFICADOS:<br> 
    ONU ANALISADA E REAPROVISIONADA:<br> 
    COMO FINALIZOU ESSE CHECK LIST:<br> 
    <br>
    CLIENTE CIENTE DO PRAZO DE [24/48] HORAS<br>
    CLIENTE CIENTE DA POSSIVEL TAXA R$50,00<br>
    CLIENTE CIENTE DE RETORNO CASO NORMALIZE<br>`
  } 
  
  else if (valorAtendimento == 3) {
    pnumero = prompt("Numero de TELEFONE do cliente:");
    phora = prompt("Horario do contato:");
    divres = document.querySelector("div#res");

    divres.innerHTML = `TENTATIVA DE CONTATO VIA LIGAÇÃO</br></br>

    ${pnumero} XXXXXXX AS ${phora} (ANEXO)</br>
<br>
    ENVIADO TEMPLATE VIA WHATSAPP AS XXX (ANEXO)`;
  }

      else if (valorAtendimento == 4) {
    divres = document.querySelector("div#res");

    divres.innerHTML = `
    REALIZADO REINCIO DE CPE<br>
    REALIZADO REINCIO DE ONU<br>
    REALIZADO DESCONEXÃO PELO SISTEMA<br>
    REALIZADO REBOOT DOS EQUIPAMENTOS<br>
    <br>
    ALTERADA LARGURA DE BANDA DA REDE 2.4 E 5G<br>
    2.4 >> 20Mhz<br>
    5G >> 80Mhz<br>
    `
  }
    else if (valorAtendimento == 5) {
      divres = document.querySelector("div#res");
  
      divres.innerHTML = `
      O procedimento vai ser o seguinte:<br>
      <br>
      1º Irá retirar o cabo de rede conectado ao seu roteador e conectar direto ao computador.<br>
      <br>
      2º Após conectar irá abrir o menu iniciar e pesquisar por painel de controle.<br>
      <br>
      3º Irá clicar em rede e internet > central de rede e 
      compartilhamento > configurar uma nova rede ou conexão > conectar-se à internet > banda larga pppoe.<br>
      <br>
      4º Irá digitar o usuário: xxxxxx e senha: xxxxxx e irá clicar em conectar<br>
      <br>
      5º Após conectar irá nos mandar uma foto do que apareceu.
      `
    }

  else if (valorAtendimento == 6) {
    divres = document.querySelector("div#res");

    divres.innerHTML = 
    `APÓS ANALISE, NÃO SERÁ CONCEDIDO DESCONTO CONFORME SOLICITADO NESSE PROTOCOLO<br>
    <br>
    MOTIVO DO DESCONTO NEGADO (DETALHADO)<br> 
    <br>
    SMS ENVIADO AS XX:XX (ANEXO.
    `
  }   

    else {
    alerta = alert("Não econtrado");
    alerta.style.color = "red";
  }
}
