import React, { Component } from 'react';

class Pokemon extends Component {
  render() {
    const { pokemons: { image, name, type, averageWeight: { value, measurementUnit } } } = this.props;
    return (
      <section className="card-container">
        <div className="img-container">
          <img className="pokemen-img" src={ image } alt={ name } />
        </div>
        <h3 className="title">{ name }</h3>
        <span className="type">{ type }</span>
        <div className="averageWeight">
          <span>{ value }</span>
          <span>{ measurementUnit }</span>
        </div>
      </section>
    );
  }
}

export default Pokemon;
