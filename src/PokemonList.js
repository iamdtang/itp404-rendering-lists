import { useState, useEffect } from "react";

export default function PokemonList() {
  const [pokemon, setPokemon] = useState([]);

  useEffect(() => {
    fetch("https://pokeapi.co/api/v2/pokemon?limit=100&offset=200")
      .then((response) => {
        return response.json();
      })
      .then((json) => {
        setPokemon(json.results);
      });
  }, []);

  return (
    <ul>
      {pokemon.map((pokemon) => {
        return <li key={pokemon.name}>{pokemon.name}</li>;
      })}
    </ul>
  );
}
