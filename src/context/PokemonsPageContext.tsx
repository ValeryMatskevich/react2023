import { createContext } from 'react';

const PokemonsPageContext = createContext({
  pokemonsData: [{}],
  handleSubmit: (pokemonName: string) => {
    console.log('pokemonName: ', pokemonName);
  },
  page: 1,
  setPage: (value: number) => {
    console.log('value: ', value);
  },
  limit: 10,
  totalPages: 1,
  handleClose: () => {},
});

export default PokemonsPageContext;
