import {
  act,
  fireEvent,
  render,
  screen,
  waitFor,
} from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import { expect } from 'vitest';
import Pagination from './Pagination';
import store from '../../../store/store';

describe('Pagination', () => {
  test('Component updates URL query parameter when page changes', async () => {
    render(
      <Provider store={store}>
        <BrowserRouter>
          <Pagination />
        </BrowserRouter>
      </Provider>
    );

    await waitFor(async () => {
      const nextButton = screen.getByTestId('next');
      await act(() => fireEvent.click(nextButton));
    });

    expect(window.location.search).toEqual('?page=2');

    await waitFor(async () => {
      const previousButton = screen.getByTestId('previous');
      await act(() => fireEvent.click(previousButton));
    });

    expect(window.location.search).toEqual('?page=1');
  });
});
