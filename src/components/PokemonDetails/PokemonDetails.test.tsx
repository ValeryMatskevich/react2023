import { fireEvent, render, screen, waitFor } from '@testing-library/react';
import { Provider } from 'react-redux';
import { expect } from 'vitest';
import { MemoryRouter } from 'react-router-dom';
import PokemonDetails from './PokemonDetails';
import store from '../../store/store';
import server from '../../server/server';

describe('PokemonDetails', () => {
  beforeEach(() => server.listen());
  test.skip('displays detailed card data correctly', async () => {
    render(
      <Provider store={store}>
        <MemoryRouter>
          <PokemonDetails name="pikachu" />
        </MemoryRouter>
      </Provider>
    );

    const name = await screen.findByText('pikachu');
    const height = await screen.findByText('Height: 4');
    const weight = await screen.findByText('Weight: 60');
    const image = await screen.findByAltText('pikachu');
    await waitFor(async () => {
      expect(name).toBeInTheDocument();
      expect(height).toBeInTheDocument();
      expect(weight).toBeInTheDocument();
      expect(image).toBeInTheDocument();
    });
  });

  test.skip('hides the component when close button is clicked', async () => {
    render(
      <Provider store={store}>
        <MemoryRouter>
          <PokemonDetails name="pikachu" />
        </MemoryRouter>
      </Provider>
    );

    const closeButton = await screen.findByTestId('close');
    fireEvent.click(closeButton);

    await waitFor(async () => {
      expect(screen.queryByTestId('details')).not.toBeInTheDocument();
    });
  });

  test('displays loading indicator while fetching data', async () => {
    render(
      <Provider store={store}>
        <MemoryRouter>
          <PokemonDetails name="pikachu" />
        </MemoryRouter>
      </Provider>
    );

    expect(screen.getByTestId('loader')).toBeInTheDocument();
  });
});
