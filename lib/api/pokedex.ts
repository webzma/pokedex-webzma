export async function fetchPokemonData(pokeUrl: string) {
  const response = await fetch(pokeUrl);
  if (!response.ok) {
    throw new Error("Failed to fetch Pokemon data");
  }
  return response.json();
}

export async function fetchAllPokemons(offset = 0, limit = 400) {
  const response = await fetch(
    `https://pokeapi.co/api/v2/pokemon?offset=${offset}&limit=${limit}`
  );
  if (!response.ok) {
    throw new Error("Failed to fetch Pokemons");
  }
  return response.json();
}