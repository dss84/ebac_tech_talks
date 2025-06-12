AOS.init();

const dataDoEvento = new Date("2025-12-12T19:00:00");

const contaAsHoras = setInterval(function() {
const agora = new Date();

  // Começa calculando os meses exatos
    let anos = dataDoEvento.getFullYear() - agora.getFullYear();
    let meses = dataDoEvento.getMonth() - agora.getMonth() + anos * 12;

  // Ajuste se o dia atual for depois do dia do evento no mês
    let dataMesAjustado = new Date(
    agora.getFullYear(),
    agora.getMonth() + meses,
    agora.getDate(),
    agora.getHours(),
    agora.getMinutes(),
    agora.getSeconds()
    );

    if (dataMesAjustado > dataDoEvento) {
        meses--;
        dataMesAjustado = new Date(
        agora.getFullYear(),
        agora.getMonth() + meses,
        agora.getDate(),
        agora.getHours(),
        agora.getMinutes(),
        agora.getSeconds()
        );
    }

  // Diferença de tempo restante após descontar os meses
    let diffMs = dataDoEvento - dataMesAjustado;

  // Calcular dias, horas, minutos e segundos restantes
    let dias = Math.floor(diffMs / (1000 * 60 * 60 * 24));
    diffMs -= dias * (1000 * 60 * 60 * 24);

    let horas = Math.floor(diffMs / (1000 * 60 * 60));
    diffMs -= horas * (1000 * 60 * 60);

    let minutos = Math.floor(diffMs / (1000 * 60));
    diffMs -= minutos * (1000 * 60);

    let segundos = Math.floor(diffMs / 1000);

  // Exibir resultado

    document.getElementById('contador').innerHTML = `começa em ${meses}m ${dias}d ${horas}h ${minutos}m ${segundos}s`;

  // Se chegou no evento, para o contador
    if (dataDoEvento <= agora) {
        clearInterval(contaAsHoras);
        document.getElementById('contador').innerHTML = `Evento já iniciou`;
    }

    if (dataDoEvento < agora) {
        clearInterval(contaAsHoras);
        document.getElementById('contador').innerHTML = `Evento encerrado`;
    }
}, 1000);