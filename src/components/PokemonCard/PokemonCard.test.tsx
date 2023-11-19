/* eslint-disable react/jsx-no-constructed-context-values */
import { fireEvent, render, screen, waitFor } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import { expect } from 'vitest';
import PokemonCard from './PokemonCard';
import PokemonsList from '../PokemonsList/PokemonsList';

describe('PokemonCard', () => {
  it.skip('renders the relevant card data', async () => {
    const mockData = { name: 'Pikachu', img: 'url' };

    render(
      <MemoryRouter>
        <PokemonCard name={mockData.name} />
      </MemoryRouter>
    );

    const name = screen.getByText(mockData.name);
    expect(name).toBeInTheDocument();

    const img = screen.getByAltText(mockData.name);
    expect(img).toHaveAttribute('src', mockData.img);
  });

  it.skip('clicking on a card opens a detailed card component', async () => {
    render(
      <MemoryRouter>
        <PokemonsList />
      </MemoryRouter>
    );

    await waitFor(() => {
      const pokemonCard = screen.getAllByTestId('link');

      fireEvent.click(pokemonCard[0]);
      expect(screen.findByTestId('details')).toBeInTheDocument();
    });
  });
});
