/* eslint-disable react/jsx-no-constructed-context-values */
import { fireEvent, render, screen, waitFor } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import { expect } from 'vitest';
import PokemonCard from './PokemonCard';
import PokemonsContext from '../../context/PokemonsContext';
import PokemonsList from '../PokemonsList/PokemonsList';

describe('PokemonCard', () => {
  it('renders the relevant card data', async () => {
    const mockData = { name: 'Pikachu', img: 'url' };

    render(
      <MemoryRouter>
        <PokemonCard name={mockData.name} img={mockData.img} />
      </MemoryRouter>
    );

    const name = screen.getByText(mockData.name);
    expect(name).toBeInTheDocument();

    const img = screen.getByAltText(mockData.name);
    expect(img).toHaveAttribute('src', mockData.img);
  });

  it('clicking on a card opens a detailed card component', async () => {
    const mockData = {
      setInputValue: () => {},
      inputValue: '',
      setPokemonsData: () => {},
      pokemonsData: [
        {
          id: 1,
          weight: '1',
          height: '1',
          name: 'pikachu',
          sprites: {
            front_default: 'url',
            other: { dream_world: { front_default: 'url' } },
          },
        },
        {
          id: 2,
          weight: '2',
          height: '2',
          name: 'bulbasaur',
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

    await waitFor(() => {
      const pokemonCard = screen.getAllByTestId('link');

      fireEvent.click(pokemonCard[0]);
      expect(screen.findByTestId('details')).toBeInTheDocument();
    });
  });
});
