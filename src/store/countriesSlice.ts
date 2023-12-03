import { createSlice } from '@reduxjs/toolkit';
import { countries } from '../constants/constants';

const countrySlice = createSlice({
  name: 'countries',
  initialState: {
    countries,
  },
  reducers: {
    setCountries: (state, action) => {
      state.countries = action.payload;
    },
  },
});

export const { actions, reducer } = countrySlice;
