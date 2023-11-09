import { useContext, useState } from 'react';
import Input from '../UI/Input/Input';
import Button from '../UI/Button/Button';
import classes from './SearchForm.module.css';
import PokemonsPageContext from '../../context/PokemonsPageContext';

// interface SearchFormProps {
//   onSubmit: (value: string) => void;
// }

function SearchForm() {
  console.log('SearchForm is re-rendering');
  const [inputValue, setInputValue] = useState(
    localStorage.getItem('pokemonName') || ''
  );
  const { handleSubmit } = useContext(PokemonsPageContext);

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(event.target.value);
  };

  function handleFormSubmit(event: React.SyntheticEvent) {
    event.preventDefault();
    handleSubmit(inputValue.toLowerCase());
  }

  return (
    <div className={classes.searchFormWrapper}>
      <form className={classes.searchForm} onSubmit={handleFormSubmit}>
        <Input
          type="search"
          placeholder="Pokemon name"
          onChange={handleInputChange}
          value={inputValue}
        />
        <Button text="🔍" />
      </form>
    </div>
  );
}

export default SearchForm;
