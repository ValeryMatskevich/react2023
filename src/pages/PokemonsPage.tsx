import { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import getPokemons, { PokemonDetails } from '../API/GetPokemons';
import SearchForm from '../components/SearchForm/SearchForm';
import Loader from '../components/UI/Loader/Loader';
import ErrorButton from '../components/UI/ErrorButton/ErrorButton';
import PokemonsList from '../components/PokemonsList/PokemonsList';
import PokemonDetailsComponent from '../components/PokemonDetailsComponent';
import classes from './PokemonsPage.module.css';

function PokemonsPage() {
  const [isLoading, setIsLoading] = useState(true);
  const [pokemonsData, setPokemonsData] = useState<PokemonDetails[]>([]);
  const [inputValue, setinputValue] = useState(
    localStorage.getItem('pokemonName') || ''
  );

  const { id } = useParams();
  const navigate = useNavigate();

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

  const handleClose = () => {
    navigate('/');
  };

  return (
    <>
      <ErrorButton />
      <SearchForm onSubmit={handleSubmit} />
      {isLoading ? (
        <Loader />
      ) : (
        <div className={classes.wrapper}>
          <PokemonsList data={pokemonsData} />
          {id && (
            <>
              <div
                className={classes.hidden}
                onClick={handleClose}
                onKeyDown={handleClose}
                role="button"
                tabIndex={0}
                aria-label="overlay"
              />
              <PokemonDetailsComponent id={id} onClose={handleClose} />
            </>
          )}
        </div>
      )}
    </>
  );
}

export default PokemonsPage;
