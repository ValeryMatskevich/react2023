import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from 'react-router-dom';
import About from './components/screens/About/About';
import RootLayout from './components/screens/RootLayout';
import Home from './components/screens/Home/Home';
import ErrorBoundary from './components/ErrorBoundary';
import NotFound from './components/screens/NotFound/NotFound';

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
