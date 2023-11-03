import { useState } from 'react';
import classes from './ErrorButton.module.css';
import pokeballImg from '../../../assets/Pokeball.png';

function ErrorButton() {
  const [hasError, setHasError] = useState(false);

  function toggleError() {
    setHasError(true);
  }

  if (hasError) {
    throw new Error('This is a test error.');
  }

  return (
    <button type="button" className={classes.errorBtn} onClick={toggleError}>
      <p className="errorMessage">Error</p>
      <img src={pokeballImg} alt="Pokemon" className="pokemon-image" />
    </button>
  );
}

export default ErrorButton;
