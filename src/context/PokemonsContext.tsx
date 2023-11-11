import { createContext, Dispatch, SetStateAction } from 'react';
import { Details } from '../API/GetPokemons';

interface PokemonsContextProps {
  inputValue: string;
  setInputValue: Dispatch<SetStateAction<string>>;
  pokemonsData: Details[];
  setPokemonsData: Dispatch<SetStateAction<Details[]>>;
}

const PokemonsContext = createContext<PokemonsContextProps>({
  inputValue: '',
  setInputValue: () => {},
  pokemonsData: [],
  setPokemonsData: () => {},
});

export default PokemonsContext;
