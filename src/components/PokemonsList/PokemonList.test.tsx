/* eslint-disable react/jsx-no-constructed-context-values */
import { render, screen } from '@testing-library/react';
import { expect } from 'vitest';
import { MemoryRouter } from 'react-router-dom';
import PokemonsList from './PokemonsList';
import PokemonsContext from '../../context/PokemonsContext';

// vi.mock('../../API/GetPokemons.ts', () => {
//   const getPokemons = vi.fn(() => {
//     return {
//       pokemonsData: [
//         {
//           name: 'bulbasaur',
//           sprites: {
//             front_female: 'https://pokeapi.co/api/v2/pokemon/1/',
//             other: {
//               dream_world: {
//                 front_default: 'https://pokeapi.co/api/v2/pokemon/1/',
//               },
//             },
//           },
//         },
//         {
//           name: 'bulbasaur',
//           sprites: {
//             front_female: 'https://pokeapi.co/api/v2/pokemon/1/',
//             other: {
//               dream_world: {
//                 front_default: 'https://pokeapi.co/api/v2/pokemon/1/',
//               },
//             },
//           },
//         },
//       ],
//       count: 2,
//     };
//   });
//   return { getPokemons };
// });

describe('PokemonsList', () => {
  test('renders the specified number of cards', async () => {
    const mockData = {
      setInputValue: () => {},
      inputValue: '',
      setPokemonsData: () => {},
      pokemonsData: [
        {
          id: 1,
          weight: '1',
          height: '1',
          name: 'Pikachu',
          sprites: {
            front_default: 'url',
            other: { dream_world: { front_default: 'url' } },
          },
        },
        {
          id: 2,
          weight: '2',
          height: '2',
          name: 'Bulbasaur',
          sprites: {
            front_default: 'url',
            other: { dream_world: { front_default: 'url' } },
          },
        },
      ],
    };

    render(
      <MemoryRouter>
        <PokemonsContext.Provider value={mockData}>
          <PokemonsList />
        </PokemonsContext.Provider>
      </MemoryRouter>
    );

    const cards = await screen.findAllByTestId('pokemon-card');
    expect(cards).toHaveLength(mockData.pokemonsData.length);
  });

  test('Check that an appropriate message is displayed if no cards are present', async () => {
    render(
      <PokemonsContext.Provider
        value={{
          setInputValue: () => {},
          inputValue: '',
          setPokemonsData: () => {},
          pokemonsData: [],
        }}
      >
        <PokemonsList />
      </PokemonsContext.Provider>
    );

    const message = await screen.findByText(
      'The name of the Pokemon was entered incorrectly.'
    );
    expect(message).toBeInTheDocument();
  });
});
