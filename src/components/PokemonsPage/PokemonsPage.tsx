import { useEffect, useState } from 'react';
import Header from '../Header/Header';
import Main from '../Main/Main';
import Loader from '../UI/Loader/Loader';
import ErrorButton from '../UI/ErrorButton/ErrorButton';
import getPokemons, { PokemonDetails } from '../../API/GetPokemons';

function PokemonsPage() {
  const [isLoading, setIsLoading] = useState(true);
  const [pokemonsData, setPokemonsData] = useState<PokemonDetails[]>([]);
  const [inputValue, setinputValue] = useState(
    localStorage.getItem('pokemonName') || ''
  );

  const handleSubmit = (pokemonName: string) => {
    localStorage.setItem('pokemonName', pokemonName);
    setinputValue(pokemonName);
  };

  async function getPokemonsData(pokemonName: string) {
    setIsLoading(false);
    try {
      const cards = await getPokemons(pokemonName);
      setPokemonsData(cards);
    } catch (error) {
      setPokemonsData([]);
    }
  }

  useEffect(() => {
    getPokemonsData(inputValue);
  }, [inputValue]);

  return (
    <>
      <ErrorButton />
      <Header onSubmit={handleSubmit} />
      {isLoading ? <Loader /> : <Main data={pokemonsData} />}
    </>
  );
}

export default PokemonsPage;
