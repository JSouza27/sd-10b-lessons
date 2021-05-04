import React, { Component } from 'react';
import Input from './Input';

class ProfessionalForm extends Component {
  render() {
    const { handleChange, currentState } = this.props;
    const { resumoCurriculo, cargo, descricaoCargo } = currentState;
    return(
      <section>
        <div>
          <label>Resumo do currículo </label>
          <textarea
            name="resumoCurriculo"
            maxLength="1000"
            required
            onChange={handleChange}
            value={resumoCurriculo}
          />
        </div>
        <div>
          <label>Cargo</label>
          <textarea
            name="cargo"
            maxLength="40"
            required
            onChange={handleChange}
            value={cargo}
          />
        </div>
        <div>
          <label>Descrição do Cargo</label>
          <Input
            type="descricaoCargo"
            name="descricaoCargo"
            maxLenght="500"
            required
            handleChange={handleChange}
            value={descricaoCargo}
           />
        </div>
      </section>
    );
  }
}

export default ProfessionalForm;
