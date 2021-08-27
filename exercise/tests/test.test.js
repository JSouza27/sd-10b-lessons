const { expect } = require('chai');
const fs = require('fs');
const sinon = require('sinon');

const checkNumber = require('../checkNumber');
const writeContents = require('../writeContents');

describe('teste dos exercicio', () => {
  describe('exercicios 1 ao 3', () => {
    describe('testanto a função', () => {
      const resultPositive = checkNumber(2);
      const resultNegative = checkNumber(-1);
      const resultNeutral = checkNumber(0);
  
      it('é uma string', () => {
        expect(resultPositive).to.be.a('string');
      });
  
      it('retorna positivo', () => {
        expect(resultPositive).to.be.equal('positivo');
      });
  
      it('retorna negativo', () => {
        expect(resultNegative).to.be.equal('negativo');
      });
  
      it('retorna neutro', () => {
        expect(resultNeutral).to.be.equal('neutro');
      });
    });
  
    describe('quando não for um numero', () => {
      const error = 'o valor deve ser um número'
      const str = checkNumber('2');
    
      it('se não for do tipo "number"', () => {
        expect(str).to.be.equal(error);
      });
    });
  });

  describe('exercicios 4 e 5', () => {
    describe('executa a função writeFile', () => {
      const result = writeContents('arquivo.txt', 'conteúdo');

      before(() => {
        sinon.stub(fs, 'writeFileSync');
      });

      after(() => {
        fs.writeFileSync.restore();
      });

      it('verificando o retorno da função', () => {
        expect(result).to.be.a('string');
      })

      it('o retorno é "ok"', () => {
        expect(result).to.be.equal('ok');
      })
    });
  });
});
