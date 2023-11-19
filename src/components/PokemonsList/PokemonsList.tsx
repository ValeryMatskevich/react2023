import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import PokemonCard from '../PokemonCard/PokemonCard';
import classes from './PokemonsList.module.css';
import {
  Pokemon,
  usePokemonDetailsQuery,
  usePokemonListQuery,
} from '../../API/api';
import Loader from '../UI/Loader/Loader';
import useActions from '../../hooks/useActions';
import { RootState } from '../../store/store';

function PokemonsList() {
  const { limit, page } = useSelector((state: RootState) => state.pagination);
  const { searchValue } = useSelector((state: RootState) => state.search);
  const { pokemonListLoading } = useSelector(
    (state: RootState) => state.loading
  );
  const { setPokemonListLoading } = useActions();

  const { data: pokemonsData, isLoading: listLoading } = usePokemonListQuery(
    {
      limit,
      offset: (page - 1) * limit,
    },
    {
      skip: Boolean(searchValue),
    }
  );

  const {
    data: pokemonData,
    isLoading: detailsLoading,
    error,
  } = usePokemonDetailsQuery(searchValue, {
    skip: !searchValue,
  });

  const isLoading = listLoading || detailsLoading;

  useEffect(() => {
    setPokemonListLoading(isLoading);
  }, [isLoading, setPokemonListLoading]);

  if (pokemonListLoading) {
    return <Loader />;
  }

  if (error) {
    return (
      <div className={classes.errorWrapper}>
        <h1>The name of the Pokemon was entered incorrectly.</h1>
        <p>Try again.</p>
      </div>
    );
  }

  return (
    <ul className={classes.list}>
      {pokemonData && searchValue && (
        <Link to={`/${pokemonData.name}/details`} data-testid="link">
          <PokemonCard name={pokemonData.name} />
        </Link>
      )}
      {pokemonsData &&
        !searchValue &&
        pokemonsData.results.map((pokemon: Pokemon) => (
          <Link
            to={`/${pokemon.name}/details`}
            key={pokemon.name}
            data-testid="link"
          >
            <PokemonCard name={pokemon.name} />
          </Link>
        ))}
    </ul>
  );
}

export default PokemonsList;
