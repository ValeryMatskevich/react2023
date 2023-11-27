import { useRouter } from 'next/router';
import { usePokemonDetailsQuery } from '../../API/api';
import classes from './PokemonDetails.module.css';
import Loader from '../UI/Loader/Loader';

interface PokemonDetailsProps {
  name: string;
}

function PokemonDetails({ name }: PokemonDetailsProps) {
  const router = useRouter();
  const { data: pokemonDetails } = usePokemonDetailsQuery(name);

  if (!pokemonDetails) {
    return <Loader />;
  }
  const img = pokemonDetails?.sprites?.other.dream_world.front_default;
  console.log('img: ', img);

  console.log('asdasda: ', pokemonDetails);
  return (
    <div className={classes.details} data-testid="details">
      <button
        className={classes.closeButton}
        type="button"
        onClick={() => {
          router.push({
            pathname: router.pathname,
            query: { ...router.query, details: '0' },
          });
        }}
        data-testid="close"
      >
        Close
      </button>
      <h2>{pokemonDetails.name}</h2>
      <div className={classes.imgWrapper}>
        <img src={img} alt={pokemonDetails.name} />
      </div>

      <p>Height: {pokemonDetails.height}</p>
      <p>Weight: {pokemonDetails.weight}</p>
    </div>
  );
}

export default PokemonDetails;
