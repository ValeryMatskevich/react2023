import { useNavigate } from 'react-router-dom';
import { useEffect } from 'react';
import Loader from '../UI/Loader/Loader';
import classes from './PokemonDetails.module.css';
import { usePokemonDetailsQuery } from '../../API/api';
import useActions from '../../hooks/useActions';

interface PokemonDetailsProps {
  name: string;
}

function PokemonDetails({ name }: PokemonDetailsProps) {
  const navigate = useNavigate();
  const { data: pokemonDetails, isLoading } = usePokemonDetailsQuery(name);
  const { setPokemonDetailsLoading } = useActions();

  const handleClick = () => {
    navigate('/');
  };

  useEffect(() => {
    setPokemonDetailsLoading(isLoading);
  }, [isLoading, setPokemonDetailsLoading]);

  if (isLoading || !pokemonDetails) {
    return <Loader />;
  }

  return (
    <div className={classes.details} data-testid="details">
      <button
        className={classes.closeButton}
        type="button"
        onClick={handleClick}
      >
        Close
      </button>
      <h2>{pokemonDetails.name}</h2>
      <div className={classes.imgWrapper}>
        <img
          src={pokemonDetails.sprites.other.dream_world.front_default}
          alt={pokemonDetails.name}
        />
      </div>

      <p>Height: {pokemonDetails.height}</p>
      <p>Weight: {pokemonDetails.weight}</p>
    </div>
  );
}

export default PokemonDetails;
