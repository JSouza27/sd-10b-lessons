import React, { Component } from 'react'

class FormNome extends Component {
  render() {
    const { handleChange } = this.props;
    return (
      <section>
        <label htmlFor="name">
          Nome
          <input
            type='text'
            name='name'
            maxLength='40'
            onChange={ handleChange }
            required
          />
        </label>
        <label htmlFor="email">
          Email
          <input
            type='email'
            name='email'
            maxLength='50'
            onChange={ handleChange }
            required
          />
        </label>
      </section>
    )
  }
}

export default FormNome;
