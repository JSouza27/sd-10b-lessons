import React, { Component } from 'react'

import SelectEstados from './SelectEstados';

class FormDados extends Component {
  render() {
    const { handleChange } = this.props;
    return (
      <section>
        <label htmlFor="cpf">
          CPF
          <input
            name='cpf'
            type='text'
            maxLength='11'
            onChange={ handleChange }
            required
          />
        </label>
        <label htmlFor="address">
          Endereço
          <input
            name='address'
            type='text'
            maxLength='200'
            onChange={ handleChange }
            required
          />
        </label>
        <label htmlFor="city">
          Cidade
          <input
            name='city'
            type='text'
            maxLength='28'
            onChange={ handleChange }
            required
          />
        </label>
        <label htmlFor="state">
          Estado
          <SelectEstados handleChange={ handleChange } />
        </label>
      </section>
    )
  }
}

export default FormDados
