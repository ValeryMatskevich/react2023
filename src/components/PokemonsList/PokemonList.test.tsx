import { render, screen, waitFor } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import { expect } from 'vitest';
import PokemonsList from './PokemonsList';
import store from '../../store/store';

describe('Pokemon List', () => {
  test('Component renders the specified number of cards', async () => {
    render(
      <Provider store={store}>
        <MemoryRouter>
          <PokemonsList />
        </MemoryRouter>
      </Provider>
    );
    const cards = await screen.findAllByTestId('pokemon-card');
    expect(cards).toHaveLength(2);
  });

  test.skip('Check that an appropriate message is displayed if no cards are present', async () => {
    const response = await fetch('https://pokeapi.co/api/v2/pokemon/qwer');

    render(
      <Provider store={store}>
        <MemoryRouter>
          <PokemonsList />
        </MemoryRouter>
      </Provider>
    );

    await waitFor(() => expect(response.status).toBe(404));
  });
});
