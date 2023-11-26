import { useState, SyntheticEvent, ChangeEvent } from 'react';
import { useRouter } from 'next/router';
import classes from './SearchForm.module.css';

function SearchForm() {
  // const { searchValue } = useSelector((state: RootState) => state.search);
  // const { setSearchValue } = useActions();
  const router = useRouter();

  const [inputValue, setInputValue] = useState('');

  const handleInputChange = (event: ChangeEvent<HTMLInputElement>) => {
    setInputValue(event.target.value.toLowerCase());
  };

  function handleSubmit(event: SyntheticEvent) {
    event.preventDefault();
    router.push(`/?name=${inputValue}&details=0`);
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
