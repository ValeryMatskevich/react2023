/* eslint-disable @typescript-eslint/no-explicit-any */
import { useParams } from 'react-router-dom';
import { useSelector } from 'react-redux';
import SearchForm from '../components/SearchForm/SearchForm';
import PokemonsList from '../components/PokemonsList/PokemonsList';
import classes from './PokemonsPage.module.css';
import Overlay from '../components/UI/Overlay/Overlay';
import Pagination from '../components/UI/Pagination/Pagination';
import PokemonDetails from '../components/PokemonDetails/PokemonDetails';

function PokemonsPage() {
  const { searchValue } = useSelector((state: any) => state.search);
  const { id } = useParams();

  return (
    <>
      <div className={classes.mainWrapper}>
        <SearchForm />
        <div className={classes.contentWrapper}>
          <PokemonsList />
          {!searchValue && <Pagination />}
        </div>
      </div>
      {id && (
        <>
          <Overlay />
          <PokemonDetails name={id} />
        </>
      )}
    </>
  );
}

export default PokemonsPage;
