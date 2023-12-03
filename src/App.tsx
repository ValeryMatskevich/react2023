import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from 'react-router-dom';
import NotFound from './pages/NotFound/NotFound';
import RootLayout from './components/RootLayout';
import Home from './pages/Home/Home';
import Controlled from './pages/Controlled/Controlled';

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<RootLayout />}>
      <Route path="/" element={<Home />} />
      <Route path="/controlled" element={<Controlled />} />
      <Route path="/uncontrolled" element={<Controlled />} />
      <Route path="*" element={<NotFound />} />
    </Route>
  )
);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
