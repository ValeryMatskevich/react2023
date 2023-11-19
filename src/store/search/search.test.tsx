import { expect } from 'vitest';
import { reducer, initialState, actions } from './search.slice';

describe('Search slice', () => {
  it('check initial state', () => {
    const state = reducer(undefined, { type: 'unknown' });

    expect(state).toEqual(initialState);
  });

  it('check setSearchValue action', () => {
    const value = 'pika';
    console.log('value: ', value);

    const state = reducer(initialState, actions.setSearchValue(value));
    console.log('initialState: ', initialState);
    console.log('state: ', state);

    expect(state.searchValue).toBe(value);
  });
});
