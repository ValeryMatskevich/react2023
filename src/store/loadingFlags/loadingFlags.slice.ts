/* eslint-disable no-param-reassign */
import { createSlice } from '@reduxjs/toolkit';

const loadingFlagsSlice = createSlice({
  name: 'loadingFlags',
  initialState: {
    pokemonListLoading: false,
    pokemonDetailsLoading: false,
  },
  reducers: {
    setPokemonListLoading: (state, { payload: pokemonList }) => {
      state.pokemonListLoading = pokemonList;
    },
    setPokemonDetailsLoading: (state, { payload: pokemonDetails }) => {
      state.pokemonDetailsLoading = pokemonDetails;
    },
  },
});

export const { actions, reducer } = loadingFlagsSlice;
