import Link from 'next/link';
import Image from 'next/image';
import logo from '../../../assets/logo.jpg';
import styles from './Logo.module.css';

function Logo() {
  return (
    <Link href="/">
      <div className={styles.logo}>
        <Image src={logo} alt="Logo" />
      </div>
    </Link>
  );
}

export default Logo;
