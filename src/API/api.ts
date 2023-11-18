import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export interface Pokemon {
  name: string;
  url: string;
}

interface PokemonListResponse {
  count: number;
  next: string;
  previous: string;
  results: Pokemon[];
}

interface Details {
  name: string;
  id: number;
  sprites: {
    front_default: string;
    other: {
      dream_world: {
        front_default: string;
      };
    };
  };
  weight: string;
  height: string;
}

const api = createApi({
  baseQuery: fetchBaseQuery({
    baseUrl: 'https://pokeapi.co/api/v2/',
  }),
  endpoints: (build) => ({
    pokemonList: build.query<
      PokemonListResponse,
      { limit: number; page: number }
    >({
      query({ limit, page }) {
        const offset = (page - 1) * limit;
        return {
          url: 'pokemon',
          params: {
            limit,
            offset,
          },
          method: 'GET',
        };
      },
    }),
    pokemonDetails: build.query<Details, string>({
      query: (name: string) => `pokemon/${name}`,
    }),
  }),
});

export const { reducer, usePokemonListQuery, usePokemonDetailsQuery } = api;

export default api;
