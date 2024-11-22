export async function fetchPokemonData(pokeUrl: string) {
  const response = await fetch(pokeUrl);
  if (!response.ok) {
    throw new Error("Failed to fetch Pokemon data");
  }

  const data = await response.json();
  return data;
}

export async function fetchAllPokemons(offset = 0, limit = 100) {
  const response = await fetch(
    `https://pokeapi.co/api/v2/pokemon?offset=${offset}&limit=${limit}`
  );

  if (!response.ok) {
    throw new Error("Failed to fetch Pokemons");
  }

  const data = await response.json();

  return data;
}
