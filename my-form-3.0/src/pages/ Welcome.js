import React, { Component } from 'react'

class  Welcome extends Component {
  render() {
    return (
      <section>
        <h1>Bem Vindo ao My Form 3.0!</h1>
        <p>Vamos começar?</p>
        <p>Clique no botão abaixo</p>
        <button
          type='button'
          onClick={ () =>  this.props.history.push("/identification")}
        >
          Avançar
        </button>
      </section>
    )
  }
}

export default  Welcome;
