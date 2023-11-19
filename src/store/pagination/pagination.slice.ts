/* eslint-disable no-param-reassign */
import { createSlice } from '@reduxjs/toolkit';

const paginationSlice = createSlice({
  name: 'pagination',
  initialState: {
    limit: 10,
    page: 1,
  },
  reducers: {
    setLimit: (state, { payload: limit }) => {
      state.limit = limit;
    },
    setPage: (state, { payload: page }) => {
      state.page = page;
    },
  },
});

export const { actions, reducer } = paginationSlice;
