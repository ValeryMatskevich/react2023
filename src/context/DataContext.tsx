import { createContext, Dispatch, SetStateAction } from 'react';
import { Details } from '../API/GetPokemons';

interface DataContextProps {
  pokemonsData: Details[];
  setPokemonsData: Dispatch<SetStateAction<Details[]>>;
}

const PokemonsPageContext = createContext<DataContextProps>({
  pokemonsData: [],
  setPokemonsData: () => {},
});

export default PokemonsPageContext;
