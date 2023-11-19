import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export interface Pokemon {
  name: string;
  url: string;
}

export interface PokemonListResponse {
  count: number;
  next: string;
  previous: string;
  results: Pokemon[];
}

export interface Details {
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
      { limit: number; offset: number }
    >({
      query(params) {
        return {
          url: 'pokemon',
          params,
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
