import { Pokemon } from "../types/types";

export function sortPokemonsZA(pokemons: Pokemon[]): Pokemon[] {
  return pokemons.toSorted((a, b) => b.name.localeCompare(a.name));
}
