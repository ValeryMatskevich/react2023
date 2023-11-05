import { useState } from 'react';
import Input from '../UI/Input/Input';
import Button from '../UI/Button/Button';
import classes from './SearchForm.module.css';

interface SearchFormProps {
  onSubmit: (value: string) => void;
}

function SearchForm({ onSubmit }: SearchFormProps) {
  const [inputValue, setInputValue] = useState(
    localStorage.getItem('pokemonName') || ''
  );

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(event.target.value);
  };

  function handleSubmit(event: React.SyntheticEvent) {
    event.preventDefault();
    onSubmit(inputValue.toLowerCase());
  }

  return (
    <div className={classes.searchFormWrapper}>
      <form className={classes.searchForm} onSubmit={handleSubmit}>
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
