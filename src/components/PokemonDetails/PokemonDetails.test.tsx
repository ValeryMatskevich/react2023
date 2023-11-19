import { render } from '@testing-library/react';
import { expect } from 'vitest';
import { MemoryRouter } from 'react-router-dom';
import PokemonDetails from './PokemonDetails';

describe('PokemonDetails', () => {
  it.skip('should render the loader when loading', async () => {
    const { getByTestId } = render(
      <MemoryRouter initialEntries={['/pokemon/pikachu']}>
        <PokemonDetails name="bulbasaur" />
      </MemoryRouter>
    );

    expect(getByTestId('loader')).toBeInTheDocument();
  });
});
