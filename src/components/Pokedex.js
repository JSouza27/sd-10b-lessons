import React, { Component } from 'react';
import Pokemon from './Pokemon';

class Pokedex extends Component {
  render() {
    const { pokemons } = this.props;
    return (
      <main className="card-list">
        {
          pokemons.map((pokemon) => (
            <Pokemon key={ pokemon.id } pokemons={ pokemon } />
          ))
        }
      </main>
    );
  }
}

export default Pokedex;
