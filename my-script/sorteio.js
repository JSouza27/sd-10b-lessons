const readline = require('readline-sync');

function validation(number, userNumber) {
  if (number === userNumber) {
    console.log('Parabéns, número correto!');
  }

  console.log(`Opa, não foi dessa vez. O número era ${ number }`);
}

function raffle() {
  let number = parseInt(Math.random() * (10 - 1), 10);
  
  const userInput = readline.questionInt('Digite um número  de 0 a 10: ');

  validation(number, userInput);

  const gameAgain = readline.question('Deseja jogar novamente, sim ou não? ');

  if (gameAgain === 'sim') raffle();
  
  console.log('OK! Até a próxima.');
}

module.exports = raffle;
