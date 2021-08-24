const readline = require('readline-sync');
const imc = require('./imc');
const velocidade = require('./velocidade');
const sorteio = require('./sorteio');

function getMenu(option) {

  if ( option === 1 ) {
    return imc();
  }
  else if ( option === 2 ) {
    return velocidade();
  }
  else if ( option === 3 ) {
    return sorteio();
  }
  console.log('Opção errada');
}

function menu() {
  let optionMenu = [
    { name: 'Calcular IMC', script: './imc.js' },
    { name: 'Calcular Velocidade Média', script: './velocidade.js' },
    { name: 'Jogar Sorteio', script: './sorteio.js' }
  ];
  
  let options = optionMenu.map((option, index) => `${index + 1} - ${ option.name }\n`);
  
  const userOption = readline.questionInt(`Selecione uma das opções:\n ${ options }`);

  getMenu(userOption)
}

menu();
