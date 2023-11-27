import { Outlet } from 'react-router-dom';
import Navbar from '../UI/Navbar/Navbar';
import classes from './RootLayout.module.css';
import Logo from '../UI/Logo/Logo';

export default function RootLayout() {
  return (
    <>
      <header className={classes.header}>
        <Logo />
        <Navbar />
      </header>
      <main className={classes.main}>
        <Outlet />
      </main>
    </>
  );
}
