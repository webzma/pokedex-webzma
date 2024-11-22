"use client";

import { PokeSearcher } from "./components/PokeSearcher";
import { Title } from "./components/Title/Title";
import { AlphabetFilter } from "./components/AlphabetFilter";
import { ButtonFilter } from "./components/ButtonFilter";
import { PokeCard } from "./components/PokeCard";
import { Pokemon } from "@/lib/types/types";
import { usePokemonData } from "@/lib/hooks/usePokemonData";

export default function Home() {
  const { search } = usePokemonData();
  const { pokemons, setAlphabetFilter, setSearch } = usePokemonData();
  console.log(pokemons, search);

  return (
    <div>
      <div className="max-w-[1416px] m-auto mt-12 px-4">
        <Title />
        <PokeSearcher setSearch={setSearch} />
        <div className="flex mt-8 flex-col items-start justify-start gap-y-3 md:flex-row md:justify-between md:items-center">
          <AlphabetFilter setAlphabetFilter={setAlphabetFilter} />
          <ButtonFilter />
        </div>
        <div className="mb-10 grid xl:grid-cols-4 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-6  gap-y-28 rounded-lg mt-24 justify-items-center">
          {pokemons.map((poke: Pokemon, index: number) => (
            <PokeCard pokeUrl={poke.url} key={index} number={index} />
          ))}
        </div>
      </div>
    </div>
  );
}
