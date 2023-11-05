import { useEffect, useState } from 'react';
import getPokemons, { PokemonDetails } from '../API/GetPokemons';
import Loader from './UI/Loader/Loader';

interface Abc {
  id: string;
  onClose: () => void;
}

function PokemonDetailsComponent({ onClose, id }: Abc) {
  const [pokemonDetails, setPokemonDetails] = useState<PokemonDetails[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  async function getPokemon(pokemonName: string) {
    setIsLoading(false);
    try {
      const pokemon = await getPokemons(pokemonName);
      setPokemonDetails(pokemon);
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
    <div>
      <button type="button" onClick={onClose}>
        Закрыть
      </button>
      <p>Height: {pokemonDetails[0].height}</p>
      <p>Weight: {pokemonDetails[0].weight}</p>
    </div>
  );
}

export default PokemonDetailsComponent;
