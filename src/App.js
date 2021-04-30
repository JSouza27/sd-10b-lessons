import './App.css';
import Pokedex from './components/Pokedex'
import Data from './data';

function App() {
  return (
    <section className="App">
      <Pokedex pokemons={ Data }/>
    </section>
  );
}

export default App;
