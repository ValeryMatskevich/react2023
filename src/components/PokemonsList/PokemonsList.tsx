import PokemonCard from '../PokemonCard/PokemonCard';
import classes from './PokemonsList.module.css';
import { PokemonDetails } from '../../API/GetPokemons';

interface PokemonsListProps {
  data: PokemonDetails[];
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
      {data.map(({ id, name, sprites }) => (
        <PokemonCard
          name={name}
          img={sprites?.front_default}
          key={name}
          id={id}
        />
      ))}
    </ul>
  );
}

export default PokemonsList;
