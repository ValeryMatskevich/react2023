import PokemonsPage from './components/PokemonsPage/PokemonsPage';
import ErrorBoundary from './components/ErrorBoundary';

function App() {
  return (
    <ErrorBoundary>
      <PokemonsPage />
    </ErrorBoundary>
  );
}

export default App;
