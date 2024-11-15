import Image from "next/image";
import React from "react";
import firstLetterToMayus from "@/lib/utils/firstLetterToMayus";
import { cn } from "@/lib/utils/utils";
import { PokeTagProps } from "@/lib/types/types";

export const PokeTag: React.FC<PokeTagProps> = ({ type }) => {
  function selectBg(type: string) {
    switch (type) {
      case "grass":
        return "bg-tagBg-grass";
      case "fire":
        return "bg-tagBg-fire";
      case "bug":
        return "bg-tagBg-bug";
      case "water":
        return "bg-tagBg-water";
      case "poison":
        return "bg-tagBg-poison";
      case "rock":
        return "bg-tagBg-rock";
      case "ground":
        return "bg-tagBg-ground";
      case "dragon":
        return "bg-tagBg-dragon";
      case "ice":
        return "bg-tagBg-ice";
      case "dark":
        return "bg-tagBg-dark";
      case "ghost":
        return "bg-tagBg-ghost";
      case "fairy":
        return "bg-tagBg-fairy";
      case "fighting":
        return "bg-tagBg-fighting";
      case "psychic":
        return "bg-tagBg-psychic";
      case "electric":
        return "bg-tagBg-electric";
      case "steel":
        return "bg-tagBg-steel";
      case "normal":
        return "bg-tagBg-normal";
    }
  }

  return (
    <div
      className={cn(
        "px-3 py-2 rounded-3xl font-medium z-10 flex items-center gap-x-2 justify-center",
        selectBg(type),
        type === "flying" &&
          "bg-[linear-gradient(0deg,_#CBE9FF_0%,_#2299EE_100%)]"
      )}
    >
      <Image src={`/${type}.svg`} alt={`icon ${type}`} width={17} height={17} />
      {firstLetterToMayus(type)}
    </div>
  );
};
