import Image from "next/image";
import { cn } from "@/lib/utils/utils";
import firstLetterToMayus from "@/lib/utils/firstLetterToMayus";
import formatNumber from "@/lib/utils/formatNumber";
import { fetchPokemonData } from "@/lib/api/pokedex";
import { PokeCardProps } from "@/lib/types/types";
import { PokeTypes } from "@/lib/types/types";
import { PokeTag } from "../PokeTag";

export const PokeCard: React.FC<PokeCardProps> = async ({
  pokeUrl,
  number,
}: PokeCardProps) => {
  const pokemon = await fetchPokemonData(pokeUrl);

  function selectBg(type: string) {
    switch (type) {
      case "grass":
        return "bg-cardBg-grass";
      case "fire":
        return "bg-cardBg-fire";
      case "bug":
        return "bg-cardBg-bug";
      case "water":
        return "bg-cardBg-water";
      case "poison":
        return "bg-cardBg-poison";
      case "rock":
        return "bg-cardBg-rock";
      case "ground":
        return "bg-cardBg-ground";
      case "dragon":
        return "bg-cardBg-dragon";
      case "ice":
        return "bg-cardBg-ice";
      case "dark":
        return "bg-cardBg-dark";
      case "ghost":
        return "bg-cardBg-ghost";
      case "fairy":
        return "bg-cardBg-fairy";
      case "fighting":
        return "bg-cardBg-fighting";
      case "psychic":
        return "bg-cardBg-psychic";
      case "electric":
        return "bg-cardBg-electric";
      case "steel":
        return "bg-cardBg-steel";
      case "normal":
        return "bg-cardBg-normal";
    }
  }

  const backgroundColor = pokemon.types[0].type.name;

  return (
    <article
      className={cn(
        "flex justify-end p-6 flex-col h-[260px] w-full rounded-2xl relative max-w-[340px]",
        selectBg(backgroundColor)
      )}
    >
      <Image
        src="Subtract.svg"
        alt="Poke SVG"
        width="100"
        height="100"
        className="absolute bottom-0 left-0 translate-y-8 -translate-x-4"
      />

      <Image
        src="circle.svg"
        alt="Poke SVG"
        width="50"
        height="50"
        className="absolute bottom-0 left-0 translate-y-7 -translate-x-4"
      />

      <div className="flex justify-self-center mx-auto">
        <Image
          src={pokemon.sprites.other.dream_world.front_default}
          alt="Image of pokemon"
          width="130"
          height="130"
          className="absolute top-0 -translate-x-[4.5rem] -translate-y-9 size-[130px]"
          loading="lazy"
        />
      </div>

      <div>
        <h3 className="font-bold text-3xl text-white mb-2">
          {firstLetterToMayus(pokemon.name)}
        </h3>
        <p className="text-white font-bold text-xl mb-4">
          {formatNumber(number)}
        </p>
      </div>

      <div className="flex gap-2">
        {pokemon.types.map((elem: PokeTypes, index: number) => (
          <PokeTag type={elem.type.name} key={index} />
        ))}
      </div>
    </article>
  );
};
