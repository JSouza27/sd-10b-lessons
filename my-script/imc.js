const readline = require('readline-sync');

function funcIMC() {
  let weight = readline.questionInt('Qual seu peso? (em kg) ');
  let height = readline.questionFloat('Qual sua altura? (em m) ');
  
  function calcImc(weight, height) {
    const imc = (weight / Math.pow(height, 2)).toFixed(2);
  
    console.log(`Seu Peso: ${ weight } kg, e sua altura: ${ height } m`);
    console.log(`Seu IMC: ${ imc }`);
  
    if (imc < 18.5) {
      console.log(`Situação: \n Abaixo do peso (magreza)`);
    }
    else if (imc >= 18.5 && imc <= 24.9) {
      console.log(`Situação: \n Peso normal`);
    }
    else if (imc >= 25 && imc <= 29.9) {
      console.log(`Situação: \n Acima do peso (sobrepeso)`);
    }
    else if (imc >= 30 && imc <= 34.9) {
      console.log(`Situação: \n Obesidade grau I`);
    }
    else if (imc >= 35 && imc <= 39.9) {
      console.log(`Situação: \n Obesidade grau II`);
    }
    else {
      console.log(`Situação: \n Obesidade graus III e IV `);
    }
  
  }

  calcImc(weight, height);
}

module.exports = funcIMC;
