import React, { Component } from 'react'
import { connect } from 'react-redux';

class TelaConfirmacao extends Component {
  render() {
    const { infoUser } = this.props;
    return (
      <section>
        <h1>Segue os dados para confirmação</h1>
        {/* <span>{ infoUser.name }</span>
        <span>{ infoUser.email }</span>
        <span>{ infoUser.cpf }</span>
        <span>{ infoUser.address }</span>
        <span>{ infoUser.city }</span>
        <span>{ infoUser.state }</span> */}
      </section>
    )
  }
}

const mapStateToProps = (state) => ({
  infoUser: state.data.infoUser,
});

export default connect(mapStateToProps)(TelaConfirmacao);
