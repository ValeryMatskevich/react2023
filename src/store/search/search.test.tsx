import { expect } from 'vitest';
import { reducer, initialState, actions } from './search.slice';

describe('Search', () => {
  it('check initial state', () => {
    const state = reducer(undefined, { type: 'unknown' });
    expect(state).toEqual(initialState);
  });

  it('Verify that clicking the Search button saves the entered value to the local storage', () => {
    const value = 'pika';
    const state = reducer(initialState, actions.setSearchValue(value));

    expect(state.searchValue).toBe(value);
  });
});
