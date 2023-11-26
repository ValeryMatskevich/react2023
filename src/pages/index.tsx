/* eslint-disable prefer-destructuring */
import { wrapper } from '@/store/store';
import { GetServerSideProps } from 'next';
import { getRunningQueriesThunk, pokemonDetails, pokemonList } from '@/API/api';
import Home from '@/components/screens/Home/Home';

export default function HomePage() {
  return <Home />;
}

export const getServerSideProps: GetServerSideProps =
  wrapper.getServerSideProps((store) => async (context) => {
    const offset = context.query.offset || '0';
    const limit = context.query.limit || '10';
    const name = context.params?.name || '';

    await store.dispatch(
      pokemonList.initiate({
        offset: offset as string,
        limit: limit as string,
      })
    );
    if (name) {
      await store.dispatch(pokemonDetails.initiate(name as string));
    }

    await Promise.all(store.dispatch(getRunningQueriesThunk()));

    return {
      props: {},
    };
  });
