import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from 'react-router-dom';
import About from './pages/About';
import RootLayout from './pages/RootLayout';
import Home from './pages/PokemonsPage';
import ErrorBoundary from './components/ErrorBoundary';
import NotFound from './pages/NotFound';

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<RootLayout />} errorElement={<ErrorBoundary />}>
      <Route index element={<Home />} />
      <Route path="/:id/details" element={<Home />} />
      <Route path="about" element={<About />} />

      <Route path="*" element={<NotFound />} />
    </Route>
  )
);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
