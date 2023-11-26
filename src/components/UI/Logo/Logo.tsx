import Link from 'next/link';
import { useRouter } from 'next/router';
import Image from 'next/image';
import logo from '../../../assets/logo.jpg';
import styles from './Logo.module.css';

function Logo() {
  const router = useRouter();
  const { limit } = router.query;
  return (
    <Link
      href={{
        pathname: '/',
        query: { page: '1', limit: limit as string, details: '0' },
      }}
    >
      <div className={styles.logo}>
        <Image src={logo} alt="Logo" width={60} height={60} />
      </div>
    </Link>
  );
}

export default Logo;
