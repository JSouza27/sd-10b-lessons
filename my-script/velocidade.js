const readline = require('readline-sync');


function velocidadeMedia() {
  let distancia = readline.questionInt('Qual a distância? (em metros) ');
  let tempo = readline.questionInt('Quanto tempo levou para percorrer essa distância? (em minutos) ');
  
  const velMedia = (distancia / (tempo * 60)).toFixed(2);

  console.log(`A velocidade média é ${ velMedia } m/s`);
}

module.exports = velocidadeMedia;
