import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { HYDRATE } from 'next-redux-wrapper';

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
  extractRehydrationInfo(action, { reducerPath }) {
    if (action.type === HYDRATE) {
      return action.payload[reducerPath];
    }
    return undefined;
  },
  endpoints: (build) => ({
    pokemonList: build.query<
      PokemonListResponse,
      { limit: string; offset: string; page: string }
    >({
      query({ limit = 10, offset = 30, page = 1 }) {
        return {
          url: 'pokemon',
          params: {
            limit,
            offset,
            page,
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

export const {
  reducer,
  usePokemonListQuery,
  usePokemonDetailsQuery,
  util: { getRunningQueriesThunk },
} = api;

export const { pokemonList, pokemonDetails } = api.endpoints;

export default api;
