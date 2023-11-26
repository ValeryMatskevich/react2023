import Layout from '@/components/layout/Layout';
import SearchForm from '@/components/SearchForm/SearchForm';
import PokemonsList from '@/components/PokemonsList/PokemonsList';
import Pagination from '@/components/UI/Pagination/Pagination';
import styles from './Home.module.css';

export default function Home() {
  return (
    <Layout>
      <div className={styles.mainWrapper}>
        <SearchForm />
        <div className={styles.contentWrapper}>
          <PokemonsList />
          <Pagination />
        </div>
      </div>
      {/* <>
          <Overlay />
          <PokemonDetails name={id!} />
        </> */}
    </Layout>
  );
}
