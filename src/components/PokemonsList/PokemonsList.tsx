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
  const router = useRouter();
  const { page, limit, name } = router.query;

  const { data: pokemonsData } = usePokemonListQuery(
    {
      limit: limit as string,
      offset: ((Number(page) - 1) * Number(limit)).toString(),
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
        <Link
          href={{
            pathname: router.pathname,
            query: { ...router.query, details: pokemonData.name },
          }}
          data-testid="link"
        >
          <PokemonCard name={pokemonData.name} />
        </Link>
      )}
      {pokemonsData &&
        !name &&
        pokemonsData.results.map((pokemon: Pokemon) => (
          <Link
            href={{
              pathname: router.pathname,
              query: { ...router.query, details: pokemon.name },
            }}
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
