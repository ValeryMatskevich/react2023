import { useState } from 'react';
import { useSelector } from 'react-redux';
import classes from './SearchForm.module.css';
import useActions from '../../hooks/useActions';
import { RootState } from '../../store/store';

function SearchForm() {
  const { searchValue } = useSelector((state: RootState) => state.search);
  const { setSearchValue } = useActions();

  const [inputValue, setInputValue] = useState(searchValue);

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(event.target.value.toLowerCase());
  };

  function handleSubmit(event: React.SyntheticEvent) {
    event.preventDefault();
    setSearchValue(inputValue);
  }

  return (
    <div className={classes.searchFormWrapper}>
      <form className={classes.searchForm} onSubmit={handleSubmit}>
        <input
          className={classes.searchInput}
          type="search"
          placeholder="Pokemon name"
          onChange={handleInputChange}
          value={inputValue}
        />
        <button className={classes.searchButton} type="submit">
          🔍
        </button>
      </form>
    </div>
  );
}

export default SearchForm;
