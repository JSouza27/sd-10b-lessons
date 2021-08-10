import React, { Component } from 'react'

class ButtonHome extends Component {
  render() {
    return (
      <button type='button' onClick={ () => this.props.history.push("/")}>
        Volta ao Inicio
      </button>
    )
  }
}

export default ButtonHome
