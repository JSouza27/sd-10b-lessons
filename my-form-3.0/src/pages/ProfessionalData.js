import React, { Component } from 'react'

class ProfessionalData extends Component {
  render() {
    return (
      <section>
        <h1>Fale um pouco da sua vida profissional</h1>
        <label htmlFor="resumeSummary">
          Resumo do currículo
          <textarea
            name="resumeSummary"
            maxLength="1000"
            required
          />
        </label>
        <label htmlFor="responsibility">
          Cargo
          <textarea
            name="responsibility"
            maxLength="40"
            required
          />
        </label>
        <label htmlFor="JobDescription">
          Descrição do cargo
          <textarea
            name="JobDescription"
            maxLength="500"
            required
          />
        </label>
        <button
          type='button'
          onClick={ () =>  this.props.history.push("/confirmationscreen")}
        >
          Avançar
        </button>
      </section>
    )
  }
}

export default ProfessionalData
