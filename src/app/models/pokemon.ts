export interface PokemonPagination {
  name: string;
  url: string;
}

export interface Pokemon {
  id: number;
  name: string;
}
export interface PokemonDetails extends Pokemon {
  weight: number;
  experience: number;
  height: number;
  sprites: {
    front_default: string;
  };
  types: Types[];
}

interface Types {
  type: {
    name: string;
  };
}

export interface ApiPokemonResponse extends Response {
  pokemons: { name: string; id: number }[];
}
