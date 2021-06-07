import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';
import FormDados from './FormDados';
import FormNome from './FormNome';
import sendData from '../actions';
import { connect } from 'react-redux';

class FormHome extends Component {
  constructor() {
    super();
    this.state = {
      name: '',
      email: '',
      cpf: '',
      address: '',
      city: '',
      state: '',
    }
  }

  convertToUpperCase =(value) => {
    if (typeof(value ) === 'string') {
      return value.toUpperCase();
    }
    return value
  }
  
  handleChange = ({ target: { name, value }}) => {
    const srt = this.convertToUpperCase(value);
    this.setState({
      [name]: srt,
    });
  }
  
  render() {
    const { sendData } = this.props;
    return (
      <section>
        <h1>Bem Vindo ao My Form 3.0!</h1>
        {/* <FormNome handleChange={ this.handleChange } />
        <FormDados handleChange={ this.handleChange } /> */}
        {/* <button
          type='button'
          onClick={
            () => {
              <Redirect to="/confirmacao" />
            }
          }
        >
          Enviar
        </button> */}
      </section>
    )
  }
}

const mapDispatchToProps = (dispatch) => ({
  sendData: (state) => dispatch(sendData(state))
});

export default connect(null, mapDispatchToProps)(FormHome);
