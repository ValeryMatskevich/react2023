/* eslint-disable no-param-reassign */
import { createSlice } from '@reduxjs/toolkit';

export const initialState = {
  searchValue: localStorage.getItem('pokemonName') || '',
};

const searchSlice = createSlice({
  name: 'search',
  initialState,
  reducers: {
    setSearchValue: (state, { payload: searchValue }) => {
      state.searchValue = searchValue;
      localStorage.setItem('pokemonName', searchValue);
    },
  },
});

export const { actions, reducer } = searchSlice;
