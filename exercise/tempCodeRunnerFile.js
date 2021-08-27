function checkNumber(n){
  try {
    if(typeof(n) === 'number') {
      if(n > 0) return 'positivo';
      if(n < 0) return 'negativo';
      if(n === 0) return 'neutro';
    }
  } catch (err) {
      console.log('o valor deve ser um número', err.message);
  }

  
};
checkNumber('2');