import { combineReducers, configureStore } from '@reduxjs/toolkit';
import { createWrapper } from 'next-redux-wrapper';
import api, { reducer as apiReducer } from '../API/api';
// import { reducer as paginationReducer } from './pagination/pagination.slice';
// import { reducer as loadingReducer } from './loadingFlags/loadingFlags.slice';
// import { reducer as searchReducer } from './search/search.slice';

// export type RootState = ReturnType<typeof store.getState>;

const reducers = combineReducers({
  // pagination: paginationReducer,
  api: apiReducer,
  // loading: loadingReducer,
  // search: searchReducer,
});

const store = () =>
  configureStore({
    reducer: reducers,
    middleware: (getDefaultMiddleware) =>
      getDefaultMiddleware().concat(api.middleware),
  });

export type AppStore = ReturnType<typeof store>;
export type RootState = ReturnType<AppStore['getState']>;
export type AppDispatch = AppStore['dispatch'];

export const wrapper = createWrapper<AppStore>(store, { debug: true });
export default store;
