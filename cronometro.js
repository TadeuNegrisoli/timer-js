"use strict"

var hh = 0;
var mm = 0;
var ss = 0;

var tempo = 1000;//quantos milésimos valem 1 segundo?
var cron;

//inicia o cronômetro
function iniciar() {
    cron = setInterval(() => {timer();}, tempo);
}

//para o cronômetro mas não limpa as variáveis
function pausar() {
    clearInterval(cron);
}

//para o cronômetro e limpa as variáveis
function parar() {
    clearInterval(cron);
    hh= 0;
    mm= 0;
    ss= 0;

    document.getElementById('contador').innerText= '00:00:00';
}

//faz a contagem do tempo e exibição
function timer() {
    ss++; //incrementa + na variável ss

    if (ss == 59) { //verifica se deu 59 seg
        ss = 0; //volta os segundos para 0
        mm++; //add +1 na variável mm

        if (mm == 59) { //verifica se deu 59 min
            mm = 0; //volta os minutos para 0
            hh++; //add +1 na variável hora
        }
    }

    //cria uma variável com o valor hh:mm:ss
    var format= (hh < 10 ? '0' + hh : hh) + ':' + (mm < 10 ? '0' + mm : mm) + ':' + (ss < 10 ? '0' + ss : ss)

    //insere o valor no elemto contador
    document.getElementById('contador').innerText= format;

    //retorna o valor
    return format;
}