import { combineReducers, configureStore } from '@reduxjs/toolkit';
import { reducer as formsDataReducer } from './forms';

export type RootState = ReturnType<typeof store.getState>;

const reducers = combineReducers({
  forms: formsDataReducer,
});

const store = configureStore({
  reducer: reducers,
});

export default store;
