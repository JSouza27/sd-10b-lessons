import React, { Component } from 'react'
import Cities from '../components/Cities';

class PersonalData extends Component {
  render() {
    return (
      <section>
        <label htmlFor="cpf">
          CPF
          <input
            name="cpf"
            type="text"
            maxLength="11"
            onChange={ () => {} }
            required
          />
        </label>
        <label htmlFor="address">
          Endereço
          <input
            name="address"
            type="text"
            maxLength="200"
            onChange={ () => {} }
            required
          />
        </label>
        <label htmlFor="city">
          Cidade
          <input
            name="city"
            type="text"
            maxLength="28"
            onChange={ () => {} }
            required
          />
        </label>
        <Cities/>
        <label htmlFor="home">
          Casa
          <input
            name="home"
            type="radio"
            value="casa"
            onChange={ () => {} }
            required
          />
          Apartamento
          <input
            name="home"
            type="radio"
            value="apartamento"
            onChange={ () => {} }
            required
          />
        </label>
        <button
          type='button'
          onClick={ () =>  this.props.history.push("/professionaldata")}
        >
          Avançar
        </button>
      </section>
    )
  }
}

export default PersonalData
