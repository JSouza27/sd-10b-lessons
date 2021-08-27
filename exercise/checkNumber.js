function checkNumber(n){
  try {
    if(typeof(n) === 'number') {
      if(n > 0) {
        return 'positivo';
      }
      else if(n < 0) {
        return 'negativo';
      }
      else {
        return 'neutro';
      }
    }
    throw(new Error('o valor deve ser um número'));
  } catch (err) {
      return err.message;
  }

  
};

module.exports = checkNumber;
