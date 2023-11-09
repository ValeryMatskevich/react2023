import { useCallback, useEffect, useMemo, useState } from 'react';
import { useNavigate, useParams, useSearchParams } from 'react-router-dom';
import getPokemons, { Details } from '../API/GetPokemons';
import SearchForm from '../components/SearchForm/SearchForm';
import Loader from '../components/UI/Loader/Loader';
// import ErrorButton from '../components/UI/ErrorButton/ErrorButton';
import PokemonsList from '../components/PokemonsList/PokemonsList';
import PokemonDetails from '../components/PokemonDetails';
import classes from './PokemonsPage.module.css';
import Pagination from '../components/UI/Pagination/Pagination';
import PokemonsPageContext from '../context/PokemonsPageContext';

function PokemonsPage() {
  console.log('PokemonsPage is re-rendering');
  const [isLoading, setIsLoading] = useState(true);
  const [pokemonsData, setPokemonsData] = useState<Details[]>([]);
  const [page, setPage] = useState(1);
  const [limit, setLimit] = useState(10);
  const [totalPages, setTotalPages] = useState(0);
  const [inputValue, setInputValue] = useState(
    localStorage.getItem('pokemonName') || ''
  );
  const [, setSearchParams] = useSearchParams();

  const { id } = useParams();
  const navigate = useNavigate();

  const handleSubmit = useCallback(
    (pokemonName: string) => {
      localStorage.setItem('pokemonName', pokemonName);
      setInputValue(pokemonName);
      setSearchParams(`?pokemon=${pokemonName}`);
    },
    [setInputValue, setSearchParams]
  );

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

  const handleClose = useCallback(() => {
    navigate('/');
  }, [navigate]);

  const contextValue = useMemo(
    () => ({
      pokemonsData,
      handleSubmit,
      page,
      setPage,
      limit,
      totalPages,
      handleClose,
    }),
    [pokemonsData, handleSubmit, page, setPage, limit, totalPages, handleClose]
  );
  return (
    <PokemonsPageContext.Provider value={contextValue}>
      <div className={classes.mainWrapper}>
        <SearchForm />
        {isLoading ? (
          <Loader />
        ) : (
          <div className={classes.contentWrapper}>
            <PokemonsList data={pokemonsData} />
            {!inputValue && (
              <Pagination
                setPage={setPage}
                page={page}
                setLimit={setLimit}
                limit={limit}
                totalPages={totalPages}
              />
            )}
          </div>
        )}
      </div>
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
          <PokemonDetails id={id} onClose={handleClose} />
        </>
      )}
    </PokemonsPageContext.Provider>
  );
}

export default PokemonsPage;
