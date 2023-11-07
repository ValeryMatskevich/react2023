import { Link } from 'react-router-dom';
import PokemonCard from '../PokemonCard/PokemonCard';
import classes from './PokemonsList.module.css';
import { Details } from '../../API/GetPokemons';

interface PokemonsListProps {
  data: Details[];
}

function PokemonsList({ data }: PokemonsListProps) {
  if (!data.length) {
    return (
      <div className={classes.errorWrapper}>
        <h1>The name of the Pokemon was entered incorrectly.</h1>
        <p>Try again.</p>
      </div>
    );
  }

  return (
    <ul className={classes.list}>
      {data.map(({ name, sprites }) => (
        <Link to={`/${name}`} key={name}>
          <PokemonCard name={name} img={sprites?.front_default} />
        </Link>
      ))}
    </ul>
  );
}

export default PokemonsList;
