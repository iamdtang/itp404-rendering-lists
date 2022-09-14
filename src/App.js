import "./App.css";
import { useState, useEffect } from "react";
import { fetchPokemon, fetchPokemonDetails } from "./api";

export default function App() {
  const [pokemon, setPokemon] = useState([]);
  const [pokemonDetails, setPokemonDetails] = useState();

  useEffect(() => {
    fetchPokemon().then((json) => {
      setPokemon(json.results);
    });
  }, []);

  return (
    <div className="App">
      <ul>
        {pokemon.map((pokemon) => {
          return (
            <li key={pokemon.name}>
              {pokemon.name}

              <button
                type="button"
                onClick={() => {
                  fetchPokemonDetails(pokemon.url).then((pokemonDetails) => {
                    setPokemonDetails(pokemonDetails);
                  });
                }}
              >
                View
              </button>
            </li>
          );
        })}
      </ul>

      {pokemonDetails && (
        <div>
          <p>Moves for {pokemonDetails.name}</p>
          <ul>
            {pokemonDetails.moves.map((move) => {
              return <li key={move.move.url}>{move.move.name}</li>;
            })}
          </ul>
        </div>
      )}
    </div>
  );
}
