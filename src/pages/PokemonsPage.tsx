import { useCallback, useEffect, useMemo, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import getPokemons, { Details } from '../API/GetPokemons';
import SearchForm from '../components/SearchForm/SearchForm';
import Loader from '../components/UI/Loader/Loader';
import PokemonsList from '../components/PokemonsList/PokemonsList';
import PokemonDetails from '../components/PokemonDetails';
import classes from './PokemonsPage.module.css';
import Pagination from '../components/UI/Pagination/Pagination';
import InputContext from '../context/InputContext';
import DataContext from '../context/DataContext';

function PokemonsPage() {
  const [inputValue, setInputValue] = useState(
    localStorage.getItem('pokemonName') || ''
  );
  const [pokemonsData, setPokemonsData] = useState<Details[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [page, setPage] = useState(1);
  const [limit, setLimit] = useState(10);
  const [totalPages, setTotalPages] = useState(0);

  const { id } = useParams();
  const navigate = useNavigate();

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
  }, [inputValue, page, limit, getPokemonsData]);

  const handleClose = () => {
    navigate('/');
  };

  const contextValue = useMemo(
    () => ({
      pokemonsData,
      inputValue,
      setInputValue,
      setPokemonsData,
    }),
    [pokemonsData, inputValue]
  );
  const dataContextValue = useMemo(
    () => ({
      pokemonsData,
      setPokemonsData,
    }),
    [pokemonsData]
  );
  return (
    <>
      <div className={classes.mainWrapper}>
        <InputContext.Provider value={contextValue}>
          <SearchForm />
        </InputContext.Provider>
        {isLoading ? (
          <Loader />
        ) : (
          <div className={classes.contentWrapper}>
            <DataContext.Provider value={dataContextValue}>
              <PokemonsList />
            </DataContext.Provider>

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
    </>
  );
}

export default PokemonsPage;
