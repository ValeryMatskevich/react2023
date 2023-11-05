import { useEffect, useState } from 'react';
import getPokemons, { PokemonDetails } from '../API/GetPokemons';
import Loader from './UI/Loader/Loader';
import classes from './PokemonDetailsComponent.module.css';

interface PokemonDetailsProps {
  id: string;
  onClose: () => void;
}

function PokemonDetailsComponent({ onClose, id }: PokemonDetailsProps) {
  const [pokemonDetails, setPokemonDetails] = useState<PokemonDetails[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  async function getPokemon(pokemonName: string) {
    setIsLoading(false);
    try {
      const pokemon = await getPokemons(pokemonName);
      setPokemonDetails(pokemon.pokemonDetails);
    } catch (error) {
      setPokemonDetails([]);
    }
  }

  useEffect(() => {
    getPokemon(id);
  }, [id]);

  return isLoading || !pokemonDetails.length ? (
    <Loader />
  ) : (
    <div className={classes.details}>
      <button className={classes.closeButton} type="button" onClick={onClose}>
        Закрыть
      </button>
      <h2>{pokemonDetails[0].name}</h2>
      <img
        src={pokemonDetails[0].sprites.other.dream_world.front_default}
        alt={pokemonDetails[0].name}
      />

      <p>Height: {pokemonDetails[0].height}</p>
      <p>Weight: {pokemonDetails[0].weight}</p>
    </div>
  );
}

export default PokemonDetailsComponent;
