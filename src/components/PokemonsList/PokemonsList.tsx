import { useContext } from 'react';
import { Link } from 'react-router-dom';
import PokemonCard from '../PokemonCard/PokemonCard';
import classes from './PokemonsList.module.css';
import PokemonsPageContext from '../../context/PokemonsPageContext';

function PokemonsList() {
  const { pokemonsData } = useContext(PokemonsPageContext);

  if (!pokemonsData.length) {
    return (
      <div className={classes.errorWrapper}>
        <h1>The name of the Pokemon was entered incorrectly.</h1>
        <p>Try again.</p>
      </div>
    );
  }

  return (
    <ul className={classes.list}>
      {pokemonsData.map(({ name, sprites }) => (
        <Link to={`/${name}`} key={name}>
          <PokemonCard name={name} img={sprites?.front_default} />
        </Link>
      ))}
    </ul>
  );
}

export default PokemonsList;
