import { Outlet } from 'react-router-dom';
import Navbar from '../components/UI/Navbar/Navbar';
import classes from './RootLayout.module.css';
import Logo from '../components/UI/Logo/Logo';

export default function RootLayout() {
  return (
    <>
      <header>
        <Logo />
        <Navbar />
      </header>
      <main className={classes.main}>
        <Outlet />
      </main>
    </>
  );
}
