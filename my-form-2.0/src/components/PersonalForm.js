import React, { Component } from 'react';
import Input from './Input';
import Cities from './Cities';

class PersonalForm extends Component {
  render() {
    const { handleChange, currentState } = this.props;
    const { nome, email, cpf, endereco, cidade, estado, moradia } = currentState;
    
    return(
      <section>
        <div>
          <label>Nome</label>
          <Input
            type="nome"
            name="nome"
            maxLenght="40"
            required
            handleChange={handleChange}
            value={nome}
           />
        </div>
        <div>
          <label>Email</label>
          <Input
            type="email"
            name="email"
            maxLenght="50"
            required
            handleChange={handleChange}
            value={email}
           />
        </div>
        <div>
          <label>CPF</label>
          <Input
            type="cpf"
            name="cpf"
            maxLenght="11"
            required
            handleChange={handleChange}
            value={cpf}
           />
        </div>
        <div>
          <label>Endereço</label>
          <Input
            type="endereco"
            name="endereco"
            maxLenght="200"
            required
            handleChange={handleChange}
            value={endereco}
           />
        </div>
        <div>
          <label>Cidade</label>
          <Input
            type="cidade"
            name="cidade"
            maxLenght="28"
            required
            handleChange={handleChange}
            value={cidade}
           />
        </div>
        <div>
          <label>Estado</label>
          <Cities
          value={estado}
          required
          handleChange={handleChange}
           />
        </div>
        <div>
          <label>Casa</label>
          <input
            type="radio"
            name="moradia"
            value="casa"
            onChange={handleChange}
            checked={moradia==="casa"}
          />
        </div>
        <div>
          <label>Apartamento</label>
          <input
            type="radio"
            name="moradia"
            value="apartamento"
            onChange={handleChange}
            checked={moradia==="apartamento"}
          />
        </div>
      </section>
    );
  }
}

export default PersonalForm;
