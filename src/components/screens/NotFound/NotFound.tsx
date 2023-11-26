import Link from 'next/link';
import Layout from '@/components/layout/Layout';
import styles from './NotFound.module.css';

export default function NotFound() {
  return (
    <Layout>
      <div className={styles.notFound} data-testid="not-found">
        <h2>Not found</h2>

        <p>
          Go back to <Link href="/">Home page</Link>.
        </p>
      </div>
    </Layout>
  );
}
