import { useEffect, useState } from 'react';
import Header from '../Header/Header';
import Main from '../Main/Main';
import Loader from '../UI/Loader/Loader';
import ErrorButton from '../UI/ErrorButton/ErrorButton';
import getPokemons, { PokemonDetails } from '../API/data';

function PokemonsPage() {
  const [isLoading, setIsLoading] = useState(true);
  const [pokemonData, setPokemonData] = useState<PokemonDetails[]>([]);
  const [inputValue, setinputValue] = useState(
    localStorage.getItem('pokemonName') || ''
  );

  const handleSubmit = async (pokemonName: string) => {
    localStorage.setItem('pokemonName', pokemonName);
    setIsLoading(false);
    try {
      const cards = await getPokemons(pokemonName);
      setPokemonData(cards);
      setinputValue(pokemonName);
    } catch (error) {
      setPokemonData([]);
    }
  };

  useEffect(() => {
    handleSubmit(inputValue);
  }, []);

  return (
    <>
      <ErrorButton />
      <Header onSubmit={handleSubmit} />
      {isLoading ? <Loader /> : <Main data={pokemonData} />}
    </>
  );
}

export default PokemonsPage;
