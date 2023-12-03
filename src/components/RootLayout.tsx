import { Outlet } from 'react-router-dom';
import Navbar from './UI/Navbar/Navbar';
import styles from './RootLayout.module.css';

export default function RootLayout() {
  return (
    <>
      <header>
        <Navbar />
      </header>
      <main className={styles.main}>
        <Outlet />
      </main>
    </>
  );
}
