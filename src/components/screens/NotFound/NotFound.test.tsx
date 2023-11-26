import { render, screen } from '@testing-library/react';
import { MemoryRouter, Route, Routes } from 'react-router-dom';
import { expect } from 'vitest';
import NotFound from './NotFound';

test.skip('Ensure that the 404 page is displayed when navigating to an invalid route', () => {
  render(
    <MemoryRouter initialEntries={['/invalid-route']} initialIndex={0}>
      <Routes>
        <Route path="invalid-route" element={<NotFound />} />
      </Routes>
    </MemoryRouter>
  );
  const page = screen.getByTestId('not-found');
  expect(page).toBeInTheDocument();
});
