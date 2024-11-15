export type Pokemon = {
  name: string;
  url: string;
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
