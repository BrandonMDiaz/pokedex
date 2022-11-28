export interface PokemonPagination{
  name: string;
  url: string;
}

export interface Pokemon {
  id: number;
  name: string;
  weight: number;
  experience: number
  height: number;
  sprites: {
    front_default: string
  }
  types: Types[]
}

interface Types {
  type: {
    name: string;
  };
}

