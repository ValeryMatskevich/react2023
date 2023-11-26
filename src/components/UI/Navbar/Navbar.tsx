import Link from 'next/link';
import { useRouter } from 'next/router';
import styles from './Navbar.module.css';

export default function Navbar() {
  const { pathname } = useRouter();
  return (
    <nav className={styles.nav}>
      <Link href="/" className={pathname === '/' ? styles.active : ''}>
        Home
      </Link>
      <Link
        href="/about"
        className={pathname === '/about' ? styles.active : ''}
      >
        About
      </Link>
    </nav>
  );
}
