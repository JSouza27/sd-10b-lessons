function calcularDivision(num1, num2) {
  if (num2 === 0) throw new Error('Não pode ser feito uma divisão por zero');

  const resultado = num1 / num2;

  return resultado;
}

try {
  const resultado = calcularDivision(2, 0);
} catch (e) {
  console.log('erro: %s', e.message);
}
