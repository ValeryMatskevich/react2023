import { useEffect } from 'react';
import { useRouter } from 'next/router';
import Layout from '@/components/layout/Layout';
import SearchForm from '@/components/SearchForm/SearchForm';
import PokemonsList from '@/components/PokemonsList/PokemonsList';
import Pagination from '@/components/UI/Pagination/Pagination';
import Overlay from '@/components/UI/Overlay/Overlay';
import PokemonDetails from '@/components/PokemonDetails/PokemonDetails';
import styles from './Home.module.css';

export default function Home() {
  const router = useRouter();
  const { page, limit, details } = router.query;

  useEffect(() => {
    if (!page || !limit) {
      router.push({
        pathname: router.pathname,
        query: { page: '1', limit: '10', details: '0' },
      });
    }
  }, []);

  console.log('details: ', details);
  return (
    <Layout>
      <div className={styles.mainWrapper}>
        <SearchForm />
        <div className={styles.contentWrapper}>
          <PokemonsList />
          <Pagination />
        </div>
      </div>
      {details !== '0' && details !== undefined && (
        <>
          <Overlay />
          <PokemonDetails name={details as string} />
        </>
      )}
    </Layout>
  );
}
