import { useContext, useEffect, useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import Input from '../UI/Input/Input';
import Button from '../UI/Button/Button';
import classes from './SearchForm.module.css';
import PokemonsPageContext from '../../context/InputContext';

function SearchForm() {
  const { inputValue, setInputValue } = useContext(PokemonsPageContext);
  const [searchValue, setSearchValue] = useState(inputValue);
  const [, setSearchParams] = useSearchParams();

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchValue(event.target.value.toLowerCase());
  };

  function handleSubmit(event: React.SyntheticEvent) {
    event.preventDefault();
    localStorage.setItem('pokemonName', searchValue);
    setInputValue(searchValue);
    setSearchParams(`?pokemon=${searchValue}`);
  }

  useEffect(() => {
    setSearchParams(`?pokemon=${inputValue}`);
  }, [setSearchParams, inputValue]);

  return (
    <div className={classes.searchFormWrapper}>
      <form className={classes.searchForm} onSubmit={handleSubmit}>
        <Input
          type="search"
          placeholder="Pokemon name"
          onChange={handleInputChange}
          value={searchValue}
        />
        <Button text="🔍" />
      </form>
    </div>
  );
}

export default SearchForm;
