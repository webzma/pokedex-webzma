import { Pokemon } from "../types/types";

export function sortPokemonsHighest(pokemons: Pokemon[]): Pokemon[] {
  return pokemons.toReversed();
}
