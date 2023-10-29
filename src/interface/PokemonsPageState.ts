import { PokemonData } from './PokemonData';

export interface PokemonsPageState {
  pokemonData: PokemonData[];
  isLoading: boolean;
}
