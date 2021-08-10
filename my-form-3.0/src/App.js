import React, { Component } from 'react'
import { Route, Switch } from 'react-router'

import './App.css';
import Welcome from './pages/ Welcome'
import Identification from './pages/ Identification';
import PersonalData from './pages/PersonalData';
import ProfessionalData from './pages/ProfessionalData';
import ConfirmationScreen from './pages/ ConfirmationScreen';
import RegistrationConfirmed from './pages/RegistrationConfirmed';

class App extends Component {
  render() {
    return (
      <Switch>
        <Route exact path="/" component={ Welcome } />
        <Route path="/identification" component={ Identification } />
        <Route path="/personaldata" component={ PersonalData } />
        <Route path="/professionaldata" component={ ProfessionalData } />
        <Route path="/confirmationscreen" component={ ConfirmationScreen } />
        <Route path="/registrationconfirmed" component={ RegistrationConfirmed } />
      </Switch>
    )
  }
}

export default App

