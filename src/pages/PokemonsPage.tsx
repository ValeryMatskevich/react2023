import { useParams, useMatch } from 'react-router-dom';
import { useSelector } from 'react-redux';
import SearchForm from '../components/SearchForm/SearchForm';
import PokemonsList from '../components/PokemonsList/PokemonsList';
import classes from './PokemonsPage.module.css';
import Overlay from '../components/UI/Overlay/Overlay';
import Pagination from '../components/UI/Pagination/Pagination';
import PokemonDetails from '../components/PokemonDetails/PokemonDetails';
import { RootState } from '../store/store';

function PokemonsPage() {
  const { searchValue } = useSelector((state: RootState) => state.search);
  const { id } = useParams();
  const match = useMatch('/:id/details');

  return (
    <>
      <div className={classes.mainWrapper}>
        <SearchForm />
        <div className={classes.contentWrapper}>
          <PokemonsList />
          {!searchValue && <Pagination />}
        </div>
      </div>
      {match && Boolean(id) && (
        <>
          <Overlay />
          <PokemonDetails name={id!} />
        </>
      )}
    </>
  );
}

export default PokemonsPage;
