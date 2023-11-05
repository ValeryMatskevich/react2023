import classes from './PokemonCard.module.css';

export interface PokemonCardProps {
  name: string;
  img?: string;
}

function PokemonCard({ name, img }: PokemonCardProps) {
  return (
    <li className={classes.card}>
      <p className={classes.name}>{name}</p>
      <img className={classes.img} src={img} alt={name} />
    </li>
  );
}

export default PokemonCard;
