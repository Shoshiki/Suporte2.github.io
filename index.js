

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
  
  else if (valorAtendimento == 4) {
    pnumero = prompt("Numero do cliente:");
    phora = prompt("Horario do contato:");
    divres = document.querySelector("div#res");

    divres.innerHTML = `TENTATIVA DE CONTATO VIA LIGAÇÃO</br></br>

    ${pnumero} XXXXXXX AS ${phora} (ANEXO)</br>

    ENVIADO TEMPLATE VIA WHATSAPP AS XXX (ANEXO)`;
  } else {
    alerta = alert("Não econtrado");
    alerta.style.color = "red";
  }
}
