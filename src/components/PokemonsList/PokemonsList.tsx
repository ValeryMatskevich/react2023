import { useRouter } from 'next/router';
import Link from 'next/link';
import PokemonCard from '../PokemonCard/PokemonCard';
import {
  Pokemon,
  usePokemonDetailsQuery,
  usePokemonListQuery,
} from '../../API/api';
import classes from './PokemonsList.module.css';

function PokemonsList() {
  // const { limit, page } = useSelector((state: RootState) => state.pagination);
  // const { searchValue } = useSelector((state: RootState) => state.search);
  // const { pokemonListLoading } = useSelector(
  //   (state: RootState) => state.loading
  // );
  const router = useRouter();

  const { limit, name, offset, page } = router.query;

  // const { page } = router.pathname;

  const { data: pokemonsData } = usePokemonListQuery(
    {
      limit: limit as string,
      offset: offset as string,
      page: page as string,
      // offset: (page - 1) * limit,
    },
    {
      skip: Boolean(name),
    }
  );

  const { data: pokemonData, error } = usePokemonDetailsQuery(name as string, {
    skip: !name,
  });

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
      {pokemonData && name && (
        <Link href={`/${pokemonData.name}/details`} data-testid="link">
          <PokemonCard name={pokemonData.name} />
        </Link>
      )}
      {pokemonsData &&
        !name &&
        pokemonsData.results.map((pokemon: Pokemon) => (
          <Link
            href={`/${pokemon.name}/details`}
            key={pokemon.name}
            data-testid="link"
          >
            <PokemonCard name={pokemon.name} key={pokemon.name} />
          </Link>
        ))}
    </ul>
  );
}

export default PokemonsList;
