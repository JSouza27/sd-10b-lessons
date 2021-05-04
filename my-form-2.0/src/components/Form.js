import React, { Component } from 'react';
import PersonalForm from './PersonalForm';
import ProfessionalForm from './ProfessinalForm';

class Form extends Component {
  render() {
    const { handleChange, currentState } = this.props;
    return(
      <form>
        <PersonalForm
          handleChange={handleChange}
          currentState={currentState}
         />
         <ProfessionalForm
          handleChange={handleChange}
          currentState={currentState}
          />
      </form>
    );
  }
}

export default Form;