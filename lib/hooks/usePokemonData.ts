import { useEffect, useState } from "react";
import { fetchAllPokemons } from "@/lib/api/pokedex";
import { Pokemon, AlphabetFilterType } from "@/lib/types/types";
import { sortPokemonsAZ } from "../utils/sortPokemonsAZ";
import { sortPokemonsZA } from "../utils/sortPokemonZA";
import { sortPokemonsHighest } from "../utils/sortPokemonsHighest";

export function usePokemonData() {
  const [pokemons, setPokemons] = useState<Pokemon[]>([]);
  const [alphabetFilter, setAlphabetFilter] =
    useState<AlphabetFilterType | null>(null);
  const [search, setSearch] = useState<string>("");
  const [isLoading, setIsLoading] = useState<boolean>(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const fetchPokemons = await fetchAllPokemons();
        setPokemons(fetchPokemons.results);
      } catch (error) {
        console.error("Failed to fetch Pokemons", error);
      }
    };

    fetchData();
  }, []);

  let filteredPokemons = pokemons;

  if (alphabetFilter === "a-z") {
    filteredPokemons = sortPokemonsAZ(pokemons);
  }

  if (alphabetFilter === "z-a") {
    filteredPokemons = sortPokemonsZA(pokemons);
  }

  if (alphabetFilter === "lowest") {
    filteredPokemons = pokemons;
  }

  if (alphabetFilter === "highest") {
    filteredPokemons = sortPokemonsHighest(pokemons);
  }

  if (!alphabetFilter) {
    filteredPokemons = pokemons;
  }

  const searchedPokemons = search
    ? filteredPokemons.filter((pokemon) =>
        pokemon.name.toLowerCase().includes(search.toLowerCase())
      )
    : filteredPokemons;

  return {
    pokemons: searchedPokemons,
    setAlphabetFilter,
    search,
    setSearch,
    isLoading,
    setIsLoading,
  };
}
