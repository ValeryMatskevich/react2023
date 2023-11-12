import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from 'react-router-dom';
import About from './pages/About';
import RootLayout from './pages/RootLayout';
import NotFound from './pages/NotFound';
import Home from './pages/PokemonsPage';
import ErrorBoundary from './components/ErrorBoundary';
import PokemonDetails from './components/PokemonDetails/PokemonDetails';

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<RootLayout />} errorElement={<ErrorBoundary />}>
      <Route path="/" element={<Home />}>
        <Route path="/:id" element={<PokemonDetails />} />
      </Route>

      <Route path="about" element={<About />} />

      <Route path="*" element={<NotFound />} />
    </Route>
  )
);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
