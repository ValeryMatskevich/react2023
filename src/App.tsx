import { Component } from 'react';
import PokemonsPage from './components/PokemonsPage';
import ErrorBoundary from './components/ErrorBoundary';

export default class App extends Component {
  render() {
    return (
      <ErrorBoundary>
        <PokemonsPage />
      </ErrorBoundary>
    );
  }
}
