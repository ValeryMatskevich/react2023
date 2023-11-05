import { Outlet } from 'react-router-dom';
import Navbar from '../components/UI/Navbar/Navbar';
import classes from './RootPage.module.css';

export default function RootLayout() {
  return (
    <>
      <header>
        <Navbar />
      </header>
      <main className={classes.main}>
        <Outlet />
      </main>
    </>
  );
}
