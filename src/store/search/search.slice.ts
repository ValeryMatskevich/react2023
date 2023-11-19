/* eslint-disable no-param-reassign */
import { createSlice } from '@reduxjs/toolkit';

const searchSlice = createSlice({
  name: 'search',
  initialState: {
    searchValue: localStorage.getItem('pokemonName') || '',
  },
  reducers: {
    setSearchValue: (state, { payload: searchValue }) => {
      state.searchValue = searchValue;
      localStorage.setItem('pokemonName', searchValue);
    },
  },
});

export const { actions, reducer } = searchSlice;
