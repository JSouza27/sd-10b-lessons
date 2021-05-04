import React, { Component } from 'react';
import './App.css';
import Form from './components/Form';


class App extends Component {
  constructor(props) {
    super(props)

    this.handleChange=this.handleChange.bind(this);

    this.state = {
      nome: '',
      email: '',
      cpf: '',
      endereco: '',
      cidade: '',
      estado: '',
      moradia: '',
      resumoCurriculo:'',
      cargo: '',
      descricaoCargo: '',
    };
  }

  handleChange({ target: { name, value } }) {
    if (name === 'moradia') value = 
    this.setState({
      [name]: value,
    });
  }

  render() {
    return (
      <main className="App">
        <Form
          handleChange={this.handleChange}
          currentState={this.state}
         />
      </main>
    );
  }
}

export default App;
// Exercício feito com a ajuda do gabarito
