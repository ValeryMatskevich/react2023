import { usePokemonDetailsQuery } from '../../API/api';
import classes from './PokemonCard.module.css';

export interface PokemonCardProps {
  name: string;
}

function PokemonCard({ name }: PokemonCardProps) {
  const { data } = usePokemonDetailsQuery(name);
  const img = data?.sprites?.front_default;

  return (
    <li className={classes.card} data-testid="pokemon-card">
      <p className={classes.name}>{name}</p>
      <img className={classes.img} src={img} alt={name} />
    </li>
  );
}

export default PokemonCard;
