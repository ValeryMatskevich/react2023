import { useCallback, useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import getPokemons, { PokemonDetails } from '../API/GetPokemons';
import SearchForm from '../components/SearchForm/SearchForm';
import Loader from '../components/UI/Loader/Loader';
import ErrorButton from '../components/UI/ErrorButton/ErrorButton';
import PokemonsList from '../components/PokemonsList/PokemonsList';
import PokemonDetailsComponent from '../components/PokemonDetailsComponent';
import classes from './PokemonsPage.module.css';
import Pagination from '../components/UI/Pagination/Pagination';

function PokemonsPage() {
  const [isLoading, setIsLoading] = useState(true);
  const [pokemonsData, setPokemonsData] = useState<PokemonDetails[]>([]);
  const [page, setPage] = useState(1);
  const [limit, setLimit] = useState(5);
  const [totalPages, setTotalPages] = useState(0);
  const [inputValue, setinputValue] = useState(
    localStorage.getItem('pokemonName') || ''
  );

  const { id } = useParams();
  const navigate = useNavigate();

  const handleSubmit = (pokemonName: string) => {
    localStorage.setItem('pokemonName', pokemonName);
    setinputValue(pokemonName);
  };

  const getPokemonsData = useCallback(
    async (pokemonName: string, pageValue: number, limitValue: number) => {
      setIsLoading(false);
      try {
        const cards = await getPokemons(pokemonName, pageValue, limitValue);
        setPokemonsData(cards.pokemonDetails);
        if (cards.count) setTotalPages(Math.ceil(cards.count / limit));
      } catch (error) {
        setPokemonsData([]);
      }
    },
    [limit]
  );

  useEffect(() => {
    getPokemonsData(inputValue, page, limit);
  }, [getPokemonsData, inputValue, page, limit]);

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
        <div className={classes.contentWrapper}>
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
          <Pagination
            setPage={setPage}
            page={page}
            setLimit={setLimit}
            limit={limit}
            totalPages={totalPages}
          />
        </div>
      )}
    </>
  );
}

export default PokemonsPage;
