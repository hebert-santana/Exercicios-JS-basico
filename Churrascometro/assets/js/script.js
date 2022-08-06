const horas = 5;
const constAdolescente = 0.8;
const constCrianca = 0.5;
let formulario = document.querySelector('.form');

formulario.addEventListener('submit', function (e) {
    e.preventDefault();

    let adultosBebem = Number(document.getElementById("form__adultosBebem").value);
    let adultosNaoBebem = Number(document.getElementById("form__adultosNaoBebem").value);
    let adolescentes = Number(document.getElementById("form__menorDe18").value);
    let criancas = Number(document.getElementById("form__criancas").value);
    let duracaoDoChurrasco = Number(document.getElementById("form__duracao").value);
    let resultado = document.getElementById("form__resultado");

    let totalCarne = (carnePorHora(duracaoDoChurrasco) * adultosBebem + adultosNaoBebem) + (carnePorHora(duracaoDoChurrasco) * constAdolescente * adolescentes) + (carnePorHora(duracaoDoChurrasco) * constCrianca * criancas);
    let totalCerveja = cervejaPorHora(duracaoDoChurrasco) * adultosBebem
    let totalRefri = (refriPorHora(duracaoDoChurrasco) * adultosNaoBebem) + (refriPorHora(duracaoDoChurrasco) * constAdolescente * adolescentes) + (refriPorHora(duracaoDoChurrasco) * constCrianca * criancas);

    resultado.innerHTML = `<p>Para o seu churrasco, você deve ter:</p>`
    resultado.innerHTML += `<strong> <p>${(totalCarne) / 1000}Kg de carne.</p> </strong>`
    resultado.innerHTML += `<strong> <p>${Math.ceil((totalCerveja) / 355)} latas de cerveja.</p> </strong>`
    resultado.innerHTML += `<strong> <p>${Math.ceil((totalRefri) / 2000)} garrafas de 2 litros de refrigerante.</p> </strong>`
    resultado.innerHTML += `<center> <p>BOA FESTA!</p> </center>`
});

function carnePorHora(duracao) {
    if (duracao >= horas) {
        return 120 * (duracao - horas) + 150 * horas;
    }
    else {
        return 150 * duracao;
    }
}

function cervejaPorHora(duracao) {
    if (duracao >= horas) {
        return ((450 * (duracao - horas)) + 600 * horas);
    }
    else {
        return 600 * duracao;
    }
}

function refriPorHora(duracao) {
    if (duracao >= horas) {
        return ((250 * (duracao - horas)) + 400 * horas);
    }
    else {
        return 400 * duracao;
    }
}


