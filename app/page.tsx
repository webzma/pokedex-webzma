"use client";

import { PokeSearcher } from "./components/PokeSearcher";
import { Title } from "./components/Title/Title";
import { AlphabetFilter } from "./components/AlphabetFilter";
import { ButtonFilter } from "./components/ButtonFilter";
import { PokeCard } from "./components/PokeCard";
import { fetchAllPokemons } from "@/lib/api/pokedex";
import { Pokemon } from "@/lib/types/types";
import { useEffect, useState } from "react";
import { sortPokemonsAZ } from "@/lib/utils/sortPokemonsAZ";
import { sortPokemonsZA } from "@/lib/utils/sortPokemonZA";
import { sortPokemonsHighest } from "@/lib/utils/sortPokemonsHighest";
import { AlphabetFilterType } from "@/lib/types/types";

export default function Home() {
  const [pokemons, setPokemons] = useState<Pokemon[]>([]);
  const [alphabetFilter, setAlphabetFilter] = useState<AlphabetFilterType>();

  console.log(pokemons);

  useEffect(() => {
    const fetchData = async () => {
      const fetchPokemons = await fetchAllPokemons();
      setPokemons(fetchPokemons.results);
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
  return (
    <div>
      <div className="max-w-[1416px] m-auto mt-12 px-4">
        <Title />
        <PokeSearcher />

        <div className="flex mt-8 flex-col items-start justify-start gap-y-3 md:flex-row md:justify-between md:items-center">
          <AlphabetFilter setAlphabetFilter={setAlphabetFilter} />
          <ButtonFilter />
        </div>

        <div className="grid xl:grid-cols-4 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-6  gap-y-28 rounded-lg mt-24 justify-items-center">
          {filteredPokemons.map((poke: Pokemon, index: number) => (
            <PokeCard pokeUrl={poke.url} key={index} number={index} />
          ))}
        </div>
      </div>
    </div>
  );
}
