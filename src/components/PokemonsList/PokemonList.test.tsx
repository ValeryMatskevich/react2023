import { act, cleanup, render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import { HttpResponse, http } from 'msw';
import { expect } from 'vitest';
import PokemonsList from './PokemonsList';
import store from '../../store/store';
import server from '../../server/server';
import mockData from '../../server/mockData';

// let url = 'https://pokeapi.co/api/v2/pokemon';

// vi.mock('../../API/api.ts', async () => {
//   const actual =
//     await vi.importActual<typeof import('../../API/api.ts')>(
//       '../../API/api.ts'
//     );
//   return {
//     ...actual,
//     makeFetchRequest: vi.fn(async () => {
//       const request = await fetch(url);
//       const response = await request.json();
//       return response;
//     }),
//   };
// });

const renderPage = async (): Promise<void> => {
  await act(async () => {
    render(
      <Provider store={store}>
        <MemoryRouter>
          <PokemonsList />
        </MemoryRouter>
      </Provider>
    );
  });
};

describe('ТЕСТОВЫ ПРИМЕР', () => {
  afterEach(() => {
    cleanup();
  });

  test('Component renders the specified number of cards', async () => {
    server.use(
      http.get('https://pokeapi.co/api/v2/pokemon', async () => {
        console.log(HttpResponse.json(mockData.listLimit10Offset0));
        return HttpResponse.json(mockData.listLimit10Offset0);
      })
    );
    await renderPage();
    const cards = await screen.findAllByTestId('pokemon-card');
    expect(cards).toHaveLength(10);
  });
});
