export function fetchPokemonDetails(url) {
  return fetch(url).then((response) => {
    return response.json();
  });
}

export function fetchPokemon() {
  return fetch("https://pokeapi.co/api/v2/pokemon?limit=100&offset=200").then(
    (response) => {
      return response.json();
    }
  );
}
