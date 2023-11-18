/* eslint-disable no-param-reassign */
import { createSlice } from '@reduxjs/toolkit';

const loadingFlagsSlice = createSlice({
  name: 'loadingFlags',
  initialState: {
    pokemonList: false,
    pokemonDetails: false,
  },
  reducers: {
    setPokemonListLoading: (state, { payload: pokemonList }) => {
      state.pokemonList = pokemonList;
    },
    setPokemonDetailsLoading: (state, { payload: pokemonDetails }) => {
      state.pokemonDetails = pokemonDetails;
    },
  },
});

export const { actions, reducer } = loadingFlagsSlice;
