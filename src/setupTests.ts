/* eslint-disable import/no-extraneous-dependencies */
import '@testing-library/jest-dom';
import { afterAll, beforeAll } from 'vitest';
import server from './server/server';

beforeAll(() => server.listen());
afterEach(() => server.resetHandlers());
afterAll(() => server.close());
