import { combineReducers, configureStore } from '@reduxjs/toolkit';
import { reducer as formsDataReducer } from './formsSlice';
import { reducer as countryReducer } from './countriesSlice';

export type RootState = ReturnType<typeof store.getState>;

const reducers = combineReducers({
  forms: formsDataReducer,
  country: countryReducer,
});

const store = configureStore({
  reducer: reducers,
});

export default store;
