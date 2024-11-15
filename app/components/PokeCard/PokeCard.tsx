"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { cn } from "@/lib/utils/utils";
import firstLetterToMayus from "@/lib/utils/firstLetterToMayus";
import formatNumber from "@/lib/utils/formatNumber";
import { fetchPokemonData } from "@/lib/api/pokedex";
import { PokeCardProps, PokeTypes } from "@/lib/types/types";
import { PokeTag } from "../PokeTag";

export const PokeCard: React.FC<PokeCardProps> = ({ pokeUrl, number }) => {
  const [pokemon, setPokemon] = useState<any>(null);

  useEffect(() => {
    async function getPokemonData() {
      const data = await fetchPokemonData(pokeUrl);
      setPokemon(data);
    }

    getPokemonData();
  }, [pokeUrl]);

  /* Esto podría vivir en un archivo en la carpeta libs/utils */
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
      default:
        return "bg-cardBg-default";
    }
  }

  if (!pokemon) {
    return <div>Loading...</div>;
  }

  const backgroundColor = pokemon.types[0].type.name;

  return (
    <article
      className={cn(
        "flex justify-end p-6 flex-col h-[280px] w-full rounded-2xl relative max-w-[340px]",
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

      <div className="flex gap-y-1 flex-col">
        <h2 className="text-3xl font-bold text-white">
          {firstLetterToMayus(pokemon.name)}
        </h2>

        <p className="text-xl font-bold text-white mb-4 ">
          {formatNumber(number)}
        </p>
      </div>

      <div className="flex gap-2">
        {pokemon.types.map((pokeType: PokeTypes) => (
          <PokeTag key={pokeType.type.name} type={pokeType.type.name} />
        ))}
      </div>
    </article>
  );
};
