const resultado = document.querySelector('#resultado');
const altura = document.querySelector('#altura');
const peso = document.querySelector('#peso');

const calcIMC = () => {
    const alturaEmMetros = parseFloat(altura.value.replace(',', '.'));
    const pesoEmKg = parseFloat(peso.value.replace(',', '.'));

    if (isNaN(alturaEmMetros) || isNaN(pesoEmKg) || alturaEmMetros <= 0 || pesoEmKg <= 0) {
        resultado.innerHTML = 'Digite valores válidos.';
        return;
    }

    const imc = (pesoEmKg / (alturaEmMetros * alturaEmMetros)).toFixed(2);
    let classification = '';

    if (imc < 18.5) {
        classification = 'Abaixo do peso';
    } else if (imc < 25) {
        classification = 'Peso normal';
    } else if (imc < 30) {
        classification = 'Sobrepeso';
    } else if (imc < 35) {
        classification = 'Obesidade Grau I';
    } else if (imc < 40) {
        classification = 'Obesidade Grau II';
    } else {
        classification = 'Obesidade Grau III (mórbida)';
    }

    resultado.innerHTML = `IMC: ${imc} (${classification})`;
};