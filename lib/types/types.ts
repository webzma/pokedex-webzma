export type Pokemon = {
  name: string;
  url: string;
  types: { type: { name: string } }[];
  sprites: {
    other: {
      dream_world: {
        front_default: string;
      };
    };
  };
};

export interface PokeCardProps {
  pokeUrl: string;
  number: number;
}

export interface PokeTypes {
  type: {
    name: string;
    url: string;
  };
}

export interface PokeTagProps {
  type: string;
}

export type AlphabetFilterType = "a-z" | "z-a" | "lowest" | "highest";
