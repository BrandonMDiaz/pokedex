import { PokemonService } from 'src/app/services/pokemon/pokemon.service';

export const pokemonServiceMock = ['getPokemons', 'addPokemon', 'delete'];

export const pokemonServiceMock2 = jasmine.createSpyObj<PokemonService>(
  'PokemonService',
  {
    getPokemons: undefined,
    addPokemon: undefined,
    delete: undefined,
  }
);
