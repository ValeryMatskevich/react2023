import { createContext, Dispatch, SetStateAction } from 'react';
import { Details } from '../API/GetPokemons';

interface ContextProps {
  pokemonsData: Details[];
  inputValue: string;
  setPokemonsData: Dispatch<SetStateAction<Details[]>>;
  setInputValue: Dispatch<SetStateAction<string>>;
}

const PokemonsPageContext = createContext<ContextProps>({
  pokemonsData: [],
  inputValue: '',
  setPokemonsData: () => {},
  setInputValue: () => {},
});

export default PokemonsPageContext;
