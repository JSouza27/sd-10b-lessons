import React, { Component } from 'react'
import ButtonHome from '../components/ButtonHome';

class Identification extends Component {
  render() {
    return (
      <section>
        <label htmlFor="name">
          Nome
          <input
            name="name"
            type="text"
            maxLength="40"
            onChange={() => {}}
            required
          />
        </label>
        <label htmlFor="email">
          Email
          <input
            name="email"
            type="text"
            maxLength="50"
            onChange={() => {}}
            required
          />
        </label>
        <div>
          <ButtonHome />
          <button
            type='button'
            onClick={ () =>  this.props.history.push("/personaldata")}
          >
            Avançar
          </button>
        </div>
      </section>
    )
  }
}

export default  Identification
