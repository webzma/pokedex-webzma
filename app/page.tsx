import { PokeSearcher } from "./components/PokeSearcher";
import { Title } from "./components/Title/Title";
import { AlphabetFilter } from "./components/AlphabetFilter";
import { ButtonFilter } from "./components/ButtonFilter";
import { PokeCard } from "./components/PokeCard";
import { fetchAllPokemons } from "@/lib/api/pokedex";
import { Pokemon } from "@/lib/types/types";

export default async function Home() {
  const pokemons = await fetchAllPokemons();

  return (
    <div>
      <div className="max-w-[1416px] m-auto mt-12 px-4">
        <Title />
        <PokeSearcher />

        <div className="flex items-center justify-between mt-8">
          <AlphabetFilter />
          <ButtonFilter />
        </div>

        <div className="grid xl:grid-cols-4 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-6  gap-y-28 rounded-lg mt-24 justify-items-center">
          {pokemons.results.map((poke: Pokemon, index: number) => (
            <PokeCard pokeUrl={poke.url} key={index} number={index} />
          ))}
        </div>
      </div>
    </div>
  );
}
