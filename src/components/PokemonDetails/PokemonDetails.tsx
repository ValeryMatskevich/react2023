import { useCallback, useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import getPokemons, { Details } from '../../API/GetPokemons';
import Loader from '../UI/Loader/Loader';
import classes from './PokemonDetails.module.css';

function PokemonDetails() {
  const [pokemonDetails, setPokemonDetails] = useState<Details[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const { id } = useParams();
  const navigate = useNavigate();

  const getPokemon = useCallback(async (pokemonName: string) => {
    setIsLoading(false);
    try {
      const pokemon = await getPokemons(pokemonName);
      setPokemonDetails(pokemon.pokemonDetails);
    } catch (error) {
      setPokemonDetails([]);
    }
  }, []);

  useEffect(() => {
    if (id) {
      getPokemon(id);
    }
  }, [getPokemon, id]);

  const handleClick = () => {
    navigate('/');
  };

  return isLoading || !pokemonDetails.length ? (
    <Loader />
  ) : (
    <div className={classes.details} data-testid="details">
      <button
        className={classes.closeButton}
        type="button"
        onClick={handleClick}
      >
        Close
      </button>
      <h2>{pokemonDetails[0].name}</h2>
      <div className={classes.imgWrapper}>
        <img
          src={pokemonDetails[0].sprites.other.dream_world.front_default}
          alt={pokemonDetails[0].name}
        />
      </div>

      <p>Height: {pokemonDetails[0].height}</p>
      <p>Weight: {pokemonDetails[0].weight}</p>
    </div>
  );
}

export default PokemonDetails;
