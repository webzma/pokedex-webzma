import { Pokemon } from "../types/types";

export function sortPokemonsAZ(pokemons: Pokemon[]): Pokemon[] {
  return pokemons.toSorted((a, b) => a.name.localeCompare(b.name));
}
